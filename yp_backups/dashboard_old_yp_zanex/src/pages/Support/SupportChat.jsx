import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  Spinner,
  Form,
  Button,
  InputGroup,
  Breadcrumb,
} from "react-bootstrap";
import { API } from "../../context/API";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function SupportChat() {
  const { objectId } = useParams();
  const navigator = useNavigate();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [supportQuery, setSupportQuery] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [files, setFiles] = useState([]);
  const [authUser, setAuthUser] = useState(null);

  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const getAuthUser = async () => {
    try {
      const response = await API.get(`/profile`);
      setAuthUser(response.data);
    } catch (error) {
      console.log("Error fetching auth user:", error);
    }
  };

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const res = await API.get(`/support/chats/${objectId}`);
      setSupportQuery(res.data.support);
      setMessages(Array.isArray(res.data?.messages) ? res.data.messages : []);
    } catch (err) {
      console.error("Error fetching messages:", err);
      setMessages([]);
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() && files.length === 0) return;

    try {
      const formData = new FormData();
      formData.append("userId", authUser?.uniqueId);
      formData.append(
        "senderType",
        authUser?.uniqueId === supportQuery?.userId ? "user" : "support"
      );
      if (newMessage.trim()) formData.append("text", newMessage.trim());
      for (const f of files) {
        formData.append("files", f);
      }

      const res = await API.post(
        `/support/chats/${objectId}/message`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      const created = res.data?.newMessage;
      if (created) {
        setMessages((prev) => [...prev, created]);
      }
      setNewMessage("");
      setFiles([]);
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    getAuthUser();
    fetchMessages();
  }, []);

  const handleFileSelect = (e) => {
    const selected = Array.from(e.target.files || []);
    if (selected.length > 0) {
      setFiles((prev) => [...prev, ...selected]);
    }
  };

  const removeSelectedFile = (idx) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  const isMyMessage = (msg) => {
    if (!authUser) return false;
    return msg?.senderType === "user";
  };

  const senderLabel = (msg) => {
    if (msg?.senderType === "user") return "You";
    if (msg?.senderType === "support") return "Support";
    return "Unknown";
  };

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
      <Card className="overflow-hidden">
        <Card.Header className="d-flex justify-content-between align-items-center bg-light">
          <h6 className="mb-0 fw-semibold">💬 Support Chat</h6>
          <span className="small text-muted">Ticket: {objectId}</span>
        </Card.Header>

        <Card.Body
          className="p-0 d-flex flex-column bg-white rounded-0"
          style={{ height: "75vh" }}
        >
          {/* Messages */}
          <div className="flex-grow-1 overflow-auto p-3">
            {loading ? (
              <div className="text-center py-5 text-muted">
                <Spinner animation="border" size="sm" /> Loading messages...
              </div>
            ) : messages.length === 0 ? (
              <div className="text-center text-muted py-5">
                <p>No messages yet. Start the conversation!</p>
              </div>
            ) : (
              messages.map((msg, i) => {
                const mine = isMyMessage(msg);
                return (
                  <div
                    key={msg._id || i}
                    className={`mb-4 d-flex flex-column ${
                      mine ? "align-items-end" : "align-items-start"
                    }`}
                  >
                    {/* Label + Time */}
                    <div
                      className="d-flex align-items-center mb-1 text-muted"
                      style={{ fontSize: "0.75rem" }}
                    >
                      <span className="fw-semibold me-2">
                        {senderLabel(msg)}
                      </span>
                      <span>
                        {new Date(msg.createdAt).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>

                    {/* Message Text */}
                    {msg.text && (
                      <div
                        className={`p-2 px-3 rounded-3 mb-2 ${
                          mine ? "bg-light text-dark" : "bg-primary border"
                        }`}
                        style={{ maxWidth: "70%" }}
                      >
                        <p className="mb-0 small">{msg.text}</p>
                      </div>
                    )}

                    {/* Files Block */}
                    {Array.isArray(msg.files) && msg.files.length > 0 && (
                      <div
                        className="p-2 border rounded bg-white small shadow-sm"
                        style={{ maxWidth: "70%" }}
                      >
                        <strong className="d-block mb-2 text-muted small">
                          📎 Attachments
                        </strong>
                        {msg.files.map((fileValue, idx) => {
                          const display = (fileValue || "").split("/").pop();
                          return (
                            <div
                              key={idx}
                              className="d-flex align-items-center justify-content-between p-1 border rounded mb-1 bg-light"
                            >
                              <div className="d-flex align-items-center text-truncate me-2">
                                <span className="me-2">📄</span>
                                <span
                                  className="text-truncate"
                                  style={{ maxWidth: 180 }}
                                >
                                  {display}
                                </span>
                              </div>
                              {/* <a
                              href={fileValue}
                              target="_blank"
                              rel="noreferrer"
                              className="btn btn-sm btn-outline-primary py-0 px-2"
                            >
                              View
                            </a> */}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Selected Files Preview */}
          {files?.length > 0 && (
            <div className="border-top bg-light px-3 py-2">
              <div className="d-flex flex-column gap-2">
                {files.map((f, idx) => (
                  <div
                    key={idx}
                    className="d-flex align-items-center justify-content-between p-2 border rounded small bg-white shadow-sm"
                  >
                    <div className="d-flex align-items-center text-truncate me-2">
                      <span className="me-2">📄</span>
                      <span className="text-truncate" style={{ maxWidth: 180 }}>
                        {f.name}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeSelectedFile(idx)}
                      className="btn btn-sm btn-outline-danger py-0 px-2"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <Form onSubmit={sendMessage} className="border-top bg-white p-2">
            <InputGroup>
              {/* Hidden file input */}
              <input
                type="file"
                ref={fileInputRef}
                multiple
                hidden
                onChange={handleFileSelect}
              />
              <Button
                variant="outline-light"
                className="rounded-start"
                onClick={() => fileInputRef.current.click()}
              >
                📎 Attach
              </Button>
              <Form.Control
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <Button type="submit" variant="light">
                Send ➤
              </Button>
            </InputGroup>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
