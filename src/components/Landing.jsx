import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <Header />
      <section class="bg-landing">
        <div
          class="h-screen ml-16 max-w-screen-xl px-4 py-64 sm:px-6 lg:px-8"
          id="section"
        >
          <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div class="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
              <h2 class="text-3xl font-inter text-white font-extrabold sm:text-4xl">
                Marlyn's House Rental
              </h2>

              <p class="mt-4 text-lg text-white">
                Find your ideal home effortlessly with our user-friendly
                platform. View the list of available apartments, quickly filter
                them by location, and view the property in images, including an
                AR View, and other thorough information. Begin your search for
                the ideal rental property right today!
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Landing;
