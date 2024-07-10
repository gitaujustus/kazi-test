'use client'
import React, { useState, useRef, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa';
import { IoMdSettings } from "react-icons/io";
import ContactsTable from '@/components/leads/leadsContactsTable';
import LeadsNav from '@/components/leads/leadsMenuBar';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ClientTable from '@/components/clients/clientTable';
import { Account, AccountVerificationIcon, ExportIcon, ImportIcon } from '@/components/ui/svg/icons';
import ImportClient from '@/components/clients/importClient';



function Clients() {
  const clients=([
    { id: 1, name: 'Abraham Ruto', company: 'Company X', email: 'example@example.com', addedBy: 'Amon Were', created: '20-05-2024', status: 'active' },
    { id: 2, name: 'Abraham Ruto', company: 'Company X', email: 'example@example.com', addedBy: 'Amon Were', created: '20-05-2024', status: 'active' },
    { id: 3, name: 'Abraham Ruto', company: 'Company X', email: 'example@example.com', addedBy: 'Amon Were', created: '20-05-2024', status: 'active' },
    { id: 4, name: 'Abraham Ruto', company: 'Company X', email: 'example@example.com', addedBy: 'Amon Were', created: '20-05-2024', status: 'active' },
    { id: 5, name: 'Abraham Ruto', company: 'Company X', email: 'example@example.com', addedBy: 'Amon Were', created: '20-05-2024', status: 'active' },
    { id: 6, name: 'Abraham Ruto', company: 'Company X', email: 'example@example.com', addedBy: 'Amon Were', created: '20-05-2024', status: 'active' },
    { id: 7, name: 'Abraham Ruto', company: 'Company X', email: 'example@example.com', addedBy: 'Amon Were', created: '20-05-2024', status: 'active' },
    { id: 8, name: 'Abraham Ruto', company: 'Company X', email: 'example@example.com', addedBy: 'Amon Were', created: '20-05-2024', status: 'active' },
    { id: 9, name: 'Abraham Ruto', company: 'Company X', email: 'example@example.com', addedBy: 'Amon Were', created: '20-05-2024', status: 'active' },
  ]);

  const [showImport, setShowImport] = useState(false);
  const importRef = useRef(null);

  const pathname = usePathname()


  useEffect(() => {
    function handleClickOutside(event) {
      if (importRef.current && !importRef.current.contains(event.target)) {
        setShowImport(false);
      }
    }
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  


 

  return (
    <main className='bg-[#C7C7C7] rounded-lg mx-5 px-3 py-3 '>
        <p className='font-bold text-2xl text-left py-5'>Clients</p>
        {/* search and filters */}
        <section className='flex flex-wrap bg-white gap-3 w-full p-4 rounded-lg justify-between'>
           <div className='flex flex-wrap gap-3 items-center'>
            <label htmlFor="">Added On</label>
              <input 
              type="text"
              placeholder='StartDateToEndDate'
              className='border border-gray-300 rounded-lg p-2'
              />
           </div>

           <div className='flex gap-3 items-center'>
              <label htmlFor="">Client</label>
              <select className='border border-gray-300 rounded-lg p-2'>
                  <option value="All" >All</option>
              </select>
           </div>
           
           <div className="relative flex gap-6 overflow-hidden flex-grow max-w-md ">
           <input 
              type="text"
              placeholder='Start Typing To Search'
              className="w-full  bg-[#343434] dark:bg-[#202020] text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <FaSearch className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
            
            <button className='flex border border-gray-300 items-center rounded-lg p-2'>
              <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.9999 12V19.88C14.0399 20.18 13.9399 20.5 13.7099 20.71C13.6174 20.8027 13.5075 20.8762 13.3865 20.9264C13.2655 20.9766 13.1359 21.0024 13.0049 21.0024C12.8739 21.0024 12.7442 20.9766 12.6233 20.9264C12.5023 20.8762 12.3924 20.8027 12.2999 20.71L10.2899 18.7C10.1809 18.5933 10.098 18.4629 10.0477 18.319C9.99739 18.175 9.98103 18.0213 9.99989 17.87V12H9.96989L4.20989 4.62C4.0475 4.41153 3.97422 4.14726 4.00607 3.88493C4.03793 3.6226 4.17232 3.38355 4.37989 3.22C4.56989 3.08 4.77989 3 4.99989 3H18.9999C19.2199 3 19.4299 3.08 19.6199 3.22C19.8275 3.38355 19.9618 3.6226 19.9937 3.88493C20.0256 4.14726 19.9523 4.41153 19.7899 4.62L14.0299 12H13.9999Z" fill="black"/>
                </svg>
              </span>
              Filters
            </button>
        </section>



        {/* nav */}
        <section className=' flex items-center justify-between'>
         <header className='flex flex-wrap gap-3 py-5'>
         <Link href={'/admin/clients'} className={`${pathname === '/admin/clients'? 'bg-[#3D50FC] text-white':'bg-white'} flex gap-2   items-center rounded-lg p-2`}>
            <span>
                <svg width="24"  height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99805H13V10.998H19V12.998Z" fill="black"/>
                </svg>
            </span>
            Add Cliet
        </Link>
            <button onClick={()=> setShowImport(true)} className={`text-black bg-white flex gap-2 items-center rounded-lg p-2`}>
               <ImportIcon/>
                Import
            </button>
            <button className={`text-black bg-white flex gap-2 items-center rounded-lg p-2`}>
               <ExportIcon/>
                Export
            </button>
        </header>
       <div className='flex gap-2'>
            <button className='border border-black p-1 rounded-full bg-[#172448]'>
              <Account/>
            </button>
            <button  className='border border-black p-1 rounded-full'>
                <AccountVerificationIcon/>
            </button>
        </div>
    </section>
      <ClientTable clients={clients}/>

        <section 
        ref={importRef}
        className={`flex-1 fixed top-0 right-0 h-full w-[90vw] bg-[#172448] p-10 transition-transform duration-300 ease-in-out transform ${
          showImport ? 'translate-x-0' : 'translate-x-full'
        }  overflow-y-auto`}
      >
        <ImportClient/>
        </section>
    </main>
  )
}

export default Clients