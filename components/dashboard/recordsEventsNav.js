'use client'
import React, { useState } from 'react';

const ConditionalNavigation = () => {
  const [activeComponent, setActiveComponent] = useState('');

  const navItems = [
    'Birthdays','Employee Appreciations', 'On Leave Today', 'On Work From Home Today', 'Today’s  joining / Work Anniversary', 
    'Notice Period Duration', 'Digital Media', 'Probation date', 'Internship Date', 
    'Contract Date'
  ];

  const renderContent = () => {
    switch (activeComponent) {
      case 'Birthdays':
        return <div className='h-full flex justify-center items-center'>Birthdays</div>;
      case 'Employee Appreciations':
        return <div className='h-full flex justify-center items-center'>Employee Appreciations </div>;
      case 'On Leave Today':
        return <div className='h-full flex justify-center items-center'>On Leave Today </div>;
      case 'On Leave Today':
        return <div className='h-full flex justify-center items-center'>On Leave Today </div>;
      case 'On Work From Home Today':
        return <div className='h-full flex justify-center items-center'>On Work From Home Today</div>;
      case 'Today’s  joining / Work Anniversary':
        return <div className='h-full flex justify-center items-center'>Today’s  joining / Work Anniversary</div>;
      case 'Notice Period Duration':
        return <div className='h-full flex justify-center items-center'>Notice Period Duration</div>;
      default:
        return <div className='h-full flex justify-center items-center'>No data to show</div>;
    }
  };

  return (
    <div className="flex flex-col h-[70vh]  mx-2 md:mx-10">
      <nav className="flex flex-wrap justify-center gap-2 bg-white p-2 rounded-t-lg">
        {navItems.map((item) => (
          <button
          key={item}
          onClick={() => setActiveComponent(item)}
          variant={activeComponent === item ? 'default' : 'secondary'}
          className={`${activeComponent === item ? 'bg-[#005752] text-white' : 'bg-[#0C111C] text-white'} flex-grow basis-1/3 sm:basis-auto rounded-full border-blue-theme border px-3 py-1 text-center text-xs whitespace-nowrap`}
          >{item}</button>

        ))}
      </nav>
      <div className="flex-grow bg-[#1D1D1D] p-4 rounded-lg text-white">
        {renderContent()}
      </div>
    </div>
  );
};

export default ConditionalNavigation;