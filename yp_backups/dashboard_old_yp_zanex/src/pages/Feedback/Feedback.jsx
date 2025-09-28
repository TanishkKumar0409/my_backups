import React, { useEffect, useState, useCallback } from "react";
import { Breadcrumb, Card, Col, Row, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { API } from "../../context/API";
import Swal from "sweetalert2";
import DataTableSkeleton from "../../components/Skeletons/DataTableSkeleton";

export default function Feedback() {
  const navigator = useNavigate();
  const [feedbacks, setFeedbacks] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredFeedbacks, setFilterdFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allusers, setAllUsers] = useState([]);

  const getAllUsers = useCallback(async () => {
    try {
      const response = await API.get(`/users`);
      setAllUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  const getUserById = (id) => {
    const user = allusers.find((item) => item.uniqueId === id);
    return user;
  };

  const getFeedbacks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await API.get("/feedback");
      setFeedbacks(response.data);
      setFilterdFeedbacks(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching Feedback:", error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getFeedbacks();
  }, [getFeedbacks]);

  useEffect(() => {
    if (feedbacks) {
      setFilterdFeedbacks(
        feedbacks.filter((item) =>
          Object.values(item).some((value) =>
            value?.toString().toLowerCase().includes(search.toLowerCase())
          )
        )
      );
    }
  }, [search, feedbacks]);

  const deleteFeedback = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const response = await API.delete(`/feedback/${id}`);
        Swal.fire(
          "Deleted!",
          response?.data?.message || "feedback removed.",
          "success"
        );
        getFeedbacks();
      } catch (error) {
        console.log(error);
        Swal.fire(
          "Error",
          error.response?.data?.error || "Failed to delete!",
          "error"
        );
      }
    }
  };

  const columns = [
    {
      name: "User",
      selector: (row) => getUserById(row?.userId).name,
      sortable: true,
      cell: (row) => getUserById(row?.userId).name,
    },
    {
      name: "Reaction",
      selector: (row) => row?.reaction,
      sortable: true,
      cell: (row) => row?.reaction,
    },
    {
      name: "Status",
      selector: (row) => row?.reaction,
      sortable: true,
      cell: (row) => (
        <span
          className={`badge ${
            row?.status === "Active"
              ? "bg-success"
              : row?.status === "Suspended"
              ? "bg-danger"
              : "bg-warning"
          }`}
        >
          {row?.status}
        </span>
      ),
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="d-flex gap-1">
          <>
            <Link
              to={`/dashboard/feedback/view/${row?._id}`}
              className="btn btn-primary btn-sm"
            >
              <i className="fe fe-eye"></i>
            </Link>
            <Button
              variant="danger"
              size="sm"
              onClick={() => deleteFeedback(row?._id)}
            >
              <i className="fe fe-trash-2"></i>
            </Button>
          </>
        </div>
      ),
      ignoreRowClick: true,
    },
  ];

  return (
    <div>
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <div>
          <h1 className="page-title fw-semibold fs-20 mb-0">Feedback</h1>
          <Breadcrumb className="mb-0">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard" }}>
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Feedback</Breadcrumb.Item>
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
              <h5 className="mb-0">Feedback List</h5>
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
                        placeholder="Search Feedback"
                        value={search}
                        className="ps-5 border-bottom border-0 border-primary rounded-0"
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>

                <DataTable
                  columns={columns}
                  data={loading ? Array(10).fill({}) : filteredFeedbacks}
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
