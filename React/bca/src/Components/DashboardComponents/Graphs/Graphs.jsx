import React from "react";
import SalesAndRevenue from "./SalesAndRevenue/SalesAndRevenue";
import WorldWideSales from "./WorldWideSales/WorldWideSales";

export default function Graphs() {
  return (
    <>
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          <WorldWideSales /> 
          <SalesAndRevenue />
        </div>
      </div>
    </>
  );
}
