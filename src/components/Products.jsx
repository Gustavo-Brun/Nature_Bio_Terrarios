import Image from "next/image";
import Link from "next/link";

export const Products = () => {
  return (
    <section className="mx-auto py-12 md:py-24">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Conheça Nossos Terrários
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            O ambiente mais natural possível que seu pet precisa 🌿🍃
          </p>
        </div>
        <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-16">
          <div className="flex flex-col  gap-2">
            <Image
              alt="Terrarium"
              className="overflow-hidden rounded-xl object-scale-down object-center"
              height={300}
              width={400}
              src="/images/Arboricolas.jpeg"
            />
            <div className="text-left">
              <h3 className="text-2xl font-bold">Terrários Arborícolas</h3>
              <Link
                href={"/form"}
                className="text-gray-500 dark:text-gray-400 font-bold text-lg"
              >
                Saiba mais
              </Link>
            </div>
          </div>
          <div className="flex flex-col  gap-2">
            <Image
              alt="Terrarium"
              className="overflow-hidden rounded-xl object-scale-down object-center"
              height={300}
              width={400}
              src="/images/Horizontais.jpeg"
            />
            <div className="text-left">
              <h3 className="text-2xl font-bold">Terrários Horizontais</h3>
              <Link
                href={"/form"}
                className="text-gray-500 dark:text-gray-400 font-bold text-lg"
              >
                Saiba mais
              </Link>
            </div>
          </div>
          <div className="flex flex-col  gap-2">
            <Image
              alt="Terrarium"
              className="overflow-hidden rounded-xl object-scale-down object-center"
              height={300}
              width={400}
              src="/images/Decorados.jpeg"
            />
            <div className="text-left">
              <h3 className="text-2xl font-bold">Terrários Decorados </h3>
              <Link
                href={"/form"}
                className="text-gray-500 dark:text-gray-400 font-bold text-lg"
              >
                Saiba mais
              </Link>
            </div>
          </div>
          <div className="flex flex-col  gap-2">
            <Image
              alt="Terrarium"
              className="overflow-hidden rounded-xl object-scale-down object-center"
              height={300}
              width={400}
              src="/images/Aquaterrarios.jpeg"
            />
            <div className="text-left">
              <h3 className="text-2xl font-bold">Aquaterrários</h3>
              <Link
                href={"/form"}
                className="text-gray-500 dark:text-gray-400 font-bold text-lg"
              >
                Saiba mais
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
