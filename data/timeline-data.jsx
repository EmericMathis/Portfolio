import { TypographyBlockquote } from "@/components/typography/TypographyBlockquote";
import { TypographyLead } from "@/components/typography/TypographyLead";
import { TypographyList } from "@/components/typography/TypographyList";
import { TypographyP } from "@/components/typography/TypographyP";

const data = [
  {
    title: "sept.2024 - aujourd’hui",
    content: (
      <>
        <TypographyLead className="pb-0">Développeur web freelance</TypographyLead>
        <TypographyBlockquote className="mt-0">Auto-entrepreneur</TypographyBlockquote>
        <TypographyP>Mon activité principale, que je décris sur ce site !</TypographyP>
        <TypographyP>Je travaille pour des clients variés, en direct ou en sous-traitance pour des agences.</TypographyP>
      </>
    ),
  },
  {
    title: "sept.2021 - sept.2024",
    content: (
      <>
        <TypographyLead>Concepteur développeur d'applications</TypographyLead>
        <TypographyBlockquote className="mt-0">Alt | incubateur Tech · apprentissage par immersion</TypographyBlockquote>
        <TypographyP>Apprentissage par immersion dans une entreprise de développement web, qui me fait travailler en conditions réelles dans une équipe de développeurs, sur un projet fullstack dans une architecture micro-services.</TypographyP>

        <div className="flex flex-wrap lg:flex-row flex-col">
          <div className="flex-1 p-2">
            <TypographyP className="font-bold">Front-end :</TypographyP>
            <TypographyList items={[
              "React",
              "React-router-dom",
              "TailwindCSS",
              "Material-tailwind",
              "Tests E2E avec cypress",
              "Formik & Yup",
              "Zustand",
            ]} />
          </div>

          <div className="flex-1 p-2">
            <TypographyP className="font-bold">Back-end :</TypographyP>
            <TypographyList items={[
              "Nest.js",
              "Prisma",
              "MariaDB",
              "PHPmyadmin",
              "JWT",
              "Tests unitaires avec Jest",
              "Bcrypt",
            ]} />
          </div>

          <div className="flex-1 p-2">
            <TypographyP className="font-bold">DevOps :</TypographyP>
            <TypographyList items={[
              "Docker",
              "Docker-compose",
              "GitLab CI/CD",
              "Postman",
              "Microservices",
              "AWS EC2"
            ]} />
          </div>
        </div>
      </>
    ),
  },
  {
    title: "mai 2023 - mai 2024",
    content: (
      <>
        <TypographyLead>Concepteur développeur d'applications</TypographyLead>
        <TypographyBlockquote className="mt-0">Alt | incubateur Tech · apprentissage par immersion</TypographyBlockquote>
        <TypographyP>Apprentissage par immersion dans une entreprise de développement web, qui me fait travailler en conditions réelles dans une équipe de développeurs, sur un projet fullstack dans une architecture micro-services.</TypographyP>

      </>
    ),
  },
  {
    title: "mars 2024 - avr. 2024",
    content: (
      <>
        <TypographyLead>Concepteur développeur d'applications</TypographyLead>
        <TypographyBlockquote className="mt-0">Alt | incubateur Tech · apprentissage par immersion</TypographyBlockquote>
        <TypographyP>Apprentissage par immersion dans une entreprise de développement web, qui me fait travailler en conditions réelles dans une équipe de développeurs, sur un projet fullstack dans une architecture micro-services.</TypographyP>

      </>
    ),
  },

];

export default data;