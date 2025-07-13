"use client";
import React, { useEffect, useState } from 'react';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { fetchuser, updateProfile } from '@/actions/userinteractions';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const { data: session } = useSession();
  const [form, setForm] = useState({});
  const router = useRouter();

  useEffect(() => {
    document.title = "Dashboard - PatreonHive";
    if (!session) {
      router.push('/login');
    } else {
      getData();
    }
  }, [session, router]);

  const getData = async () => {
    const u = await fetchuser(session.user.name);
    setForm(u);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    const a = await updateProfile(e, session.user.name);
    toast('🦄 Profile Updated!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };


  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <form action={handleSubmit}>
  <div className="flex flex-col items-center justify-center gap-4 px-4 sm:px-12 md:px-32 lg:px-48 xl:px-96">
    <h2 className="text-2xl sm:text-3xl text-center font-bold my-5">Welcome to your Dashboard</h2>

    {[
      { name: "name", placeholder: "Enter Name" },
      { name: "email", placeholder: "Enter Email" },
      { name: "username", placeholder: "Enter Username" },
      { name: "razorpayid", placeholder: "Enter Razorpay Id" },
      { name: "razorpaykey", placeholder: "Enter Razorpay Key" },
      { name: "rupay", placeholder: "Enter Rupay Credentials" },
    ].map((field) => (
      <input
        key={field.name}
        type="text"
        name={field.name}
        value={form[field.name] || ""}
        onChange={handleChange}
        className="w-full rounded-lg p-3 bg-slate-800"
        placeholder={field.placeholder}
      />
    ))}

    <button
      type="submit"
      className="text-white bg-gradient-to-br from-purple-900 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full"
    >
      Save
    </button>
  </div>
</form>

    </>
  );
};

export default Dashboard;
