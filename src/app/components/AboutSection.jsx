"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>React</li>
                <li>Flutter</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>Dart</li>
                <li>Next js</li>
                <li>Arduino</li>
                <li>Firebase</li>
                <li>MySql</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Cbtis 24, Tam, Victoria</li>
                <li>Universidad Politecnica de Cd. Victoria (Trunca)</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>Aprendiendo Python 3 - Centro deentrenamiento en alta tecnología (CENALTEC) </li>
                <li>Deep Learning Básico - Centro deentrenamiento en alta tecnología (CENALTEC) </li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/secundaria.jpg" width={500} height={500} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">Sobre mí</h2>
                    <p className="text-base lg:text-lg">
                        ¡Hola! Soy un desarrollador frontend multiplataforma apasionado
                        por la creación de aplicaciones interactivas y responsivas. Con
                        experiencia en tecnologías como JavaScript, Next.js, React, Flutter,
                        Python, Firebase y más, tengo un historial de aprendizaje rápido
                        y adaptabilidad.
                    </p>
                    <br/>
                    <p className="text-base lg:text-lg">
                        Comencé mi viaje en la programación a una edad temprana,
                        ganando reconocimiento en concursos regionales del
                        cotacyt desde los 12 años. Este trasfondo me ha
                        enseñado la importancia del trabajo en equipo y
                        la búsqueda constante de nuevos desafíos para expandir mis
                        habilidades.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Habilidades{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Educación{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            {" "}
                            Certificados{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;