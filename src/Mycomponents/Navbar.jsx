import React from "react";
import { useState } from "react";
const Navbar = (props) => {
  const [inputCity, setinputCity] = useState(props.city);
  const onHandleChange = (event) => {
    setinputCity(event.target.value);
  };
  const searchCity = () => {
    props.setCity(inputCity);
  };
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="./apple-touch-icon.png"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              ShiWeather
            </span>
          </a>
          <div className="flex md:order-2">
            <div className="relative md:block">
              <div className="flex items-center">
                <input
                  type="text"
                  id="search-navbar"
                  value={inputCity}
                  onChange={onHandleChange}
                  className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 roundedr-l-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <button
                  className="items-center justify-center p-2  text-sm font-medium text-gray-900 rounded-r-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                  onClick={searchCity}
                >
                  Search City
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
