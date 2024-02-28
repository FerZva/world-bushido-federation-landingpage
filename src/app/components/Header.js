"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LightLogo from "../assets/BUSHIDO1.png";
import DarkLogo from "../assets/BUSHIDO2.png";
import NewDarkLogo from "../assets/logo.webp";

import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import Button from '../components/Button'


const Header = () => {
  const [menuState, setMenuState] = useState(true);

  const toggleMenu = () => {
    setMenuState(!menuState)
  }

  return (
    <header className="flex justify-between h-[100px] sticky top-0 w-full backdrop-blur-xl px-1">
      <div className="h-full py-8">
        <Link href="/" className="py-4">
            <Image
            src={NewDarkLogo}
            alt="World Bushido Federation Logo"
            width={100}
            height={100}
            priority={false}
            />
        </Link>
        
      </div>
      <nav className={`flex flex-row h-full items-center py-8 md:block md:bg ${menuState ? 'hidden' : 'block'}`} >
        <div>
          <Link href="./" className="min-h-full ml-[0.50rem]">Home</Link>
          <Link href="/about" className="min-h-full ml-[0.50rem]">OUR WBF</Link>
          <Link href="/committee" className="min-h-full ml-[0.50rem]"> Committee</Link>
          <Link href="/memberships" className="min-h-full ml-[0.50rem]">Membership</Link>
          <Link href="/" className="min-h-full ml-[0.50rem]">ICO WBFC</Link>
        </div>

        <div className="flex">
          <MdOutlineShoppingBag className="text-[30px]"/>
          <Button buttontext="Join"/>
        </div>
      </nav>
      <div>
        
        <div onClick={toggleMenu} className="block md:hidden py-8">
            { 
                menuState ? 
                    <FaBars className="text-[30px]"/>
                    : 
                    <AiOutlineClose className="text-[30px]"/>
            }
        </div>
        
      </div>
    </header>
  );
}

export default Header;
