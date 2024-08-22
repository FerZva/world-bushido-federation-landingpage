"use client"
import React, { useState, useEffect } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image';
import CertificateImg from '../assets/Certificate.jpg';
import Link from 'next/link';
import { AiOutlineStock } from "react-icons/ai";
import ReferPartnerLogoDesktop from '../assets/ReferSSLogo.png'
import ReferPartnerLogoMobile from '../assets/ReferSSLogo mobile.png'
import Button from '../../app/components/Button';
import '../styles/styles.scss'

function memberships() {
  // Estado para almacenar el ancho actual de la ventana
  const [windowWidth, setWindowWidth] = useState(null);

  // Efecto para actualizar el ancho de la ventana
  useEffect(() => {
    // Función para actualizar el estado con el nuevo ancho de la ventana
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Configurar el listener para el evento resize
    window.addEventListener('resize', handleResize);

    // Llamar a handleResize para establecer el ancho inicial
    handleResize();

    // Limpiar el listener al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Función que retorna el componente de imagen basado en el ancho de la ventana
  const renderImage = () => {
    if (windowWidth <= 850) {
      // Si el ancho es menor o igual a 850px, mostrar imagen 2
      return <Image className='container_membershippage-container_refer-container_image' src={ReferPartnerLogoMobile} alt="Image 2" width={500} height={500} />;
    } else if (windowWidth > 850) {
      // Si el ancho es mayor que 850px, mostrar imagen 1
      return <Image className='container_membershippage-container_refer-container_image' src={ReferPartnerLogoDesktop} alt="Image 1" width={500} height={500} />;
    }
  };


  return (
    <div className='container'>
      <Header />
      <div className='container_membershippage-container'>
        {/* */}
        <div className='container_membershippage-container_products-container'>

          <div className='container_membershippage-container_products-container_description'>
            <h2>Memberships of WBF</h2>
          </div>

          <div className="container_membershippage-container_products-container_card-container">
            <div className="container_membershippage-container_products-container_card-container_card">
                <h3 className="container_membershippage-container_products-container_card-container_card_title">
                  Membership
                </h3>
                <h3 className="container_membershippage-container_products-container_card-container_card_price">
                  $45
                </h3>
                <p className="container_membershippage-container_products-container_card-container_card_label">
                  Per Annual
                </p>
                
                <p className="container_membershippage-container_products-container_card-container_card_description">
                  Join the largest martial artist community in the world, acess to our library and local conferences and stream, Validate your title worldwide.
                </p>
                                 
                <Link
                  href={{
                    pathname: "/cart",
                    query: {
                      productName: "Membership",
                      productPrice: "47.94",
                      description: "Join the largest martial artist community in the world, acess to our library and local conferences and stream, Validate your title worldwide.",
                      redirecto: "https://buy.stripe.com/8wM5lW2wLa0rgV2bJe"
                    },
                  }}
                >
                  <button>Join Now</button>
                </Link>
            </div>
            
              <div className="container_membershippage-container_products-container_card-container_card">
                <h3 className="container_membershippage-container_products-container_card-container_card_title">
                  Monthly Membership
                </h3>
                <h3 className="container_membershippage-container_products-container_card-container_card_price">
                  $9.99
                </h3>
                <p className="container_membershippage-container_products-container_card-container_card_label">
                  Per Month
                </p>
                
                <p className="container_membershippage-container_products-container_card-container_card_description">
                  Join the largest martial artist community in the world, acess to our library and local conferences and stream, Validate your title worldwide.
                </p>
                                 
                <Link
                  href={{
                    pathname: "/cart",
                    query: {
                      productName: "Monthly Membership",
                      productPrice: "10.38",
                      description: "Join the largest martial artist community in the world, acess to our library and local conferences and stream, Validate your title worldwide.",
                      redirecto: "https://buy.stripe.com/fZebKkc7la0rfQY5km"
                    },
                  }}
                >
                  <button>Join Now</button>
                </Link>
            </div>

            <div className="container_membershippage-container_products-container_card-container_card">
                <h3 className="container_membershippage-container_products-container_card-container_card_title">Instructor Certificate</h3>
                <h3 className="container_membershippage-container_products-container_card-container_card_price">$750</h3>
                <p className="container_membershippage-container_products-container_card-container_card_label">Most Popular Choise</p>
                
                <p className="container_membershippage-container_products-container_card-container_card_description">
                  Certified internationally as an instructor in WBF, receive full access as a member, receive commissions for each student affiliated with us, receive exclusive grand master training.
                </p>
                 <Link
                  href={{
                    pathname: "/cart",
                    query: {
                      productName: "Instructor Certificate",
                      productPrice: "779.40",
                      description: "Certified internationally as an instructor in WBF, receive full access as a member, receive commissions for each student affiliated with us, receive exclusive grand master training.",
                      redirecto: "https://buy.stripe.com/4gweWwb3hgoP7ks147"
                    },
                  }}
                >
                  <button>Join Now</button>
                </Link> 
                {/* <Link
                    href="https://buy.stripe.com/7sI9B5glGehL53y5kx"
                    target="_self"
                  >
                    <button>Join Now</button>
                  </Link> */}
            </div>

            <div className="container_membershippage-container_products-container_card-container_card">
                <h3 className="container_membershippage-container_products-container_card-container_card_title">ID CARD WBF</h3>
                <h3 className="container_membershippage-container_products-container_card-container_card_price">$250</h3>
                <p className="container_membershippage-container_products-container_card-container_card_description">
                  Certified internationally as an instructor in WBF, receive full access as a member, receive commissions for each student affiliated with us, receive exclusive grand master training
                </p>
                <Link
                  href={{
                    pathname: "/cart",
                    query: {
                      productName: "ID CARD WBF", 
                      productPrice: "259.80",
                      description: "Certified internationally as an instructor in WBF, receive full access as a member, receive commissions for each student affiliated with us, receive exclusive grand master training",
                      redirecto: "https://buy.stripe.com/eVa9Cceft7SjawEbIM"
                    },
                  }}
                >
                  <button>Join Now</button>
                </Link>
                {/* <Link
                    href="https://buy.stripe.com/6oEcNh0mI3D7brWdR4"
                    target="_self"
                  >
                    <button>Join Now</button>
                  </Link> */}
            </div>
          </div>
        {/* <div className='container_membershippage-container_refer-container'>
              <h3 className='container_membershippage-container_refer-container_title'>Are you refer from Silvio Simac UK?</h3>
              {windowWidth && renderImage()}
              <button className='container_membershippage-container_refer-container_button'><Link className='container_membershippage-container_refer-container_button_link' href="/memberships/silviosimac">Continue here</Link></button>
        </div> */}
        </div>
        {/* Investment sections */}
        <div className='container_membershippage-container_products-container'>
          <div className='container_membershippage-container_products-container_title'>
            <h2 className='container_membershippage-container_products-container_title_text'>Join to World Bushido Federation and start to investing</h2>
            <p className='container_membershippage-container_products-container_title_text'>Invest in our company to join an experienced and growing team committed to innovation and long-term success.</p>
          </div>
          <div className='container_membershippage-container_products-container_investcard-container'>
          <div className='container_membershippage-container_products-container_investcard-container_card'>
                  <div className='container_membershippage-container_products-container_investcard-container_card_title'><AiOutlineStock  className='container_membershippage-container_products-container_investcard-container_card_title_icon'/> <p>stock price</p></div>
                  <h3 className='container_membershippage-container_products-container_investcard-container_card_price'>$500 Investment</h3>
                  {/* <Link
                    href={{
                      pathname: "/cart",
                      query: {
                        productName: "Investment", 
                        productPrice: "515",
                        description: "You will receive a confirmation on your email to complete the information of your investment"
                      },
                    }}
                  >
                    <button>Buy Stock</button>
                  </Link> */}
                  <Link
                    href="https://buy.stripe.com/cN214z1qM4HbbrW5kz"
                    target="_self"
                  >
                    <button>Buy Stock</button>
                  </Link>
              </div>
              <div className='container_membershippage-container_products-container_investcard-container_card'>
                  <div className='container_membershippage-container_products-container_investcard-container_card_title'><AiOutlineStock  className='container_membershippage-container_products-container_investcard-container_card_title_icon'/> <p>stock price</p></div>
                  <h3 className='container_membershippage-container_products-container_investcard-container_card_price'>$750 Investment</h3>
                  {/* <Link
                    href={{
                      pathname: "/cart",
                      query: {
                        productName: "Investment", 
                        productPrice: "772.50",
                        description: "You will receive a confirmation on your email to complete the information of your investment"
                      },
                    }}
                  >
                    <button>Buy Stock</button>
                  </Link> */}
                  <Link
                    href="https://buy.stripe.com/5kAaF94CY2z3anS7sI"
                    target="_self"
                  >
                    <button>Buy Stock</button>
                  </Link>
              </div>
              <div className='container_membershippage-container_products-container_investcard-container_card'>
                  <div className='container_membershippage-container_products-container_investcard-container_card_title'><AiOutlineStock  className='container_membershippage-container_products-container_investcard-container_card_title_icon'/> <p>stock price</p></div>
                  <h3 className='container_membershippage-container_products-container_investcard-container_card_price'>$1000 Investment</h3>
                   {/* <Link
                    href={{
                      pathname: "/cart",
                      query: {
                        productName: "Investment", 
                        productPrice: "1030",
                        description: "You will receive a confirmation on your email to complete the information of your investment"
                      },
                    }}
                  >
                    <button>Buy Stock</button>
                  </Link> */}
                  <Link
                    href="https://buy.stripe.com/dR64gL8TeflPbrW7sJ"
                    target="_self"
                  >
                    <button>Buy Stock</button>
                  </Link>
              </div>
              <div className='container_membershippage-container_products-container_investcard-container_card'>
                  <div className='container_membershippage-container_products-container_investcard-container_card_title'><AiOutlineStock  className='container_membershippage-container_products-container_investcard-container_card_title_icon'/> <p>stock price</p></div>
                  <h3 className='container_membershippage-container_products-container_investcard-container_card_price'>$1500 Investment</h3>
                   {/* <Link
                    href={{
                      pathname: "/cart",
                      query: {
                        productName: "Investment", 
                        productPrice: "1545",
                        description: "You will receive a confirmation on your email to complete the information of your investment"
                      },
                    }}
                  >
                    <button>Buy Stock</button>
                  </Link> */}
                  <Link
                    href="https://buy.stripe.com/6oEeVp2uQgpT67C3cu"
                    target="_self"
                  >
                    <button>Buy Stock</button>
                  </Link>
              </div>
              <div className='container_membershippage-container_products-container_investcard-container_card'>
                  <div className='container_membershippage-container_products-container_investcard-container_card_title'><AiOutlineStock  className='container_membershippage-container_products-container_investcard-container_card_title_icon'/> <p>stock price</p></div>
                  <h3 className='container_membershippage-container_products-container_investcard-container_card_price'>$2000 Investment</h3>
                   {/* <Link
                    href={{
                      pathname: "/cart",
                      query: {
                        productName: "Investment", 
                        productPrice: "2060",
                        description: "You will receive a confirmation on your email to complete the information of your investment"
                      },
                    }}
                  >
                    <button>Buy Stock</button>
                  </Link> */}
                   <Link
                    href="https://buy.stripe.com/4gw28D3yU8Xr0Ni14n"
                    target="_self"
                  >
                    <button>Buy Stock</button>
                  </Link>
              </div>
              <div className='container_membershippage-container_products-container_investcard-container_card'>
                  <div className='container_membershippage-container_products-container_investcard-container_card_title'><AiOutlineStock  className='container_membershippage-container_products-container_investcard-container_card_title_icon'/> <p>stock price</p></div>
                  <h3 className='container_membershippage-container_products-container_investcard-container_card_price'>$2500 Investment</h3>
                   {/* <Link
                    href={{
                      pathname: "/cart",
                      query: {
                        productName: "Investment", 
                        productPrice: "2575",
                        description: "You will receive a confirmation on your email to complete the information of your investment"
                      },
                    }}
                  >
                    <button>Buy Stock</button>
                  </Link> */}
                  <Link
                    href="https://buy.stripe.com/fZe00vglG0qV7bG00k"
                    target="_self"
                  >
                    <button>Buy Stock</button>
                  </Link>
              </div>
              <div className='container_membershippage-container_products-container_investcard-container_card'>
                  <div className='container_membershippage-container_products-container_investcard-container_card_title'><AiOutlineStock className='container_membershippage-container_products-container_investcard-container_card_title_icon'/> <p>stock price</p></div>
                  <h3 className='container_membershippage-container_products-container_investcard-container_card_price'>$3000 Investment</h3>
                   {/* <Link
                    href={{
                      pathname: "/cart",
                      query: {
                        productName: "Investment", 
                        productPrice: "3090",
                        description: "You will receive a confirmation on your email to complete the information of your investment"
                      },
                    }}
                  >
                    <button>Buy Stock</button>
                  </Link> */}
                   <Link
                    href="https://buy.stripe.com/8wM8x16L65LfbrWaEZ"
                    target="_self"
                  >
                    <button>Buy Stock</button>
                  </Link>
              </div>
          </div>
        </div>
        {/* */}
        <div className='container_membershippage-container_certificate-container'>
          <div className='container_membershippage-container_certificate-container_certificate-section'>
              <div className='container_membershippage-container_certificate-container_certificate-section_image-container'>
                <Image      className='container_membershippage-container_certificate-container_certificate-section_image-container_image'  src={CertificateImg} alt='Certificate Image'
                />
              </div>
          </div>
            {/* */}
            <div className='container_membershippage-container_certificate-container_description-container'>
              <div className='container_membershippage-container_certificate-container_description-container_title-container'>
                <h2 className='container_membershippage-container_certificate-container_description-container_title'>World Bushido Federation Certificate</h2>
              </div>

              <div className='container_membershippage-container_certificate-container_description-container_description-container'>
                <p className='container_membershippage-container_certificate-container_description-container_description-container_paragraph'>
                The goal of the World Bushido Federation Teaching and passing on the right tradition to martial artists.
                The unity, respect, progress and truth of martial arts, which will be seen in Bushido by attracting world-class famous and professional grandmasters in every style of martial arts.
                </p>
                <br />
                <p className='container_membershippage-container_certificate-container_description-container_description-container_paragraph'>
                Program of Bushido Federation in the world,
                Promotion and scientific and professional training of martial arts for those interested in martial sports by holding training classes, specialized seminars, advanced classes, coaching courses, holding professional and amateur competitions in all types of martial sports and in addition to awarding Official and valid certificates with the seal and signature of the great and famous professors of the world.
                </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default memberships