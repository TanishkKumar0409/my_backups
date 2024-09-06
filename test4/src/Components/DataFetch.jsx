import React, { useEffect, useState } from "react";

export default function DataFetch() {
  const [data, setData] = useState();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const out = await fetch("https://jsonplaceholder.typicode.com/users");
    const output = await out.json();
    setData(output);
  };
  console.log(data);
  return <></>;
}
