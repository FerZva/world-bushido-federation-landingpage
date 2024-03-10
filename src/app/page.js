"use client";
import Header from "./components/Header";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import bushidoLogo from './assets/WORLD BUSHIDO.png'
import bushidoPoster from './assets/WORLD BUSHIDO.png'
import warriorIcon from './assets/martial-arts.png'
import growIcon from './assets/karate.png'
import learnIcon from './assets/master.png'
import communityIcon from './assets/respect.png'
import { motion, useScroll, useTransform } from "framer-motion";
import { Shields } from './services/data'

import committee1 from './assets/committee17.jpg'
import committee2 from './assets/committee14.png'
import committee3 from './assets/committee16.png'
import committee4 from './assets/committee3.png'

import Button from './components/Button';
import './styles/styles.scss';

import Footer from './components/Footer';

export default function Home() {
  const [width, setWidth] = useState(0)
  const carousel = useRef();

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [])

  const [isVisible, setIsVisible] = useState(false);
  const firstDivRef = useRef(null);
  const secondDivRef = useRef(null);

  const thirdDivRef = useRef(null);
  const fourthDivRef = useRef(null);
  const fifthDivRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (firstDivRef.current && secondDivRef.current) {
        const topFirstDiv = firstDivRef.current.getBoundingClientRect().top;
        const topSecondDiv = secondDivRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(topFirstDiv < windowHeight && topSecondDiv < windowHeight);
      }

      if (thirdDivRef.current && fourthDivRef.current) {
        const topThirdDiv = thirdDivRef.current.getBoundingClientRect().top;
        const topFourthDiv = fourthDivRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(
          topThirdDiv < windowHeight &&
          topFourthDiv < windowHeight
        );
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  

  return (
    <body>
      <div className="container">
        <Header />
        <motion.main 
          className="container_introduction-container"
          ref={ref}
        >
          <motion.div
            className="container_introduction-container_description"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p>
              So far our Federations is full of Martial Artists a few Fighting
              stars, many Champion in different systems, so far we have been able
              to create a big family with the same beliefs, and the aplication of
              Warriors Code.
            </p>
            <br />
            <p>Hanshi Jorge Borjas CEO & FOUNDER WBF</p>
            <Button buttontext="Join" link="/memberships"/>
          </motion.div>
          <motion.div
           className="container_introduction-container_logo"
           initial={{ y: 100, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.5 }} 
          >
            <Image
              src={bushidoLogo}
              className="container_introduction-container_logo_image"
              width={400}
              height={400}
            />
          </motion.div>
        </motion.main>

        <motion.section className="container_cardbenefits-container"
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress
        }}>
            <motion.div 
              className="container_cardbenefits-container_card"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image src={communityIcon} width={100} height={100} alt="card picture"/>
              <h3 className="container_cardbenefits-container_card_title">Community with honor</h3>
              <p className="container_cardbenefits-container_card_description">We are unifying martial arts and returning to real values</p>
            </motion.div>
            <motion.div 
              className="container_cardbenefits-container_card"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image src={warriorIcon} width={100} height={100} alt="card picture"/>
              <h3 className="container_cardbenefits-container_card_title">Verified  Warriors</h3>
              <p className="container_cardbenefits-container_card_description">We verify and validate your martial rank at an international level. Join out great community.</p>
            </motion.div>
            <motion.div 
              className="container_cardbenefits-container_card"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image src={learnIcon} width={100} height={100} alt="card picture"/>
              <h3 className="container_cardbenefits-container_card_title">Learn from the best</h3>
              <p className="container_cardbenefits-container_card_description">We have a staff of great masters and great cinema martial artist.</p>
            </motion.div>
            <motion.div 
              className="container_cardbenefits-container_card"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image src={growIcon} width={100} height={100} alt="card picture" />
              <h3 className="container_cardbenefits-container_card_title">Grow with us</h3>
              <p className="container_cardbenefits-container_card_description">Local events and stream, participate in out events, both local and international meetings, free for members.</p>
            </motion.div>
        </motion.section>

        <section className="container_pogrambushido">
            <div ref={firstDivRef} className="container_pogrambushido_logo">
              <motion.div
                initial={{ x: -1000, opacity: 0 }}
                animate={isVisible ? { x: 0, opacity: 1 } : { x: -1000, opacity: 0 }}
                transition={{ duration: 0.80 }}
              >
                <Image src={bushidoPoster} width={300} height={300} alt="logo"/>
              </motion.div>
            </div>
            <div ref={secondDivRef} className="container_pogrambushido_description">
              <motion.div
                initial={{ x: 1000, opacity: 0 }}
                animate={isVisible ? { x: 0, opacity: 1 } : { x: 1000, opacity: 0 }}
                transition={{ duration: 0.80 }}
              >
                <h3>WORLD BUSHIDO FEDERATION</h3>
                <p>
                The goal of the World Bushido Federation Teaching and passing on the right tradition to martial artists. The unity, respect, progress and truth of martial arts, which will be seen in Bushido by attracting world-class famous and professional grandmasters in every style of martial arts.
                </p>
                <br />
                <p>
                Program of Bushido Federation in the world
                Promotion and scientific and professional training of martial arts for those interested in martial sports by holding training classes, specialized seminars, advanced classes, coaching courses, holding professional and amateur competitions in all types of martial sports and in addition to awarding Official and valid certificates with the seal and signature of the great and famous professors of the world.
                </p>
                </motion.div>
              {/* <Image alt="CEO Picture"/> */}
          </div>
        </section>

        <section ref={thirdDivRef} className="container_commite-introduction">
          <motion.div 
            className="container_commite-introduction_description"
            initial={{ y: 1000, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 1000, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="container_commite-introduction_description_title">World Bushido Representatives</h3>
            <p className="container_commite-introduction_description_description">So far our Federations is full of Martial Artists a few Fighting stars, many Champion in different systems, so far we have been able to create a big family with the same beliefs, and the aplication of Warriors Code.</p>

            <Link href="/committee" className="container_commite-introduction_description_link"><p>Meet the all committee</p></Link>
          </motion.div>

          <div className="container_commite-introduction_commitecard-container">
            <div className="container_commite-introduction_commitecard-container_card">
              <Image
                src={committee1}
                alt="committee picture"
                width={50}
                height={50}
                initial={{ y: 1000, opacity: 0 }}
                animate={isVisible ? { y: 0, opacity: 1 } : { y: 1000, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="container_commite-introduction_commitecard-container_card_image"
              />

              <div className="container_commite-introduction_commitecard-container_card_description">
                <label
                  htmlFor=""
                  className="container_commite-introduction_commitecard-container_card_description_name"
                >
                  Dr. Robert M. Goldman,
                </label>

                <label
                  htmlFor=""
                  className="container_commite-introduction_commitecard-container_card_description_position"
                >
                  Board of Directors, MD, Ph.D. DO, ...
                </label>
              </div>

            </div>

            <div 
              className="container_commite-introduction_commitecard-container_card"
              useRef={fourthDivRef}
            >
              <Image
                src={committee2}
                alt="committee picture"
                width={50}
                height={50}
                initial={{ y: 1000, opacity: 0 }}
                animate={isVisible ? { y: 0, opacity: 1 } : { y: 1000, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="container_commite-introduction_commitecard-container_card_image"
              />

              <div className="container_commite-introduction_commitecard-container_card_description"
              >
                <label
                  htmlFor=""
                  className="container_commite-introduction_commitecard-container_card_description_name"
                >
                  GM. Master Richard Norton
                </label>

                <label
                  htmlFor=""
                  className="container_commite-introduction_commitecard-container_card_description_position"
                >
                  Second Vice President Bushido Federation
                </label>
              </div>

            </div>

            <div className="container_commite-introduction_commitecard-container_card">
              <Image
                src={committee3}
                alt="committee picture"
                width={50}
                height={50}
                initial={{ y: 1000, opacity: 0 }}
                animate={isVisible ? { y: 0, opacity: 1 } : { y: 1000, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="container_commite-introduction_commitecard-container_card_image"
              />

              <div className="container_commite-introduction_commitecard-container_card_description">
                <label
                  className="container_commite-introduction_commitecard-container_card_description_name"
                  htmlFor=""
                >
                  Shihan Juan Manuel Olmedo
                </label>
                <label
                  className="container_commite-introduction_commitecard-container_card_description_position"
                  htmlFor=""
                >
                  {/* occupation */}
                </label>
              </div>

            </div>

            <div className="container_commite-introduction_commitecard-container_card">
              <Image
                src={committee4}
                alt="committee picture"
                width={50}
                height={50}
                initial={{ y: 1000, opacity: 0 }}
                animate={isVisible ? { y: 0, opacity: 1 } : { y: 1000, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="container_commite-introduction_commitecard-container_card_image"
              />

             <div className="container_commite-introduction_commitecard-container_card_description">
              <label
               className="container_commite-introduction_commitecard-container_card_description_name"
               htmlFor=""
              >
                Jorge Borjas
              </label>
              <label
                className="container_commite-introduction_commitecard-container_card_description_position"
                htmlFor=""
              >
                Founder & CEO, Shiban
              </label>
             </div>
            </div>
          </div>
        </section>

        <motion.div 
          className="container_verifications-container_carousel"
          ref={carousel}
          whileTap={{cursor: "grabbing"}}
        >
          <motion.div 
            className="container_verifications-container_carousel_inner-carousel"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
          {Shields.map((shield, index) => {
      const { shieldImage1, shield2, shield3, shield4, shield5, shield6, shield7, shield8, shield9, shield10, shield11, shield12, shield13, shield14, shield15, shield16, shield17, shield18, shield19, shield20, shield21 } = shield;
      return (
        <motion.div className="container_verifications-container_carousel_inner-carousel_card" key={shield}>
          <Image src={shieldImage1 || shield2 || shield3 || shield4 || shield5 || shield6 || shield7 || shield8 || shield9 || shield10 || shield11 || shield12 || shield13 || shield14 || shield15 || shield16 || shield17 || shield18 || shield19 || shield20 || shield21} alt="Verification Picture"/>
        </motion.div>
      );
    })}
          </motion.div>
        </motion.div>

        <Footer />
      </div>
    </body>
  );
}
