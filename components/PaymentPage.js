"use client"
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { useSession } from 'next-auth/react'
import { fetchuser, initiate, fetchpayments } from '@/actions/userinteractions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

const PaymentPage = ({ username }) => {
    const { data: session } = useSession()
    const [paymentform, setPaymentForm] = useState({})
    const [currentUser, setcurrentUser] = useState({})
    const [payments, setPayments] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()
    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (searchParams.get("paymentdone") == "true") {
            toast('🦄 Payment Successful!', {
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
        }
        setTimeout(() => {
            router.push(`/${username}`)
        }, 5000)
    }, [])

    const handleChange = (e) => {
        setPaymentForm({ ...paymentform, [e.target.name]: e.target.value })
    }
    const getData = async (params) => {
        let u = await fetchuser(username)
        setcurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)
    }
    const pay = async (amount) => {
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key": process.env.NEXT_PUBLIC_KEY_ID,
            "amount": amount,
            "currency": "INR",
            "name": "KingJoy",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId,
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": {
                "name": "Sujoy Sen",
                "email": "sujoysenmail@gmail.com",
                "contact": "8104680815"
            },
            "notes": {
                "address": "Mumbai"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }
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
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
            <div className='cover w-full bg-red-50 relative flex justify-center items-center'>
                <div className='absolute top-20 right-[45%] rounded-full overflow-auto border-white border-1'>
                </div>
            </div>
            <div className="info flex flex-col justify-center items-center text-white my-36 gap-2 px-4 sm:px-6 lg:px-8 text-center">
                <div className="font-bold text-xl break-words">@{username}</div>
                <div className="text-slate-400">Lets help {username} by donating!</div>
                <div className="text-slate-400">
                    {payments.length} Supporters | {currentUser.name} has raised ₹{payments.reduce((a, b) => a + b.amount, 0)} so far
                </div>

                <div className="payments flex flex-col lg:flex-row gap-8 w-full max-w-6xl mt-16">
                    {/* Supporters Section */}
                    <div className="supporters w-full lg:w-1/2 bg-slate-900 p-6 sm:p-10 rounded-lg">
                        <h2 className="font-bold font-sans text-xl sm:text-2xl my-5 px-2 sm:px-6">Supporters Leaderboard</h2>
                        <ul className="mx-2 sm:mx-6 text-base font-mono">
                            {payments.length === 0 && <li>No Payments Yet</li>}
                            {payments.map((p, i) => (
                                <li key={i} className="my-2 flex flex-col sm:flex-row items-center gap-3 text-left">
                                    <img className="border rounded-full" width={33} src="avatar.gif" alt="avatar" />
                                    <span>
                                        {p.name} donated <span className="font-bold">{p.amount}</span> with a message {p.message}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Payment Form */}
                    <div className="makePayment w-full lg:w-1/2 bg-slate-900 rounded-lg text-white p-6 sm:p-10">
                        <h2 className="font-bold text-2xl sm:text-3xl my-5">Make a Payment</h2>
                        <div className="flex gap-4 flex-col w-full">
                            <input type="text" className="w-full rounded-lg p-3 bg-slate-800" placeholder="Enter Name" onChange={handleChange} value={paymentform.name} name="name" />
                            <input type="text" className="w-full rounded-lg p-3 bg-slate-800" placeholder="Enter Message" onChange={handleChange} value={paymentform.message} name="message" />
                            <input type="text" className="w-full rounded-lg p-3 bg-slate-800" placeholder="Enter Amount" onChange={handleChange} value={paymentform.amount} name="amount" />
                            <button type="button" onClick={() => pay(Number.parseInt(paymentform.amount))} className="text-white bg-gradient-to-br from-purple-900 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 w-fit">
                                Pay
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-5">
                            <button className="rounded-lg p-3 bg-slate-800 hover:font-medium w-full sm:w-auto">Pay ₹10</button>
                            <button className="rounded-lg p-3 bg-slate-800 hover:font-medium w-full sm:w-auto">Pay ₹20</button>
                            <button className="rounded-lg p-3 bg-slate-800 hover:font-medium w-full sm:w-auto">Pay ₹30</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage
