import React from "react";
import { useRef, useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import axios from "../api/axios";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";

function SalesForm() {
    const [showModal, setShowModal] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-gray-100">
                {/*  Site header */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                    <section>
                        <h3 class="font-bold text-2xl text-gray-700">Sales Record Form</h3>
                        <p class="text-gray-400 pt-2 text-sm">
                            Add, edit or update your sales and profit by filling up this form.
                        </p>
                    </section>

                    <section class="mt-10">
                        <form class="flex flex-col">
                            <div class="mb-6 rounded">
                                <label class="block text-gray-700 text-sm font-bold mb-2 ml-1">
                                    Select Month
                                </label>
                                <select
                                    className="bg-gray-200 rounded w-full text-gray-600 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                                >
                                    <option selected value="">
                                        Select a Month
                                    </option>
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

                            <div class="mb-6 rounded">
                                <label class="block text-gray-700 text-sm font-bold mb-2 ml-1">
                                    Select Unit
                                </label>
                                <select
                                    className="bg-gray-200 rounded w-full text-gray-600 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                                >
                                    <option selected value="">
                                        Select a Unit
                                    </option>
                                    <option value="unitone">Unit 1</option>
                                    <option value="unittwo">Unit 2</option>
                                </select>
                            </div>

                            <div class="mb-6 rounded">
                                <label class="block text-gray-700 text-sm font-bold mb-2 ml-1">
                                    Rent Sale
                                </label>
                                <input
                                    type="text"
                                    id="rentsale"
                                    class="bg-gray-200 rounded w-full text-gray-700  focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                                />
                            </div>

                            <div class="mb-6 rounded">
                                <label class="block text-gray-700 text-sm font-bold mb-2 ml-1">
                                    Electricity Sale
                                </label>
                                <input
                                    type="text"
                                    id="elecsale"
                                    class="bg-gray-200 rounded w-full text-gray-700  focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                                />
                            </div>

                            <div class="mb-6 rounded">
                                <label class="block text-gray-700 text-sm font-bold mb-2 ml-1">
                                    Water Sale
                                </label>
                                <input
                                    type="text"
                                    id="watsale"
                                    class="bg-gray-200 rounded w-full text-gray-700  focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                                />
                            </div>

                            <div class="mb-6 rounded">
                                <label class="block text-gray-700 text-sm font-bold mb-2 ml-1">
                                    Telephone & Internet Sale
                                </label>
                                <input
                                    type="text"
                                    id="intsale"
                                    class="bg-gray-200 rounded w-full text-gray-700  focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                                />
                            </div>

                            <button
                                class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                                type="submit"
                                onClick={() => setShowModal(true)}
                            >
                                Save Changes
                            </button>
                        </form>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default SalesForm;