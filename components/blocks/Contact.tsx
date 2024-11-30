'use client'

import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Label } from '@radix-ui/react-label'
import { Button } from '../ui/button'
import { Card, CardHeader, CardContent, CardFooter } from '../ui/card'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { BlurFade } from '../animation/BlurFade'

const formSchema = z.object({
    name: z.string().min(1, { message: "Le nom est obligatoire" }),
    email: z.string().email({ message: "Email invalide" }),
    phone: z.string().optional(),
    message: z.string().min(30, { message: "Le message doit contenir au moins 30 caractères" })
        .max(2000, { message: "Le message ne doit pas dépasser 2000 caractères" }),
})

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

    const { register, handleSubmit, reset, trigger, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(formSchema)
    })

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error('Erreur lors de l\'envoi de l\'email')
            setSubmitStatus('success');
            reset();
        } catch (error) {
            console.error('Erreur lors de l\'envoi de l\'email:', error)
            setSubmitStatus('error')
        }
        setIsSubmitting(false);
    };

    const renderInputField = (id: keyof FormData, label: string, type: string = "text", isRequired: boolean = false) => (
        <div>
            <Label htmlFor={id}>{label} {isRequired && '*'}</Label>
            <Input
                id={id}
                type={type}
                {...register(id)}
                className="w-full mt-1"
                onBlur={() => trigger(id)} // Force revalidation on blur
            />
            {errors[id] && <p className="text-destructive text-sm mt-1">{errors[id]?.message as React.ReactNode}</p>}
        </div>
    );

    return (
        <BlurFade>
            <div className="w-full px-4 md:px-0 md:max-w-4xl mx-auto mt-16">
                <Card className="w-full">
                    <CardHeader />
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {renderInputField('name', 'Nom', 'text', true)}
                            {renderInputField('email', 'Email', 'email', true)}
                            {renderInputField('phone', 'Téléphone', 'tel')}
                            <div>
                                <Label htmlFor="message">Message *</Label>
                                <Textarea id="message" {...register('message')} className="w-full mt-1 h-32" onBlur={() => trigger('message')} />
                                {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message as React.ReactNode}</p>}
                            </div>
                            <div className="flex justify-end">
                                <Button type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter>
                        {submitStatus === 'success' && (
                            <p className="text-green-600 text-center w-full">Message envoyé avec succès!</p>
                        )}
                        {submitStatus === 'error' && (
                            <p className="text-destructive text-center w-full">Une erreur est survenue. Veuillez réessayer.</p>
                        )}
                    </CardFooter>
                </Card>
            </div>
        </BlurFade>
    )
}