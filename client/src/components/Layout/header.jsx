import { Link } from 'react-router-dom';
import { ReactComponent as SearchIcon } from 'assets/svg/SearchIcon.svg';
import { ReactComponent as UserIcon } from 'assets/svg/UserIcon.svg';

export const Header = () => {
  return (
    <div className='h-20 bg-teal-100 grid grid-cols-7 place-content-center'>
      <div className='w-96 col-span-2 grid grid-cols-4 pl-5'>
        <div className='text-2xl'>
          <Link to='/'>Try/Catch</Link>
        </div>
        <div className='mt-2 pl-9'>
          <Link to='/crag'>암장</Link>
        </div>
        <div className='mt-2'>
          <Link to='/mate'>커뮤니티</Link>
        </div>
      </div>

      <div className='col-span-2 pl-12 text-right'>
        <input className='bg-blue-200' />
        <Link to='/crag'>
          <button>
            <SearchIcon />
          </button>
        </Link>
      </div>
      <div className='col-span-1 mt-1 pr-12 text-right'>
        <button>
          <UserIcon />
        </button>
      </div>
    </div>
  );
};
