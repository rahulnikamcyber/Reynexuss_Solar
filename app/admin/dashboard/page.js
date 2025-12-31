"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

export default function AdminDashboard() {
  const data = {
    labels: ["Leads", "Vendors", "Customers"],
    datasets: [
      {
        label: "Platform Stats",
        data: [12, 5, 20],
        backgroundColor: "#22c55e",
      },
    ],
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>
        Admin Dashboard
      </h1>

      <div style={{ maxWidth: "500px" }}>
        <Bar data={data} />
      </div>
    </div>
  );
}
