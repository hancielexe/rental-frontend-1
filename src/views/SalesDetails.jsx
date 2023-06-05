import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import Loading from "../components/Loading";

function SalesDetails() {
  const axiosPrivate = useAxiosPrivate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sales, setSales] = useState();
  const [users, setUsers] = useState();
  const [month, setMonth] = useState("");
  const [elecTotal, setElecTotal] = useState(0);
  const [watTotal, setWatTotal] = useState(0);
  const [rentTotal, setRentTotal] = useState(0);
  const [intTotal, setIntTotal] = useState(0);
  const [salaryTotal, setSalaryTotal] = useState(0);
  const trigger = useRef(null);
  const dropdown = useRef(null);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getSales = async () => {
      try {
        const response = await axiosPrivate.get(`/billing`, {
          signal: controller.signal,
        });
        
        let rent = 0;
        let elec = 0;
        let wat = 0;
        let int = 0;

        response.data?.length 
          await response.data.filter((sale) => {
            if (getMonthFromBSONDate(sale.date) === month){
              elec += (sale.latestElec - sale.prevElec) * 15;
              wat += (sale.latestWat - sale.prevWat) * 42;
              rent += sale.rent;
              int += sale.int;
            }
          })
        setElecTotal(elec);
        setWatTotal(wat);
        setRentTotal(rent);
        setIntTotal(int);

        isMounted && setSales(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getSales();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [month]);

  const handleSelectChange = (event) => {
    const value = parseInt(event.target.value);
    console.log(value);
    setMonth(value);
  };

  function getMonthFromBSONDate(bsonDate) {
    const date = new Date(bsonDate);
    const month = date.getMonth();
    return month;
  }

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
                      className="inline-flex text-sm pr-8 py-2 border-white text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-60 hover:border-gray-700 "
                      ref={trigger}
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      onFocus={() => setDropdownOpen(true)}
                      onBlur={() => setDropdownOpen(false)}
                      onChange={handleSelectChange} >
                      <option value="0">January</option>
                      <option value="1">February</option>
                      <option value="2">March</option>
                      <option value="3">April</option>
                      <option value="4">May</option>
                      <option value="5">June</option>
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
                          <div class="font-semibold text-center">Internet</div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-bold text-center">TOTAL</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="text-sm divide-y divide-gray-100">
                      {sales?.length ? (
                        <>
                          {sales.filter((sale) => {
                            if (
                              getMonthFromBSONDate(sale.date) === month
                            )
                              return sale;
                          }).map((row, index) => (
                            <tr>
                              <td class="p-2 whitespace-nowrap" key={index}>
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
                                    {row.unit}
                                  </div>
                                </div>
                              </td>

                              <td class="p-2 whitespace-nowrap">
                                <div class="text-center">
                                  ₱{row.rent}.00
                                </div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                <div class="text-center">
                                  ₱{(row.latestElec - row.prevElec) * 15}.00
                                </div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                <div class="text-center">
                                  ₱{(row.latestWat - row.prevWat) * 42}.00
                                </div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                <div class="text-center">
                                  ₱{row.int}.00
                                </div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                <div class="text-center">
                                  ₱{row.rent + ((row.latestElec - row.prevElec) * 15) + ((row.latestWat - row.prevWat) * 42) + row.int}.00
                                </div>
                              </td>
                            </tr>
                          ))}
                        </ >
                      ) : null}
                      <tr class="bg-gray-100">
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex justify-end">
                            <div class="font-semibold tracking-wider text-gray-800">
                              TOTAL
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-center">
                            ₱{rentTotal}.00
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-center">
                            ₱{elecTotal}.00
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-center">
                            ₱{watTotal}.00
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-center">
                            ₱{intTotal}.00
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-center font-semibold">
                            ₱{ rentTotal + elecTotal + watTotal + intTotal }.00
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
