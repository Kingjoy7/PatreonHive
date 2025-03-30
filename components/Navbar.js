"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from 'react'
const Navbar = () => {
    const router = useRouter();
    const { data: session } = useSession()
    const [showdropdown, setshowdropdown] = useState(false);
    // if (session) {
    //     return <>
    //         Signed in as {session.user.email} <br />
    //         <button onClick={() => signOut()}>Sign out</button>
    //     </>
    // }
    return (
        <nav className='bg-gray-900 text-white h-16 flex justify-between items-center px-4'>
            <div className='flex justify-center items-center gap-3'>
                <img src="chai.gif" width={26} alt="tea" />
                <a href="http://localhost:3000/">
                    <span className="logo font-bold text-lg font-sans cursor-pointer">Get me A Chai</span></a>
            </div>
            {/* <ul className='flex justify-center gap-4 px-4 text-lg cursor-pointer'>
                <li className='hover:font-bold'>Home</li>
                <li className='hover:font-bold'>About</li>
                <li className='hover:font-bold'>Projects</li>
                <li className='hover:font-bold'>Sign Up</li>
                <li className='hover:font-bold'>Login</li>
            </ul> */}
            <div className='relative'>
                {session && <> <button onClick={() => setshowdropdown(!showdropdown)} onBlur={() => {
                    setTimeout(() => {
                        setshowdropdown(false)
                    }, 100);
                }} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 font-serif font-bold hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2" type="button">Welcome {session.user.email} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">

                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>

                    <div id="dropdown" className={`z-10 ${showdropdown ? "" : "hidden"} absolute right-56 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <button onMouseDown={() => router.push("/dashboard")} className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    Dashboard
                                </button>

                            </li>
                            <li>
                                <button onMouseDown={() => router.push(`/${session.user?.name || "profile"}`)} className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    Your Page
                                </button>
                            </li>
                            <li>
                                <Link onMouseDown={() => signOut()} href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
                            </li>
                        </ul>
                    </div></>
                }
                {session && <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={() => { signOut() }}>Logout</button>}
                {!session && <Link href={"/login"}>
                    <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Login</button></Link>}

            </div>
        </nav>
    )
}

export default Navbar
