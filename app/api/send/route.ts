import { NextRequest, NextResponse } from 'next/server';
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export async function POST(req: NextRequest) {
    try {
        const { name, email, phone, message } = await req.json();
        console.log('Données reçues:', { name, email, phone, message });

        const mailOptions = {
            from: 'contact@emericmathis.com',
            to: 'contact@emericmathis.com',
            subject: 'Nouveau message de contact',
            text: `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\n\nMessage:\n${message}`,
        };

        const info = await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email envoyé avec succès', info }, { status: 200 });
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 });
    }
}

export async function GET() {
    return NextResponse.json({ error: 'Méthode non autorisée' }, { status: 405 });
}