import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import UserSidebar from '../partials/UserSidebar';
import UserHeader from '../partials/UserHeader';

function UserApartment() {
    const { auth } = useAuth();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden ">
            {/* Sidebar */}
            <UserSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-gray-100">

                {/*  Site header */}
                <UserHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                <main>
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto bg-gray-100">

                        <div class="px-12 h-90">
                            <div class="relative">

                                <ul class="bg-white absolute left-0 right-0 -bottom-18 p-3 border-gray-200 rounded-lg sm:flex-row flex-col shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-10">
                                    <li class="text-2xl text-gray-700 font-bold border-b border-gray border-solid py-5 px-5 mb-2 -mt-3">
                                        Apartment Information
                                    </li>
                                    <li class="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-50">
                                        <div class="flex justify-center items-center text-indigo-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                            </svg>
                                        </div>
                                        <div class="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                                            <h3 class="text-gray-900 font-medium text-md">Location</h3>
                                            <p class="text-gray-600 mt-1 font-regular text-sm">

                                            929 F. R. Hidalgo Street, Quiapo, Barangay 393, Manila, 1001</p>
                                        </div>
                                    </li>
                                    <li class="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-50">
                                        <div class="flex justify-center items-center text-amber-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-coin" viewBox="0 0 16 16">
                                                <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                                            </svg>
                                        </div>
                                        <div class="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                                            <h3 class="text-gray-900 font-medium text-md">Monthly Costs</h3>
                                            <p class="text-gray-600 mt-1 font-regular text-sm">

                                                Rent: ₱7000 / Meralco: 15 per kilowatts / Manila Water: ₱150 per head</p>
                                        </div>
                                    </li>
                                    <li class="text-xs uppercase text-gray-400 border-b border-gray border-solid py-2 px-5 mb-2">
                                        Remaining Balance
                                    </li>
                                    <li class="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-50">
                                        <div class="flex justify-center items-center text-blue-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-door-open-fill" viewBox="0 0 16 16">
                                                <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
                                            </svg>
                                        </div>
                                        <div class="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                                            <h3 class="text-gray-900 font-medium text-md">Rent</h3>
                                            <p class="text-gray-600 mt-1 font-regular text-sm">

                                                As of April 2023: Your remaining balance for rent is ₱7,000.</p>
                                        </div>
                                    </li>
                                    <li class="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-50">
                                        <div class="flex justify-center items-center text-indigo-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-droplet-half" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z" />
                                                <path fill-rule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z" />
                                            </svg>
                                        </div>
                                        <div class="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                                            <h3 class="text-gray-900 font-medium text-md">Water Bill</h3>
                                            <p class="text-gray-600 mt-1 font-regular text-sm">

                                            As of April 2023: Your remaining balance for the water bill is ₱300.</p>
                                        </div>
                                    </li>
                                    <li class="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-50">
                                        <div class="flex justify-center items-center text-amber-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-lightning-fill" viewBox="0 0 16 16">
                                                <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z" />
                                            </svg>
                                        </div>
                                        <div class="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                                            <h3 class="text-gray-900 font-medium text-md">Electricity Bill</h3>
                                            <p class="text-gray-600 mt-1 font-regular text-sm">

                                            As of April 2023: Your remaining balance for the electricity bill is ₱1,000.</p>
                                        </div>
                                    </li>
                                    <li class="text-xs uppercase text-gray-400 border-b border-gray border-solid py-2 px-5 mb-2">
                                        Other Details
                                    </li>
                                    <li class="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-50">
                                        <div class="flex justify-center items-center text-blue-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-door-open-fill" viewBox="0 0 16 16">
                                                <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
                                            </svg>
                                        </div>
                                        <div class="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                                            <h3 class="text-gray-900 font-medium text-md">Occupants</h3>
                                            <p class="text-gray-600 mt-1 font-regular text-sm">

                                                2 people</p>
                                        </div>
                                    </li>
                                    <li class="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-50">
                                        <div class="flex justify-center items-center text-indigo-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-droplet-half" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z" />
                                                <path fill-rule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z" />
                                            </svg>
                                        </div>
                                        <div class="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                                            <h3 class="text-gray-900 font-medium text-md">Unit Type</h3>
                                            <p class="text-gray-600 mt-1 font-regular text-sm">

                                            Studio Type</p>
                                        </div>
                                    </li>
                                    <li class="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-50">
                                        <div class="flex justify-center items-center text-amber-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-lightning-fill" viewBox="0 0 16 16">
                                                <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z" />
                                            </svg>
                                        </div>
                                        <div class="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                                            <h3 class="text-gray-900 font-medium text-md">House Level</h3>
                                            <p class="text-gray-600 mt-1 font-regular text-sm">

                                            2 Floors</p>
                                        </div>
                                    </li>
                                    <li class="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-50">
                                        <div class="flex justify-center items-center text-amber-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-lightning-fill" viewBox="0 0 16 16">
                                                <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z" />
                                            </svg>
                                        </div>
                                        <div class="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                                            <h3 class="text-gray-900 font-medium text-md">House Area</h3>
                                            <p class="text-gray-600 mt-1 font-regular text-sm">

                                            1st Floor: 25 sq m / 2nd Floor: 40 sq m</p>
                                        </div>
                                    </li>
                                    <li class="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-50">
                                        <div class="flex justify-center items-center text-amber-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-lightning-fill" viewBox="0 0 16 16">
                                                <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z" />
                                            </svg>
                                        </div>
                                        <div class="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                                            <h3 class="text-gray-900 font-medium text-md">Pets</h3>
                                            <p class="text-gray-600 mt-1 font-regular text-sm">

                                            None</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </main>

            </div>
        </div>
    );
}

export default UserApartment;