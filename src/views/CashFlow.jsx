import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

function CashFlow() {
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
                    <div class="flex flex-col justify-center m-5">
                        <div class="mb-5 w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                            <header class="px-5 py-3 border-b border-gray-100">
                                <div class="grid grid-cols-2">
                                    <div>
                                        <div> <h2 class="font-semibold tracking-wide text-gray-800">Statement of Cashflow</h2> </div>
                                        <div> <p class="text-xs font-semibold tracking-wide text-gray-400">As of December 31, 2020 and 2021</p></div>
                                    </div>
                                    <div className="flex justify-end">
                                        <a href="#_" class="px-5 py-2 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm">
                                            Print
                                        </a>
                                    </div>
                                </div>
                            </header>

                            <div class="p-3">
                                <div class="overflow-x-auto">
                                    <table class="table-auto w-full">
                                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                            <tr>
                                                <th class="p-2 whitespace-nowrap"><div class="font-semibold text-left">Cash Flows from Operating Acitivities</div></th>
                                                <th class="p-2 whitespace-nowrap"><div class="font-semibold text-center"></div></th>
                                            </tr>
                                        </thead>
                                        <tbody class="text-sm">
                                            <tr>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="font-medium text-gray-800"> Net Income ( Loss ) For the Year</div>
                                                    </div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-left"> ₱ 526,522.00 </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="flex">
                                                        <div class="text-xs font-semibold uppercase"> Adjustment for: </div>
                                                    </div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap"><div></div></td>
                                            </tr>
                                            <tr>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="font-medium text-gray-800 ml-8"> Depreciation </div>
                                                    </div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap"><div></div></td>
                                            </tr>
                                            <tr>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="font-medium text-gray-800 ml-8"> Provision for Income Tax </div>
                                                    </div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-left"> ₱ 120,309.00 </div>
                                                </td>
                                            </tr>
                                            </tbody>

                                            <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                            <tr>
                                                <th class="p-2 whitespace-nowrap"><div class="font-semibold text-left">Operating Cash Flows Before</div></th>
                                                <th class="p-2 whitespace-nowrap"><div class="font-semibold text-center"></div></th>
                                            </tr>
                                            </thead>

                                            <tbody class="text-sm">
                                            <tr>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="font-medium text-gray-800"> Working Capital Changes </div>
                                                    </div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-left"> ₱ 0.00 </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="flex">
                                                        <div class="text-xs font-semibold uppercase"> (increase) decrease in: </div>
                                                    </div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap"><div></div></td>
                                            </tr>
                                            <tr>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="font-medium text-gray-800 ml-8"> Other Receivables </div>
                                                    </div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap"><div> ₱ 0.00 </div></td>
                                            </tr>
                                            <tr>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="flex">
                                                        <div class="text-xs font-semibold uppercase"> (decrease) increase in: </div>
                                                    </div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap"><div></div></td>
                                            </tr>
                                            <tr>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="font-medium text-gray-800 ml-8"> Income Tax Payable </div>
                                                    </div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap"><div> ₱ 0.00 </div></td>
                                            </tr>
                                            <tr>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="font-medium text-gray-800 ml-8"> Cash Generated from Operation </div>
                                                    </div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-left"> ₱ 0.00 </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="font-medium text-gray-800 ml-8"> Provision from Income Tax </div>
                                                    </div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-left"> ₱ 0.00 </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="font-medium text-gray-800"> Net Cash Flows from Operating Activities</div>
                                                    </div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-left font-semibold"> ₱ 15,988.00 </div>
                                                </td>
                                            </tr>
                                            </tbody>

                                            <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                            <tr>
                                                <th class="p-2 whitespace-nowrap"><div class="font-semibold text-left">Cash Flows from Investing Acitivities</div></th>
                                                <th class="p-2 whitespace-nowrap"><div class="font-semibold text-center"></div></th>
                                            </tr>
                                        </thead>
                                        <tbody class="text-sm">
                                            <tr>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="flex">
                                                        <div class="text-xs font-semibold uppercase"> Increase (Decrease) In: </div>
                                                    </div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap"><div></div></td>
                                            </tr>
                                            <tr>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="font-medium text-gray-800 ml-8"> Property Equipment </div>
                                                    </div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap"><div> ₱ 0.00 </div></td>
                                            </tr>
                                            <tr>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="font-medium text-gray-800 ml-8"> Net Cash Flow used in Investing Activities </div>
                                                    </div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-left"> ₱ 250,000.00 </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="font-medium text-gray-800"> Cash Flows from Financing Activities</div>
                                                    </div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-left font-semibold"> ₱ 0.00 </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="font-medium text-gray-800"> Net Increase (Decrease) in Cash</div>
                                                    </div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-left font-semibold"> ₱ 0.00 </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="font-medium text-gray-800"> Cash, at Beginning of Year</div>
                                                    </div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-left font-semibold"> ₱ 68,148.50 </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="font-medium text-gray-800"> Cash, at End of Year</div>
                                                    </div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-left font-semibold"> ₱ 68,148.50 </div>
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

export default CashFlow;