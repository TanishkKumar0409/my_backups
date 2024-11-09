import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

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
            label: "BCA",
            data: [15, 25, 40, 55, 70, 85, 100],
            backgroundColor: "rgba(235,22,22,1)",
          },
          {
            label: "BBA",
            data: [10, 15, 30, 10, 60, 55, 85],
            backgroundColor: "rgba(235,22,22,0.7)",
          },
          {
            label: "BHA",
            data: [12, 20, 25, 50, 65, 80, 95],
            backgroundColor: "rgba(235,22,22,0.5)",
          },
        ],
      },
      options: {
        responsive: true,
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className="col-sm-12 col-xl-6">
      <div className="bg-sec-custom text-center rounded p-4">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h4 className="mb-0 text-white">Results Comparison</h4>
        </div>
        <div className="chart-container">
          <canvas ref={canvasRef} id="worldWide-sale"></canvas>
        </div>
      </div>
    </div>
  );
}
