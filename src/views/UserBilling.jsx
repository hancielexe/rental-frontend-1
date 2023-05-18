import React, { useState } from "react";

import UserSidebar from "../partials/UserSidebar";
import UserHeader from "../partials/UserHeader";

function UserBilling() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <UserSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-gray-100">
                {/*  Site header */}
                <UserHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div class = "mt-5 px-20">
                        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ">
                            <div class="rounded-t mb-0 px-4 py-3 border-0">
                                <div class="flex flex-wrap items-center">
                                    <div class="relative w-full ml-2 max-w-full flex-grow flex-1">
                                        <h3 class="font-semibold text-lg tracking-wide">Your Bill</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="block w-full overflow-x-auto">
                                <table class="items-center bg-transparent w-full border-collapse ">
                                    <thead>
                                        <tr class="bg-gray-100">
                                            <th class="px-6 text-gray-500 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                                                Quiapo 1 - Room 101
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
                                            <th class="px-5 text-gray-500 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                April
                                            </th>
                                            <th class="px-5 text-gray-500 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                                                TOTAL
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr class>
                                            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                                Electricity Bill Latest Reading
                                            </th>
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                1000
                                            </td>
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                                2000
                                            </td>
                                        </tr>
                                        <tr>
                                            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Electricity Bill Previous Reading
                                            </th>
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                1000
                                            </td>
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                                2000
                                            </td>
                                        </tr>
                                        <tr>
                                            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Electricity Bill Total Reading
                                            </th>
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                1000
                                            </td>
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                                2000
                                            </td>
                                        </tr>
                                        <tr>
                                            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Electricity Bill Total
                                            </th>
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                1000
                                            </td>
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                                2000
                                            </td>
                                        </tr>
                                        <tr>
                                            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Water Bill Latest Reading
                                            </th>
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                1000
                                            </td>
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                                2000
                                            </td>
                                        </tr>
                                        <tr>
                                            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Water Bill Previous Reading
                                            </th>
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                1000
                                            </td>
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                                2000
                                            </td>
                                        </tr>
                                        <tr>
                                            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Water Bill Total Reading
                                            </th>
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                1000
                                            </td>
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                                1000
                                            </td>
                                        </tr>
                                        <tr>
                                            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Water Bill Total
                                            </th>
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                1000
                                            </td>
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                                1000
                                            </td>
                                        </tr>
                                        <tr>
                                            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                                Internet Bill
                                            </th>
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                1000
                                            </td>
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                                1000
                                            </td>
                                        </tr>
                                        <tr>
                                            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                                Rental Fee
                                            </th>
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                1000
                                            </td>
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                                1000
                                            </td>
                                        </tr>
                                        <tr class="border border-solid">
                                            <th class="text-indigo-600 border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 text-left tracking-wider">
                                                TOTAL
                                            </th>
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                3000
                                            </td>
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-bold whitespace-nowrap p-4 ">
                                                5000
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

export default UserBilling;