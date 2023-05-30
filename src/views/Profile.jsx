import React, { useState, useEffect } from "react";
import UserSidebar from "../partials/UserSidebar";
import UserHeader from "../partials/UserHeader";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import Loading from "../components/Loading";

function Profile() {
  const axiosPrivate = useAxiosPrivate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState();
  const id = localStorage.getItem("userid");

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUser = async () => {
      try {
        const response = await axiosPrivate.get(`/users/unit/${id}`, {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setUser(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getUser();

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
        {user ? (
          <>
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
                      {user.fname}
                    </h3>

                    <div class="flow-root text-gray-700 text-xs">
                      {user.username}
                    </div>
                  </div>
                </div>

                <ul class="mt-4 space-y-2">
                  <li>
                    <a
                      href="#"
                      class="block h-full rounded-lg border border-gray-200 p-4 hover:border-indigo-700"
                    >
                      <strong class="font-medium text-gray-700">Moved-In</strong>

                      <p class="mt-1 text-xs font-medium text-gray-700">
                        Your move-in date is January 1,1999.
                      </p>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="block h-full rounded-lg border border-gray-200 p-4 hover:border-indigo-700"
                    >
                      <strong class="font-medium text-gray-700">Move Out</strong>

                      <p class="mt-1 text-xs font-medium text-gray-700">
                        Your move-out date is 15 days after your downpayment is used.
                      </p>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="block h-full rounded-lg border border-gray-200 p-4 hover:border-indigo-700"
                    >
                      <strong class="font-medium text-gray-700">Billing Cycle</strong>

                      <p class="mt-1 text-xs font-medium text-gray-700">
                        Every 1st of the month
                      </p>
                      <p class="text-xs font-medium text-gray-400">
                        Next Charge: April 1
                      </p>

                    </a>
                  </li>
                </ul>
              </article>

              {/*  Apartment Card */}
              <div class="rounded-lg shadow-lg transition-shadow hover:shadow-md m-5">
                <a href="#" class="rounded-lg group relative block bg-black">
                  <img
                    alt="apartment"
                    src={user.unit.imagePath}
                    class="rounded-lg absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                  />

                  <div class="relative p-4 sm:p-6 lg:p-8">
                    <p class="text-sm font-bold uppercase tracking-widest text-gray-800">
                      Your Unit
                    </p>

                    <p class="text-xl font-bold text-white sm:text-2xl">
                      {user.unit.unitName}
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
                  <div class="flex items-center gap-1 text-indigo-500">
                    <svg class="h-16 w-16" fill="currentColor" id="Layer_1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M482.67,469.2h-59.9V292.42h59.9a5.1,5.1,0,0,0,0-10.2h-65a5.1,5.1,0,0,0-5.1,5.1v48.59H362.5a5.2,5.2,0,0,0,.29-1.68V184h43.9a5.1,5.1,0,0,0,3.23-9.05l-69.36-56.7V49.37a5.1,5.1,0,0,0-5.1-5.1H283.85a5.1,5.1,0,0,0-5.1,5.1V67.68L237.26,33.75a5.12,5.12,0,0,0-6.46,0L58.14,174.91A5.1,5.1,0,0,0,61.37,184h43.89V303.49l-33.91-8.22A41.47,41.47,0,0,0,26.1,313.94,12.63,12.63,0,0,0,29.8,331L187.43,437.61a78.67,78.67,0,0,0,44,13.47c2.5,0,5-.12,7.51-.37L360.21,439h52.36V474.3a5.1,5.1,0,0,0,5.1,5.1h65a5.1,5.1,0,0,0,0-10.2ZM110.36,173.76H75.66L234,44.29l46.6,38.09A5.09,5.09,0,0,0,289,78.43v-24h41.41v66.15a5.09,5.09,0,0,0,1.87,3.95l60.17,49.19H357.69a5.1,5.1,0,0,0-5.1,5.1V327.68a122.76,122.76,0,0,0-69.71-26.56V224.51a48.46,48.46,0,0,0-48.42-48.41h-.87a48.46,48.46,0,0,0-48.41,48.41v76.42a39,39,0,0,0-30,14.66L115.46,306V178.86A5.1,5.1,0,0,0,110.36,173.76ZM272.68,300.93h-77.3V224.51a38.25,38.25,0,0,1,38.21-38.21h.87a38.26,38.26,0,0,1,38.22,38.21ZM359.73,428.8,238,440.56a68.53,68.53,0,0,1-44.82-11.4L35.52,322.59a2.45,2.45,0,0,1-.72-3.32A31.3,31.3,0,0,1,69,305.18l80.82,19.6a17.38,17.38,0,0,0,10.4,22.05L265.66,385.6a5.14,5.14,0,0,0,1.76.31,5.1,5.1,0,0,0,1.76-9.88L163.69,337.25a7.18,7.18,0,0,1-4-9.81,28.72,28.72,0,0,1,25.82-16.31h90.56a112.53,112.53,0,0,1,74.64,28.28l6.12,5.42a5.1,5.1,0,0,0,3.38,1.28h52.36v82.67Z" /></svg>
                  </div>
                </div>

                <div>

                  <h3 class="text-lg font-medium sm:text-xl">
                    Other Information
                  </h3>

                  <div class="mt-4 flex items-center gap-2 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                    <p class="text-sm font-medium text-gray-500">
                      Verified User
                    </p>
                  </div>

                  <div class="mt-4 flex items-center gap-2 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-person-fill" viewBox="0 0 16 16">
                      <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z" />
                    </svg>
                    <p class="text-sm font-medium text-gray-500">
                      Landlord: Norlyn Fernandez Coronel
                    </p>
                  </div>

                  <div class="mt-4 flex items-center gap-2 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-briefcase-fill" viewBox="0 0 16 16">
                      <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                      <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
                    </svg>
                    <p class="text-sm font-medium text-gray-500">
                      Employment: Web Developer
                    </p>
                  </div>

                  <div class="mt-4 flex items-center gap-2 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-earmark-check-fill" viewBox="0 0 16 16">
                      <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm1.354 4.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                    <p class="text-sm font-medium text-gray-500">
                      Registration Date: Dec 16, 2022
                    </p>
                  </div>

                  <div class="mt-4 flex items-center gap-2 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                      <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" />
                      <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
                    </svg>
                    <p class="text-sm font-medium text-gray-500">
                      Email: tenant@email.com
                    </p>
                  </div>

                  <div class="mt-4 flex items-center gap-2 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope-at" viewBox="0 0 16 16">
                      <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                      <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                    </svg>
                    <p class="text-sm font-medium text-gray-500">
                      Landlord Email: norlynfernandezcoronel@gmail.com
                    </p>
                  </div>

                  <div class="mt-4 flex items-center gap-2 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                    <p class="text-sm font-medium text-gray-500">
                      Phone Number: 09123456789
                    </p>
                  </div>

                  <div class="mt-4 flex items-center gap-2 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                    <p class="text-sm font-medium text-gray-500">
                      Landlord Phone Number: 09673196494 / 02-8254-6878
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <Loading />
        )}

        <div className="flex justify-center">
        {/* Tenant In Status */}
        <section class="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg transition-shadow hover:shadow-md m-5 w-full">
          <div class="flex items-start sm:gap-8">
            <div
              class="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
              aria-hidden="true"
            >
              <div class="flex items-center gap-1 text-indigo-500">
                <svg class="h-16 w-16 mt-3" fill="currentColor" id="Layer_2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M405.44,143.58a59,59,0,1,0-44.4,0,45,45,0,0,0-23.2,39.35v39.23l-85.72,25.78a26,26,0,0,0-13.57,9.66A25.93,25.93,0,0,0,225,247.93l-50.82-15.28V182.92A45,45,0,0,0,151,143.57a59,59,0,1,0-44.4,0,45,45,0,0,0-23.2,39.34V477.1a5,5,0,0,0,10,0V261a26.15,26.15,0,0,0,8.57,4.43l61.53,18.51L129.24,476.23a5,5,0,0,0,4,5.79,4.37,4.37,0,0,0,.88.08,5,5,0,0,0,4.91-4.12l34-191.19L210,297.88a26,26,0,0,0,7.51,1.11,26.27,26.27,0,0,0,21.08-10.79,26,26,0,0,0,28.6,9.68l70.69-21.27v3.78a5.12,5.12,0,0,0,.08.87l35,196.72a5,5,0,0,0,4.91,4.12,4.37,4.37,0,0,0,.88-.08,5,5,0,0,0,4.05-5.79L347.84,279.94v-97a35,35,0,0,1,35-35h.81a35,35,0,0,1,35,35v113.7a16.08,16.08,0,0,1-32.16,0V193a5,5,0,0,0-10,0V296.62a26.06,26.06,0,0,0,42.16,20.51v160a5,5,0,0,0,10,0V182.92A45,45,0,0,0,405.44,143.58ZM79.75,88.91a49,49,0,1,1,49,49A49.07,49.07,0,0,1,79.75,88.91ZM232.87,277.54a16.38,16.38,0,0,1-20,10.76l-108-32.49a16,16,0,0,1-11.45-15.4V182.92a35,35,0,0,1,35-35h.81a35,35,0,0,1,35,35v46.72L135.52,221V193a5,5,0,1,0-10,0v31.76a5,5,0,0,0,3.56,4.79l93,28A16.1,16.1,0,0,1,232.87,277.54Zm31.4,10.76a16.37,16.37,0,0,1-20-10.76,16.1,16.1,0,0,1,10.76-20l82.84-24.92v33.58Zm70-199.39a49,49,0,1,1,49,49A49.06,49.06,0,0,1,334.23,88.91Z" /></svg>
              </div>
            </div>

            <div>

              <h3 class="text-lg font-medium sm:text-xl">
                Tenant In Status
              </h3>

              <div class="mt-4 flex items-center gap-2 text-lime-500">
                <svg width="20" height="20" fill="currentColor" id="Icons" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path class="cls-1" d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" /><path class="cls-1" d="M16.293,8.293,10,14.586,7.707,12.293a1,1,0,0,0-1.414,1.414l3,3a1,1,0,0,0,1.414,0l7-7a1,1,0,0,0-1.414-1.414Z" /></svg>
                <p class="text-sm font-medium text-gray-500">
                  Doorknob
                </p>
              </div>

              <div class="mt-4 flex items-center gap-2 text-rose-500">
                <svg width="20" height="20" fill="currentColor" id="Icons2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path class="cls-1" d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" /><path class="cls-1" d="M16.707,7.293a1,1,0,0,0-1.414,0L12,10.586,8.707,7.293A1,1,0,1,0,7.293,8.707L10.586,12,7.293,15.293a1,1,0,1,0,1.414,1.414L12,13.414l3.293,3.293a1,1,0,0,0,1.414-1.414L13.414,12l3.293-3.293A1,1,0,0,0,16.707,7.293Z" /></svg>
                <p class="text-sm font-medium text-gray-500">
                  Doorknob
                </p>
              </div>


            </div>
          </div>
        </section>

        {/* Tenant Out Status */}
        <section class="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg transition-shadow hover:shadow-md m-5 w-full">
          <div class="flex items-start sm:gap-8">
            <div
              class="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
              aria-hidden="true"
            >
              <div class="flex items-center gap-1 text-indigo-500">
                <svg class="h-16 w-16 mt-5" fill="currentColor" id="Layer_3" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title/><path d="M484.3,46.89a30,30,0,0,0-42.35,0L361,127.81a17,17,0,0,1-11.95,5h-6.9a42.19,42.19,0,0,0,15.67-32.65V80.57a42.45,42.45,0,0,0-84.9,0v19.55a42.18,42.18,0,0,0,15.66,32.65H223.39a42.18,42.18,0,0,0,15.66-32.65V80.57a42.45,42.45,0,0,0-84.9,0v19.55a42.19,42.19,0,0,0,15.67,32.65h-6.9a17,17,0,0,1-11.95-5L70,46.88A29.94,29.94,0,0,0,27.7,89.22l104,104a42.39,42.39,0,0,1,12.51,30.21V467.91a6,6,0,0,0,11.92,0V223.4a54.25,54.25,0,0,0-16-38.65L36.15,80.79A18,18,0,0,1,61.6,55.32l80.93,80.92a29,29,0,0,0,20.39,8.45H277.79l-26,26a6,6,0,0,0-1.74,4.22v293a6,6,0,1,0,11.92,0V177.39l31.92-31.91c.21-.22.14-.55.32-.79h54.88a29,29,0,0,0,20.39-8.45l80.91-80.91a18,18,0,1,1,25.47,25.46l-103.92,104a54.23,54.23,0,0,0-16,38.66V467.91a6,6,0,0,0,11.92,0V223.4a42.37,42.37,0,0,1,12.53-30.22l103.94-104A30,30,0,0,0,484.3,46.89ZM284.87,100.12V80.57a30.53,30.53,0,0,1,61.06,0v19.55a30.53,30.53,0,0,1-61.06,0Zm-118.8,0V80.57a30.53,30.53,0,0,1,61.06,0v19.55a30.53,30.53,0,0,1-61.06,0Z"/><path d="M204.71,338.73a6,6,0,0,0-6,6V467.91a6,6,0,1,0,11.92,0V344.69A6,6,0,0,0,204.71,338.73Z"/><path d="M310.58,338.73a6,6,0,0,0-6,6V467.91a6,6,0,0,0,11.92,0V344.69A6,6,0,0,0,310.58,338.73Z"/></svg>
              </div>
            </div>

            <div>

              <h3 class="text-lg font-medium sm:text-xl">
                Tenant Out Status
              </h3>

              <div class="mt-4 flex items-center gap-2 text-lime-500">
                <svg width="20" height="20" fill="currentColor" id="Icons" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path class="cls-1" d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" /><path class="cls-1" d="M16.293,8.293,10,14.586,7.707,12.293a1,1,0,0,0-1.414,1.414l3,3a1,1,0,0,0,1.414,0l7-7a1,1,0,0,0-1.414-1.414Z" /></svg>
                <p class="text-sm font-medium text-gray-500">
                  Doorknob
                </p>
              </div>

              <div class="mt-4 flex items-center gap-2 text-rose-500">
                <svg width="20" height="20" fill="currentColor" id="Icons2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path class="cls-1" d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" /><path class="cls-1" d="M16.707,7.293a1,1,0,0,0-1.414,0L12,10.586,8.707,7.293A1,1,0,1,0,7.293,8.707L10.586,12,7.293,15.293a1,1,0,1,0,1.414,1.414L12,13.414l3.293,3.293a1,1,0,0,0,1.414-1.414L13.414,12l3.293-3.293A1,1,0,0,0,16.707,7.293Z" /></svg>
                <p class="text-sm font-medium text-gray-500">
                  Doorknob
                </p>
              </div>


            </div>
          </div>
        </section>
        </div>

      </div>
    </div>
  );
}

export default Profile;
