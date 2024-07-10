'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { FaMoon } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { ThemeToggle } from '../theme-toggle';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F2F4F5] dark:bg-[#3A3A3A] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 dark:bg-white py-1 px-3 rounded-2xl">
              <Image
                src="/assets/2.png"
                alt="Logo"
                width={2560}
                height={700}
                className="h-10 w-auto"
               />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium">Home</Link>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium">Features</Link>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium">Pricing</Link>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium">Contact</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <ThemeToggle />
              <a href="/login" className="ml-3 text-gray-600 bg-white  px-6 py-2 rounded-2xl border border-gray-900 text-sm font-medium">Log&nbsp;in</a>
              <a href="/signup" className="ml-3 bg-[#172448] hover:bg-[#213468] text-white px-4 py-2 rounded-2xl text-sm font-medium">Get&nbsp;started</a>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center  justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            >
              {isOpen ? <GiHamburgerMenu size={24} /> : <GiHamburgerMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Features</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center px-5">
              <ThemeToggle />
              <a href="#" className="ml-auto text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Log in</a>
              <a href="#" className="ml-3 bg-[#172448] hover:bg-[#213468] text-white px-4 py-2 rounded-xl text-sm font-medium">Get&nbsp;started</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;