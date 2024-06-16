import { Movie } from '@/types/movie';
import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export default function BaseMovie({ movie }: { movie: Movie }) {
  function renderStars(rating: number) {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 2 !== 0 ? 1 : 0;
    const emptyStars = 10 - fullStars - halfStars;

    return (
      <>
        {Array(fullStars)
          .fill(0)
          .map((_, i) => (
            <FaStar key={`full-${i}`} />
          ))}
        {Array(halfStars)
          .fill(0)
          .map((_, i) => (
            <FaStarHalfAlt key={`half-${i}`} />
          ))}
        {Array(emptyStars)
          .fill(0)
          .map((_, i) => (
            <FaRegStar key={`empty-${i}`} />
          ))}
      </>
    );
  }

  return (
    <div key={movie.id} className="p-4 w-full flex justify-between items-center hover:bg-[#F5F5F5] cursor-pointer">
      <div>
        <div>{movie.title}</div>
        <div className="flex items-center">{renderStars(movie.rating)}</div>
      </div>
      <div className="text-[#777777]">{movie.category}</div>
    </div>
  );
}
