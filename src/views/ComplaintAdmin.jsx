import React, { useState, useEffect } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

function ComplaintAdmin() {
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
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-gray-100">
                {/*  Site header */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div className="mx-6">
                    <div className="max-w-xl mt-4">
                        <h1 className="text-4xl font-extrabold px-5 text-transparent bg-clip-text bg-gradient-to-l from-indigo-800 via-blue-700 to-sky-600">
                            Complaints
                        </h1>
                    </div>
                    <table className="min-w-full mt-7 divide-y-2 divide-gray-200 text-sm">
                        <thead className="ltr:text-left rtl:text-right bg-indigo-500 tracking-widest font-mono-bold">
                            <tr>
                                <th className="whitespace-nowrap px-4 py-4 font-medium text-white">
                                    Username
                                </th>
                                <th className="whitespace-nowrap px-4 py-4 font-medium text-white">
                                    Issue
                                </th>
                                <th className="whitespace-nowrap px-4 py-4 font-medium text-white">
                                    Other Concerns
                                </th>
                                <th className="px-4 py-2"></th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200 text-center">
                            <tr>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    John Doe
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                    24/05/1995
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                    Web Developer
                                </td>
                                <td className="whitespace-nowrap px-4 py-2">
                                    <a
                                        href="#"
                                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 border-r-8"
                                    >
                                        View
                                    </a>
                                    <a
                                        href="#"
                                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                    >
                                        Delete
                                    </a>
                                </td>
                            </tr>

                            <tr class="bg-gray-300">
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Jane Doe
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                    04/11/1980
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                    Web Designer
                                </td>
                                <td className="whitespace-nowrap px-4 py-2">
                                    <a
                                        href="#"
                                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 border-r-8"
                                    >
                                        View
                                    </a>
                                    <a
                                        href="#"
                                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                    >
                                        Delete
                                    </a>
                                </td>
                            </tr>

                            <tr>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Gary Barlow
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                    24/05/1995
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                    Singer
                                </td>
                                <td className="whitespace-nowrap px-4 py-2">
                                    <a
                                        href="#"
                                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 border-r-8"
                                    >
                                        View
                                    </a>
                                    <a
                                        href="#"
                                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                    >
                                        Delete
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ComplaintAdmin;