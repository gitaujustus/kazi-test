'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { FaChartBar, FaUserFriends, FaUsers, FaBriefcase, FaMoneyBillWave, FaShoppingCart, FaTicketAlt, FaCalendarAlt, FaEnvelope, FaBullhorn, FaBook, FaBoxes, FaFileAlt, FaMoneyCheckAlt, FaCartPlus, FaUserPlus, FaVideo, FaChartLine, FaCog } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const NavItem = ({ icon: Icon, title, subItems, href }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname =usePathname()
  const isActive = (path) => pathname === path;

  return (
    <div className="mb-2">
      <div 
        className={`flex rounded-md items-center justify-between p-2 hover:bg-gray-200  dark:hover:bg-gray-700 cursor-pointer ${href && isActive(href) ? 'bg-gray-300 text-blue-600 dark:bg-gray-600' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <Icon className="mr-2" />
          {href ? (
            <Link href={href} className="w-full">
              {title}
            </Link>
          ) : (
            <span>{title}</span>
          )}
        </div>
        {subItems && (
          <span className="text-sm">{isOpen ? '▼' : '▶'}</span>
        )}
      </div>
      {isOpen && subItems && (
        <div className="ml-4">
          {subItems.map((item, index) => (
            <Link 
              href={item.href} 
              key={index} 
              className={`block rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700 ${isActive(item.href) ? 'bg-gray-300 text-blue-600 dark:bg-gray-600' : ''}`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};



const NavigationSidebar = () => {

    const [ showNav, setShowNav ] = useState(false)
     const menuRef = useRef();
     // Listens to clicks and scrolls outside, or navlink click the menu to close it
     const handleOutsideClick = useCallback(
        (e) => {
          if (showNav && !menuRef.current.contains(e.target)) {
            setShowNav(false);
          }
        },
        [showNav, menuRef]
      );
      
      const handleScroll = useCallback(() => {
        setShowNav(false);
      }, []);
 
     useEffect(() => {
         if (showNav) {
             document.addEventListener("mousedown", handleOutsideClick);
             window.addEventListener("scroll", handleScroll);
         } else {
             document.removeEventListener("mousedown", handleOutsideClick);
             window.removeEventListener("scroll", handleScroll);
         }
 
         return () => {
             document.removeEventListener("mousedown", handleOutsideClick);
             window.removeEventListener("scroll", handleScroll);
         };
     }, [showNav, handleOutsideClick, handleScroll]);

     const showNavBar=()=>{
        setShowNav(!showNav)
    }

  return (
    <main className='md:static absolute z-30 ' ref={menuRef}>
        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" onClick={showNavBar} aria-controls="logo-sidebar" type="button" className={`${showNav ? "hidden" : "fixed top-0"} z-30 re items-center  p-2 mt-5 ms-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200`}>
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
            </button>
   
    <aside className={`bg-white dark:bg-gray-800 fixed top-0 left-0 p-2 text-black dark:text-white w-64 h-full transition-transform ${showNav ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 flex flex-col`}>
    <div className="flex items-center mb-4 dark:bg-white py-1 px-3 w-44 rounded-2xl">
              <Image
                src="/assets/2.png"
                alt="Logo"
                width={2560}
                height={700}
                className="h-10 w-auto"
              />
            </div>
      <nav className="flex-grow overflow-y-auto"> 
      <NavItem icon={FaChartBar} title="Dashboard" subItems={[
        { title: "Private Dashboard", href: "/admin" },
        { title: "Advanced Dashboard", href: "/admin/advanced" }
      ]} />
      <NavItem icon={FaUserFriends} title="Leads" subItems={[
        { title: "Lead Contact", href: "/admin/leads/leadscontact" },
        { title: "Deals", href: "/admin/leads/deals" }
      ]} />
      <NavItem icon={FaUsers} title="Clients" href="/admin/clients" />
      <NavItem icon={FaUsers} title="HR" subItems={[
        { title: "Employees", href: "/admin/hr/employees" },
        { title: "Leaves", href: "/admin/hr/leaves" },
        { title: "Shift Roaster", href: "/admin/hr/shiftroaster" },
        { title: "Attendance", href: "/admin/hr/attendance" },
        { title: "Holiday", href: "/admin/hr/holiday" },
        { title: "Designation", href: "/admin/hr/designation" },
        { title: "Department", href: "/admin/hr/department" },
        { title: "Appreciation", href: "/admin/hr/appreciation" }
      ]} />
      <NavItem icon={FaBriefcase} title="Work" subItems={[
        { title: "Contracts", href: "/work/contracts" },
        { title: "Projects", href: "/work/projects" },
        { title: "Tasks", href: "/work/tasks" },
        { title: "Timesheet", href: "/work/timesheet" },
        { title: "Project Roadmap", href: "/work/project-roadmap" }
      ]} />
      <NavItem icon={FaMoneyBillWave} title="Finance" subItems={[
        { title: "Proposal", href: "/finance/proposal" },
        { title: "Estimates", href: "/finance/estimates" },
        { title: "Invoices", href: "/finance/invoices" },
        { title: "Payments", href: "/finance/payments" },
        { title: "Credit Note", href: "/finance/credit-note" },
        { title: "Expenses", href: "/finance/expenses" },
        { title: "Bank Account", href: "/finance/bank-account" },
        { title: "E-Invoice", href: "/finance/e-invoice" }
      ]} />
      <NavItem icon={FaShoppingCart} title="Orders" href="/orders" />
      <NavItem icon={FaTicketAlt} title="Tickets" href="/tickets" />
        <NavItem icon={FaCalendarAlt} title="Events" href="/events" />
        <NavItem icon={FaEnvelope} title="Messages" href="/messages" />
        <NavItem icon={FaBullhorn} title="Notice Board" href="/notice-board" />
        <NavItem icon={FaBook} title="Knowledge Base" href="/knowledge-base" />
        <NavItem icon={FaBoxes} title="Assets" href="/assets" />
        <NavItem icon={FaFileAlt} title="Letter" subItems={[
          { title: "Generate", href: "/letter/generate" },
          { title: "Template", href: "/letter/template" }
        ]} />
        <NavItem icon={FaMoneyCheckAlt} title="Payroll" subItems={[
          { title: "Payroll", href: "/payroll" },
          { title: "Employee Salary", href: "/payroll/employee-salary" },
          { title: "Reports", href: "/payroll/reports" }
        ]} />
        <NavItem icon={FaCartPlus} title="Purchase" subItems={[
          { title: "Vendor", href: "/purchase/vendor" },
          { title: "Products", href: "/purchase/products" },
          { title: "Purchase Order", href: "/purchase/order" },
          { title: "Bills", href: "/purchase/bills" },
          { title: "Vendor Payments", href: "/purchase/vendor-payments" },
          { title: "Vendor Credits", href: "/purchase/vendor-credits" },
          { title: "Inventory", href: "/purchase/inventory" }
        ]} />
          <NavItem icon={FaUserPlus} title="Recruit" subItems={[
                        { title: "Dashboard", href: "/recruit/dashboard" },
                        { title: "Skills", href: "/recruit/skills" },
                        { title: "Jobs", href: "/recruit/jobs" },
                        { title: "Job Applications", href: "/recruit/applications" },
                        { title: "Interview Schedule", href: "/recruit/interview-schedule" },
                        { title: "Offer Letters", href: "/recruit/offer-letters" },
                        { title: "Candidate Database", href: "/recruit/candidate-database" },
                        { title: "Reports", href: "/recruit/reports" },
                        { title: "Career Site", href: "/recruit/career-site" }
                    ]} />
                    <NavItem icon={FaVideo} title="Zoom Meeting" href="/zoom-meeting" />
                    <NavItem icon={FaChartLine} title="Reports" subItems={[
                        { title: "Task Report", href: "/reports/task" },
                        { title: "Time Log Report", href: "/reports/time-log" },
                        { title: "Finance Report", href: "/reports/finance" },
                        { title: "Income Vs Expense", href: "/reports/income-vs-expense" },
                        { title: "Leave Report", href: "/reports/leave" },
                        { title: "Attendance Report", href: "/reports/attendance" },
                        { title: "Expense Report", href: "/reports/expense" },
                        { title: "Deal Report", href: "/reports/deal" },
                        { title: "Sales Report", href: "/reports/sales" }
                    ]} />
                    <NavItem icon={FaCog} title="Settings" href="/settings" />
        </nav>
    </aside>

    </main>
  );
};

export default NavigationSidebar;