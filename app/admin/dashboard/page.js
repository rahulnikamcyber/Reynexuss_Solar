"use client";

import { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function AdminDashboard() {
  const data = {
    labels: ["Surat", "Ahmedabad", "Mumbai"],
    datasets: [
      {
        label: "Leads",
        data: [12, 8, 5],
        backgroundColor: "#000000",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Total Leads</h2>
          <p className="text-2xl mt-2">25</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Active Vendors</h2>
          <p className="text-2xl mt-2">6</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Revenue</h2>
          <p className="text-2xl mt-2">₹12,000</p>
        </div>
      </div>

      {/* CHART */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">
          Leads by City
        </h2>
        <Bar data={data} />
      </div>
    </main>
  );
}
