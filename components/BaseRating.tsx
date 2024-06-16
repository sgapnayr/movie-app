'use client';

import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import BaseContainer from './BaseContainer';
import { CheckMark, DownArrow, UpArrow } from '@/assets/icons';
import { FullStar, EmptyStar } from '@/assets/icons';
import { selectedRatingsState } from '@/atoms/movies';

export default function BaseRating({ className }: { className?: string }) {
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

  return (
    <div className={`flex flex-col ${className}`}>
      <BaseContainer onClick={() => setOpen(!open)} className={`flex items-center justify-between w-full md:max-w-[113px] border border-custom cursor-pointer ${className}`}>
        <div>Rating</div>
        <div>{open ? <UpArrow /> : <DownArrow />}</div>
      </BaseContainer>

      {open && (
        <div className="relative w-[239px]" data-cy="search-results">
          <div className="absolute flex flex-col mt-1 w-full border border-custom bg-white p-2 py-3">
            {ratings.map(rating => (
              <div key={rating} className="h-6 w-full flex justify-between items-center hover:bg-[#F5F5F5] cursor-pointer" onClick={() => toggleRating(rating)}>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 border border-black mr-[2px] flex justify-center items-center">{isRatingSelected(rating) && <CheckMark />}</div>
                  {rating !== 'Any rating' ? (
                    <>
                      {Array(parseInt(rating, 10))
                        .fill(0)
                        .map((_, i) => (
                          <FullStar key={`full-${i}`} />
                        ))}
                      {Array(10 - parseInt(rating, 10))
                        .fill(0)
                        .map((_, i) => (
                          <EmptyStar key={`empty-${i}`} />
                        ))}
                    </>
                  ) : (
                    <>{rating}</>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
