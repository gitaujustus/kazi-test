// import React from 'react'
// import Link from "next/link";
// import { NotificationIcon, SendIcon } from '@/components/svg/icons';

// const EmailInvite = () => {
//   return (
//     <div className='mx-5 sm:mx-20 md:mx-44 bg-white rounded-lg py-3 '>
//         <h1 className='text-2xl text-center font-semibold pb-8'>Invite Employees to Hillgan innnovations</h1>
//         <div className='flex gap-8 ml-10'>
//             <Link href='#'>Invite By Email</Link>
//             <Link href='#' >Invite By Link</Link>
//         </div>
//         <hr />
//         <div className='flex items-center gap-2 bg-[#FEF2CC]  px-2 py-2 rounded-lg ml-10 my-4 mr-3'>
//             <NotificationIcon/>
//             <p className='text-sm md:text-md'>Employees will receive an email to log in and update their profile through the self-service portal</p>
//         </div>
//        <form action="">
//             <div  className='flex flex-col pl-10 pr-3'>
//                     <label htmlFor="">Email*</label>
//                     <input type="email" placeholder='e.g johndoe@example.com' className='border px-2 border-gray-400 rounded-lg py-1' />
//             </div>
            
//             <div className='flex flex-col pl-10 py-3 pr-3'>
//                     <label htmlFor="">Message</label>
//                     <textarea rows={3} name="message" placeholder='AddMessage(Optional)' id="message" className='border border-gray-400 rounded-lg p-2' ></textarea>
//             </div>
//             <button className=' bg-[#3D50FC] text-white flex items-center gap-2 ml-10 p-2 rounded-lg'>
//            <SendIcon/>
//             Send Invite
//         </button>
//        </form>
//     </div>
//   )
// }

// export default EmailInvite

import React, { useState } from 'react'
import Link from "next/link";
import { ArtIcon, Linkicon, NotificationIcon, SendIcon } from '@/components/ui/svg/icons';

const InviteEmployees = () => {
  const [inviteMethod, setInviteMethod] = useState('email');

  return (
    <div className='mx-5 sm:mx-20 md:mx-44 bg-white rounded-lg py-3 px-2 md:w-[70vw]'>
      <h1 className='text-2xl text-center font-semibold pb-8'>Invite Employees to Hillgan innovations</h1>
      <div className='flex gap-8 ml-10'>
        <button 
          onClick={() => setInviteMethod('email')}
          className={inviteMethod === 'email' ? 'border-b-2 border-red-600 font-semibold' : ''}
        >
          Invite By Email
        </button>
        <button 
          onClick={() => setInviteMethod('link')}
          className={inviteMethod === 'link' ? ' border-b-2 border-red-600 font-semibold' : ''}
        >
          Invite By Link
        </button>
      </div>
      <hr />
      
      {inviteMethod === 'email' ? (
        <>
         <div className='px-3 md:px-7'>
         <div className='flex items-center gap-2 bg-[#FEF2CC]  px-2 py-2 rounded-lg  my-4 mr-3'>
            <NotificationIcon/>
            <p className='text-sm md:text-md'>Employees will receive an email to log in and update their profile through the self-service portal</p>
          </div>
          <form action="">
            <div  className='flex flex-col  pr-3'>
              <label htmlFor="">Email<span className='text-red-500'>*</span></label>
              <input type="email" placeholder='e.g johndoe@example.com' className='border px-2 border-gray-400 rounded-lg py-1' />
            </div>
            
            <div className='flex flex-col  py-3 pr-3'>
              <label htmlFor="">Message</label>
              <textarea rows={3} name="message" placeholder='AddMessage(Optional)' id="message" className='border border-gray-400 rounded-lg p-2' ></textarea>
            </div>
            <button className='bg-[#3D50FC] text-white flex items-center gap-2  p-2 rounded-lg'>
              <SendIcon/>
              Send Invite
            </button>
          </form>
         </div>
        </>
      ) : (
        <>
        <div className='px-3 md:px-7'>
        <p className='py-3'>Create an invite link for members to join</p>
          <form action="" >
                    <p className=''>Email<span className='text-red-500'>*</span></p>
                    <div className='flex gap-2'>
                        <input type="radio" />
                        <label htmlFor="">Allow any email address</label>
                    </div>
                    <div className='flex gap-2'>
                        <input type="radio" />
                        <label htmlFor="">Only allow email address with domain</label>
                    </div>
                    <div className='flex py-3'>
                        <button className='p-2 bg-[#172448] rounded-l-lg'>
                        <ArtIcon/>
                        </button>
                        <input type="email" placeholder='hillganinnovations.co.ke' className='py-2 px-1 w-full rounded-r-lg border border-gray-400'/>
                    </div>
                    
                    <button className=' bg-[#3D50FC] text-white flex items-center p-2 rounded-lg ml-10 mt-12 '>
                     <Linkicon/>
                        Create Link
                    </button>
          </form>
        </div>
        </>
      )}
    </div>
  )
}

export default InviteEmployees

