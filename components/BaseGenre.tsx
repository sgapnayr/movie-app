'use client';

import { useState } from 'react';
import BaseContainer from './BaseContainer';
import { DownArrow, UpArrow } from '@/assets/icons';
import { FullStar, EmptyStar } from '@/assets/icons';

export default function BaseGenre({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  const ratings = ['Any rating', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  return (
    <div className={`flex flex-col ${className}`}>
      <BaseContainer onClick={() => setOpen(!open)} className={`flex items-center justify-between w-full md:max-w-[113px] border border-custom cursor-pointer ${className}`}>
        <div>Genre</div>
        <div>{open ? <UpArrow /> : <DownArrow />}</div>
      </BaseContainer>

      {open && (
        <div className="relative w-[239px]" data-cy="search-results">
          <div className="absolute flex flex-col mt-1 w-full border border-custom bg-white">
            {ratings.map(rating => (
              <div key={rating} className="p-4 w-full flex justify-between items-center hover:bg-[#F5F5F5] cursor-pointer">
                <div className="flex items-center">
                  <div className="w-4 h-4 border border-black rounded-sm" />
                  {rating !== 'Any rating' && (
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
                  )}
                  <span className={rating === 'Any rating' ? 'ml-0' : 'ml-2'}>{rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
