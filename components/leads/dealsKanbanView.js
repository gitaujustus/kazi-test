// import React from 'react'
// import { SlOptionsVertical } from "react-icons/sl";

// function DealsKanBanView() {
//   return (
//     <section>
//         <div className="flex space-x-4 overflow-x-auto p-4 bg-white justify-between">
//       {/* Generated Card */}
//       <div className="bg-[#1e2749] rounded-lg p-4 min-w-60 w-64 h-80 flex flex-col">
//         <div className="flex justify-between items-center mb-4">
//           <div className="flex items-center">
//             <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
//             <span className="text-white text-sm font-medium">Generated</span>
//           </div>
//           <div className="flex items-center">
//             <span className="text-gray-400 text-xs mr-2">€120.00</span>
//             <SlOptionsVertical color='white' />
//           </div>
//         </div>
//         <div className="bg-white rounded-lg p-3 mb-4 flex-grow ">
//           <button className="text-gray-400 w-full h-full flex items-center justify-center gap-2">
//           <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M14 7.99805H8V13.998H6V7.99805H0V5.99805H6V-0.00195312H8V5.99805H14V7.99805Z" fill="#393A40"/>
//           </svg>
//             <span>Add Deal</span>
//           </button>
//         </div>
//       </div>

//       {/* Qualified Card */}
//       <div className="bg-[#1e2749] rounded-lg p-4 min-w-60 w-64 h-80 flex flex-col">
//         <div className="flex justify-between items-center mb-4">
//           <div className="flex items-center">
//             <div className="w-3 h-3 rounded-full bg-blue-400 mr-2"></div>
//             <span className="text-white text-sm font-medium">Qualified</span>
//           </div>
//           <div className="flex items-center">
//             <span className="text-gray-400 text-xs mr-2">€450.00</span>
//             <SlOptionsVertical color='white' />
//           </div>
//         </div>
//         <div className="bg-white rounded-lg p-3 mb-4 flex-grow">
//           <button className="text-gray-400 w-full h-full flex items-center justify-center gap-2">
//           <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M14 7.99805H8V13.998H6V7.99805H0V5.99805H6V-0.00195312H8V5.99805H14V7.99805Z" fill="#393A40"/>
//           </svg>
//             <span>Add Deal</span>
//           </button>
//         </div>
//       </div>

//       {/* Initial Contact Card */}
//       <div className="bg-[#1e2749] rounded-lg p-4 min-w-60 w-64 h-80 flex flex-col">
//         <div className="flex justify-between items-center mb-4">
//           <div className="flex items-center">
//             <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
//             <span className="text-white text-sm font-medium">Initial Contact</span>
//           </div>
//           <div className="flex items-center">
//             <span className="text-gray-400 text-xs mr-2">€580.00</span>
//             <SlOptionsVertical color='white' />
//           </div>
//         </div>
//         <div className="bg-white rounded-lg p-3 mb-4 flex-grow">
//           <button className="text-gray-400 w-full h-full flex items-center justify-center gap-2">
//           <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M14 7.99805H8V13.998H6V7.99805H0V5.99805H6V-0.00195312H8V5.99805H14V7.99805Z" fill="#393A40"/>
//           </svg>
//             <span>Add Deal</span>
//           </button>
//         </div>
//       </div>

//       {/* Schedule Appointment Card */}
//       <div className="bg-[#1e2749] rounded-lg p-4 min-w-60 w-64 h-80 flex flex-col">
//         <div className="flex justify-between items-center mb-4">
//           <div className="flex items-center">
//             <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
//             <span className="text-white text-sm font-medium">Schedule&nbsp;Appointment</span>
//           </div>
//           <div className="flex items-center">
//             <span className="text-gray-400 text-xs mr-2">€370.00</span>
//             <SlOptionsVertical color='white' />
//           </div>
//         </div>
//         <div className="bg-white rounded-lg p-3 mb-4 flex-grow">
//           <button className="text-gray-400 w-full h-full flex items-center justify-center gap-2">
//           <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M14 7.99805H8V13.998H6V7.99805H0V5.99805H6V-0.00195312H8V5.99805H14V7.99805Z" fill="#393A40"/>
//           </svg>
//             <span>Add Deal</span>
//           </button>
//         </div>
//       </div>
//     </div>
//     </section>
//   )
// }

// export default DealsKanBanView
import React, { useState, useEffect, useRef } from 'react'
import { SlOptionsVertical } from "react-icons/sl";
import AddDealInfoForm from '../deals/addDealInfo';

function DealsKanBanView() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const[showDealInfoForm, setshowDealInfoForm]=useState(false);
  const importRef = useRef(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const cards = [
    { title: 'Generated', color: 'bg-yellow-400', amount: '€120.00' },
    { title: 'Qualified', color: 'bg-blue-400', amount: '€450.00' },
    { title: 'Initial Contact', color: 'bg-green-400', amount: '€580.00' },
    { title: 'Schedule Appointment', color: 'bg-red-400', amount: '€370.00' },
  ];

  // control the visibility of AddDealInfoForm form
  useEffect(() => {
    function handleClickOutside(event) {
      if (importRef.current && !importRef.current.contains(event.target)) {
        setshowDealInfoForm(false);
      }
    }
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section>
      <div className="flex space-x-4 overflow-x-auto p-4 bg-white justify-between">
        {cards.map((card, index) => (
          <div key={index} className="bg-[#1e2749] rounded-lg p-4 min-w-60 w-64 h-80 flex flex-col relative">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${card.color} mr-2`}></div>
                <span className="text-white text-sm font-medium">{card.title}</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-400 text-xs mr-2">{card.amount}</span>
                <button onClick={() => toggleDropdown(index)}>
                  <SlOptionsVertical color='white' />
                </button>
              </div>
            </div>
            {activeDropdown === index && (
              <div className="absolute right-2 top-10 bg-white rounded-md shadow-lg z-2">
                <button onClick={()=> setshowDealInfoForm(true)} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Add Deal
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Edit
                </button>
              </div>
            )}
            <div className="bg-white rounded-lg p-3 mb-4 flex-grow">
              <button className="text-gray-400 w-full h-full flex items-center justify-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 7.99805H8V13.998H6V7.99805H0V5.99805H6V-0.00195312H8V5.99805H14V7.99805Z" fill="#393A40"/>
                </svg>
                <span>Add Deal</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <section 
        ref={importRef}
        className={`flex-1 fixed top-0 right-0 h-full w-[90vw] bg-[#172448] p-10 transition-transform duration-300 ease-in-out transform ${
          showDealInfoForm ? 'translate-x-0' : 'translate-x-full'
        }  overflow-y-auto`}
      >
        <AddDealInfoForm/>
        </section>
    </section>
  )
}

export default DealsKanBanView