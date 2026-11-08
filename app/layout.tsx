import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    default: "Sunset | Sites e sistemas sob medida",
    template: "%s | Sunset",
  },
  description:
    "A Sunset cria sites e sistemas sob medida para empresas que querem vender melhor, automatizar processos e lançar novas operações digitais.",
  keywords: [
    "criação de sites",
    "site institucional",
    "sistemas sob medida",
    "desenvolvimento web",
    "automação de processos",
    "Sunset",
  ],
  authors: [{ name: "Sunset" }],
  creator: "Sunset",
  publisher: "Sunset",
  category: "technology",
  applicationName: "Sunset",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Sunset",
    title: "Sunset | Sites e sistemas sob medida",
    description:
      "Sites e sistemas sob medida para empresas que querem crescer no digital.",
  },
  twitter: {
    card: "summary",
    title: "Sunset | Sites e sistemas sob medida",
    description:
      "Sites e sistemas sob medida para empresas que querem crescer no digital.",
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={cn("h-full antialiased", "font-sans", geist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Sunset",
              description:
                "Criação de sites e sistemas sob medida para empresas.",
              image: "/sunset-logo.svg",
              areaServed: {
                "@type": "Country",
                name: "Brasil",
              },
              telephone: "+55 11 96752-5037",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55 11 96752-5037",
                contactType: "customer service",
                availableLanguage: "Portuguese",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
