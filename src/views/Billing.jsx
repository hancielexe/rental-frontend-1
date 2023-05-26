import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import Loading from "../components/Loading";
const BILL_URL = "/billing/add";

function Billing() {
  const axiosPrivate = useAxiosPrivate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [billing, setBilling] = useState();
  const [users, setUsers] = useState();
  const [user, setUser] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [month, setMonth] = useState("");

  const [latestElec, setLatestElec] = useState("");
  const [latestElecFocus, setLatestElecFocus] = useState(false);

  const [latestWater, setLatestWater] = useState("");
  const [latestWaterFocus, setLatestWaterFocus] = useState(false);

  const [rent, setRent] = useState("");
  const [rentFocus, setRentFocus] = useState(false);

  const [int, setInt] = useState("");
  const [intFocus, setIntFocus] = useState(false);

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
        isMounted && setUsers(response.data) && setUser(response.data[0]);
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

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getBilling = async () => {
      try {
        const response = await axiosPrivate.get(`/billing`, {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setBilling(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getBilling();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosPrivate.post(
        BILL_URL,
        JSON.stringify({
          rent,
          latestElec,
          latestWat: latestWater,
          int,
          tenant: user,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response?.data);
      console.log(JSON.stringify(response));
      setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else {
        setErrMsg("Billing for this month already exists!");
      }
    }
  };

  function formatDate(bsonDate) {
    const date = new Date(bsonDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleString(undefined, options);
  }

  function getMonthFromBSONDate(bsonDate) {
    const date = new Date(bsonDate);
    const month = date.getMonth();
    return month;
  }

  const handleSelectChange = (event) => {
    const value = parseInt(event.target.value);
    console.log(value);
    setMonth(value);
  };

  const handleFormClose = async (e) => {
    setShowModal(false);
    window.location.reload(true);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-gray-100">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="col-span-6 sm:col-span-4">
          <div>
            <div className="max-w-xl mt-4">
              <h1 className="text-4xl mb-5 ml-14 font-extrabold px-5 text-transparent bg-clip-text bg-gradient-to-l from-indigo-800 via-blue-700 to-sky-600">
                Billing
              </h1>
            </div>
            <div className="mx-5 relative w-full lg:max-w-sm mb-10 ml-12 px-8">
              {users?.length ? (
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
              ) : null}
              <div class="rounded-lg border border-gray-200 m-auto bg-gray-300 p-3 my-2 text-lg hover:border-black hover:bg-slate-300">
                <button onClick={() => setShowForm(true)}>
                  Create Billing
                </button>
              </div>
            </div>
          </div>
          <div class="px-20">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ">
              <div class="rounded-t mb-0 px-4 py-3 border-0">
                <div class="flex flex-wrap items-center">
                  <div class="relative w-full ml-2 max-w-full flex-grow flex-1">
                    <h3 class="font-semibold text-lg tracking-wide">
                      Billing for {user}
                    </h3>
                  </div>
                </div>
              </div>
              <div class="block w-full overflow-x-auto">
                <table class="items-center bg-transparent w-full border-collapse ">
                  <tbody>
                    {billing?.length ? (
                      <>
                        <select
                          class="w-full rounded-lg border-gray-200 p-3 text-sm"
                          required
                          value={month}
                          onChange={handleSelectChange}
                        >
                          <option value="0">January</option>
                          <option value="1">February</option>
                          <option value="2">March</option>
                          <option value="3">April</option>
                          <option value="4">May</option>
                        </select>
                        {billing
                          .filter((bill) => {
                            if (
                              bill.tenant === user &&
                              getMonthFromBSONDate(bill.date) === month
                            )
                              return bill;
                          })
                          .map((filteredBill) => (
                            <>
                              <tr class="bg-gray-100">
                                <th class="px-6 text-gray-500 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                                  Quiapo 1 - Room 101
                                </th>
                                <th class="text-gray-500 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                                  As of {formatDate(filteredBill.date)}
                                </th>
                              </tr>
                              <tr class>
                                <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                  Electricity Bill Latest Reading
                                </th>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                  {filteredBill.latestElec}
                                </td>
                              </tr>
                              <tr>
                                <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                  Electricity Bill Previous Reading
                                </th>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                  {filteredBill.prevElec}
                                </td>
                              </tr>
                              <tr>
                                <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                  Electricity Bill Total Reading
                                </th>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                  {filteredBill.latestElec -
                                    filteredBill.prevElec}
                                </td>
                              </tr>
                              <tr>
                                <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                  Electricity Bill Total
                                </th>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                  {(filteredBill.latestElec -
                                    filteredBill.prevElec) *
                                    15}
                                </td>
                              </tr>
                              <tr>
                                <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                  Water Bill Latest Reading
                                </th>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                  {filteredBill.latestWat}
                                </td>
                              </tr>
                              <tr>
                                <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                  Water Bill Previous Reading
                                </th>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                  {filteredBill.prevWat}
                                </td>
                              </tr>
                              <tr>
                                <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                  Water Bill Total Reading
                                </th>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                  {filteredBill.latestWat -
                                    filteredBill.prevWat}
                                </td>
                              </tr>
                              <tr>
                                <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                  Water Bill Total
                                </th>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                  {(filteredBill.latestWat -
                                    filteredBill.prevWat) *
                                    42}
                                </td>
                              </tr>
                              <tr>
                                <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                  Internet Bill
                                </th>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                  {filteredBill.int}
                                </td>
                              </tr>
                              <tr>
                                <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                  Rental Fee
                                </th>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                  {filteredBill.rent}
                                </td>
                              </tr>
                              <tr class="border border-solid">
                                <th class="text-indigo-600 border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 text-left tracking-wider">
                                  TOTAL
                                </th>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                  {(filteredBill.latestElec -
                                    filteredBill.prevElec) *
                                    15 +
                                    (filteredBill.latestWat -
                                      filteredBill.prevWat) *
                                      42 +
                                    filteredBill.int +
                                    filteredBill.rent}
                                </td>
                              </tr>
                            </>
                          ))}
                      </>
                    ) : (
                      <tr>
                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                          No existing billing for user!
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
                {showForm ? (
                  <>
                    <div className="fixed inset-0 z-10">
                      <div
                        className="fixed inset-0 w-full h-full bg-black opacity-40"
                        onClick={() => setShowForm(false)}
                      ></div>
                      <div className="flex items-start min-h-screen px-6 py-12 my-12 ">
                        <div className="relative w-full max-w-lg p-8 mx-auto bg-white rounded-md shadow-lg">
                          <h2>Billing</h2>
                          <div className="sm:flex">
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
                                  Latest Electricity Reading
                                </label>

                                <input
                                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                  type="text"
                                  id="latestElec"
                                  autoComplete="off"
                                  onChange={(e) =>
                                    setLatestElec(e.target.value)
                                  }
                                  required
                                  aria-describedby="uidnote"
                                  onFocus={() => setLatestElecFocus(true)}
                                  onBlur={() => setLatestElecFocus(false)}
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  for="firstname"
                                  class="block text-sm font-medium text-cyan-700"
                                >
                                  Latest Water Reading
                                </label>

                                <input
                                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                  type="text"
                                  id="latestWater"
                                  autoComplete="off"
                                  onChange={(e) =>
                                    setLatestWater(e.target.value)
                                  }
                                  required
                                  aria-describedby="uidnote"
                                  onFocus={() => setLatestWaterFocus(true)}
                                  onBlur={() => setLatestWaterFocus(false)}
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  for="firstname"
                                  class="block text-sm font-medium text-cyan-700"
                                >
                                  Rent Fee
                                </label>

                                <input
                                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                  type="text"
                                  id="rent"
                                  autoComplete="off"
                                  onChange={(e) => setRent(e.target.value)}
                                  required
                                  aria-describedby="uidnote"
                                  onFocus={() => setRentFocus(true)}
                                  onBlur={() => setRentFocus(false)}
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  for="firstname"
                                  class="block text-sm font-medium text-cyan-700"
                                >
                                  Internet Fee
                                </label>

                                <input
                                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                  type="text"
                                  id="int"
                                  autoComplete="off"
                                  onChange={(e) => setInt(e.target.value)}
                                  required
                                  aria-describedby="uidnote"
                                  onFocus={() => setIntFocus(true)}
                                  onBlur={() => setIntFocus(false)}
                                />
                              </div>
                              <div className="col-span-6 sm:col-span-6 sm:flex sm:items-end sm:gap-4 flex justify-end">
                                <button
                                  class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                  type="submit"
                                  onClick={() => setShowModal(true)}
                                >
                                  Create
                                </button>
                                {showModal ? (
                                  <>
                                    <div className="fixed inset-0 z-10">
                                      <div
                                        className="fixed inset-0 w-full h-full bg-black opacity-40"
                                        onClick={() => handleFormClose()}
                                      ></div>
                                      <div className="flex items-start min-h-screen px-8 py-12 ">
                                        <div className="relative w-full max-w-lg p-8 mx-auto bg-white rounded-md shadow-lg">
                                          <div className="sm:flex">
                                            <p className="sm:flex text-xl leading-relaxed text-gray-500 ">
                                              {errMsg
                                                ? errMsg
                                                : "Billing successfully created!"}
                                            </p>

                                            <button
                                              className="w-full mt-20 p-1 flex-1 bg-gray-400 text-black-8900 rounded-sm outline-none border ring-offset-1 ring-gray-600 focus:ring-1"
                                              onClick={() => handleFormClose()}
                                            >
                                              Close
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                ) : null}
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billing;
