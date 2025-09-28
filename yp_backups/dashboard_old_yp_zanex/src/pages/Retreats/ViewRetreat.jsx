import React, { useEffect, useState } from "react";
import { Card, Table, Spinner, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { API } from "../../context/API";

export default function ViewRetreat() {
  const { objectId } = useParams();
  const [retreat, setRetreat] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRetreat() {
      setLoading(true);
      setError(null);
      try {
        const res = await API.get(`/retreat/${objectId}`);
        setRetreat(res.data);
      } catch (err) {
        setError(
          err.response?.data?.message || err.message || "Error fetching retreat"
        );
      } finally {
        setLoading(false);
      }
    }
    fetchRetreat();
  }, [objectId]);

  if (loading)
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" />
      </div>
    );

  if (error)
    return (
      <Alert variant="danger" className="mt-5 text-center">
        {error}
      </Alert>
    );

  if (!retreat) return null;

  return (
    <div className="container my-4">
      <Card>
        <Card.Header>
          <Card.Title>
            {retreat.retreat_name}{" "}
            {retreat.retreat_short_name
              ? `(${retreat.retreat_short_name})`
              : ""}
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <div dangerouslySetInnerHTML={{ __html: retreat.description }} />
          <h5>Schedule</h5>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Task</th>
              </tr>
            </thead>
            <tbody>
              {retreat.schedule?.map(({ start_time, end_time, task }, i) => (
                <tr key={i}>
                  <td>{start_time}</td>
                  <td>{end_time}</td>
                  <td>{task}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}
