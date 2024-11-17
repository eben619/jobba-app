import React from "react";
import type { Metadata } from "next";
import { AppProvider } from '@/providers/AppProvider';

export const metadata: Metadata = {
  title: "Jobba",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-900 font-sans antialiased">
      {children}
      </body>
    </html>
  );
}
