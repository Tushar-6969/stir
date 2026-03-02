// components/ReviewSection.tsx
import React from "react";

interface ReviewSectionProps {
  reviews: string[];
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
  if (!reviews || reviews.length === 0) return null;

  return (
    <div className="review-section">
      <h3 className="review-title">Audience Reviews</h3>
      <ul className="review-list">
        {reviews.map((review, index) => (
          <li key={index} className="review-item">
            {review}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewSection;