import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <header className="z-10 fixed top-0 w-full text-gray-600 body-font bg-slate-500">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">my shoppin site</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/"} className="mr-5 hover:text-gray-900">
            home
          </Link>
          <Link href={"/products"} className="mr-5 hover:text-gray-900">
            all products
          </Link>
        </nav>
        <div className="flex gap-2">
          <Link href={"/shopping-cart"}>
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-blue-400 rounded text-base mt-4 md:mt-0">
              cart
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
