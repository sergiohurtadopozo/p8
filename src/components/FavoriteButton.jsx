import { useState } from "react";

const FavoriteButton = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded ${
        isFavorited ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"
      }`}
    >
      {isFavorited ? "Favorito ❤️" : "Guardar 🤍"}
    </button>
  );
};

export default FavoriteButton;
