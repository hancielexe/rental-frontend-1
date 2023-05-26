import React, { useState, useEffect } from "react";
import UserSidebar from "../partials/UserSidebar";
import UserHeader from "../partials/UserHeader";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import html2pdf from "html2pdf.js";

function UserBilling() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [billing, setBilling] = useState();
  const [month, setMonth] = useState("");
  const axiosPrivate = useAxiosPrivate();
  const id = localStorage.getItem("userid");
  const currentMonth = new Date().getMonth(); // Get the current month (1-12)
  console.log(currentMonth);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getBilling = async () => {
      try {
        const response = await axiosPrivate.get(`/billing/tenant/${id}`, {
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

  function getMonthFromBSONDate(bsonDate) {
    const date = new Date(bsonDate);
    const month = date.getMonth();
    return month;
  }

  function formatDate(bsonDate) {
    const date = new Date(bsonDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleString(undefined, options);
  }

  //for pdf
  const generatePDF = () => {
    const element = document.getElementById("billing_form");
    const elementsToExclude = document.querySelectorAll("#exclude-from-pdf");

    // Hide the elements to be excluded
    elementsToExclude.forEach((element) => {
      element.style.display = "none";
    });

    const options = {
      margin: [50, 30, 50, 30], // Set margins in pixels [top, right, bottom, left]
      filename: "acknowledgement-receipt.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "pt", format: "ledger", orientation: "portrait" },
    };
    html2pdf()
      .set(options)
      .from(element)
      .save()
      .finally(() => {
        // Show the elements after generating the PDF
        elementsToExclude.forEach((element) => {
          element.style.display = "block";
        });
      });
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <UserSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-gray-100">
        {/*  Site header */}
        <UserHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {billing ? (
          <div class="px-20">
            {billing
              .filter((bill) => {
                if (
                  bill.tenant._id === id &&
                  getMonthFromBSONDate(bill.date) === currentMonth
                )
                  return bill;
              })
              .map((filteredBill) => (
                <div class="max-w-2xl mx-auto py-0 md:py-16">
                  <article
                    class="shadow-none md:shadow-md md:rounded-md overflow-hidden"
                    id="billing_form"
                  >
                    <div class="md:rounded-b-md  bg-white">
                      <div class="p-9 border-b border-gray-200">
                        <div class="space-y-6">
                          <div class="flex justify-between items-top">
                            <div class="space-y-4">
                              <div>
                                <p class="font-bold text-2xl tracking-tighter mb-5">
                                  Marlyn's House Rental
                                </p>
                                <p class="font-bold text-lg"> Invoice </p>
                                <p> Marlyn's House Rental </p>
                              </div>
                              <div>
                                <p class="font-medium text-sm text-gray-400">
                                  {" "}
                                  Billed To{" "}
                                </p>
                                <p>
                                  {" "}
                                  {`${filteredBill.tenant.fname} ${filteredBill.tenant.lname}`}{" "}
                                </p>
                                <p> {`${filteredBill.tenant.email}`} </p>
                                <p> {`${filteredBill.tenant.phoneno}`} </p>
                              </div>
                            </div>
                            <div class="space-y-2">
                              <div>
                                <p class="font-medium text-sm text-gray-400">
                                  {" "}
                                  Unit Name{" "}
                                </p>
                                {/* <p> { `${}` } </p> */}
                              </div>
                              <div>
                                <p class="font-medium text-sm text-gray-400">
                                  {" "}
                                  Invoice Date{" "}
                                </p>
                                <p> {formatDate(filteredBill.date)} </p>
                              </div>
                              <div>
                                <button
                                  id="exclude-from-pdf"
                                  class="inline-flex items-center text-sm font-medium text-blue-500 hover:opacity-75 "
                                  onClick={generatePDF}
                                >
                                  {" "}
                                  Download PDF{" "}
                                  <svg
                                    class="ml-0.5 h-4 w-4 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <table class="w-full divide-y divide-gray-200 text-sm">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              class="px-9 py-4 text-left font-semibold text-gray-400"
                            >
                              {" "}
                              Bills{" "}
                            </th>
                            <th
                              scope="col"
                              class="py-3 text-left font-semibold text-gray-400"
                            >
                              {" "}
                            </th>
                            <th
                              scope="col"
                              class="py-3 text-left font-semibold text-gray-400"
                            >
                              {" "}
                              Amount{" "}
                            </th>
                            <th
                              scope="col"
                              class="py-3 text-left font-semibold text-gray-400"
                            ></th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                          <tr>
                            <td class="px-9 py-5 whitespace-nowrap space-x-1 flex items-center">
                              <div>
                                <p class="font-semibold"> Electricity Bill </p>
                              </div>
                            </td>
                            <td class="whitespace-nowrap text-gray-600 truncate"></td>
                            <td class="whitespace-nowrap text-gray-600 truncate">
                              {" "}
                              ₱
                              {(filteredBill.latestElec -
                                filteredBill.prevElec) *
                                15}{" "}
                            </td>
                          </tr>
                          <tr>
                            <td class="px-9 py-5 whitespace-nowrap space-x-1 flex items-center">
                              <div>
                                <p class="font-semibold"> Water Bill </p>
                              </div>
                            </td>
                            <td class="whitespace-nowrap text-gray-600 truncate"></td>
                            <td class="whitespace-nowrap text-gray-600 truncate">
                              {" "}
                              ₱
                              {(filteredBill.latestWat - filteredBill.prevWat) *
                                42}{" "}
                            </td>
                          </tr>
                          <tr>
                            <td class="px-9 py-5 whitespace-nowrap space-x-1 flex items-center">
                              <div>
                                <p class="font-semibold">
                                  {" "}
                                  Telephone & Internet Bill{" "}
                                </p>
                              </div>
                            </td>
                            <td class="whitespace-nowrap text-gray-600 truncate"></td>
                            <td class="whitespace-nowrap text-gray-600 truncate">
                              {" "}
                              ₱{filteredBill.int}{" "}
                            </td>
                          </tr>
                          <tr>
                            <td class="px-9 py-5 whitespace-nowrap space-x-1 flex items-center">
                              <div>
                                <p class="font-semibold"> Rental Fee </p>
                              </div>
                            </td>
                            <td class="whitespace-nowrap text-gray-600 truncate"></td>
                            <td class="whitespace-nowrap text-gray-600 truncate">
                              {" "}
                              ₱{filteredBill.rent}{" "}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <hr />
                      <div class="p-9 border-b border-gray-200">
                        <div class="space-y-3">
                          <div class="flex justify-between">
                            <div>
                              <p class="font-bold text-black text-lg">
                                {" "}
                                Amount Due{" "}
                              </p>
                            </div>
                            <p class="font-bold text-black text-3xl">
                              {" "}
                              ₱
                              {(filteredBill.latestElec -
                                filteredBill.prevElec) *
                                15 +
                                (filteredBill.latestWat -
                                  filteredBill.prevWat) *
                                  42 +
                                filteredBill.int +
                                filteredBill.rent}{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
          </div>
        ) : (
          <h1>No billing for this month</h1>
        )}
      </div>
    </div>
  );
}

export default UserBilling;
