import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <Navbar />
      <section class="bg-image">
        <div class="max-w-screen-xl px-4 py-32 sm:px-6 lg:px-8" id="section">
          <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div class="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
              <h2 class="text-3xl text-white font-extrabold sm:text-4xl">
                Marlyn's House Rental
              </h2>

              <p class="mt-4 text-white">
              Find your ideal home effortlessly with our user-friendly platform. 
              View the list of available apartments, quickly filter them by location, 
              and view the property in images, including an AR View, and other thorough information. 
              Begin your search for the ideal rental property right today!
              </p>

              <Link to="/inquire">
                <a class="mt-8 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring active:text-indigo-500">
                  <span class="text-sm font-medium"> Inquire </span>

                  <svg
                    class="ml-3 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Landing;
