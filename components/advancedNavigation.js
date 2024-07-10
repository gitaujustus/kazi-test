"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavPills = () => {

    const pathname = usePathname();

    return ( 
        <div className="flex flex-wrap m-2 gap-4 justify-center">
        <Link href="/admin/advanced/overview" className={`${pathname === '/admin/advanced/overview' ? 'bg-blue-theme text-white' : 'bg-white text-blue-theme'} w-28 rounded-full border-blue-theme border-[1px] px-2 py-1 text-center`}>Overview</Link>
        <Link href="/admin/advanced/project" className={`${pathname === '/admin/advanced/project' ? 'bg-blue-theme text-white' : 'bg-white text-blue-theme'} w-28 rounded-full border-blue-theme border-[1px] px-2 py-1 text-center`}>Project</Link>
        <Link href="/admin/advanced/client" className={`${pathname === '/admin/advanced/client' ? 'bg-blue-theme text-white' : 'bg-white text-blue-theme'} w-28 rounded-full border-blue-theme border-[1px] px-2 py-1 text-center`}>Client</Link>
        <Link href="/admin/advanced/hr" className={`${pathname === '/admin/advanced/hr' ? 'bg-blue-theme text-white' : 'bg-white text-blue-theme'} w-28 rounded-full border-blue-theme border-[1px] px-2 py-1 text-center`}>HR</Link>
        <Link href="/admin/advanced/ticket" className={`${pathname === '/admin/advanced/ticket' ? 'bg-blue-theme text-white' : 'bg-white text-blue-theme'} w-28 rounded-full border-blue-theme border-[1px] px-2 py-1 text-center`}>Ticket</Link>
        <Link href="/admin/advanced/finance" className={`${pathname === '/admin/advanced/finance' ? 'bg-blue-theme text-white' : 'bg-white text-blue-theme'} w-28 rounded-full border-blue-theme border-[1px] px-2 py-1 text-center`}>Finance</Link>
    </div>
     );
}
 
export default NavPills;