import {
  ArrowUpRight,
  Code2,
  Monitor,
  ShoppingCart,
  Smartphone,
} from "lucide-react";
import LogoLoop from "../ui/LogoLoop";
import ShinyText from "../ui/shiny-text";
import SpotlightCard from "../ui/SpotlightCard";
import Swipper from "../ui/swipper";
import { SwiperSlide } from "swiper/react";
import TextType from "../ui/TextType";
import { projectWhatsAppLink } from "@/lib/contact";

export default function Services() {
  const tecnologias = [
    {
      src: "https://cdn.simpleicons.org/react/ffffff",
      alt: "React",
      name: "React",
      title: "React",
      width: 26,
      height: 26,
    },
    {
      src: "https://cdn.simpleicons.org/nextdotjs/ffffff",
      alt: "Next.js",
      name: "Next.js",
      title: "Next.js",
      width: 26,
      height: 26,
    },
    {
      src: "https://cdn.simpleicons.org/laravel/ffffff",
      alt: "Laravel",
      name: "Laravel",
      title: "Laravel",
      width: 26,
      height: 26,
    },
    {
      src: "https://cdn.simpleicons.org/nodedotjs/ffffff",
      alt: "Node.js",
      name: "Node.js",
      title: "Node.js",
      width: 26,
      height: 26,
    },
    {
      src: "https://cdn.simpleicons.org/typescript/ffffff",
      alt: "TypeScript",
      name: "TypeScript",
      title: "TypeScript",
      width: 26,
      height: 26,
    },
    {
      src: "https://cdn.simpleicons.org/tailwindcss/ffffff",
      alt: "Tailwind CSS",
      name: "Tailwind CSS",
      title: "Tailwind CSS",
      width: 26,
      height: 26,
    },
    {
      src: "https://cdn.simpleicons.org/mysql/ffffff",
      alt: "MySQL",
      name: "MySQL",
      title: "MySQL",
      width: 26,
      height: 26,
    },
    {
      src: "https://cdn.simpleicons.org/docker/ffffff",
      alt: "Docker",
      name: "Docker",
      title: "Docker",
      width: 26,
      height: 26,
    },
    {
      src: "https://cdn.simpleicons.org/php/ffffff",
      alt: "PHP",
      name: "PHP",
      title: "PHP",
      width: 26,
      height: 26,
    },
    {
      src: "https://cdn.simpleicons.org/git/ffffff",
      alt: "Git",
      name: "Git",
      title: "Git",
      width: 26,
      height: 26,
    },
  ];

  const serviceCards = [
    {
      title: "Landing pages",
      description:
        "Páginas de alta conversão para apresentar sua marca, oferta e gerar novas oportunidades.",
      icon: <Monitor size={24} strokeWidth={1.8} />,
    },
    {
      title: "WEBSITES",
      description:
        "Experiências rápidas e responsivas, pensadas primeiro para a rotina de quem acessa pelo celular.",
      icon: <Smartphone size={24} strokeWidth={1.8} />,
    },
    {
      title: "SISTEMAS",
      description:
        "Sistemas personalizados para automatizar processos e melhorar a eficiência da sua operação.",
      icon: <ShoppingCart size={24} strokeWidth={1.8} />,
    },
    {
      title: "IA & AUTOMAÇÃO",
      description:
        "Soluções inteligentes que utilizam inteligência artificial para otimizar tarefas e processos.",
      icon: <Code2 size={24} strokeWidth={1.8} />,
    },
  ];

  return (
    <section
      className=" bg-primary-color items-center justify-center relative w-full flex flex-col px-2 py-20 md:py-30 md:px-10"
      id="servicos"
    >
      
      <div className="flex flex-col  md:gap-20 2xl:px-10 max-w-[1700px] w-full mx-auto">
        <div className="flex  flex-col gap-4 ">
          <p className="uppercase tracking-widest 2 ml-2 text-xs text-center md:text-start text-white">
            <span className="text-[#ff6b4a]">{"{"}</span>
            {" Soluções digitais "}
            <span className="text-[#ff6b4a]">{"}"}</span>
          </p>
          <div className="flex justify-center md:justify-start items-center gap-10">
            <h2 className="text-center text-2xl font-medium md:text-start lg:text-4xl lg:leading-14  ">
              <ShinyText
                text="Tecnologias e Soluções"
                speed={2}
                delay={0}
                color="#ffffff"
                shineColor="#b5b5b5"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
              />
            </h2>
           
          </div>
          <p className="max-w-xl px-5 text-center md:text-start -ml-2 text-gray-300 text-sm md:text-base  ">
            Desenvolvemos soluções digitais sob medida que unem tecnologia e
            inovação para transformar ideias em resultados reais.
          </p>
        </div>
        <div className="px-4">
          <Swipper
            loop={false}
            direction="horizontal"
            pagination
            breakpoints={{
              550: {
                slidesPerView: 1.5,
              },
              640: {
                slidesPerView: 2,
              },
              692: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2.3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {serviceCards.map((card, index) => (
              <SwiperSlide key={index} className={`h-auto slide-${index}`}>
                <div className="group card-service h-97.5! md:h-120! bg-white/3 border p-8 border-neutral-800 rounded-2xl">
                  <div className=" flex  flex-col gap-5 justify-between h-full">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/5 text-white transition group-hover:bg-primary-color group-hover:duration-300">
                      {card.icon}
                    </div>
                    <div className="flex flex-col justify-center gap-3">
                      <h3 className="text-md font-medium uppercase text-white">
                        <TextType
                          text={card.title}
                          typingSpeed={75}
                          pauseDuration={10800}
                          showCursor
                          cursorCharacter="!"
                          deletingSpeed={50}
                          cursorBlinkDuration={0.5}
                        />
                      </h3>
                      <p className="2xl:h-6 md:h-14 h-10 text-xs leading-5 text-gray-400">
                        {card.description}
                      </p>
                      <a
                        href={projectWhatsAppLink}
                        className="mt-10 flex flex-1 items-center justify-center gap-2 rounded-full bg-white/90  hover:bg-white p-3 px-10 text-center text-sm font-medium text-black "
                      >
                        <span className="text-sm font-medium text-black shrink-0">
                          Começar meu projeto
                        </span>
                        <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swipper>
        </div>
        <div className="mt-15 flex w-full flex-col gap-6 md:flex-row md:items-center 2xl:px-10">
          <p className="shrink-0 uppercase tracking-widest ml-2 text-xs text-center md:text-start text-white">
            <span className="text-[#ff6b4a]">{"{"}</span>
            {" Tecnologias utilizadas "}
            <span className="text-[#ff6b4a]">{"}"}</span>
          </p>
          <LogoLoop
            logos={tecnologias}
            speed={80}
            direction="left"
            logoHeight={36}
            gap={18}
            pauseOnHover={false}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#141414"
            className="min-w-0 flex-1"
            ariaLabel="Tecnologias que usamos"
            renderItem={(item, key) => {
              const tech = item as {
                src?: string;
                alt?: string;
                name?: string;
                title?: string;
                width?: number;
                height?: number;
              };
              return (
                <div
                  key={key}
                  className="flex items-center gap-3
                   px-4 py-2 text-sm font-medium text-white "
                >
                  <img
                    src={tech.src}
                    alt={tech.alt ?? tech.name ?? tech.title ?? "Tecnologia"}
                    title={tech.title ?? tech.name ?? tech.alt ?? "Tecnologia"}
                    width={tech.width ?? 26}
                    height={tech.height ?? 26}
                    className="h-6 w-6 object-contain"
                    loading="lazy"
                  />
                  <span>
                    {tech.name ?? tech.alt ?? tech.title ?? "Tecnologia"}
                  </span>
                </div>
              );
            }}
          />
        </div>
      </div>
      
    </section>
  );
}
