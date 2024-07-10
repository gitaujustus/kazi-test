import React from 'react'
import { MdTableChart } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { TreeIcon, UserIcon } from '@/components/ui/svg/icons';
import Link from 'next/link';

function myleaves() {
  return (
    <main className='min-h-screen py-3 mx-3 px-4 rounded-lg bg-[#C7C7C7]'>
        <h2 className='text-3xl font-semiold my-4'>My Leaves</h2>
        <div className='flex justify-end  gap-2'>
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

        <section className=' justify-between gap-5 flex mt-5 h-[30vh] '>
          <div className='bg-[#172448] w-1/2 text-white flex flex-col md:flex-row items-center gap-3 px-6 py-10 rounded-lg'>
            <div className='flex items-center gap-2'>
              <img
                src="https://avatars.githubusercontent.com/u/113968776?v=4"
                alt="Admin"
                className="w-16 h-16 min-w-[40px] min-h-[40px] object-cover rounded-full border-2 border-[#076B6D]"
              />
            </div>
           <div>
              <h1 className='font-bold text-md md:text-lg'>Admin</h1>
              <p className='text-xs md:text-sm text-[#3CDD64]'>Last login at 11-06-2024 09:36 am</p>
           </div>
          </div>
          <div className='bg-white w-1/2  rounded-lg'>
            <div className='flex justify-between px-4 py-8 items-center'>
            <h1 className='font-semibold text-[#172448]'>Remaining Leaves</h1>
                <TreeIcon/>
            </div>
            <p className='text-[#FF0000] px-4 text-xl'>o</p>
          </div>
        </section>

        <div className='bg-[#172448] px-4 py-3 text-white mt-4 rounded-lg h-[30vh]'>
          <h1>LeavesQuota</h1>
        </div>
       
    </main>
  )
}

export default myleaves