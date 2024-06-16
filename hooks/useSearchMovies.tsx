import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { searchedMoviesState, focusedState, selectedRatingsState, selectedGenresState } from '@/atoms/movies';
import movies from '@/data/movies.json';

export function useSearchMovies() {
  const [searchedMovies, setSearchedMovies] = useRecoilState(searchedMoviesState);
  const [focused, setFocused] = useRecoilState(focusedState);
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

  const searchMovie = (query: string) => {
    let filteredMovies = movies;
    const lowerCaseQuery = query.toLowerCase();

    if (lowerCaseQuery) {
      filteredMovies = filteredMovies.filter(movie => movie.title.toLowerCase().includes(lowerCaseQuery));
    }

    if (selectedRatings.length > 0) {
      filteredMovies = filteredMovies.filter(movie => selectedRatings.includes(Math.round(movie.rating / 2)));
    }

    if (!selectedGenres.includes('Any genre')) {
      filteredMovies = filteredMovies.filter(movie => selectedGenres.includes(movie.genre));
    }

    setSearchedMovies(filteredMovies);
  };

  return {
    searchedMovies,
    focused,
    setFocused,
    searchMovie,
  };
}
