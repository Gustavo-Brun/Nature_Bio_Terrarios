export const Review = () => {
  return (
    <section className="py-12 md:py-24 mx-auto">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Clientes Satisfeitos
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Nossos terrários trazem alegria para os pets de todo o Brasil! Veja
            o que nossos clientes estão falando.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 items-start md:grid-cols-2 md:items-center gap-4 md:gap-8 lg:gap-12">
          <div className="flex flex-col items-center gap-2">
            <img
              alt="Avatar"
              className="rounded-full border border-gray-200 object-cover object-center"
              height="400"
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width="400"
            />
            <div className="space-y-2 text-left">
              <h3 className="text-2xl font-bold">Cliente 1.</h3>
              <p className="text-gray-500">
                "Lorem ipsum dolor sit amet. 33 quae tenetur eum quisquam porro
                et rerum voluptatibus At impedit animi ex exercitationem
                consequatur aut debitis omnis quo dolore vitae! Qui quaerat quia
                est accusantium aliquid est asperiores blanditiis qui animi
                laudantium eum autem cumque."
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img
              alt="Avatar"
              className="rounded-full border border-gray-200 object-cover object-center"
              height="400"
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width="400"
            />
            <div className="space-y-2 text-left">
              <h3 className="text-2xl font-bold">Cliente 2.</h3>
              <p className="text-gray-500">
                "Lorem ipsum dolor sit amet. 33 quae tenetur eum quisquam porro
                et rerum voluptatibus At impedit animi ex exercitationem
                consequatur aut debitis omnis quo dolore vitae! Qui quaerat quia
                est accusantium aliquid est asperiores blanditiis qui animi
                laudantium eum autem cumque."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
