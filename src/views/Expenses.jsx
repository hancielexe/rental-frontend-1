import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import Loading from "../components/Loading";
import { elements } from "chart.js";
const EXP_URL = "/expenses/add";

function Expenses() {
  const axiosPrivate = useAxiosPrivate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [expenses, setExpenses] = useState();
  const [month, setMonth] = useState("January");
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const trigger = useRef(null);
  const dropdown = useRef(null);

  const [mon, setMon] = useState();
  const [acc, setAcc] = useState();
  const [adv, setAdv] = useState();
  const [maint, setMaint] = useState();
  const [off, setOff] = useState();
  const [sal, setSal] = useState();
  const [tax, setTax] = useState();
  const [tran, setTran] = useState();
  const [util, setUtil] = useState();
  const [web, setWeb] = useState();
  const [other, setOther] = useState();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getExpenses = async () => {
      try {
        const response = await axiosPrivate.get(`/expenses`, {
          signal: controller.signal,
        });

        isMounted && setExpenses(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getExpenses();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosPrivate.post(
        EXP_URL,
        JSON.stringify({
          mon,
          acc,
          adv,
          maint,
          off,
          sal,
          tax,
          tran,
          util,
          web,
          other,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response?.data);
      setShowModal(true);
      setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else {
        setErrMsg("Expenses submission failed!");
      }
    }
  };

  const handleSelectChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setMonth(value);
  };

  const handleFormClose = async (e) => {
    setShowModal(false);
    window.location.reload(true);
  };

  return (
    <div className="flex h-screen overflow-hidden ">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-gray-100">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <section class="antialiased bg-gray-100 text-gray-600 h-screen px-4">
          <div class="flex flex-col justify-center m-5">
            <div class="mb-5 w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
              <header class="px-5 py-4 border-b border-gray-100">
                <div class="grid grid-cols-2">
                  <div class="flex items-center">
                    <h2 class="font-semibold text-gray-800">Expenses</h2>
                  </div>
                  <div className="flex justify-end">
                    <select
                      className="inline-flex text-sm pr-8 py-2 border-white text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-60 hover:border-gray-700 "
                      ref={trigger}
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      onFocus={() => setDropdownOpen(true)}
                      onBlur={() => setDropdownOpen(false)}
                      onChange={handleSelectChange}
                    >
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                    </select>
                    <button
                      class="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm"
                      onClick={() => setShowForm(true)}
                    >
                      Create Expenses
                    </button>
                  </div>
                </div>
              </header>
              <div class="p-3">
                <div class="overflow-x-auto">
                  <table class="table-auto w-full">
                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">Expense</div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-center">Amount</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="text-sm divide-y divide-gray-100">
                      {expenses?.length ? (
                        <>
                          {expenses
                            .filter((expense) => {
                              if (expense.month === month) return expense;
                            })
                            .map((row, index) => (
                              <>
                                <tr>
                                  <td class="p-2 whitespace-nowrap" key={index}>
                                    <div class="flex items-center">
                                      <div class="w-10 h-10 flex-shrink-0 flex items-center">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          fill="currentColor"
                                          class="w-5 h-5"
                                        >
                                          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                                        </svg>
                                      </div>

                                      <div class="font-medium text-gray-800">
                                        Accounting and Legal
                                      </div>
                                    </div>
                                  </td>

                                  <td class="p-2 whitespace-nowrap">
                                    <div class="text-center">
                                      ₱{row.accountingandlegal}.00
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="p-2 whitespace-nowrap" key={index}>
                                    <div class="flex items-center">
                                      <div class="w-10 h-10 flex-shrink-0 flex items-center">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          fill="currentColor"
                                          class="w-5 h-5"
                                        >
                                          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                                        </svg>
                                      </div>

                                      <div class="font-medium text-gray-800">
                                        Advertising
                                      </div>
                                    </div>
                                  </td>

                                  <td class="p-2 whitespace-nowrap">
                                    <div class="text-center">
                                      ₱{row.advertising}.00
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="p-2 whitespace-nowrap" key={index}>
                                    <div class="flex items-center">
                                      <div class="w-10 h-10 flex-shrink-0 flex items-center">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          fill="currentColor"
                                          class="w-5 h-5"
                                        >
                                          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                                        </svg>
                                      </div>

                                      <div class="font-medium text-gray-800">
                                        Maintenance and Repair
                                      </div>
                                    </div>
                                  </td>

                                  <td class="p-2 whitespace-nowrap">
                                    <div class="text-center">
                                      ₱{row.maintenanceandrepairs}.00
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="p-2 whitespace-nowrap" key={index}>
                                    <div class="flex items-center">
                                      <div class="w-10 h-10 flex-shrink-0 flex items-center">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          fill="currentColor"
                                          class="w-5 h-5"
                                        >
                                          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                                        </svg>
                                      </div>

                                      <div class="font-medium text-gray-800">
                                        Office Supplies
                                      </div>
                                    </div>
                                  </td>

                                  <td class="p-2 whitespace-nowrap">
                                    <div class="text-center">
                                      ₱{row.officesupplies}.00
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="p-2 whitespace-nowrap" key={index}>
                                    <div class="flex items-center">
                                      <div class="w-10 h-10 flex-shrink-0 flex items-center">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          fill="currentColor"
                                          class="w-5 h-5"
                                        >
                                          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                                        </svg>
                                      </div>

                                      <div class="font-medium text-gray-800">
                                        Salaries and Wages
                                      </div>
                                    </div>
                                  </td>

                                  <td class="p-2 whitespace-nowrap">
                                    <div class="text-center">
                                      ₱{row.salariesandwages}.00
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="p-2 whitespace-nowrap" key={index}>
                                    <div class="flex items-center">
                                      <div class="w-10 h-10 flex-shrink-0 flex items-center">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          fill="currentColor"
                                          class="w-5 h-5"
                                        >
                                          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                                        </svg>
                                      </div>

                                      <div class="font-medium text-gray-800">
                                        Taxes and Licences
                                      </div>
                                    </div>
                                  </td>

                                  <td class="p-2 whitespace-nowrap">
                                    <div class="text-center">
                                      ₱{row.taxesandlicenses}.00
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="p-2 whitespace-nowrap" key={index}>
                                    <div class="flex items-center">
                                      <div class="w-10 h-10 flex-shrink-0 flex items-center">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          fill="currentColor"
                                          class="w-5 h-5"
                                        >
                                          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                                        </svg>
                                      </div>

                                      <div class="font-medium text-gray-800">
                                        Transportation and Travel Expenses
                                      </div>
                                    </div>
                                  </td>

                                  <td class="p-2 whitespace-nowrap">
                                    <div class="text-center">
                                      ₱{row.transportationandtravelexpenses}.00
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="p-2 whitespace-nowrap" key={index}>
                                    <div class="flex items-center">
                                      <div class="w-10 h-10 flex-shrink-0 flex items-center">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          fill="currentColor"
                                          class="w-5 h-5"
                                        >
                                          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                                        </svg>
                                      </div>

                                      <div class="font-medium text-gray-800">
                                        Utilities
                                      </div>
                                    </div>
                                  </td>

                                  <td class="p-2 whitespace-nowrap">
                                    <div class="text-center">
                                      ₱{row.utilities}.00
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="p-2 whitespace-nowrap" key={index}>
                                    <div class="flex items-center">
                                      <div class="w-10 h-10 flex-shrink-0 flex items-center">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          fill="currentColor"
                                          class="w-5 h-5"
                                        >
                                          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                                        </svg>
                                      </div>

                                      <div class="font-medium text-gray-800">
                                        Web Hosting and Domain
                                      </div>
                                    </div>
                                  </td>

                                  <td class="p-2 whitespace-nowrap">
                                    <div class="text-center">
                                      ₱{row.webhostinganddomains}.00
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="p-2 whitespace-nowrap" key={index}>
                                    <div class="flex items-center">
                                      <div class="w-10 h-10 flex-shrink-0 flex items-center">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          fill="currentColor"
                                          class="w-5 h-5"
                                        >
                                          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                                        </svg>
                                      </div>

                                      <div class="font-medium text-gray-800">
                                        Others
                                      </div>
                                    </div>
                                  </td>

                                  <td class="p-2 whitespace-nowrap">
                                    <div class="text-center">
                                      ₱{row.other}.00
                                    </div>
                                  </td>
                                </tr>
                                <tr class="bg-gray-100">
                                  <td class="p-2 whitespace-nowrap">
                                    <div class="flex justify-end">
                                      <div class="font-semibold tracking-wider text-gray-800">
                                        TOTAL
                                      </div>
                                    </div>
                                  </td>
                                  <td class="p-2 whitespace-nowrap">
                                    <div class="text-center">
                                      ₱
                                      {parseInt(row.accountingandlegal) +
                                        parseInt(row.advertising) +
                                        parseInt(row.maintenanceandrepairs) +
                                        parseInt(row.officesupplies) +
                                        parseInt(row.salariesandwages) +
                                        parseInt(row.taxesandlicenses) +
                                        parseInt(
                                          row.transportationandtravelexpenses
                                        ) +
                                        parseInt(row.utilities) +
                                        parseInt(row.webhostinganddomains) +
                                        parseInt(row.other)}
                                      .00
                                    </div>
                                  </td>
                                </tr>
                              </>
                            ))}
                        </>
                      ) : null}
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
                                    Accounting and Legal
                                  </label>

                                  <input
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    type="text"
                                    id="rent"
                                    autoComplete="off"
                                    onChange={(e) => setAcc(e.target.value)}
                                    required
                                    aria-describedby="uidnote"
                                  />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    for="firstname"
                                    class="block text-sm font-medium text-cyan-700"
                                  >
                                    Advertising
                                  </label>

                                  <input
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    type="text"
                                    id="rent"
                                    autoComplete="off"
                                    onChange={(e) => setAdv(e.target.value)}
                                    required
                                    aria-describedby="uidnote"
                                  />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    for="firstname"
                                    class="block text-sm font-medium text-cyan-700"
                                  >
                                    Maintenance and Repair
                                  </label>

                                  <input
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    type="text"
                                    id="rent"
                                    autoComplete="off"
                                    onChange={(e) => setMaint(e.target.value)}
                                    required
                                    aria-describedby="uidnote"
                                  />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    for="firstname"
                                    class="block text-sm font-medium text-cyan-700"
                                  >
                                    Office Supplies
                                  </label>

                                  <input
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    type="text"
                                    id="rent"
                                    autoComplete="off"
                                    onChange={(e) => setOff(e.target.value)}
                                    required
                                    aria-describedby="uidnote"
                                  />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    for="firstname"
                                    class="block text-sm font-medium text-cyan-700"
                                  >
                                    Salaries and Wages
                                  </label>

                                  <input
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    type="text"
                                    id="rent"
                                    autoComplete="off"
                                    onChange={(e) => setSal(e.target.value)}
                                    required
                                    aria-describedby="uidnote"
                                  />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    for="firstname"
                                    class="block text-sm font-medium text-cyan-700"
                                  >
                                    Taxes and Licences
                                  </label>

                                  <input
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    type="text"
                                    id="rent"
                                    autoComplete="off"
                                    onChange={(e) => setTax(e.target.value)}
                                    required
                                    aria-describedby="uidnote"
                                  />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    for="firstname"
                                    class="block text-sm font-medium text-cyan-700"
                                  >
                                    Transportation and Travel Expenses
                                  </label>

                                  <input
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    type="text"
                                    id="rent"
                                    autoComplete="off"
                                    onChange={(e) => setTran(e.target.value)}
                                    required
                                    aria-describedby="uidnote"
                                  />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    for="firstname"
                                    class="block text-sm font-medium text-cyan-700"
                                  >
                                    Utilities
                                  </label>

                                  <input
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    type="text"
                                    id="rent"
                                    autoComplete="off"
                                    onChange={(e) => setUtil(e.target.value)}
                                    required
                                    aria-describedby="uidnote"
                                  />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    for="firstname"
                                    class="block text-sm font-medium text-cyan-700"
                                  >
                                    Web Hosting and Domain
                                  </label>

                                  <input
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    type="text"
                                    id="rent"
                                    autoComplete="off"
                                    onChange={(e) => setWeb(e.target.value)}
                                    required
                                    aria-describedby="uidnote"
                                  />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    for="firstname"
                                    class="block text-sm font-medium text-cyan-700"
                                  >
                                    Other
                                  </label>

                                  <input
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    type="text"
                                    id="rent"
                                    autoComplete="off"
                                    onChange={(e) => setOther(e.target.value)}
                                    required
                                    aria-describedby="uidnote"
                                  />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    for="firstname"
                                    class="block text-sm font-medium text-cyan-700"
                                  >
                                    Month
                                  </label>
                                  <select
                                    className="inline-flex text-sm pr-8 py-2 border-white text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-60 hover:border-gray-700 "
                                    ref={trigger}
                                    aria-expanded={dropdownOpen}
                                    aria-haspopup="true"
                                    onClick={() =>
                                      setDropdownOpen(!dropdownOpen)
                                    }
                                    onFocus={() => setDropdownOpen(true)}
                                    onBlur={() => setDropdownOpen(false)}
                                    onChange={(e) => setMon(e.target.value)}
                                  >
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                  </select>
                                </div>
                                <div className="col-span-6 sm:col-span-6 sm:flex sm:items-end sm:gap-4 flex justify-end">
                                  <button
                                    class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                    type="submit"
                                  >
                                    Create
                                  </button>
                                </div>
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
                                                "Expense successfully created!"
                                              </p>
                                            </div>

                                            <button
                                              class="flex align-top text-gray-500 transition hover:text-gray-600"
                                              onClick={() => handleFormClose()}
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
        </section>
      </div>
    </div>
  );
}

export default Expenses;
