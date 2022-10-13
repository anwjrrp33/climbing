import { Tag } from './Tag';
import { SearchIcon } from 'assets/svg/SearchIcon';

export const Search = () => {
  const regionList = [
    '서울시 노원구',
    '경기도 일산',
    '서울시 강동구',
    '경기도 수원',
  ];

  return (
    <div className='mb-16'>
      <form>
        <div className='relative w-96 my-6'>
          <input
            className='w-full h-10 rounded-md px-3 ring-2 ring-gray-300 active:outline-none focus:outline-none focus:ring-blue-300'
            placeholder='지역별/키워드로 검색해보세요!'
          />
          <div className='absolute top-2 right-2 cursor-pointer'>
            <SearchIcon />
          </div>
        </div>

        {/* 검색 버튼(숨겨져 있음) - 엔터 치면 검색 실행 */}
        <button className='hidden' type='submit' onKeyDown={() => {}}>
          검색
        </button>
      </form>

      <div className='flex space-x-3'>
        {regionList?.map((region, id) => (
          <Tag key={id} title={region} />
        ))}
      </div>
    </div>
  );
};
