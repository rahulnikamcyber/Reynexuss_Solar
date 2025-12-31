"use client";

export default function HomePage() {
  function calculateSolar() {
    const bill = document.getElementById("bill").value;

    if (!bill || bill <= 0) {
      alert("Please enter a valid electricity bill amount");
      return;
    }

    const units = bill / 8; // ₹8 per unit
    const solarKW = (units / 120).toFixed(2); // 1kW ≈ 120 units/month
    const yearlySavings = (bill * 12).toFixed(0);

    document.getElementById("result").innerHTML = `
      <p><strong>Monthly Units:</strong> ${units.toFixed(0)} kWh</p>
      <p><strong>Recommended Solar Size:</strong> ${solarKW} kW</p>
      <p><strong>Approx Yearly Savings:</strong> ₹${yearlySavings}</p>
    `;
  }

  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO SECTION */}
      <section className="bg-green-700 text-white py-14 px-6 text-center">
        <h1 className="text-3xl font-bold">
          Raynexuss Solar Energy Platform
        </h1>
        <p className="mt-3 text-lg">
          Calculate • Save • Go Solar Smartly
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="bg-white text-green-700 px-6 py-3 rounded font-semibold"
          >
            WhatsApp Us
          </a>

          <a
            href="tel:+91XXXXXXXXXX"
            className="border border-white px-6 py-3 rounded font-semibold"
          >
            Call Now
          </a>
        </div>
      </section>

      {/* IMAGE SECTION */}
      <section className="py-10 flex justify-center">
        <img
          src="/solar1.jpg"
          alt="Solar Panel"
          className="rounded shadow max-w-md"
        />
      </section>

      {/* SOLAR CALCULATOR */}
      <section className="py-12 px-6">
        <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">

          <h2 className="text-2xl font-bold text-green-700 text-center">
            Solar Requirement Calculator
          </h2>

          <p className="text-sm text-gray-600 text-center mt-2">
            Enter your monthly electricity bill
          </p>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">
              Monthly Electricity Bill (₹)
            </label>

            <input
              id="bill"
              type="number"
              placeholder="e.g. 2500"
              className="w-full mt-2 p-3 border rounded"
            />

            <button
              onClick={calculateSolar}
              className="w-full mt-4 bg-green-600 text-white py-3 rounded hover:bg-green-700"
            >
              Calculate Solar
            </button>
          </div>

          <div
            id="result"
            className="mt-6 text-sm text-gray-800 bg-green-50 p-4 rounded"
          ></div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>© 2025 Raynexuss Solar • Clean Energy for India</p>
      </footer>

    </main>
  );
}
