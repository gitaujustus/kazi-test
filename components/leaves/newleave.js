'use client'
import React from 'react'

const NewLeave = () => {
  return (
    <div className="bg-[#172448] px-4 py-8 z-50" >
        <form action='' className='p-3 bg-white max-w-5xl mx-auto text-sm rounded-lg'>
            <p className='text-3xl font-bold text-center'>New Leave</p>
            <p className='text-3xl font-semibold py-8'>Assign Leave</p>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='w-full md:w-[30%]'>
                    <label>Choose Member*</label>
                    <select className='border border-gray-400 rounded-lg p-2 w-full'>
                    <option value=" " > </option>
                    </select>
                </div>
                <div className='w-full md:w-[30%]' >
                    <label>Leave Type*</label>
                    <div className='flex'>
                        <select className='border border-gray-400 rounded-l-lg p-2 w-full'>
                        <option value=" " > </option>
                        </select>
                        <button className='bg-[#172448] text-white rounded-r-lg px-2'>Add</button>
                    </div>
                    
                </div>
                <div className='w-full md:w-[30%]'>
                    <label>Status</label>
                    <select className='border border-gray-400 rounded-lg p-2 w-full'>
                    <option value="Pending" > Pending</option>
                    </select>
                </div>
            </div>

            <p className='pt-4'>Select Duration</p>
            <div className='flex flex-wrap py-3 gap-6 md:gap-12'>
                <div>
                    <div>
                        <input type="radio" />
                        <label htmlFor="">Full Day</label>
                    </div>

                    <div className='py-3'>
                        <input type="radio"/>
                        <label htmlFor="">Multiple</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input type="radio"/>
                            <label htmlFor="">First Half</label>
                        </div>

                        <div className='py-3'>
                            <input type="radio" className='rounded-[100%]'/>
                            <label htmlFor="">Second Half</label>
                        </div>
                </div>
                
                <div className='flex flex-col'>
                    <label>Leave Type</label>
                    <input type='text' className='border border-gray-400 rounded-lg p-2 '/>
                </div>
                
            </div>

            <div className='flex flex-col py-2'>
                <label>Reason for absense*</label>
                <textarea name="reason" ceholder='e.g. Feeling unwell' id="reason"  rows={6} className='border border-gray-400 rounded-md'></textarea>
            </div>

            <div>
                <p>Add File</p>
                <div className='border border-gray-400 rounded-lg'>
                    <div className='bg-[#393A40] my-6 flex flex-col items-center justify-center'>
                        <button>
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M45.6667 91.6667H26.9167C20.5972 91.6667 15.1986 89.4792 10.7208 85.1042C6.24306 80.7292 4.00278 75.3819 4 69.0625C4 63.6458 5.63194 58.8194 8.89583 54.5833C12.1597 50.3472 16.4306 47.6389 21.7083 46.4583C23.4444 40.0694 26.9167 34.8958 32.125 30.9375C37.3333 26.9792 43.2361 25 49.8333 25C57.9583 25 64.8514 27.8306 70.5125 33.4917C76.1736 39.1528 79.0028 46.0444 79 54.1667C83.7917 54.7222 87.7681 56.7889 90.9292 60.3667C94.0903 63.9444 95.6694 68.1278 95.6667 72.9167C95.6667 78.125 93.8444 82.5528 90.2 86.2C86.5555 89.8472 82.1278 91.6694 76.9167 91.6667H54V61.875L60.6667 68.3333L66.5 62.5L49.8333 45.8333L33.1667 62.5L39 68.3333L45.6667 61.875V91.6667Z" fill="#8B8D98"/>
                            </svg>
                        </button>
                        <p>Choose a file</p>
                    </div>
                </div>
            </div>

            <div className='text-xs pt-8'>
                <button type='submit' className='bg-[#3D50FC] text-white px-8 py-2 rounded-md '>Save</button>
                <button className='bg-gray-300 px-8 py-2 rounded-md ml-4'>Cancel</button>
            </div>
        </form>
       
    </div>
  )
}

export default NewLeave