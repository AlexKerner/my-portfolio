"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ModeToggle } from "@/components/mode-toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Parallax } from "react-parallax";
import { useCopyToClipboard } from "usehooks-ts";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { LanguageToggle } from "@/components/language-toggle";
import Box3d from "@/components/box3d/box3d";

const cardData = [
  {
    title: "Movie-App",
    descriptionKey: "movieAppDescription",
    url: "https://movie-app-bay-theta.vercel.app/",
  },
  {
    title: "Valorant Web",
    descriptionKey: "valorantWebDescription",
    url: "https://valorant-web-black.vercel.app/home-page",
  },
];
const cardSkill = [
  {
    Name: "Html",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    experienceKey: "html",
  },
  {
    Name: "CSS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    experienceKey: "css",
  },
  {
    Name: "JavaScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
    experienceKey: "js",
  },
  {
    Name: "Typescript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg",
    experienceKey: "ts",
  },
  {
    Name: "React",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    experienceKey: "react",
  },
  {
    Name: "NextJs",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    experienceKey: "next",
  },
];

export default function Home() {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [copiedText, copy] = useCopyToClipboard();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (text: string) => () => {
    copy(text)
      .then(() => {
        console.log("Copied!", { text });
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false); // Resetando o estado para falso após 3 segundos
        }, 3000);
      })
      .catch((error) => {
        console.error("Failed to copy!", error);
      });
  };
  const targetRef = useRef(null);
  const isInView = useInView(targetRef);
  const targetRef2 = useRef(null);
  const isInView2 = useInView(targetRef2);
  const targetRef3 = useRef(null);
  const isInView3 = useInView(targetRef3);

  return (
    <div className="dark:bg-[#010101] bg-zinc-200">
      <motion.div
        className="fixed z-10 top-0 left-0 right-0 h-1 bg-zinc-500 dark:bg-zinc-50 origin-left"
        style={{ scaleX }}
      />

      <header className="flex justify-between items-center p-4 sm:p-5 md:p-6 lg:p-8 ">
        <h1 className="text-xl font-semibold tracking-wider">
          {t("My Portfolio")}
        </h1>
        <div className="flex items-center gap-3 md:gap-4 lg:gap-5 xl:gap-6">
          <div className="flex items-center gap-2">
            <ModeToggle />
            <LanguageToggle />
          </div>
          <Avatar className="w-12 h-12">
            <AvatarImage src="/img/avatar.png" />
            <AvatarFallback>AK</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <main>
        <section
          className="w-full py-64 h-full lg:py-60 relative mb-10 "
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          ref={targetRef}
        >
          <div className="container flex flex-col md:justify-between items-center gap-6 px-4 md:px-6 lg:gap-10 text-left relative md:flex md:flex-row">
            <div className="space-y-3 z-50 ">
              <h1 className="text-3xl  font-bold tracking-tighter md:text-4xl text-black dark:text-white">
                {t("Hello")}
              </h1>
              <p className="max-w-[600px] text-zinc-700 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
                {t("Desc")}
              </p>
            </div>
            <div className="hidden md:flex md:mr-20">
              <Box3d />
            </div>
          </div>
        </section>
        <Parallax bgImage="/img/fundo.avif" strength={800}>
          <section
            className="w-full h-full mt-60 py-28 md:py-28 lg:py-64 "
            style={{
              transform: isInView2 ? "none" : "translateX(200px)",
              opacity: isInView2 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            ref={targetRef2}
          >
            <div className="container grid items-center gap-6 px-2 md:px-6 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl  font-bold tracking-tighter md:text-4xl text-white">
                  {t("Proj")}
                </h2>
                <p className="text-gray-200 dark:text-gray-400">
                  {t("DescProj")}
                </p>
              </div>
              <div className="grid gap-6 sm:gap-4 sm:grid-cols-2 xl:gap-12">
                {cardData.map((card, index) => (
                  <motion.div
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card
                      key={index}
                      className="xl:w-72 min-h-52 max-h-52 flex flex-col justify-between items-start scale-90 md:scale-100 bg-zinc-200 dark:bg-black"
                    >
                      <CardContent className="mt-4 md:mt-2 lg:mt-4 xl:mt-4 pb-0">
                        <p className="font-semibold text-lg my-4 ">
                          {t(card.title)}
                        </p>
                        <p className="text-sm text-gray-800 dark:text-gray-400 mb-0 pb-0 line-clamp-3">
                          {t(card.descriptionKey)}
                        </p>
                      </CardContent>
                      <div className="mb-0 mt-0 pb-6 py-4 ml-6 flex bottom-0 h-full w-full">
                        <a
                          target="_blank"
                          className="px-3 py-2 rounded-md border text-sm dark:hover:bg-zinc-50 hover:text-white shadow-md transition-all duration-150 flex items-center gap-2 dark:hover:text-zinc-900 font-semibold hover:bg-zinc-950"
                          href={card.url}
                        >
                          {t("View Project")}
                          <FontAwesomeIcon icon={faAngleRight} />
                        </a>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </Parallax>
        <Parallax bgImage="/img/fundo3.jpg" strength={800}>
          <section
            className="w-full h-full mt-60 py-28 md:py-28 lg:py-64 "
            style={{
              transform: isInView3 ? "none" : "translateX(-200px)",
              opacity: isInView3 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            ref={targetRef3}
          >
            <div className="container mx-auto">
              <h2 className="text-3xl font-semibold mb-8 text-white">
                {t("Skill")}
              </h2>
              <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-2 lg:gap-6 md:mx-12 lg:mx-16 xl:mx-24 md:mt-5">
                {cardSkill.map((skill, index) => {
                  return (
                    <div className="flex flex-col justify-center items-center relative">
                      <Card
                        key={index}
                        className="p-4 hover:-translate-y-7 duration-200 z-10 relative min-h-32 sm:w-36 md:w-40 lg:w-36 xl:w-40 bg-zinc-200 dark:bg-black"
                      >
                        <h1 className="mb-4 font-[540] tracking-wide">
                          {skill.Name}
                        </h1>
                        <div className="flex justify-center p-3">
                          <img src={skill.icon} alt="" className="min-w-16" />
                        </div>
                      </Card>
                      <p className="px-2 absolute bottom-0 mt-[-2.5rem] border-b rounded-sm font-semibold text-white shadow-lg">
                        {t(skill.experienceKey)}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </Parallax>
      </main>

      <footer className="flex flex-col gap-10 h-full sm:flex-row py-10 w-full shrink-0 items-center px-4 md:px-6 border-t border-zinc-400">
        <p className="text-md font-semibold text-zinc-800 dark:text-gray-300">
          {t("Contact")}
        </p>
        <nav className="sm:ml-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-4">
            <Link
              target="_blank"
              className="text-xs relative overflow-hidden group"
              href="https://www.linkedin.com/in/alexander-kerner-3177792b1/"
            >
              <span className="relative z-10">Linkedin</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-zinc-800 dark:bg-zinc-200 origin-left transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Separator orientation="vertical" className="h-7 bg-zinc-500" />
            <Link
              target="_blank"
              className="text-xs relative overflow-hidden group"
              href="https://github.com/AlexKerner"
            >
              <span className="relative z-10">GitHub</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-zinc-800 dark:bg-zinc-200 origin-left transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Separator
              orientation="vertical"
              className="h-7 bg-zinc-500 hidden sm:block"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <span className="text-xs"> {t("GetInTouch")} </span>
            <Button
              variant="outline"
              className="bg-transparent rounded-md border border-zinc-500 text-sm dark:hover:bg-zinc-50 hover:text-white duration-200 flex items-center gap-2 dark:hover:text-zinc-900 hover:border-zinc-950 hover:bg-stone-950"
              onClick={handleCopy("alexanderkerner06@gmail.com")}
            >
              <FontAwesomeIcon icon={faEnvelope} />
              {copiedText && isCopied
                ? "Is Copyed!"
                : "alexanderkerner06@gmail.com"}
            </Button>
          </div>
        </nav>
      </footer>
    </div>
  );
}
