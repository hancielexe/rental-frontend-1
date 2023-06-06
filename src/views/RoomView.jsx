import React, { useState, useRef, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { NavLink, useSearchParams } from "react-router-dom";

function RoomView() {
  const [showAlert, setShowAlert] = React.useState(true);
  const [units, setUnits] = useState();
  const axiosPrivate = useAxiosPrivate();
  const [searchParams, setSearchParams] = useSearchParams();

  const unitid = searchParams.get("id");

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUnits = async () => {
      try {
        const response = await axiosPrivate.get(`/units/${unitid}`, {
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

  const handleDownload = () => {
    // Logic to generate or fetch the file URL
    const fileUrl = "http://127.0.0.1:5173/assets/houserental-ar.apk";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "houserental-ar.apk"; // Specify the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div class="flex justify-center px-36 place-content-center mt-10">
      {showAlert ? (
        <>
          <div className="fixed inset-0 z-10">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowAlert(false)}
            ></div>
            <div className="flex items-start min-h-screen px-8 py-12 mt-10">
              <div className="relative w-full max-w-lg p-8 mx-auto rounded-xl border border-gray-100 bg-white shadow-xl origin-center hover:origin-top">
                <div className="sm:flex">
                  <span class="text-rose-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-exclamation-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                    </svg>
                  </span>

                  <div class="flex-1 ml-3">
                    <strong class="block font-medium text-gray-900">
                      {" "}
                      Application Required{" "}
                    </strong>

                    <p class="mt-1 text-sm text-gray-700">
                      Please download this application to see the AR View of the
                      apartment.
                    </p>
                  </div>

                  <button
                    class="flex align-top text-gray-500 transition hover:text-gray-600"
                    onClick={() => setShowAlert(false)}
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
      <div>
        {units ? (
          <img
            alt="Signage"
            src={units.room}
            class=""
            width="600"
            height="600"
          />
        ) : null}

        <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
          <strong class="font-medium">Room View</strong>

          <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-indigo-500"></span>

          <NavLink end to={`/aptview?id=${unitid}`}>
            <p class="mt-0.5 opacity-50 sm:mt-0 hover:text-indigo-600 hover:opacity-80">
              Apartment View
            </p>
          </NavLink>
          <button onClick={handleDownload}>Download APK</button>
        </div>
      </div>
    </div>
  );
}

export default RoomView;
