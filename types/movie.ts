// types/movie.ts

/**
 * Type representing a movie fetched from OMDb
 * and enriched with audience reviews and sentiment
 */
export interface Movie {
  title: string;                       // Movie title
  poster: string;                      // Poster image URL
  cast: string[];                       // List of cast members
  year: string;                         // Release year
  rating: string;                       // IMDb rating (e.g., "8.7")
  plot: string;                         // Short plot summary
  reviews?: string[];                   // Audience reviews / comments
  sentimentSummary?: string;            // AI-generated summary of audience sentiment
  sentiment?: 'positive' | 'mixed' | 'negative'; // Overall sentiment
}