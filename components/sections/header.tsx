"use client";

import { ArrowUpRight } from "lucide-react";
import StaggeredMenu from "@/components/StaggeredMenu";
import { projectWhatsAppLink } from "@/lib/contact";

const links = [
  { label: "Início", ariaLabel: "Ir para o início", link: "#inicio" },
  { label: "Serviços", ariaLabel: "Conhecer soluções", link: "#servicos" },
  { label: "Etapas", ariaLabel: "Conhecer nosso processo", link: "#processo" },
  { label: "Dúvidas", ariaLabel: "Ver dúvidas frequentes", link: "#faq" },
  { label: "Contato", ariaLabel: "Começar um projeto", link: "#contato" },
];

export function Header() {
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 hidden border-b border-white/10 text-white backdrop-blur-xl lg:block">
        <div className="mx-auto max-w-[1600px] flex h-20 w-full items-center justify-between gap-8 px-5 sm:px-8 lg:px-12">
          <a href="#inicio" className="group flex items-center gap-3 text-sm font-semibold tracking-tight">
            {/* <img
              src="/logo.png"
              alt=""
              className="h-8 w-8 object-contain transition-transform duration-300 group-hover:rotate-12"
              width={32}
              height={32}
            /> */}
            <span className="text-sm capitalize tracking-widest">
              sunset<span className="text-[#ff6b4a]"> .</span>
            </span>
          </a>

          <nav className="flex items-center gap-6 font-sans" aria-label="Navegação principal">
            {links.map((link, index) => (
              <a
                key={link.link}
                href={link.link}
                className="group flex items-center gap-2 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.12em] text-white/70 transition-colors hover:text-white"
              >
                <span className="text-[9px] text-[#ff6b4a]/80">0{index + 1}</span>
                {link.label}
                <span className="h-px w-0 bg-[#ff6b4a] transition-all duration-300 group-hover:w-3" />
              </a>
            ))}
          </nav>

          <a
            href={projectWhatsAppLink}
            className="flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-xs font-semibold text-black transition-colors duration-300 hover:bg-white/90 hover:shadow-2xl"
          >
            Começar meu projeto
            <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </div>
      </header>

      <div className="lg:hidden">
        <StaggeredMenu
          position="right"
          items={links}
          socialItems={[
            { label: "Instagram", link: "https://instagram.com" },
            { label: "LinkedIn", link: "https://linkedin.com" },
          ]}
          displaySocials
          displayItemNumbering
          isFixed={true}
          menuButtonColor="#ffffff"
          openMenuButtonColor="#ffffff"
          changeMenuColorOnOpen
          colors={["#ff6b4a", "#171719"]}
          logoUrl="/logo.png"
          accentColor="#ff6b4a"
        />
      </div>
    </>
  );
}