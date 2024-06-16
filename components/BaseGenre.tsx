'use client';

import BaseContainer from './BaseContainer';
import { CheckMark, DownArrow, UpArrow } from '@/assets/icons';
import { useGenres } from '@/hooks/useGenres';

export default function BaseGenre({ className }: { className?: string }) {
  const { open, genres, toggleGenre, isGenreSelected, toggleDropdown } = useGenres();

  return (
    <div className={`flex flex-col ${className}`}>
      <BaseContainer onClick={toggleDropdown} className={`flex items-center justify-between w-full md:max-w-[113px] border border-custom cursor-pointer ${className}`}>
        <div>Genre</div>
        <div>{open ? <UpArrow /> : <DownArrow />}</div>
      </BaseContainer>

      {open && (
        <div className="relative w-[126px]" data-cy="search-results">
          <div className="absolute flex flex-col mt-1 w-full border border-custom bg-white p-2 py-3">
            {genres.map(genre => (
              <div key={genre} className="h-6 w-full flex justify-between items-center hover:bg-[#F5F5F5] cursor-pointer" onClick={() => toggleGenre(genre)}>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 border border-black mr-[2px] flex justify-center items-center">{isGenreSelected(genre) && <CheckMark />}</div>
                  <span className="ml-2">{genre}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
