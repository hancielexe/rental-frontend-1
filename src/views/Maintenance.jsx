import React, { useState, useEffect } from "react";
import UserSidebar from "../partials/UserSidebar";
import UserHeader from "../partials/UserHeader";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
const MAINT_URL = "/maintenances/add";

function Maintenance() {

  const axiosPrivate = useAxiosPrivate();
  const [maint, setMaint] = useState("");
  const [maintFocus, setMaintFocus] = useState(false);
  const [other, setOther] = useState("");
  const [otherFocus, setOtherFocus] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const username = localStorage.getItem("user").replace(/['"]+/g, '');

  const [showModal, setShowModal] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosPrivate.post(
        MAINT_URL,
        JSON.stringify({
          username,
          maint,
          other,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setShowModal(true)
      setSuccess(true);
      //clear state and controlled inputs
      setIssue("");
      setOther("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else {
        setErrMsg("Maintenance Failed");
      }
    }
    window.location.reload(true)
  };

  useEffect(() => {
    setErrMsg("");
  }, [maint, other]);

  return (
    <div className="flex h-screen overflow-hidden ">
      {/* Sidebar */}
      <UserSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-gray-100">
        {/*  Site header */}
        <UserHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <section className="bg-gray-100">
          <div className="mx-auto max-w-screen-xl px-4 py-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
              <div className="col-span-4">
                <p className="max-w-xl font-bold text-5xl ml-4 text-gray-700">
                  Maintenance Area
                </p>
              </div>

              <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-5 lg:p-12">
                <form action="#" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                    <div>
                      <input
                        className="peer sr-only"
                        id="option1"
                        type="radio"
                        tabindex="-1"
                        name="option"
                      />
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      for="Status"
                      class="block text-m font-medium text-cyan-700 mb-2 ml-1"
                    >
                      Options
                    </label>

                    <div className="relative w-full lg:max-w-sm mb-2">
                      <select className="border-gray-200 w-full p-2.5 text-gray-500 bg-white border rounded-md outline-none appearance-none focus:border-indigo-600"
                        onChange={(e) => setMaint(e.target.value)}
                        onFocus={() => setMaintFocus(true)}
                        onBlur={() => setMaintFocus(false)}>
                        <option selected>Select Option</option>
                        <option>DoorKnob</option>
                        <option>Toilet Bowl</option>
                        <option>Faucet</option>
                        <option>Ceiling</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="others">
                        Specify briefly (Max. 24 characters)
                      </label>

                      <textarea
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Specify briefly (Max. 24 characters)"
                        rows="4"
                        required
                        maxlength="24"
                        id="others"
                        onChange={(e) => setOther(e.target.value)}
                        onFocus={() => setOtherFocus(true)}
                        onBlur={() => setOtherFocus(false)}
                      ></textarea>
                    </div>

                    <>
                      <button
                        class="inline-block w-full rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white sm:w-auto"
                        type="submit" 
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
                                    <strong class="block font-medium text-gray-900"> Maintenance Form Submitted! </strong>
          
                                    <p class="mt-1 text-sm text-gray-700">
                                      Your maintenance form has been submitted.
                                    </p>
                                  </div>
          
                                  <button
                                    class="flex align-top text-gray-500 transition hover:text-gray-600"
                                    onClick={() =>
                                    window.location.reload(true)
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
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Maintenance;
