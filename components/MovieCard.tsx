import React from "react";
import { Movie } from "@/types/movie";

interface MovieCardProps extends Movie {}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  poster,
  cast,
  year,
  rating,
  plot,
}) => {
  const safeCast = cast || [];

  return (
    <div
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",       // smaller gap between poster and body
        maxWidth: "300px",    // optional: control card width
        margin: "1rem auto",
      }}
    >
      {/* Poster */}
      <div>
        <img
          src={poster}
          alt={title}
          style={{
            width: "100%",
            height: "350px",   // fixed height
            objectFit: "cover",
            borderTopLeftRadius: "0.5rem",
            borderTopRightRadius: "0.5rem",
          }}
        />
      </div>

      {/* Details */}
      <div className="card-body" style={{ padding: "0.75rem" }}>
        <h2
          className="card-title card-title-small"
          style={{ fontSize: "1.25rem", marginBottom: "0.25rem" }}
        >
          {title}
        </h2>
        <p className="card-text" style={{ fontSize: "0.9rem" }}>
          <strong>Year:</strong> {year}
        </p>
        <p className="card-text" style={{ fontSize: "0.9rem" }}>
          <strong>Rating:</strong> {rating}
        </p>
        <p className="card-text" style={{ fontSize: "0.9rem" }}>
          <strong>Cast:</strong> {safeCast.length > 0 ? safeCast.join(", ") : "N/A"}
        </p>
        <p className="card-text" style={{ fontSize: "0.9rem", marginTop: "0.25rem" }}>
          {plot}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;