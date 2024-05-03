"use client";

import { useRef } from "react";

export const Header = () => {
  const videoRef = useRef(null);
  const imageRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
    imageRef.current.hidden = true;
  };

  return (
    <header className="w-full bg-gray-100">
      <div className="container flex flex-col lg:flex-row items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="relative">
          <video ref={videoRef} width={600}>
            <source src="/videos/meuvideo.mp4" type="video/mp4" />
            Desculpe, seu navegador não suporta vídeos HTML5.
          </video>
          <img
            ref={imageRef}
            onClick={handlePlay}
            src="/assets/botao-play.png"
            className="absolute top-[30%] left-[30%] md:top-[35%] md:left-[35%] lg:top-[40%] lg:left-[40%]  w-32 "
          />
        </div>
        <div className="space-y-3 m-10 lg:m-0">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Terrários Artesanais
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Adicione um toque de{" "}
            <span className="text-primary-color font-bold">natureza</span> à sua
            casa com nossos terrários exclusivos.
          </p>
        </div>
      </div>
    </header>
  );
};
