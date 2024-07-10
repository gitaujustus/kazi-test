import React, { useState } from 'react';
import { MdClose, MdFileUpload } from 'react-icons/md';
import { IoMdCloudUpload } from "react-icons/io";

const AddEmployee = ({ onClose }) => {
  const [formData, setFormData] = useState({
    employeeId: '',
    salutation: '',
    employeeName: '',
    employeeEmail: '',
    dateOfBirth: '',
    designation: '',
    department: '',
    profilePicture: null,
    country: '',
    code: '',
    phone: '',
    gender: '',
    joiningDate: '',
    reportingTo: '',
    language: '',
    userRole: '',
    address: '',
    about: '',
    loginAllowed: false,
    emailNotifications: false,
    hourlyRate: '',
    slackMemberID: '',
    skills: [],
    probationEndDate: '',
    noticePeriodStartDate: '',
    noticePeriodEndDate: '',
    employmentType: '',
    maritalStatus: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className='bg-white rounded-lg'>
        <h1 className='text-center text-black text-3xl font-bold py-4'>Add Employee</h1>

        <main>
            <h2 className='text-2xl text-gray-900 font-bold px-4 py- text-center sm:text-left'>Account Details</h2>
            <section className='flex flex-col-reverse lg:flex-row gap-4 mx-4 my-2 items-center justify-around text-black'>
                <section className='flex flex-col w-full'>
                    <div className='w-[90%]] sm:w-auto flex flex-col sm:flex-row flex-wrap   gap-2'>
                        <div className='w-[90%]] sm:w-auto  flex flex-col gap-1 m-2'>
                            <label htmlFor="employeeId">Employee ID</label>
                            <input type="text" id="employeeId" name="employeeId" value={formData.employeeId} onChange={handleChange} placeholder='1' className='border border-black rounded-md w-full sm:w-24 px-2 py-1'/>
                        </div>
                        <div className='w-[90%]] sm:w-auto flex flex-col gap-1 m-2'>
                            <label htmlFor="salutation">Salutation</label>
                            <select id="salutation" name="salutation" value={formData.salutation} onChange={handleChange} className='border border-black rounded-md w-full sm:w-32 px-2 py-1'>
                                <option value="" selected disabled>-- Select --</option>
                                <option value="Mr">Mr</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Ms">Ms</option>
                            </select>
                        </div>
                        <div className='w-[90%] sm:w-auto flex flex-col gap-1 m-2'>
                            <label htmlFor="employeeName">Employee Name</label>
                            <input type="text" id="employeeName" name="employeeName" value={formData.employeeName} onChange={handleChange} placeholder='e.g John Doe' className='border border-black rounded-md w-full sm:w-36 px-2 py-1' />
                        </div>
                        <div className='w-[90%] sm:w-auto flex flex-col gap-1 m-2'>
                            <label htmlFor="employeeEmail">Employee Email</label>
                            <input type="email" id="employeeEmail" name="employeeEmail" value={formData.employeeEmail} onChange={handleChange} placeholder='e.g johndoe@example.com' className='border border-black rounded-md w-full sm:w-36 px-2 py-1' />
                        </div>
                    </div>

                    <div className='flex flex-col sm:flex-row flex-wrap  text-black'>
                        <div className='flex flex-col gap-1 m-2'>
                            <label htmlFor="dateOfBirth">Date of Birth</label>
                            <input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} placeholder='Select Date' className='border border-black rounded-md w-full sm:w-36 px-2 py-1' />
                        </div>
                        <div className='flex flex-col gap-1 m-2'>
                        <label htmlFor="designation">Designation</label>
                            <select id="designation" name="designation" value={formData.designation} onChange={handleChange} className='border border-black rounded-md w-full sm:w-36 px-2 py-1'>
                                <option value="" selected disabled>-- Select --</option>
                                <option value="Mr">Mr</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Ms">Ms</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-1 m-2'>
                        <label htmlFor="department">Department</label>
                            <select id="department" name="department" value={formData.department} onChange={handleChange} className='border border-black rounded-md w-full sm:w-36 px-2 py-1'>
                                <option value="" selected disabled>-- Select --</option>
                                <option value="Mr">Mr</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Ms">Ms</option>
                            </select>
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <label htmlFor="profilePicture">Profile Picture</label>
                        <div className='bg-gray-900 text-white w-52 h-52 flex flex-col gap-2 justify-center items-center'>
                            <IoMdCloudUpload size={64} />
                            <input type="file" id="profilePicture" name="profilePicture" value={formData.profilePicture} onChange={handleChange} className='w-44'  />
                        </div>
                    </div>
                </section>
            </section>
            <section className='mx-4'>
                <div className='flex flex-col sm:flex-row flex-wrap items-center justify-around text-black'>
                    <div className='w-[90%] sm:w-auto flex flex-col gap-1 m-2'>  
                        <label htmlFor="country">Country</label>
                        <select id="country" name="country" value={formData.country} onChange={handleChange} className='border border-black rounded-md w-full sm:w-36 px-2 py-1'>
                            <option value="" selected disabled>-- Select --</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Uganda">Uganda</option>
                            <option value="Tanzania">Tanzania</option>
                        </select>
                    </div>
                    <div className='w-[90%] sm:w-auto flex flex-col gap-1 m-2'>
                        <label htmlFor="mobile">Mobile</label>
                        <div className='flex items-center'>
                            <div>
                                <select name="code" id="code" value={formData.code} onChange={handleChange} className='border border-black rounded-l-md w-14 px-2 py-1'>
                                    <option value="" selected disabled>-- Select --</option>
                                    <option value="254">+254</option>
                                    <option value="256">+256</option>
                                    <option value="255">+255</option>
                                </select>
                            </div>
                            <div>
                                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder='e.g 1234567890' className='border border-black rounded-r-md w-full sm:w-32 px-2 py-1' />
                            </div>
                        </div>
                    </div>
                    <div className='w-[90%] sm:w-auto flex flex-col gap-1 m-2'>
                        <label htmlFor="gender">Gender</label>
                        <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className='border border-black rounded-md w-full sm:w-36 px-2 py-1'>
                            <option value="" selected disabled>-- Select --</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className='w-[90%] sm:w-auto flex flex-col gap-1 m-2'>
                        <label htmlFor="joiningDate">Joining Date</label>
                        <input type="date" id="joiningDate" name="joiningDate" value={formData.joiningDate} onChange={handleChange} placeholder='Select Date' className='border border-black rounded-md w-full sm:w-36 px-2 py-1' />
                    </div>
                </div>

                <div className='flex flex-col sm:flex-row flex-wrap gap-4 mx-4  sm:gap-10 items-center text-black'>
                    <div className='w-[90%] sm:w-auto flex flex-col gap-1 m-2'>
                        <label htmlFor="reportingTo">Reporting To</label>
                        <select id="reportingTo" name="reportingTo" value={formData.reportingTo} onChange={handleChange} className='border border-black rounded-md w-full sm:w-36 px-2 py-1'>
                            <option value="" selected disabled>-- Select --</option>
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Ms">Ms</option>
                        </select>
                    </div>
                    <div className='w-[90%] sm:w-auto flex flex-col gap-1 m-2'>
                        <label htmlFor="language">Language</label>
                        <select id="language" name="language" value={formData.language} onChange={handleChange} className='border border-black rounded-md w-full sm:w-36 px-2 py-1'>
                            <option value="" selected disabled>-- Select --</option>
                            <option value="English">English</option>
                            <option value="Swahili">Swahili</option>
                            <option value="Kiswahili">Kiswahili</option>
                        </select>
                    </div>
                    <div className=' w-[90%] sm:w-auto flex flex-col gap-1 m-2'> 
                        <label htmlFor="userRole">User Role</label>
                        <select id="userRole" name="userRole" value={formData.userRole} onChange={handleChange} className='border border-black rounded-md w-full sm:w-[33vw] px-2 py-1 '>
                            <option value="" selected disabled>-- Select --</option>
                            <option value="Employee">Employee</option>
                            <option value="Manager">Manager</option>
                            <option value="Director">Director</option>
                        </select>
                    </div>
                </div>

                <div className='flex flex-col gap-1 mx-4 my-2 text-black'>
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} placeholder='e.g 123 Main St, City, Country' className='border border-black rounded-md w-full h-14 px-2 py-1' />
                </div>
                <div className='flex flex-col gap-1  mx-4 my-2 text-black'>
                    <label htmlFor="about">About</label>
                    <textarea id="about" name="about" value={formData.about} onChange={handleChange} placeholder='Tell us about yourself' className='border border-black rounded-md w-full px-2 py-1' />
                </div>
            </section>
        </main>
        <main className=' mx-4'>
            <h2 className='text-2xl text-gray-900 font-bold px-4 py-2 text-center sm:text-left'>Other Details</h2>
            <section className='flex flex-wrap justify-around gap-8 text-black mx-4'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <p>Login Allowed?</p>        
                    <div className='flex gap-4'>
                        <p><input type="radio" /> <span>Yes</span></p>
                        <p><input type="radio" /> <span>No</span></p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <p>Receive email notifications?</p>        
                    <div className='flex gap-4'>
                        <p><input type="radio" /> <span>Yes</span></p>
                        <p><input type="radio" /> <span>No</span></p>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p>Hourly Rate</p>
                    <div className='flex gap-4'>
                        <p className='bg-blue-theme flex rounded-l-md text-white'><p className='px-2 py-1'>Ksh</p><input type="number" id='hourlyRate' name='hourlyRate' value={formData.hourlyRate} onChange={handleChange} placeholder='e.g 500' className='border border-black rounded-r-md w-20 px-2 py-1 text-black' /></p>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p>Slack Member ID</p>
                    <div className='flex gap-4'>
                        <p className='bg-blue-theme flex rounded-l-md text-white'><p className='px-2 py-1'>@</p><input type="text" id='slackMemberID' name='slackMemberID' value={formData.slackMemberID} onChange={handleChange} placeholder='e.g U012345678' className='border border-black rounded-r-md w-[33vw] px-2 py-1 text-black' /></p>
                    </div>
                </div>
            </section>
            <div className='flex flex-col gap-1 m-2 text-black'>
                <label htmlFor="skills">Skills</label>
                <input type="text" id="skills" name="skills" value={formData.skills} onChange={handleChange} placeholder='e.g Java, Python, C++' className='border border-black rounded-md w-full h-14 px-2 py-1 text-black'/>
            </div>
            <section className='text-black flex flex-col sm:flex-row flex-wrap justify-between gap-4 sm:gap-4 mx-2'>
                <div className='flex flex-col gap-1 m-2 text-black'>
                    <label htmlFor="probationEndDate">Probation End Date</label>
                    <input type="date" id="probationEndDate" name="probationEndDate" value={formData.probationEndDate} onChange={handleChange} placeholder='Select Date' className='border border-black rounded-md w-full px-2 py-1'  />
                </div>
                <div className='flex flex-col gap-1 m-2 text-black'>
                    <label htmlFor="noticePeriodStartDate">Notice Period Start Date</label>
                    <input type="date" id="noticePeriodStartDate" name="noticePeriodStartDate" value={formData.noticePeriodStartDate} onChange={handleChange} placeholder='Select Date' className='border border-black rounded-md w-full px-2 py-1'  />
                </div>
                <div className='flex flex-col gap-1 m-2 text-black'>
                    <label htmlFor="noticePeriodEndDate">Notice Period End Date</label>
                    <input type="date" id="noticePeriodEndDate" name="noticePeriodEndDate" value={formData.noticePeriodEndDate} onChange={handleChange} placeholder='Select Date' className='border border-black rounded-md w-full px-2 py-1'  />
                </div>
                <div className='flex flex-col gap-1 m-2 text-black'>
                    <label htmlFor="employmentType">Employment Type</label>
                    <select name="employmentType" id="employmentType" value={formData.employmentType} onChange={handleChange} className='border border-black rounded-md w-full px-2 py-1' >
                        <option value="" selected disabled>-- Select --</option>
                        <option value="fullTime">Full Time</option>
                        <option value="partTime">Part Time</option>
                        <option value="contractor">Contractor</option>
                    </select>
                </div>
                <div className='flex flex-col gap-1 m-2 text-black'>
                    <label htmlFor="maritalStatus">Marital Status</label>
                    <select name="maritalStatus" id="maritalStatus" value={formData.maritalStatus} onChange={handleChange} className='border border-black rounded-md w-full px-2 py-1' >
                        <option value="" selected disabled>-- Select --</option>
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                        <option value="divorced">Divorced</option>
                    </select>
                </div>
            </section>
            <section className='flex flex-col sm:flex-row flex-wrap gap-1 sm:gap-4 mx-2'>
                <button className='bg-[#3d50fc] w-36 sm:w-auto  text-white my-2 sm:my-6 px-6 py-3 rounded-lg font-semibold text-sm sm:text-md text-nowrap '>Save</button>
                <button className='bg-gray-400 w-36 sm:w-auto  text-black my-2 sm:my-6 px-6 py-3 rounded-lg font-semibold  text-sm sm:text-md text-nowrap'>Save & Add More</button>
                <button className='bg-gray-400 w-36 sm:w-auto  text-black my-2 sm:my-6 px-6 py-3 rounded-lg font-semibold  text-sm sm:text-md text-nowrap'>Cancel</button>
            </section>
        </main>

    </form>
  );
};

export default AddEmployee;