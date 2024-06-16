import { atom } from 'recoil';
import { Movie } from '@/types/movie';
import movies from '@/data/movies.json';

export const selectedMovieState = atom<Movie | null>({
  key: 'selectedMovieState',
  default: null,
});

export const searchedMoviesState = atom<Movie[]>({
  key: 'searchedMoviesState',
  default: movies,
});

export const focusedState = atom<boolean>({
  key: 'focusedState',
  default: false,
});

export const selectedRatingsState = atom<number[]>({
  key: 'selectedRatingsState',
  default: [],
});

export const selectedGenresState = atom<string[]>({
  key: 'selectedGenresState',
  default: ['Any genre'],
});
