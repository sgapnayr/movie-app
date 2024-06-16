'use client';

import { useRecoilState } from 'recoil';
import { searchedMoviesState, focusedState, selectedMovieState, selectedRatingsState } from '@/atoms/movies';
import BaseMovies from '@/components/BaseMovies';
import movies from '@/data/movies.json';
import { useEffect } from 'react';

export default function BaseSearchMovie({ className }: { className?: string }) {
  const [searchedMovies, setSearchedMovies] = useRecoilState(searchedMoviesState);
  const [focused, setFocused] = useRecoilState(focusedState);
  const [selectedMovie] = useRecoilState(selectedMovieState);
  const [selectedRatings] = useRecoilState(selectedRatingsState);

  useEffect(() => {
    setSearchedMovies(movies);
  }, [setSearchedMovies]);

  useEffect(() => {
    if (selectedRatings.length === 0) {
      setSearchedMovies(movies);
    } else {
      setSearchedMovies(movies.filter(movie => selectedRatings.includes(Math.round(movie.rating / 2))));
    }
  }, [selectedRatings, setSearchedMovies]);

  function searchMovie(e: React.ChangeEvent<HTMLInputElement>) {
    const query = e.target.value.toLowerCase();
    if (!query && selectedRatings) {
      setSearchedMovies(movies.filter(movie => selectedRatings.includes(Math.round(movie.rating / 2))));
    } else if (!query && !selectedRatings) {
      setSearchedMovies(movies);
    } else {
      const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));
      setSearchedMovies(selectedRatings.length === 0 ? filteredMovies : filteredMovies.filter(movie => selectedRatings.includes(Math.round(movie.rating / 2))));
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
