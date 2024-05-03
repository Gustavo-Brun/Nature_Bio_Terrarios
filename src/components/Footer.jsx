import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="py-12 md:pb-10 backdrop-blur-sm bg-gradient-to-br from-primary-color ">
      <div className="flex flex-col items-center justify-center gap-8 px-4 text-center md:px-6 md:flex-row md:gap-10 lg:gap-16">
        <ul className="flex flex-col text-start gap-4 text-sm lg:gap-6 lg:text-xl">
          <li>
            <p className="font-medium">
              Horário de funcionamento: Segunda à Sexta / 9:00 - 18:00
            </p>
          </li>
          <li>
            <Link
              className="font-medium"
              href="mailto:naturebioterrarios@gmail.com"
            >
              Email: naturebioterrarios@gmail.com
            </Link>
          </li>
          <li>
            <Link className="font-medium" href="tel:+552199617-8510">
              Telefone: +55 21 99617-8510
            </Link>
          </li>
          <li>
            <p className="font-medium">CNPJ: 51.896.232/0001-00</p>
          </li>
        </ul>
        <Link
          className="mx-auto flex flex-col items-center gap-2 font-semibold "
          href="/"
        >
          <p className="text-primary-color text-4xl lg:text-5xl">Nature BIO</p>
          <p className="text-tertiary-color text-xl lg:text-2xl">Terrários</p>
        </Link>

        <div className="grid gap-4 text-center md:ml-auto lg:gap-6 lg:mr-48">
          <Link
            target="blank"
            href="https://www.instagram.com/naturebioterrarios/"
          >
            <FaInstagram
              style={{
                color: "white",
                fontSize: "40px",
                background:
                  "linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45)",
                borderRadius: "30%",
                padding: "2px",
              }}
            />
          </Link>
          <Link
            target="blank"
            href="https://wa.me/5521996178510?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+terr%C3%A1rios."
          >
            <FaWhatsapp
              style={{
                background: "linear-gradient(45deg, #25D366, #128C7E)",
                borderRadius: "30%",
                fontSize: "40px",
                padding: "2px",
              }}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};
