import React from 'react'
import { useRef, useState, useEffect } from "react";

function TenantIn_Out() {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="col-span-6 sm:col-span-4 m-24">
      <label
        for="Status"
        class="block py-8 px-8 text-6xl font-medium text-cyan-700"
      >
        Tenant In
      </label>
      <div className="relative w-full lg:max-w-sm mb-2 px-8">
        <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
          <option selected class="text-start">
            Select Username
          </option>
          <option>Hansen</option>
          <option>Hehenciel</option>
        </select>
      </div>
      
      {/* Info
      <div className="relative overflow-x-auto grid grid-cols-2 gap-2 mt-24 ms-4">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray"
              >
                Hansen
              </th>
              <td class="px-6 py-4">
                <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                  <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Active
                </span>
              </td>
            </tr>

            <tr className="bg-white ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray"
              >
                Hehenciel
              </th>
              <td class="px-6 py-4">
                <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                  <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Active
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div> */}

      {/* Tenant In/ Out */}
      <div class="Card 1 flex justify-evenly mt-44">
        <div className="col-span-2 sm:col-span-4 border-white">
          <label
            for="Status"
            class="block py-8 px-8 text-4xl font-medium text-cyan-700"
          >
            Tenant In Status
          </label>
        </div>
      
        <div className="col-span-2 sm:col-span-4 border-white">
          <label
            for="Status"
            class="block py-8 px-8 text-4xl font-medium text-cyan-700"
          >
            Tenant Out Status
          </label>
        </div>
       </div>
        {/* Card 1 */}
          <div className=" p-1.5 w-full inline-block align-middle grid grid-cols-4 ms-60">
            <div className="overflow-stretch border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 ">
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

    {/* card 2 */}

    <div class="Card 2">

        <div className=" p-1.5 w-full inline-block align-middle grid grid-cols-1 ms-52">  
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


    <div className="mt-4 -mb-24 grid grid-cols-1 place-content-end">
    <>     
         <button
            className="inline-block w-full rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white sm:w-auto"
            type="submit"
           onClick={() => setShowModal(true)}
         >
             Send 
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
    
  );
}



export default TenantIn_Out;