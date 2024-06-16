'use client';

import { useState } from 'react';
import BaseContainer from './BaseContainer';
import { DownArrow, UpArrow } from '@/assets/icons';

export default function BaseRating({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`flex flex-col ${className}`}>
      <BaseContainer onClick={() => setOpen(!open)} className={`flex items-center justify-between w-full md:max-w-[113px] border border-custom cursor-pointer ${className}`}>
        <div>Rating</div>
        <div>{open ? <UpArrow /> : <DownArrow />}</div>
      </BaseContainer>

      {open && (
        <div className="relative" data-cy="search-results">
          <div className="absolute flex flex-col mt-1 w-full border border-custom bg-white">
            <div className="p-4 w-full flex justify-between items-center hover:bg-[#F5F5F5] cursor-pointer">Any rating</div>
            <div className="p-2">9+</div>
            <div className="p-2">8+</div>
            <div className="p-2">7+</div>
            <div className="p-2">6+</div>
            <div className="p-2">5+</div>
            <div className="p-2">4+</div>
            <div className="p-2">3+</div>
            <div className="p-2">2+</div>
            <div className="p-2">1+</div>
          </div>
        </div>
      )}
    </div>
  );
}
