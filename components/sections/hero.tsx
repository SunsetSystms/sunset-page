import { ArrowUpRight } from "lucide-react";
import { useRef, type MouseEvent } from "react";
import { projectWhatsAppLink } from "@/lib/contact";
import LightRays from "../ui/LightRays";

export function Hero() {
  const gridRef = useRef<HTMLElement>(null);

  function handleGridMouseMove(event: MouseEvent<HTMLElement>) {
    const grid = gridRef.current;
    if (!grid) return;

    const bounds = grid.getBoundingClientRect();
    grid.style.setProperty("--mouse-x", `${event.clientX - bounds.left}px`);
    grid.style.setProperty("--mouse-y", `${event.clientY - bounds.top}px`);
  }
  return (
    <section
      className=" relative flex min-h-svh items-center justify-center overflow-hidden "
      id="inicio"
      ref={gridRef}
      onMouseMove={handleGridMouseMove}
    >
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1}
        lightSpread={0.5}
        rayLength={3}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0}
        distortion={0}
        className="absolute inset-0 z-0 bg-primary-color"
        pulsating={false}
        fadeDistance={1}
        saturation={1}
      />

      <div className="relative text-white z-10 flex w-full max-w-4xl flex-col gap-6 text-center items-center md:gap-12 px-4">
        <p className="text-[10px] uppercase tracking-[0.24em] sm:text-xs sm:tracking-widest">
          <span className="text-[#ff6b4a]">{"{"}</span>
          {" DIGITAL INNOVATION "}
          <span className="text-[#ff6b4a]">{"}"}</span>
        </p>
        <h1 className="md:max-w-4xl   uppercase leading-10 text-3xl  md:text-5xl md:leading-16">
          Sua empresa merece uma presença digital à altura.
        </h1>

        <p className="text-center max-w-2xl px-2 text-sm leading-6 text-gray-400 sm:px-6 sm:text-base sm:leading-7">
          Sistemas sob medida para empresas que precisam vender
          melhor,automatizar processos ou lançar uma nova operação digital
        </p>
        <div className="flex-col mt-2 flex w-full items-center justify-center text-sm sm:mt-4 gap-4 md:flex-row md:gap-10">
          <a
            href={projectWhatsAppLink}
            className="inline-flex min-h-12 w-full max-w-xs cursor-pointer items-center justify-center gap-2 rounded-full bg-white/80 hover:bg-white px-5 py-3 font-medium text-black transition-all duration-300 hover:shadow-2xl sm:w-auto "
          >
            Comece seu projeto agora
            <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
          </a>
          {/* <button className="inline-flex  cursor-pointer items-center gap-2  p-3 px-4 font-medium text-gray-400 transition-all duration-200 ease-in  hover:text-primary-color">
            Soluções sob medida
          </button> */}
        </div>
      </div>
    </section>
  );
}
