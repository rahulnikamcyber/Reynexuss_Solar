"use client";

import { useState } from "react";

export default function CustomerInfoPage() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">

      {/* GOVERNMENT INFO POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white max-w-md w-full p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold mb-3 text-green-700">
              Government Solar Subsidy Info 🇮🇳
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              As per Government of India MNRE scheme, residential customers
              may get up to <b>40% subsidy</b> on rooftop solar installations
              (subject to eligibility).
            </p>
            <p className="text-xs text-gray-500 mb-4">
              *Subsidy rules may vary by state and capacity.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
            >
              I Understand
            </button>
          </div>
        </div>
      )}

      {/* HEADER */}
      <header className="bg-green-600 text-white py-6">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Solar Information Dashboard</h1>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold"
          >
            WhatsApp Us
          </a>
        </div>
      </header>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold mb-6">
          Why Go Solar?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">Save Electricity Bills</h3>
            <p className="text-sm text-gray-600">
              Reduce your monthly electricity expenses by up to 90%.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">Eco-Friendly</h3>
            <p className="text-sm text-gray-600">
              Clean energy that reduces carbon footprint.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">Government Subsidy</h3>
            <p className="text-sm text-gray-600">
              Financial support from government schemes.
            </p>
          </div>
        </div>

        {/* SOLAR IMAGE SECTION */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <img
            src="/solar1.jpg"
            alt="Solar Panels"
            className="rounded-xl shadow"
          />
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Rooftop Solar for Homes
            </h3>
            <p className="text-gray-600 mb-4">
              Rooftop solar systems are ideal for homes, shops, and small
              businesses. They are easy to maintain and long-lasting.
            </p>
            <a
              href="/lead"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              Get Free Solar Quote
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t py-6">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-sm text-gray-500">
          <p>© 2025 Solar Lead Platform</p>

          <div className="flex gap-4">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Instagram">📸</a>
            <a href="https://wa.me/919999999999" aria-label="WhatsApp">💬</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
