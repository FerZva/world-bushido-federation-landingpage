import Header from "./components/Header";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import bushidoLogo from './assets/WORLD BUSHIDO.webp'
import Button from './components/Button';
import './styles/styles.scss'

export default function Home() {
  return (
    <body className="container">
      <Header />
      <main className="container_introduction-container">
        <div className="container_introduction-container_description">
          <p>
            So far our Federations is full of Martial Artists a few Fighting
            stars, many Champion in different systems, so far we have been able
            to create a big family with the same beliefs, and the aplication of
            Warriors Code.
          </p>
          <br />
          <p>Hanshi Jorge Borjas CEO & FOUNDER WBF</p>
          <Button buttontext="Join"/>
          <button></button>
        </div>
        <div className="container_introduction-container_logo">
          <Image
            src={bushidoLogo}
            className="w-full"
          />
        </div>
      </main>
    </body>
  );
}
