import React, { useState } from 'react';
import { IoMdCloudUpload } from "react-icons/io";

const UpdateShiftModal = ({ onClose }) => {
  const [employeeShift, setEmployeeShift] = useState('Day Off');
  const [remark, setRemark] = useState('');


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50  flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-96 mx-2">
        <h2 className="text-xl font-bold mb-4">Update Shift</h2>
        <p className="text-sm text-gray-600 mb-4 font-semibold">Date: 10-06-2024 (Monday)</p>
        
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
          <span className="text-sm font-medium">Admin</span>
          <span className="ml-2 text-xs bg-green-400 text-white px-2 py-1 rounded">you</span>
        </div>
        
        <div className="mb-4">
          <select 
            value={employeeShift}
            onChange={(e) => setEmployeeShift(e.target.value)}
            className="w-full p-2 border border-black rounded"
          >
            <option>Day Off</option>
            {/* Add more options as needed */}
          </select>
        </div>
        
        <div className="mb-4">
          <textarea
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
            placeholder="Remark"
            className="w-full p-2 border border-black rounded h-24"
          />
        </div>
        
        <div className="mb-4 bg-gray-900 text-white">
          <div className="border border-black rounded p-4 text-center">
            <IoMdCloudUpload size={24} className="mx-auto mb-2" />
            <p className="text-sm text-gray-600">Choose a file</p>
          </div>
        </div>
        
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-400 text-black mr-2"
          >
            Close
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateShiftModal;