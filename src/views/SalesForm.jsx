import React from "react";
import { useRef, useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import axios from "../api/axios";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";

const SALES_URL = "/sales/add";
const year = 2023;
const unitname = "hahah";

function SalesForm() {
    const [month, setMonth] = useState("");
    const [rent, setRent] = useState("");
    const [elec, setElec] = useState("");
    const [water, setWater] = useState("");
    const [int, setInt] = useState("");
    const [units, setUnits] = useState("");
    const [unit, setUnit] = useState("");
    const [unitname, setUnitname] = useState("");
    const axiosPrivate = useAxiosPrivate();

    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    //get all units
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUnits = async () => {
            try {
                const response = await axiosPrivate.get(`/units`, {
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

    useEffect(() => {
        setUnitname("hahah");
    }, [unit]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack

        try {
            const response = await axiosPrivate.post(
                SALES_URL,
                JSON.stringify({
                    month,
                    unit,
                    unitname,
                    year,
                    rent,
                    elec,
                    water,
                    int
                }),
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
            );
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response));
            setSuccess(true);
            //clear state and controlled inputs
            //need value attrib on inputs for this
            setRent("");
        } catch (err) {
            if (!err?.response) {
                setErrMsg("No Server Response");
            } else if (err.response?.status === 409) {
                setErrMsg("Username Taken");
            } else {
                setErrMsg("Registration Failed");
            }
        }
    };

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
                        <form class="flex flex-col" onSubmit={handleSubmit}>
                            {console.log(errMsg)}
                            <div class="mb-6 rounded">
                                <label class="block text-gray-700 text-sm font-bold mb-2 ml-1">
                                    Select Month
                                </label>
                                <select
                                    className="bg-gray-200 rounded w-full text-gray-600 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                                    onChange={(e) => setMonth(e.target.value)}
                                >
                                    <option selected>
                                        Select a Month
                                    </option>
                                    <option value="january">January</option>
                                    <option value="february">February</option>
                                    <option value="march">March</option>
                                    <option value="april">April</option>
                                    <option value="may">May</option>
                                    <option value="june">June</option>
                                    <option value="july">July</option>
                                    <option value="august">August</option>
                                    <option value="september">September</option>
                                    <option value="october">October</option>
                                    <option value="november">November</option>
                                    <option value="december">December</option>
                                </select>
                            </div>

                            <div class="mb-6 rounded">
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        for="Unit"
                                        class="block text-sm font-medium text-cyan-700"
                                    >
                                        Select Unit
                                    </label>
                                    {units?.length ? (
                                        <select
                                            class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            required
                                            onChange={(e) => setUnit(e.target.value)}
                                        >
                                            {units
                                                .map((filteredUnit) => (
                                                    <option value={filteredUnit._id}>
                                                        {filteredUnit.unitName}
                                                    </option>
                                                ))}
                                        </select>
                                    ) : null}
                                </div>
                            </div>

                            <div class="mb-6 rounded">
                                <label class="block text-gray-700 text-sm font-bold mb-2 ml-1">
                                    Rent Sale
                                </label>
                                <input
                                    type="text"
                                    id="rentsale"
                                    class="bg-gray-200 rounded w-full text-gray-700  focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                                    onChange={(e) => setRent(e.target.value)}
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
                                    onChange={(e) => setElec(e.target.value)}
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
                                    onChange={(e) => setWater(e.target.value)}
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
                                    onChange={(e) => setInt(e.target.value)}
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