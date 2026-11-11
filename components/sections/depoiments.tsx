"use client";

import { SwiperSlide } from "swiper/react";
import ShinyText from "../ui/shiny-text";
import Swipper from "../ui/swipper";
import { useEffect, useState } from "react";
import { ShineBorder } from "../ui/shine-border";
import Reveal from "../ui/reveal";

export function Depoiments() {
  const [largura, setLargura] = useState(0);
  useEffect(() => {
    const handleResize = () => setLargura(window.innerWidth);

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const depoiments = [
    {
      name: "Mirian Samara",
      role: "CEO · MS STUDIO",
      text: "Excelente serviço! A equipe foi extremamente profissional e entregou resultados além das nossas expectativas.",
    },
    {
      name: "Eduardo Silva",
      role: "Especialista em Marketing Digital",
      text: "Desenvolvimento ágil e eficiente. A comunicação foi clara e o projeto foi entregue dentro do prazo.",
    },
    {
      name: "Carlens Romelus",
      role: "Tech Lead",
      text: "Entregam um trabalho de alta qualidade, Código limpo e bem estruturado.",
    },
    {
      name: "Gustavo Oliveira",
      role: "Empresário",
      text: "Foram muito atenciosos e compreensivos durante toda a construção do meu ecommerce"
    },
  ];
  return (
    <div
      className={`relative overflow-hidden bg-primary-color lg:[clip-path:polygon(0_0,45%_0,60%_80px,100%_80px,100%_100%,0_100%)] text-white pt-20 md:pt-40 pb-20  flex  ${largura < 1300 ? "flex-col" : "flex-row"} justify-between mt-20 px-4 md:px-10  2xl:px-45`}
      id="grid"
    >
      <Reveal className="relative z-10 flex gap-6 flex-col w-full justify-center md:justify-start lg:max-w-lg">
         <p className="uppercase tracking-widest  ml-2 text-center md:text-start text-xs ">
                  <span className="text-[#ff6b4a]">{"{"}</span>{" Depoimentos "}<span className="text-[#ff6b4a]">{"}"}</span>
                </p>
        <h2 className="text-3xl  text-center md:text-start md:text-4xl  w-full  lg:max-w-2xl lg:leading-12 font-medium">
          <ShinyText
            text="Resultados que vão além do código"
            speed={2}
            delay={0}
            color="#b5b5b5"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
        </h2>
        <hr className="border-white/10 hidden md:block"></hr>

        <p className="text-gray-400 max-w-2xl text-center md:text-start  lg:block">
          A experiência de quem confiou em nosso trabalho para transformar
          ideias em soluções digitais.
          <br></br>
          <br></br>
          
          <span className="hidden md:block">
            Histórias reais de clientes que encontraram na tecnologia uma forma
            de evoluir seus processos, fortalecer seus negócios e alcançar novos
            resultados.
          </span>
        </p>
        <div className="absolute bottom-40 left-50 z-10 flex gap-4 before:absolute before:inset-0 before:m-auto before:h-90 before:w-90 before:rounded-full before:bg-white/4 before:blur-3xl before:-z-10 "></div>
      </Reveal>

      <div>
        <Swipper
          className={`relative ${largura < 1300 ? "w-full" : "lg:max-w-lg"} `}
          allowTouchMove={false}
          loop={true}
          simulateTouch={false}
          autoplay={true}
          freeMode={{
            enabled: true,
            momentum: false,
          }}
          speed={5000}
          breakpoints={{
            550: {
              slidesPerView: 2.5,
            },
            640: {
              slidesPerView: 2,
            },
            692: {
              slidesPerView: 2.2,
            },
            // 768: {
            //   slidesPerView: 2.5,
            // },
            1024: {
              slidesPerView: 3,
            },
          }}
          direction={largura < 1300 ? "horizontal" : "vertical"}
        >
          {depoiments.map((depoiment, index) => (
            <SwiperSlide key={index}>
              <div
                className="group relative flex h-72 flex-col overflow-hidden rounded-2xl border border-white/10 p-6 transition-all duration-300 hover:border-white/20 md:h-60"
               
              >
                  <ShineBorder
                  shineColor="#919191"
                  />
                <div className="flex h-full flex-col gap-3">
                  <span className="text-4xl leading-none text-white/20">“</span>
                  <p className="flex-1 text-base leading-7 text-gray-300">
                    {depoiment.text}
                  </p>
                  <div className="mt-auto flex items-center gap-3 border-t border-white/10 pt-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white">
                      {depoiment.name.charAt(0)}
                      {depoiment.name.split(" ")[1].charAt(0)}
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-sm font-medium text-white">
                        {depoiment.name}
                      </p>
                      <p className="text-xs text-gray-500">{depoiment.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swipper>
      </div>
    </div>
  );
}
