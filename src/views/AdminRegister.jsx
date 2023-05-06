import React from "react";
import { useRef, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "../api/axios";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import Registry from "./Registry";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/register";

function AdminRegister() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [fname, setFname] = useState("");
  const [fnameFocus, setFnameFocus] = useState(false);

  const [lname, setLname] = useState("");
  const [lnameFocus, setLnameFocus] = useState(false);

  const [occ, setOcc] = useState("");
  const [occFocus, setOccFocus] = useState(false);

  const [phone, setPhone] = useState("");
  const [phoneFocus, setPhoneFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);

  const [add, setAdd] = useState("");
  const [addFocus, setAddFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);

    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ user, pwd, phone, occ, email, add, fname, lname }),
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
      setUser("");
      setPwd("");
      setMatchPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <section class="bg-gray-100">
          <div class="px-2">
            <div className="max-w-xl mt-4">
              <h1 className="text-4xl font-extrabold px-5 text-transparent bg-clip-text bg-gradient-to-l from-indigo-800 via-blue-700 to-sky-600">
                Registration Form
              </h1>
            </div>
          </div>

          <div className="rounded-lg bg-white shadow-lg mt-3 mx-5 ml-5 my-5 transition-shadow hover:shadow-sm">
            <div className="max-w-screen-xl px-12 py-8">
              <form
                action="#"
                className="mt-8 grid grid-cols-6 gap-6"
                onSubmit={handleSubmit}
              >
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
                    autoComplete="off"
                    onChange={(e) => setFname(e.target.value)}
                    required
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setFnameFocus(true)}
                    onBlur={() => setFnameFocus(false)}
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
                    autoComplete="off"
                    onChange={(e) => setLname(e.target.value)}
                    required
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setLnameFocus(true)}
                    onBlur={() => setLnameFocus(false)}
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
                    autoComplete="off"
                    onChange={(e) => setOcc(e.target.value)}
                    required
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setOccFocus(true)}
                    onBlur={() => setOccFocus(false)}
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
                    type="number"
                    id="phonenumber"
                    autoComplete="off"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setPhoneFocus(true)}
                    onBlur={() => setPhoneFocus(false)}
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
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
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
                    autoComplete="off"
                    onChange={(e) => setAdd(e.target.value)}
                    required
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setAddFocus(true)}
                    onBlur={() => setAddFocus(false)}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="Username"
                    class="block text-sm font-medium text-cyan-700"
                  >
                    Username
                  </label>

                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    type="text"
                    id="username"
                    autoComplete="off"
                    ref={userRef}
                    onChange={(e) => setUser(e.target.value)}
                    required
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                  />
                  <p
                    id="uidnote"
                    className={
                      userFocus && user && !validName
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    4 to 24 characters.
                    <br />
                    Must begin with a letter.
                    <br />
                    Letters, numbers, underscores, hyphens allowed.
                  </p>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="Password"
                    class="block text-sm font-medium text-cyan-700"
                  >
                    Password
                  </label>

                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    type="password"
                    id="password"
                    value={pwd}
                    autoComplete="off"
                    onChange={(e) => setPwd(e.target.value)}
                    required
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                  />
                  <p
                    id="pwdnote"
                    className={
                      pwdFocus && !validPwd ? "instructions" : "offscreen"
                    }
                  >
                    8 to 24 characters.
                    <br />
                    Must include uppercase and lowercase letters, a number and a
                    special character.
                    <br />
                    Allowed special characters:{" "}
                    <span aria-label="exclamation mark">!</span>{" "}
                    <span aria-label="at symbol">@</span>{" "}
                    <span aria-label="hashtag">#</span>{" "}
                    <span aria-label="dollar sign">$</span>{" "}
                    <span aria-label="percent">%</span>
                  </p>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="confirmpassword"
                    class="block text-sm font-medium text-cyan-700"
                  >
                    Confirm Paswword
                  </label>

                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    type="password"
                    id="confirpassword"
                    autoComplete="off"
                    value={matchPwd}
                    onChange={(e) => setMatchPwd(e.target.value)}
                    required
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                  />
                  <p
                    id="confirmnote"
                    className={
                      matchFocus && !validMatch ? "instructions" : "offscreen"
                    }
                  >
                    Must match the first password input field.
                  </p>
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <div className="col-span-6 sm:col-span-4">
                    <label
                      for="ValidID"
                      class="block text-sm font-medium text-cyan-700"
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

            <div className="col-span-6 sm:col-span-6 sm:flex sm:items-end sm:gap-4 flex justify-end">
          <>
            <button
              class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
              type="submit"
              onClick={() => setShowModal(true)}
            >
                Send Registration 
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
                                    Your registration is successfully created!

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
              </form>
            </div>
          </div>
          <Registry />
        </section>
      </div>
    </div>
  );
}

export default AdminRegister;
