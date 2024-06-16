import BaseGenre from '@/components/BaseGenre';
import BaseRating from '@/components/BaseRating';
import BaseSearchMovie from '@/components/BaseSearchMovie';
import BaseSelectedMovie from '@/components/BaseSelectedMovie';

export default function Home() {
  return (
    <div className="flex flex-col w-full justify-center items-start gap-4 p-8 text-[14px] leading-[24px] bg-white">
      <h1 className="w-full text-center text-4xl my-4 font-semibold">Movie App</h1>
      <div className="w-full items-start min-h-screen justify-center flex gap-3">
        <BaseSearchMovie className="max-w-[441px] w-full text-start" />
        <BaseRating />
        <BaseGenre />
      </div>
      <BaseSelectedMovie />
    </div>
  );
}
