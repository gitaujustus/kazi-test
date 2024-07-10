"use client"
import React, { useState } from 'react';

const OverviewLowerPills = () => {
    const [activePill, setActivePill] = useState('Income');

    const pillItems = [
        { id: 'Income', label: "Income" },
        { id: 'Timesheet', label: "Timesheet" },
        { id: 'PendingLeaves', label: "Pending Leaves" },
        { id: 'OpenTickets', label: "Open Tickets" },
        { id: 'PendingTasks', label: "Pending Tasks" },
        { id: 'PendingFollowUp', label: "Pending Follow Up" },
    ];

    const renderContent = () => {
        switch (activePill) {
            case 'Income':
                return <IncomeContent />;
            case 'Timesheet':
                return <TimesheetContent />;
            case 'PendingLeaves':
                return <PendingLeavesContent />;
            case 'OpenTickets':
                return <OpenTicketsContent />;
            case 'PendingTasks':
                return <PendingTasksContent />;
            case 'PendingFollowUp':
                return <PendingFollowUpContent />;
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
                        } flex-grow basis-1/3 sm:basis-auto rounded-full border-blue-theme border px-3 py-1 text-center text-xs whitespace-nowrap`}
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
const IncomeContent = () => <div>Income Content</div>;
const TimesheetContent = () => <div>Timesheet Content</div>;
const PendingLeavesContent = () => <div>Pending Leaves Content</div>;
const OpenTicketsContent = () => <div>Open Tickets Content</div>;
const PendingTasksContent = () => <div>Pending Tasks Content</div>;
const PendingFollowUpContent = () => <div>Pending Follow Up Content</div>;
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

export default OverviewLowerPills;