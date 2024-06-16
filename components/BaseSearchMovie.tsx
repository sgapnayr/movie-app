'use client';

import { useRecoilState } from 'recoil';
import { searchedMoviesState, focusedState } from '@/atoms/movies';
import { Movie } from '@/types/movie';
import BaseMovies from '@/components/BaseMovies';
import movies from '@/data/movies.json';

export default function BaseSearchMovie({ className }: { className?: string }) {
  const [searchedMovies, setSearchedMovies] = useRecoilState<Movie[]>(searchedMoviesState);
  const [focused, setFocused] = useRecoilState(focusedState);

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
        onBlur={() => setFocused(false)}
        onClick={() => setFocused(true)}
        placeholder="Enter movie name"
        className="w-full bg-transparent outline-none border border-custom p-4"
        onChange={e => searchMovie(e)}
        data-cy="search-input"
      />

      {focused && searchedMovies.length > 0 && <BaseMovies searchedMovies={searchedMovies} data-cy="search-results" />}
    </div>
  );
}
