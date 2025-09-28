import React, { useCallback, useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { API } from "../../context/API";
import Swal from "sweetalert2";

export default function EditStatusModal({
  show,
  handleClose,
  query,
  onStatusUpdated,
}) {
  const [status, setStatus] = useState(query?.status || "Pending");
  const [loading, setLoading] = useState(false);
  const [allStatus, setAllStatus] = useState([]);

  const getStatus = useCallback(async () => {
    try {
      const response = await API.get(`/status`);
      const data = response.data;
      setAllStatus(
        data.filter((item) => item?.name?.toLowerCase() === "support")
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getStatus();
  }, [getStatus]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await API.patch(`/support/${query._id}/status`, { status });
      Swal.fire({
        title: "Success",
        text: "Status updated successfully!",
        icon: "success",
      });
      onStatusUpdated();
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.response?.data?.error || "Failed to update status!",
        icon: "error",
      });
    } finally {
      setLoading(false);
      handleClose();
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Select Status</Form.Label>
            <Form.Select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="">--Select Status--</option>
              {allStatus.map((item) => (
                <option value={item?.parent_status}>
                  {item?.parent_status}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} disabled={loading}>
            Cancel
          </Button>
          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
