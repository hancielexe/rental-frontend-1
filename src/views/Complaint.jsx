import React, { useState, useEffect } from "react";
import UserSidebar from "../partials/UserSidebar";
import UserHeader from "../partials/UserHeader";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const COMP_URL = "/complaints";

function Complaint() {
  const [showModal, setShowModal] = useState(false);

  const [issue, setIssue] = useState("");
  const [issueFocus, setIssueFocus] = useState(false);
  const [other, setOther] = useState("");
  const [otherFocus, setOtherFocus] = useState(false);

  const axiosPrivate = useAxiosPrivate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const username = localStorage.getItem("user");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        COMP_URL,
        JSON.stringify({
          username,
          issue,
          other,
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
      setIssue("");
      setOther("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

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
                  Complaint Area
                </p>
              </div>

              <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-5 lg:p-12">
                <form action="" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                    <div>
                      <input
                        className="peer sr-only"
                        id="issue"
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
                      <select
                        className="border-gray-200 w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                        required
                        onChange={(e) => setIssue(e.target.value)}
                        onFocus={() => setIssueFocus(true)}
                        onBlur={() => setIssueFocus(false)}
                      >
                        <option>Select Option</option>
                        <option value="Noise Complaint">Noise Complaint</option>
                        <option value="Garbage Complaint">
                          Garbage Complaint
                        </option>
                        <option value="Maintenance Problem">
                          Maintenance Problem
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="others">
                        Other
                      </label>

                      <textarea
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Specify your complaint"
                        rows="4"
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
                                    Your complaint is submitted!
                                  </p>

                                  <button
                                    className="w-full mt-20 p-1 flex-1 bg-gray-400 text-black-8900 rounded-sm outline-none border ring-offset-1 ring-gray-600 focus:ring-1"
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

export default Complaint;
