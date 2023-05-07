import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

function Expenses() {
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
                <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-5">
                    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ">
                        <div class="rounded-t mb-0 px-4 py-3 border-0">
                            <div class="flex flex-wrap items-center">
                                <div class="relative w-full ml-2 max-w-full flex-grow flex-1">
                                    <h3 class="font-semibold text-lg tracking-wide">Expenses</h3>
                                </div>
                                <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                    <div className="relative inline-flex">
                                        <select
                                            className="inline-flex justify-start text-sm pr-8 py-2 border-white text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-60 hover:border-gray-700 ">
                                            <option value="">All</option>
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
                            </div>
                        </div>

                        <div class="block w-full overflow-x-auto">
                            <table class="items-center bg-transparent w-full border-collapse ">
                                <thead>
                                    <tr class = "bg-gray-100">
                                        <th class="px-6 text-gray-500 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                                            Operating Expenses
                                        </th>
                                        <th class="px-5 text-gray-500 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            January
                                        </th>
                                        <th class="px-5 text-gray-500 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            February
                                        </th>
                                        <th class="px-5 text-gray-500 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            March
                                        </th>
                                        <th class="px-5 text-gray-500 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                                            TOTAL
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr class>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Accounting and Legal
                                        </th>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                            0
                                        </td>
                                        <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            0
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            0
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            0
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Advertising
                                        </th>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            0
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            1,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            0
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            1,000
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Maintenance and Repairs
                                        </th>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            0
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            250,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            0
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            250,000
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Office Supplies
                                        </th>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            500
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            500
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            500
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            15,000
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Salaries and Wages
                                        </th>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            30,000
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Taxes and Wages
                                        </th>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            30,000
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Transportation & Travel
                                        </th>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            30,000
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Utilities
                                        </th>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            30,000
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Electricity - Quiapo
                                        </th>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            30,000
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Electricity - Sampaloc
                                        </th>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            30,000
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Electricity - Taguig
                                        </th>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            30,000
                                        </td>
                                    </tr>
                                    <tr class = "bg-gray-100">
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                            Total Electricity Expenses
                                        </th>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            30,000
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Water - Quiapo
                                        </th>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            30,000
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Water - Sampaloc
                                        </th>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            30,000
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Water - Taguig
                                        </th>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            30,000
                                        </td>
                                    </tr>
                                    <tr class = "bg-gray-100">
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                            Total Water Expenses
                                        </th>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            30,000
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Telephone & Internet - Quiapo
                                        </th>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            30,000
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Telephone & Internet - Sampaloc
                                        </th>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            30,000
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Telephone & Internet - Taguig
                                        </th>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            30,000
                                        </td>
                                    </tr>
                                    <tr class = "bg-gray-100">
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                            Total Telephone & Internet Expenses
                                        </th>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            30,000
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Web Hosting and Domain
                                        </th>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            30,000
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Other
                                        </th>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            30,000
                                        </td>
                                    </tr>
                                    <tr class = "border border-solid">
                                        <th class="text-indigo-600 border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 text-left tracking-wider">
                                            TOTAL
                                        </th>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            10,000
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-bold whitespace-nowrap p-4">
                                            100,000
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expenses;