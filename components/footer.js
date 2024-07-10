import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-[#3C3C3C] text-gray-600 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-between">
          {/* Logo and social icons */}
          <div className="flex flex-col items-start justify-center w-full md:w-1/4 mb-6 md:mb-0">
            <div className="flex items-center mb-4 dark:bg-white py-1 px-3 rounded-2xl">
              <Image
                src="/assets/2.png"
                alt="Logo"
                width={2560}
                height={700}
                className="h-10 w-auto"
              />
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 bg-[#1C2B33] rounded-full p-2 dark:bg-[#8B8D98] dark:text-white hover:text-gray-500 dark:hover:text-gray-300">
                <FaFacebookF size={12}/>
              </a>
              <a href="#" className="text-gray-400 bg-[#1C2B33] rounded-full p-2 dark:bg-[#8B8D98] dark:text-white hover:text-gray-500 dark:hover:text-gray-300">
                <FaTwitter size={12}/>
              </a>
              <a href="#" className="text-gray-400 bg-[#1C2B33] rounded-full p-2 dark:bg-[#8B8D98] dark:text-white hover:text-gray-500 dark:hover:text-gray-300">
                <FaInstagram size={12}/>
              </a>
              <a href="#" className="text-gray-400 bg-[#1C2B33] rounded-full p-2 dark:bg-[#8B8D98] dark:text-white hover:text-gray-500 dark:hover:text-gray-300">
                <FaLinkedinIn size={12}/>
              </a>
            </div>
          </div>

          {/* Main links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Main</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Get Started</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Login</a></li>
            </ul>
          </div>

          {/* Others links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Others</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Terms of Use</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="w-full md:w-1/4">
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Contact</h3>
            <p className='flex gap-2 items-center '><IoMail/> info@kazidesk.com</p>
            <p className='flex gap-2 items-center '><FaPhoneAlt/> +254115549916</p>
            <p className='flex gap-2 items-center'><IoLocationSharp/>TRV office Plaza Westlands Nairobi</p>
          </div>
        </div>
      </div>

        {/* Bottom section */}
      <div className="mt-8 py-4 border-t px-2 dark:bg-[#0A0A0A] border-gray-900 dark:border-gray-700">
          <div className="flex flex-wrap justify-between items-center">
            <p className="w-full md:w-auto text-sm mb-4 md:mb-0">
              © 2024 Kazidesk - All rights reserved
            </p>
            <div className="w-full md:w-auto flex justify-center md:justify-end space-x-4">
              <a href="#" className="text-sm hover:text-gray-900 dark:hover:text-white">Terms & Conditions</a>
              <a href="#" className="text-sm hover:text-gray-900 dark:hover:text-white">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-gray-900 dark:hover:text-white">Cookie Policy</a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 bg-[#1C2B33] rounded-full p-2 dark:bg-[#8B8D98] dark:text-white hover:text-gray-500 dark:hover:text-gray-300">
                <FaFacebookF size={20}/>
              </a>
              <a href="#" className="text-gray-400 bg-[#1C2B33] rounded-full p-2 dark:bg-[#8B8D98] dark:text-white hover:text-gray-500 dark:hover:text-gray-300">
                <FaTwitter size={20}/>
              </a>
              <a href="#" className="text-gray-400 bg-[#1C2B33] rounded-full p-2 dark:bg-[#8B8D98] dark:text-white hover:text-gray-500 dark:hover:text-gray-300">
                <FaInstagram size={20}/>
              </a>
              <a href="#" className="text-gray-400 bg-[#1C2B33] rounded-full p-2 dark:bg-[#8B8D98] dark:text-white hover:text-gray-500 dark:hover:text-gray-300">
                <FaLinkedinIn size={20}/>
              </a>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;