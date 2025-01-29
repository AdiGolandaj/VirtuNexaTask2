import React, { useState } from 'react';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { label: "HOME", to: "/#home" },
        { label: "SHOP", to: "/#shop" },
        { label: "CART", to: "/#cart" },
    ];

    return (
        <nav id="nav" className=" backdrop-blur-3xl absolute group z-10 w-full border-b border-black/5 dark:border-black/5 lg:border-transparent pl-7 pr-7">
            <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4">
                <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-fit">
                    <a href="/#home" aria-label="logo" className="flex items-center space-x-2 pl-12">
                        <div aria-hidden="true" className="flex space-x-1">
                            <div className="size-4 rounded-full bg-gray-900 "></div>
                            <div className="h-6 w-2 bg-blue-900"></div>
                        </div>
                        <span className="text-2xl font-bold text-gray-900">SHOESPACE</span>
                    </a>

                    {/* Mobile Menu Toggle */}
                    <div className="relative flex max-h-10 items-center lg:hidden pr-8">
                        <button
                            aria-label="hamburger"
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="relative -mr-6 p-6 active:scale-95 duration-300"
                        >
                            <div
                                aria-hidden="true"
                                className={`m-auto h-0.5 w-5 rounded bg-gray-950 transition duration-300 dark:bg-black ${
                                    menuOpen ? "rotate-45 translate-y-1.5" : ""
                                }`}
                            ></div>
                            <div
                                aria-hidden="true"
                                className={`m-auto mt-2 h-0.5 w-5 rounded bg-gray-950 transition duration-300 dark:bg-black ${
                                    menuOpen ? "-rotate-45 -translate-y-1" : ""
                                }`}
                            ></div>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Layer */}
                {menuOpen && (
                    <div className="fixed inset-0 z-10 h-screen w-screen bg-white/70 backdrop-blur-2xl dark:bg-gray-950/70 lg:hidden"></div>
                )}

                {/* Navigation Links */}
                <div
                    className={` lg:hidden absolute top-full left-0 z-20 w-full flex-col flex-wrap gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none ${
                        menuOpen ? "scale-100 opacity-100 visible" : "scale-90 opacity-0 invisible"
                    }`}
                >
                    {links.map((link) => (
                        <a key={link.to} href={link.to} className="hover:text-primary text-gray-300 block transition dark:hover:text-white md:px-4">
                            <span>{link.label}</span>
                        </a>
                    ))}

                    <a
                        href="https://tailtips.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-2 font-semibold text-gray-700 transition hover:text-primary dark:text-white dark:hover:text-white md:px-4"
                    >
                        <span>TailwindCSS Tips</span>
                        <span className="flex rounded-full border bg-primary/20 px-2 py-0.5 text-xs tracking-wider text-purple-700 dark:bg-white/10 dark:text-orange-300">
                            New
                        </span>
                    </a>

                    
                </div>
                <div className='hidden lg:flex gap-6 pr-32 text-black'>
                    <ul className='flex flex-row gap-40'>
                        <li className='hover:text-gray-500 transition duration-300'>
                            <button>
                                <a href="">HOME</a>
                            </button>
                        </li>
                        <li className='hover:text-gray-500 transition duration-300'>
                            <button>
                                <a href="">SHOP</a>
                            </button>
                        </li>
                        <li className='hover:text-gray-500 transition duration-300'>
                            <button>
                                <a href="">CART</a>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
