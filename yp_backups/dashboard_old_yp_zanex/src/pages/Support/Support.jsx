import React, { useCallback, useEffect, useState } from "react";
import { Card, Col, Row, Button, Spinner, Breadcrumb } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../context/API";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import EditStatusModal from "./EditStatusModal";

export default function SupportDashboard() {
  const navigator = useNavigate();
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [authUser, setAuthUser] = useState("");
  const [authLoading, setAuthLoading] = useState(true);
  const [users, setUsers] = useState([]);

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [selectedQuery, setSelectedQuery] = useState(null);

  const getUsers = useCallback(async () => {
    try {
      const response = await API.get(`/users`);
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const getUserById = (id) => {
    const found = users.find((item) => Number(item.uniqueId) === Number(id));
    return found;
  };

  const getAuthUser = useCallback(async () => {
    setAuthLoading(true);
    try {
      const response = await API.get(`/profile`);
      setAuthUser(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setAuthLoading(false);
    }
  }, []);

  useEffect(() => {
    getAuthUser();
  }, [getAuthUser]);

  const fetchQueries = async () => {
    try {
      setLoading(true);

      if (
        !authLoading &&
        authUser?.role !== "Super Admin" &&
        authUser?.role !== "Editor"
      ) {
        const res = await API.get(`/support/${authUser?.uniqueId}`);
        setQueries(Array.isArray(res.data) ? res.data : []);
      } else {
        const res = await API.get(`/support`);
        setQueries(Array.isArray(res.data) ? res.data : []);
      }
    } catch (err) {
      console.error("Error fetching queries:", err);
      setQueries([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authUser?.uniqueId) fetchQueries();
  }, [authUser]);

  const handleEditStatus = (query) => {
    setSelectedQuery(query);
    setShowModal(true);
  };

  const handleStatusUpdated = () => {
    setShowModal(false);
    setSelectedQuery(null);
    fetchQueries(); // refresh data after update
  };

  // Columns for DataTable
  const columns = [
    {
      name: "#",
      selector: (row, index) => index + 1,
      width: "60px",
    },
    {
      name: "User",
      selector: (row) => getUserById(row.userId)?.name,
      sortable: true,
    },
    {
      name: "Subject",
      selector: (row) => row.subject,
      sortable: true,
    },
    {
      name: "Status",
      cell: (row) => (
        <div className="d-flex align-items-center gap-2">
          <span
            className={`badge ${
              row.status === "Active"
                ? "bg-success"
                : row.status === "Suspended"
                ? "bg-danger"
                : "bg-warning"
            }`}
          >
            {row.status}
          </span>
          <button
            className="btn-sm btn text-primar"
            onClick={() => handleEditStatus(row)}
          >
            <i className="fe fe-edit-2 text-primary"></i>
          </button>
        </div>
      ),
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          <Link
            to={`/dashboard/support/${row._id}`}
            className="btn btn-primary btn-sm me-1"
          >
            <i className="fe fe-eye"></i>
          </Link>
        </>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  return (
    <div>
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <div>
          <h1 className="page-title fw-semibold fs-20 mb-0">Status</h1>
          <Breadcrumb className="mb-0">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard" }}>
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item
              linkAs={Link}
              linkProps={{ to: "/dashboard/support" }}
              active
            >
              Support
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ms-auto pageheader-btn">
          <Button variant="primary" onClick={() => navigator(-1)}>
            <i className="fe fe-arrow-left"></i> Back
          </Button>
        </div>
      </div>
      <Row className="justify-content-center">
        <Col md={12}>
          <Card>
            <Card.Header>
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="mb-0 fw-semibold">My Support Queries</h6>
                <Link
                  to="/dashboard/support/new"
                  className="btn btn-primary btn-sm"
                >
                  + Start New Chat
                </Link>
              </div>
            </Card.Header>
            <Card.Body>
              {loading ? (
                <div className="text-center py-4">
                  <Spinner animation="border" size="sm" />{" "}
                  <span className="ms-2">Loading...</span>
                </div>
              ) : queries.length === 0 ? (
                <div className="text-center text-muted py-5">
                  <p className="mb-3 fs-6">
                    You don’t have any active support queries.
                  </p>
                  <Link
                    to="/dashboard/support/new"
                    className="btn btn-outline-primary btn-sm"
                  >
                    Start New Chat
                  </Link>
                </div>
              ) : (
                <DataTable
                  columns={columns}
                  data={queries}
                  pagination
                  highlightOnHover
                  responsive
                  striped
                />
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {showModal && (
        <EditStatusModal
          show={showModal}
          handleClose={() => setShowModal(false)}
          query={selectedQuery}
          onStatusUpdated={handleStatusUpdated}
        />
      )}
    </div>
  );
}
