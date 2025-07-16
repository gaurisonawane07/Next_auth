import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email:string,
    username: string,
    verifyCode: string
): Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from: '<onboarding@resend.dev>', 
            to: 'delivered@resend.dev',
            subject: 'next-auth verification code',
            react:VerificationEmail({username,otp:verifyCode}),
        });
        
        return {success:true,message:'Verification email sent successfully'}

    } catch (emailError: any) { 
        console.error("Error in sending verification email ", emailError); 
        return {success:false,message:'Failed to send verification email.'}
    }
}