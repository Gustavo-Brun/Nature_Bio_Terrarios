import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export const Navbar = () => {
  return (
    <section className="flex items-center py-4 lg:py-6 xl:py-4 sticky top-0 text-white bg-black z-10 ">
      <div className="container flex items-center gap-2 px-4 lg:px-6 lg:gap-6">
        <Link className="flex items-center font-semibold" href="/">
          <Image
            src="/logo/logoterrario.png"
            width={80}
            height={80}
            alt="Logo"
          />
        </Link>
        <h1 className="lg:text-2xl italic font-bold">NATURE BIO TERRÁRIOS</h1>
        <nav className="ml-auto lg:text-xl">
          <ul className="flex gap-2 lg:gap-6">
            <li className="hidden lg:flex ">
              <Link
                className="font-medium transition-color hover:text-primary-color dark:text-gray-400 dark:hover:text-gray-50"
                href="/"
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                className="border-2 p-2 rounded-lg bg-primary-color text-black font-medium transition-color hover:text-secondary-color dark:text-gray-400 dark:hover:text-gray-50"
                href="/form"
              >
                Orçamento
              </Link>
            </li>
            <li className="hidden lg:flex">
              <Link
                className="font-medium transition-color hover:text-primary-color dark:text-gray-400 dark:hover:text-gray-50"
                href="https://wa.me/5521996178510?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+terr%C3%A1rios."
                target="blank"
              >
                Contato
              </Link>
            </li>
            <li className="hidden lg:flex">
              <Link
                href={"https://www.instagram.com/naturebioterrarios/"}
                target="blank"
              >
                <FaInstagram
                  style={{
                    color: "white",
                    fontSize: "30px",
                    background:
                      "linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45)",
                    borderRadius: "30%",
                    padding: "2px",
                  }}
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};
