import Link from 'next/link'
import React from 'react'
import MenuBar from '@/components/leads/leadsViewNav';
import { FaSearch } from 'react-icons/fa';

function Notes({params}) {

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
                    Add Notes
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
       </section>



       <section className='rounded-lg  my-4 min-h-[90vh]'>
            <div className='overflow-x-auto'>
                <table className='w-full min-h-[50vh] bg-[#172448]'>
                    <thead className='bg-white p-4'>
                    <tr>
                        <th className='text-left px-4 py-2'><input type='checkbox'/></th>
                        <th className='text-left px-4 py-2'>Note Title</th>
                        <th className='text-left px-4 py-2'>Note Type</th>
                        <th className='text-left px-4 py-2'>Created</th>
                        <th className='text-left px-4 py-2'>Action</th>
                    </tr>
                    </thead>
                    <tbody className=' text-white '>
                        <tr>
                            <td colSpan={5} className='text-center py-10 '>No data available in table</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='bg-[#172448] py-4 rounded-b-xl flex justify-between px-6 flex-wrap'>
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

export default Notes