import "./globals.css";

export const metadata = {
  title: "Lead–Vendor Automation Platform",
  description: "Customer leads & vendor dashboard system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {/* HEADER */}
        <header className="bg-white shadow">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex gap-4 text-sm font-medium">
            <a href="/" className="hover:underline">Home</a>
            <a href="/lead-form" className="hover:underline">Lead Form</a>
            <a href="/vendor-register" className="hover:underline">Vendor Register</a>
            <a href="/login" className="hover:underline">Login</a>
            <a href="/admin/dashboard" className="hover:underline">Admin</a>
            <a href="/vendor/dashboard" className="hover:underline">Vendor</a>
          </nav>
        </header>

        {/* PAGE CONTENT */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
