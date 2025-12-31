import "./globals.css";

export const metadata = {
  title: "Lead–Vendor Automation Platform",
  description: "Production ready lead vendor system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  );
}
