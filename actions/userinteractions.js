"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectdb"
import User from "@/models/User"

export const initiate=async(amount,to_username,paymentform)=>{
    await connectDB()
    var instance=new Razorpay({key_id:process.env.KEY_ID,key_secret:process.env.KEY_SECRET})

    let options={
        amount: Number.parseInt(amount)*100,
        currency: "INR",
    }
    let x=await instance.orders.create(options);
    //create a payment object that shows a pending order
    let payment=await Payment.create({oid:x.id,amount:amount,from_username:paymentform.username,to_username:to_username,name:paymentform.name,message:paymentform.message})
    return x
}