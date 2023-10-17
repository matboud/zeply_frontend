import React, { useState } from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function Header({ handleDrawer }) {
  const [isTop5, setTop5] = useState(false);
  return (
    <div className="flex flex-wrap items-center mt-20 max-w-[78rem] m-auto px-8">
      <div className="order-1 md:order-1 w-1/2 md:w-auto md:pr-2">
        <Image src="/logo.svg" width="50" height="50" className="mr-10" />
      </div>

      <div className="order-2 md:order-5 w-1/2 md:w-auto md:ml-auto flex justify-end relative">
        <div className="flex relative cursor-pointer" onClick={handleDrawer}>
          <Image src="/notification.png" width="30" height="30" />
          <div className="bg-red-500 w-4 h-4 rounded-full flex justify-center items-center left-4 absolute text-xs">
            2
          </div>
        </div>
      </div>

      <div className="order-3 md:order-2 w-full md:w-auto md:p-2  mt-4 md:mt-0">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center bg-none">
            <label htmlFor="country" className="sr-only">
              Country
            </label>
            <select
              id="country"
              name="country"
              className="h-full rounded-md border-0  bg-none  py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-none sm:text-sm"
            >
              <option>USD</option>
              <option>EUR</option>
              <option>BTC</option>
            </select>
            <ChevronDownIcon
              className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            onFocus={() => setTop5(true)}
            onBlur={() => setTop5(false)}
            type=""
            name="phone-number"
            id="phone-number"
            autoComplete="address"
            placeholder="Address"
            className="block w-full md:min-w-[25rem] rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-none sm:text-sm sm:leading-6"
          />
          {isTop5 && (
            <div className="absolute top-full left-0 w-full bg-gray-900/60 border border-gray-600 rounded-md z-10 text-gray-200">
              <ul>
                <li className="p-2">Row 1</li>
                <li className="p-2">Row 2</li>
                <li className="p-2">Row 3</li>
                <li className="p-2">Row 4</li>
                <li className="p-2">Row 5</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="order-5 md:order-4 w-full md:w-auto md:p-2  mt-4 md:mt-0">
        <button
          type="submit"
          className="block w-full  rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Header;
