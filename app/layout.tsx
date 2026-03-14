import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Service Suspended",
  description: "A placeholder page for websites with pending developer payments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
