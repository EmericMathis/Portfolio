import * as React from 'react';

interface EmailTemplateProps {
    email: string;
    subject: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    email,
    subject,
    message,
}) => (
    <div>
        <h1>Subject: {subject}</h1>
        <h2>From: {email}</h2>
        <p>{message}</p>
    </div>
);