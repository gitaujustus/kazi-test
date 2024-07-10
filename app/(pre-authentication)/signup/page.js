import Navbar from '@/components/navigations/navigations'
import Button from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Signup() {
  return (
    <main className='flex justify-center items-center min-h-screen dark:bg-[#112C6F]'>
        <section className='bg-slate-300 mx-2  lg:w-3/4 md:w-[90vw] sm:w-[95vw] w-full flex md:mx-auto min-h-[70vh] rounded-md'>
            <form className='w-full sm:w-1/2 p-3 dark:bg-gradient-to-r from-[#080D27] to-[#141E5B]'>
                <h1 className='text-center text-xl md:text-3xl font-semibold py-3'>Sign Up</h1>
                <div className='my-4'>
                    <label htmlFor="companyName">Company Name</label>
                    <input type="text" name="companyName" className='p-2 rounded-md w-full dark:bg-gray-100 dark:text-gray-800' placeholder='Company Name' id="companyName" />
                </div>
                <div className='my-4'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" className='p-2 rounded-md w-full dark:bg-gray-100 dark:text-gray-800' placeholder='Name' id="name" />
                </div>
                <div className='my-4'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" className='p-2 rounded-md w-full dark:bg-gray-100 dark:text-gray-800 ' placeholder='Email' id="email" />
                </div>
                <div className='flex gap-2 my-4'>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className='p-2 rounded-md w-full dark:bg-gray-100 dark:text-gray-800' placeholder='Password' id="password" />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword">Confirm&nbsp;Password</label>
                        <input type="password" name="confirmPassword" className='p-2 rounded-md w-full dark:bg-gray-100 dark:text-gray-800' placeholder='Confirm Password' id="confirmPassword" />
                    </div>
                </div>
                <Button title="Sign Up" loading={false}/>
            </form>
            <div className='bg-[#172448] dark:bg-[#000000] w-1/2 hidden sm:flex rounded-e-md'>
                <Image width={2560} height={700} className='object-cover h-full'  src="/assets/5.png" alt="" />
            </div>
        </section>
    </main>
  )
}

export default Signup