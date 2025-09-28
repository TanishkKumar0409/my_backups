import React, { useCallback, useEffect, useState } from "react";
import AddRetreat from "./AddRetreat";
import { API } from "../../../../../context/API";
import { Card, Col, Row, Form, Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
import DataTableSkeleton from "../../../../../components/Skeletons/DataTableSkeleton";
import Swal from "sweetalert2";
import ViewRetreat from "./ViewRetreat";
import EditRetreat from "./EditRetreat";

export default function Retreat({ property }) {
  const [isAdding, setIsAdding] = useState(false);
  const [propertyRetreats, setPropertyRetreats] = useState([]);
  const [filteredRetreats, setFilteredRetreats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isViewing, setIsViewing] = useState("");
  const [isEditing, setIsEditing] = useState("");

  const [retreat, setRetreat] = useState([]);

  const getAllRetreats = useCallback(async () => {
    setLoading(true);
    try {
      const response = await API.get(`/retreat`);
      const data = response.data;
      setRetreat(data.filter((item) => item.status === "Active"));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getAllRetreats();
  }, [getAllRetreats]);

  const getPropertyRetreats = useCallback(async () => {
    try {
      if (property) {
        const response = await API.get(
          `/property/property-retreat/${property?.uniqueId}`
        );
        setPropertyRetreats(response.data);
        setFilteredRetreats(response.data);
      }
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    }
  }, [property]);

  useEffect(() => {
    getPropertyRetreats();
  }, [getPropertyRetreats]);

  useEffect(() => {
    if (propertyRetreats.length) {
      setFilteredRetreats(
        propertyRetreats.filter((item) =>
          Object.values(item).some((val) =>
            val?.toString().toLowerCase().includes(search.toLowerCase())
          )
        )
      );
    }
  }, [search, propertyRetreats]);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const response = await API.delete(`/property-course/${id}`);
        Swal.fire({
          title: "Deleted!",
          text: response?.data?.message || "Retreat deleted successfully.",
          icon: "success",
        });
        getPropertyRetreats();
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: error?.response?.data?.error || "Failed to delete retreat!",
          icon: "error",
        });
      }
    }
  };

  const retreatFinder = (id) => {
    const item = retreat.find((item) => item.uniqueId === id);
    return item;
  };

  const columns = [
    {
      name: "Retreat Name",
      selector: (row) => retreatFinder(row.retreat_id).retreat_name,
      sortable: true,
    },
    {
      name: "Duration",
      selector: (row) =>
        row.retreat_short_name ||
        retreatFinder(row.retreat_id).retreat_short_name,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
      cell: (row) => (
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
      ),
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="d-flex gap-1">
          <Button size="sm" onClick={() => setIsViewing(row)}>
            <i className="fe fe-eye"></i>
          </Button>
          <Button size="sm" variant="success" onClick={() => setIsEditing(row)}>
            <i className="fe fe-edit-2"></i>
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => handleDelete(row._id)}
          >
            <i className="fe fe-trash-2"></i>
          </Button>
        </div>
      ),
      ignoreRowClick: true,
    },
  ];

  return (
    <div>
      {!isAdding ? (
        !isEditing ? (
          !isViewing ? (
            <Row>
              <Col>
                <Card>
                  <Card.Header className="d-flex justify-content-between">
                    <Card.Title>View Retreat</Card.Title>
                    <Button size="sm" onClick={() => setIsAdding(true)}>
                      <i className="fe fe-plus me-1"></i>Add Retreat
                    </Button>
                  </Card.Header>
                  <Card.Body>
                    {loading ? (
                      <DataTableSkeleton />
                    ) : (
                      <>
                        <Row className="mb-3">
                          <Col lg={4}>
                            <div className="position-relative">
                              <span className="position-absolute top-50 start-0 translate-middle-y ps-3">
                                <i className="fe fe-search text-primary"></i>
                              </span>
                              <Form.Control
                                type="text"
                                placeholder="Search Retreat"
                                value={search}
                                className="ps-5 border-bottom border-0 border-primary rounded-0"
                                onChange={(e) => setSearch(e.target.value)}
                              />
                            </div>
                          </Col>
                        </Row>

                        <DataTable
                          columns={columns}
                          data={filteredRetreats}
                          pagination
                          striped
                          highlightOnHover
                          responsive
                        />
                      </>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ) : (
            <ViewRetreat
              retreat={isViewing}
              retreatFinder={retreatFinder}
              setIsViewing={setIsViewing}
            />
          )
        ) : (
          <EditRetreat
            retreat={isEditing}
            retreatFinder={retreatFinder}
            getPropertyRetreat={getPropertyRetreats}
            setIsEditing={setIsEditing}
          />
        )
      ) : (
        <AddRetreat
          property={property}
          setIsAdding={setIsAdding}
          allRetreats={retreat}
          getPropertyRetreat={getPropertyRetreats}
        />
      )}
    </div>
  );
}
