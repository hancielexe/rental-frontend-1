
import React from 'react'
import { useState } from "react";


function AdminRegister () {

    const [showModal, setShowModal] = useState(false);

  return (

<section>
  <div class="px-2 py- sm:px-6 sm:py-24 lg:px-2 bg-indigo-600">
    <div className="max-w-xl">
        <h1 className="text-4xl font-mono font-bold tracking-normal sm:text-5xl text-neutral-100">
        <svg xmlns="w=12 http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth={1.5} stroke="currentColor" className="w-28 h-10 inline-block">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>
          Registration Form
        </h1>
    </div>
      </div>
   
    <main
      aria-label="Main"
      className="flex items-start justify-start px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >

      <div className="max-w-xl lg:max-w-3xl">

        <form action="#" className="mt-8 grid grid-cols-6 gap-6">

        <div className="col-span-6">
        <label
              for="Address" 
              class="block text-sm  font-medium font-bold text-cyan-700"
            >
              Address
            </label>

            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Tenant Previous Address"
              type="text"
              id="address"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="City"
                type="city"
                id="city"
              />
          </div>

          <div className="col-span-6 sm:col-span-3">
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Region"
                type="region"
                id="region"
              />
        </div>

          <div className="col-span-6 sm:col-span-3">
          <label
              for="Username"
              class="block text-sm font-medium font-bold text-cyan-700"
            >
              Username
            </label>

            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              type="text"
              id="username"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
          <label
              for="Password"
              class="block text-sm font-medium font-bold text-cyan-700"
            >
              Password
            </label>

            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              type="text"
              id="password"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
          <label
              for="confirmpassword"
              class="block text-sm font-medium font-bold text-cyan-700"
            >
              Confirm Paswword
            </label>

            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              type="text"
              id="confirpassword"
            />
          </div>

          <div className="col-span-6 sm:col-span-4">
          <label
              for="registrationdate"
              class="block text-sm font-medium font-bold text-cyan-700"
            >
              Registration Date
            </label>

            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              type="text"
              id="registraiondate"
            />
        </div>

        <div className="col-span-6 sm:col-span-4">
          <label
              for="Status"
              class="block text-sm font-medium font-bold text-cyan-700"
            >
              Status
            </label>

            <div className="relative w-full lg:max-w-sm mb-2">
            <select
                className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            >
                 <option selected class="text-end">---</option>
                <option>Single</option>
                <option>Married</option>
                <option>Widowed</option>
            </select>
        </div>
      

            <div className="col-span-6 sm:col-span-4">
            <label
              for="ValidID"
              class="block text-sm font-medium font-bold text-cyan-700"
            >
              Valid ID
            </label>

              <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              class="inline-block shrink-0 mt-2 border border-black-400 bg-gray-200 px-0 py-0 text-sm font-medium text-black transition hover:bg-transparent hover:text-gray-900 focus:outline-none focus:ring active:text-black-400"
            >
              Choose file
            </button>
            <p class="mt-4 text-xs text-gray-500 sm:mt-2">
              No file Chosen
            </p>
            </div>
          </div>
        </div>


            <>
            <div className="col-span-6 sm:col-span-6 sm:flex sm:items-end sm:gap-4 flex justify-end">
                <button
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                    type="button"
                    onClick={() => setShowModal(true)}
                >
                    Create Account
                </button>
            </div>
            {showModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => setShowModal(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-2 py-4">
                            <div className="relative w-full max-w-lg p-2 mx-auto bg-white rounded-md shadow-lg">
                                <div className="mt-3 sm:flex">
                                    
                                        <p className="mt-2 text-lg leading-relaxed text-gray-500">
                                            You have successfully Registered!
                                        </p>
                                            <button
                                                className="w-full mt-20 p-1 flex-1 text-gray-800 rounded-sm outline-none border ring-offset-1 ring-indigo-600 focus:ring-1"
                                                onClick={() =>
                                                    setShowModal(false)
                                                }
                                            >                                           
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </>
            ) : null}
        </>

        </form>
      </div>
    </main>
</section>
  );
}

export default AdminRegistration;

