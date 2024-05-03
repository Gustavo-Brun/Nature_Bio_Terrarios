import Link from "next/link";

export const RequestQuote = () => {
  return (
    <section className="py-10 bg-[url('/images/background.jpeg')] ">
      <div className="m-auto w-[60%] grid justify-items-center my-10 p-5 border-2 rounded-xl shadow-2xl bg-white transition-transform duration-300 ease-in-out transform hover:scale-110">
        <div className="my-2"></div>

        <h3 className="my-2 text-3xl font-bold"> Gostou? </h3>

        <p className="my-4  text-xl   hover:text-gray-600 transition-colors duration-300">
          {" "}
          Vem conhecer nosso serviço feito especialmente para você e seu pet!{" "}
        </p>

        <Link
          href={"/form"}
          className="my-5 bg-tertiary-color hover:bg-gradient-to-r hover:from-secondary-color  hover:to-primary-color text-black font-bold py-2 px-6 rounded-full shadow-md transition-transform  ease-in-out transform hover:scale-110 active:text-red-600  "
        >
          Solicitar Orçamento Gratuito.
        </Link>
      </div>
    </section>
  );
};
