import BaseGenre from '@/components/BaseGenre';
import BaseRating from '@/components/BaseRating';
import BaseSearchMovie from '@/components/BaseSearchMovie';
import BaseSelectedMovie from '@/components/BaseSelectedMovie';
import Default from '@/layouts/default.layout';

export default function Home() {
  return (
    <Default>
      <h1 className="w-full text-center text-4xl my-4 font-semibold">Movie App</h1>
      <div className="w-full items-center justify-center flex gap-3 flex-col-reverse md:flex-row">
        <div className="w-full flex justify-end">
          <BaseSearchMovie className="md:max-w-[442px] w-full text-start" />
        </div>
        <div className="flex gap-3 w-full">
          <BaseRating className="md:max-w-[113px] w-full text-start" />
          <BaseGenre className="md:max-w-[113px] w-full text-start" />
        </div>
      </div>
      <BaseSelectedMovie />
    </Default>
  );
}
