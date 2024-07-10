'use client'
import React, { useState, useRef, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import NewLeave from '@/components/leaves/newleave';
import { MdTableChart } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { UserIcon } from '@/components/ui/svg/icons';


function Leaves() {


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
        <p className='font-bold text-2xl text-left py-5'>Leaves</p>
        {/* search and filters */}
        <section className='flex flex-wrap bg-white gap-3 w-full p-4 rounded-lg justify-between'>
          

           <div className='flex gap-3 items-center'>
              <label htmlFor="">Employee</label>
              <select className='border border-gray-300 rounded-lg p-2'>
                  <option value="All" >All</option>
              </select>
           </div>
           <div className='flex gap-3 items-center'>
              <label htmlFor="">Designation</label>
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
         <button  onClick={()=> setShowImport(true)} className={`bg-white flex gap-2   items-center rounded-lg p-2`}>
            <span>
                <svg width="24"  height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99805H13V10.998H19V12.998Z" fill="black"/>
                </svg>
            </span>
            New Leave
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
        <Link href={'/admin/hr/leaves'} className='flex flex-col items-center'>
            <MdTableChart size={30} className='rounded-full bg-white border border-[#172448] py-1'/>
            <span className='text-xs'>Table&nbsp;View</span>
        </Link>
        <Link href={'/admin/hr/leaves'} className='flex flex-col items-center'>
            <FaCalendarAlt size={30} className='rounded-full border border-[#172448] bg-white py-1' /> 
            <span className='text-xs'>Calender</span>
        </Link>
        <Link href={'/admin/hr/leaves/myleaves'} className='flex flex-col items-center' >
              <UserIcon/>
              <span className='text-xs'>My&nbsp;Leaves</span>
        </Link>
       </div>
    </section>

{/* tabkle */}
        <section className='rounded-t-lg overflow-x-auto'>
      <table className='w-full'>
        <thead className='bg-white p-4'>
          <tr>
            <td className='text-left px-4 py-4'><input type="checkbox" /></td>
            <th className='text-left px-4 py-2'>Employee</th>
            <th className='text-left px-4 py-2'>Leave Date</th>
            <th className='text-left px-4 py-2'>Duration</th>
            <th className='text-left px-4 py-2'> Leave Status</th>
            <th className='text-left px-4 py-2'> Leave Type</th>
            <th className='text-left px-4 py-2'>Paid</th>
            <th className='text-left px-4 py-2'>Action</th>
          </tr>
        </thead>
        <tbody className='bg-[#172448] text-white'>
          <tr>
            <td colSpan={8} className='text-center py-4'></td>
          </tr>
          <tr>
            <td colSpan={8} className='text-center py-10 bg-[#393A40] border border-white'>No data available in table</td>
          </tr>
          <tr>
            <td colSpan={8} className='text-center py-4'></td>
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


{/* New Employee */}
        <section 
        ref={importRef}
        className={`flex-1 fixed z-50  p-2 sm:p-10  top-0 right-0 h-full w-[90vw] bg-[#172448]  transition-transform duration-300 ease-in-out transform ${
          showImport ? 'translate-x-0' : 'translate-x-full'
        }  overflow-y-auto`}
      >
        <NewLeave/>
        </section>

    </main>
  )
}

export default Leaves