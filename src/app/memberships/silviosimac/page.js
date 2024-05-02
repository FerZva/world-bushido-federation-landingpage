import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ReferPartnerLogo from "../../assets/ReferSSLogo.png";
import ParnetshipLogo from "../../assets/partnership.png";
import Image from "next/image";
import Link from "next/link";

function page() {
    const divStyle = {
        textAlign: 'center' 
      };

  return (
    <div className="container">
      <Header />
      <div className="container_membershippage-container">
        <div className="container_membershippage-container_products-container">
          <div className="container_membershippage-container_products-container_description">
            <h2 style={
                divStyle
            }>Memberships of World Bushido Federation x Silvio Simac UK</h2>
            <p style={
                divStyle
            }>Select one option of these if you are referred from SILVIO SIMAC UK</p>
          </div>
          <div className="container_membershippage-container_products-container_card-container">
            <div className="container_membershippage-container_products-container_card-container_card">
              <h3 className="container_membershippage-container_products-container_card-container_card_title">
                Membership SS UK
              </h3>
              <h3 className="container_membershippage-container_products-container_card-container_card_price">
                $75
              </h3>
              <p className="container_membershippage-container_products-container_card-container_card_label">
                Per Annual
              </p>

              <p className="container_membershippage-container_products-container_card-container_card_description">
                Join the largest martial artist community in the world, acess to
                our library and local conferences and stream, Validate your
                title worldwide.
              </p>
              <Link
                href="https://buy.stripe.com/5kA3cH7Pa1uZ0NiaF1"
                target="_self"
              >
                <button>Join Now</button>
              </Link>
            </div>

            <div className="container_membershippage-container_products-container_card-container_card">
              <h3 className="container_membershippage-container_products-container_card-container_card_title">
                Instructor Certificate SS UK
              </h3>
              <h3 className="container_membershippage-container_products-container_card-container_card_price">
                $750
              </h3>
              <p className="container_membershippage-container_products-container_card-container_card_label">
                Most Popular Choise
              </p>

              <p className="container_membershippage-container_products-container_card-container_card_description">
                Certified internationally as an instructor in WBF, receive full
                access as a member, receive commissions for each student
                affiliated with us, receive exclusive grand master training.
              </p>
              <Link
                href="https://buy.stripe.com/5kAfZt5H2c9D3Zu4gE"
                target="_self"
              >
                <button>Join Now</button>
              </Link>
            </div>

            <div className="container_membershippage-container_products-container_card-container_card">
              <h3 className="container_membershippage-container_products-container_card-container_card_title">
                ID CARD WBF SS UK
              </h3>
              <h3 className="container_membershippage-container_products-container_card-container_card_price">
                $250
              </h3>
              <p className="container_membershippage-container_products-container_card-container_card_description">
                Certified internationally as an instructor in WBF, receive full
                access as a member, receive commissions for each student
                affiliated with us, receive exclusive grand master training
              </p>
              <Link
                href="https://buy.stripe.com/5kAeVpglG2z353y14t"
                target="_self"
              >
                <button>Join Now</button>
              </Link>
            </div>
          </div>
          <div className="container_membershippage-container_products-container_description_partnerlogo">
            <Image className="container_membershippage-container_products-container_description_partnerlogo_image" src={ParnetshipLogo} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
