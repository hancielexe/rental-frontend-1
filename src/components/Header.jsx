import React from 'react';
import { NavLink } from "react-router-dom";
import Listings from "../pages/Listings";
import FAQ from "../views/FAQ";
import Contact from "../views/Contact";
import Inquiry from "../views/Inquiry";
import About from "../views/About";

function Header() {
    return (
        <header class="absolute inset-x-0 top-0 text-white hidden md:block">
            <div class="container mx-auto flex items-center h-20">
                <a href="" class="flex items-center justify-center">
                    <svg fill = "currentColor" viewBox="0 0 64 64" height = "55" width = "55" xmlns="http://www.w3.org/2000/svg"><g id="Outline"><g data-name="Outline" id="Outline-2"><circle cx="32" cy="57" r="1"/><path d="M42.63,45.38a23,23,0,1,0-21.26,0C8.51,46.34,2,49.07,2,53.5c0,7,16.31,8.5,30,8.5s30-1.47,30-8.5C62,49.07,55.49,46.34,42.63,45.38ZM11,25A21,21,0,1,1,40.72,44.1a.86.86,0,0,0-.29.21L32.66,52.1a1,1,0,0,1-1.27,0l-2.77-2.78,0,0-5-5a.86.86,0,0,0-.29-.21A21.06,21.06,0,0,1,11,25ZM32,60C14.73,60,4,57.51,4,53.5c0-3.28,7.17-5.55,19.67-6.27l1.94,2C19.33,49.53,11,50.56,11,53.5c0,3.33,10.62,4.2,17,4.43h0a1,1,0,0,0,0-2c-9.57-.34-14-1.72-14.91-2.43.88-.7,5.19-2,14.41-2.41L30,53.6a2.92,2.92,0,0,0,1.95.73,3,3,0,0,0,2-.78l2.46-2.46C45.7,51.46,50,52.8,50.89,53.5c-.89.71-5.33,2.09-14.91,2.43a1,1,0,0,0,0,2h0c6.33-.23,17-1.1,17-4.43,0-2.94-8.33-4-14.61-4.32l1.94-2C52.83,48,60,50.22,60,53.5,60,57.51,49.27,60,32,60Z"/><path d="M51,25A19,19,0,1,0,32,44,19,19,0,0,0,51,25ZM15,25A17,17,0,1,1,32,42,17,17,0,0,1,15,25Z"/><path d="M42,35V23.23l1.38,1.1a1,1,0,0,0,1.24-1.57L42,20.68V14a1,1,0,0,0-1-1H37a1,1,0,0,0-1,1v1.9l-3.38-2.68a1,1,0,0,0-1.24,0l-12,9.54a1,1,0,0,0,1.24,1.57L22,23.23V35a1,1,0,0,0,1,1H41A1,1,0,0,0,42,35ZM38,15h2v4.09l-2-1.6ZM33,34H31V29h2Zm7,0H35V28a1,1,0,0,0-1-1H30a1,1,0,0,0-1,1v6H24V21.64l8-6.36,8,6.36Z"/></g></g></svg>
                    <span class="ml-2 text-xl font-inter font-bold tracking-tighter"><p class = "font-medium">Marlyn's</p><p class = "-mt-2 text-2xl">House Rental</p></span>
                </a>
                <nav class="contents font-semibold text-base lg:text-lg">
                    <ul class="mx-auto flex items-center">
                        <li class="p-5 xl:p-8 active">
                            <NavLink
                            end
                            to ="/inquire">
                            <button
                             class="block h-16 border-b-4 border-transparent leading-[4rem] before:absolute before:bottom-5 before:h-0.5 before:w-14 before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-x-100">
                                <span>Inquire</span>
                            </button>
                            </NavLink>
                        </li>
                        <li class="p-5 xl:p-8">
                            <NavLink
                            end
                            to ="/listings">
                            <button
                             class="block h-16 border-b-4 border-transparent leading-[4rem] before:absolute before:bottom-5 before:h-0.5 before:w-11 before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-x-100">
                                <span>Units</span>
                            </button>
                            </NavLink>
                        </li>
                        <li class="p-5 xl:p-8">
                            <NavLink
                            end
                            to ="/contact">
                            <button
                             class="block h-16 border-b-4 border-transparent leading-[4rem] before:absolute before:bottom-5 before:h-0.5 before:w-16 before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-x-100">
                                <span>Contact</span>
                            </button>
                            </NavLink>
                        </li>
                        <li class="p-5 xl:p-8">
                            <NavLink
                            end
                            to ="/about">
                            <button
                             class="block h-16 border-b-4 border-transparent leading-[4rem] before:absolute before:bottom-5 before:h-0.5 before:w-14 before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-x-100">
                                <span>About</span>
                            </button>
                            </NavLink>
                        </li>
                        <li class="p-5 xl:p-8">
                            <NavLink
                            end
                            to ="/faq">
                            <button
                             class="block h-16 border-b-4 border-transparent leading-[4rem] before:absolute before:bottom-5 before:h-0.5 before:w-10 before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-x-100">
                                <span>FAQ</span>
                            </button>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <NavLink
                end
                to = "/login">
                <button class="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                    <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                    <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                    <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-indigo-700">Login</span>
                    <span class="absolute inset-0 border-2 border-white rounded-full"></span>
                </button>
                </NavLink>
            </div>
        </header>
    );
}

export default Header;