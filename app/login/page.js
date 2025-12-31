"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [mobile, setMobile] = useState("");
  const router = useRouter();

  function handleLogin(e) {
    e.preventDefault();

    if (mobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    // Later: OTP + DB verification will be here
    localStorage.setItem("customer_mobile", mobile);

    router.push("/customer-info");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-full max-w-sm">

        <h1 className="text-2xl font-bold text-center text-green-700">
          Customer Login
        </h1>

        <p className="text-sm text-center text-gray-600 mt-2">
          Login using your mobile number
        </p>

        <form onSubmit={handleLogin} className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            Mobile Number
          </label>

          <input
            type="number"
            placeholder="Enter 10-digit mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full mt-2 p-3 border rounded"
          />

          <button
            type="submit"
            className="w-full mt-4 bg-green-600 text-white py-3 rounded hover:bg-green-700"
          >
            Continue
          </button>
        </form>

        <p className="text-xs text-center text-gray-500 mt-4">
          OTP verification will be added for security
        </p>
      </div>
    </main>
  );
}
