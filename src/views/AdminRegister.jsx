import React from "react";
import { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";

function AdminRegister() {
  const [showModal, setShowModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <section class="bg-gray-100">
          <div class="px-2 py-2">
            <div className="max-w-xl mt-4">
              <h1 className="text-5xl font-bold px-5 text-gray-700">
                Registration Form
              </h1>
            </div>
          </div>

          <div className="rounded-lg bg-white shadow-lg mx-10 ml-3 my-5">
            <div className="max-w-screen-xl px-12 py-8">
              <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="firstname"
                    class="block text-sm font-medium text-cyan-700"
                  >
                    First Name
                  </label>

                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    type="text"
                    id="firstname"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="lastname"
                    class="block text-sm font-medium text-cyan-700"
                  >
                    Last Name
                  </label>

                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    type="text"
                    id="lastname"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="occupation"
                    class="block text-sm font-medium text-cyan-700"
                  >
                    Occupation
                  </label>

                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    type="text"
                    id="occupation"
                  />
                </div>

                <br />
                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="phonenumber"
                    class="block text-sm font-medium text-cyan-700"
                  >
                    Phone Number
                  </label>

                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    type="text"
                    id="phonenumber"
                  />
                </div>

                <br />
                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="email"
                    class="block text-sm font-medium text-cyan-700"
                  >
                    Email Address
                  </label>

                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="example@email.com"
                    type="email"
                    id="email"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    for="Address"
                    class="block text-sm  font-medium text-cyan-700"
                  >
                    Address
                  </label>

                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Tenant Previous Address"
                    type="text"
                    id="address"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <input
                    class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="City"
                    type="city"
                    id="city"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <input
                    class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Region"
                    type="region"
                    id="region"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="Username"
                    class="block text-sm font-medium font-bold text-cyan-700"
                  >
                    Username
                  </label>

                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    type="text"
                    id="username"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="Password"
                    class="block text-sm font-medium font-bold text-cyan-700"
                  >
                    Password
                  </label>

                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    type="password"
                    id="password"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="confirmpassword"
                    class="block text-sm font-medium font-bold text-cyan-700"
                  >
                    Confirm Paswword
                  </label>

                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    type="password"
                    id="confirpassword"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <div className="col-span-6 sm:col-span-4">
                    <label
                      for="ValidID"
                      class="block text-sm font-medium font-bold text-cyan-700"
                    >
                      Valid ID
                    </label>

                    <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                      <button class="inline-block shrink-0 mt-2 border border-black-400 bg-gray-200 px-0 py-0 text-sm font-medium text-black transition hover:bg-transparent hover:text-gray-900 focus:outline-none focus:ring active:text-black-400">
                        Choose file
                      </button>
                      <p class="mt-4 text-xs text-gray-500 sm:mt-2">
                        No file Chosen
                      </p>
                    </div>
                  </div>
                </div>

                <>
                  <div className="col-span-6 sm:col-span-6 sm:flex sm:items-end sm:gap-4 flex justify-end">
                    <button
                      className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                      type="button"
                      onClick={() => setShowModal(true)}
                    >
                      Create Account
                    </button>
                  </div>
                  {showModal ? (
                    <>
                      <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                          className="fixed inset-0 w-full h-full bg-black opacity-40"
                          onClick={() => setShowModal(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-2 py-4">
                          <div className="relative w-full max-w-lg p-2 mx-auto bg-white rounded-md shadow-lg">
                            <div className="mt-3 sm:flex">
                              <p className="mt-2 text-lg leading-relaxed text-gray-500">
                                You have successfully Registered!
                              </p>
                              <button
                                className="w-full mt-20 p-1 flex-1 text-gray-800 rounded-sm outline-none border ring-offset-1 ring-indigo-600 focus:ring-1"
                                onClick={() => setShowModal(false)}
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
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AdminRegister;
