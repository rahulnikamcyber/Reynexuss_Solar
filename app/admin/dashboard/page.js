"use client";

import dynamic from "next/dynamic";

// ✅ Dynamic import (IMPORTANT)
const Bar = dynamic(
  () => import("react-chartjs-2").then((mod) => mod.Bar),
  { ssr: false }
);

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// ✅ Register chart only on client
if (typeof window !== "undefined") {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
}

export default function AdminDashboard() {
  const data = {
    labels: ["Surat", "Ahmedabad", "Mumbai"],
    datasets: [
      {
        label: "Leads",
        data: [12, 8, 5],
        backgroundColor: "#16a34a",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold">Total Leads</h2>
          <p className="text-2xl">25</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold">Active Vendors</h2>
          <p className="text-2xl">7</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold">Revenue</h2>
          <p className="text-2xl">₹2,10,000</p>
        </div>
      </div>

      {/* CHART */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="font-semibold mb-4">Leads by City</h2>
        <Bar data={data} />
      </div>
    </main>
  );
}
