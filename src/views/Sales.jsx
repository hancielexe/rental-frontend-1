import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

function Sales() {
  const axiosPrivate = useAxiosPrivate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [units, setUnits] = useState();
  const id = localStorage.getItem("userid");

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUnits = async () => {
      try {
        const response = await axiosPrivate.get(`/sales`, {
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
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-gray-100">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <section class="antialiased bg-gray-100 text-gray-600 h-screen px-4">
          <div class="flex flex-col justify-center h-full">
            <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
              <header class="px-5 py-4 border-b border-gray-100">
                <h2 class="font-semibold text-gray-800">Sales and Profit</h2>
              </header>

              <div class="p-3">
                <div class="overflow-x-auto">
                  <table class="table-auto w-full">
                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">Sales Type</div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left"></div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left"></div>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="text-sm divide-y divide-gray-100">
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="w-10 h-10 flex-shrink-0 flex items-center mr-2 sm:mr-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-9 h-9"
                              >
                                <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                                <path
                                  fill-rule="evenodd"
                                  d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                                  clip-rule="evenodd"
                                />
                                <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
                              </svg>
                            </div>
                            <div class="font-medium text-gray-800">
                              GROSS SALES
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left font-medium text-green-500">
                            <NavLink end to="/finance/sales/details?type=">
                              <button class="py-1 px-4 bg-transparent text-indigo-600 font-semibold border border-indigo-400 rounded hover:bg-indigo-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:translate-x-1 active:translate-x-0">
                                See More
                              </button>
                            </NavLink>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="w-10 h-10 flex-shrink-0 flex items-center mr-2 sm:mr-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-9 h-9"
                              >
                                <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
                                <path
                                  fill-rule="evenodd"
                                  d="M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </div>
                            <div class="font-medium text-gray-700">RENTAL</div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left font-medium text-green-500">
                            <NavLink
                              end
                              to="/finance/sales/details?type=rental"
                            >
                              <button class="py-1 px-4 bg-transparent text-indigo-600 font-semibold border border-indigo-400 rounded hover:bg-indigo-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:translate-x-1 active:translate-x-0">
                                See More
                              </button>
                            </NavLink>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="w-10 h-10 flex-shrink-0 flex items-center mr-2 sm:mr-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-9 h-9"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </div>
                            <div class="font-medium text-gray-800">
                              ELECTRICITY
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left font-medium text-green-500">
                            <NavLink
                              end
                              to="/finance/sales/details?type=electricity"
                            >
                              <button class="py-1 px-4 bg-transparent text-indigo-600 font-semibold border border-indigo-400 rounded hover:bg-indigo-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:translate-x-1 active:translate-x-0">
                                See More
                              </button>
                            </NavLink>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="w-10 h-10 flex-shrink-0 flex-items-center mr-2 sm:mr-3">
                              <svg
                                class="h-9 w-9 text-gray-600"
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
                                <path
                                  fill="#4a5568"
                                  d="M12 3l5 5a7 7 0 1 1 -10 0l5 -5"
                                />
                              </svg>
                            </div>
                            <div class="font-medium text-gray-800">WATER</div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <NavLink end to="/finance/sales/details?type=water">
                            <button class="py-1 px-4 bg-transparent text-indigo-600 font-semibold border border-indigo-400 rounded hover:bg-indigo-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:translate-x-1 active:translate-x-0">
                              See More
                            </button>
                          </NavLink>
                        </td>
                      </tr>
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="w-10 h-10 flex-shrink-0 flex items-center mr-2 sm:mr-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-9 h-9"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </div>
                            <div class="font-medium text-gray-800">
                              TELEPHONE & INTERNET
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left font-medium text-green-500">
                            <NavLink
                              end
                              to="/finance/sales/details?type=internet"
                            >
                              <button class="py-1 px-4 bg-transparent text-indigo-600 font-semibold border border-indigo-400 rounded hover:bg-indigo-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:translate-x-1 active:translate-x-0">
                                See More
                              </button>
                            </NavLink>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Sales;
