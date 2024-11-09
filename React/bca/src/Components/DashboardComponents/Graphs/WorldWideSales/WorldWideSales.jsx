import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Chart from "chart.js/auto"; // Importing Chart.js

export default function WorldWideSales() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
        datasets: [
          {
            label: "USA",
            data: [10, 25, 40, 55, 70, 85, 100],
            backgroundColor: "rgba(235,22,22,1)",
          },
          {
            label: "UK",
            data: [20, 35, 50, 65, 80, 95, 110],
            backgroundColor: "rgba(235,22,22,0.7)",
          },
          {
            label: "AU",
            data: [15, 30, 45, 60, 75, 90, 105],
            backgroundColor: "rgba(235,22,22,0.5)",
          },
        ],
      },
      options: {
        responsive: true,
      },
    });

    return () => {
      // Clean up the chart when the component is unmounted
      myChart.destroy();
    };
  }, []);

  return (
    <div className="col-sm-12 col-xl-6">
      <div className="bg-sec-custom text-center rounded p-4">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h6 className="mb-0">Worldwide Sale</h6>
          <Link to="/">Show All</Link>
        </div>
        <div className="chart-container">
          <canvas ref={canvasRef} id="worldWide-sale"></canvas>
        </div>
      </div>
    </div>
  );
}
