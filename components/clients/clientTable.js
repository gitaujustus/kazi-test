'use client'
import React, { useState, useEffect, useRef } from 'react';
import { SlOptionsVertical } from "react-icons/sl";
import { MdEditSquare } from "react-icons/md";
import { TiEye } from "react-icons/ti";
import Link from 'next/link';
import TableFooter from '../tablesFooter';

const ClientTable = ({ clients }) => {
  const [openMenuId, setOpenMenuId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const menuRef = useRef();
  const buttonRefs = useRef({});

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openMenuId !== null &&
          menuRef.current &&
          !menuRef.current.contains(event.target) &&
          !buttonRefs.current[openMenuId].contains(event.target)) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openMenuId]);

  const toggleMenu = (id) => {
    setOpenMenuId(prevId => prevId === id ? null : id);
  };


    // Calculate the indexes of the first and last entries on the current page
    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEntries = clients.slice(indexOfFirstEntry, indexOfLastEntry);
  


  return (
    <section className='rounded-lg overflow-x-auto'>
      <table className='w-full'>
        <thead className='bg-white p-4'>
          <tr>
            <th className='text-left px-4 py-2'><input type='checkbox'/></th>
            <th className='text-left px-4 py-2'>#</th>
            <th className='text-left px-4 py-2'>CompanyName</th>
            <th className='text-left px-4 py-2'>Status</th>
            <th className='text-left px-4 py-2'>Email</th>
            <th className='text-left px-4 py-2'>Created</th>
            <th className='text-left px-4 py-2'>Action</th>
          </tr>
        </thead>
        <tbody className='bg-[#172448] text-white'>
          {currentEntries.map((client) => (
            <tr key={client.id}>
              <td className='px-4 py-4'><input type="checkbox" /></td>
              <td className="px-4 py-4">{client.id}</td>
              <td className="px-4 py-4">{client.name}</td>
              <td className="px-4 py-4 flex items-center">
                        {client.status.toLowerCase() === 'active' && (
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                )}
                {client.status}
              </td>
              <td className="px-4 py-4">{client.email}</td>
              <td className="px-4 py-4">{client.created}</td>
              <td className="px-4 py-4 relative">
                <button 
                  ref={el => buttonRefs.current[client.id] = el}
                  className='bg-white text-black p-1 rounded-md'
                  onClick={() => toggleMenu(client.id)}
                >
                  <SlOptionsVertical />
                </button>
                {openMenuId === client.id && (
                  <div ref={menuRef} className="absolute right-16  w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <Link href="/admin/leads/profile" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"><TiEye size={22}/>View</Link>
                      <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"><MdEditSquare size={22}/>Edit</button>
                      <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"><TiEye size={22}/>Delete</button>
                    </div>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter 
        entriesPerPage={entriesPerPage}
        setEntriesPerPage={setEntriesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalEntries={clients.length}
        indexOfFirstEntry={indexOfFirstEntry}
        indexOfLastEntry={indexOfLastEntry}
      />
    </section>
  );
};

export default ClientTable;