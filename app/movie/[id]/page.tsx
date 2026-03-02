"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation"; // ✅ added useRouter

import MovieCard from "@/components/MovieCard";
import ReviewSection from "@/components/ReviewSection";
import SentimentBadge from "@/components/SentimentBadge";
import Loader from "@/components/Loader";
import { Movie } from "@/types/movie";

export default function MoviePage() {
  const params = useParams();
  const movieId = params?.id;
  const router = useRouter(); // ✅ initialize router

  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!movieId) return;

    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        // 1️⃣ Fetch movie details
        const movieRes = await fetch(`/api/fetchMovie?id=${movieId}`);
        if (!movieRes.ok) throw new Error("Failed to fetch movie");
        const movieData: Movie = await movieRes.json();

        // 2️⃣ Fetch sentiment
        const sentimentRes = await fetch("/api/sentiment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reviews: movieData.reviews || [] }),
        });

        let sentimentData = { summary: "", sentiment: "mixed" as const };
        if (sentimentRes.ok) {
          sentimentData = await sentimentRes.json();
        }

        setMovie({ ...movieData, ...sentimentData });
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [movieId]);

  if (loading) return <Loader />;

  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;

  if (!movie) return <p className="text-center mt-10">Movie not found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
 
      <MovieCard {...movie} />
      {movie.reviews && movie.reviews.length > 0 && (
        <ReviewSection reviews={movie.reviews} />
      )}
      {movie.sentiment && <SentimentBadge sentiment={movie.sentiment} />}

      {/* ✅ Redirect button to homepage */}
      <div className="mt-6 text-center">
        <button
          onClick={() => router.push("/")}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Search Another Movie
        </button>
      </div>
    </div>
  );
}