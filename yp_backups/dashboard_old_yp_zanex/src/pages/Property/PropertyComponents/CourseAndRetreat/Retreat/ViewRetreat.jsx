import React from "react";
import { Button, Card, Table } from "react-bootstrap";

export default function ViewRetreat({ retreat, retreatFinder ,setIsViewing}) {
  return (
    <div>
      <Card>
        <Card.Header className="d-flex justify-content-between">
          <Card.Title>
            {retreatFinder(retreat.retreat_id).retreat_name}{" "}
            {retreatFinder(retreat.retreat_id).retreat_short_name
              ? `(${retreatFinder(retreat.retreat_id).retreat_short_name})`
              : ""}
          </Card.Title>
          <div>
            <Button size="sm" onClick={()=>setIsViewing("")}>Back</Button>
          </div>
        </Card.Header>
        <Card.Body>
          <div
            dangerouslySetInnerHTML={{
              __html: retreatFinder(retreat.retreat_id).description,
            }}
          />
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
              {retreatFinder(retreat.retreat_id).schedule?.map(
                ({ start_time, end_time, task }, i) => (
                  <tr key={i}>
                    <td>{start_time}</td>
                    <td>{end_time}</td>
                    <td>{task}</td>
                  </tr>
                )
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}
