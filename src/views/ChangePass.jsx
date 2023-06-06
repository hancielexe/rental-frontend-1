import React, { useState, useEffect, useRef } from "react";
import Userheader from "../partials/UserHeader";
import Usersidebar from "../partials/UserSidebar";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
const CHANGE_URL = "/auth/change";

function ChangePass() {
  const axiosPrivate = useAxiosPrivate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const user = localStorage.getItem("user").replace(/['"]+/g, "");

  const [pwd, setPwd] = useState("");
  const [pwdFocus, setPwdFocus] = useState(false);

  const [newPwd, setNewPwd] = useState("");
  const [newPwdFocus, setNewPwdFocus] = useState(false);

  const [confirmPwd, setConfirmPwd] = useState("");
  const [confirmPwdFocus, setConfirmPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosPrivate.post(
        CHANGE_URL,
        JSON.stringify({
          user,
          pwd,
          newPwd,
          confirmPwd,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response?.data);
      setShowModal(true);
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else {
        setErrMsg("Billing submission failed!");
      }
    }
  };

  const handleFormClose = async (e) => {
    setShowModal(false);
    window.location.reload(true);
  };

  console.log(user);
  console.log(pwd);
  console.log(newPwd);
  console.log(confirmPwd);

  return (
    <div className="flex h-screen overflow-hidden ">
      {/* Sidebar */}
      <Usersidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-gray-100">
        {/*  Site header */}
        <Userheader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <section>
          <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md sm:p-8">
              <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Change Password
              </h2>
              <form
                class="mt-4 space-y-4 lg:mt-5 md:space-y-5"
                action="#"
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Current Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder=""
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    onChange={(e) => setPwd(e.target.value)}
                    required
                    aria-describedby="uidnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    name="newpassword"
                    id="newpassword"
                    placeholder=""
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    onChange={(e) => setNewPwd(e.target.value)}
                    required
                    aria-describedby="uidnote"
                    onFocus={() => setNewPwdFocus(true)}
                    onBlur={() => setNewPwdFocus(false)}
                  />
                </div>
                <div>
                  <label
                    for="confirm-password"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Confirm password
                  </label>

                  <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder=""
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    onChange={(e) => setConfirmPwd(e.target.value)}
                    required
                    aria-describedby="uidnote"
                    onFocus={() => setConfirmPwdFocus(true)}
                    onBlur={() => setConfirmPwdFocus(false)}
                  />
                </div>

                <button
                  type="submit"
                  class="w-full text-white bg-blue-500 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Reset password
                </button>
                {showModal ? (
                  <>
                    <div className="fixed inset-0 z-10">
                      <div
                        className="fixed inset-0 w-full h-full bg-black opacity-40"
                        onClick={() => handleFormClose()}
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
                              <strong class="block font-medium text-gray-900">
                                {" "}
                                Changes saved{" "}
                              </strong>

                              <p class="mt-1 text-sm text-gray-700">
                                {errMsg
                                  ? errMsg
                                  : "Billing successfully created!"}
                              </p>
                            </div>

                            <button
                              class="flex align-top text-gray-500 transition hover:text-gray-600"
                              onClick={() => handleFormClose()}
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
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ChangePass;
