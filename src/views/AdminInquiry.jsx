import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

function AdminInquiry() {
  const axiosPrivate = useAxiosPrivate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [inquiries, setInquiries] = useState();

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getInquiries = async () => {
      try {
        const response = await axiosPrivate.get(`/inquiry/inq`, {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setInquiries(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getInquiries();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <div className="flex h-screen overflow-hidden ">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-gray-100">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div class="relative overflow-x-auto m-7 shadow-md sm:rounded-lg mt-10">
          <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-500 uppercase bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3 text-center">
                  Email
                </th>
                <th scope="col" class="px-6 py-3 text-center">
                  Phone No.
                </th>
                <th scope="col" class="px-6 py-3 text-center">
                  Location
                </th>
                <th scope="col" class="px-6 py-3 text-center">
                  Other Inquiries
                </th>
              </tr>
            </thead>
            <tbody>
              {inquiries?.length ? (
                <>
                  {inquiries.map((inquiry) => (
                    <tr class="bg-white border-b">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 "
                      >
                        {inquiry.name}
                      </th>
                      <td class="px-6 py-4 text-center">{inquiry.email}</td>
                      <td class="px-6 py-4 text-center">{inquiry.phoneno}</td>
                      <td class="px-6 py-4 text-center">{inquiry.branch}</td>
                      <td class="px-5 py-2">
                        <details class="overflow-hidden rounded border border-white">
                          <summary class="flex justify-center cursor-pointer items-center gap-2 bg-white p-2 text-gray-900 transition">
                            <span class="text-sm text-center font-medium">
                              {" "}
                              View{" "}
                            </span>

                            <span class="transition group-open:-rotate-180">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="h-4 w-4"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                              </svg>
                            </span>
                          </summary>

                          <div class="border-t border-gray-200 bg-white">
                            <header class="flex items-center justify-center p-2">
                              <span class="text-sm text-gray-700">
                                {" "}
                                {inquiry.questions
                                  ? inquiry.questions
                                  : "No questions"}{" "}
                              </span>
                            </header>
                          </div>
                        </details>
                      </td>
                    </tr>
                  ))}{" "}
                </>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminInquiry;
