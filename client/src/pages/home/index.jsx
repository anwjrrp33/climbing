import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'components/atoms/crag/Card';
// import { meTaCard } from "components/atoms/mate/Card";
import { mainCragList } from 'utils/mock/mainCragList';
import { mainMateList } from 'utils/mock/mainMateList';
import { ReactComponent as LeftArrow } from 'assets/svg/LeftArrow.svg';
import { ReactComponent as RightArrow } from 'assets/svg/RightArrow.svg';

const Main = () => {
  const sliderBanner = useRef();
  const sliderCrag = useRef();
  const sliderMate = useRef();
  const images = [...Array(5).keys()];

  return (
    <div>
      <div className='mx-30'>
        <div className='flex items-center justify-center w-full h-full'>
          <button
            className='bg-gray-500 '
            onClick={() => (sliderBanner.current.scrollLeft -= 1400)}
          >
            <LeftArrow />
          </button>
          <div
            ref={sliderBanner}
            className='snap-x overflow-scroll scroll-smooth h-full flex items-center justify-start'
          >
            {images.map((e, i) => (
              <div
                key={i}
                className='snap-start flex flex-shrink-0 w-auto mx-7'
              >
                <img
                  src={`https://picsum.photos/id/${i}/1400/600`}
                  alt={`images${i}`}
                  className='object-cover object-center w-full'
                />
              </div>
            ))}
          </div>
          <button
            className='bg-gray-500 '
            onClick={() => (sliderBanner.current.scrollLeft += 1400)}
          >
            <RightArrow />
          </button>
        </div>
      </div>

      <div className='m-4'>
        <Link to='/crag' className='font-bold'>
          암장 정보
        </Link>
      </div>

      <div className='mx-30'>
        <div className='flex items-center justify-center w-full h-full'>
          <button
            className='bg-gray-500 '
            onClick={() => (sliderCrag.current.scrollLeft -= 400)}
          >
            <LeftArrow />
          </button>

          <div
            ref={sliderCrag}
            className='snap-x overflow-scroll scroll-smooth h-full flex items-center justify-start'
          >
            {mainCragList.data.map((crag, i) => (
              <div
                key={i}
                className='snap-start flex flex-shrink-0 w-auto mx-10'
              >
                <Card key={crag.id} cragInfo={crag} />
              </div>
            ))}
          </div>

          <button
            className='bg-gray-500 '
            onClick={() => (sliderCrag.current.scrollLeft += 400)}
          >
            <RightArrow />
          </button>
        </div>
      </div>

      <div className='m-4'>
        <Link to='/mate' className='font-bold'>
          커뮤니티
        </Link>
      </div>

      <div className='flex items-center justify-center w-full h-full mb-8'>
        <button
          className='bg-gray-500 '
          onClick={() => (sliderMate.current.scrollLeft -= 400)}
        >
          <LeftArrow />
        </button>

        <div
          ref={sliderMate}
          className='snap-x overflow-scroll scroll-smooth h-full flex items-center justify-start'
        >
          {mainMateList.data.map((mate, i) => (
            <div key={i} className='snap-start flex flex-shrink-0 w-auto mx-10'>
              <Card key={mate.id} cragInfo={mate} />
            </div>
          ))}
        </div>
        <button
          className='bg-gray-500 '
          onClick={() => (sliderMate.current.scrollLeft += 400)}
        >
          <RightArrow />
        </button>
      </div>
    </div>
  );
};

export default Main;
