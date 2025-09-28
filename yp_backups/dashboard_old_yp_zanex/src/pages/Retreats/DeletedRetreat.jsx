import React, { useEffect, useState, useCallback } from "react";
import { Breadcrumb, Card, Col, Row, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { API } from "../../context/API";
import Swal from "sweetalert2";
import ALLImages from "../../common/Imagesdata";
import DataTableSkeleton from "../../components/Skeletons/DataTableSkeleton";

export default function SoftDeletedRetreat() {
  const navigator = useNavigate();
  const [retreats, setRetreats] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredRetreats, setFilteredRetreats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authUser, setAuthUser] = useState("");
  const [authLoading, setAuthLoading] = useState(true);

  const getAuhtUser = async () => {
    setAuthLoading(true);
    try {
      const response = await API.get(`/profile`);
      setAuthUser(response.data);
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    } finally {
      setAuthLoading(false);
    }
  };

  useEffect(() => {
    getAuhtUser();
  }, []);

  if (!authLoading) {
    if (
      !authUser?.permissions?.some((item) => item === "Read Deleted Course")
    ) {
      navigator("/dashboard/access-denied");
    }
  }

  const getRetreat = useCallback(async () => {
    setLoading(true);
    try {
      const response = await API.get("/retreat");
      const data = response.data;
      const finalData = data.filter((item) => item?.isDeleted === true);
      setRetreats(finalData);
      setFilteredRetreats(finalData);
    } catch (error) {
      console.error("Error fetching retreats:", error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getRetreat();
  }, [getRetreat]);

  useEffect(() => {
    if (retreats) {
      setFilteredRetreats(
        retreats.filter((item) =>
          Object.values(item).some((value) =>
            value?.toString().toLowerCase().includes(search.toLowerCase())
          )
        )
      );
    }
  }, [search, retreats]);

  const restore = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to restore this retreat?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, restore it!",
    });

    if (result.isConfirmed) {
      try {
        const response = await API.get(`/retreat/restore/${id}`);
        Swal.fire(
          "Restored!",
          response?.data?.message || "Retreat has been restored.",
          "success"
        );
        getRetreat();
      } catch (error) {
        Swal.fire(
          "Error",
          error.response?.data?.error || "Failed to restore retreat!",
          "error"
        );
      }
    }
  };

  const columns = [
    {
      name: "Retreat Name",
      selector: (row) => row.retreat_name,
      sortable: true,
      cell: (row) => row.retreat_name,
    },
    {
      name: "Retreat Short Name",
      selector: (row) => row.retreat_short_name,
      sortable: true,
      cell: (row) => row.retreat_short_name,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
      cell: (row) => (
        <span
          className={`badge ${
            row.status === "Active"
              ? "bg-success"
              : row.status === "Suspended" || row.status === "Deleted"
              ? "bg-danger"
              : "bg-warning"
          }`}
        >
          {row.status}
        </span>
      ),
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="d-flex gap-1">
          {!authLoading && (
            <>
              {authUser?.permissions?.some(
                (item) => item === "Read Deleted Course"
              ) && (
                <Link
                  to={`/dashboard/retreat/view/${row._id}`}
                  className="btn btn-primary btn-sm"
                >
                  <i className="fe fe-eye"></i>
                </Link>
              )}
              {authUser?.permissions?.some(
                (item) => item === "Restore Deleted Course"
              ) && (
                <Button
                  variant="success"
                  size="sm"
                  onClick={() => restore(row._id)}
                >
                  <i className="fe fe-rotate-ccw"></i>
                </Button>
              )}
            </>
          )}
        </div>
      ),
      ignoreRowClick: true,
    },
  ];

  return (
    <div>
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <div>
          <h1 className="page-title fw-semibold fs-20 mb-0">Retreats</h1>
          <Breadcrumb className="mb-0">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard" }}>
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Retreats</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ms-auto pageheader-btn">
          <Button variant="primary" onClick={() => navigator(-1)}>
            <i className="fe fe-arrow-left"></i> Back
          </Button>
        </div>
      </div>

      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header className="d-flex justify-content-between py-3">
              <h5 className="mb-0">Retreats List</h5>
              {!authLoading &&
                authUser?.permissions?.some(
                  (item) => item === "Create Course"
                ) && (
                  <Link
                    to={`/dashboard/retreat/create`}
                    className="btn btn-primary btn-sm"
                  >
                    <i className="fe fe-cpu me-1"></i>Create Retreat
                  </Link>
                )}
            </Card.Header>
            {!loading ? (
              <Card.Body>
                {/* Search Bar */}
                <Row className="mb-3">
                  <Col lg={4}>
                    <div className="position-relative">
                      <span className="position-absolute top-50 start-0 translate-middle-y ps-3">
                        <i className="fe fe-search text-primary"></i>
                      </span>
                      <Form.Control
                        type="text"
                        placeholder="Search retreat"
                        value={search}
                        className="ps-5 border-bottom border-0 border-primary rounded-0"
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>

                <DataTable
                  columns={columns}
                  data={loading ? Array(10).fill({}) : filteredRetreats}
                  pagination
                  highlightOnHover
                  responsive
                  striped
                />
              </Card.Body>
            ) : (
              <DataTableSkeleton />
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
}
