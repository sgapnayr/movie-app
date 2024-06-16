'use client';

import { useRecoilState } from 'recoil';
import { searchedMoviesState, focusedState, selectedMovieState } from '@/atoms/movies';
import BaseMovies from '@/components/BaseMovies';
import movies from '@/data/movies.json';
import { useEffect } from 'react';

export default function BaseSearchMovie({ className }: { className?: string }) {
  const [searchedMovies, setSearchedMovies] = useRecoilState(searchedMoviesState);
  const [focused, setFocused] = useRecoilState(focusedState);
  const [selectedMovie] = useRecoilState(selectedMovieState);

  useEffect(() => {
    setSearchedMovies(movies);
  }, [setSearchedMovies]);

  function searchMovie(e: React.ChangeEvent<HTMLInputElement>) {
    const query = e.target.value.toLowerCase();
    if (!query) {
      setSearchedMovies(movies);
    } else {
      const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));
      setSearchedMovies(filteredMovies);
    }
  }

  return (
    <div className={`flex flex-col ${className}`} data-cy="base-search-movie">
      <input
        onClick={() => setFocused(true)}
        placeholder="Enter movie name"
        className="w-full bg-transparent outline-none border border-custom p-4"
        onChange={e => searchMovie(e)}
        data-cy="search-input"
      />
      {focused && searchedMovies?.length > 0 && <BaseMovies searchedMovies={searchedMovies} data-cy="search-results" />}
    </div>
  );
}
