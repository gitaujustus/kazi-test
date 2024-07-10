"use client"
import React, { useState } from 'react';
import LatestClients from '../../../leads/latestClients';
import ClientWiseEarnings from '../client/clientWiseEarning';
import ClientWiseTimelogs from '../client/clientWiseTimelogs';
import DealCount from '../client/dealCount';
import LeadsCount from '../client/leadsCount';
import RecentLogin from '../client/recentLogin';
import DepartmentWiseEmp from './departmentWiseEmp';
import DesignationWiseEmp from './designationWiseEmp';
import GenderWiseEmp from './genderWiseEmp';
import RoleWiseEmp from './roleWiseEmp';
import HeadCount from './headCount';
import JoinVsAttrition from './joinVsAttrition';
// import NotEnoughData from './notEnoughData';

const HrLowerPills = () => {
    const [activePill, setActivePill] = useState('DepartmentWiseEmployee');

    const pillItems = [
        { id: 'DepartmentWiseEmployee', label: "Department Wise Employee" },
        { id: 'DesignationWiseEmployee', label: "Designation Wise Employee" },
        { id: 'GenderWiseEmployee', label: "Gender Wise Employee" },
        { id: 'RoleWiseEmployee', label: "Role Wise Employee" },
        { id: 'HeadCount', label: "Headcount" },
        { id: 'JoiningVsAttrition', label: "Joining Vs Attrition" },
    ];

    const renderContent = () => {
        switch (activePill) {
            case 'DepartmentWiseEmployee':
                return <DepartmentWiseEmployeeContent />;
            case 'DesignationWiseEmployee':
                return <DesignationWiseEmployeeContent />;
            case 'GenderWiseEmployee':
                return <GenderWiseEmployeeContent />;
            case 'RoleWiseEmployee':
                return <RoleWiseEmployeeContent />;
            case 'HeadCount':
                return <HeadCount />;
            case 'JoiningVsAttrition':
                return <JoiningVsAttritionContent />;
            default:
                return <NotEnoughData />;
        }
    };

    return (
        <div className="bg-gray-100 rounded-lg overflow-hidden">
            <div className="flex flex-wrap justify-center gap-2 bg-blue-theme p-2 rounded-t-lg">
                {pillItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActivePill(item.id)}
                        className={`${
                            activePill === item.id
                                ? 'bg-[#3d50fc] text-white'
                                : 'bg-white text-blue-theme'
                        }  basis-1/3 sm:basis-auto rounded-full border-blue-theme border px-3 py-1 text-center text-xs `}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
            <div className="p-4">
                {renderContent()}
            </div>
        </div>
    );
};

// Placeholder components for each content type
const DepartmentWiseEmployeeContent = () => <div><DepartmentWiseEmp /></div>;
const DesignationWiseEmployeeContent = () => <div><DesignationWiseEmp /></div>;
const GenderWiseEmployeeContent = () => <div><GenderWiseEmp /> </div>;
const RoleWiseEmployeeContent = () => <div><RoleWiseEmp /></div>;
const HeadcountContent = () => <div><HeadCount /></div>;
const JoiningVsAttritionContent = () => <div><JoinVsAttrition /></div>;
const NotEnoughData = () => (
    <div className="text-center py-8">
        <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        </div>
        <p className="text-gray-600">Not Enough Data</p>
    </div>
);

export default HrLowerPills;