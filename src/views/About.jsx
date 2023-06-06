import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {

    return (
        <>
            <Navbar />
            <section className="text-white">
                <div
                    className="mx-auto max-w-screen-xl px-2 py-20 lg:flex lg:h-screen lg:items-start"
                >
                    <div className="mx-auto max-w-2xl text-center font-inter">
                        <h1
                            className="tracking-widest bg-gradient-to-r from-slate-400 via-blue-500 to-indigo-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-8xl"
                        >
                            ABOUT US

                            <span className="sm:block sm:text-4xl mt-3"> Marlyn's House Rental </span>
                        </h1>

                        <p className="font-semibold text-justify mx-auto mt-16 max-w-xl sm:text-x4/relaxed text-neutral-600">
                            A Rental House with a total of 19 different apartments 4 different locations.
                        </p>


                        <p className="text-justify mx-auto mt-6 max-w-xl sm:text-x4/relaxed text-neutral-600">
                            Everything started in January 2004 when we bought a house in Sampaloc, Manila. We lived there for 3 years,
                            but we encountered several problems, so we left in August 2007 and started renting it out in Sampaloc, Manila.
                            We initially started with just one room. As time went by and we were able to save money, we renovated the house in
                            December 2013 and turned it into two rooms to increase our income. After saving enough, we bought another property in
                            Western Bicutan, Taguig City in September 2018 and started renting it out in August 2020. We purchased another
                            property in Quiapo, Manila in August 2022 and began renting it out as well.
                        </p>
                    </div>
                </div>
            </section>
            <hr />
            <Footer />
        </>
    );
}

export default About;