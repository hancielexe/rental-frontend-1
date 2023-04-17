import React from 'react';
function Header() {
    return ( 
        <header aria-label="Site Header" class="bg-gray-50">
            <div
                class="mx-4 flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-4 "
            >
                <div class="flex flex-1 items-center justify-end md:justify-between">
                    <nav aria-label="Site Nav" class="hidden md:block">
                        <ul class="flex items-center gap-6 text-sm">
                            <li>
                                <a class="text-black transition hover:text-black/75" href="/">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a class="text-black transition hover:text-black/75" href="/">
                                    Units
                                </a>
                            </li>

                            <li>
                                <a class="text-black transition hover:text-black/75" href="/">
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a class="text-black transition hover:text-black/75" href="/">
                                    About
                                </a>
                            </li>

                            <li>
                                <a class="text-black transition hover:text-black/75" href="/">
                                    Help
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div class="flex items-center gap-4">
                        <div class="sm:flex sm:gap-4">
                            <a href="/login">
                                <a
                                    class="block rounded bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700 hover:border-indigo-600 hover:text-white"
                                >
                                    Login

                                </a>
                            </a>

                            <a
                                class="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-indigo-600 transition hover:text-indigo-700/75 sm:block"
                                href="/"
                            >
                                Register
                            </a>
                        </div>

                        <button
                            class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                        >
                            <span class="sr-only">Toggle menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
 );
}

export default Header;