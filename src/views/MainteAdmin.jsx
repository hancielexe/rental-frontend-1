import React, { useState, useEffect } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

function MainteAdmin() {
  const axiosPrivate = useAxiosPrivate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [maintenances, setMaintenances] = useState();

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getMaintenances = async () => {
      try {
        const response = await axiosPrivate.get(`/maintenances`, {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setMaintenances(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getMaintenances();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  async function resolveMaintenance(maintenance) {
    try {
      const response = await axiosPrivate.post(
        `/maintenances/${maintenance}`,
        JSON.stringify({
          status: true,
          isStatus: "resolved"
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
        setErrMsg("hahah!");
      }
    }

    window.location.reload(true);
  }

  async function rejectMaintenance(maintenance) {
    try {
      const response = await axiosPrivate.post(
        `/maintenances/${maintenance}`,
        JSON.stringify({
          status: true,
          isStatus: "rejected"
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
        setErrMsg("hahah!");
      }
    }

    window.location.reload(true);
  }

  function formatDate(bsonDate) {
    const date = new Date(bsonDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleString(undefined, options);
  }

  return (
    <div className="flex h-screen overflow-hidden ">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-gray-100">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="mx-6">
          <div className="max-w-xl mt-4">
            <h1 className="text-4xl font-extrabold px-5 text-transparent bg-clip-text bg-gradient-to-l from-indigo-800 via-blue-700 to-sky-600">
              Maintenance
            </h1>
          </div>
          <table className="min-w-full mt-7 divide-y-2 divide-gray-200 text-sm">
            <thead className="ltr:text-left rtl:text-right bg-indigo-500 tracking-widest font-mono-bold">
              <tr>
                <th className="whitespace-nowrap px-4 py-4 font-medium text-white">
                  Tenant
                </th>
                <th className="whitespace-nowrap px-4 py-4 font-medium text-white">
                  Maintenance
                </th>
                <th className="whitespace-nowrap px-4 py-4 font-medium text-white">
                  Other Concerns
                </th>
                <th className="whitespace-nowrap px-4 py-4 font-medium text-white">
                  Date
                </th>
                <th className="whitespace-nowrap px-4 py-4 font-medium text-white">
                  Status
                </th>
                <th className="whitespace-nowrap px-4 py-4 font-medium text-white">
                  Action
                </th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 text-center">
              {maintenances?.length ? (
                <>
                  {maintenances.map((maintenance) => (
                    <tr>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {maintenance.username}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {maintenance.maint}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {maintenance.other}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {formatDate(maintenance.date)}
                      </td>
                      {maintenance?.isStatus === "resolved" || "rejected" ? (
                        <td className="whitespace-nowrap px-4 py-2">
                          {maintenance?.isStatus === "resolved" ?
                            <p className="text-green-500">{maintenance?.isStatus}</p> :
                            <p className="text-red-500">{maintenance?.isStatus}</p>
                          }
                        </td>
                      ) : null}
                      {maintenance?.isStatus === null ? (
                        <td className="whitespace-nowrap px-4 py-2">
                          <button
                            onClick={() => resolveMaintenance(maintenance._id)}
                            className="inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700 border-r-8"
                          >
                            Resolve
                          </button>
                          <button
                            onClick={() => rejectMaintenance(maintenance._id)}
                            className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                          >
                            Reject
                          </button>
                        </td>
                      ) : null}

                    </tr>
                  ))}
                </>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MainteAdmin;
