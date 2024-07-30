"use client"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { SetStateAction, useState } from "react"
import { Textarea } from "./ui/textarea"

const ContactForm = () => {
    const [selectedValue, setSelectedValue] = useState<string>("Sélectionnez une option");

    const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };


    return (
        <>
            <Card>

                <CardHeader>
                    <CardTitle>Contact</CardTitle>
                    <CardDescription>Pour me recruter, demander des informations ou simplement discuter, n&apos;hésitez pas à me contacter !</CardDescription>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handlesubmit}>
                        <div className="grid w-full items-center gap-4">

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Nom</Label>
                                <Input id="name" placeholder="Votre nom et prénom" />
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="Votre email" />
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="sujet">Sujet</Label>
                                <Select onValueChange={(value: SetStateAction<string>) => setSelectedValue(value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Sélectionnez">{selectedValue}</SelectValue>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Recrutement">Recrutement</SelectItem>
                                        <SelectItem value="Information">Information</SelectItem>
                                        <SelectItem value="Autre">Autre</SelectItem>
                                    </SelectContent>
                                </Select>
                                <div className="flex flex-col space-y-1.5">
                                    <Textarea placeholder="Votre message" />
                                </div>
                                <div className="flex flex-row-reverse pt-2"><Button type="submit" >Envoyer</Button></div>
                            </div>

                        </div>
                    </form>
                </CardContent>

            </Card>
        </>
    );
};

export default ContactForm;