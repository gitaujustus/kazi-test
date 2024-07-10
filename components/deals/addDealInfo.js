import React from 'react';
import { RiCheckFill } from "react-icons/ri";
import { RiCheckDoubleFill } from "react-icons/ri";

const AddDealInfoForm = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md  mx-auto">
        <h1 className="text-3xl font-bold text-center py-4">Add Deal Info</h1>
        <h2 className="text-2xl font-bold mb-6">Deal Details</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="leadContact" className="block text-sm font-medium text-gray-700 mb-1">Lead Contact*</label>
            <select id="leadContact" className="w-full border border-gray-300 rounded-md px-3 py-2">
              <option>Select...</option>
            </select>
          </div>
          <div>
            <label htmlFor="dealName" className="block text-sm font-medium text-gray-700 mb-1">Deal Name*</label>
            <input type="text" id="dealName" placeholder="e.g. John Doe" className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div>
            <label htmlFor="pipeline" className="block text-sm font-medium text-gray-700 mb-1">Pipeline*</label>
            <select id="pipeline" className="w-full border border-gray-300 rounded-md px-3 py-2">
              <option>Sales Pipeline</option>
            </select>
          </div>
        </div>
        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="dealStages" className="block text-sm font-medium text-gray-700 mb-1">Deal Stages*</label>
            <select id="dealStages" className="w-full border border-gray-300 rounded-md px-3 py-2">
              <option>Generated</option>
              <option>Qualified</option>
              <option>Initial Contact</option>
              <option> Schedule Appointment</option>
              <option> Proposal Sent</option>
              <option> Win</option>
              <option> Lost</option>
            </select>
          </div>
          <div>
            <label htmlFor="dealName" className="block text-sm font-medium text-gray-700 mb-1">Deal Value*</label>
            <div class="flex">
            <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-blue-900 text-white text-sm">
                KES&nbsp;(Ksh)
            </span>
            <input type="number" id="deal-value" name="deal-value" className="w-full border border-gray-300 rounded-e-md px-3 py-2" value="0"/>
        </div>
          </div>
          <div>
            <label htmlFor="closeDate" className="block text-sm font-medium text-gray-700 mb-1">Close Date*</label>
            <input type="date" id="closeDate" className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
        </div>
        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-3">
          <div>
            <label htmlFor="pipeline" className="block text-sm font-medium text-gray-700 mb-1">Deal Agent</label>
            <select id="pipeline" className="w-full border border-gray-300 rounded-md px-3 py-2">
              <option></option>
            </select>
          </div>

          <div>
            <label htmlFor="pipeline" className="block text-sm font-medium text-gray-700 mb-1">Product</label>
            <select id="pipeline" className="w-full border border-gray-300 rounded-md px-3 py-2">
              <option>Select Product</option>
            </select>
          </div>
          <div>
            <label htmlFor="pipeline" className="block text-sm font-medium text-gray-700 mb-1">Added By</label>
            <input type="text" id="dealName"  disabled value={"Admin, You"} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
        </div>

        
        <div className="flex justify-start space-x-3">
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md flex items-center gap-2"><RiCheckFill/> Save</button>
          <button type="button" className="px-4 py-2 bg-[#D8DCFE] text-blue-600 rounded-md flex items-center gap-2"><RiCheckDoubleFill/> Save & Add Note</button>
          <button type="button" className="px-4 py-2 border bg-[#D8DCFE] rounded-md text-gray-700">Cancel</button>

        </div>
      </form>
    </div>
  );
};

export default AddDealInfoForm;