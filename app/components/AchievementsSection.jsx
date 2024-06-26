"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useTranslation } from 'react-i18next';



const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

function getYearsAndMonthsSince(date) {
  const now = new Date();
  let years = now.getFullYear() - date.getFullYear();
  let months = now.getMonth() - date.getMonth();

  if (months < 0 || (months === 0 && now.getDate() < date.getDate())) {
    years--;
    months += 12;
  }

  return `${years} years and ${months} months`;
}





const AchievementsSection = () => {


  const { t } = useTranslation('home');
  const Text = [
    t('Projects'),
    t('year of coding'),
    t('Hair'),
  ];

  const achievementsList = [
    {
      metric: Text[0],
      value: "3",
      postfix: "",
    },
    {
      metric: Text[1],
      value: getYearsAndMonthsSince(new Date(2023, 2, 3)),
    },
    {
      metric: Text[2],
      value: "0",
    },
  ];

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base text-center">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
