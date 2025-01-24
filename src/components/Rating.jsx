import { useState, useEffect } from "react";

const Rating = ({ totalStars = 5, initialRating = 0, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);

  useEffect(() => {
    // Asegura que el componente se haya renderizado correctamente
    console.log("Rating component rendered.");
  }, []);

  const handleClick = (index) => {
    setRating(index + 1);
    if (onRatingChange) {
      onRatingChange(index + 1);
    }
  };

  return (
    <div className="flex items-center space-x-1">
      {[...Array(totalStars)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          className={`w-6 h-6 cursor-pointer ${
            index < rating ? "text-yellow-500" : "text-gray-400"
          }`}
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke="none"
          onClick={() => handleClick(index)}
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
      <span className="ml-2 text-gray-600">{rating} / {totalStars}</span>
    </div>
  );
};

export default Rating;