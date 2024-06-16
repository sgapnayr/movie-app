import { Movie } from '@/types/movie';
import React from 'react';
import { useRecoilState } from 'recoil';
import { focusedState, selectedMovieState } from '@/atoms/movies';
import { useRenderStars } from '@/hooks/useRenderStars';

export default function BaseMovie({ movie }: { movie: Movie }) {
  const [, setSelectedMovie] = useRecoilState(selectedMovieState);
  const [, setFocused] = useRecoilState(focusedState);
  const { renderStars } = useRenderStars();

  function handleMovieSelect(movie: Movie) {
    setSelectedMovie(movie);
    setFocused(false);
  }

  return (
    <div key={movie.id} onClick={() => handleMovieSelect(movie)} className="p-4 w-full flex justify-between items-center hover:bg-[#F5F5F5] cursor-pointer">
      <div>
        <div>{movie.title}</div>
        <div className="flex items-center">{renderStars(movie.rating)}</div>
      </div>
      <div className="text-[#777777]">{movie.category}</div>
    </div>
  );
}
