"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const [imdbId, setImdbId] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!imdbId.trim()) {
      setError("Please enter a valid IMDb ID");
      return;
    }

    setError("");
    // Redirect to movie page
    router.push(`/movie/${imdbId.trim()}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
        AI Movie Insight Builder
      </h1>

      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <input
          type="text"
          placeholder="Enter IMDb ID (e.g., tt0133093)"
          value={imdbId}
          onChange={(e) => setImdbId(e.target.value)}
          className="w-full p-3 mb-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
        />
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors"
        >
          Search Movie
        </button>
      </form>
    </div>
  );
}