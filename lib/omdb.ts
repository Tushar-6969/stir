// lib/omdb.ts
import { Movie } from "@/types/movie";

const OMDB_API_KEY = process.env.OMDB_API_KEY;

console.log("🚀 OMDb API Key:", OMDB_API_KEY); // Check if key is loaded

if (!OMDB_API_KEY) {
  throw new Error("OMDB_API_KEY is not defined in environment variables");
}

/**
 * Fetch movie details from OMDb API by IMDb ID
 * @param id IMDb movie ID (e.g., tt0133093)
 * @returns Movie object with basic details
 */
export async function fetchMovie(id: string): Promise<Movie> {
  const url = `https://www.omdbapi.com/?i=${id}&apikey=${OMDB_API_KEY}&plot=short`;
  console.log("🔗 Fetching OMDb URL:", url);

  let res;
  try {
    res = await fetch(url);
  } catch (err: any) {
    console.error("❌ Network or fetch error:", err.message);
    throw new Error("Network error while fetching from OMDb API");
  }

  console.log("📡 HTTP status:", res.status, res.statusText);

  let data;
  try {
    data = await res.json();
  } catch (err: any) {
    console.error("❌ Failed to parse JSON from OMDb:", err.message);
    throw new Error("Invalid JSON response from OMDb API");
  }

  console.log("📄 OMDb raw response:", data);

  if (!res.ok) {
    throw new Error(`HTTP error from OMDb API: ${res.status}`);
  }

  if (data.Response === "False") {
    console.error("❌ OMDb API responded with an error:", data.Error);
    throw new Error(data.Error || "Movie not found");
  }

  // Map OMDb response to our Movie type
  const movie: Movie = {
    title: data.Title,
    poster: data.Poster !== "N/A" ? data.Poster : "/fallback-poster.png",
    cast: data.Actors ? data.Actors.split(",").map((a: string) => a.trim()) : [],
    year: data.Year,
    rating: data.imdbRating,
    plot: data.Plot,
    reviews: [], // Will be fetched separately
  };

  console.log("✅ Movie object:", movie);
  return movie;
}