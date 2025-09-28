import React, { useState, useEffect, useCallback } from "react";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Row,
  Badge,
  Form,
  Spinner,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { API } from "../../context/API";
import Swal from "sweetalert2";

const reactionMap = {
  "Very Satisfied": { icon: "ri-emotion-laugh-line", variant: "success" },
  Satisfied: { icon: "ri-emotion-happy-line", variant: "primary" },
  Neutral: { icon: "ri-emotion-normal-line", variant: "secondary" },
  Dissatisfied: { icon: "ri-emotion-unhappy-line", variant: "warning" },
  "Very Dissatisfied": { icon: "ri-emotion-angry-line", variant: "danger" },
};

export default function ViewFeedback() {
  const { objectId } = useParams();
  const [feedback, setFeedback] = useState(null);
  const [editingStatus, setEditingStatus] = useState(false);
  const [newStatus, setNewStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState("");
  const [status, setStatus] = useState([]);

  const getStatus = useCallback(async () => {
    try {
      const response = await API.get(`/status`);
      const data = response.data;
      setStatus(data.filter((item) => item.name === "Feedback"));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getStatus();
  }, [getStatus]);

  const getFeedback = async () => {
    setLoading(true);
    try {
      const { data } = await API.get(`/feedback/${objectId}`);
      setFeedback(data);
      setNewStatus(data.status);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response?.data?.message || "Failed to load feedback.",
      });
    } finally {
      setLoading(false);
    }
  };

  const getUserById = useCallback(async () => {
    if (feedback?.uniqueId) {
      try {
        const { data } = await API.get(`/user/uniqueId/${feedback.uniqueId}`);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    }
  }, [feedback]);

  useEffect(() => {
    getUserById();
  }, [getUserById]);

  const updateStatus = async () => {
    try {
      await API.patch(`/feedback/${objectId}/status`, { status: newStatus });
      Swal.fire({
        icon: "success",
        title: "Status Updated",
        text: "The feedback status has been updated successfully.",
      });
      setFeedback({ ...feedback, status: newStatus });
      setEditingStatus(false);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response?.data?.message || "Failed to update status.",
      });
    }
  };

  useEffect(() => {
    getFeedback();
  }, []);

  const renderBreadcrumb = () => (
    <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
      <div>
        <h1 className="page-title fw-semibold fs-20 mb-0">Feedback</h1>
        <Breadcrumb className="mb-0">
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard" }}>
            Dashboard
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Feedback Details</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="ms-auto pageheader-btn">
        <Button variant="primary" onClick={() => window.history.back()}>
          <i className="fe fe-arrow-left"></i> Back
        </Button>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div>
        {renderBreadcrumb()}
        <div className="text-center my-5">
          <Spinner animation="border" variant="primary" />
          <p className="mt-2 mb-0">Loading feedback...</p>
        </div>
      </div>
    );
  }

  if (!feedback) {
    return (
      <div>
        {renderBreadcrumb()}
        <Card className="shadow-sm text-center p-4 border-0 rounded-4">
          <Card.Body>
            <i
              className="ri-feedback-line text-muted"
              style={{ fontSize: "3rem" }}
            ></i>
            <Card.Title className="mt-2 fw-bold fs-5">
              No Feedback Found
            </Card.Title>
            <Card.Text className="text-muted">
              This feedback record doesn’t exist or may have been removed.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }

  const reactionInfo = reactionMap[feedback.reaction] || {
    icon: "ri-question-line",
    variant: "secondary",
  };

  return (
    <div>
      {renderBreadcrumb()}
      <Row>
        <Col md={12}>
          <Card>
            {/* Header */}
            <Card.Header className="bg-white py-3 border-bottom">
              <h5 className="mb-0 fw-bold">{user?.name || "Unknown User"}</h5>
              <small className="text-muted">
                <i className="ri-time-line me-1"></i>
                {new Date(feedback.createdAt).toLocaleString("en-IN", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </small>
            </Card.Header>

            {/* Reaction Section */}
            <Card.Body className="text-center py-4">
              <i
                className={`${reactionInfo.icon}`}
                style={{
                  fontSize: "4rem",
                  color: `var(--bs-${reactionInfo.variant})`,
                }}
              ></i>
              <div
                className={`fw-semibold text-${reactionInfo.variant} mt-2 fs-5`}
              >
                {feedback.reaction}
              </div>
            </Card.Body>

            {/* Status Section */}
            <Card.Body className="border-top">
              <h6 className="fw-semibold mb-2">Status</h6>
              {!editingStatus ? (
                <>
                  <Badge
                    pill
                    bg={
                      feedback.status === "Pending"
                        ? "warning"
                        : feedback.status === "Active"
                        ? "success"
                        : "danger"
                    }
                    className="px-3 py-2 me-2"
                  >
                    {feedback.status}
                  </Badge>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => setEditingStatus(true)}
                  >
                    <i className="ri-edit-line me-1"></i> Edit
                  </Button>
                </>
              ) : (
                <div className="d-flex gap-2 mt-2">
                  <Form.Select
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                    size="sm"
                    style={{ maxWidth: "200px" }}
                  >
                    <option value="" disabled>
                      --Select Status--
                    </option>
                    {status?.map((item) => (
                      <option value={item.parent_status}>
                        {item.parent_status}
                      </option>
                    ))}
                  </Form.Select>
                  <Button variant="success" size="sm" onClick={updateStatus}>
                    Save
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      setEditingStatus(false);
                      setNewStatus(feedback.status);
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              )}
            </Card.Body>

            {/* Message Section */}
            <Card.Footer className="bg-light">
              <h6 className="fw-semibold mb-2">Message</h6>
              <div
                className="bg-white border rounded p-3"
                style={{
                  whiteSpace: "pre-wrap",
                  maxHeight: "250px",
                  overflowY: "auto",
                }}
              >
                {feedback.message}
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
