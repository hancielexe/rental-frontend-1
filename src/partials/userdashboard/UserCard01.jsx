import React from 'react';
import { Link } from 'react-router-dom';
import EditMenu from '../EditMenu';

function UserCard01() {
    return (
        <div class="p-5 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-10">
            <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                <img class="object-contain w-full" src="./src/assets/unit1.png" alt="" />
            </div>
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h1 class="text-black text-2xl title-font font-bold mb-2">Your Apartment</h1>
                <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                <div class="py-4">
                    <div class=" inline-block mr-2" >
                        <div class="flex  pr-2 h-full items-center">
                            <svg class="text-indigo-500 w-6 h-6 mr-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="12" cy="12" r="9" />
                                <path d="M9 12l2 2l4 -4" />
                            </svg>
                            <p class="title-font font-medium">Paid this month</p>
                        </div>
                    </div>
                    <div class="inline-block mr-2" >
                        <div class="flex  pr-2 h-full items-center">
                            <svg class="text-indigo-500 w-6 h-6 mr-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="12" cy="12" r="9" />
                                <path d="M9 12l2 2l4 -4" />
                            </svg>
                            <p class="title-font font-medium">Ano pa</p>
                        </div>
                    </div>
                    <div class=" inline-block mr-2" >
                        <div class="flex  pr-2 h-full items-center">
                            <svg class="text-gray-500 w-6 h-6 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="15" y1="9" x2="9" y2="15" />
                                <line x1="9" y1="9" x2="15" y2="15" />
                            </svg>
                            <p class="title-font font-medium">Electricity</p>
                        </div>
                    </div>

                    <div class=" inline-block mr-2" >
                        <div class="flex  pr-2 h-full items-center">
                            <svg class="text-gray-500 w-6 h-6 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="15" y1="9" x2="9" y2="15" />
                                <line x1="9" y1="9" x2="15" y2="15" />
                            </svg>
                            <p class="title-font font-medium">Water</p>
                        </div>
                    </div>
                    <div class=" inline-block mr-2" >
                        <div class="flex  pr-2 h-full items-center">
                            <svg class="text-gray-500 w-6 h-6 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="15" y1="9" x2="9" y2="15" />
                                <line x1="9" y1="9" x2="15" y2="15" />
                            </svg>
                            <p class="title-font font-medium">Wi-fi</p>
                        </div>
                    </div>
                </div>
                <div class="md:flex font-bold text-gray-800">
                    <div class="w-full md:w-1/2 flex space-x-3">
                        <div class="w-1/2">
                            <h2 class="text-gray-500">Remaining Balance</h2>
                            <p >₱7,000</p>
                        </div>
                        <div class="w-1/2">
                            <h2 class="text-gray-500">Title</h2>
                            <p>description</p>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 flex space-x-3">
                        <div class="w-1/2">
                            <h2 class="text-gray-500">Title</h2>
                            <p>description</p>
                        </div>
                        <div class="w-1/2">
                            <h2 class="text-gray-500">Title</h2>
                            <p>description</p>
                        </div>
                    </div>
                </div>
                <a class="mt-3 text-indigo-500 inline-flex items-center">View Details
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2 hover:translate-x-3" viewBox="0 0 24 24">
                        <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default UserCard01;