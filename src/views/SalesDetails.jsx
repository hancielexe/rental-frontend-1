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
                          <div class="font-semibold text-left">Unit</div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">Type</div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">Amount</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="text-sm divide-y divide-gray-100">
                      {/* start automation here */}
                      {sales?.length ? ( // <li key={i}>{user?.username}</li>
                        <>
                          {sales
                            .filter((sale) => {
                              /* if(unit.unitAvailability === true) */ return type.toLowerCase() ===
                                ""
                                ? sale
                                : sale.salesType.toLowerCase().includes(type);
                            })
                            .map((filteredSales, i) => (
                              <tr key={i}>
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
                                      {filteredSales.unitName}
                                    </div>
                                  </div>
                                </td>

                                <td class="p-2 whitespace-nowrap">
                                  <div class="text-left">
                                    {filteredSales.salesType}
                                  </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                  <div class="text-left font-medium text-green-500">
                                    ₱{filteredSales.amount}
                                  </div>
                                </td>
                              </tr>
                            ))}
                        </>
                      ) : (
                        <p>No users to display!</p>
                      )}
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
