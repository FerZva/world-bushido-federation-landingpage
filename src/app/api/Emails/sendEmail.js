"use server";

import { Resend } from 'resend'

export const SendEmail = async(formData) => {
    console.log("Running on server");
    console.log(formData.get("SenderEmail"));
    console.log(formData.get("Message"));
}