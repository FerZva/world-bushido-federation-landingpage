import { Resend } from 'resend';

const resend = new Resend('re_h6qZfmqA_MaDkAZMSdSnaSYApGANsg5TG');

(async function () {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['delivered@resend.dev'],
    subject: 'New customer details',
    html: '<strong>It works!</strong>',
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();
