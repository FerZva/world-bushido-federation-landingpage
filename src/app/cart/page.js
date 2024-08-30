"use client";
import Router from 'next/router'; // Importación directa de Router
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/styles.scss'
import Link from "next/link";
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { sendEmail } from '../api/send/sendEmail';
import Image from "next/image";


function Page({ searchParams }) {
  const [divValue, setDivValue] = useState(1);
  const [paymentApproved, setPaymentApproved] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const formData = new FormData(event.target);
    try {
      await sendEmail(formData); // Intenta enviar el email
      console.log('Email enviado correctamente');
      // Redirigir al usuario después del envío exitoso
      Router.push('https://buy.stripe.com/bIY8x1edyflP8fK5kw');
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };
  const handledivValue = (value) => {
     setDivValue(value)
  }

  const [referral, setReferral] = useState('');
  const [customReferral, setCustomReferral] = useState('');

  // Manejador del cambio en el dropdown
  const handleReferralChange = (event) => {
    const { value } = event.target;
    setReferral(value);

    // Limpiar customReferral si no es 'Other'
    if (value !== 'Other') {
      setCustomReferral('');
    }
  };

  // Manejador del cambio en el input de texto cuando 'Other' está seleccionado
  const handleCustomReferralChange = (event) => {
    setCustomReferral(event.target.value);
  };

  return (
    <div className="container">
      <Header />

      <section className="container_checkout-container">
        <div className="container_checkout-container_products-cart-container">
          <h2 className="container_checkout-container_products-cart-container_title">
            Your shopping cart
          </h2>
          {/* Mapear los productos en la colección */}
          <div className="container_checkout-container_products-cart-container_items-container">
            <h3 className="container_checkout-container_products-cart-container_items-container_item-product-name">
              {searchParams.productName}
            </h3>
            <p className="container_checkout-container_products-cart-container_items-container_item-product-description">
              {searchParams.description}
            </p>
            <p className="container_checkout-container_products-cart-container_items-container_item-product-price">
              Price: ${searchParams.productPrice}
            </p>
          </div>
        </div>

        <div className="container_checkout-container_payment-method-container">
          <div
            className="container_checkout-container_payment-method-container_customerInformation"
            style={{ display: divValue === 1 ? "block" : "none" }}
          >
            <form onSubmit={handleSubmit}>
              {/* <h3>Step 1</h3> */}
              <h2 className="container_checkout-container_payment-method-container_customerInformation_title">
                Tell us about yourself
              </h2>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                className="container_checkout-container_payment-method-container_customerInformation_input container_checkout-container_payment-method-container_customerInformation_inputname"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                className="container_checkout-container_payment-method-container_customerInformation_input container_checkout-container_payment-method-container_customerInformation_inputname"
              />
              <input
                type="email"
                name="senderEmail"
                placeholder="Email"
                required
                className="container_checkout-container_payment-method-container_customerInformation_input container_checkout-container_payment-method-container_customerInformation_inputemail"
              />
              <input
                type="text"
                name="age"
                placeholder="How old are you?"
                required
                className="container_checkout-container_payment-method-container_customerInformation_input container_checkout-container_payment-method-container_customerInformation_inputage"
              />
              <input
                type="text"
                placeholder="What is your current rank in the martial arts?"
                name="rank"
                required
                className="container_checkout-container_payment-method-container_customerInformation_input container_checkout-container_payment-method-container_customerInformation_inputrank"
              />
              <input
                type="text"
                placeholder="How long have you been training?"
                name="experience"
                required
                className="container_checkout-container_payment-method-container_customerInformation_input container_checkout-container_payment-method-container_customerInformation_inputrank"
              />

              {/* <label htmlFor="referral">Have you been referred?</label>
              <select
                className="container_checkout-container_payment-method-container_customerInformation_input container_checkout-container_payment-method-container_customerInformation_inputrank"
                id="referral"
                value={referral}
                onChange={handleReferralChange}
                placeholder="Have you been referred"
              >
                <option value="">Select...</option>
                <option value="SILVIO SIMAC UK">SILVIO SIMAC UK</option>
                <option value="Other">Other</option>
                <option value="None">None</option>
              </select> */}

              {referral === "Other" && (
                <input
                  required
                  className="container_checkout-container_payment-method-container_customerInformation_input container_checkout-container_payment-method-container_customerInformation_inputrank"
                  type="text"
                  value={customReferral}
                  onChange={handleCustomReferralChange}
                  placeholder="Enter your referrer"
                  name="experience"
                />
              )}

              <button
                type="submit"
                onClick={() => {
                  const link = searchParams.redirecto
                  location.href=link
                }}
                className="container_checkout-container_payment-method-container_customerInformation_button"
              >
                Continue to Checkout
              </button>
            </form>
          </div>
          <div className="title-div">
            <h3>You are about to join the largest</h3>
            <h3>martial arts federation</h3>
          </div>
          <div style={{ display: divValue === 2 ? "block" : "none" }}>
            <PayPalScriptProvider
              options={{
                clientId:
                  "AdR40D-YswNpwiDORIDqz25sQlSukKs_b00XJhQnUsK5cqVK0xnjO2WCaPqg6glniL6RwyQEToSIDGIy",
              }}
            >
              <PayPalButtons
                createOrder={async () => {
                  try {
                    const res = await fetch("/api/checkout", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        productName: searchParams.productName,
                        productPrice: searchParams.productPrice,
                      }),
                    });

                    if (!res.ok) {
                      throw new Error(`HTTP error! Status: ${res.status}`);
                    }
                    const order = await res.json();
                    console.log(order);
                    return order.id;
                  } catch (error) {
                    console.error("Error fetching or parsing order:", error);
                    return null;
                  }
                }}
                onApprove={(data, actions) => {
                  console.log(data);
                  actions.order.capture();
                }}
                onCancel={(data) => {
                  console.log("cancelled", data);
                }}
              />
            </PayPalScriptProvider>

            {paymentApproved && (
              <div>
                <h2>Thanks for join us!</h2>
                <p>Here there is the rules of our World Bushido Academy</p>
                <button>
                  <Link
                    href={
                      "https://drive.google.com/file/d/1o3SyDH1TQ9ImK1NlHbcT7E6ZixVxYsj6/view?usp=drive_link"
                    }
                  >
                    Download the WBF Rules
                  </Link>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Page;