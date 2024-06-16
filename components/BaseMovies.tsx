import { Movie } from '@/types/movie';
import React from 'react';
import BaseMovie from './BaseMovie';

export default function BaseMovies({ searchedMovies }: { searchedMovies: Movie[] }) {
  return (
    <div className="relative" data-cy="search-results">
      <div className="absolute flex flex-col mt-1 w-full border border-custom bg-white">
        {searchedMovies.map(movie => (
          <div key={movie.id} data-cy="movie-item">
            <BaseMovie movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
