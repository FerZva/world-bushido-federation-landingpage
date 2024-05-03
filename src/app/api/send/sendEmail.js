"use server";
import { Resend } from 'resend';

const resend = new Resend('re_GGiVqEc4_2n2P9u2NMQLbqL2fqz1gVnYS')

export const sendEmail = async(formData) => {
    console.log("Running on server");
    console.log(formData.get("SenderEmail"));
    console.log(formData.get("Message"));

    const senderEmail = formData.get('senderEmail');
    const age = formData.get('age');
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const rank = formData.get('rank');
    const experience = formData.get('experience');
    const Referredfrom = formData.get('');

    const emailContent = `
        Hello there is a new customer suscribed with the following details
        Name: ${firstName} ${lastName},
        Age: ${age}
        Email: ${senderEmail}
        Rank: ${rank}
        Experience: ${experience}
        Referred from: ${Referredfrom}
    `;

    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'federationworldbushido@gmail.com',
        subject: 'message from contact form',
        text: emailContent
    })
}