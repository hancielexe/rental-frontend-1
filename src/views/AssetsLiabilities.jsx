import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

function AssetsLiabilities() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
            <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
              <header class="px-5 py-3 border-b border-gray-100">
                <div class="grid grid-cols-2">
                  <div class="flex items-center">
                    <h2 class="font-semibold tracking-wide text-gray-800">
                      Assets
                    </h2>
                  </div>
                </div>
              </header>

              <div class="p-3">
                <div class="overflow-x-auto">
                  <table class="table-auto w-full">
                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">
                            Current Assets
                          </div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-center"></div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-center"></div>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="text-sm divide-y divide-gray-100">
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="font-medium text-gray-800">
                              {" "}
                              Cash on hand/in bank{" "}
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left"> ₱ 526,522.00 </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div></div>
                        </td>
                      </tr>
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="font-medium text-gray-800">
                              {" "}
                              Accounts Receivable{" "}
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div></div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-right font-semibold">
                            {" "}
                            ₱ 526,522.00{" "}
                          </div>
                        </td>
                      </tr>
                    </tbody>

                    {/* Fixed Assets */}

                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">
                            Fixed/Long term Assets
                          </div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-center"></div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-center"></div>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="text-sm divide-y divide-gray-100">
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="font-medium text-gray-800">
                              House & Lot Quiapo 1, Manila
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left"> ₱ 350,000.00 </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div></div>
                        </td>
                      </tr>
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="font-medium text-gray-800">
                              {" "}
                              House & Lot Quiapo 2, Manila{" "}
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left"> ₱ 350,000.00 </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div></div>
                        </td>
                      </tr>
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="font-medium text-gray-800">
                              {" "}
                              House & Lot Sampaloc, Manila{" "}
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left"> ₱ 8,850,900.00 </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div></div>
                        </td>
                      </tr>
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="font-medium text-gray-800">
                              {" "}
                              House & Lot Western Bicutan, Taguig City{" "}
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left"> ₱ 5,278,840.00 </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div></div>
                        </td>
                      </tr>
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="font-medium text-gray-800">
                              {" "}
                              Furniture and fixture{" "}
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left"> ₱ 300,000.00 </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div></div>{" "}
                        </td>
                      </tr>
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="font-medium text-gray-800">
                              {" "}
                              Service Vehicles{" "}
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left"> ₱ 910,000.00 </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div></div>{" "}
                        </td>
                      </tr>
                      <tr class="bg-gray-50">
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex flex-row-reverse">
                            <div class="font-medium text-gray-400 tracking-wider mr-4">
                              {" "}
                              Total{" "}
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left font-semibold">
                            {" "}
                            ₱ 15,769,740.00{" "}
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div></div>
                        </td>
                      </tr>
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="font-medium text-gray-800">
                              {" "}
                              Less Accumulated Depreciation{" "}
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left"> ₱ 825,650.00 </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-right font-semibold">
                            {" "}
                            ₱ 14,944,090.00{" "}
                          </div>
                        </td>
                      </tr>
                      <tr class="bg-gray-50">
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex">
                            <div class="font-semibold text-gray-400 tracking-wider mr-4">
                              {" "}
                              Total Assets{" "}
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div></div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-right font-bold text-green-400">
                            {" "}
                            ₱ 15,470,612.00{" "}
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

        {/* Liabilities */}

        <section class="antialiased bg-gray-100 text-gray-600 h-screen px-4">
          <div class="flex flex-col justify-center m-5">
            <div class="mb-5 w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
              <header class="px-5 py-3 border-b border-gray-100">
                <div class="grid grid-cols-2">
                  <div class="flex items-center">
                    <h2 class="font-semibold tracking-wide text-gray-800">
                      Liabilities
                    </h2>
                  </div>
                </div>
              </header>

              <div class="p-3">
                <div class="overflow-x-auto">
                  <table class="table-auto w-full">
                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">
                            Current Liabilities
                          </div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-center"></div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-center"></div>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="text-sm divide-y divide-gray-100">
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="font-medium text-gray-800">
                              {" "}
                              Accounts Payable{" "}
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left">₱ 75,265.00</div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div></div>
                        </td>
                      </tr>
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="font-medium text-gray-800">
                              {" "}
                              Loans Payable{" "}
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div> ₱ 1,450,000.00 </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div></div>
                        </td>
                      </tr>
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="font-medium text-gray-800">
                              {" "}
                              Notes Payable{" "}
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div> ₱ 180,000.00</div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-right font-semibold">
                            {" "}
                            ₱ 1,705,265.00{" "}
                          </div>
                        </td>
                      </tr>
                    </tbody>

                    {/* Owners Equity */}

                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">
                            Owners Equity
                          </div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-center"></div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-center"></div>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="text-sm divide-y divide-gray-100">
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="font-medium text-gray-800">
                              {" "}
                              Beginning Capital{" "}
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left"> ₱ 15,000,000.00 </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div></div>
                        </td>
                      </tr>
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="font-medium text-gray-800">
                              Addtl. Net Income
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left">₱ 120,309.00</div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div></div>
                        </td>
                      </tr>
                      <tr class="bg-gray-50">
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex flex-row-reverse">
                            <div class="font-medium text-gray-400 tracking-wider mr-4">
                              Total
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left font-semibold">
                            ₱ 15,120,309.00
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div></div>{" "}
                        </td>
                      </tr>
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="font-medium text-gray-800">
                              Less Personal Drawing
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left">₱ 1,354,962.00</div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-right font-semibold">
                            ₱ 13,765,347.00
                          </div>
                        </td>
                      </tr>
                      <tr class="bg-gray-50">
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex">
                            <div class="font-semibold text-gray-400 tracking-wider mr-4">
                              {" "}
                              Total Assets{" "}
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div></div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-right font-bold text-green-400">
                            {" "}
                            ₱ 15,470,612.00{" "}
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

export default AssetsLiabilities;
