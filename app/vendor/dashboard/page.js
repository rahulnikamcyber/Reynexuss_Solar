export default function VendorDashboard() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">
        Vendor Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Remaining Credits</h2>
          <p className="text-2xl mt-2">0</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Leads Today</h2>
          <p className="text-2xl mt-2">0</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Total Leads</h2>
          <p className="text-2xl mt-2">0</p>
        </div>
      </div>

      <div className="mt-8 bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">
          Recent Leads
        </h2>
        <p className="text-gray-500">
          No leads assigned yet
        </p>
      </div>
    </main>
  );
}
