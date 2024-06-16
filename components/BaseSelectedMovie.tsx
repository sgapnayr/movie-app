'use client';

import { selectedMovieState } from '@/atoms/movies';
import { useRenderStars } from '@/hooks/useRenderStars';
import { useRecoilState } from 'recoil';
import React from 'react';

export default function BaseSelectedMovie() {
  const [selectedMovie, setSelectedMovie] = useRecoilState(selectedMovieState);
  const { renderStars } = useRenderStars();

  function handleDeselectMovie() {
    setSelectedMovie(null);
  }

  return (
    <>
      <div className="max-w-[441px] w-full">
        {selectedMovie && (
          <div className="p-4 w-full flex justify-between items-center cursor-pointer">
            <div>
              <div>{selectedMovie.title}</div>
              <div className="flex items-center">{renderStars(selectedMovie.rating)}</div>
            </div>
            <div className="text-[#777777]">{selectedMovie.category}</div>
          </div>
        )}
      </div>

      {selectedMovie && (
        <button onClick={handleDeselectMovie} className="text-red-500 ml-4 absolute right-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </>
  );
}
