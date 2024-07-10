'use client'
import React, { useState, useRef, useEffect } from 'react'
import { FaCalendarWeek, FaSearch } from 'react-icons/fa';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import NewLeave from '@/components/leaves/newleave';
import { ExportIcon, ImportIcon, ShiftChange, SummaryIcon } from '@/components/ui/svg/icons';
import { FaPlane } from 'react-icons/fa6';
import { CiSun } from 'react-icons/ci';
import { GiSunCloud } from 'react-icons/gi';


function Attendance() {
  const [showImport, setShowImport] = useState(false);
  const importRef = useRef(null);

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


  const notes = [
    { label: 'Holiday', icon: '🌴' },
    { label: 'Day Off', icon: '🧑' },
    { label: 'Present', icon: '🍀' },
    { label: 'Half Day', icon: <GiSunCloud  className="w-5 h-5 text-[#F1C526]" />},
    { label: 'Late', icon: '🔴' },
    { label: 'Absent', icon: <FaCalendarWeek className="w-5 h-5 text-green-500" /> },
    { label: 'On Leave', icon: <FaPlane className="w-5 h-5" /> },
  ];


  return (
    <main className='bg-[#C7C7C7] rounded-lg mx-5 px-3 py-3 '>
        <p className='font-bold text-2xl text-left py-5'>Attendance</p>
        {/* search and filters */}
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
              <label htmlFor="">Designation</label>
              <select className='border border-gray-300 rounded-lg p-2'>
                  <option value="All" >All</option>
              </select>
           </div>
           <div className='flex gap-3 items-center'>
            <label htmlFor="month">Month</label>
            <select id="month" name="month" className='border border-gray-300 rounded-lg p-2'>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
            </select>
            </div>
            <div className='flex gap-3 items-center'>
            <label htmlFor="year">Year</label>
            <select id="year" name="year" className='border border-gray-300 rounded-lg p-2'>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
            </select>
            </div>
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
            Mark Attendance
        </button>
            <button className={`text-black bg-white flex gap-2 items-center rounded-lg p-2`}>
                <ImportIcon/>
                Export
            </button>
            <button className={`text-black bg-white flex gap-2 items-center rounded-lg p-2`}>
                <ExportIcon/>
                Export
            </button>
        </header>
        
       <div className='flex gap-2'>
        <Link href={'/admin/hr/leaves'} className='flex flex-col items-center'>
            <SummaryIcon/>
            <span className='text-xs'>Summary</span>
        </Link>
        <Link href={'#'} className='flex flex-col items-center'>
            <ShiftChange/>
            <span className='text-xs text-nowrap'>Shift Change Requests</span>
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
            <th className='text-left px-4 py-2 text-nowrap'>Employee Shift</th>
            <th className='text-left px-4 py-2'>Date</th>
            <th className='text-left px-4 py-2'>Reason</th>
            <th className='text-left px-4 py-2'>Status</th>
            <th className='text-left px-4 py-2'>Action</th>
          </tr>
        </thead>
        <tbody className='bg-slate-100 text-white'>
          <tr>
            <td colSpan={8} className='text-center py-10  text-gray-600 border border-white'>No data available in table</td>
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


    <section className="bg-[#172448] my-10 text-white p-6 rounded-xl shadow-lg max-w-sm">
      <h2 className="text-xl font-bold mb-4">Note</h2>
      <ul>
        {notes.map((note, index) => (
          <li key={index} className="flex items-center justify-between py-2">
            <span>{note.label}</span>
            <div className="flex items-center">
              <span className="mr-2">→</span>
              {typeof note.icon === 'string' ? (
                <span className="text-xl">{note.icon}</span>
              ) : (
                note.icon
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>

    </main>
  )
}

export default Attendance

