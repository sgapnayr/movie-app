import { Movie } from '@/types/movie';
import React from 'react';
import BaseMovie from './BaseMovie';

export default function BaseMovies({ searchedMovies }: { searchedMovies: Movie[] }) {
  return (
    <div className="relative">
      <div className="absolute flex flex-col mt-1 w-full border border-custom bg-white">
        {searchedMovies.map(movie => (
          <BaseMovie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
