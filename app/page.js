export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="max-w-xl text-center">
        <h1 className="text-3xl font-bold mb-4">
          Lead–Vendor Automation Platform
        </h1>

        <p className="text-gray-600 mb-6">
          Deployment successful 🎉
        </p>

        <ul className="space-y-2 text-blue-600 underline">
          <li>
            <a href="/lead-form">/lead-form</a>
          </li>
          <li>
            <a href="/vendor-register">/vendor-register</a>
          </li>
          <li>
            <a href="/login">/login</a>
          </li>
        </ul>
      </div>
    </main>
  );
}
