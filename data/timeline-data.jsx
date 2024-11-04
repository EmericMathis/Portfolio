import { TypographyBlockquote } from "@/components/typography/TypographyBlockquote";
import { TypographyLead } from "@/components/typography/TypographyLead";
import { TypographyList } from "@/components/typography/TypographyList";
import { TypographyP } from "@/components/typography/TypographyP";
import Link from "next/link";

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
        <TypographyLead>Concepteur développeur d&apos;applications</TypographyLead>
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
        <TypographyLead>Développeur web et web mobile</TypographyLead>
        <TypographyBlockquote className="mt-0">O&apos;clock · Centre de formation</TypographyBlockquote>
        <TypographyP>Formation fullstack spécialisée dans l&apos;accessibilité, j&apos;y ai appris énormément et c&apos;est de là que j&apos;ai développé un tel intérêt dans l&apos;accessibilité web.</TypographyP>
        <TypographyP>Les technologies que j&apos;ai apprises :</TypographyP>
        <div className="flex flex-wrap lg:flex-row flex-col">
          <div className="flex-1 p-2">
            <TypographyP className="font-bold">Front-end :</TypographyP>
            <TypographyList items={[
              "React",
              "React-router-dom",
              "Javascript",
              "HTML",
              "CSS & SASS",
            ]} />
          </div>

          <div className="flex-1 p-2">
            <TypographyP className="font-bold">Back-end :</TypographyP>
            <TypographyList items={[
              "Express.js",
              "Sequelize",
              "PostgreSQL",
              "Node.js",
              "JWT",
              "Bcrypt",
            ]} />
          </div>
        </div>
      </>
    ),
  },
  {
    title: "mars 2024 - avr. 2024",
    content: (
      <>
        <TypographyLead>Développeur wordpress</TypographyLead>
        <TypographyBlockquote className="mt-0">Mahvu (mouvement des aveugles et handicapés unis) · stage</TypographyBlockquote>
        <TypographyP>J&apos;ai passé 2 mois à développer le site de cette association pendant ma première formation. Le but était de créer un site 100% accessible et permettant la publication d&apos;articles par des aveugles.</TypographyP>
        <TypographyP>Pour cela j&apos;ai créé un thème wordpress en PHP, language que je ne connaissais pas du tout.<br />
          Cela à été un défi vraiment stimulant d&apos;avoir un délai pour créer un projet dans un language inconnu. J&apos;ai pensé le site avant tout pour l&apos;accessibilité et la visibilité selon leurs demandes, avec de grandes icones et couleurs contrastées, un thème sombre en jaune sur noir pour améliorer la lisibilité. <br />
          Le site est disponible sur ce <Link href="https://mahvu.org" target="blank" className="text-primary font-semibold hover:underline">lien</Link></TypographyP>
      </>
    )
  },
  {
    title: "plus tôt",
    content: (
      <>
        <TypographyLead>Activités précedentes</TypographyLead>
        <TypographyP>Avant ma reconversion j&apos;ai exercé diverses activités j&apos;ai énormément bossé mais je vous invite à visiter mon profil LinkedIn si vous souhaitez en savoir plus à ce propos ! (lien en bas de page)</TypographyP>
        <TypographyP>Ces expériences ne sont en aucun cas liées au développement mais m&apos;ont permis d&apos;acquérir de nombreuses compétences et qualités humaines.</TypographyP>
      </>
    ),
  },

];

export default data;