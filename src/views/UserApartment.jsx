import React, { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import UserSidebar from "../partials/UserSidebar";
import UserHeader from "../partials/UserHeader";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useSearchParams } from "react-router-dom";
import Loading from "../components/Loading";

function UserApartment() {
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [units, setUnits] = useState();
  const id = localStorage.getItem("userid");

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUnits = async () => {
      try {
        const response = await axiosPrivate.get(`/users/unit/${id}`, {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setUnits(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getUnits();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <div className="flex h-screen overflow-hidden ">
      {/* Sidebar */}
      <UserSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-gray-100">
        {/*  Site header */}
        <UserHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {units ? (
          <main>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto bg-gray-100">
              <div class="px-12 h-90">
                <div class="relative">
                  <ul class="bg-white absolute left-0 right-0 p-3 border-gray-200 rounded-lg sm:flex-row shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-10">
                    <li class="text-2xl text-gray-700 font-bold border-b border-gray border-solid py-5 px-5 mb-2 -mt-3">
                      Apartment Information
                    </li>
                    <li class="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-50">
                      <div class="flex justify-center items-center text-indigo-700">
                        <svg
                          class="h-8 w-8 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div class="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                        <h3 class="text-gray-900 font-medium text-md">
                          Location
                        </h3>
                        <p class="text-gray-600 mt-1 font-regular text-sm">
                          {units.unit.unitLocation}
                        </p>
                      </div>
                    </li>
                    <li class="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-50">
                      <div class="flex justify-center items-center text-amber-600">
                        <svg
                          class="h-8 w-8 text-yellow-600"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <circle cx="12" cy="12" r="9" />{" "}
                          <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1 -1.8 -1" />{" "}
                          <path d="M12 6v2m0 8v2" />
                        </svg>
                      </div>
                      <div class="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                        <h3 class="text-gray-900 font-medium text-md">
                          Monthly Costs
                        </h3>
                        <p class="text-gray-600 mt-1 font-regular text-sm">
                          Rent: ₱{units.unit.unitPrice} / Meralco: ₱15 per
                          kilowatts / Manila Water: ₱150 per head
                        </p>
                      </div>
                    </li>
                    <li class="text-xs uppercase text-gray-400 border-b border-gray border-solid py-2 px-5 mb-2">
                      Remaining Balance
                    </li>
                    <li class="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-50">
                      <div class="flex justify-center items-center">
                        <svg
                          class="h-8 w-8 text-blue-500"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />{" "}
                          <line x1="13" y1="8" x2="15" y2="8" />{" "}
                          <line x1="13" y1="12" x2="15" y2="12" />
                        </svg>
                      </div>
                      <div class="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                        <h3 class="text-gray-900 font-medium text-md">Rent</h3>
                        <p class="text-gray-600 mt-1 font-regular text-sm">
                          As of April 2023: Your remaining balance for rent is
                          ₱7,000.
                        </p>
                      </div>
                    </li>
                    <li class="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-50">
                      <div class="flex justify-center items-center text-indigo-500">
                        <svg
                          class="h-8 w-8 text-blue-700"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                        </svg>
                      </div>
                      <div class="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                        <h3 class="text-gray-900 font-medium text-md">
                          Water Bill
                        </h3>
                        <p class="text-gray-600 mt-1 font-regular text-sm">
                          As of April 2023: Your remaining balance for the water
                          bill is ₱300.
                        </p>
                      </div>
                    </li>
                    <li class="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-50">
                      <div class="flex justify-center items-center">
                        <svg
                          class="h-8 w-8 text-yellow-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <div class="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                        <h3 class="text-gray-900 font-medium text-md">
                          Electricity Bill
                        </h3>
                        <p class="text-gray-600 mt-1 font-regular text-sm">
                          As of April 2023: Your remaining balance for the
                          electricity bill is ₱1,000.
                        </p>
                      </div>
                    </li>
                    <li class="text-xs uppercase text-gray-400 border-b border-gray border-solid py-2 px-5 mb-2">
                      Other Details
                    </li>
                    <li class="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-50">
                      <div class="flex justify-center items-center">
                        <svg
                          class="h-8 w-8 text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </div>
                      <div class="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                        <h3 class="text-gray-900 font-medium text-md">
                          Occupants
                        </h3>
                        <p class="text-gray-600 mt-1 font-regular text-sm">
                          2 people
                        </p>
                      </div>
                    </li>
                    <li class="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-50">
                      <div class="flex justify-center items-center text-indigo-500">
                        <svg
                          class="h-8 w-8 text-blue-800"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />{" "}
                          <line x1="13" y1="7" x2="13" y2="7.01" />{" "}
                          <line x1="17" y1="7" x2="17" y2="7.01" />{" "}
                          <line x1="17" y1="11" x2="17" y2="11.01" />{" "}
                          <line x1="17" y1="15" x2="17" y2="15.01" />
                        </svg>
                      </div>
                      <div class="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                        <h3 class="text-gray-900 font-medium text-md">
                          Unit Type
                        </h3>
                        <p class="text-gray-600 mt-1 font-regular text-sm">
                          Studio Type
                        </p>
                      </div>
                    </li>
                    <li class="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-50">
                      <div class="flex justify-center items-center">
                        <svg
                          class="h-8 w-8 text-yellow-600"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <polyline points="12 4 4 8 12 12 20 8 12 4" />{" "}
                          <polyline points="4 12 12 16 20 12" />{" "}
                          <polyline points="4 16 12 20 20 16" />
                        </svg>
                      </div>
                      <div class="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                        <h3 class="text-gray-900 font-medium text-md">
                          House Level
                        </h3>
                        <p class="text-gray-600 mt-1 font-regular text-sm">
                          {units.unit.unitFloor} floor
                        </p>
                      </div>
                    </li>
                    <li class="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-50">
                      <div class="flex justify-center items-center text-amber-500">
                        <svg
                          class="h-8 w-8 text-yellow-300"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <circle cx="6" cy="6" r="2" />{" "}
                          <circle cx="18" cy="6" r="2" />{" "}
                          <circle cx="6" cy="18" r="2" />{" "}
                          <circle cx="18" cy="18" r="2" />{" "}
                          <line x1="6" y1="8" x2="6" y2="16" />{" "}
                          <line x1="8" y1="6" x2="16" y2="6" />{" "}
                          <line x1="8" y1="18" x2="16" y2="18" />{" "}
                          <line x1="18" y1="8" x2="18" y2="16" />
                        </svg>
                      </div>
                      <div class="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                        <h3 class="text-gray-900 font-medium text-md">
                          House Area
                        </h3>
                        <p class="text-gray-600 mt-1 font-regular text-sm">
                          1st Floor: {units.unit.unitSqm} sq m
                        </p>
                      </div>
                    </li>
                    <li class="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-50">
                      <div class="flex justify-center items-center">
                        <svg
                          class="h-8 w-8 text-blue-500"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" />
                        </svg>
                      </div>
                      <div class="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                        <h3 class="text-gray-900 font-medium text-md">Pets</h3>
                        <p class="text-gray-600 mt-1 font-regular text-sm">
                          None
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </main>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default UserApartment;
