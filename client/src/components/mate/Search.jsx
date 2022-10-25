import { useEffect, useState } from 'react';
import axios from 'axios';
import { ReactComponent as SearchIcon } from 'assets/svg/SearchIcon.svg';

export const Search = () => {
  const [inputData, setInputData] = useState();
  const [searchData, setSearchData] = useState();

  useEffect(() => {
    (async () => {
      const { success, data } = await axios.get('/search');
      if (success) setSearchData(data);
    })();
  }, []);

  const handleSubmit = () => {
    const filteredData = searchData?.filter(
      ({ title, content, address }) =>
        title.includes(inputData) ||
        content.includes(inputData) ||
        address.includes(inputData)
    );

    setInputData(filteredData);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setInputData(value);
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className='mb-16'>
      <form onSubmit={handleSubmit}>
        <div className='relative w-full my-6'>
          <input
            value={inputData}
            className='w-full h-16 rounded-2xl px-3 ring-2 ring-gray-300 active:outline-none focus:outline-none focus:ring-blue-300'
            placeholder='지역별/키워드로 검색해보세요!'
            onChange={handleChange}
            onKeyUp={handleKeyUp}
          />
          <div
            className='absolute top-5 right-5 cursor-pointer'
            onClick={handleSubmit}
          >
            <SearchIcon />
          </div>
        </div>
      </form>
    </div>
  );
};
