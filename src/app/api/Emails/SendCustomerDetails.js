import { Resend } from 'resend';
import { EmailTemplate } from '@/components/CxDetailsemailtemplate'
import { NextResponse } from 'next/server';

const resend = new Resend('re_h6qZfmqA_MaDkAZMSdSnaSYApGANsg5TG');

async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["fernandzva2019@outlook.es"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "Fernando" }),
      text: "",
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export { POST };