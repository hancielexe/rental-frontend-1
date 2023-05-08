import React, { useState, useEffect } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

function TenantIn_Out() {
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

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden ">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-gray-100">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="col-span-6 sm:col-span-4">
          <div className="max-w-xl mt-4">
            <h1 className="text-4xl mb-5 ml-14 font-extrabold px-5 text-transparent bg-clip-text bg-gradient-to-l from-indigo-800 via-blue-700 to-sky-600">
              Tenant In and Out Status
            </h1>
          </div>
          <div className="relative w-full lg:max-w-sm mb-10 ml-12 px-8">
            <select className="w-full p-2.5 text-gray-500 bg-white border border-zinc-300 rounded-md appearance-none focus:border-indigo-600">
              <option selected class="text-start">
                Select Username
              </option>
              <option>Hansen</option>
              <option>Hehenciel</option>
            </select>
          </div>

          {/* Tenant In/ Out */}
          <div class="grid grid-cols-2 mx-10">
            <div className="border-white">
              <div className="max-w-xl mt-4">
                <h1 className="text-3xl mb-5 ml-5 font-bold px-5 text-gray-400">
                  Tenant In Status
                </h1>
              </div>
            </div>

            <div className="border-white">
              <div className="max-w-xl mt-4">
                <h1 className="text-3xl mb-5 ml-5 font-bold px-5 text-gray-400">
                  Tenant Out Status
                </h1>
              </div>
            </div>
          </div>


          {/* Card 1 */}
          <div class="grid grid-cols-2 mx-10">
            <div className="Card 1 flex">
              <div className="w-full align-middle grid grid-cols-1 mx-10">
                <div className="overflow-hidden border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-700 uppercase "
                        >
                          House items
                        </th>
                      </tr>
                    </thead>
                    <tbody
                      className="divide-y divide-gray-200 bg-grey-light flex flex-col justify-between overflow-y-scroll w-full"
                      style={{ height: "40vh" }}
                    >
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Door
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Wall
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Stair
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Floor
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Key of Gate
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Key of Door
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Socket
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Water Submeter
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Electricity Subemter
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Switch (2)
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Braker
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Gate
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Sink
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Cabinet
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Lightbulb (3)
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Window
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Faucet (2)
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Toilet Bowl
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Ceiling
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Sliding Door
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Door Roll Up
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Lightbulb (4)
                        </td>
                        <tr>
                          <td className="py-3 pl-4">
                            <div className="flex items-center h-5">
                              <input
                                type="checkbox"
                                className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                              />
                              <label htmlFor="checkbox" className="sr-only">
                                Checkbox
                              </label>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                            CR sink
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 pl-4">
                            <div className="flex items-center h-5">
                              <input
                                type="checkbox"
                                className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                              />
                              <label htmlFor="checkbox" className="sr-only">
                                Checkbox
                              </label>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                            Mirror
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 pl-4">
                            <div className="flex items-center h-5">
                              <input
                                type="checkbox"
                                className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                              />
                              <label htmlFor="checkbox" className="sr-only">
                                Checkbox
                              </label>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                            Shower
                          </td>
                        </tr>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          {/* Card 2 */}
            <div class="Card 2 flex">
              <div className="w-full align-middle grid grid-cols-1 mx-10">
                <div className="overflow-hidden border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-700 uppercase "
                        >
                          House items
                        </th>
                      </tr>
                    </thead>
                    <tbody
                      className="divide-y divide-gray-200 bg-grey-light flex flex-col justify-between overflow-y-scroll w-full"
                      style={{ height: "40vh" }}
                    >
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Door
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Wall
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Stair
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Floor
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Key of Gate
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Key of Door
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Socket
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Water Submeter
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Electricity Subemter
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Switch (2)
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Braker
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Gate
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Sink
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Cabinet
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Lightbulb (3)
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Window
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Faucet (2)
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Toilet Bowl
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Ceiling
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Sliding Door
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Door Roll Up
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Lightbulb (4)
                        </td>
                        <tr>
                          <td className="py-3 pl-4">
                            <div className="flex items-center h-5">
                              <input
                                type="checkbox"
                                className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                              />
                              <label htmlFor="checkbox" className="sr-only">
                                Checkbox
                              </label>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                            CR sink
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 pl-4">
                            <div className="flex items-center h-5">
                              <input
                                type="checkbox"
                                className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                              />
                              <label htmlFor="checkbox" className="sr-only">
                                Checkbox
                              </label>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                            Mirror
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 pl-4">
                            <div className="flex items-center h-5">
                              <input
                                type="checkbox"
                                className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                              />
                              <label htmlFor="checkbox" className="sr-only">
                                Checkbox
                              </label>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                            Shower
                          </td>
                        </tr>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div class = "m-5 flex flex-row-reverse">
              <>
                <button
                  className="inline-block w-full rounded-lg bg-indigo-600 px-10 hover:bg-indigo-800 py-3 font-medium text-white sm:w-auto"
                  type="submit"
                  onClick={() => setShowModal(true)}
                >
                  Submit
                </button>

                {showModal ? (
                  <>
                    <div className="fixed inset-0 z-10">
                      <div
                        className="fixed inset-0 w-full h-full bg-black opacity-40"
                        onClick={() => setShowModal(false)}
                      ></div>
                      <div className="flex items-start min-h-screen px-8 py-12 ">
                        <div className="relative w-full max-w-lg p-8 mx-auto bg-white rounded-md shadow-lg">
                          <div className="sm:flex">

                            <p className="sm:flex text-xl leading-relaxed text-gray-500 ">
                              Your form is submitted!

                            </p>

                            <button
                              className="w-full mt-20 p-1 flex-1 bg-gray-400 text-black-8900 rounded-sm outline-none border ring-offset-1 ring-gray-600 focus:ring-1"
                              onClick={() =>
                                setShowModal(false)
                              }
                            >
                              Close
                            </button>

                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
              </>
            </div>

        </div>
      </div>
    </div>

  );
}



export default TenantIn_Out;