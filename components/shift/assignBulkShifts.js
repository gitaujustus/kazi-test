
"use client"
import { useState } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import { ImInfo } from "react-icons/im";
const AssignBulkShifts = () => {

    const [ department, setDepartment ] = useState('');
    const [ employees, setEmployees ] = useState('');
    const [ employeeShift, setEmployeeShift ] = useState('');
    const [ assignShiftBy, setAssignShiftBy ] = useState('');
    const [ dates, setDates ] = useState([]);
    const [ sendEmail, setSendEmail ] = useState(false);
    const [ remark, setRemark ] = useState('');
    const [ file, setFile ] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return ( 
        <form onSubmit={handleSubmit} className="bg-white text-black px-4 rounded-lg ">
            <h1 className="text-2xl text-center font-bold text-blue-theme py-4">Assign Bulk Shifts</h1>
            <section>
                <h2 className="text-xl font-semibold text-blue-theme py-4">Add Shift Roster</h2>

                <div className=" p-2 bg-[#fef2cc] rounded-lg flex gap-2 items-center"><span><ImInfo /></span> The existing shift will be overwritten</div>

                <div className="flex justify-center items-center flex-wrap gap-6">
                    <div className="my-4">
                        <label htmlFor="department">Department</label>
                        <select name="department" id="department" value={department} onChange={(e) => setDepartment(e.target.value)} className="border border-black w-full rounded-lg px-2 py-1">
                            <option value="" selected disabled>--select--</option>
                            <option value="department1">Department 1</option>
                            <option value="department2">Department 2</option>
                            <option value="department3">Department 3</option>
                        </select>
                    </div>

                    <div className="my-4">
                        <label htmlFor="employees">Employees</label>
                        <select name="employees" id="employees" value={employees} onChange={(e) => setEmployees(e.target.value)}  className="border border-black w-full rounded-lg px-2 py-1"> 
                            <option value="" selected disabled>--select--</option>
                            <option value="employee1">Employee 1</option>
                            <option value="employee2">Employee 2</option>
                            <option value="employee3">Employee 3</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-around items-center flex-wrap gap-4 my-4">
                    <div>
                        <label htmlFor="employeeShift">Employee Shift</label>
                        <select name="employeeShift" id="employeeShift" value={employeeShift} onChange={(e) => setEmployeeShift(e.target.value)} className="border border-black w-full rounded-lg px-2 py-1">
                            <option value="" selected disabled>--select--</option>
                            <option value="employeeShift1">EmployeeShift1</option>
                            <option value="employeeShift2">EmployeeShift2</option>
                            <option value="employeeShift3">EmployeeShift3</option>
                        </select>
                    </div>
                    <div className="flex flex-col justify-between items-center">
                        <label htmlFor="assignShiftBy">Assign Shift By</label>
                        <div  className="px-2 py-1 flex gap-4 justify-around">
                            <p className="flex gap-2"><input type="radio" name="assignShiftBy" id="assignShiftBy" value="assignShiftBy1" /> <span>Date</span></p>
                            
                            <p className="flex gap-2"><input type="radio" name="assignShiftBy" id="assignShiftBy" value="assignShiftBy2" /> <span>Multiple</span></p>
                            
                            <p className="flex gap-2"><input type="radio" name="assignShiftBy" id="assignShiftBy" value="assignShiftBy2" /> <span>Month</span></p>
                            
                        </div>
                    </div>
                    <div>
                        <label htmlFor="dates">You can select multiple dates</label>
                        <input type="date" placeholder="12-06-2024" className="border border-black w-full rounded-lg px-2 py-1" />
                    </div>
                </div>

                <div className="flex gap-2 my-4">
                    <input type="checkbox" checked={sendEmail} onChange={(e) => setSendEmail(e.target.checked)} />
                    <p>Send Email</p>
                </div>

                <div>
                    <label htmlFor="remark">Remark</label>
                    <div name="remark" id="remark">
                        <textarea type="text" value={remark} onChange={(e) => setRemark(e.target.value)} className="border border-black w-full rounded-lg h-32" />
                    </div>
                </div>
                <div className="my-4">
                    <label htmlFor="addFile">Add File</label>
                    <div name="addFile" id="addFile" className="bg-gray-800 text-white flex flex-col justify-center items-center p-6 rounded-lg">
                    <IoMdCloudUpload size={60} />
                        <input type="file" onChange={(e) => setFile(e.target.files[0])} className="w-[50%] h-20 "/>
                    </div>
                </div>
            </section>

            <div className="flex gap-4">
                <button className="bg-[#3D63DD] text-white p-2 my-4 rounded-md font-semibold">Save</button>
                <button className="bg-gray-400 text-black p-2 my-4 rounded-md font-semibold">Cancel</button>
            </div>
        </form>
     );
}
 
export default AssignBulkShifts;