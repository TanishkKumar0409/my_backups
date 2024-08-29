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
        <h1>

          {data.map((item) => {
            return (

              <p key={item.id}>
                Hello, my name is <span>{item.name}</span>, and my username is{" "}
                <span>{item.username}</span>. My ID is <span>{item.id}</span>. I
                reside at <span>{item.address.street}</span>,{" "}
                <span>{item.address.suite}</span>,{" "}
                <span>{item.address.city}</span>, with the zipcode{" "}
                <span>{item.address.zipcode}</span>. You can reach me via email
                at <span>{item.email}</span> or call me at{" "}
                <span>{item.phone}</span>. My personal website is{" "}
                <span>{item.website}</span>. I work at{" "}
                <span>{item.company.name}</span>, a company known for its "
                <span>{item.company.catchPhrase}</span>" and our focus on "
                <span>{item.company.bs}</span>".
              </p>
              
            );
          })}
          
        </h1>
      </section>
    </>
  );
}
