"use client";

import Link from "next/link";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { IoIosReturnLeft } from "react-icons/io";

import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitFx = (data) => console.log(data);

  return (
    <div className="flex flex-col p-4 bg-gradient-to-br from-primary-color">
      <Link
        href="/"
        className="w-fit p-2 bg-white border-2 rounded-2xl font-bold"
      >
        <p>Voltar</p>
        <IoIosReturnLeft style={{ fontSize: 22 }} />
      </Link>

      <form
        onSubmit={handleSubmit(onSubmitFx)}
        className="flex flex-col max-w-lg gap-4 space-y-2 mx-auto my-14 border-2 rounded-lg p-4 bg-white lg:text-2xl lg:gap-6"
      >
        <h1 className="text-xl lg:text-3xl lg:mb-4 font-bold">
          Preencha o formulário para receber seu orçamento personalizado 🌿🍃
        </h1>
        <div>
          <label>Nome completo</label>
          <Input
            placeholder="Seu nome aqui."
            type="text"
            {...register("name", { required: true })}
          />
          {errors.name?.type === "required" && (
            <p className="text-xs text-[#CF2C20]">Informe seu nome.</p>
          )}
        </div>
        <div>
          <label>Celular/WhatsApp</label>
          <Input
            placeholder="+55 (99) 99999-9999"
            type="text"
            {...register("contact", { required: true })}
          />
          {errors.contact?.type === "required" && (
            <p className="text-xs text-[#CF2C20]">
              Informe um telefone para contato.
            </p>
          )}
        </div>
        <div>
          <label>Espécie do seu animal</label>
          <Input
            placeholder="Insira a espécie do seu animal aqui"
            type="text"
            {...register("animal", { required: true })}
          />
          {errors.animal?.type === "required" && (
            <p className="text-xs text-[#CF2C20]">
              Informe a espécie do seu pet.
            </p>
          )}
        </div>
        <div>
          <label>O que está buscando?</label>
          <select
            defaultValue={"default"}
            className="text-sm lg:text-xl"
            {...register("product", {
              required: true,
              validate: (value) => value !== "default",
            })}
          >
            <option value="default" disabled={true}>
              Selecione uma opção.
            </option>
            <option value="Terrario Completo">Terrário Completo</option>
            <option value="Terrario Horizontal">Terrário Horizontal</option>
            <option value="Terrario Arborícola">Terrário Arborícola</option>
            <option value="Terrario Completo">Aquaterrários</option>
            <option value="Decoracao de Terrario">Decoração de terrário</option>
            <option value="outro">Outro</option>
          </select>
          {errors.product?.type === "validate" && (
            <p className="text-xs text-[#CF2C20]">
              Selecione uma das opções acima.
            </p>
          )}
        </div>
        <div>
          <label>Insira seu CEP para calcularmos o frete.</label>
          <Input
            placeholder="EX: 01001-000."
            type="text"
            {...register("cep", { required: true })}
          />
          {errors.cep?.type === "required" && (
            <p className="text-xs text-[#CF2C20]">
              O CEP é necessário para realizarmos o cálculo do frete.
            </p>
          )}
        </div>
        <Button className="w-full" type="submit">
          Enviar
        </Button>
      </form>
    </div>
  );
}
