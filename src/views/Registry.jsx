import React, { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

function Registry() {
  const axiosPrivate = useAxiosPrivate();
  const [users, setUsers] = useState();

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

  return (
    <section class="bg-gray-100">
      <div class="px-2">
        <div className="max-w-xl mt-4">
          <h1 className="text-4xl font-extrabold px-5 text-transparent bg-clip-text bg-gradient-to-l from-indigo-800 via-blue-700 to-sky-600">
            User List
          </h1>
        </div>
      </div>
      <div class="overflow-hidden rounded-lg border border-gray-200 shadow-lg m-5 transition-shadow hover:shadow-sm">
        <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Name
              </th>
              <th scope="col" class="px-9 py-4 font-medium text-gray-900">
                Status
              </th>
              <th scope="col" class="px-16 py-4 font-medium text-gray-900">
                Room
              </th>
              <th scope="col" class="px-10 py-4 font-medium text-gray-900">
                Contact
              </th>
              <th scope="col" class="px-8 py-4 font-medium text-gray-900"></th>
            </tr>
          </thead>
          {users ? (
            <tbody class="divide-y divide-gray-100 border-t border-gray-100">
              {users
                .filter((user) => {
                  if (!user.roles.Admin) return user;
                })
                .map((user, i) => (
                  <tr class="hover:bg-gray-50">
                    <th
                      class="flex gap-3 px-6 py-4 font-normal text-gray-900"
                      key={i}
                    >
                      <div class="relative h-10 w-10">
                        <svg width="40" height="40" viewBox="0 0 32 32">
                          <defs>
                            <linearGradient
                              x1="28.538%"
                              y1="20.229%"
                              x2="100%"
                              y2="108.156%"
                              id="logo-a"
                            >
                              <stop
                                stopColor="#A5B4FC"
                                stopOpacity="0"
                                offset="0%"
                              />
                              <stop stopColor="#A5B4FC" offset="100%" />
                            </linearGradient>
                            <linearGradient
                              x1="88.638%"
                              y1="29.267%"
                              x2="22.42%"
                              y2="100%"
                              id="logo-b"
                            >
                              <stop
                                stopColor="#38BDF8"
                                stopOpacity="0"
                                offset="0%"
                              />
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
                      </div>
                      <div class="text-sm">
                        <div class="font-medium text-gray-700">
                          {user.username}
                        </div>
                        <div class="text-gray-400">{user.email}</div>
                      </div>
                    </th>
                    <td class="px-6 py-4">
                      {user.status === true ? (
                        <>
                          <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                            <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                            Renting
                          </span>
                        </>
                      ) : (
                        <>
                          <span class="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600">
                            <span class="h-1.5 w-1.5 rounded-full bg-red-600"></span>
                            Moved Out
                          </span>
                        </>
                      )}
                    </td>
                    <td class="px-6 py-4">{user.unit.unitName}</td>
                    <td class="px-6 py-4">{user.phoneno}</td>
                  </tr>
                ))}
            </tbody>
          ) : (
            <td>Loading...</td>
          )}
        </table>
      </div>
    </section>
  );
}

export default Registry;
