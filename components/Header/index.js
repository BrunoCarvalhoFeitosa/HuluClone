import Image from 'next/image';
import HeaderItem from '../HeaderItem';
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon
} from '@heroicons/react/outline';

const Header = () => {
  return (
    <header className='flex flex-col justify-center md:justify-between md:flex-row m-5 items-center'>
      <div className='flex flex-grow items-center max-w-2xl'>
        <HeaderItem title='Home' Icon={HomeIcon} />
        <HeaderItem title='Trending' Icon={LightningBoltIcon} />
        <HeaderItem title='Verified' Icon={BadgeCheckIcon} />
        <HeaderItem title='Collections' Icon={CollectionIcon} />
        <HeaderItem title='Search' Icon={SearchIcon} />
        <HeaderItem title='Account' Icon={UserIcon} />
      </div>
      <div className='relative bottom-[20px] md:bottom-[10px] md:right-[20px] cursor-pointer'>
        <Image
          objectFit='contain'
          src='/hulu-logo.png'
          width={100}
          height={100}
          alt='Hulu'
          title='Hulu'
        />
      </div>
    </header>
  );
}

export default Header;