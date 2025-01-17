"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      <div className="fixed top-0 left-0 text-center w-full header bg-violet-600 py-4 text-white font-bold text-lg shadow-lg">
        Simple Todo Application with Redux & Next JS
      </div>

      <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        <div>
          <form className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
            <img src="./images/notes.png" className="w-6 h-6" alt="Add todo" />
            <input
              type="text"
              placeholder="Type your todo"
              className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
            />
            <button
              type="submit"
              className="appearance-none w-8 h-8 bg-[url('./images/plus.png')] bg-no-repeat bg-contain"
            ></button>
          </form>

          <ul className="flex justify-between my-4 text-xs text-gray-500">
            <li className="flex space-x-1 cursor-pointer">
              <img
                className="w-4 h-4"
                src="./images/double-tick.png"
                alt="Complete"
              />
              <span>Complete All Tasks</span>
            </li>
            <li className="cursor-pointer">Clear completed</li>
          </ul>
        </div>
        <hr className="mt-4" />

        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
          <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
            <div className="rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-green-500 focus-within:border-green-500">
              <input
                type="checkbox"
                className="opacity-0 absolute rounded-full"
              />
              <svg
                className="hidden fill-current w-3 h-3 text-green-500 pointer-events-none"
                viewBox="0 0 20 20"
              >
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
              </svg>
            </div>

            <div className="select-none flex-1 line-through">
              Learn React from Learn with Sumit YouTube Channel
            </div>

            <div className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 bg-green-500"></div>

            <div className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500"></div>

            <div className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500"></div>

            <img
              src="./images/cancel.png"
              className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
              alt="Cancel"
            />
          </div>

          <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
            <div className="rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-green-500 focus-within:border-green-500">
              <input
                type="checkbox"
                className="opacity-0 absolute rounded-full"
              />
              <svg
                className="hidden fill-current w-3 h-3 text-green-500 pointer-events-none"
                viewBox="0 0 20 20"
              >
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
              </svg>
            </div>

            <div className="select-none flex-1">
              Learn Redux from Think in a Redux way course
            </div>

            <div className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 bg-green-500"></div>

            <div className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500"></div>

            <div className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500"></div>

            <img
              src="./images/cancel.png"
              className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
              alt="Cancel"
            />
          </div>
        </div>

        <hr className="mt-4" />

        <div className="mt-4 flex justify-between text-xs text-gray-500">
          <p>2 tasks left</p>
          <ul className="flex space-x-1 items-center text-xs">
            <li className="cursor-pointer font-bold">All</li>
            <li>|</li>
            <li className="cursor-pointer">Incomplete</li>
            <li>|</li>
            <li className="cursor-pointer">Complete</li>
            <li></li>
            <li></li>
            <li className="h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500"></li>
            <li className="h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer"></li>
            <li className="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer"></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
