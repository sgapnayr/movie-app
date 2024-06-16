import { Movie } from '@/types/movie';
import React from 'react';

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
            <span key={`full-${i}`}>&#9733;</span>
          ))}
        {Array(halfStars)
          .fill(0)
          .map((_, i) => (
            <span key={`half-${i}`}>&#9734;</span>
          ))}
        {Array(emptyStars)
          .fill(0)
          .map((_, i) => (
            <span key={`empty-${i}`}>&#9734;</span>
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
