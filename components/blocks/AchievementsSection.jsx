"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from "@/components/ui/card";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), { ssr: false });

const getYearsAndMonthsSince = (date) => {
  const now = new Date();
  let years = now.getFullYear() - date.getFullYear();
  let months = now.getMonth() - date.getMonth();
  if (months < 0 || (months === 0 && now.getDate() < date.getDate())) {
    years--; months += 12;
  }
  return `${years} years and ${months} months`;
}

const AchievementsSection = () => {
  const { t } = useTranslation('home');
  const Text = [t('Projects'), t('year of coding'), t('Hair')];
  const achievementsList = [
    { metric: Text[0], value: "3", postfix: "" },
    { metric: Text[1], value: getYearsAndMonthsSince(new Date(2022, 1, 1)) },
    { metric: Text[2], value: "0" },
  ];

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <Card className="sm:border-[#33353F] sm:border rounded-md pt-8 pb-3 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <CardContent key={index} className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix}
              {loaded && (
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => ({ mass: 1, friction: 100, tensions: 140 * (index + 1) })}
                />
              )}
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base text-center">{achievement.metric}</p>
          </CardContent>
        ))}
      </Card>
    </div>
  );
};

export default AchievementsSection;