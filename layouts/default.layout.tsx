'use client';

import { focusedState } from '@/atoms/movies';
import React from 'react';
import { useRecoilState } from 'recoil';

export default function Default({ children }: { children: React.ReactNode }) {
  const [, setFocused] = useRecoilState(focusedState);

  function handleClickOut(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      setFocused(false);
    }
  }

  return (
    <div className="flex flex-col w-full justify-start items-center gap-4 p-8 text-[14px] leading-[24px] bg-white text-black min-h-screen" onClick={handleClickOut}>
      {children}
    </div>
  );
}
