"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Dominio de Python: Curso Completo",
        description: "Curso exhaustivo del lenguaje de programación Python para profesionales. De cero a experto",
        image: "/images/projects/dominio_completo.jpg",
        tag: ["Todo", "Cursos"],
        gitUrl: "/",
        previewUrl: "https://www.udemy.com/course/dominio-de-python/?referralCode=6A32E91F0F49B5F3FA6B",
    },
    {
        id: 2,
        title: "Especialización completa en Python",
        description: "Curso de alta especialidad en Python con constante actualización de temas",
        image: "/images/projects/especializacion.jpg",
        tag: ["Todo", "Cursos"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "Análisis de Datos con Python Desde Cero",
        description: "Analiza datos con Python utilizando las bibliotecas más potentes en el campo del análisis de datos",
        image: "/images/projects/analisis.jpg",
        tag: ["Todo", "Cursos"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "Especialización Arduino + Python (El curso más completo)",
        description: "Curso completo de Arduino y Python, Domótica, reconocimiento facial, comunicaciones, bases de datos y muchos temas más.",
        image: "/images/projects/especializacion-arduino.jpg",
        tag: ["Todo", "Cursos"],
        gitUrl: "/",
        previewUrl: "https://www.udemy.com/course/especializacion-python-arduino-el-curso-mas-completo/?referralCode=E74319CA187E5963CABE",
    },
    {
        id: 5,
        title: "Crea interfaces gráficas para escritorio con Python y PyQT",
        description: "Aprende a crear tus propias aplicaciones con la librería más potente para la creación de interfaces graficas con Python",
        image: "/images/projects/pyqt.jpg",
        tag: ["Todo", "Cursos"],
        gitUrl: "/",
        previewUrl: "https://www.udemy.com/course/crea-interfaces-graficas-para-escritorio-con-python-y-pyqt/?referralCode=1BC107C276505712BFEE",
    },
    {
        id: 6,
        title: "Master en visión artificial e interfaces graficas | Python",
        description: "Aprende el procesamiento digital de imágenes y visión artificial, junto con la creación de interfaces graficas en Python",
        image: "/images/projects/vision.jpg",
        tag: ["Todo", "Cursos"],
        gitUrl: "/",
        previewUrl: "https://www.udemy.com/course/master-en-vision-artificial-e-interfaces-graficas-python/?referralCode=7322A32137650AEC85E1",
    },
    {
        id: 7,
        title: "Sistema Punto de venta para Restaurante",
        description: "Sistema para la venta y gestión de productos de un restaurante",
        image: "/images/projects/venta.png",
        tag: ["Todo", "Escritorio"],
        gitUrl: "/",
        previewUrl: "",
    },
    {
        id: 8,
        title: "Issel Code",
        description: "Plataforma Web de presentación de Issel Code",
        image: "/images/projects/isselweb.jpg",
        tag: ["Todo", "Web"],
        gitUrl: "/",
        previewUrl: "https://www.isselcode.com",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("Todo");
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
                Mis Proyectos
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name="Todo"
                    isSelected={tag === "Todo"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Cursos"
                    isSelected={tag === "Cursos"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Movil"
                    isSelected={tag === "Movil"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Escritorio"
                    isSelected={tag === "Escritorio"}
                />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
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