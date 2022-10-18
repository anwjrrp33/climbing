import { useRef } from "react";
import { Card } from "components/atoms/crag/Card";
// import { meTaCard } from "components/atoms/mate/Card";
import { Link } from "react-router-dom";
import { mainCargList } from "utils/mock/mainCargList";
import { mainMateList } from "utils/mock/mainMateList";

const Main = () => {
  const sliderBanner = useRef();
  const sliderCrag = useRef();
  const sliderMate = useRef();
  const images = [...Array(5).keys()];
  return (
    <div>
      <div className="mx-30">
        <div className="flex items-center justify-center w-full h-full ">
          <button
            className="bg-gray-500 "
            onClick={() => (sliderBanner.current.scrollLeft -= 1400)}
          >
            <svg
              class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fillRule="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <div
            ref={sliderBanner}
            class="snap-x overflow-scroll scroll-smooth h-full flex items-center justify-start"
          >
            {images.map((e, i) => (
              <div
                key={i}
                className="snap-start flex flex-shrink-0 w-auto mx-7"
              >
                <img
                  src={`https://picsum.photos/id/${i}/1400/600`}
                  alt={`images${i}`}
                  className="object-cover object-center w-full"
                />
              </div>
            ))}
          </div>
          <button
            className="bg-gray-500 "
            onClick={() => (sliderBanner.current.scrollLeft += 1400)}
          >
            <svg
              class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fillRule="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="m-4">
        <Link to="/crag" className="font-bold">
          암장 정보
        </Link>
      </div>

      <div className="mx-30">
        <div className="flex items-center justify-center w-full h-full ">
          <button
            className="bg-gray-500 "
            onClick={() => (sliderCrag.current.scrollLeft -= 400)}
          >
            <svg
              class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fillRule="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>

          <div
            ref={sliderCrag}
            class="snap-x overflow-scroll scroll-smooth h-full flex items-center justify-start"
          >
            {mainCargList.data.map((crag, i) => (
              <div
                key={i}
                className="snap-start flex flex-shrink-0 w-auto mx-10"
              >
                <Card key={crag.id} cragInfo={crag} />
              </div>
            ))}
          </div>

          <button
            className="bg-gray-500 "
            onClick={() => (sliderCrag.current.scrollLeft += 400)}
          >
            <svg
              class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fillRule="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="m-4">
        <Link to="/mate" className="font-bold">
          커뮤니티
        </Link>
      </div>

      <div className="flex items-center justify-center w-full h-full mb-8">
        <button
          className="bg-gray-500 "
          onClick={() => (sliderMate.current.scrollLeft -= 400)}
        >
          <svg
            class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fillRule="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>

        <div
          ref={sliderMate}
          class="snap-x overflow-scroll scroll-smooth h-full flex items-center justify-start"
        >
          {mainMateList.data.map((mate, i) => (
            <div key={i} className="snap-start flex flex-shrink-0 w-auto mx-10">
              <Card key={mate.id} cragInfo={mate} />
            </div>
          ))}
        </div>
        <button
          className="bg-gray-500 "
          onClick={() => (sliderMate.current.scrollLeft += 400)}
        >
          <svg
            class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fillRule="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Main;
