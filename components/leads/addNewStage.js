import React from 'react'

function AddNewStage() {
  return (
    <div className='mx-10 sm:mx-20 md:mx-44 bg-white py-4 rounded-md border border-black'>
        <h1 className='text-lg text-center font-semibold'>Add new Stage</h1>
        <hr />
        <form className='px-2'>
            <div className='flex flex-wrap justify-between  gap-2   '>
                <div className='flex  flex-col '>
                            <label htmlFor="pipeline">Pipeline <span className='text-red-500'>*</span></label>
                            <input type="text" className='px-2 w-full py-1 border border-gray-600 rounded-md ' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="pipeline">Pipeline <span className='text-red-500'>*</span></label>
                            <input type="text" className='px-2 w-full py-1 border border-gray-600 rounded-md ' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="pipeline">Pipeline <span className='text-red-500'>*</span></label>
                            <input type="text" className='px-2 w-full py-1 border border-gray-600 rounded-md ' />
                        </div>
            </div>

            <div className='flex gap-2 justify-end py-2'>
                <button className='px-2 py-1 rounded-md bg-[#D8DCFE]'>Close</button>
                <button className='px-2 py-1 rounded-md bg-[#3D50FC] text-white font-semibold'>Save</button>
            </div>
        </form>
    </div>
  )
}

export default AddNewStage