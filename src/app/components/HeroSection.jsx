"use client"
import React from 'react';
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className={"lg:py-16"}>
            <div className={"grid grid-cols-1 sm:grid-cols-12"}>
                <motion.div
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                    className={"col-span-8 place-self-center text-center sm:text-left justify-self-start"}
                >
                    <h1 className={"text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold"}>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                            Hola, Soy
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                "Gregory",
                                1000,
                                "Desarrollador Movil",
                                1000,
                                "Desarrollador Web",
                                1000,
                                "Desarrollador Escritorio",
                                1000,
                                "Instructor de Programación",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className={" text-lg mb-6 lg:text-xl"}>
                        lorem ipsum dolor sit amet consectedtur adip
                    </p>
                    <div>
                        <Link
                            href={"/#contact"}
                            className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
                        >
                            Contactarme
                        </Link>
                        <Link
                            href={"/"}
                            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
                              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Descargar CV
                              </span>
                        </Link>
                    </div>
                </motion.div>

                {/* DERECHA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className={"rounded-full w-[400px] h-[400px] relative mt-4 lg:mt-0"}>
                        <Image
                            src={"/images/imagen_personal.jpg"}
                            alt={""}
                            width={400}
                            height={400}
                            className={"absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 animate-wiggle"}
                        >
                        </Image>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;

