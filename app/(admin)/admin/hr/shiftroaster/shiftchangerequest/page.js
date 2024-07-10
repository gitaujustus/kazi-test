"use client"
import React, { useState } from 'react';
import { FaFileExport, FaClipboard, FaSyncAlt } from 'react-icons/fa';

const ShiftRoster = () => {
  const [duration, setDuration] = useState('');
  const [employee, setEmployee] = useState('All');
  const [employeeShift, setEmployeeShift] = useState('All');
  const [entries, setEntries] = useState(10);

  return (
    <div className="max-w-5xl mx-auto p-4 bg-[#c7c7c7] pt-8">
      <h1 className="text-2xl font-bold mb-4 text-blue-theme">Shift Roster</h1>
      <div className="bg-[#c7c7c7] rounded-lg shadow">
        <div className="bg-white rounded-lg p-4 flex items-center justify-between space-x-4 flex-wrap gap-4">
          <div className="flex justify-between items-center gap-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
            <input
              type="text"
              placeholder="Start Date To End Date"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full p-2 border border-black rounded-lg"
            />
          </div>
          <div className="w-40 flex justify-between items-center gap-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Employee</label>
            <select
              value={employee}
              onChange={(e) => setEmployee(e.target.value)}
              className="w-full p-2 border border-black rounded-lg"
            >
              <option value="All">All</option>
            </select>
          </div>
          <div className="w-52 flex justify-between items-center gap-2">
            <label className="block text-sm font-medium text-gray-700 mb-1 text-nowrap">Employee Shifts</label>
            <select
              value={employeeShift}
              onChange={(e) => setEmployeeShift(e.target.value)}
              className="w-full p-2 border border-black rounded-lg"
            >
              <option value="All">All</option>
            </select>
          </div>
        </div>
        
        <div className="px-4 py-2 flex justify-between items-center border-t border-b">
          <button className="bg-white text-blue-theme border border-blue-theme px-4 py-2 rounded-lg flex items-center">
            <FaFileExport className="mr-2" /> Export
          </button>
          <div className="flex gap-2">
            <button className="p-2 border rounded bg-blue-theme">
              <FaClipboard className="text-white" />
            </button>
            <button className="p-2 border rounded bg-white">
              <FaSyncAlt className="text-blue-theme" />
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto rounded-lg">
          <table className="w-full">
            <thead className="text-blue-theme bg-white">
              <tr>
                <th className="p-2 text-left">
                  <input type="checkbox" />
                </th>
                <th className="p-2 text-left text-sm">D T Row Index</th>
                <th className="p-2 text-left text-sm">Employee</th>
                <th className="p-2 text-left text-sm">Employee Shift</th>
                <th className="p-2 text-left text-sm">Date</th>
                <th className="p-2 text-left text-sm">Reason</th>
                <th className="p-2 text-left text-sm">Status</th>
                <th className="p-2 text-left text-sm">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-blue-theme text-white">
                <td colSpan="8" className="p-4 text-center border border-white">No data available in table</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="p-4 flex justify-between items-center flex-wrap gap-4 bg-white text-blue-theme rounded-lg">
          <div className="flex items-center gap-2">
            <span>Show</span>
            <select
              value={entries}
              onChange={(e) => setEntries(Number(e.target.value))}
              className="border rounded p-1"
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            <span>Entries</span>
          </div>
          <button className="bg-blue-100 text-blue-theme px-4 py-2 rounded">
            Delete
          </button>
          <div className="text-sm">
            Showing 0 to 0 of 0 entries
          </div>
          <div>
            <button className="px-4 py-2 border rounded mr-2 bg-white" disabled>
              Previous
            </button>
            <button className="px-4 py-2 border rounded bg-white" disabled>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShiftRoster;