import Header from "./components/Header";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import bushidoLogo from './assets/WORLD BUSHIDO.webp'
import bushidoPoster from './assets/WORLD BUSHIDO.webp'
import warriorIcon from './assets/martial-arts.png'
import growIcon from './assets/karate.png'
import learnIcon from './assets/master.png'
import communityIcon from './assets/respect.png'
import { motion, AnimatePresence } from 'framer-motion';

import Shield1 from './assets/1-150x150.png'
import Shield2 from './assets/2-150x150.png'
import Shield3 from './assets/3-150x150.png'
import Shield4 from './assets/4-150x150.png'
import Shield5 from './assets/5-150x150.png'
import Shield6 from './assets/6-150x150.png'
import Shield7 from './assets/7-150x150.png'
import Shield8 from './assets/8-150x150.png'
import Shield9 from './assets/9-150x150.png'
import Shield10 from './assets/10-150x150.png'
import Shield11 from './assets/11-150x150.png'
import Shield12 from './assets/12-150x150.png'
import Shield13 from './assets/13-150x150.png'
import Shield14 from './assets/14-150x150.png'
import Shield15 from './assets/15-150x150.png'
import Shield16 from './assets/16-150x150.png'
import Shield17 from './assets/17-150x150.png'
import Shield18 from './assets/18-150x150.png'
import Shield19 from './assets/19-150x150.png'
import Shield20 from './assets/20-150x150.png'
import Shield21 from './assets/21-150x150.png'

import committee1 from './assets/committee17.jpg'
import committee2 from './assets/committee14.png'
import committee3 from './assets/committee16.png'
import committee4 from './assets/committee3.png'

import Button from './components/Button';
import './styles/styles.scss'


// import { useSectionInView } from "@/lib/hooks";
// import { motion } from "framer-motion";
import Footer from './components/Footer'

export default function Home() {
  
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <body>
      <div className="container">
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
            <Button buttontext="Join" link="/memberships"/>
            {/* <button></button> */}
          </div>
          <div className="container_introduction-container_logo">
            <Image
              src={bushidoLogo}
              className="container_introduction-container_logo_image"
              width={400}
              height={400}
            />
          </div>
        </main>

        <section className="container_cardbenefits-container">
            <div className="container_cardbenefits-container_card">
              <Image src={communityIcon} width={100} height={100} alt="card picture"/>
              <h3 className="container_cardbenefits-container_card_title">Community with honor</h3>
              <p className="container_cardbenefits-container_card_description">We are unifying martial arts and returning to real values</p>
            </div>
            <div className="container_cardbenefits-container_card">
              <Image src={warriorIcon} width={100} height={100} alt="card picture"/>
              <h3 className="container_cardbenefits-container_card_title">Verified  Warriors</h3>
              <p className="container_cardbenefits-container_card_description">We verify and validate your martial rank at an international level. Join out great community.</p>
            </div>
            <div className="container_cardbenefits-container_card">
              <Image src={learnIcon} width={100} height={100} alt="card picture"/>
              <h3 className="container_cardbenefits-container_card_title">Learn from the best</h3>
              <p className="container_cardbenefits-container_card_description">We have a staff of great masters and great cinema martial artist.</p>
            </div>
            <div className="container_cardbenefits-container_card">
              <Image src={growIcon} width={100} height={100} alt="card picture" />
              <h3 className="container_cardbenefits-container_card_title">Grow with us</h3>
              <p className="container_cardbenefits-container_card_description">Local events and stream, participate in out events, both local and international meetings, free for members.</p>
            </div>
        </section>

        <section className="container_pogrambushido">
            <div className="container_pogrambushido_logo">
              <Image src={bushidoPoster} width={300} height={300} alt="logo"/>
            </div>
            <div className="container_pogrambushido_description">
              <h3>WORLD BUSHIDO FEDERATION</h3>
              <p>
              The goal of the World Bushido Federation Teaching and passing on the right tradition to martial artists. The unity, respect, progress and truth of martial arts, which will be seen in Bushido by attracting world-class famous and professional grandmasters in every style of martial arts.
              </p>
              <br />
              <p>
              Program of Bushido Federation in the world
              Promotion and scientific and professional training of martial arts for those interested in martial sports by holding training classes, specialized seminars, advanced classes, coaching courses, holding professional and amateur competitions in all types of martial sports and in addition to awarding Official and valid certificates with the seal and signature of the great and famous professors of the world.
              </p>
              {/* <Image alt="CEO Picture"/> */}
          </div>
        </section>

        <section className="container_commite-introduction">
          <div className="container_commite-introduction_description">
            <h3>World Bushido Representatives</h3>
            <p>So far our Federations is full of Martial Artists a few Fighting stars, many Champion in different systems, so far we have been able to create a big family with the same beliefs, and the aplication of Warriors Code.</p>

            <Link href="/committee"><p>Meet the all committee</p></Link>
          </div>

          <div className="container_commite-introduction_commitecard-container">
            <div className="container_commite-introduction_commitecard-container_card">
              <Image 
                src={committee1} 
                alt="committee picture" 
                width={50} 
                height={50}
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

            <div className="container_commite-introduction_commitecard-container_card">
              <Image 
                src={committee2} 
                alt="committee picture" 
                width={50} 
                height={50}
                className="container_commite-introduction_commitecard-container_card_image"
              />

              <div className="container_commite-introduction_commitecard-container_card_description">
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

        <div className="container_verifications-container">
          <div className="container_verifications-container_card">
            <Image src={Shield1} alt="Verification Picture"/>
          </div>
          <div className="container_verifications-container_card">
            <Image src={Shield2} alt="Verification Picture"/>
          </div>
          <div className="container_verifications-container_card">
            <Image src={Shield3} alt="Verification Picture"/>
          </div>
          <div className="container_verifications-container_card">
            <Image src={Shield4} alt="Verification Picture"/>
          </div>
          <div className="container_verifications-container_card">
            <Image src={Shield5} alt="Verification Picture"/>
          </div>
          <div className="container_verifications-container_card">
            <Image src={Shield6} alt="Verification Picture"/>
          </div>
          <div className="container_verifications-container_card">
            <Image src={Shield7} alt="Verification Picture"/>
          </div>
          <div className="container_verifications-container_card">
            <Image src={Shield8} alt="Verification Picture"/>
          </div>
          <div className="container_verifications-container_card">
            <Image src={Shield9} alt="Verification Picture"/>
          </div>
          <div className="container_verifications-container_card">
            <Image src={Shield10} alt="Verification Picture"/>
          </div>
          <div className="container_verifications-container_card">
            <Image src={Shield11} alt="Verification Picture"/>
          </div>
          <div className="container_verifications-container_card">
            <Image src={Shield12} alt="Verification Picture"/>
          </div>
          <div className="container_verifications-container_card">
            <Image src={Shield13} alt="Verification Picture"/>
          </div>
          <div className="container_verifications-container_card">
            <Image src={Shield14} alt="Verification Picture"/>
          </div>
          <div className="container_verifications-container_card">
            <Image src={Shield15} alt="Verification Picture"/>
          </div>
          <div className="container_verifications-container_card">
            <Image src={Shield16} alt="Verification Picture"/>
          </div>
          <div className="container_verifications-container_card">
            <Image src={Shield17} alt="Verification Picture"/>
          </div>
          <div className="container_verifications-container_card">
            <Image src={Shield18} alt="Verification Picture"/>
          </div>
          <div className="container_verifications-container_card">
            <Image src={Shield19} alt="Verification Picture"/>
          </div>
          <div className="container_verifications-container_card">
            <Image src={Shield20}e alt="Verification Picture"/>
          </div>
          <div className="container_verifications-container_card">
            <Image src={Shield21} alt="Verification Picture"/>
          </div>
        </div>

        <Footer />
      </div>
    </body>
  );
}
