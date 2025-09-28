// Support.jsx
import React, { useCallback, useEffect, useState } from "react";
import {
  Card,
  Col,
  Row,
  Form,
  Button,
  Alert,
  Badge,
  ProgressBar,
  Breadcrumb,
} from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { API } from "../../context/API";
import { Link, useNavigate } from "react-router-dom";

const SUBJECTS = [
  { key: "activation_kyc", label: "Activation and KYC", icon: "📄" },
  {
    key: "transactions_refunds",
    label: "Transactions and Refunds",
    icon: "↔️",
  },
  { key: "settlements", label: "Settlements", icon: "📈" },
  { key: "payment_methods", label: "Payment Methods", icon: "💳" },
  {
    key: "international_payments",
    label: "International payments",
    icon: "🌐",
  },
  {
    key: "account_assistance",
    label: "Account related assistance",
    icon: "❓",
  },
];

export default function NewSupportQuery({ onStarted }) {
  const navigator = useNavigate();
  const [step, setStep] = useState(1);
  const [subject, setSubject] = useState(null);
  const [error, setError] = useState(null);
  const [notice, setNotice] = useState(null);
  const [authUser, setAuthUser] = useState("");

  const getAuthUser = useCallback(async () => {
    try {
      const response = await API.get(`/profile`);
      setAuthUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getAuthUser();
  }, [getAuthUser]);

  const goToStep2 = (s) => {
    setSubject(s);
    setStep(2);
    setError(null);
    setNotice(null);
  };
  const goBack = () => {
    if (step === 2) setStep(1);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      text: "",
      files: [],
    },
    validationSchema: Yup.object({
      text: Yup.string(),
      files: Yup.array(),
    }).test(
      "has-content",
      "Write a message or attach at least one file.",
      (values) =>
        (values.text && values.text.trim().length > 0) ||
        (values.files && values.files.length > 0)
    ),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setError(null);
      setNotice(null);

      try {
        const formData = new FormData();
        formData.append("userId", authUser?.uniqueId);
        formData.append("subject", subject.label);
        formData.append("text", values.text || "");

        for (const f of values.files) {
          formData.append("files", f);
        }

        const res = await API.post("/support", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        setNotice("✅ Support ticket created successfully.");
        resetForm();
        setSubject(null);
        setStep(1);

        navigator(`/dashboard/support/${res.data.support._id}`);
        if (onStarted) onStarted(res.data);
      } catch (err) {
        setError(
          err?.response?.data?.message || "❌ Failed to start support query."
        );
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleFiles = (e) => {
    const files = Array.from(e.target.files || []);
    formik.setFieldValue("files", files);
  };

  const HeaderTitle =
    step === 1 ? "Create Support Ticket" : "Describe your issue";
  const HeaderSubtitle =
    step === 1 ? "Choose a topic to continue" : subject?.label;

  return (
    <>
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
            >
              Support
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Create</Breadcrumb.Item>
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
          <Card className="border rounded-3">
            <Card.Header className="d-flex align-items-center bg-light border-bottom">
              {step === 2 && (
                <Button
                  variant="link"
                  onClick={goBack}
                  className="p-0 me-3 text-decoration-none fs-5"
                >
                  ←
                </Button>
              )}
              <div>
                <Card.Title className="mb-0 fw-bold">{HeaderTitle}</Card.Title>
                <small className="text-muted">{HeaderSubtitle}</small>
              </div>
              <div className="ms-auto" style={{ minWidth: 160 }}>
                <ProgressBar
                  now={step === 1 ? 50 : 100}
                  variant="info"
                  label={step === 1 ? "Step 1/2" : "Step 2/2"}
                  className="rounded-pill"
                />
              </div>
            </Card.Header>

            <Card.Body className="p-4">
              {error && (
                <Alert
                  variant="danger"
                  onClose={() => setError(null)}
                  dismissible
                >
                  {error}
                </Alert>
              )}
              {notice && (
                <Alert
                  variant="success"
                  onClose={() => setNotice(null)}
                  dismissible
                >
                  {notice}
                </Alert>
              )}

              {/* Step 1: Subject Selection */}
              {step === 1 && (
                <div className="d-grid gap-3">
                  {SUBJECTS.map((s) => (
                    <Button
                      key={s.key}
                      variant="outline-primary"
                      size="md"
                      className="d-flex align-items-center justify-content-between rounded-2 py-2 px-3 border"
                      onClick={() => goToStep2(s)}
                    >
                      <div className="d-flex align-items-center gap-2">
                        <span style={{ fontSize: 20 }}>{s.icon}</span>
                        <span className="fw-semibold small">{s.label}</span>
                      </div>
                      <span className="fs-6">›</span>
                    </Button>
                  ))}
                </div>
              )}

              {/* Step 2: Message + Files */}
              {step === 2 && (
                <Form noValidate onSubmit={formik.handleSubmit}>
                  <div className="mb-3">
                    <Badge bg="info" className="fs-6 p-2 rounded-2">
                      {subject?.label}
                    </Badge>
                  </div>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semibold">Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="text"
                      placeholder="Describe your issue..."
                      value={formik.values.text}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="rounded-2 border"
                      isInvalid={Boolean(
                        formik.errors.text && formik.touched.text
                      )}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.text}
                    </Form.Control.Feedback>
                    <Form.Text className="text-muted">
                      You can also attach files below.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semibold">Attachments</Form.Label>
                    <Form.Control
                      type="file"
                      multiple
                      onChange={handleFiles}
                      className="rounded-2 border"
                    />
                    {formik.values.files?.length > 0 && (
                      <div className="mt-3">
                        {formik.values.files.map((f, i) => (
                          <Badge
                            key={i}
                            bg="secondary"
                            className="me-2 mb-2 p-2 rounded-pill"
                          >
                            📎 {f.name}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </Form.Group>

                  <div className="d-flex gap-2">
                    <Button
                      type="submit"
                      disabled={formik.isSubmitting}
                      className="px-3 py-1"
                      size="sm"
                    >
                      {formik.isSubmitting ? "Starting..." : "Start Chat"}
                    </Button>
                    <Button
                      variant="outline-secondary"
                      type="button"
                      onClick={goBack}
                      disabled={formik.isSubmitting}
                      size="sm"
                      className="px-3 py-1"
                    >
                      Back
                    </Button>
                  </div>
                </Form>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
