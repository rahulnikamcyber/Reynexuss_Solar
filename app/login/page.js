export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Login
        </h1>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email / Username"
            className="w-full border rounded px-3 py-2"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded px-3 py-2"
          />

          <select className="w-full border rounded px-3 py-2">
            <option>Vendor</option>
            <option>Admin</option>
          </select>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
