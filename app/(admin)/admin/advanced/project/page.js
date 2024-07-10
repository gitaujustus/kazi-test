// "use client"
// import { useState } from "react";
import NavPills from "@/components/advancedNavigation";
import { FaClock } from "react-icons/fa6";
import { MdOutlinePendingActions } from "react-icons/md";
import { FaDatabase } from "react-icons/fa6";

const Project = () => {
    let totalProjects = 20;
    let overdueProjects = 20;
    let hoursLogged = 8;
    let pendingTasks = 0;


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
                            <p className="font-bold text-sm sm:text-md md:text-lg flex gap-4 items-center justify-center">Total Projects </p>
                            <p className="text-red-600 font-bold mt-2">{totalProjects}</p>
                        </div>
                        <div className="flex-1 flex flex-col gap-2 bg-white dark:bg-[#1d1d1d] p-4 rounded-md border border-blue-theme text-center">
                            <p className="font-bold text-sm sm:text-md md:text-lg flex gap-4 items-center justify-center">Overdue Projects</p>
                            <p className="text-red-600 font-bold mt-2">{overdueProjects}</p>
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
                    <div className="bg-white rounded-lg shadow-lg mb-8">
                        <h1 className="font-bold text-lg p-4 text-center border-b-2 border-gray-300 text-blue-theme">Status Wise Projects</h1>
                        <div className="p-4 flex justify-center items-center h-64 bg-gray-100 rounded-b-lg">
                            <div className="text-center">
                                <div className="bg-gray-300 rounded-full p-4 inline-block mb-2">
                                    <svg className="w-8 h-8 text-gray-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                    </svg>
                                </div>
                                <p className="text-gray-600 font-medium">Not Enough Data</p>
                            </div>
                        </div>
                    </div>
                    {/* Row 4 */}
                    <div className="text-center mx-auto bg-blue-theme rounded-lg">
                        <div className="border-b border-white text-white p-3">
                                <h2 className="text-md ">Pending Milestone</h2>
                        </div>
                        <div className="overflow-x-auto w-full">
                            <table className="w-full">
                                    <thead>
                                        <tr className="text-sm text-white border-b border-white">
                                            <th className="p-3 text-left">Milestone Title</th>
                                            <th className="p-3 text-left">Milestone Cost</th>
                                            <th className="p-3 text-left">Project</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colSpan="3" className="p-8">
                                                <div className="mx-auto bg-white rounded-t-lg rounded-bl-lg w-32 h-28 p-2 flex flex-col items-center justify-center">
                                                    <FaDatabase className=" text-blue-theme  m-2" size={50} />
                                                    <p className="text-xs text-blue-theme ">No record found</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                        </div>
                    </div>

                    
                </div>
            </section>  
        </main>
    );
}
 
export default Project;
