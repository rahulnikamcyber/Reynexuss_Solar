export default function LeadFormPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Customer Lead Form
        </h1>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded px-3 py-2"
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full border rounded px-3 py-2"
          />

          <input
            type="text"
            placeholder="City"
            className="w-full border rounded px-3 py-2"
          />

          <select className="w-full border rounded px-3 py-2">
            <option>Solar Installation</option>
            <option>Solar Maintenance</option>
            <option>Solar Cleaning</option>
            <option>Electrical Services</option>
          </select>

          <input
            type="text"
            placeholder="Budget"
            className="w-full border rounded px-3 py-2"
          />

          <textarea
            placeholder="Notes"
            className="w-full border rounded px-3 py-2"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
          >
            Submit Lead
          </button>
        </form>
      </div>
    </main>
  );
              }
