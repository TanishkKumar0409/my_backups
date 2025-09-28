import React, { useCallback, useEffect, useState } from "react";
import {
  Card,
  Col,
  Row,
  Form,
  Button,
  Table,
  Breadcrumb,
} from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import JoditEditor from "jodit-react";
import Swal from "sweetalert2";
import { API } from "../../context/API";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditRetreat() {
  const { objectId } = useParams();
  const navigator = useNavigate();
  const [status, setStatus] = useState([]);
  const [description, setDescription] = useState("");
  const [schedule, setSchedule] = useState([]);
  const [tempSchedule, setTempSchedule] = useState({
    start_time: "",
    end_time: "",
    task: "",
  });

  const [initialValues, setInitialValues] = useState({
    retreat_name: "",
    retreat_short_name: "",
    status: "",
  });

  const getStatus = useCallback(async () => {
    try {
      const response = await API.get(`/status`);
      const data = response.data;
      setStatus(data.filter((item) => item.name === "Retreat"));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getStatus();
  }, [getStatus]);

  const getRetreat = useCallback(async () => {
    if (!objectId) return;
    try {
      const { data } = await API.get(`/retreat/${objectId}`);
      setInitialValues({
        retreat_name: data.retreat_name || "",
        retreat_short_name: data.retreat_short_name || "",
        status: data.status || "",
      });
      setDescription(data.description || "");
      setSchedule(data.schedule || []);
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Failed to load retreat", "error");
    }
  }, [objectId]);

  useEffect(() => {
    getRetreat();
  }, [getRetreat]);

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
    initialValues,
    enableReinitialize: true,
    validationSchema: Yup.object({
      retreat_name: Yup.string().required("Retreat name is required"),
      retreat_short_name: Yup.string().required(
        "Retreat short name is required"
      ),
    }),
    onSubmit: async (values) => {
      if (!description.trim()) {
        Swal.fire("Error", "Description is required", "error");
        return;
      }
      if (schedule.length === 0) {
        Swal.fire("Error", "Please add at least one schedule item", "error");
        return;
      }

      try {
        const response = await API.patch(`/retreat/${objectId}`, {
          ...values,
          description,
          schedule,
        });
        Swal.fire(
          "Success",
          response.data.message || "Retreat updated successfully",
          "success"
        );
      } catch (err) {
        console.log(err);
        Swal.fire(
          "Error",
          err?.response?.data?.message || "Something went wrong",
          "error"
        );
      } finally {
        navigator(`/dashboard/retreat`);
      }
    },
  });

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
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>
                {objectId ? "Edit Retreat" : "Create Retreat"}
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={formik.handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Retreat Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="retreat_name"
                        placeholder="Enter retreat name"
                        value={formik.values.retreat_name}
                        onChange={formik.handleChange}
                        isInvalid={
                          formik.touched.retreat_name &&
                          !!formik.errors.retreat_name
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.retreat_name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  {/* Short Name */}
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

                {/* Description */}
                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <JoditEditor value={description} onChange={setDescription} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <Form.Select
                    {...formik.getFieldProps("status")}
                    isInvalid={formik.touched.status && formik.errors.status}
                  >
                    <option value="">--Select status--</option>
                    {status.map((item) => (
                      <option value={item?.parent_status}>
                        {item?.parent_status}
                      </option>
                    ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.status}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Schedule Input */}
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

                {/* Schedule Table */}
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

                {/* Submit */}
                <Button variant="success" type="submit" className="mt-3">
                  {objectId ? "Update Retreat" : "Create Retreat"}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
