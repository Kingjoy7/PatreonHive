"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Dashboard = () => {
    const { data: session } = useSession()
    const router = useRouter()

    React.useEffect(() => {
        if (!session) {
            router.push('/login')
        }
    }, [session, router])

    return (
        <div className='flex flex-col items-center justify-center gap-4 mx-96'>
            <h2 className='text-3xl text-center font-bold my-5'>Welcome to your Dashboard</h2>
            <input type="text" className='w-full rounded-lg p-3 bg-slate-800' placeholder='Enter Name' />
            <input type="text" className='w-full rounded-lg p-3 bg-slate-800' placeholder='Enter Email' />
            <input type="text" className='w-full rounded-lg p-3 bg-slate-800' placeholder='Enter Username' />
            <input type="text" className='w-full rounded-lg p-3 bg-slate-800' placeholder='Enter Public Picture' />
            <input type="text" className='w-full rounded-lg p-3 bg-slate-800' placeholder='Enter Cover Picture' />
            <input type="text" className='w-full rounded-lg p-3 bg-slate-800' placeholder='Enter Razorpay Id' />
            <input type="text" className='w-full rounded-lg p-3 bg-slate-800' placeholder='Enter Razorpay Key' />
            <input type="text" className='w-full rounded-lg p-3 bg-slate-800' placeholder='Enter Rupay Credentials' />
            <button type="button" className="text-white bg-gradient-to-br from-purple-900 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full">Save</button>
        </div>
    )
}

export default Dashboard
