import React, { useState, useEffect } from "react";
import UserSidebar from "../partials/UserSidebar";
import UserHeader from "../partials/UserHeader";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

function Complaint() {
  const axiosPrivate = useAxiosPrivate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [units, setUnits] = useState();
  const id = localStorage.getItem("userid");

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUnits = async () => {
      try {
        const response = await axiosPrivate.get(`/users/unit/${id}`, {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setUnits(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getUnits();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);
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
                <form action="">
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
                      <select className="border-gray-200 w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                        <option selected>Select Option</option>
                        <option>Noise Complaint</option>
                        <option>Garbage Complaint</option>
                        <option>Maintenance Problem </option>
                        <option>Other</option>
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
                      ></textarea>
                    </div>

                    <div className="mt-4">
                      <button
                        type="submit"
                        className="inline-block w-full rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white sm:w-auto"
                      >
                        Send
                      </button>
                    </div>
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
