'use client';

import React from 'react';
import BaseMovies from '@/components/BaseMovies';
import { useSearchMovies } from '@/hooks/useSearchMovies';

export default function BaseSearchMovie({ className }: { className?: string }) {
  const { searchedMovies, focused, setFocused, searchMovie } = useSearchMovies();

  return (
    <div className={`flex flex-col ${className}`} data-cy="base-search-movie">
      <input
        onClick={() => setFocused(true)}
        placeholder="Enter movie name"
        className="w-full bg-transparent outline-none border border-custom p-4"
        onChange={e => searchMovie(e.target.value)}
        data-cy="search-input"
      />
      {focused && searchedMovies?.length > 0 && <BaseMovies searchedMovies={searchedMovies} data-cy="search-results" />}
    </div>
  );
}
