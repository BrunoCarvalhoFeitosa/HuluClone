import Image from 'next/image';
import { forwardRef } from 'react';
import { ThumbUpIcon } from '@heroicons/react/outline';

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL= 'https://image.tmdb.org/t/p/original';

  return (
    <div
      ref={ref}
      className='group p-2 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'
    >
      <div>
        <Image
          layout='responsive'
          src={`${BASE_URL}${result.backdrop_path || result.poster_path || `${BASE_URL}${result.poster_path}`}`}
          width={1080}
          height={657}
        />
      </div>
      <div className='p-2'>
        <h4 className='truncate max-w-md text-[13px]'>{result.overview}</h4>
        <h3 className='mt-1 text-[18px] text-white transition duration-100 ease-in-out group-hover:font-bold'>{result.title || result.original_name}</h3>
        <div className='flex items-center opacity-0 group-hover:opacity-100'>
          <div>{result.media_type && `${result.media_type}`}</div>
          <div>{result.release_date || result.first_air_date}</div>
          <div className='flex items-center'>
            <ThumbUpIcon className='h-5 mx-2' />
            {result.vote_count}
          </div>
        </div>
      </div>
    </div>
  );
})

export default Thumbnail;