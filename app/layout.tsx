import React, { ReactNode } from "react";

import "./globals.css"; // ✅ Import global CSS

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>AI Movie Insight Builder</title>
      </head>
      <body style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", color: "#212529" }}>
        {/* Header */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
            backgroundColor: "#fff",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <h1 style={{ fontSize: "1.25rem", fontWeight: 600 }}>
            AI Movie Insight Builder
          </h1>
        </header>
        {/* Main Content */}
        <main className="container full-center" style={{ padding: "1rem" }}>
          {children}
        </main>
      </body>
    </html>
  );
}