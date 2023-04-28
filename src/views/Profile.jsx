import React, { useState, useEffect } from "react";
import UserSidebar from "../partials/UserSidebar";
import UserHeader from "../partials/UserHeader";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

function Profile() {
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
        <div className="flex">
          {/*  User Info Card */}
          <article class="rounded-lg bg-white p-8 shadow-lg transition-shadow hover:shadow-md m-5">
            <div class="flex items-center gap-4">
              <svg width="40" height="40" viewBox="0 0 32 32">
                <defs>
                  <linearGradient
                    x1="28.538%"
                    y1="20.229%"
                    x2="100%"
                    y2="108.156%"
                    id="logo-a"
                  >
                    <stop stopColor="#A5B4FC" stopOpacity="0" offset="0%" />
                    <stop stopColor="#A5B4FC" offset="100%" />
                  </linearGradient>
                  <linearGradient
                    x1="88.638%"
                    y1="29.267%"
                    x2="22.42%"
                    y2="100%"
                    id="logo-b"
                  >
                    <stop stopColor="#38BDF8" stopOpacity="0" offset="0%" />
                    <stop stopColor="#38BDF8" offset="100%" />
                  </linearGradient>
                </defs>
                <rect fill="#6366F1" width="32" height="32" rx="16" />
                <path
                  d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z"
                  fill="#4F46E5"
                />
                <path
                  d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
                  fill="url(#logo-a)"
                />
                <path
                  d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
                  fill="url(#logo-b)"
                />
              </svg>

              <div>
                <h3 class="text-lg font-medium text-gray-700">
                  Jhonsen Nicandro
                </h3>

                <div class="flow-root text-gray-700 text-xs">
                  hehe@email.com
                </div>
              </div>
            </div>

            <ul class="mt-4 space-y-2">
              <li>
                <a
                  href="#"
                  class="block h-full rounded-lg border border-gray-200 p-4 hover:border-indigo-700"
                >
                  <strong class="font-medium text-gray-700">Project A</strong>

                  <p class="mt-1 text-xs font-medium text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime consequuntur deleniti, unde ab ut in!
                  </p>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="block h-full rounded-lg border border-gray-200 p-4 hover:border-indigo-700"
                >
                  <strong class="font-medium text-gray-700">Project B</strong>

                  <p class="mt-1 text-xs font-medium text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente cumque saepe sit.
                  </p>
                </a>
              </li>
            </ul>
          </article>

          {/*  Apartment Card */}
          <div class="rounded-lg shadow-lg transition-shadow hover:shadow-md m-5">
            <a href="#" class="rounded-lg group relative block bg-black">
              <img
                alt="Developer"
                src="./src/assets/qcapt3.jpg"
                class="rounded-lg absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div class="relative p-4 sm:p-6 lg:p-8">
                <p class="text-sm font-bold uppercase tracking-widest text-gray-800">
                  Your Unit
                </p>

                <p class="text-xl font-bold text-white sm:text-2xl">
                  QUIAPO 1 - Room 101
                </p>

                <div class="mt-32 sm:mt-48 lg:mt-64">
                  <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p class="text-sm text-white">
                      Your apartment is located at 929 F. R. Hidalgo Street,
                      Barangay 393, Quiapo. It is a studio type apartment with
                      an occupancy of up to 5 people. You have your own submeter
                      for water and electricity.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/*  Other Info Card */}
        <section class="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg transition-shadow hover:shadow-md m-5">
          <div class="flex items-start sm:gap-8">
            <div
              class="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
              aria-hidden="true"
            >
              <div class="flex items-center gap-1">
                <span class="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                <span class="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                <span class="h-4 w-0.5 rounded-full bg-indigo-500"></span>
                <span class="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                <span class="h-8 w-0.5 rounded-full bg-indigo-500"></span>
              </div>
            </div>

            <div>
              <strong class="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
                Episode #101
              </strong>

              <h3 class="mt-4 text-lg font-medium sm:text-xl">
                <a href="" class="hover:underline">
                  {" "}
                  Some Interesting Podcast Title{" "}
                </a>
              </h3>

              <p class="mt-1 text-sm text-gray-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
                nulla amet voluptatum sit rerum, atque, quo culpa ut
                necessitatibus eius suscipit eum accusamus, aperiam voluptas
                exercitationem facere aliquid fuga. Sint.
              </p>

              <div class="mt-4 sm:flex sm:items-center sm:gap-2">
                <div class="flex items-center gap-1 text-gray-500">
                  <svg
                    class="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>

                  <p class="text-xs font-medium">48:32 minutes</p>
                </div>

                <span class="hidden sm:block" aria-hidden="true">
                  &middot;
                </span>

                <p class="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                  Featuring{" "}
                  <a href="#" class="underline hover:text-gray-700">
                    Barry
                  </a>
                  ,
                  <a href="#" class="underline hover:text-gray-700">
                    Sandra
                  </a>{" "}
                  and
                  <a href="#" class="underline hover:text-gray-700">
                    August
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Profile;
