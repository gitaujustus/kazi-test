'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function MenuBar({lead}) {
    const pathname = usePathname()
  const baseURL=`/admin/leads/leadscontact/${lead}`
  const isActive = (path) => pathname.endsWith(path)

  return (
    <main>
         <header className='flex gap-3 px-5'>
            <Link href='/admin/leads/leadscontact/profile' className={`${pathname === `${baseURL}` ? 'bg-[#3D50FC] text-white': 'bg-white text-black border border-black'}  px-6 py-1 rounded-md`}>Profile</Link>
            <Link href='/admin/leads/leadscontact/profile/deals' className={`${isActive('/deals') ? 'bg-[#3D50FC] text-white': 'bg-white text-black border border-black'}  px-6 py-1 rounded-md`}>Deals</Link>
            <Link href='/admin/leads/leadscontact/profile/notes' className={`${isActive('/notes') ? 'bg-[#3D50FC] text-white': 'bg-white text-black border border-black'}  px-6 py-1 rounded-md`}>Notes</Link>
        </header>
    </main>
  )
}

export default MenuBar