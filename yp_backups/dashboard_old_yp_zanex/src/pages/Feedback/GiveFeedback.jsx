import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Col, Row, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { API } from "../../context/API";
import Swal from "sweetalert2";

export default function GiveFeedback() {
  const navigator = useNavigate();
  const [selectedReaction, setSelectedReaction] = useState(null);
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

  const reactions = [
    {
      id: 1,
      icon: "ri-emotion-unhappy-line",
      label: "Very Dissatisfied",
      colorClass: "text-danger",
    },
    {
      id: 2,
      icon: "ri-emotion-sad-line",
      label: "Dissatisfied",
      colorClass: "text-warning",
    },
    {
      id: 3,
      icon: "ri-emotion-normal-line",
      label: "Neutral",
      colorClass: "text-secondary",
    },
    {
      id: 4,
      icon: "ri-emotion-happy-line",
      label: "Satisfied",
      colorClass: "text-success",
    },
    {
      id: 5,
      icon: "ri-emotion-laugh-line",
      label: "Very Satisfied",
      colorClass: "text-primary",
    },
  ];

  const formik = useFormik({
    initialValues: {
      userId: authUser?.uniqueId || "",
      reaction: "",
      message: "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      reaction: Yup.string().required("Please select your reaction"),
      message: Yup.string()
        .min(5, "Message should be at least 5 characters")
        .required("Please write your feedback"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await API.post(`/give-feedback`, values);
        Swal.fire({
          icon: "success",
          title: "Thank you!",
          text:
            response.data.message ||
            "Your feedback has been submitted successfully.",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text:
            error.response?.data?.error ||
            "Something went wrong while submitting your feedback.",
        });
      } finally {
        navigator(`/dashboard/feedback`);
      }
    },
  });

  return (
    <div>
      {/* Header */}
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <div>
          <h1 className="page-title fw-semibold fs-20 mb-0">Events</h1>
          <Breadcrumb className="mb-0">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard" }}>
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item>Give</Breadcrumb.Item>
            <Breadcrumb.Item active>Feedback</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ms-auto pageheader-btn">
          <Button variant="primary" onClick={() => navigator(-1)}>
            <i className="fe fe-arrow-left"></i> Back
          </Button>
        </div>
      </div>

      {/* Feedback Form */}
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Give Feedback</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={formik.handleSubmit}>
                {/* Reaction Icons */}
                <Form.Group className="mb-4 text-center">
                  <Form.Label className="fw-bold d-block mb-3">
                    How was your experience?
                  </Form.Label>
                  <div className="d-flex justify-content-center gap-4 flex-wrap">
                    {reactions.map((reaction) => (
                      <div
                        key={reaction.id}
                        className="text-center"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setSelectedReaction(reaction.id);
                          formik.setFieldValue("reaction", reaction.label);
                        }}
                        onMouseEnter={(e) => {
                          if (selectedReaction !== reaction.id) {
                            e.currentTarget
                              .querySelector("i")
                              .classList.remove("text-muted");
                            e.currentTarget
                              .querySelector("i")
                              .classList.add(reaction.colorClass);
                            e.currentTarget.querySelector("i").style.transform =
                              "scale(1.1)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (selectedReaction !== reaction.id) {
                            e.currentTarget
                              .querySelector("i")
                              .classList.remove(reaction.colorClass);
                            e.currentTarget
                              .querySelector("i")
                              .classList.add("text-muted");
                            e.currentTarget.querySelector("i").style.transform =
                              "scale(1)";
                          }
                        }}
                      >
                        <i
                          className={`${reaction.icon} ${
                            selectedReaction === reaction.id
                              ? reaction.colorClass
                              : "text-muted"
                          }`}
                          style={{
                            fontSize: "2.5rem",
                            transition: "all 0.2s ease-in-out",
                            transform:
                              selectedReaction === reaction.id
                                ? "scale(1.2)"
                                : "scale(1)",
                          }}
                          title={reaction.label}
                        ></i>
                        <div
                          className="small mt-1"
                          style={{
                            fontWeight:
                              selectedReaction === reaction.id
                                ? "bold"
                                : "normal",
                          }}
                        >
                          {reaction.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  {formik.touched.reaction && formik.errors.reaction && (
                    <div className="text-danger mt-2">
                      {formik.errors.reaction}
                    </div>
                  )}
                </Form.Group>

                {/* Message */}
                <Form.Group className="mb-3">
                  <Form.Label>Your Feedback</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    placeholder="Write your feedback here..."
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={
                      formik.touched.message && !!formik.errors.message
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.message}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Submit */}
                <div className="text-end">
                  <Button variant="primary" type="submit">
                    Submit Feedback
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
