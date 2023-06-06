import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import Loading from "../components/Loading";
const BILL_URL = "/billing/add";
const currentMonth = new Date().getMonth() - 1; // Get the current month (1-12)

function Billing() {
  const axiosPrivate = useAxiosPrivate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [billing, setBilling] = useState();
  const [users, setUsers] = useState();
  const [user, setUser] = useState("6442783e163588316e0c4524");
  const [unit, setUnit] = useState();
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

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getBilling = async () => {
      try {
        const response = await axiosPrivate.get(`/billing/${user}`, {
          signal: controller.signal,
        });
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
  }, [user]);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUnit = async () => {
      try {
        const response = await axiosPrivate.get(`/units`, {
          signal: controller.signal,
        });

        const data = response.data;
        console.log(data);
        let foundUnit = "";
        for (let i = 0; i <= data.length; i++) {
          if (data[i].tenant === user) {
            foundUnit = data[i].unitName;
            return setUnit(foundUnit);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };

    getUnit();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [user]);

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
          unit: unit,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else {
        setErrMsg("Billing submission failed!");
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

  function getCurrentMonthFromBSONDate(bsonDate) {
    const date = new Date(bsonDate);
    const month = date.getMonth();
    return month;
  }

  function getPrevMonthFromBSONDate(bsonDate) {
    const date = new Date(bsonDate);
    const month = date.getMonth();
    const prevMonth = month - 1;
    return prevMonth;
  }

  const handleSelectChange = (event) => {
    const value = parseInt(event.target.value);
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
          </div>
          <div class="px-20">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ">
              <div class="rounded-t mb-0 px-4 py-3 border-0">
                <div class="w-full mx-auto">
                  <div class="grid grid-cols-2">
                    <div className="w-full lg:max-w-sm mb-3 ">
                      {users?.length ? (
                        <>
                          <select
                            class="w-full rounded-lg border-gray-200 p-3 text-sm"
                            required
                            onChange={(e) => setUser(e.target.value)}
                          >
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
                    <div class="flex justify-end">
                      <button
                        class="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm"
                        onClick={() => setShowForm(true)}
                      >
                        Create Billing
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="block w-full overflow-x-auto">
                <table class="items-center bg-transparent w-full border-collapse ">
                  <tbody>
                    <hr />
                    {billing?.length ? (
                      <>
                        <select
                          class="flex-row-reverse rounded-lg border-gray-200 w-40 p-3 text-sm m-5"
                          required
                          value={month}
                          onChange={handleSelectChange}
                        >
                          <option value="0">January</option>
                          <option value="1">February</option>
                          <option value="2">March</option>
                          <option value="3">April</option>
                          <option value="4">May</option>
                          <option value="5">June</option>
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
                                  {filteredBill.unit}
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
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 font-bold">
                                  ₱
                                  {(filteredBill.latestElec -
                                    filteredBill.prevElec) *
                                    15}
                                  .00
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
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 font-bold">
                                  ₱
                                  {(filteredBill.latestWat -
                                    filteredBill.prevWat) *
                                    42}
                                  .00
                                </td>
                              </tr>
                              <tr>
                                <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                  Internet Bill
                                </th>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 font-bold">
                                  ₱{filteredBill.int}.00
                                </td>
                              </tr>
                              <tr>
                                <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                  Rental Fee
                                </th>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 font-bold">
                                  ₱{filteredBill.rent}.00
                                </td>
                              </tr>
                              <tr class="border border-solid">
                                <th class="text-indigo-600 border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 text-left tracking-wider">
                                  TOTAL
                                </th>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 font-bold">
                                  ₱
                                  {(filteredBill.latestElec -
                                    filteredBill.prevElec) *
                                    15 +
                                    (filteredBill.latestWat -
                                      filteredBill.prevWat) *
                                      42 +
                                    filteredBill.int +
                                    filteredBill.rent}
                                  .00
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
                              {billing?.length ? (
                                billing
                                  .filter((bill) => {
                                    if (
                                      bill.tenant === user &&
                                      getCurrentMonthFromBSONDate(bill.date) ===
                                        currentMonth
                                    )
                                      return bill;
                                  })
                                  .map((filteredBill) => (
                                    <>
                                      <div className="col-span-6 sm:col-span-3">
                                        <label
                                          for="firstname"
                                          class="block text-sm font-medium text-cyan-700"
                                        >
                                          Previous Electricity Reading
                                        </label>

                                        <input
                                          class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                          type="text"
                                          id="latestElec"
                                          autoComplete="off"
                                          required
                                          aria-describedby="uidnote"
                                          disabled
                                          placeholder={filteredBill.latestElec}
                                        />
                                      </div>

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
                                          onFocus={() =>
                                            setLatestElecFocus(true)
                                          }
                                          onBlur={() =>
                                            setLatestElecFocus(false)
                                          }
                                        />
                                      </div>

                                      <div className="col-span-6 sm:col-span-3">
                                        <label
                                          for="firstname"
                                          class="block text-sm font-medium text-cyan-700"
                                        >
                                          Previous Water Reading
                                        </label>

                                        <input
                                          class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                          type="text"
                                          id="latestElec"
                                          autoComplete="off"
                                          required
                                          aria-describedby="uidnote"
                                          disabled
                                          placeholder={filteredBill.latestWat}
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
                                          onFocus={() =>
                                            setLatestWaterFocus(true)
                                          }
                                          onBlur={() =>
                                            setLatestWaterFocus(false)
                                          }
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
                                          onChange={(e) =>
                                            setRent(e.target.value)
                                          }
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
                                          onChange={(e) =>
                                            setInt(e.target.value)
                                          }
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
                                                onClick={() =>
                                                  handleFormClose()
                                                }
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
                                                      onClick={() =>
                                                        handleFormClose()
                                                      }
                                                    >
                                                      <span class="sr-only">
                                                        Dismiss popup
                                                      </span>

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
                                      </div>
                                    </>
                                  ))
                              ) : (
                                <>
                                  <div className="col-span-6 sm:col-span-3">
                                    <label
                                      for="firstname"
                                      class="block text-sm font-medium text-cyan-700"
                                    >
                                      Previous Electricity Reading
                                    </label>

                                    <input
                                      class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                      type="text"
                                      id="latestElec"
                                      autoComplete="off"
                                      required
                                      aria-describedby="uidnote"
                                      disabled
                                      placeholder="0"
                                    />
                                  </div>

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
                                      Previous Water Reading
                                    </label>

                                    <input
                                      class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                      type="text"
                                      id="latestElec"
                                      autoComplete="off"
                                      required
                                      aria-describedby="uidnote"
                                      disabled
                                      placeholder="0"
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
                                                  onClick={() =>
                                                    handleFormClose()
                                                  }
                                                >
                                                  <span class="sr-only">
                                                    Dismiss popup
                                                  </span>

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
                                  </div>
                                </>
                              )}
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
