'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IoMdSettings } from "react-icons/io";


function LeadsNav({lead}) {
    const pathname = usePathname()

  return (
    <main className=' flex items-center justify-between'>
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
            <Link href={'/admin/leads/import'} className={`${pathname === '/admin/leads/import'? 'bg-[#3D50FC] text-white':'bg-white'} flex gap-2 items-center rounded-lg p-2`}>
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.293 9.707L11.293 14.707L12 15.414L12.707 14.707L17.707 9.707L16.293 8.293L13 11.586V4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H11V11.586L7.707 8.293L6.293 9.707Z" fill="#172448"/>
                    </svg>
                </span>
                Import
            </Link>
            <Link href={'/admin/leads/export'} className={`${pathname === '/admin/leads/export'? 'bg-[#3D50FC] text-white':'bg-white'} flex gap-2 items-center rounded-lg p-2`}>
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 2C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2M13 3.5L18.5 9H13M8.93 12.22H16V19.29L13.88 17.17L11.05 20L8.22 17.17L11.05 14.35" fill="black"/>
                    </svg>
                </span>
                Export
            </Link>
        </header>
        <button className='border border-black p-1 rounded-full bg-white'>
            <IoMdSettings size={26}/>
        </button>
    </main>
  )
}

export default LeadsNav

