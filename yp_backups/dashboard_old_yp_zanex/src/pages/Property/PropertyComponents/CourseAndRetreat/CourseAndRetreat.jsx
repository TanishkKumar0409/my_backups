import React, { useCallback, useEffect, useState } from "react";
import Course from "./Course/Course";
import Retreat from "./Retreat/Retreat";
import { useParams } from "react-router-dom";
import { API } from "../../../../context/API";

export default function CourseAndRetreat() {
  const { objectId } = useParams();
  const [property, setProperty] = useState("");

  const getProperty = useCallback(async () => {
    try {
      const response = await API.get(`/property/${objectId}`);
      setProperty(response.data);
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    }
  }, [objectId]);

  useEffect(() => {
    getProperty();
  }, [getProperty]);
  return (
    <div>
      <Course property={property} />
      <Retreat property={property} />
    </div>
  );
}
