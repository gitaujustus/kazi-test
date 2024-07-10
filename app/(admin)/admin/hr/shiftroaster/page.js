'use client'
import React, { useState, useRef, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link'
import { ShiftChange, SummaryIcon, UserIcon } from '@/components/ui/svg/icons';
import { BiPlus, BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import Assignshifts from '@/components/assignshifts';
import UpdateShiftModal from '@/components/shift/updateShift';


function EmployeeLeaveTable() {

  const [showImport, setShowImport] = useState(false);
  const importRef = useRef(null);
  const [showUpdateShift, setShowUpdateShift] = useState(false);
  const updateShiftRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (importRef.current && !importRef.current.contains(event.target)) {
        setShowImport(false);
      }
      if (updateShiftRef.current && !updateShiftRef.current.contains(event.target)) {
        setShowUpdateShift(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const employees = ['John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Williams'];
 


 

  return (
    <main className='bg-[#C7C7C7] rounded-lg mx-5 px-3 py-3 '>
        <p className='font-bold text-2xl text-left py-5'>Shift Roaster</p>
        <section className='flex flex-wrap bg-white gap-3 w-full p-4 rounded-lg justify-between'>
           <div className='flex gap-3 items-center'>
              <label htmlFor="">Employee</label>
              <select className='border border-gray-300 rounded-lg p-2'>
                  <option value="All" >All</option>
              </select>
           </div>
           <div className='flex gap-3 items-center'>
              <label htmlFor="">Department</label>
              <select className='border border-gray-300 rounded-lg p-2'>
                  <option value="All" >All</option>
              </select>
           </div>
           
           <div className='flex gap-3 items-center'>
              <select className='border border-gray-300 rounded-lg p-2'>
                  <option value="All" >Weekly View</option>
                  <option value="All" >Monthly View</option>
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
         <button  onClick={()=> setShowImport(true)} className={`bg-[#3D50FC] text-white flex gap-1 md:gap-2   items-center rounded-lg p-1 md:p-2`}>
            <span>
                <svg width="24"  height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99805H13V10.998H19V12.998Z" fill="black"/>
                </svg>
            </span>
            Assign Bulk Shifts
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
        <Link href={'/admin/hr/shiftroaster'} className='flex flex-col items-center'>
            <SummaryIcon/>
            <span className='text-xs'>Summary</span>
        </Link>
        <Link href={'/admin/hr/shiftroaster/shiftchangerequest'} className='flex flex-col items-center'>
            <ShiftChange/>
            <span className='text-xs text-nowrap'>Shift Change Requests</span>
        </Link>
       </div>
    </section>


    {/* table */}
    <div className="overflow-x-auto">
      <div className="min-w-max">
        <div className="flex justify-between bg-[#172448] py-4 w-full items-center px-4">
          <div className="flex items-center space-x-2">
            <BiLeftArrow className="text-white" />
            <span className="text-white">10 Jun - 16 Jun</span>
            <BiRightArrow className="text-white" />
          </div>
          <div className="flex items-center space-x-2">
            <button className="bg-gray-200 text-navy-900 px-2 py-1 rounded">GS: General Shift</button>
            <span className="text-yellow-400">★ Holiday</span>
          </div>
        </div>
        
        <table className='w-full'>
          <thead className='bg-white p-4'>
            <tr>
              <th className='text-left px-4 py-2 font-bold'>Employee</th>
              {days.map((day, index) => (
                <th key={day} className="text-center px-4 py-2">
                  <div className="flex items-center justify-center gap-2">
                    <div className="text-gray-800 font-bold text-4xl">{index + 10}</div>
                    <div className="text-red-500 text-sm text-left">
                      {day}
                      <h4>JUNE</h4>
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='bg-[#172448] text-white'>
            {employees.map((employee, empIndex) => (
              <tr key={employee}>
                <td className={`px-4 py-2 ${empIndex === 0 ? 'text-green-400' : ''}`}>
                  {employee}
                  {empIndex === 0 && <span className="ml-1 text-xs">(you)</span>}
                </td>
                {days.map((_, dayIndex) => (
                  <td key={dayIndex} className="px-4 py-2">
                    <button onClick={()=>setShowUpdateShift(true)} className="bg-white rounded-lg p-2 px-8 flex justify-center items-center">
                      <BiPlus className="text-red-500" size={20} />
                    </button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
       

{/* Assignshifts Pop Up */}
        <section 
        ref={importRef}
        className={`flex-1 fixed z-50  p-2 sm:p-10  top-0 right-0 h-full w-[90vw] bg-[#172448]  transition-transform duration-300 ease-in-out transform ${
          showImport ? 'translate-x-0' : 'translate-x-full'
        }  overflow-y-auto`}
      >
        <Assignshifts/>
        </section>


<section 
       
        className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ${
          showUpdateShift ? 'block' : 'hidden'
        } `}
      >
        <div  ref={updateShiftRef} >
        <UpdateShiftModal onClose={() => setShowUpdateShift(false)} />
        </div>
      </section>
    </main>
  )
}

export default EmployeeLeaveTable
