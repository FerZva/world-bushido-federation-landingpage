"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NewDarkLogo from "../assets/logo.webp";

import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import Button from "../components/Button";
import '../styles/styles.scss'

const Header = () => {
  const [menuState, setMenuState] = useState(true);

  const toggleMenu = () => {
    setMenuState(!menuState);
  };

  return (
    <header className="container_header">
      <div className="container_header_logo-container">
        <Link href="/" className="container_header_logo-container_link">
          <Image
            src={NewDarkLogo}
            alt="World Bushido Federation Logo"
            width={100}
            
            priority={false}
          />
        </Link>
      </div>

      <nav
        className="container_header_navigation"
        style={{ display: menuState ? "flex" : "none" }}
      >
        <div className="container_header_navigation_menu">
          <Link href="./" className="container_header_navigation_menu_link">
            <p>Home</p>
          </Link>
          <Link href="/about" className="container_header_navigation_menu_link">
            <p>OUR WBF</p>
          </Link>
          <Link
            href="/committee"
            className="container_header_navigation_menu_link"
          
          >
            {" "}
            <p>Committee</p>
          </Link>
          <Link
            href="/memberships"
            className="container_header_navigation_menu_link"
          
          >
            <p>Membership</p>
          </Link>
          {/* <Link href="/" className="container_header_navigation_menu_link">
            <p>ICO WBFC</p>
          </Link> */}
        </div>

        <div className="container_header_navigation_buttons">
          <Link href="/cart">
            <MdOutlineShoppingBag className="container_header_navigation_buttons_shoping-icon" />
          </Link>
          <Button buttontext="Join" link="/cart" />
        </div>
      </nav>
      <div className="container_header_menu-toggle-container">
        <div
          onClick={toggleMenu}
          className="container_header_menu-toggle-container_toggle-button"
        >
          {menuState ? (
            <AiOutlineClose className="container_header_menu-toggle-container_toggle-button_close-icon" />
          ) : (
            <FaBars className="container_header_menu-toggle-container_toggle-button_burger-icon" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
