import React, { useState } from "react";


function Navbar(props){
  const {tabCount, setTabCount} = props;
  const handleIncrement = () => {
    setTabCount(tabCount+1)
  }

  const handleDecrement = () => {
    if (tabCount > 1) {
      setTabCount(tabCount-1)
    }
  }
  
  return (
        <nav className="bg-[#2A4867] h-[7.5vh] px-2 sm:px-4 py-2.5 rounded mb-2 mt-1  ml-1 mr-1">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">CODEVIM</span>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-zinc-900 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-zinc-900 dark:border-zinc-900">
        <li>
          <button id="add" onClick={handleIncrement}>
          <a href="#" className="block py-2 pr-4 pl-3 text-white bg-zinc-900 rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white" aria-current="page"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            </a>
            
        </button>
        </li>
        <li>
          <button id="delete" onClick={handleDecrement}>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-zinc-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-zinc-900 dark:hover:text-white md:dark:hover:bg-transparent">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
</svg>
          </a>
          </button>    
        </li>
        <li>
            <button id="export">
            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-zinc-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
</svg>

            </a>
            </button>       
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar;