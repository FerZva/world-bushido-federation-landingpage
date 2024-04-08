import { Resend } from 'resend';
import { CxDetailsemailtemplate } from '@/components/CxDetailsemailtemplate'
import { NextResponse } from 'next/server';

const resend = new Resend('re_h6qZfmqA_MaDkAZMSdSnaSYApGANsg5TG')

export async function POST() {
    try { 
        const data = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: ["fernandzva2019@outlook.com"],
            subject: "New purchase and customer details",
            react: CxDetailsemailtemplate({firstName: "Pablo"}),
            text: "New purchase and customer details"
        })
        console.log(data)
        return NextResponse.json({message: "Email Sent"}), {
            status: 200,
        }
    } catch (error) {
        return NextResponse.json({message: "Error"}, {
            status: 500,
        })
    }
}