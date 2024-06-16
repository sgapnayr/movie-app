import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { selectedRatingsState } from '@/atoms/movies';

export function useRatings() {
  const [open, setOpen] = useState(false);
  const [selectedRatings, setSelectedRatings] = useRecoilState(selectedRatingsState);

  const ratings = ['Any rating', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  useEffect(() => {
    if (selectedRatings.length === 0) {
      setSelectedRatings([]);
    }
  }, [setSelectedRatings]);

  const toggleRating = (rating: string) => {
    if (rating === 'Any rating') {
      setSelectedRatings([]);
    } else {
      const ratingNumber = parseInt(rating, 10);
      setSelectedRatings(prev => (prev.includes(ratingNumber) ? prev.filter(r => r !== ratingNumber) : [...prev, ratingNumber]));
    }
  };

  const isRatingSelected = (rating: string) => {
    return (selectedRatings.length === 0 && rating === 'Any rating') || selectedRatings.includes(parseInt(rating, 10));
  };

  const toggleDropdown = () => setOpen(!open);

  return { open, ratings, toggleRating, isRatingSelected, toggleDropdown };
}
