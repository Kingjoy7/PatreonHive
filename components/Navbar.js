"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [showdropdown, setshowdropdown] = useState(false);

  return (
    <nav className="bg-gray-900 text-white h-16 flex justify-between items-center px-4 sm:px-6 lg:px-8 w-full">
      <div className="flex items-center gap-3">
        <Image src="/chai.gif" width={26} height={26} alt="tea" className="rounded-full" />
        <Link href="/">
          <span className="logo font-bold text-lg font-serif cursor-pointer">PatreonHive</span>
        </Link>
      </div>

      <div className="relative flex items-center space-x-2">
        {session && (
          <>
            <button
              onClick={() => setshowdropdown(!showdropdown)}
              onBlur={() => setTimeout(() => setshowdropdown(false), 100)}
              className="text-white bg-blue-700 font-serif font-bold hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xs sm:text-sm md:text-base px-2 sm:px-4 py-1.5 sm:py-2 text-center inline-flex flex-wrap items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 overflow-hidden truncate"
            >
              Welcome <br />
              {session.user.email.split('@')[0]}
              <svg
                className="w-2.5 h-2.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              className={`z-10 ${showdropdown ? "" : "hidden"} absolute top-14 right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
            >
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <button
                    onMouseDown={() => router.push("/dashboard")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </button>
                </li>
                <li>
                  <button
                    onMouseDown={() => router.push(`/${session.user?.name || "profile"}`)}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Your Page
                  </button>
                </li>
                <li>
                  <Link
                    href="#"
                    onMouseDown={() => signOut()}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
            <button
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={() => signOut()}
            >
              Logout
            </button>
          </>
        )}

        {!session && (
          <Link href="/login">
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
