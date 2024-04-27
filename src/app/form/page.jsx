import Link from "next/link";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

export default function Form() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-primary-color">
      <header className="flex items-center py-4 lg:py-6 xl:py-4 sticky top-0 backdrop-blur-sm bg-color-header-footer z-10 ">
        <div className="container flex items-center gap-4 px-4 lg:px-6 xl:gap-6">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            <img src="/logo/logoterrario.png" width={80} />
          </Link>
          <nav className="ml-auto space-x-4 text-lg">
            <Link
              className="font-medium transition-colors text-gray-500 hover:text-primary-color dark:text-gray-400 dark:hover:text-gray-50"
              href="/"
            >
              Início
            </Link>
            <Link
              className="font-medium transition-colors text-gray-500 hover:text-primary-color dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Produtos
            </Link>

            <Link
              className="font-medium transition-colors text-gray-500 hover:text-primary-color dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Contato
            </Link>
          </nav>
        </div>
      </header>

      <form className="grid max-w-lg gap-4 mx-auto my-10 border-2 rounded-lg p-4 bg-white">
        <h1 className="text-xl ">
          Preencha o formulário para receber seu orçamento personalizado 🌿🍃
        </h1>
        <label htmlFor="">Nome completo</label>
        <Input placeholder="Seu nome aqui." type="text" />
        <label htmlFor="">Celular/WhatsApp</label>
        <Input placeholder="+55 (99) 99999-9999" type="text" />
        <label htmlFor="">Espécie do seu animal</label>
        <Input placeholder="Insira a espécie do seu animal aqui" type="text" />

        <label htmlFor="">Insira seu CEP para calcularmos o frete.</label>
        <Input placeholder="EX: 01001-000." type="text" />
        <Button className="w-full" type="submit">
          Enviar
        </Button>
      </form>
      <footer className="pt-12 md:pb-10 backdrop-blur-sm bg-color-header-footer">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6 md:flex-row md:gap-10 lg:gap-16">
          <nav className="flex flex-col text-start gap-4 text-sm lg:gap-6 ">
            <Link className="font-medium" href="#">
              Endereço
            </Link>
            <Link className="font-medium" href="#">
              Email
            </Link>
            <Link className="font-medium" href="#">
              Telefone
            </Link>
            <Link className="font-medium" href="#">
              Horário de funcionamento
            </Link>
          </nav>
          <Link
            className="ml-auto flex flex-col items-center gap-2 font-semibold text-xl"
            href="#"
          >
            <span className="text-primary-color text-4xl">Nature BIO</span>
            <span className="text-tertiary-color">Terrários</span>
          </Link>

          <div className="grid gap-4 text-center md:ml-auto lg:gap-6">
            <Link
              className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <span>Instagram</span>
            </Link>
            <Link
              className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <span>Whatsapp</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
