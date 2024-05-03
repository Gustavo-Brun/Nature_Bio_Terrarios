import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "../components/Navbar";
import { Whatsapp } from "../components/Whatsapp";
import { Footer } from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nature BIO Terrários",
  description:
    "Adicione um toque de natureza à sua casa com nossos terrários exclusivos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="overflow-x-hidden">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Whatsapp />
        <Footer />
      </body>
    </html>
  );
}
