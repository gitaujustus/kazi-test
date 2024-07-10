import React from 'react'
import { NotificationIcon }  from '@/components/svg/icons';
import { IoMdCloudUpload } from "react-icons/io";
import StyledCheckBox from '@/components/ui/checkboxStyle';
import {SlArrowRight} from "react-icons/sl";

const ImportEmployee = () => {
  return (
    <div className='bg-[#172448] px-4 py-8'>
        <div className='px-3 py-6 bg-white max-w-5xl mx-auto rounded-lg'>
          <h1 className='text-center text-2xl font-bold'>Import Employee</h1>
          <h3 className='font-semibold my-6'>Import Employee</h3>
          <div className='flex items-center gap-2 bg-[#FEF2CC]  px-2 py-2 rounded-lg  mb-6 mr-3'>
                <NotificationIcon/>
                <p className='text-sm md:text-md'>Date format should be in Y-m-d (e.g. 2022-04-21) format. Make sure the date format is correct in the excel file.</p>
          </div>

          <div>
            <label>Upload file(the file must be a file type of:xls,xlsx,csv)</label>
            <div className='border border-gray-400 rounded-lg flex flex-col items-center justify-center h-[40vh]'>
              <IoMdCloudUpload className='w-20 h-20 '/>
              <button className="mt-1 ">Choose a file</button>
            </div>
          </div>

          <p className='py-3'>File contains heading row</p>
          <StyledCheckBox/>

          <div className='flex gap-4 py-4'>
            <button className='bg-[#3D50FC] text-white flex items-center p-2 rounded-lg'>
              <SlArrowRight/>
              Upload and move to the next step
            </button>
            <button className='bg-gray-300 rounded-lg py-2 px-4'>
              Back
            </button>
          
          </div>
          
        

        </div>
    </div>
    
  )
}

export default ImportEmployee;