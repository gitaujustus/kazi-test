'use client'
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const MyCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarDays, setCalendarDays] = useState([]);
  const [currentView, setCurrentView] = useState('month');

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  useEffect(() => {
    generateCalendarDays(currentDate);
  }, [currentDate]);

  const generateCalendarDays = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    let startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - startDate.getDay());
    
    const days = [];
    while (startDate <= lastDay || days.length % 7 !== 0) {
      days.push(new Date(startDate));
      startDate.setDate(startDate.getDate() + 1);
    }
    
    setCalendarDays(days);
  };

  const formatDateRange = () => {
    if (calendarDays.length === 0) return '';
    const start = calendarDays[0];
    const end = calendarDays[calendarDays.length - 1];
    return `${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${end.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;
  };

  const changeDate = (delta) => {
    const newDate = new Date(currentDate);
    switch (currentView) {
      case 'month':
        newDate.setMonth(newDate.getMonth() + delta);
        break;
      case 'week':
        newDate.setDate(newDate.getDate() + 7 * delta);
        break;
      case 'day':
        newDate.setDate(newDate.getDate() + delta);
        break;
    }
    setCurrentDate(newDate);
  };

  const renderMonthView = () => (
    <div className="grid grid-cols-7 gap-1">
      {days.map(day => (
        <div key={day} className="text-center text-xs font-medium">{day}</div>
      ))}
      {calendarDays.map((day, index) => (
        <div 
          key={index} 
          className={`text-center text-xs p-1 
            ${day.getMonth() !== currentDate.getMonth() ? 'text-gray-500' : 
              (day.getDay() === 0 || day.getDay() === 6) ? 'text-teal-400' : 'text-white'}
            ${day.toDateString() === new Date().toDateString() ? 'bg-teal-600 rounded' : ''}`}
        >
          {day.getDate()}
        </div>
      ))}
    </div>
  );

  const renderWeekView = () => {
    const weekStart = new Date(currentDate);
    weekStart.setDate(currentDate.getDate() - currentDate.getDay());
    const week = Array.from({ length: 7 }, (_, i) => {
      const day = new Date(weekStart);
      day.setDate(weekStart.getDate() + i);
      return day;
    });

    return (
      <div className="grid grid-cols-7 gap-2">
        {days.map(day => (
          <div key={day} className="text-center text-sm font-medium">{day}</div>
        ))}
        {week.map((day, index) => (
          <div 
            key={index} 
            className={`text-center p-2 border border-gray-700
              ${day.toDateString() === new Date().toDateString() ? 'bg-teal-600 rounded' : ''}`}
          >
            <div className="font-bold">{day.getDate()}</div>
            <div className="text-xs mt-1">Event</div>
          </div>
        ))}
      </div>
    );
  };

  const renderDayView = () => {
    const hours = Array.from({ length: 24 }, (_, i) => i);

    return (
      <div className="grid grid-cols-1 gap-1">
        <div className="text-center font-bold mb-2">
          {currentDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
        {hours.map(hour => (
          <div key={hour} className="flex items-center border-t border-gray-700 py-2">
            <div className="w-16 text-right pr-2 text-sm">{`${hour}:00`}</div>
            <div className="flex-grow bg-gray-800 h-8 rounded"></div>
          </div>
        ))}
      </div>
    );
  };

  const renderListView = () => {
    const events = [
      { date: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 10, 0), title: "Meeting with team" },
      { date: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 14, 30), title: "Project review" },
      { date: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1, 11, 0), title: "Client call" },
    ];

    return (
      <div className="space-y-2">
        {events.map((event, index) => (
          <div key={index} className="flex items-center bg-gray-800 p-2 rounded">
            <div className="w-32 text-sm">
              {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
            </div>
            <div className="flex-grow">{event.title}</div>
          </div>
        ))}
      </div>
    );
  };

  const renderView = () => {
    switch(currentView) {
      case 'month': return renderMonthView();
      case 'week': return renderWeekView();
      case 'day': return renderDayView();
      case 'list': return renderListView();
      default: return renderMonthView();
    }
  };

  return (
    <div className="w-full rounded-lg shadow-lg min-w-[350px]  mx-auto max-h-[380px] overflow-y-auto text-white">
      <p className='w-full text-center bg-[#076B6D] rounded-t-md py-2'>My Calendar</p>
      <div className="flex justify-between bg-gray-900  items-center px-4 py-2 ">
        <div className="flex space-x-2 px-1">
          <button onClick={() => changeDate(-1)} className="p-1 rounded bg-teal-700"><FaChevronLeft size={20} /></button>
          <button onClick={() => changeDate(1)} className="p-1 rounded bg-teal-700"><FaChevronRight size={20} /></button>
          <button onClick={() => setCurrentDate(new Date())} className="px-3 py-1 rounded bg-teal-500">Today</button>
        </div>
        {/* <span className="text-xs px-1">{formatDateRange()}</span> */}
        <div className="flex space-x-1 text-xs">
          {['month', 'week', 'day', 'list'].map(view => (
            <button 
              key={view} 
              className={`px-2  py-1 rounded ${currentView === view ? 'bg-teal-500' : 'bg-teal-700'}`}
              onClick={() => setCurrentView(view)}
            >
              {view}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-gray-900 py-2 px-4">
        <div className='flex items-center justify-between my-1'>
          <h3 className="text-xl font-semibold ">{currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h3>
          <p className="text-xs px-1">{formatDateRange()}</p>
        </div>
        {renderView()}
      </div>
    </div>
  );
};

export default MyCalendar;