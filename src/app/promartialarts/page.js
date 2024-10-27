import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AcademyLogo from '../assets/newShield.png';
import Image from 'next/image';
import Sensei from '../assets/committee20N.jpg'
import ProMartialArtAcademy from '../assets/ProMartialArtAcademy.jpg'
import PMAGallery1 from '../assets/PMAGallery1.jpg'
import PMAGallery2 from '../assets/PMAGallery2.jpg'
import PMAGallery3 from '../assets/PMAGallery3.jpg'
import PMAGallery4 from '../assets/PMAGallery4.jpg'
import PMAGallery5 from '../assets/PMAGallery5.jpg'
import PMAGallery6 from '../assets/PMAGallery6.jpg'

const promartialarts = () => {
  return (
    <div className='container'>
        <Header />
        <div className='container_promartial-page'>
            <Image
             src={AcademyLogo} 
             alt='Pro Martial Arts Logo'
             width={300}
             height={300}
             className='container_promartial-page_image'
            />
            <div className='container_promartial-page_sensei-container'>
              <div className='container_promartial-page_sensei-container_title'>
                <h1 style={{ marginBottom: "50px" }}>Meet our Sensei!</h1>
                <h3>Sensei Fernando Velasquez</h3>
                <ul>
                  <li>Black Ribbon Hawaiian Kenpo IV DAN</li>
                  <li>Black Ribbon American Kenpo 1er DAN</li>
                  <li>Black Ribbon Kung Fu Hong Gar Style</li>
                  <li>Kickboxing master</li>
                  <li>Central American champion in combat and Katas Krane circuit, NBL among others (USA, South America, CA, Mexico)</li>
                  <li>Police Self Defense Instructor</li>
                  <li>National karate sports national team Honduras</li>
                  <li>Director of PRO MARTIAL ARTS Academies</li>
                </ul>
              </div>
              <div style={{ marginBottom: "50px" }}>
                <Image
                  src={Sensei}
                  width={500}
                  height={500}
                  alt='Sensei Fernando Velasquez Photo' 
                />
              </div>
              <div>
                <h1 style={{ marginBottom: "50px", textAlign: "center" }}>PRO MARTIAL ARTS ACADEMY</h1>
                <Image
                  src={ProMartialArtAcademy}
                  width={1200}
                  height={1000}
                  quality={100}
                  alt='Pro Martial Arts Academy Student group photo'
                  style={{ marginBottom: "50px" }}
                />
              </div>
              <div>
                <h1 style={{ marginBottom: "50px", textAlign: "center" }}>Pro Martial Arts Gallery</h1>
                <div style={{ marginBottom: "50px", display: "flex", justifyContent: "space-evenly", flexWrap: "wrap"}}>
                  <Image src={PMAGallery1} width={300} height={300} alt='Pro martial arts gallery photo' style={{ margin: "20px" }}/>
                  <Image src={PMAGallery2} width={300} height={300} alt='Pro martial arts gallery photo' style={{ margin: "20px" }}/>
                  <Image src={PMAGallery3} width={300} height={300} alt='Pro martial arts gallery photo' style={{ margin: "20px" }}/>
                  <Image src={PMAGallery4} width={300} height={300} alt='Pro martial arts gallery photo' style={{ margin: "20px" }}/>
                  <Image src={PMAGallery5} width={300} height={300} alt='Pro martial arts gallery photo' style={{ margin: "20px" }}/>
                  <Image src={PMAGallery6} width={300} height={300} alt='Pro martial arts gallery photo' style={{ margin: "20px" }}/>
                </div>
              </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default promartialarts