"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LightLogo from "../assets/BUSHIDO1.png";
import DarkLogo from "../assets/BUSHIDO2.png";
import NewDarkLogo from "../assets/BUSHIDO2.webp";

import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [menuState, setMenuState] = useState(true);

  const toggleMenu = () => {
    setMenuState(!menuState)
  }

  return (
    <header className="flex justify-between h-[100px]">
      <div className="h-full">
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
      <nav className={`h-full items-center  className="py-4" md:block ${menuState ? 'hidden' : 'block'}`} >
        <Link href="./">Home</Link>
        <Link href="./products">OUR WBF</Link>
        <Link href="./">Committee</Link>
        <Link href="./">Membership</Link>
        <Link href="./">ICO WBFC</Link>
        <button>join</button>
      </nav>
      <div>
        
        <div onClick={toggleMenu} className="block md:hidden">
            {
                menuState ? 
                    <FaBars/>
                    : 
                    <AiOutlineClose/>
            }
        </div>
        
      </div>
    </header>
  );
}

export default Header;
