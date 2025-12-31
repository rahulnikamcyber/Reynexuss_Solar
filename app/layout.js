import "./globals.css";

export const metadata = {
  title: "Lead–Vendor Automation Platform",
  description: "Customer leads & vendor dashboard system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
