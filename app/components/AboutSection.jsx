/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import { useTranslation } from "react-i18next";
import Eye from "./eye/Eye";



const AboutSection = () => {

    const { t } = useTranslation('about')

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
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 mb-auto">
                <div className="w-full h-64 md:h-96 lg:h-128 flex flex-col space-y-10">
                    <h3 className="text-2xl max-sm:text-xl font-bold text-white mx-5">{t('eye-title')}</h3>
                    <div ><Eye className="mx-auto" /></div>
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">{t('about me')}</h2>
                    <p className="text-base lg:text-lg">
                        {t('description')}
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            {t('education')}{" "}
                        </TabButton>
                    </div>
                    <div className="mt-1 max-h-16">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;