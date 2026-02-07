import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "./components/ui/whatsapp-button";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elaine Santos | Estética Avançada e Bem-estar",
  description: "Transforme sua beleza com tratamentos estéticos avançados. Limpeza de pele, Botox, Harmonização e muito mais em Caraguatatuba.",
  openGraph: {
    title: "Elaine Santos | Estética Avançada",
    description: "Realce sua beleza com a especialista Elaine Santos. Agende sua avaliação hoje mesmo!",
    url: "https://estetica-elaine-santos.vercel.app/",
    siteName: "Elaine Santos Estética",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elaine Santos | Estética Avançada",
    description: "Agende seu horário e descubra o poder da estética avançada.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans bg-[var(--background)] text-[var(--foreground)]`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
