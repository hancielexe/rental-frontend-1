import React from "react";
import { Link, NavLink } from "react-router-dom";
import EditMenu from "../EditMenu";

function UserCard01() {
  return (
    <div class="p-5 bg-white flex items-center mx-auto border-b mb-10 border-gray-200 rounded-lg sm:flex-row flex-col shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-10">
      <div class="m:w-32 sm:h-52 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
        <img class="border rounded-lg object-fill h-full w-full" src="./assets/q1-apt3-landsc2.png" alt="" />
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h1 class="text-black text-2xl title-font font-bold mb-2">
          Your Apartment
        </h1>
        <p class="leading-relaxed text-base">
          Blue bottle crucifix vinyl post-ironic four dollar toast vegan
          taxidermy. Gastropub indxgo juice poutine.
        </p>
        <div class="py-4">
          <div class=" inline-block mr-2">
            <div class="flex  pr-2 h-full items-center">
              <svg
                class="text-indigo-500 w-6 h-6 mr-1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="12" cy="12" r="9" />
                <path d="M9 12l2 2l4 -4" />
              </svg>
              <p class="title-font font-medium">Paid this month</p>
            </div>
          </div>
          <div class="inline-block mr-2">
            <div class="flex  pr-2 h-full items-center">
              <svg
                class="text-indigo-500 w-6 h-6 mr-1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="12" cy="12" r="9" />
                <path d="M9 12l2 2l4 -4" />
              </svg>
              <p class="title-font font-medium">Ano pa</p>
            </div>
          </div>
          <div class=" inline-block mr-2">
            <div class="flex  pr-2 h-full items-center">
              <svg
                class="text-gray-500 w-6 h-6 mr-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
              <p class="title-font font-medium">Electricity</p>
            </div>
          </div>

          <div class=" inline-block mr-2">
            <div class="flex  pr-2 h-full items-center">
              <svg
                class="text-gray-500 w-6 h-6 mr-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
              <p class="title-font font-medium">Water</p>
            </div>
          </div>
          <div class=" inline-block mr-2">
            <div class="flex  pr-2 h-full items-center">
              <svg
                class="text-gray-500 w-6 h-6 mr-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
              <p class="title-font font-medium">Wi-fi</p>
            </div>
          </div>
        </div>
        <div class="md:flex font-bold text-gray-800">
          <div class="w-full md:w-1/2 flex space-x-3">
            <div class="w-1/2">
              <h2 class="text-gray-500">Remaining Balance</h2>
              <p>₱7,000</p>
            </div>
            <div class="w-1/2">
              <h2 class="text-gray-500">Title</h2>
              <p>description</p>
            </div>
          </div>
          <div class="w-full md:w-1/2 flex space-x-3">
            <div class="w-1/2">
              <h2 class="text-gray-500">Title</h2>
              <p>description</p>
            </div>
            <div class="w-1/2">
              <h2 class="text-gray-500">Title</h2>
              <p>description</p>
            </div>
          </div>
        </div>
        <NavLink
          end
          to="/apartment">
          <button class="group flex bg-transparent text-m font-semibold text-white">
            <span class="relative mt-2 pr-4 pb-1 text-indigo-500 after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-indigo-400 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">
              View Details</span>
            <svg viewBox="0 0 46 16" height="10" width="20" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal" class="mt-4 -translate-x-2 fill-indigo-500 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105 group-hover:fill-white">
              <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
            </svg>
          </button>

        </NavLink>
      </div>
    </div>
  );
}

export default UserCard01;
