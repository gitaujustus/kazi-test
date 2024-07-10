'use client'
import { useState } from 'react';
import { IoMdCloudUpload } from "react-icons/io";

 function Assignshifts() {
  const [date, setDate] = useState('');
  const [assignType, setAssignType] = useState('date');

  return (
    <div className=" min-h-screen p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl text-[#172448] flex justify-center font-bold mb-6"> Assign Bulk Shifts</h1>
        <h2 className="text-xl text-[#172448] font-semibold mb-4">Add Shift Roster</h2>
        
        <div className="bg-[#FEF2CC] rounded-lg p-4 mb-6">
          <p className="flex items-center text-[#172448]">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            The existing shift will be overridden.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className=" text-[#172448] mb-2">Department</label>
            <select className="w-full border rounded-md p-2">
              <option></option>
            </select>
          </div>
          <div>
            <label className=" text-[#172448] mb-2 ">Employees *</label>
            <select className="w-full border rounded-md p-2">
              <option></option>
            </select>
          </div>
        </div>

        <div className='flex justify-between'>
        <div className="mb-6 text-[#172448]">
          <label className=" mb-2">Employee Shift</label>
          <select className="w-full border rounded-md p-2">
            <option className='rounded-full h-3 w-3 bg-[#772020]'>Day Off</option>
          </select>
        </div>

        <div className="mb-6 text-[#172448]">
          <label className=" mb-2">Assign Shift By</label>
          <div className="flex items-center gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="assignType "
                value="date"
                checked={assignType === 'date'}
                onChange={() => setAssignType('date')}
                className="mr-2"
              />
              Date
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="assignType"
                value="multiple"
                checked={assignType === 'multiple'}
                onChange={() => setAssignType('multiple')}
                className="mr-2"
              />
              Multiple
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="assignType"
                value="month"
                checked={assignType === 'month'}
                onChange={() => setAssignType('month')}
                className="mr-2 "
              />
              Month
            </label>
          </div>
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-[#172448] ">You can select multiple dates</label>
          <input
            type="date"
            value={date}
            placeholder='12-06-2024'
            onChange={(e) => setDate(e.target.value)}
            className="w-full border rounded-md p-2"
          />
        </div>
        </div>

        <div className="mb-6">
          <label className="flex items-center text-[#172448]">
            <input type="checkbox"
             className="mr-2 bg-[#3D50FC]" 
            />
            Send Email
          </label>
        </div>

        <div className="mb-6">
          <label className=" mb-2 text-[#172448]">Remark</label>
          <textarea className="w-full border rounded-md p-2" rows="4"></textarea>
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-[#172448]">Add File</label>
          <div className="border border-dashed bg-[#393A40] flex flex-col justify-center items-center rounded-lg p-8 ">
          <IoMdCloudUpload className='w-20 h-20 '/>
            <button className="mt-1 text-white">Choose a file</button>
          </div>
        </div>

        <div className="flex justify-start gap-4">
          <button className="bg-[#3D50FC] text-white px-4 py-2 rounded-md">Save</button>
          <button className="bg-[#D8DCFE] text-[#172448] px-4 py-2 rounded-md">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Assignshifts;