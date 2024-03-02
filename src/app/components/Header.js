"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NewDarkLogo from "../assets/logo.webp";

import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import Button from "../components/Button";

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
            height={100}
            priority={false}
          />
        </Link>
      </div>

      <nav
        className={`container_header_navigation`}
        style={{ display: menuState ? "flex" : "none" }}
      >
        <div className="container_header_navigation_menu">
          <Link href="./" className="container_header_navigation_menu_link">
            Home
          </Link>
          <Link href="/about" className="container_header_navigation_menu_link">
            OUR WBF
          </Link>
          <Link
            href="/committee"
            className="container_header_navigation_menu_link"
          >
            {" "}
            Committee
          </Link>
          <Link
            href="/memberships"
            className="container_header_navigation_menu_link"
          >
            Membership
          </Link>
          <Link href="/" className="container_header_navigation_menu_link">
            ICO WBFC
          </Link>
        </div>

        <div className="container_header_navigation_buttons">
          <MdOutlineShoppingBag className="container_header_navigation_buttons_shoping-icon" />
          <Button buttontext="Join" />
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
