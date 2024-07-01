"use client";

import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

import { useForm } from "react-hook-form";
import { useRef } from "react";

export const Contact = () => {
  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitFx = () => {
    console.log(form.current);

    emailjs
      .sendForm("service_3whjnik", "template_oiov7fc", form.current, {
        publicKey: "spveiFpEUltnCi9pZ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <section className="flex flex-col items-center gap-24 py-12 md:py-24 lg:py-32">
      <div className="w-screen text-center ">
        <h2 className="underline text-4xl lg:text-6xl">Ou se preferir</h2>
      </div>
      <div className="container flex flex-col lg:flex-row items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Fale conosco!
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Tem alguma dúvida? Entre em contato, estamos sempre à disposição
            para te ajudar.
          </p>
        </div>
        <form
          className="grid max-w-md gap-4 mx-auto"
          onSubmit={handleSubmit(onSubmitFx)}
        >
          <div className="grid grid-cols-2 gap-4 items-center">
            <Input
              className={`${errors.name ? "border-[#CF2C20]" : ""}`}
              placeholder="Nome"
              type="text"
              {...register("name", { required: true })}
            />
            {errors.name?.type === "required" && (
              <p className="text-xs text-[#CF2C20]">Informe seu nome.</p>
            )}
            <Input
              placeholder="Sobrenome"
              type="text"
              {...register("surname")}
            />
          </div>
          <Input
            className={`${errors.contact ? "border-[#CF2C20]" : ""}`}
            placeholder="Email ou Telefone"
            type="text"
            {...register("contact", { required: true })}
          />
          {errors.contact?.type === "required" && (
            <p className="text-xs text-[#CF2C20]">
              Informe seu e-mail ou telefone.
            </p>
          )}
          <Input
            placeholder="Assunto (Opcional)"
            type="text"
            {...register("subject")}
          />
          <Textarea
            className={`${
              errors.text ? "border-[#CF2C20]" : ""
            } min-h-[150px] w-full`}
            placeholder="Sua mensagem."
            {...register("text", { required: true })}
          />
          {errors.text?.type === "required" && (
            <p className="text-xs text-[#CF2C20]">Escreva uma mensagem.</p>
          )}
          <Button className="w-full" type="submit">
            Enviar
          </Button>
        </form>
      </div>
    </section>
  );
};
