import React from 'react';
import { EmptyStar, FullStar, HalfStar } from '@/assets/icons';

export function useRenderStars() {
  function renderStars(rating: number) {
    const fullStars = Math.floor(rating / 2);
    const halfStars = rating % 2 >= 1 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {Array(fullStars)
          .fill(0)
          .map((_, i) => (
            <FullStar key={`full-${i}`} />
          ))}
        {Array(halfStars)
          .fill(0)
          .map((_, i) => (
            <HalfStar key={`half-${i}`} />
          ))}
        {Array(emptyStars)
          .fill(0)
          .map((_, i) => (
            <EmptyStar key={`empty-${i}`} />
          ))}
      </>
    );
  }

  return { renderStars };
}
