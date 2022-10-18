import { ReactComponent as NotFoundCat } from 'assets/svg/NotFoundCat.svg';

function NotFound() {
  return (
    <div className='h-screen w-full bg-gray-100 flex items-center'>
      <div className='container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700'>
        <div className='max-w-md'>
          <div className='text-5xl font-dark font-bold'>404</div>
          <p className='text-2xl md:text-3xl font-light leading-normal'>
            페이지를 찾을 수 없어요!
          </p>
          <p className='mb-8'>아래 버튼을 눌러 올바른 경로로 이동해주세요</p>

          <button className='px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700'>
            <a href='/'>홈으로 이동</a>
          </button>
        </div>
      </div>
      <div className='max-w-lg'>
        <NotFoundCat />
      </div>
    </div>
  );
}

export default NotFound;
