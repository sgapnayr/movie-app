'use client';

import { useRecoilState } from 'recoil';
import { searchedMoviesState, focusedState, selectedMovieState, selectedRatingsState, selectedGenresState } from '@/atoms/movies';
import BaseMovies from '@/components/BaseMovies';
import movies from '@/data/movies.json';
import { useEffect } from 'react';

export default function BaseSearchMovie({ className }: { className?: string }) {
  const [searchedMovies, setSearchedMovies] = useRecoilState(searchedMoviesState);
  const [focused, setFocused] = useRecoilState(focusedState);
  const [selectedMovie] = useRecoilState(selectedMovieState);
  const [selectedRatings] = useRecoilState(selectedRatingsState);
  const [selectedGenres] = useRecoilState(selectedGenresState);

  useEffect(() => {
    setSearchedMovies(movies);
  }, [setSearchedMovies]);

  useEffect(() => {
    let filteredMovies = movies;

    if (selectedRatings.length > 0) {
      filteredMovies = filteredMovies.filter(movie => selectedRatings.includes(Math.round(movie.rating / 2)));
    }

    if (!selectedGenres.includes('Any genre')) {
      filteredMovies = filteredMovies.filter(movie => selectedGenres.includes(movie.genre));
    }

    setSearchedMovies(filteredMovies);
  }, [selectedRatings, selectedGenres, setSearchedMovies]);

  function searchMovie(e: React.ChangeEvent<HTMLInputElement>) {
    const query = e.target.value.toLowerCase();
    let filteredMovies = movies;

    if (query) {
      filteredMovies = filteredMovies.filter(movie => movie.title.toLowerCase().includes(query));
    }

    if (selectedRatings.length > 0) {
      filteredMovies = filteredMovies.filter(movie => selectedRatings.includes(Math.round(movie.rating / 2)));
    }

    if (!selectedGenres.includes('Any genre')) {
      filteredMovies = filteredMovies.filter(movie => selectedGenres.includes(movie.genre));
    }

    setSearchedMovies(filteredMovies);
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
