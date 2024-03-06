"use client"
import React, { useState } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image';
import CertificateImg from '../assets/Certificate.jpg';
import Link from 'next/link';

import '../styles/styles.scss'

function memberships() {

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
                  $150
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
                      productPrice: "150"
                    },
                  }}
                >
                  <button>Join Now</button>
                </Link>
            </div>

            <div className="container_membershippage-container_products-container_card-container_card">
                <h3 className="container_membershippage-container_products-container_card-container_card_title">Instructor Certificate</h3>
                <h3 className="container_membershippage-container_products-container_card-container_card_price">$1,500</h3>
                <p className="container_membershippage-container_products-container_card-container_card_label">Most Popular Choise</p>
                
                <p className="container_membershippage-container_products-container_card-container_card_description">
                  Certified internationally as an instructor in WBF, receive full access as a member, receive commissions for each student affiliated with us, receive exclusive grand master training.
                </p>
                <Link
                  href={{
                    pathname: "/cart",
                    query: {
                      productName: "Instructor Certificate",
                      productPrice: "1500"
                    },
                  }}
                >
                  <button>Join Now</button>
                </Link>
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
                      productPrice: "250"
                    },
                  }}
                >
                  <button>Join Now</button>
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
                Program of Bushido Federation in the world
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