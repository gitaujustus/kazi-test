import AdminBar from '@/components/adminBar'
import MyCalendar from '@/components/dashboard/mycalender';
import ConditionalNavigation from '@/components/dashboard/recordsEventsNav';
import Image from 'next/image'
import React from 'react'
import { CiSettings } from "react-icons/ci";

function Dashbaord() {
  const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  const today = new Date().getDay();
  const projects=0
  const OpenTasks=0
  const pendingTaks=0
  const OverdueTasks=0
  const inprogressProjects=0
  const overdueProjects=0

  const shiftData = [
    { date: '27-05-2024', day: 'Monday', shift: 'Default shift' },
    { date: '28-05-2024', day: 'Tuesday', shift: 'Default shift' },
    { date: '29-05-2024', day: 'Wednesday', shift: 'Default shift' },
    { date: '30-05-2024', day: 'Thursday', shift: 'Default shift' },
    { date: '31-05-2024', day: 'Friday', shift: 'Default shift' },
    { date: '01-05-2024', day: 'Saturday', shift: 'Default shift' },
    { date: '02-05-2024', day: 'Sunday', shift: 'Default shift' },
  ];


  return (
    <main className='min-h-screen dark:bg-[#3B3B3B] pt-5'>
      <section className=' md:mx-6 rounded-md bg-light-background dark:bg-dark-background pb-4 '>
        <div className='flex bg-[#076B6D] items-center justify-between rounded-t-lg h-64 '>
          <div className='p-4 w-1/2 text-white'>
            <h1 className='text-3xl  font-semibold'>Welcome back Admin</h1>
            <p className='text-md mt-5'>What do you have in mind</p>
          </div>
          <div className='h-full  '>
              <Image src={"/assets/6.png"} className='object-cover h-full w-full' alt="kazi" width={2560} height={700}/>
          </div>
        </div>
         {/* clock in */}
      
      <section className='px-2'>

      <div className='flex justify-end items-center gap-2 py-4  md:mx-10'>
        <button className='bg-[#1D1D1D] dark:bg-[#172448] rounded-md px-5 py-2 text-white flex gap-2 items-center'>
        <svg width="20" height="20" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 8.99917V50.9991C0 51.7948 0.421428 52.5579 1.17157 53.1205C1.92172 53.6831 2.93913 53.9991 4 53.9991H16V47.9991H8V11.9992H16V5.99917H4C2.93913 5.99917 1.92172 6.31524 1.17157 6.87785C0.421428 7.44046 0 8.20352 0 8.99917ZM56.968 6.08917L24.968 0.0891714C24.3785 -0.0211063 23.7632 -0.0292097 23.1689 0.0654764C22.5745 0.160162 22.0168 0.35515 21.5379 0.635638C21.0591 0.916126 20.6717 1.27474 20.4052 1.68427C20.1388 2.0938 20.0002 2.54348 20 2.99917V56.9991C19.9986 57.4552 20.1362 57.9055 20.4022 58.3156C20.6682 58.7258 21.0556 59.0849 21.5348 59.3656C22.0141 59.6464 22.5725 59.8413 23.1675 59.9355C23.7625 60.0296 24.3783 60.0206 24.968 59.9091L56.968 53.9091C57.8337 53.7472 58.6024 53.3728 59.1518 52.8455C59.7012 52.3182 59.9998 51.6683 60 50.9991V8.99917C59.9998 8.32998 59.7012 7.68007 59.1518 7.15278C58.6024 6.62549 57.8337 6.25111 56.968 6.08917ZM40 30.5632C39.9539 31.3356 39.5124 32.0649 38.7673 32.5993C38.0222 33.1337 37.0309 33.432 36 33.432C34.9691 33.432 33.9778 33.1337 33.2327 32.5993C32.4876 32.0649 32.0461 31.3356 32 30.5632V29.4322C32.0005 28.6365 32.4225 27.8736 33.173 27.3113C33.9235 26.7489 34.9411 26.4333 36.002 26.4337C37.0629 26.4341 38.0801 26.7505 38.8298 27.3134C39.5796 27.8763 40.0005 28.6395 40 29.4352V30.5632Z" fill="white"/>
        </svg>
          Clock In
        </button>
        <CiSettings size={26}/>
      </div>

      <section className='h-44 bg-white flex justify-between m-4 rounded-md text-black border border-[#076B6D] px-3  md:mx-10'>
          <div className='my-auto'>
            <h1 className='text-2xl font-semibold'>Open Tasks</h1>
            <p className='pt-10 text-center text-xl'>{OpenTasks}</p>
          </div>
          <div className='my-auto '>
            <h1 className='text-2xl font-semibold'>Projects</h1>
            <p className='pt-10 text-center text-xl'>{projects}</p>
          </div>
      </section>


        <section className=' md:mx-10 flex gap-7 flex-col sm:flex-row py-6'>
          <div className=' w-full sm:w-1/2 rounded-md bg-[#1D1D1D] dark:bg-[#1D1D1D] text-white'>
            <h2 className='text-center text-2xl font-semibold py-2 '>Tasks</h2>
            <div className='h-32 flex justify-between  px-4'>
              <div className='my-auto'>
                <h1 className='text-2xl text-center font-semibold'>
                  {pendingTaks}
                </h1>
                <p className='pt-2 text-xl'>pending</p>
              </div>
              <div className='my-auto'>
                <h1 className='text-2xl text-center font-semibold'>
                  {OverdueTasks}
                </h1>
                <p className='pt-2 text-xl'>Overdue</p>
              </div>
            </div>
          </div>

          <div className='w-full sm:w-1/2 rounded-md bg-[#1D1D1D] dark:bg-[#1D1D1D] text-white'>
            <h2 className='text-center text-2xl font-semibold py-2 '>Projects</h2>
            <div className='h-32 flex justify-between  px-4'>
              <div className='my-auto'>
                <h1 className='text-2xl text-center font-semibold'>
                  {inprogressProjects}
                </h1>
                <p className='pt-2 text-xl'>In Progress</p>
              </div>
              <div className='my-auto'>
                <h1 className='text-2xl text-center font-semibold'>
                  {overdueProjects}
                </h1>
                <p className='pt-2 text-xl'>Overdue</p>
              </div>
            </div>
          </div>
        </section>


        <section className="rounded-lg shadow-md bg-[#FFFFFF]  md:mx-10 ">
            <div className='bg-[#076B6D] rounded-t-lg px-2 py-2'>
              <h2 className="text-white text-lg font-semibold text-center">Week Timelogs</h2>
            </div>
            <div className="flex justify-between mb-4 p-2">
              {days.map((day, index) => (
                <div
                  key={day}
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium
                    ${index === (today + 6) % 7 ? 'bg-teal-700 text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                  {day}
                </div>
              ))}
            </div>
            <div className="bg-[#076B6D] rounded-full h-2 mb-2 mx-6"></div>
            <div className="flex justify-between text-black text-sm mx-4 py-3">
              <span>Duration: 0s</span>
              <span>Break: 0s</span>
          </div>
        </section>


        {/* shift schedule */}
         <section className="bg-[#FAFAFA] dark:bg-[#1D1D1D] dark:text-white rounded-lg shadow-md p-6 max-w-lg  md:max-w-2xl my-4 mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Shift Schedule</h2>
              <span className="bg-[#076B6D] text-white px-3 py-1 rounded-lg text-sm">Employee Shift</span>
            </div>
            <table className="w-full">
              <tbody>
                {shiftData.map((shift, index) => (
                  <tr key={index}>
                    <td className="py-2 ">{shift.date}</td>
                    <td className="py-2">{shift.day}</td>
                    <td className="py-2 text-right ">{shift.shift}</td>
                  </tr>
                ))}
              </tbody>
            </table>
        </section>

      {/* tasks and tickets */}
        <section className=' overflow-x-auto lg:mx-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  justify-between gap-4'>
          <div className='bg-[#1D1D1D] w-auto  rounded-lg min-h-44 text-white'>
            <p className='w-full text-center bg-[#076B6D] rounded-t-md py-2'>My Tasks</p>
            <div className='flex justify-between px-2'>
              <p>Task ID</p>
              <p>Task</p>
              <p>Status</p>
              <p>Due Date</p>
            </div>
            <div className='flex flex-col items-center justify-center py-5 text-gray-400'>
                <svg width="85" height="108" viewBox="0 0 115 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 40C0 17.9086 17.9086 0 40 0H75C97.0914 0 115 17.9086 115 40V128H60C26.8629 128 0 101.137 0 68V40Z" fill="#111725"/>
                <g clip-path="url(#clip0_0_1)">
                <path d="M34.75 55.125H50.5V63.375H34.75V55.125Z" fill="white"/>
                <path d="M82 26.25H78.0625V18H38.6875V26.25H30.8125V31.4062L28.45 34.5H22.9375V41.7188L19 46.875V84H66.25L82 63.375V26.25ZM26.875 38.625H58.375V46.875H26.875V38.625ZM62.3125 79.875H22.9375V51H62.3125V79.875ZM66.25 46.875H62.3125V34.5H34.75V30.375H66.25V46.875ZM74.125 36.5625L70.1875 41.7188V26.25H42.625V22.125H74.125V36.5625Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_0_1">
                <rect width="63" height="66" fill="white" transform="translate(19 18)"/>
                </clipPath>
                </defs>
                </svg>
                No record Found
            </div>
          </div>

          <div className='bg-[#1D1D1D]  w-auto  rounded-lg min-h-44 text-white'>
            <p className='w-full text-center bg-[#076B6D] rounded-t-md py-2'>Tickets</p>
            <div className='flex justify-between px-2'>
              <p>Task ID</p>
              <p>Task</p>
              <p>Status</p>
              <p>Due Date</p>
            </div>
            <div className='flex flex-col items-center justify-center py-5 text-gray-400'>
                <svg width="85" height="108" viewBox="0 0 115 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 40C0 17.9086 17.9086 0 40 0H75C97.0914 0 115 17.9086 115 40V128H60C26.8629 128 0 101.137 0 68V40Z" fill="#111725"/>
                <g clip-path="url(#clip0_0_1)">
                <path d="M34.75 55.125H50.5V63.375H34.75V55.125Z" fill="white"/>
                <path d="M82 26.25H78.0625V18H38.6875V26.25H30.8125V31.4062L28.45 34.5H22.9375V41.7188L19 46.875V84H66.25L82 63.375V26.25ZM26.875 38.625H58.375V46.875H26.875V38.625ZM62.3125 79.875H22.9375V51H62.3125V79.875ZM66.25 46.875H62.3125V34.5H34.75V30.375H66.25V46.875ZM74.125 36.5625L70.1875 41.7188V26.25H42.625V22.125H74.125V36.5625Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_0_1">
                <rect width="63" height="66" fill="white" transform="translate(19 18)"/>
                </clipPath>
                </defs>
                </svg>
                No record Found
            </div>
          </div>

          <MyCalendar/>

        </section>

        <section className=' md:mx-10 my-4'>
        <div className='bg-[#FAFAFA] dark:bg-[#1D1D1D] w-auto  rounded-lg min-h-44 text-white'>
            <p className='w-full text-center bg-[#076B6D] rounded-t-md py-2 font-semibold'>Notices</p>
           
          </div>
        </section>

        <section>
          <ConditionalNavigation/>
        </section>
        
        </section>
      </section>
    </main>
  )
}

export default Dashbaord