"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

const ProjectsSection = () => {
  const { t } = useTranslation('projects');

  const projectsData = [
    {
      id: 1,
      title: t('title1'),
      description: t('description1'),
      image: "/images/projects/NextJS-portfolio.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/EmericMathis/Portfolio",
      previewUrl: "/",
    },
    {
      id: 2,
      title: t('title2'),
      description: t('description2'),
      image: "/images/projects/mahvu.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/EmericMathis/Site-web-association-Mahvu",
      previewUrl: "https://mahvu.org/",
    },
  ];

  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        {t('my projects')}
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name={t('all')}
          value="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          value={"Web"}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          value={"Mobile"}
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid lg:grid-cols-3 gap-8 lg:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;