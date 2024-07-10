'use client'
import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import { FaBell } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { FaClock } from "react-icons/fa";
import { ThemeToggle } from './theme-toggle';
import { IoLogOut } from "react-icons/io5";

const AdminBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const EmployeeID="EMP1"
  return (
    <div className="py-2 px-6 z-20  fixed top-0 w-full md:static  bg-white dark:bg-[#3B3B3B]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between ">
          {/* Admin Profile and Search */}
          <div className="flex items-center ml-6 md:ml-0  md:gap-16 lg:gap-44 space-x-4 flex-grow w-2/3 ">
           <div className='flex items-center gap-2'>
            <img
                src="https://avatars.githubusercontent.com/u/113968776?v=4"
                alt="Admin"
                className="w-16 h-16  rounded-full border-2 border-[#076B6D]"
              />
              <p className='hidden sm:flex flex-col'>
                <span className="font-semibold text-3xl">Admin</span>
                <span className="text-xs">Employee Id: {EmployeeID}</span>
              </p>
           </div>

            <div className="relative flex gap-6 flex-grow max-w-md ">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-[#343434] dark:bg-[#202020] text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <FaSearch className="absolute left-3 top-2.5 text-gray-400" size={18} />
              <ThemeToggle/>
            </div>

          </div>

          {/* Action Icons */}
          <div className="hidden md:flex items-center space-x-4 md:ml-2">
            <button className="bg-white text-black border border-black p-1 rounded-full">
              <LuMessagesSquare size={20} />
            </button>
            <button className="bg-white text-black border border-black p-1 rounded-full">
              <FaBell size={20} />
            </button>
            <button className="bg-white text-black border border-black p-1 rounded-full">
              <FaClock size={20} />
            </button>
            <button className="bg-white text-black border border-black p-1 rounded-full">
              <IoLogOut size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden hover:bg-gray-700 p-2 rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 md:hidden border-b">
            <button className="block w-full text-left py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
              <LuMessagesSquare size={20} className="inline mr-2" /> Messages
            </button>
            <button className="block w-full text-left py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
              <FaBell size={20} className="inline mr-2" /> Notifications
            </button>
            <button className="block w-full text-left py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
              <IoLogOut size={20} className="inline mr-2" /> Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminBar;