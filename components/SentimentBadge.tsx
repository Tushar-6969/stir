// components/SentimentBadge.tsx
import React from "react";

interface SentimentBadgeProps {
  sentiment: "positive" | "mixed" | "negative";
}

const SentimentBadge: React.FC<SentimentBadgeProps> = ({ sentiment }) => {
  let className = "badge";

  switch (sentiment) {
    case "positive":
      className += " positive";
      break;
    case "mixed":
      className += " mixed";
      break;
    case "negative":
      className += " negative";
      break;
  }

  return (
    <div className={className}>
      {sentiment.charAt(0).toUpperCase() + sentiment.slice(1)}
    </div>
  );
};

export default SentimentBadge;