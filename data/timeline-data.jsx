import { TypographyBlockquote } from "@/components/typography/TypographyBlockquote";
import { TypographyLead } from "@/components/typography/TypographyLead";
import { TypographyList } from "@/components/typography/TypographyList";
import { TypographyP } from "@/components/typography/TypographyP";
import Image from "next/image";
import Link from "next/link";
import { ImageGallery } from "@/components/blocks/ImageGallery";
const data = [
  {
    title: "sept.2024 - aujourd’hui",
    content: (
      <>
        <TypographyLead>Développeur web freelance Next.js</TypographyLead>
        <div className="mt-0 flex items-center gap-2"><Image src="/images/Logo-EM.svg" alt="EM" width={50} height={50} /> Auto-entrepreneur</div>
        <TypographyP>Mon activité principale à l&apos;heure actuelle</TypographyP>
        <TypographyP>Je travaille pour des clients variés, en direct ou en sous-traitance pour des agences.</TypographyP>
        <TypographyP>J&apos;ai également eu l&apos;occasion de travailler sur des projets personnels, comme <Link href="/portfolio" target="blank" className="text-primary font-semibold hover:underline">MCD-maker</Link>, un outil en ligne pour créer des MCD (Modèle Conceptuel de Données) pour des projets de développement web.</TypographyP>
        <TypographyP>Vous pouvez retrouver mes projets personnels sur mon <Link href="/portfolio" target="blank" className="text-primary font-semibold hover:underline">Portfolio</Link>.</TypographyP>
      </>
    ),
  },
  {
    title: "juin 2024 - déc.2024",
    content: (
      <>
        <TypographyLead>Développeur web React & NestJS</TypographyLead>
        <TypographyBlockquote className="mt-0 flex items-center gap-2"><div className="bg-white rounded-full p-2"><Image src="/images/timeline/alt-logo.webp" alt="Alt" width={50} height={50} /></div> Alt | incubateur Tech · apprentissage par immersion</TypographyBlockquote>
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
    title: "mars 2024 - avr. 2024",
    content: (
      <>
        <TypographyLead>Développeur PHP & Wordpress</TypographyLead>
        <TypographyBlockquote className="mt-0 flex items-center gap-2"><div className="bg-white rounded-full p-1"><Image src="/images/timeline/mahvu.svg" alt="Mahvu" width={50} height={50} /></div> Mahvu (mouvement des aveugles et handicapés unis) · stage</TypographyBlockquote>
        <TypographyP>J&apos;ai passé 2 mois à développer le site de cette association pendant ma première formation. Le but était de créer un site 100% accessible et permettant la publication d&apos;articles par des aveugles.</TypographyP>
        <TypographyP>Pour cela j&apos;ai créé un thème wordpress en PHP, language que je ne connaissais pas du tout.<br />
          Cela à été un défi vraiment stimulant d&apos;avoir un délai pour créer un projet dans un language inconnu. J&apos;ai pensé le site avant tout pour l&apos;accessibilité et la visibilité selon leurs demandes, avec de grandes icones et couleurs contrastées, un thème sombre en jaune sur noir pour améliorer la lisibilité. <br />
          Le site est disponible sur ce <Link href="https://mahvu.org" target="blank" className="text-primary font-semibold hover:underline">lien</Link></TypographyP>
      </>
    )
  },
  {
    title: "mai 2023 - mai 2024",
    content: (
      <>
        <TypographyLead>Formation développeur web et web mobile</TypographyLead>
        <TypographyBlockquote className="mt-0 flex items-center gap-2"><Image src="/images/timeline/oclock.webp" alt="O'clock" width={50} height={50} /> O&apos;clock · Centre de formation</TypographyBlockquote>
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
        <TypographyP>Lors de cette formation j&apos;ai conçu une application web de crowdfunding pour des campagnes de reforestation.</TypographyP>
        <ImageGallery
          images={[
            {
              src: "/images/timeline/diplome.webp",
              alt: "Diplôme"
            },
            // Ajoutez jusqu'à 4 images ici
          ]}
        />
      </>
    ),
  },
  {
    title: "mai 2022 - mai 2023",
    content: (
      <>
        <TypographyLead>Conducteur de ligne</TypographyLead>
        <TypographyBlockquote className="mt-0 flex items-center gap-2">Linamar Montfaucon Transmission · Intérimaire</TypographyBlockquote>
        <TypographyP>J&apos;ai eu l&apos;occasion de travailler dans une entreprise de production de pièces automobiles, travail sur commande numérique, avec des robots et des machines modernes, c&apos;était très enrichissant.</TypographyP>
      </>
    ),
  },
  {
    title: "mars 2022 - avr. 2022",
    content: (
      <>
        <TypographyLead>Opérateur de production</TypographyLead>
        <TypographyBlockquote className="mt-0 flex items-center gap-2">ALPHA NUTRITION · Intérimaire</TypographyBlockquote>
      </>
    ),
  },
  {
    title: "mars 2021 - avr. 2022",
    content: (
      <>
        <TypographyLead>Conducteur de ligne</TypographyLead>
        <TypographyBlockquote className="mt-0 flex items-center gap-2">GROUPE BARBIER · Intérimaire</TypographyBlockquote>
      </>
    ),
  },
  {
    title: "juin 2021 - janv. 2022",
    content: (
      <>
        <TypographyLead>Conducteur de ligne</TypographyLead>
        <TypographyBlockquote className="mt-0 flex items-center gap-2">JACOBS DOUWE EGBERTS · Intérimaire</TypographyBlockquote>
      </>
    ),
  },
  {
    title: "juil. 2018 - mai 2019",
    content: (
      <>
        <TypographyLead>Conducteur de ligne</TypographyLead>
        <TypographyBlockquote className="mt-0 flex items-center gap-2">NESTLE WATERS SUPPLY SUD (Perrier) · Intérimaire</TypographyBlockquote>
      </>
    ),
  },
  {
    title: "nov. 2015 - oct. 2017",
    content: (
      <>
        <TypographyLead>Manager</TypographyLead>
        <TypographyBlockquote className="mt-0 flex items-center gap-2">McDonald&apos;s · CDI</TypographyBlockquote>
        <TypographyP>J&apos;ai appris à gérer une équipe, à organiser le travail et à répondre aux attentes des clients.</TypographyP>
      </>
    ),
  },
  {
    title: "nov. 2010 - oct. 2013",
    content: (
      <>
        <TypographyLead>Conducteur de ligne</TypographyLead>
        <TypographyBlockquote className="mt-0 flex items-center gap-2">Alsapan · CDI</TypographyBlockquote>
        <TypographyP>Travail le plus difficile de ma vie! J&apos;ai dû travailler 48h par semaine la plupart du temps, dans des conditions très difficiles et stressantes. Cela reste une expérience que j&apos;ai vraiment appréciée, surtout d&apos;un point de vue humain.</TypographyP>
      </>
    ),
  },
  {
    title: "sept. 2007 - sept. 2009",
    content: (
      <>
        <TypographyLead>Apprenti paysagiste</TypographyLead>
        <TypographyBlockquote className="mt-0 flex items-center gap-2">MEINAU SERVICES REGIE DE QUARTIER · Contrat en alternance</TypographyBlockquote>
        <TypographyP>J&apos;ai eu l&apos;occasion de travailler dans une entreprise de service communautaire, j&apos;ai travaillé en équipe, appris à communiquer avec les clients et à répondre à leurs besoins.</TypographyP>
        <TypographyP>J&apos;ai obtenu mon premier diplôme, un BEP travaux paysagers.</TypographyP>

      </>
    ),
  },
  {
    title: "30 sept. 1991",
    content: (
      <>
        <TypographyLead>Naissance</TypographyLead>
        <TypographyBlockquote className="mt-0 flex items-center gap-2">Hopital de Strabourg, France</TypographyBlockquote>
      </>
    ),
  },
];

export default data;