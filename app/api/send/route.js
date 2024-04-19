import { NextResponse } from "next/server";
import { Resend } from "resend";
import i18next from "i18next";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {

  try {
    const { email, subject, message } = await req.json();
    console.log(email, subject, message);

    const thankYouMessage = i18next.t('emailsection:thank you');
    const submittedMessage = i18next.t('emailsection:submitted');

    const emailContent = `
      <p>${thankYouMessage}</p>
      <p>${submittedMessage}</p>
      <h1>${subject}</h1>
      <p>${message}</p>
    `;

    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: emailContent,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in POST:', error);
    return NextResponse.json({ error: error.message });
  }
}