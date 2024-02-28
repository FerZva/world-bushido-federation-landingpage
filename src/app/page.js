import Header from "./components/Header";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import bushidoLogo from './assets/WORLD BUSHIDO.webp'
import Button from './components/Button';

export default function Home() {
  return (
    <body className="relative px-10 md:px-5 ">
      <Header />
      <main className="flex flex-row flex-wrap justify-between items-center md:flex-col sm:flex-col">
        <div className="w-full max-w-[50%] text-center p-10 md:order-2 md:max-w-full sm:max-w-full sm:order-2">
          <p>
            So far our Federations is full of Martial Artists a few Fighting
            stars, many Champion in different systems, so far we have been able
            to create a big family with the same beliefs, and the aplication of
            Warriors Code.
          </p>
          <br />
          <p>Shihan Jorge Borjas CEO & FOUNDER WBF</p>
          <Button buttontext="Join"/>
          <button></button>
        </div>
        <div className="w-full max-w-[50%] p-10 md:order-1 md:max-w-full sm:max-w-full sm:order-1">
          <Image
            src={bushidoLogo}
            className="w-full"
          />
        </div>
      </main>
    </body>
  );
}
