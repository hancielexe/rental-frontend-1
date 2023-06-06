import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

function UserCard01() {
  const axiosPrivate = useAxiosPrivate();
  const [user, setUser] = useState();
  const id = localStorage.getItem("userid");

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUser = async () => {
      try {
        const response = await axiosPrivate.get(`/users/unit/${id}`, {
          signal: controller.signal,
        });
        isMounted && setUser(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getUser();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <div class="p-5 bg-white flex items-center mx-auto border-b mb-10 border-gray-200 rounded-lg sm:flex-row flex-col shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-10">
      <div class="m:w-32 sm:h-52 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
        {user ?  <img class="border rounded-lg object-fill h-full w-full" src={user.unit.imagePath} alt="" /> : null}
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h1 class="text-black text-2xl title-font font-bold mb-2">
          Your Apartment
        </h1>
        <p class="leading-relaxed text-base">
          This cozy space offers a comfortable and inviting atmosphere, making it the perfect place to call home.
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
              <p class="title-font font-medium">Verified User</p>
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
              <p class="title-font font-medium">Paid deposit</p>
            </div>
          </div>
          <div class="md:flex font-bold text-gray-800 mt-3">
            <div class="w-full md:w-1/2 flex space-x-3">
              <div class="w-1/2">
                <h2 class="text-gray-500">Remaining Balance</h2>
                <p>₱0.00</p>
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
    </div>
  );
}

export default UserCard01;
