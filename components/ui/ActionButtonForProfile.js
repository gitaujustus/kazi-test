'use client'
import React, { useState, useEffect, useRef } from 'react';
import { SlOptions } from "react-icons/sl";
import { MdEditSquare } from "react-icons/md";
import { TiEye } from "react-icons/ti";
import Link from 'next/link';

function ActionButtonForProfile() {

    const [openMenuId, setOpenMenuId] = useState(false);
  
    const toggleMenu = (id) => {
      setOpenMenuId(!openMenuId);
    };

  return (
    <div>
        <button 
        onClick={() => toggleMenu()}
        >
            <SlOptions size={22} />
        </button>
            {openMenuId &&
                  <div className="absolute right-16 mt-4 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"><MdEditSquare size={22}/>Edit</button>
                      <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"><TiEye size={22}/>Delete</button>
                    </div>
                  </div>
                  }
              
    </div>
  )
}

export default ActionButtonForProfile