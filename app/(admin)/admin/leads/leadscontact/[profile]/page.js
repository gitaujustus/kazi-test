import Link from 'next/link'
import React from 'react'
import MenuBar from '@/components/leads/leadsViewNav';
import { SlOptions } from "react-icons/sl";
import ActionButtonForProfile from '@/components/ui/ActionButtonForProfile';

function Profile({params}) {

    const Name="Mr Abraham Ruto"
    console.log(params.profile);  

  return (
    <main className='bg-[#C7C7C7] rounded-lg mx-2 md:mx-5 px-3 py-3 min-h-screen'>
        <h1 className='text-[#172448] my-4 text-2xl md:text-3xl font-semibold'>{Name}</h1>
       <MenuBar lead={params.profile}/>
       

        {/* profile */}
       <section className='mx-2 md:mx-4 rounded-lg bg-[#172448] my-5 min-h-[50vh]'>
       
        <div className='h-10 bg-white flex justify-between w-full rounded-t-lg  px-3 md:px-7 items-center'>
            <p className='text-[#172448] font-semibold'>Profile Info</p>
            <ActionButtonForProfile />
        </div>

        <table className='w-full text-white text-sm overflow-x-auto'>
            <tbody>
                <tr className='my-4'>
                    <td className='px-7 py-3'>Name</td>
                    <td className='px-7 py-3'>Justus</td>
                </tr>
                <tr className='my-4'>
                    <td className='px-7 py-3'>Email</td>
                    <td className='px-7 py-3'>example@email.com</td>
                </tr>
                <tr className='my-4'>
                    <td className='px-7 py-3'>Added By</td>
                    <td className='px-7 py-3'>Amon</td>
                </tr>
                <tr className='my-4'>
                    <td className='px-7 py-3'>Source</td>
                    <td className='px-7 py-3'>-</td>
                </tr>
                <tr className='my-4'>
                    <td className='px-7 py-3'>Lead Category</td>
                    <td className='px-7 py-3'>-</td>
                </tr>
                <tr className='my-4'>
                    <td className='px-7 py-3'>Company Name</td>
                    <td className='px-7 py-3'>-</td>
                </tr>
                <tr className='my-4'>
                    <td className='px-7 py-3'>Website</td>
                    <td className='px-7 py-3'>-</td>
                </tr>
                <tr className='my-4'>
                    <td className='px-7 py-3'>Mobile</td>
                    <td className='px-7 py-3'>07*********</td>
                </tr>
                <tr className='my-4'>
                    <td className='px-7 py-3'>Office Phone Number</td>
                    <td className='px-7 py-3'>-</td>
                </tr>
                <tr className='my-4'>
                    <td className='px-7 py-3'>Country</td>
                    <td className='px-7 py-3'>-</td>
                </tr>
                <tr className='my-4'>
                    <td className='px-7 py-3'>State</td>
                    <td className='px-7 py-3'>-</td>
                </tr>
                <tr className='my-4'>
                    <td className='px-7 py-3'>City</td>
                    <td className='px-7 py-3'>-</td>
                </tr>
                <tr className='my-4'>
                    <td className='px-7 py-3'>Postal Code</td>
                    <td className='px-7 py-3'>-</td>
                </tr>
                <tr className='my-4'>
                    <td className='px-7 py-3'>Address</td>
                    <td className='px-7 py-3'>-</td>
                </tr>
            </tbody>
        </table>
       </section>

    </main>
  )
}

export default Profile



