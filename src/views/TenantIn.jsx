import React, { useState, useEffect } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

function TenantIn() {
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
      <div className="relative flex flex-col flex-1 overflow-x-hidden bg-gray-100">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="max-w-xl mt-4">
          <h1 className="text-4xl mb-5 ml-14 font-extrabold px-5 text-transparent bg-clip-text bg-gradient-to-l from-indigo-800 via-blue-700 to-sky-600">
            Tenant In Status
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

        {/* Card 1 */}
        <div class="rounded border border-gray-200 mx-20">
          <div class="border-t border-gray-200 bg-white">
            <header class="flex items-center justify-between p-4">
              <span class="text-sm font-semibold text-gray-700"> Check the status of the following: </span>
            </header>

            <ul class="space-y-1 border-t border-gray-200 p-4">
              <li>
                <label for="FilterInStock" class="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="FilterInStock"
                    class="h-5 w-5 rounded border-gray-300"
                  />

                  <span class="text-sm font-medium text-gray-700">
                    Door
                  </span>
                </label>
              </li>

              <li>
                <label for="FilterPreOrder" class="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="FilterPreOrder"
                    class="h-5 w-5 rounded border-gray-300"
                  />

                  <span class="text-sm font-medium text-gray-700">
                    Wall
                  </span>
                </label>
              </li>

              <li>
                <label for="FilterOutOfStock" class="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="FilterOutOfStock"
                    class="h-5 w-5 rounded border-gray-300"
                  />

                  <span class="text-sm font-medium text-gray-700">
                    Stairs
                  </span>
                </label>
              </li>

              <li>
                <label for="FilterOutOfStock" class="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="FilterOutOfStock"
                    class="h-5 w-5 rounded border-gray-300"
                  />

                  <span class="text-sm font-medium text-gray-700">
                    Floor
                  </span>
                </label>
              </li>

              <li>
                <label for="FilterOutOfStock" class="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="FilterOutOfStock"
                    class="h-5 w-5 rounded border-gray-300"
                  />

                  <span class="text-sm font-medium text-gray-700">
                    Gate Key
                  </span>
                </label>
              </li>

              <li>
                <label for="FilterOutOfStock" class="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="FilterOutOfStock"
                    class="h-5 w-5 rounded border-gray-300"
                  />

                  <span class="text-sm font-medium text-gray-700">
                    Door Key
                  </span>
                </label>
              </li>

              <li>
                <label for="FilterOutOfStock" class="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="FilterOutOfStock"
                    class="h-5 w-5 rounded border-gray-300"
                  />

                  <span class="text-sm font-medium text-gray-700">
                    Sockets
                  </span>
                </label>
              </li>

              <li>
                <label for="FilterOutOfStock" class="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="FilterOutOfStock"
                    class="h-5 w-5 rounded border-gray-300"
                  />

                  <span class="text-sm font-medium text-gray-700">
                    Water Submeter
                  </span>
                </label>
              </li>

              <li>
                <label for="FilterOutOfStock" class="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="FilterOutOfStock"
                    class="h-5 w-5 rounded border-gray-300"
                  />

                  <span class="text-sm font-medium text-gray-700">
                    Electricity Submeter
                  </span>
                </label>
              </li>

              <li>
                <label for="FilterOutOfStock" class="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="FilterOutOfStock"
                    class="h-5 w-5 rounded border-gray-300"
                  />

                  <span class="text-sm font-medium text-gray-700">
                    Light Switches
                  </span>
                </label>
              </li>

              <li>
                <label for="FilterOutOfStock" class="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="FilterOutOfStock"
                    class="h-5 w-5 rounded border-gray-300"
                  />

                  <span class="text-sm font-medium text-gray-700">
                    Braker
                  </span>
                </label>
              </li>

              <li>
                <label for="FilterOutOfStock" class="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="FilterOutOfStock"
                    class="h-5 w-5 rounded border-gray-300"
                  />

                  <span class="text-sm font-medium text-gray-700">
                    Sink
                  </span>
                </label>
              </li>

              <li>
                <label for="FilterOutOfStock" class="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="FilterOutOfStock"
                    class="h-5 w-5 rounded border-gray-300"
                  />

                  <span class="text-sm font-medium text-gray-700">
                    Lightbulbs
                  </span>
                </label>
              </li>

              <li>
                <label for="FilterOutOfStock" class="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="FilterOutOfStock"
                    class="h-5 w-5 rounded border-gray-300"
                  />

                  <span class="text-sm font-medium text-gray-700">
                    Window
                  </span>
                </label>
              </li>

              <li>
                <label for="FilterOutOfStock" class="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="FilterOutOfStock"
                    class="h-5 w-5 rounded border-gray-300"
                  />

                  <span class="text-sm font-medium text-gray-700">
                    Faucet
                  </span>
                </label>
              </li>

              <li>
                <label for="FilterOutOfStock" class="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="FilterOutOfStock"
                    class="h-5 w-5 rounded border-gray-300"
                  />

                  <span class="text-sm font-medium text-gray-700">
                    Toilet Bowl
                  </span>
                </label>
              </li>

              <li>
                <label for="FilterOutOfStock" class="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="FilterOutOfStock"
                    class="h-5 w-5 rounded border-gray-300"
                  />

                  <span class="text-sm font-medium text-gray-700">
                    Ceiling
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>


        <div class="m-5 mr-20 flex flex-row-reverse">
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
                  <div className="flex items-start min-h-screen px-8 py-12 mt-10">
                    <div className="relative w-full max-w-lg p-8 mx-auto rounded-xl border border-gray-100 bg-white shadow-xl">
                      <div className="sm:flex">
                        <span class="text-green-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-6 w-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </span>

                        <div class="flex-1 ml-3">
                          <strong class="block font-medium text-gray-900"> Changes saved </strong>

                          <p class="mt-1 text-sm text-gray-700">
                            Your status form have been saved.
                          </p>
                        </div>

                        <button
                          class="flex align-top text-gray-500 transition hover:text-gray-600"
                          onClick={() =>
                            setShowModal(false)
                          }
                        >
                          <span class="sr-only">Dismiss popup</span>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-6 w-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
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
    </div >

  );
}



export default TenantIn;