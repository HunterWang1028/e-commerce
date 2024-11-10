import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Shopr",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
