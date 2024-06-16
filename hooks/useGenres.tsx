import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { selectedGenresState } from '@/atoms/movies';

export function useGenres() {
  const [open, setOpen] = useState(false);
  const [selectedGenres, setSelectedGenres] = useRecoilState(selectedGenresState);

  const genres = ['Any genre', 'Action', 'Comedy', 'Drama', 'Horror', 'Romance', 'Sci-Fi', 'Thriller'];

  useEffect(() => {
    if (selectedGenres.length === 0) {
      setSelectedGenres(['Any genre']);
    }
  }, [setSelectedGenres]);

  const toggleGenre = (genre: string) => {
    if (genre === 'Any genre') {
      setSelectedGenres(['Any genre']);
    } else {
      setSelectedGenres(prev => (prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev.filter(g => g !== 'Any genre'), genre]));
    }
  };

  const isGenreSelected = (genre: string) => {
    return (selectedGenres.length === 0 && genre === 'Any genre') || selectedGenres.includes(genre);
  };

  const toggleDropdown = () => setOpen(!open);

  return { open, genres, toggleGenre, isGenreSelected, toggleDropdown };
}
