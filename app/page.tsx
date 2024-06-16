import BaseGenre from '@/components/BaseGenre';
import BaseRating from '@/components/BaseRating';
import BaseSearchMovie from '@/components/BaseSearchMovie';
import BaseSelectedMovie from '@/components/BaseSelectedMovie';

export default function Home() {
  return (
    <div className="flex flex-col w-full justify-start items-center gap-4 p-8 text-[14px] leading-[24px] bg-white text-black min-h-screen">
      <h1 className="w-full text-center text-4xl my-4 font-semibold">Movie App</h1>
      <div className="w-full items-center justify-center flex gap-3 flex-col-reverse md:flex-row">
        <div className="w-full flex justify-end">
          <BaseSearchMovie className="md:max-w-[442px] w-full text-start" />
        </div>
        <div className="flex gap-3 w-full">
          <BaseRating className="md:max-w-[113px] w-full text-start" />
          <BaseGenre className="w-full md:w-1/3 md:max-w-[220px]" />
        </div>
      </div>
      <BaseSelectedMovie />
    </div>
  );
}
