'use client'
import React, { useState, useEffect, useRef } from 'react';
import { SlOptionsVertical } from "react-icons/sl";
import { MdEditSquare } from "react-icons/md";
import { TiEye } from "react-icons/ti";
import Link from 'next/link';

const ContactsTable = ({ contacts }) => {
  const [openMenuId, setOpenMenuId] = useState(null);
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

  return (
    <section className='rounded-lg overflow-x-auto'>
      <table className='w-full'>
        <thead className='bg-white p-4'>
          <tr>
            <th className='text-left px-4 py-2'><input type='checkbox'/></th>
            <th className='text-left px-4 py-2'>ContactName</th>
            <th className='text-left px-4 py-2'>CompanyName</th>
            <th className='text-left px-4 py-2'>Email</th>
            <th className='text-left px-4 py-2'>AddedBy</th>
            <th className='text-left px-4 py-2'>Created</th>
            <th className='text-left px-4 py-2'>Action</th>
          </tr>
        </thead>
        <tbody className='bg-[#172448] text-white'>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td className='px-4 py-4'><input type="checkbox" /></td>
              <td className="px-4 py-4">
                {contact.name} 
                <p className='bg-[#3CDD64] w-10 rounded-md text-xs text-center'>client</p>
              </td>
              <td className="px-4 py-4">{contact.company}</td>
              <td className="px-4 py-4">{contact.email}</td>
              <td className="px-4 py-4">{contact.addedBy}</td>
              <td className="px-4 py-4">{contact.created}</td>
              <td className="px-4 py-4 relative">
                <button 
                  ref={el => buttonRefs.current[contact.id] = el}
                  className='bg-white text-black p-1 rounded-md'
                  onClick={() => toggleMenu(contact.id)}
                >
                  <SlOptionsVertical />
                </button>
                {openMenuId === contact.id && (
                  <div ref={menuRef} className="absolute right-16  w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <Link href="/admin/leads/leadscontact/profile" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"><TiEye size={22}/>View</Link>
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
    </section>
  );
};

export default ContactsTable;