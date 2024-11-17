import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const { name, email, phone, message } = await req.json();
        console.log('Données reçues:', { name, email, phone, message });

        const { data, error } = await resend.emails.send({
            from: 'contact@emericmathis.com',
            to: ['contact@emericmathis.com'],
            subject: 'Nouveau message de contact',
            text: `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\n\n Message: \n ${message}`,
        });

        if (error) return NextResponse.json(error, { status: 400 })

        return NextResponse.json(data, { status: 200 });
    } catch (error) { return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 }) }
}

export async function GET() {
    return NextResponse.json({ error: 'Méthode non autorisée' }, { status: 405 });
}