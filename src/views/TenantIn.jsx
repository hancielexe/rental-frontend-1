import React, { useState, useEffect } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
const IN_URL = "/tenantin/add"

function TenantIn() {
  const axiosPrivate = useAxiosPrivate();
  const [users, setUsers] = useState();
  const [user, setUser] = useState();

  //form field states
  const [doorChecked, setDoorChecked] = useState(false);
  const [wallChecked, setWallChecked] = useState(false);
  const [stairsChecked, setStairsChecked] = useState(false);
  const [floorChecked, setFloorChecked] = useState(false);
  const [gateKeyChecked, setGateKeyChecked] = useState(false);
  const [doorKeyChecked, setDoorKeyChecked] = useState(false);
  const [socketsChecked, setSocketsChecked] = useState(false);
  const [waterSubChecked, setWaterSubChecked] = useState(false);
  const [elecSubChecked, setElecSubChecked] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(false);
  const [brakerChecked, setBrakerChecked] = useState(false);
  const [sinkChecked, setSinkChecked] = useState(false);
  const [lightChecked, setLightChecked] = useState(false);
  const [windowChecked, setWindowChecked] = useState(false);
  const [faucetChecked, setFaucetChecked] = useState(false);
  const [bowlChecked, setBowlChecked] = useState(false);
  const [ceilingChecked, setCeilingChecked] = useState(false);
  //endof form field states

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get(`/users`, {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setUsers(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosPrivate.post(
        IN_URL,
        JSON.stringify({
          "tenant": user,
          "door": doorChecked,
          "wall": wallChecked,
          "stairs": stairsChecked,
          "floor": floorChecked,
          "gatekey": gateKeyChecked,
          "doorkey": doorChecked,
          "sockets": socketsChecked,
          "watersub": waterSubChecked,
          "elecsub": elecSubChecked,
          "swit": switchChecked,
          "braker": brakerChecked,
          "sink": sinkChecked,
          "lights": lightChecked,
          "window": windowChecked,
          "faucet": faucetChecked,
          "bowl": bowlChecked,
          "ceiling": ceilingChecked
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setShowModal(true)
      setSuccess(true);
      //clear state and controlled inputs
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else {
        setErrMsg("Form submission Failed");
      }
    }
    window.location.reload(true)
  };

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
          {users?.length ? (
            <>
              <select
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                required
                onChange={(e) => setUser(e.target.value)}
              >
                <option>Select User</option>
                {users
                  .filter((user) => {
                    if (!user.roles.Admin) return user;
                  })
                  .map((filteredUser) => (
                    <option value={filteredUser._id}>
                      {filteredUser.username}
                    </option>
                  ))}
              </select>
            </>
          ) : null}
        </div>

        {/* Card 1 */}
        <div class="rounded border border-gray-200 mx-20">
          <div class="border-t border-gray-200 bg-white">
            <header class="flex items-center justify-between p-4">
              <span class="text-sm font-semibold text-gray-700"> Check the status of the following: </span>
            </header>
            <form action="#" onSubmit={handleSubmit}>
              <ul class="space-y-1 border-t border-gray-200 p-4">
                <li>
                  <label for="FilterInStock" class="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="FilterInStock"
                      class="h-5 w-5 rounded border-gray-300"
                      checked={doorChecked}
                      onChange={(e) => setDoorChecked(e.target.checked)}
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
                      id="FilterInStock"
                      class="h-5 w-5 rounded border-gray-300"
                      checked={wallChecked}
                      onChange={(e) => setWallChecked(e.target.checked)}
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
                      id="FilterInStock"
                      class="h-5 w-5 rounded border-gray-300"
                      checked={stairsChecked}
                      onChange={(e) => setStairsChecked(e.target.checked)}
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
                      id="FilterInStock"
                      class="h-5 w-5 rounded border-gray-300"
                      checked={floorChecked}
                      onChange={(e) => setFloorChecked(e.target.checked)}
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
                      id="FilterInStock"
                      class="h-5 w-5 rounded border-gray-300"
                      checked={gateKeyChecked}
                      onChange={(e) => setGateKeyChecked(e.target.checked)}
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
                      id="FilterInStock"
                      class="h-5 w-5 rounded border-gray-300"
                      checked={doorKeyChecked}
                      onChange={(e) => setDoorKeyChecked(e.target.checked)}
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
                      id="FilterInStock"
                      class="h-5 w-5 rounded border-gray-300"
                      checked={socketsChecked}
                      onChange={(e) => setSocketsChecked(e.target.checked)}
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
                      id="FilterInStock"
                      class="h-5 w-5 rounded border-gray-300"
                      checked={waterSubChecked}
                      onChange={(e) => setWaterSubChecked(e.target.checked)}
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
                      id="FilterInStock"
                      class="h-5 w-5 rounded border-gray-300"
                      checked={elecSubChecked}
                      onChange={(e) => setElecSubChecked(e.target.checked)}
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
                      id="FilterInStock"
                      class="h-5 w-5 rounded border-gray-300"
                      checked={switchChecked}
                      onChange={(e) => setSwitchChecked(e.target.checked)}
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
                      id="FilterInStock"
                      class="h-5 w-5 rounded border-gray-300"
                      checked={brakerChecked}
                      onChange={(e) => setBrakerChecked(e.target.checked)}
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
                      id="FilterInStock"
                      class="h-5 w-5 rounded border-gray-300"
                      checked={sinkChecked}
                      onChange={(e) => setSinkChecked(e.target.checked)}
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
                      id="FilterInStock"
                      class="h-5 w-5 rounded border-gray-300"
                      checked={lightChecked}
                      onChange={(e) => setLightChecked(e.target.checked)}
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
                      id="FilterInStock"
                      class="h-5 w-5 rounded border-gray-300"
                      checked={windowChecked}
                      onChange={(e) => setWindowChecked(e.target.checked)}
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
                      id="FilterInStock"
                      class="h-5 w-5 rounded border-gray-300"
                      checked={faucetChecked}
                      onChange={(e) => setFaucetChecked(e.target.checked)}
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
                      id="FilterInStock"
                      class="h-5 w-5 rounded border-gray-300"
                      checked={bowlChecked}
                      onChange={(e) => setBowlChecked(e.target.checked)}
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
                      id="FilterInStock"
                      class="h-5 w-5 rounded border-gray-300"
                      checked={ceilingChecked}
                      onChange={(e) => setCeilingChecked(e.target.checked)}
                    />

                    <span class="text-sm font-medium text-gray-700">
                      Ceiling
                    </span>
                  </label>
                </li>
              </ul>
              <div class = "p-5">
              <button
                className="inline-block w-full rounded-lg bg-indigo-600 px-10 hover:bg-indigo-800 py-3 font-medium text-white sm:w-auto"
                type="submit"
                onClick={() => setShowModal(true)}
              >
                Submit
              </button>
              </div>
            </form>
          </div>
        </div>


        <div class="m-5 mr-20 flex flex-row-reverse">
          <>
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