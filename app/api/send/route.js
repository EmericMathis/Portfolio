import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  try {
    const { email, subject, message, lang } = await req.json();
    console.log(email, subject, message);

    const messages = {
      en: {
        thanks: "Thank you for contacting me!",
        response: "I will respond as soon as possible.",
        submitted: "Message submitted:"
      },
      fr: {
        thanks: "Merci de m'avoir contacté !",
        response: "Je vous répondrai dès que possible.",
        submitted: "Message envoyé:"
      }
    };

    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <p>{messages[lang].thanks}</p>
          <p>{messages[lang].response}</p>
          <p>{messages[lang].submitted}</p>
          <h1>{subject}</h1>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in POST:', error);
    return NextResponse.json({ error: error.message });
  }
}