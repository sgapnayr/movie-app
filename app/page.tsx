import BaseGenre from '@/components/BaseGenre';
import BaseRating from '@/components/BaseRating';
import BaseSearchMovie from '@/components/BaseSearchMovie';

export default function Home() {
  return (
    <div className="flex w-full min-h-screen justify-center items-center gap-4 p-8 text-[14px] leading-[24px] bg-white">
      <BaseSearchMovie className="max-w-[441px] w-full text-start" />
      <BaseGenre />
      <BaseRating />
    </div>
  );
}
