import { NextResponse } from "next/server";
import connectDB from "@/db/connectdb";
import Razorpay from "razorpay";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";

export const POST = async (req) => {
    try {
        // Connect to the database
        await connectDB();

        // Parse form data
        let body = await req.formData();
        body = Object.fromEntries(body.entries());

        // Check if the order ID exists in the database
        let p = await Payment.findOne({ oid: body.razorpay_order_id });
        if (!p) {
            return NextResponse.json({ success: false, message: "Order ID not found" });
        }

        // Verify the payment signature
        let xx = validatePaymentVerification(
            {
                "order_id": body.razorpay_order_id,
                "payment_id": body.razorpay_payment_id,
            },
            body.razorpay_signature,
            process.env.KEY_SECRET
        );

        if (xx) {
            // Update payment status
            const updatedPayment = await Payment.findOneAndUpdate(
                { oid: body.razorpay_order_id },
                { done: "true" },
                { new: true }
            );

            // Redirect to success page
            return NextResponse.redirect(
                `${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`
            )
        } else {
            return NextResponse.json({ success: false, message: "Payment verification failed" });
        }
    } catch (error) {
        console.error("Payment verification error:", error);
        return NextResponse.json({ success: false, message: "Server error" });
    }
};