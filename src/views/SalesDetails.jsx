import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

function SalesDetails() {
  const axiosPrivate = useAxiosPrivate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sales, setSales] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = localStorage.getItem("userid");

  const type = searchParams.get("type");

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUnits = async () => {
      try {
        const response = await axiosPrivate.get(`/sales`, {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setSales(response.data);
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
          <div class="flex flex-col justify-center m-5">
            <div class="mb-5 w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
              <header class="px-5 py-4 border-b border-gray-100">
                <div class="grid grid-cols-2">
                  <div class="flex items-center">
                    <h2 class="font-semibold text-gray-800">Sales and Profit</h2>
                  </div>
                  <div className="flex justify-end">
                    <select
                      className="inline-flex text-sm pr-8 py-2 border-white text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-60 hover:border-gray-700 ">
                      <option value="jan">January</option>
                      <option value="feb">February</option>
                      <option value="mar">March</option>
                      <option value="apr">April</option>
                      <option value="may">May</option>
                      <option value="jun">June</option>
                      <option value="jul">July</option>
                      <option value="aug">August</option>
                      <option value="sep">September</option>
                      <option value="oct">October</option>
                      <option value="nov">November</option>
                      <option value="dec">December</option>
                    </select>
                  </div>
                </div>
              </header>
              <div class="p-3">
                <div class="overflow-x-auto">
                  <table class="table-auto w-full">
                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">Unit</div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-center">Rental</div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-center">Electricity</div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-center">Water</div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-center">Telephone & Internet</div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-bold text-center">TOTAL</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="text-sm divide-y divide-gray-100">
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="w-10 h-10 flex-shrink-0 flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-5 h-5"
                              >
                                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                              </svg>
                            </div>
                            <div class="font-medium text-gray-800">
                              Quiapo 1 - Room 101
                            </div>
                          </div>
                        </td>

                        <td class="p-2 whitespace-nowrap">
                          <div class="text-center">
                            ₱100
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-center">
                            ₱100
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-center">
                            ₱100
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-center">
                            ₱100
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-center font-semibold">
                            ₱400
                          </div>
                        </td>
                      </tr>


                      <tr class = "bg-gray-100">
                      <td class="p-2 whitespace-nowrap">
                          <div class="flex justify-end">
                            <div class="font-semibold tracking-wider text-gray-800">
                              TOTAL
                            </div>
                          </div>
                        </td>

                        <td class="p-2 whitespace-nowrap">
                          <div class="text-center">
                            ₱100
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-center">
                            ₱100
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-center">
                            ₱100
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-center">
                            ₱100
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-center font-semibold">
                            ₱400
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

export default SalesDetails;
