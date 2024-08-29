import React from "react";
import { useState, useEffect } from "react";

export default function Data() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const out = await fetch("https://jsonplaceholder.typicode.com/users");
    const output = await out.json();
    setdata(output);
  };

  console.log(data);

  return (
    <>
      <section>
        <h1>Data</h1>
      </section>
    </>
  );
}
