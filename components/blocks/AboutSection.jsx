/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useTransition, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
    const { t } = useTranslation('about');

    const TAB_DATA = [
        {
            title: "Skills",
            id: "skills",
            content: (
                <ul className="list-disc pl-2">
                    <li>React & Next.js</li>
                    <li>JavaScript, Node.js</li>
                    <li>Wordpress & php</li>
                    <li>Express.js</li>
                    <li>PostgreSQL, Sequelize</li>
                </ul>
            ),
        },
        {
            title: "Education",
            id: "education",
            content: (
                <ul className="list-disc pl-2">
                    <li>{t('education-1')}</li>
                    <li>{t('education-2')}</li>
                </ul>
            ),
        },
    ];

    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white" id="about">
            <h2 className="text-4xl font-bold text-white mb-4">{t('about me')}</h2>
            <p className="text-base lg:text-lg">
                {t('description')}
            </p>
            <Tabs value={tab} onValueChange={handleTabChange} className="mt-8 h-48">
                <TabsList>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="education">{t('education')}</TabsTrigger>
                </TabsList>
                <TabsContent value="skills">
                    {TAB_DATA.find((t) => t.id === "skills").content}
                </TabsContent>
                <TabsContent value="education">
                    {TAB_DATA.find((t) => t.id === "education").content}
                </TabsContent>
            </Tabs>
        </section>
    );
};

export default AboutSection;