'use client'
import React, { useState, useRef, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa';
import { IoMdSettings } from "react-icons/io";
import ContactsTable from '@/components/leads/leadsContactsTable';
import LeadsNav from '@/components/leads/leadsMenuBar';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ImportLeads from '@/components/leads/importleads';



function Leadcontact() {
  const contacts=([
    { id: 1, name: 'Abraham Ryle', company: 'Company X', email: 'example@example.com', addedBy: 'Amon Were', created: '20-05-2024', status: 'inactive' },
    { id: 2, name: 'Abraham Ryle', company: 'Company X', email: 'example@example.com', addedBy: 'Amon Were', created: '20-05-2024', status: 'inactive' },
    { id: 3, name: 'Abraham Ryle', company: 'Company X', email: 'example@example.com', addedBy: 'Amon Were', created: '20-05-2024', status: 'inactive' },
    { id: 4, name: 'Abraham Ryle', company: 'Company X', email: 'example@example.com', addedBy: 'Amon Were', created: '20-05-2024', status: 'inactive' },
    { id: 5, name: 'Abraham Ryle', company: 'Company X', email: 'example@example.com', addedBy: 'Amon Were', created: '20-05-2024', status: 'inactive' },
    { id: 6, name: 'Abraham Ryle', company: 'Company X', email: 'example@example.com', addedBy: 'Amon Were', created: '20-05-2024', status: 'inactive' },
    { id: 7, name: 'Abraham Ryle', company: 'Company X', email: 'example@example.com', addedBy: 'Amon Were', created: '20-05-2024', status: 'inactive' },
    { id: 8, name: 'Abraham Ryle', company: 'Company X', email: 'example@example.com', addedBy: 'Amon Were', created: '20-05-2024', status: 'inactive' },
    { id: 9, name: 'Abraham Ryle', company: 'Company X', email: 'example@example.com', addedBy: 'Amon Were', created: '20-05-2024', status: 'inactive' },
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
        <p className='font-bold text-2xl text-left py-5'>Lead Contact</p>
        {/* search and filters */}
        <section className='flex flex-wrap bg-white gap-3 w-full p-4 rounded-lg justify-between'>
           <div className='flex flex-wrap gap-3 items-center'>
            <label htmlFor="">Duration</label>
              <input 
              type="text"
              placeholder='StartDateToEndDate'
              className='border border-gray-300 rounded-lg p-2'
              />
           </div>

           <div className='flex gap-3 items-center'>
              <label htmlFor="">Type</label>
              <select className='border border-gray-300 rounded-lg p-2'>
                  <option value="All" >All</option>
              </select>
           </div>
           
           <div className="relative flex gap-6 overflow-hidden flex-grow max-w-md ">
           <input 
              type="text"
              placeholder='Start Typing To Search'
              className="w-full bg-[#343434] dark:bg-[#202020] text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-300"
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
         <Link href={'/admin/leads'} className={`${pathname === '/admin/leads'? 'bg-[#3D50FC] text-white':'bg-white'} flex gap-2   items-center rounded-lg p-2`}>
            <span>
                <svg width="24"  height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99805H13V10.998H19V12.998Z" fill="black"/>
                </svg>
            </span>
            AddLeadContact
        </Link>

            <Link href={'/admin/leads/leadform'} className={`${pathname === '/admin/leads/leadform'? 'bg-[#3D50FC] text-white':'bg-white'} flex gap-2 items-center rounded-lg p-2`}>
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.71 7.04055C21.1 6.65055 21.1 6.00055 20.71 5.63055L18.37 3.29055C18 2.90055 17.35 2.90055 16.96 3.29055L15.12 5.12055L18.87 8.87055M3 17.2505V21.0005H6.75L17.81 9.93055L14.06 6.18055L3 17.2505Z" fill="#172448"/>
                    </svg>
                </span>
                LeadForm
            </Link>
            <button onClick={()=> setShowImport(true)} className={`text-black bg-white flex gap-2 items-center rounded-lg p-2`}>
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.293 9.707L11.293 14.707L12 15.414L12.707 14.707L17.707 9.707L16.293 8.293L13 11.586V4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H11V11.586L7.707 8.293L6.293 9.707Z" fill="#172448"/>
                    </svg>
                </span>
                Import
            </button>
            <button className={`text-black bg-white flex gap-2 items-center rounded-lg p-2`}>
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 2C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2M13 3.5L18.5 9H13M8.93 12.22H16V19.29L13.88 17.17L11.05 20L8.22 17.17L11.05 14.35" fill="black"/>
                    </svg>
                </span>
                Export
            </button>
        </header>
        <button className='border border-black p-1 rounded-full bg-white'>
            <IoMdSettings size={26}/>
        </button>
    </section>

      <ContactsTable contacts={contacts}/>
        {/* footers */}
       <section className="flex flex-wrap bg-white p-4 justify-between items-center rounded-b-lg">
          <div className="flex items-center space-x-2">
            <p>Show</p>
            <select className="border rounded px-2 py-1">
              <option>10</option>
            </select>
            <span>Entries</span>
          </div>
          <div className='flex flex-wrap gap-2 items-center'>
          <p>Showing 1 to 9 of 9 entries</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded text-gray-600">Previous</button>
            <button className="px-3 py-1 bg-red-500 text-white rounded">1</button>
            <button className="px-3 py-1 border rounded text-gray-600">Next</button>
          </div>
          </div>
        </section>

        {/* Import */} 
        <section 
        ref={importRef}
        className={`flex-1 fixed top-0 right-0 h-full w-[90vw] bg-[#172448] p-10 transition-transform duration-300 ease-in-out transform ${
          showImport ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
         <ImportLeads/>
        </section>
    </main>
  )
}

export default Leadcontact