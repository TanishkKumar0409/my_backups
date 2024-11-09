import React, { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  LineController,
} from "chart.js";

// Register the necessary components with ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  LineController
);

export default function SalesAndRevenue() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      // Destroy the previous chart if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Initialize the chart
      chartInstance.current = new ChartJS(ctx, {
        type: "line",
        data: {
          labels: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
          datasets: [
            {
              label: "BBA",
              data: [0, 25, 26, 22, 56, 85, 90],
              backgroundColor: "rgba(235,22,22,0.7)",
              borderColor: "rgba(0,0,0,0.7)",
              fill: true,
            },
            {
              label: "BCA",
              data: [35, 45, 55, 76, 80, 95, 98],
              borderColor: "rgba(0,0,0,0.7)",
              backgroundColor: "rgba(235,22,22,0.5)",
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
        },
      });
    }
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="col-sm-12 col-xl-6">
      <div className="bg-sec-custom text-center rounded p-4">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h4 className="mb-0 text-white">Attendance Difference</h4>
        </div>
        <div className="chart-container">
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    </div>
  );
}
