'use client';

import { selectedMovieState } from '@/atoms/movies';
import { useRenderStars } from '@/hooks/useRenderStars';
import { useRecoilState } from 'recoil';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BaseSelectedMovie() {
  const [selectedMovie, setSelectedMovie] = useRecoilState(selectedMovieState);
  const { renderStars } = useRenderStars();

  function handleDeselectMovie() {
    setSelectedMovie(null);
  }

  return (
    <AnimatePresence>
      {selectedMovie && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 w-full flex justify-center items-center border-t bg-white"
        >
          <div className="max-w-[441px] w-full p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Your Cart</h2>
              <button onClick={handleDeselectMovie} className="text-red-500">
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
            </div>
            <div className="mt-4">
              <div>{selectedMovie.title}</div>
              <div className="flex items-center">{renderStars(selectedMovie.rating)}</div>
              <div className="text-[#777777]">{selectedMovie.category}</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
