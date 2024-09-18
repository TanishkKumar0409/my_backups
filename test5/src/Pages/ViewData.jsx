import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";

export default function ViewData() {
  const id = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const out = await fetch("https://jsonplaceholder.typicode.com/photos");
    const output = await out.json();
    const FilterData=output.filter((user)=>(user.id===parseInt(id)))
    setData(FilterData);
    console.log(data)

    // setData(output)
  };
//   console.log(data);
  return (
    <>
      {data.length > 0 ? (
        <div className="container">
          <div className="row">
            {data.map((item, index) => (
              <div className="col-md-6" key={index}>
                <img src={item.url} alt="" className="img-fluid" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <section>
          <Loader />
        </section>
      )}
    </>
  );
}
