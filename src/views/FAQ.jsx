import React, { useState } from "react";

import UserSidebar from "../partials/UserSidebar";
import UserHeader from "../partials/UserHeader";

function FAQ() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <UserSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-gray-100">
                {/*  Site header */}
                <UserHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div class="px-20">
                    <div class="p-8">
                        <div class="bg-white p-4 rounded-lg shadow-xl py-8 mt-5">
                            <h4 class="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">FAQ</h4>
                            <p class="text-center text-gray-600 text-sm mt-2">Here are some of the frequently asked questions</p>
                            <div class="space-y-12 px-2 xl:px-16 mt-12">
                                <div class="mt-4 flex">
                                    <div>
                                        <div class="flex items-center h-16 border-l-4 border-blue-600">
                                            <span class="text-4xl text-blue-600 px-4">Q.</span>
                                        </div>
                                        <div class="flex items-center h-16 border-l-4 border-gray-400">
                                            <span class="text-4xl text-gray-400 px-4">A.</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="flex items-center h-16">
                                            <span class="text-lg text-blue-600 font-bold">What types of properties do you manage?</span>
                                        </div>
                                        <div class="flex items-center py-2">
                                            <span class="text-gray-500">We offer studio type apartments. Most of our properties are unfurnished. A more detailed overview of the apartments that we offer is shown in the Listings page.</span>

                                        </div>
                                    </div>
                                </div>

                                <div class="mt-4 flex">
                                    <div>
                                        <div class="flex items-center h-16 border-l-4 border-blue-600">
                                            <span class="text-4xl text-blue-600 px-4">Q.</span>
                                        </div>
                                        <div class="flex items-center h-16 border-l-4 border-gray-400">
                                            <span class="text-4xl text-gray-400 px-4">A.</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="flex items-center h-16">
                                            <span class="text-lg text-blue-600 font-bold">How much is the apartment rent?</span>
                                        </div>
                                        <div class="flex items-center py-2">
                                            <span class="text-gray-500">The rent cost is different per location. The electricity, water, telephone and internet bills are to be paid separately from the rent. 
                                            Full details can be seen on the Listing page.</span>

                                        </div>
                                    </div>
                                </div>

                                <div class="mt-4 flex">
                                    <div>
                                        <div class="flex items-center h-16 border-l-4 border-blue-600">
                                            <span class="text-4xl text-blue-600 px-4">Q.</span>
                                        </div>
                                        <div class="flex items-center h-16 border-l-4 border-gray-400">
                                            <span class="text-4xl text-gray-400 px-4">A.</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="flex items-center h-16">
                                            <span class="text-lg text-blue-600 font-bold">What happens if the tenant does not pay their rent?</span>
                                        </div>
                                        <div class="flex items-center py-2">
                                            <span class="text-gray-500">Tenant will be given 15 days after their scheduled monthly payment. After 15 days of no payment, the tenant will be evicted and your deposit will be used.</span>

                                        </div>
                                    </div>
                                </div>

                                <div class="mt-4 flex">
                                    <div>
                                        <div class="flex items-center h-16 border-l-4 border-blue-600">
                                            <span class="text-4xl text-blue-600 px-4">Q.</span>
                                        </div>
                                        <div class="flex items-center h-16 border-l-4 border-gray-400">
                                            <span class="text-4xl text-gray-400 px-4">A.</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="flex items-center h-16">
                                            <span class="text-lg text-blue-600 font-bold">I see an apartment for rent on your website, is it still available?</span>
                                        </div>
                                        <div class="flex items-center py-2">
                                            <span class="text-gray-500">Typically the properties on our website or list of available apartments are immediately available. We strive to keep our web page updated daily so generally rented properties are marked as occupied within 24 hours.</span>

                                        </div>
                                    </div>
                                </div>

                                <div class="mt-4 flex">
                                    <div>
                                        <div class="flex items-center h-16 border-l-4 border-blue-600">
                                            <span class="text-4xl text-blue-600 px-4">Q.</span>
                                        </div>
                                        <div class="flex items-center h-16 border-l-4 border-gray-400">
                                            <span class="text-4xl text-gray-400 px-4">A.</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="flex items-center h-16">
                                            <span class="text-lg text-blue-600 font-bold">Can you hold or reserve a rental property for me?</span>
                                        </div>
                                        <div class="flex items-center py-2">
                                            <span class="text-gray-500">We do not “hold” properties and a property is not considered rented until a contract has been signed and a security deposit has been paid.</span>

                                        </div>
                                    </div>
                                </div>

                                <div class="mt-4 flex">
                                    <div>
                                        <div class="flex items-center h-16 border-l-4 border-blue-600">
                                            <span class="text-4xl text-blue-600 px-4">Q.</span>
                                        </div>
                                        <div class="flex items-center h-16 border-l-4 border-gray-400">
                                            <span class="text-4xl text-gray-400 px-4">A.</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="flex items-center h-16">
                                            <span class="text-lg text-blue-600 font-bold">When is rent due and how will you need to pay?</span>
                                        </div>
                                        <div class="flex items-center py-2">
                                            <span class="text-gray-500">Your monthly rent would be depending on when you first paid your one month advance and deposit. You can see your due dates including the fees that you need to pay on the Billing tab. You can pay through your landlord personally or through their Gcash number.</span>

                                        </div>
                                    </div>
                                </div>

                                <div class="mt-4 flex">
                                    <div>
                                        <div class="flex items-center h-16 border-l-4 border-blue-600">
                                            <span class="text-4xl text-blue-600 px-4">Q.</span>
                                        </div>
                                        <div class="flex items-center h-16 border-l-4 border-gray-400">
                                            <span class="text-4xl text-gray-400 px-4">A.</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="flex items-center h-16">
                                            <span class="text-lg text-blue-600 font-bold">What is the rental process?</span>
                                        </div>
                                        <div class="flex items-center py-2">
                                            <span class="text-gray-500">When you are interested in your property, you can easily inquire online 24/7. Details and contact information will be sent to you after you fill up our Inquiry form. Our application procedure involves: A background check, current employee / income verification, and signing of contracts.
                                            After the agreement of both parties, you will have to pay the security deposit within 24 hours. </span>

                                        </div>
                                    </div>
                                </div>

                                <div class="mt-4 flex">
                                    <div>
                                        <div class="flex items-center h-16 border-l-4 border-blue-600">
                                            <span class="text-4xl text-blue-600 px-4">Q.</span>
                                        </div>
                                        <div class="flex items-center h-16 border-l-4 border-gray-400">
                                            <span class="text-4xl text-gray-400 px-4">A.</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="flex items-center h-16">
                                            <span class="text-lg text-blue-600 font-bold">What is my security deposit for? </span>
                                        </div>
                                        <div class="flex items-center py-2">
                                            <span class="text-gray-500">The security deposit is a set amount of money that the landlord takes from you as collateral for the structural integrity and cleanliness of the house. In other words, this money is set aside by the landlord to inspire tenants to take good care of their rental property, and if you don't, it gives them the opportunity to recoup those losses.</span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQ;