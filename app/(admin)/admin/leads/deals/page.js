'use client'
import React, { useState, useRef, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa';
import { IoMdSettings } from "react-icons/io";
import ContactsTable from '@/components/leads/leadsContactsTable';
import LeadsNav from '@/components/leads/leadsMenuBar';
import { MdOutlineCloudUpload } from "react-icons/md";
import StyledCheckBox from '@/components/ui/checkboxStyle';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import AddNewStage from '@/components/leads/addNewStage';
import ImportDeals from '@/components/deals/importdeals';


function Deal() {


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
        <p className='font-bold text-2xl text-left py-5'>Deals</p>
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
         <Link href={'/admin/leads/deals'} className={`${pathname === '/admin/leads/deals'? 'bg-[#3D50FC] text-white':'bg-white'} flex gap-2   items-center rounded-lg p-2`}>
            <span>
                <svg width="24"  height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99805H13V10.998H19V12.998Z" fill="black"/>
                </svg>
            </span>
            Add Deals
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
       <div className='flex gap-2'>
       <Link href={'/admin/leads/deals'} className='border border-black p-2 rounded-full bg-[#172448]'>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 3.75V26.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M23.75 3.75H6.25C4.86929 3.75 3.75 4.86929 3.75 6.25V23.75C3.75 25.1307 4.86929 26.25 6.25 26.25H23.75C25.1307 26.25 26.25 25.1307 26.25 23.75V6.25C26.25 4.86929 25.1307 3.75 23.75 3.75Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.75 11.25H26.25M3.75 18.75H26.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </Link>
        <Link href={'/admin/leads/deals/kanbanview'} className='border border-black p-2 rounded-full bg-white'>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_166_2570)">
                    <path d="M4.6875 0C3.69294 0 2.73911 0.395088 2.03585 1.09835C1.33259 1.80161 0.9375 2.75544 0.9375 3.75V26.25C0.9375 27.2446 1.33259 28.1984 2.03585 28.9016C2.73911 29.6049 3.69294 30 4.6875 30H25.3125C26.3071 30 27.2609 29.6049 27.9641 28.9016C28.6674 28.1984 29.0625 27.2446 29.0625 26.25V3.75C29.0625 2.75544 28.6674 1.80161 27.9641 1.09835C27.2609 0.395088 26.3071 0 25.3125 0L4.6875 0ZM14.0625 3.75H15.9375C16.4348 3.75 16.9117 3.94754 17.2633 4.29917C17.615 4.65081 17.8125 5.12772 17.8125 5.625V11.25C17.8125 11.7473 17.615 12.2242 17.2633 12.5758C16.9117 12.9275 16.4348 13.125 15.9375 13.125H14.0625C13.5652 13.125 13.0883 12.9275 12.7367 12.5758C12.385 12.2242 12.1875 11.7473 12.1875 11.25V5.625C12.1875 5.12772 12.385 4.65081 12.7367 4.29917C13.0883 3.94754 13.5652 3.75 14.0625 3.75ZM4.6875 5.625C4.6875 5.12772 4.88504 4.65081 5.23667 4.29917C5.58831 3.94754 6.06522 3.75 6.5625 3.75H8.4375C8.93478 3.75 9.41169 3.94754 9.76332 4.29917C10.115 4.65081 10.3125 5.12772 10.3125 5.625V18.75C10.3125 19.2473 10.115 19.7242 9.76332 20.0758C9.41169 20.4275 8.93478 20.625 8.4375 20.625H6.5625C6.06522 20.625 5.58831 20.4275 5.23667 20.0758C4.88504 19.7242 4.6875 19.2473 4.6875 18.75V5.625ZM21.5625 3.75H23.4375C23.9348 3.75 24.4117 3.94754 24.7633 4.29917C25.115 4.65081 25.3125 5.12772 25.3125 5.625V24.375C25.3125 24.8723 25.115 25.3492 24.7633 25.7008C24.4117 26.0525 23.9348 26.25 23.4375 26.25H21.5625C21.0652 26.25 20.5883 26.0525 20.2367 25.7008C19.885 25.3492 19.6875 24.8723 19.6875 24.375V5.625C19.6875 5.12772 19.885 4.65081 20.2367 4.29917C20.5883 3.94754 21.0652 3.75 21.5625 3.75Z" fill="#172448"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_166_2570">
                    <rect width="30" height="30" fill="white"/>
                    </clipPath>
                    </defs>
            </svg>
        </Link>
       </div>
    </section>

{/* tabkle */}
        <section className='rounded-t-lg overflow-x-auto'>
      <table className='w-full'>
        <thead className='bg-white p-4'>
          <tr>
            <th className='text-left px-4 py-2'>Deal&nbsp;Name</th>
            <th className='text-left px-4 py-2'>Lead&nbsp;Name</th>
            <th className='text-left px-4 py-2'>Email</th>
            <th className='text-left px-4 py-2'>Mobile</th>
            <th className='text-left px-4 py-2'>Value</th>
            <th className='text-left px-4 py-2'>Close</th>
            <th className='text-left px-4 py-2'>Next&nbsp;Follow&nbsp;Up</th>
            <th className='text-left px-4 py-2'>Deal&nbsp;Agent</th>
            <th className='text-left px-4 py-2'>Deal&nbsp;Added&nbsp;By</th>
            <th className='text-left px-4 py-2'>Stage</th>
            <th className='text-left px-4 py-2'>Action</th>
          </tr>
        </thead>
        <tbody className='bg-[#172448] text-white'>
          <tr className=''>
            <td colSpan={11} className='text-center py-10'>No data available in table</td>
          </tr>
        </tbody>
      </table>
    </section>


        {/* footers */}
       <section className="flex flex-wrap bg-white p-4 justify-between items-center rounded-b-lg">
          <div className="flex items-center space-x-2">
            <p>Show</p>
            <select className="border rounded px-2 py-1">
              <option>10</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
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


{/* import deals */}
        <section 
        ref={importRef}
        className={`flex-1 fixed top-0 right-0 h-full w-[90vw] bg-[#172448] p-10 transition-transform duration-300 ease-in-out transform ${
          showImport ? 'translate-x-0' : 'translate-x-full'
        }  overflow-y-auto`}
      >
        <ImportDeals/>
        </section>

    </main>
  )
}

export default Deal