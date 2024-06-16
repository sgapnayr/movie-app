import { atom } from 'recoil';
import { Movie } from '@/types/movie';
import movies from '@/data/movies.json';

export const searchedMoviesState = atom<Movie[]>({
  key: 'searchedMoviesState',
  default: movies,
});

export const focusedState = atom<boolean>({
  key: 'focusedState',
  default: false,
});
