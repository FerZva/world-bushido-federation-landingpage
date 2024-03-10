"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import NewDarkLogo from "../assets/logo.webp";

import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import Button from "../components/Button";
import "../styles/styles.scss";
import { motion } from "framer-motion";

const Header = () => {
  const [menuState, setMenuState] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleMenu = () => {
    if (isSmallScreen) {
      setMenuOpen(!menuOpen);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1100);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 1200) {
        setMenuState(false);
      } else {
        setMenuState(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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

      <motion.nav className={`menu ${menuOpen ? "menu-open" : ""}`}>
        <div className="container_header_navigation_menu">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginRight: "30px",
            }}
          >
            {isSmallScreen && (
              <Link href="/" className="container_header_logo-container_link">
                <Image
                  src={NewDarkLogo}
                  alt="World Bushido Federation Logo"
                  width={100}
                  priority={false}
                  style={{ marginLeft: "40px", marginTop: "10px" }}
                />
              </Link>
            )}
            <div
              onClick={toggleMenu}
              className="container_header_menu-toggle-container_toggle-button"
            >
              <AiOutlineClose className="container_header_menu-toggle-container_toggle-button_close-icon" />
            </div>
          </div>
          <Link
            href="./"
            className="container_header_navigation_menu_link"
            onClick={toggleMenu}
          >
            <p>Home</p>
          </Link>
          <Link
            href="/about"
            className="container_header_navigation_menu_link"
            onClick={toggleMenu}
          >
            <p>OUR WBF</p>
          </Link>
          <Link
            href="/committee"
            className="container_header_navigation_menu_link"
            onClick={toggleMenu}
          >
            {" "}
            <p>Committee</p>
          </Link>
          <Link
            href="/memberships"
            className="container_header_navigation_menu_link"
            onClick={toggleMenu}
          >
            <p>Membership</p>
          </Link>
        </div>

        <div className="container_header_navigation_buttons">
          <Link href="/memberships">
            <MdOutlineShoppingBag className="container_header_navigation_buttons_shoping-icon" />
          </Link>
          <Button buttontext="Join" link="/memberships" />
        </div>
      </motion.nav>
      <div className="container_header_menu-toggle-container">
        <div
          onClick={toggleMenu}
          className="container_header_menu-toggle-container_toggle-button"
        >
          <FaBars className="container_header_menu-toggle-container_toggle-button_burger-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
