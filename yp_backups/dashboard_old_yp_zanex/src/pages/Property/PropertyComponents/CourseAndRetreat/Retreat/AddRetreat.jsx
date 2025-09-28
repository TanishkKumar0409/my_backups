import React, { useState } from "react";
import { Card, Col, Row, Form, Button, Table } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { API } from "../../../../../context/API";

export default function AddRetreat({
  allRetreats,
  property,
  getPropertyRetreat,
  setIsAdding,
}) {
  const [schedule, setSchedule] = useState([]);
  const [tempSchedule, setTempSchedule] = useState({
    start_time: "",
    end_time: "",
    task: "",
  });
  const [selectedRetreat, setSelectedRetreat] = useState(null);

  const formatToAmPm = (time) => {
    if (!time) return "";
    let [hours, minutes] = time.split(":");
    hours = parseInt(hours, 10);
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes} ${ampm}`;
  };

  const isEndTimeAfterStartTime = (start, end) => {
    if (!start || !end) return false;
    const startDate = new Date(`1970-01-01T${start}`);
    const endDate = new Date(`1970-01-01T${end}`);
    return endDate > startDate;
  };

  const addScheduleItem = () => {
    if (
      !tempSchedule.start_time ||
      !tempSchedule.end_time ||
      !tempSchedule.task
    ) {
      Swal.fire("Error", "Please fill all schedule fields", "error");
      return;
    }
    if (
      !isEndTimeAfterStartTime(tempSchedule.start_time, tempSchedule.end_time)
    ) {
      Swal.fire("Error", "End time must be after start time", "error");
      return;
    }
    setSchedule([...schedule, tempSchedule]);
    setTempSchedule({ start_time: "", end_time: "", task: "" });
  };

  const removeScheduleItem = (index) => {
    setSchedule(schedule.filter((_, i) => i !== index));
  };

  const formik = useFormik({
    initialValues: {
      retreat_name: "",
      retreat_short_name: "",
    },
    validationSchema: Yup.object({
      retreat_name: Yup.string().required("Retreat name is required"),
      retreat_short_name: Yup.string().required(
        "Retreat short name is required"
      ),
    }),
    onSubmit: async (values) => {
      if (!selectedRetreat) {
        Swal.fire("Error", "Please select a retreat", "error");
        return;
      }
      if (schedule.length === 0) {
        Swal.fire("Error", "Please add at least one schedule item", "error");
        return;
      }
      try {
        const payload = {
          property_id: property.uniqueId,
          retreat_id: selectedRetreat.uniqueId,
          retreat_short_name: values.retreat_short_name,
          schedule,
        };

        const response = await API.post("/property-retreat", payload);

        Swal.fire(
          "Success",
          response.data.message || "Retreat saved successfully",
          "success"
        );
      } catch (err) {
        console.log(err);
        Swal.fire(
          "Error",
          err?.response?.data?.error || "Something went wrong",
          "error"
        );
      } finally {
        getPropertyRetreat();
        setIsAdding(false);
      }
    },
  });

  const handleRetreatSelect = (selectedId) => {
    const selected = allRetreats.find((r) => r._id === selectedId);
    if (selected) {
      setSelectedRetreat(selected);
      formik.setFieldValue("retreat_name", selected._id);
      formik.setFieldValue(
        "retreat_short_name",
        selected.retreat_short_name || ""
      );
      setSchedule(selected.schedule || []);
    } else {
      setSelectedRetreat(null);
      formik.setFieldValue("retreat_short_name", "");
      setSchedule([]);
    }
  };

  return (
    <div>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Attach / Edit Retreat</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={formik.handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Retreat Name</Form.Label>
                      <Form.Select
                        name="retreat_name"
                        value={formik.values.retreat_name}
                        onChange={(e) => handleRetreatSelect(e.target.value)}
                        isInvalid={
                          formik.touched.retreat_name &&
                          !!formik.errors.retreat_name
                        }
                      >
                        <option value="">Select Retreat</option>
                        {allRetreats.map((retreat) => (
                          <option key={retreat._id} value={retreat._id}>
                            {retreat.retreat_name}
                          </option>
                        ))}
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.retreat_name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Retreat Short Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="retreat_short_name"
                        placeholder="Enter retreat short name"
                        value={formik.values.retreat_short_name}
                        onChange={formik.handleChange}
                        isInvalid={
                          formik.touched.retreat_short_name &&
                          !!formik.errors.retreat_short_name
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.retreat_short_name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <h5 className="mt-4">Schedule</h5>
                <Row className="align-items-end">
                  <Col md={3}>
                    <Form.Group>
                      <Form.Label>Start Time</Form.Label>
                      <Form.Control
                        type="time"
                        value={tempSchedule.start_time}
                        onChange={(e) =>
                          setTempSchedule({
                            ...tempSchedule,
                            start_time: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group>
                      <Form.Label>End Time</Form.Label>
                      <Form.Control
                        type="time"
                        value={tempSchedule.end_time}
                        onChange={(e) =>
                          setTempSchedule({
                            ...tempSchedule,
                            end_time: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Task</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter task"
                        value={tempSchedule.task}
                        onChange={(e) =>
                          setTempSchedule({
                            ...tempSchedule,
                            task: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={2}>
                    <Button
                      variant="primary"
                      className="w-100"
                      type="button"
                      onClick={addScheduleItem}
                    >
                      Add
                    </Button>
                  </Col>
                </Row>

                {schedule.length > 0 && (
                  <Table striped bordered hover size="sm" className="mt-3">
                    <thead>
                      <tr>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Task</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {schedule.map((item, idx) => (
                        <tr key={idx}>
                          <td>{formatToAmPm(item.start_time)}</td>
                          <td>{formatToAmPm(item.end_time)}</td>
                          <td>{item.task}</td>
                          <td>
                            <Button
                              variant="danger"
                              size="sm"
                              onClick={() => removeScheduleItem(idx)}
                            >
                              Remove
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}

                <Button variant="success" type="submit" className="mt-3">
                  Save Retreat
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
