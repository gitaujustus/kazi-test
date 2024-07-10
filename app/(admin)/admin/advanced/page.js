// "use client"
// import { useState } from "react";
import NavPills from "@/components/advancedNavigation";
import OverviewLowerPills from "@/components/admin/advanced/overview/overviewLowerNav";
import { BsPersonFill } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { MdOutlinePendingActions } from "react-icons/md";
import { TbBriefcaseFilled } from "react-icons/tb";
import { FaFileInvoice } from "react-icons/fa6";
import { CiViewList } from "react-icons/ci";
import { IoTicket } from "react-icons/io5";
import { TbWaveSawTool } from "react-icons/tb";
import OverviewTabs from "@/components/admin/advanced/overview/overviewTabs";

const Overview = () => {
    // const [activeItem, setActiveItem] = useState('Income');
    // const navItems = ['Income', 'Timesheet', 'Pending Leaves', 'Open Tickets', 'Pending Tasks', 'Pending FollowUp'];
    let totalClients = 20;
    let totalEmployees = 20;
    let hoursLogged = 8;
    let pendingTasks = 0;
    let totalProjects = 4;
    let dueInvoices = 8;
    let todaysAttendance = 20;
    let unresolvedTickets = 20;
    let projectActivityTimeline = 20;
    let userActivityTimeline = 20;

    return ( 
        <main className="bg-[#c7c7c7] dark:bg-dark-background">
            <section className="max-w-4xl mx-auto px-4 py-8">
                {/* Navigation pills */}
                <NavPills />

                {/* Common width class for all outer divs */}
                <div className="mt-8">
                    {/* Row 1 */}
                    <div className="flex justify-between gap-4 mb-8">
                        <div className="flex-1 flex flex-col gap-2 bg-white dark:bg-[#1d1d1d] p-4 rounded-md border border-blue-theme text-center">
                            <p className="font-bold text-sm sm:text-md md:text-lg flex gap-4 items-center justify-center">Total Clients <span><BsPersonFill size={24} /></span></p>
                            <p className="text-red-600 font-bold mt-2">{totalClients}</p>
                        </div>
                        <div className="flex-1 flex flex-col gap-2 bg-white dark:bg-[#1d1d1d] p-4 rounded-md border border-blue-theme text-center">
                            <p className="font-bold text-sm sm:text-md md:text-lg flex gap-4 items-center justify-center">Total Employees <span><FaPeopleGroup size={24} /></span></p>
                            <p className="text-red-600 font-bold mt-2">{totalEmployees}</p>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="bg-blue-theme text-white rounded-lg p-4 mb-8">
                        <div className="flex justify-between">
                            <div className="flex-1 flex flex-col justify-center items-center gap-2 text-center">
                                <p className="font-bold text-sm sm:text-md md:text-lg">Hours Logged</p>
                                <p><FaClock size={24} /></p>
                                <p className="text-red-600 font-bold">{hoursLogged} hrs</p>
                            </div>
                            <div className="flex-1 flex flex-col justify-center items-center gap-2 text-center">
                                <p className="font-bold text-sm sm:text-md md:text-lg">Pending Tasks</p>
                                <p><MdOutlinePendingActions size={24} /></p>
                                <p className="text-red-600 font-bold">{pendingTasks}</p>
                            </div>
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="bg-white rounded-lg p-4 mb-8">
                        <div className="flex justify-between">
                            <div className="flex-1 flex flex-col justify-center items-center gap-2 text-center">
                                <p className="font-bold text-sm sm:text-md md:text-lg">Total Projects</p>
                                <p><TbBriefcaseFilled size={24} /></p>
                                <p className="text-red-600 font-bold">{totalProjects}</p>
                            </div>
                            <div className="flex-1 flex flex-col justify-center items-center gap-2 text-center">
                                <p className="font-bold text-sm sm:text-md md:text-lg">Due Invoices</p>
                                <p><FaFileInvoice size={24} /></p>
                                <p className="text-red-600 font-bold">{dueInvoices}</p>
                            </div>
                        </div>
                    </div>

                    {/* Row 4 */}
                    <div className="flex justify-between gap-4 mb-8">
                        <div className="flex-1 flex flex-col justify-center items-center gap-2 bg-blue-theme text-white text-center p-4 rounded-md">
                            <p className="font-bold text-sm sm:text-md md:text-lg">Today&apos;s Attendance</p>
                            <p><CiViewList size={24} /></p>
                            <p className="text-green-600 font-bold mt-2">{todaysAttendance}</p>
                        </div>
                        <div className="flex-1 flex flex-col justify-center items-center gap-2 bg-blue-theme text-white text-center p-4 rounded-md">
                            <p className="font-bold text-sm sm:text-md md:text-lg">Unresolved Tickets</p>
                            <p><IoTicket size={24} /></p>
                            <p className="text-green-600 font-bold mt-2">{unresolvedTickets}</p>
                        </div>
                    </div>

                    {/* Row 5 */}
                    <OverviewTabs />

                    {/* Row 6 */}
                    <div className="flex justify-between gap-4 mb-4">
                        <div className="flex-1 flex flex-col justify-center items-center gap-2 bg-blue-theme text-white text-center p-4 rounded-md">
                            <p className="font-bold text-sm sm:text-md md:text-lg">Project Activity Timeline</p>
                            <p><TbBriefcaseFilled size={24} /></p>
                            <p className="text-green-600 font-bold mt-2">{projectActivityTimeline}</p>
                        </div>
                        <div className="flex-1 flex flex-col justify-center items-center gap-2 bg-blue-theme text-white text-center p-4 rounded-md">
                            <p className="font-bold text-sm sm:text-md md:text-lg">User Activity Timeline</p>
                            <p><TbWaveSawTool size={24} /></p>
                            <p className="text-green-600 font-bold mt-2">{userActivityTimeline}</p>
                        </div>
                    </div>
                </div>
            </section>  
        </main>
    );
}
 
export default Overview;
