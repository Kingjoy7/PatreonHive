import React from 'react'

const Username = ({ params }) => {
  return (
    <>
      <div className='cover w-full bg-red-50 relative flex justify-center items-center'>
        <div className='absolute top-20 right-[45%] rounded-full overflow-auto border-white border-1'>

        </div>
      </div>
      <div className="info flex flex-col justify-center items-center text-white my-36 gap-2">
        <div className='font-bold text-xl'>
          @{params.username}
        </div>
        <div className='text-slate-400'>
          Creating Animated art for VTT's
        </div>
        <div className='text-slate-400'>
          15,682 members . 94 posts . $15,950/release
        </div>
        <div className="payments flex gap-3 w-[80%] mt-16">
          <div className="supporters w-1/2 bg-slate-900 p-10">
            <h2 className='font-bold font-sans text-2xl my-5'>Supporters</h2>
            <ul className='mx-6 text-lg font-mono'>
              <li className='my-2 flex items-center gap-3'>
                <img className='border rounded-full' width={33} src="avatar.gif" alt="avatar" />
                <span>
                Shubham donated <span className='font-bold'>$30</span> with a message "I support you bro. Lots of ❤"
                </span>
              </li>
              <li className='my-2 flex items-center gap-3'>
                <img className='border rounded-full' width={33} src="avatar.gif" alt="avatar" />
                <span>
                Shubham donated <span className='font-bold'>$30</span> with a message "I support you bro. Lots of ❤"
                </span>
              </li>
              <li className='my-2 flex items-center gap-3'>
                <img className='border rounded-full' width={33} src="avatar.gif" alt="avatar" />
                <span>
                Shubham donated <span className='font-bold'>$30</span> with a message "I support you bro. Lots of ❤"
                </span>
              </li>
            </ul>
          </div>
          <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
            <h2 className='font-bold text-3xl text-white my-5'>Make a Payment</h2>
            <div className='flex gap-3 flex-col '>
              {/* input for name and message */}   
              <input type="text" className='w-full rounded-lg p-3 bg-slate-800' placeholder='Enter Name' />
              <input type="text" className='w-full rounded-lg p-3 bg-slate-800' placeholder='Enter Message' />
              <input type="text" className='w-full rounded-lg p-3 bg-slate-800' placeholder='Enter Amount' />
              <button type="button" class="text-white bg-gradient-to-br from-purple-900 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-fit">Pay</button>
            </div>
            <div className='flex gap-4 mt-5'>
              <button className=' rounded-lg p-3 bg-slate-800 hover:font-medium'>Pay $10</button>
              <button className=' rounded-lg p-3 bg-slate-800 hover:font-medium'>Pay $20</button>
              <button className=' rounded-lg p-3 bg-slate-800 hover:font-medium'>Pay $30</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Username
