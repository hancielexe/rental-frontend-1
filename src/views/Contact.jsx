import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {

    return (
        <>
            <Navbar />
            <section class="bg-gray-50">
                <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                    <div class="items-end justify-between sm:flex">
                        <div class="max-w-xl">
                            <h2 class="ml-2 -mt-8 text-4xl font-extrabold tracking-tight bg-gradient-to-r from-slate-400 via-blue-500 to-indigo-700 bg-clip-text text-transparent sm:text-5xl">
                                Get in touch with us.
                            </h2>
                        </div>
                    </div>

                    <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <blockquote class="flex h-full flex-col justify-between bg-white shadow-xl p-12">
                            <div>
                                <div class="flex gap-0.5 text-gray-700">
                                    <svg class="h-20 w-20 " fill="currentColor" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="Outline"><g data-name="Outline" id="Outline-2"><circle cx="32" cy="57" r="1" /><path d="M42.63,45.38a23,23,0,1,0-21.26,0C8.51,46.34,2,49.07,2,53.5c0,7,16.31,8.5,30,8.5s30-1.47,30-8.5C62,49.07,55.49,46.34,42.63,45.38ZM11,25A21,21,0,1,1,40.72,44.1a.86.86,0,0,0-.29.21l-5,5h0L32.66,52.1a1,1,0,0,1-1.27,0l-2.77-2.78,0,0-5-5a.86.86,0,0,0-.29-.21A21.06,21.06,0,0,1,11,25ZM32,60C14.73,60,4,57.51,4,53.5c0-3.28,7.17-5.55,19.67-6.27l1.94,2C19.33,49.53,11,50.56,11,53.5c0,3.33,10.62,4.2,17,4.43h0a1,1,0,0,0,0-2c-9.57-.34-14-1.72-14.91-2.43.88-.7,5.19-2,14.41-2.41L30,53.6a2.92,2.92,0,0,0,1.95.73,3,3,0,0,0,2-.78l2.46-2.46C45.7,51.46,50,52.8,50.89,53.5c-.89.71-5.33,2.09-14.91,2.43a1,1,0,0,0,0,2h0c6.33-.23,17-1.1,17-4.43,0-2.94-8.33-4-14.61-4.32l1.94-2C52.83,48,60,50.22,60,53.5,60,57.51,49.27,60,32,60Z" /><path d="M51,25A19,19,0,1,0,32,44,19,19,0,0,0,51,25ZM15,25A17,17,0,1,1,32,42,17,17,0,0,1,15,25Z" /><path d="M32.59,32.9l3.53,2.57a3,3,0,0,0,4.61-3.35L39.38,28a1,1,0,0,1,.36-1.11l3.53-2.56a3,3,0,0,0-1.76-5.43H37.15a1,1,0,0,1-.95-.69L34.85,14a3,3,0,0,0-5.7,0L27.8,18.17a1,1,0,0,1-.95.69H22.49a3,3,0,0,0-1.76,5.43l3.53,2.56A1,1,0,0,1,24.62,28l-1.35,4.15a3,3,0,0,0,4.61,3.35l3.53-2.57A1,1,0,0,1,32.59,32.9Zm-2.35-1.62-3.53,2.57a1,1,0,0,1-1.54-1.12l1.35-4.15a3,3,0,0,0-1.09-3.35L21.9,22.67a1,1,0,0,1-.36-1.12,1,1,0,0,1,.95-.69h4.36a3,3,0,0,0,2.85-2.07l1.35-4.15a1,1,0,0,1,1.9,0l1.35,4.15a3,3,0,0,0,2.85,2.07h4.36a1,1,0,0,1,1,.69,1,1,0,0,1-.36,1.12l-3.53,2.56a3,3,0,0,0-1.09,3.35l1.35,4.15a1,1,0,0,1-1.54,1.12l-3.53-2.57A3,3,0,0,0,30.24,31.28Z" /></g></g></svg>
                                </div>

                                <div class="mt-4">
                                    <h2 class="text-xl font-bold bg-gradient-to-r from-slate-400 via-blue-500 to-indigo-700 bg-clip-text text-transparent sm:text-2xl">
                                        Come see us!
                                    </h2>

                                    <p class="mt-4 text-gray-600 font-bold">Quiapo</p>
                                    <p class="text-gray-600"> 931/929 F. R. Hidalgo Street, Barangay 393, Quiapo, Manila </p>

                                    <p class="mt-4 text-gray-600 font-bold">Sampaloc</p>
                                    <p class="text-gray-600"> 966 Int. Lerma Street, Barangay 395, Sampaloc, Manila </p>

                                    <p class="mt-4 text-gray-600 font-bold">Taguig</p>
                                    <p class="text-gray-600"> Block 30 Lot 14 Pili Street, SSBrigade, Barangay Western Bicutan, Taguig  </p>

                                </div>
                            </div>
                        </blockquote>

                        <blockquote class="flex h-full flex-col justify-between bg-white shadow-xl p-12">
                            <div>
                                <div class="flex gap-0.5 text-gray-700">
                                    <svg class="h-20 w-20 " fill="currentColor" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="Outline"><g data-name="Outline" id="Outline-2"><circle cx="32" cy="57" r="1"/><path d="M42.63,45.38a23,23,0,1,0-21.26,0C8.51,46.34,2,49.07,2,53.5c0,7,16.31,8.5,30,8.5s30-1.47,30-8.5C62,49.07,55.49,46.34,42.63,45.38ZM11,25A21,21,0,1,1,40.72,44.1a.86.86,0,0,0-.29.21l-5,5-.07.08L32.66,52.1a1,1,0,0,1-1.27,0l-7.82-7.83a.86.86,0,0,0-.29-.21A21.06,21.06,0,0,1,11,25ZM32,60C14.73,60,4,57.51,4,53.5c0-3.28,7.17-5.55,19.67-6.27l1.94,2C19.33,49.53,11,50.56,11,53.5c0,3.33,10.62,4.2,17,4.43h0a1,1,0,0,0,0-2c-9.57-.34-14-1.72-14.91-2.43.88-.7,5.19-2,14.41-2.41L30,53.6a2.92,2.92,0,0,0,1.95.73,3,3,0,0,0,2-.78l2.46-2.46C45.7,51.46,50,52.8,50.89,53.5c-.89.71-5.33,2.09-14.91,2.43a1,1,0,0,0,0,2h0c6.33-.23,17-1.1,17-4.43,0-2.94-8.33-4-14.61-4.32l1.94-2C52.83,48,60,50.22,60,53.5,60,57.51,49.27,60,32,60Z"/><path d="M51,25A19,19,0,1,0,32,44,19,19,0,0,0,51,25ZM15,25A17,17,0,1,1,32,42,17,17,0,0,1,15,25Z"/><path d="M35.61,34.32a1,1,0,0,0-.17-.94l-3.37-5.13a1,1,0,0,0-1-.43l-2.19.41a10.75,10.75,0,0,1-.18-6.4L30,22.2a1,1,0,0,0,1.11-.44L34.74,16a1,1,0,0,0,0-1,7.19,7.19,0,0,0-1-1.36c-2.49-2.39-5.14-2.26-7.91.4a14.22,14.22,0,0,0-4.21,11.19A16.11,16.11,0,0,0,28.3,37.12,5,5,0,0,0,31,38a5,5,0,0,0,3.4-1.72A7.79,7.79,0,0,0,35.61,34.32ZM33,34.84c-1.27,1.23-2,1.57-3.53.63a13.86,13.86,0,0,1-5.76-10.31,12.25,12.25,0,0,1,3.61-9.63A4.4,4.4,0,0,1,30.2,14a3.18,3.18,0,0,1,2.16,1.06l.35.44-2.86,4.57c-2-.53-2-.51-2.34-.29a.94.94,0,0,0-.42.5,12.74,12.74,0,0,0,.21,9.48,1,1,0,0,0,1.11.59l2.35-.45,2.74,4.17A7.2,7.2,0,0,1,33,34.84Z"/><path d="M41.84,25a8.75,8.75,0,0,1-2.59,6.23,1,1,0,0,0,1.42,1.42,10.82,10.82,0,0,0,0-15.3,1,1,0,0,0-1.42,1.42A8.75,8.75,0,0,1,41.84,25Z"/><path d="M36.18,29.57a1,1,0,0,0,1.42,0,6.49,6.49,0,0,0,0-9.14,1,1,0,0,0-1.43,1.41,4.47,4.47,0,0,1,0,6.32A1,1,0,0,0,36.18,29.57Z"/></g></g></svg>
                                </div>

                                <div class="mt-4">
                                    <h3 class="text-xl font-bold bg-gradient-to-r from-slate-400 via-blue-500 to-indigo-700 bg-clip-text text-transparent sm:text-2xl">
                                        Call Us
                                    </h3>

                                    <p class="mt-4 text-gray-500"> Call us to speak to the landowner for other inquiries and questions. </p>

                                    <p class="mt-4 text-gray-600 font-bold">Mobile Number</p>
                                    <p class="text-indigo-600 font-semibold"> +639673196494 </p>

                                    <p class="mt-4 text-gray-600 font-bold">Landline Number</p>
                                    <p class="text-indigo-600 font-semibold"> 02-8254-6878 </p>

                                    <p class="mt-4 text-gray-600 font-bold">Availability</p>
                                    <p class="text-gray-600"> Mon-Sun from 10am to 9pm </p>

                                </div>
                            </div>
                        </blockquote>

                        <blockquote class="flex h-full flex-col justify-between bg-white shadow-xl p-12">
                            <div>
                                <div class="flex gap-0.5 text-gray-700">
                                    <svg class="h-20 w-20 " fill="currentColor" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="Outline"><g data-name="Outline" id="Outline-2"><circle cx="32" cy="57" r="1"/><path d="M42.63,45.38a23,23,0,1,0-21.26,0C8.51,46.34,2,49.07,2,53.5c0,7,16.31,8.5,30,8.5s30-1.47,30-8.5C62,49.07,55.49,46.34,42.63,45.38ZM11,25A21,21,0,1,1,40.72,44.1a.86.86,0,0,0-.29.21l-5,5,0,0L32.66,52.1a1,1,0,0,1-1.27,0l-7.82-7.83a.86.86,0,0,0-.29-.21A21.06,21.06,0,0,1,11,25ZM32,60C14.73,60,4,57.51,4,53.5c0-3.28,7.17-5.55,19.67-6.27l1.94,2C19.33,49.53,11,50.56,11,53.5c0,3.33,10.62,4.2,17,4.43h0a1,1,0,0,0,0-2c-9.57-.34-14-1.72-14.91-2.43.88-.7,5.19-2,14.41-2.41L30,53.6a2.92,2.92,0,0,0,1.95.73,3,3,0,0,0,2-.78l2.46-2.46C45.7,51.46,50,52.8,50.89,53.5c-.89.71-5.33,2.09-14.91,2.43a1,1,0,0,0,0,2h0c6.33-.23,17-1.1,17-4.43,0-2.94-8.33-4-14.61-4.32l1.94-2C52.83,48,60,50.22,60,53.5,60,57.51,49.27,60,32,60Z"/><path d="M51,25A19,19,0,1,0,32,44,19,19,0,0,0,51,25ZM15,25A17,17,0,1,1,32,42,17,17,0,0,1,15,25Z"/><path d="M44,31.45V19.55A2.55,2.55,0,0,0,41.45,17H22.55A2.55,2.55,0,0,0,20,19.55v11.9A2.55,2.55,0,0,0,22.55,34h18.9A2.55,2.55,0,0,0,44,31.45Zm-8.31-6.07L42,20V30.64ZM32,25.89,23.88,19H40.12Zm-3.69-.51L22,30.64V20Zm1.55,1.31L31.35,28a1,1,0,0,0,1.3,0l1.49-1.27L40.5,32h-17Z"/></g></g></svg>
                                </div>

                                <div class="mt-4">
                                    <h3 class="text-xl font-bold bg-gradient-to-r from-slate-400 via-blue-500 to-indigo-700 bg-clip-text text-transparent sm:text-2xl">
                                        Send an Email
                                    </h3>

                                    <p class="mt-4 text-gray-500"> Send us an email for inquiries. We are always happy to help.</p>

                                    <p class="mt-10 text-gray-600 font-bold">Landlord Email</p>
                                    <p class="text-indigo-600 font-semibold"> norlynfernandezcoronel@gmail.com </p>

                                </div>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </section>
            <hr />
            <Footer />
        </>
    );
}

export default Contact;