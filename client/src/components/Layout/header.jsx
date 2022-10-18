import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" h-20 bg-teal-100 grid grid-cols-7  place-content-center">
      <div className="col-span-2 grid grid-cols-4 pl-5">
        <div className="text-2xl">
          <Link to="/">Climbing</Link>
        </div>
        <div className="mt-2 pl-9">
          <Link to="/crag">암장</Link>
        </div>
        <div className="mt-2 ">
          <Link to="/mate">커뮤니티</Link>
        </div>
      </div>
      <div className="col-span-1  "></div>
      <div className="col-span-1  "></div>
      <div className="col-span-2  pl-12 text-right">
        <input className="bg-blue-200" />
        <Link to="/crag">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 h-6  "
            >
              <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </Link>
      </div>
      <div className="col-span-1 mt-1 pr-12 text-right">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
