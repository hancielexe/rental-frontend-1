import React from 'react'

function MainteAdmin() {
  return (

<div className="overflow-x-auto">
  <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
    <thead className="ltr:text-left rtl:text-right bg-indigo-600 tracking-widest font-mono-bold">
      <tr>
        <th className="whitespace-nowrap px-4 py-4 font-medium text-white">
          Username
        </th>
        <th className="whitespace-nowrap px-4 py-4 font-medium text-white">
          Issue
        </th>
        <th className="whitespace-nowrap px-4 py-4 font-medium text-white">
          Other Concerns
        </th>
        <th className="px-4 py-2"></th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200 text-center">
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          John Doe
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
        <td className="whitespace-nowrap px-4 py-2">
        <a
            href="#"
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 border-r-8"
          >
            View
          </a>
          <a
            href="#"
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            Delete
          </a>
        </td>
      </tr>

      <tr class="bg-gray-300">
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Jane Doe
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Designer</td>
        <td className="whitespace-nowrap px-4 py-2">
        <a
            href="#"
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 border-r-8"
          >
            View
          </a>
          <a
            href="#"
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            Delete
          </a>
        </td>
      </tr>

      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Gary Barlow
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Singer</td>
        <td className="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 border-r-8"
          >
            View
          </a>
          <a
            href="#"
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            Delete
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</div>

  );
}

export default MainteAdmin;