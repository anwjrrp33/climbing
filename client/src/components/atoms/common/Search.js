import { SearchIcon } from 'assets/svg/SearchIcon';

export const Search = () => {
  return (
    <form>
      <div className='relative w-80'>
        <input
          className='w-full h-10 rounded-md active:outline-none focus:outline-none ring-2 ring-gray-300 focus:ring-blue-300'
          placeholder='지역별/키워드로 검색해보세요!'
        />
        <div className='absolute top-1 right-1'>
          <SearchIcon />
        </div>
      </div>

      <button className='hidden'>검색</button>
    </form>
  );
};
