import Link from 'next/link'
import React from 'react'
import MenuBar from '@/components/leads/leadsViewNav';
import { FaSearch } from 'react-icons/fa';

function Deals({params}) {

    const Name="Mr Abraham Ruto"

  return (
    <main className='bg-[#C7C7C7] rounded-lg mx-5 px-3 py-3 min-h-screen'>
        <h1 className='text-[#172448] my-4 text-2xl md:text-3xl font-semibold'>{Name}</h1>
       <MenuBar lead={params.lead}/>

       <section>
            <div className='flex gap-2 my-4 px-7'>
            <button className='flex gap-2 text-white bg-[#172448] items-center rounded-lg p-2 px-7'>
                    <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99805H13V10.998H19V12.998Z" fill="white"/>
                    </svg>
                    </span>
                    Add Deal
                </button>
                <button className='flex gap-2 items-center bg-white rounded-lg p-2 px-7'>
                    <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 2C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2M13 3.5L18.5 9H13M8.93 12.22H16V19.29L13.88 17.17L11.05 20L8.22 17.17L11.05 14.35" fill="black"/>
                    </svg>
                    </span>
                    Export
                </button>
            </div>

          <div className='flex gap-2'>
            <div className='flex gap-3 items-center'>
                <select className='border border-gray-300 rounded-lg p-2 px-10'>
                    <option value="Sales Pipeline" className='p-1' >Sales Pipeline</option>
                </select>
            </div>
           <div className="relative flex gap-6 overflow-hidden flex-grow max-w-md ">
           <input 
              type="text"
              placeholder='Start Typing To Search'
              className="w-full bg-[#393A40] dark:bg-[#202020] text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <FaSearch className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
            
          </div>
       </section>

     



       <section className='rounded-lg my-4 min-h-[90vh]'>
            <div className=' overflow-x-auto'>
            <table className='w-full min-h-[50vh] bg-[#172448]'>
                <thead className='bg-white p-4'>
                <tr>
                    <th className='text-left px-4 py-2'><input type='checkbox'/></th>
                    <th className='text-left px-4 py-2'>Deal&nbsp;Name</th>
                    <th className='text-left px-4 py-2'>Lead&nbsp;Name</th>
                    <th className='text-left px-4 py-2'>Email</th>
                    <th className='text-left px-4 py-2'>Mobile</th>
                    <th className='text-left px-4 py-2'>Value</th>
                    <th className='text-left px-4 py-2'>Close&nbsp;Date</th>
                    <th className='text-left px-4 py-2'>Next&nbsp;Follow&nbsp;Up</th>
                    <th className='text-left px-4 py-2'>Deal&nbsp;Agent</th>
                    <th className='text-left px-4 py-2'>Deals&nbsp;Added&nbsp;By</th>
                    <th className='text-left px-4 py-2'>Stage</th>
                    <th className='text-left px-4 py-2'>Action</th>
                </tr>
                </thead>
                <tbody className=' text-white '>
                    <tr>
                        <td colSpan={12} className='text-center py-10 '>No data available in table</td>
                    </tr>
                </tbody>
            </table>
            </div>

            <div className='bg-[#172448] w-full py-4 rounded-b-xl flex flex-wrap justify-between px-6'>
                <div className='flex gap-3 items-center text-white'>
                        <label htmlFor="entries">Show</label>
                        <select className='border border-gray-300 rounded-lg p-2 text-black '>
                            <option value="10" className='p-1' >10</option>
                            <option value="25" className='p-1' >25</option>
                            <option value="50" className='p-1' >50</option>
                            <option value="100" className='p-1' >100</option>
                        </select>
                        <span>Entries</span>
                 </div>

                 <div className='flex flex-wrap gap-2 items-center text-white'>
                    <p>Showing <span>0</span> to <span>0</span> of <span>0</span> entries</p>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 bg-white border rounded text-gray-600">Previous</button>
                        <button className="px-3 py-1 bg-white border rounded text-gray-600">Next</button>
                    </div>
                    </div>
                </div>
    </section>
    </main>
  )
}

export default Deals