"use client";
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


  const handledivValue = (value) => {
     setDivValue(value)
  }

  return (
    <div className='container'>
      <Header />

      <section className='container_checkout-container'>
        <div className='container_checkout-container_products-cart-container'>
          
          <h2 className='container_checkout-container_products-cart-container_title'>Your shopping cart</h2>
          {/* Mapear los productos en la colección */}
            <div className='container_checkout-container_products-cart-container_items-container'>
              <h3 className='container_checkout-container_products-cart-container_items-container_item-product-name'>{searchParams.productName}</h3>
              <p className='container_checkout-container_products-cart-container_items-container_item-product-description'>{searchParams.description}</p>
              <p className='container_checkout-container_products-cart-container_items-container_item-product-price'>Price: ${searchParams.productPrice}</p>
              
            </div>
        </div>

        <div className='container_checkout-container_payment-method-container'>
          <div 
            className='container_checkout-container_payment-method-container_customerInformation'
            style={{ display: divValue === 1 ? 'block' : 'none' }}
          >
            <form action={async (formData) => {
              await sendEmail(formData);
            }}>
              <h3>Step 1</h3>
              <h2 className='container_checkout-container_payment-method-container_customerInformation_title'>Tell us about yourself</h2>
              <input 
                type="text"
                name='firstName'
                placeholder='First Name'
                required 
                className='container_checkout-container_payment-method-container_customerInformation_input container_checkout-container_payment-method-container_customerInformation_inputname'/>
              <input 
                type="text" 
                name='lastName'
                placeholder='Last Name' 
                required
                className='container_checkout-container_payment-method-container_customerInformation_input container_checkout-container_payment-method-container_customerInformation_inputname'/>
              <input 
                type="email"
                name='senderEmail' 
                placeholder='Email' 
                required
                className='container_checkout-container_payment-method-container_customerInformation_input container_checkout-container_payment-method-container_customerInformation_inputemail'/>
              <input 
                type="text" 
                name='age'
                placeholder='How old are you?' 
                required
                className='container_checkout-container_payment-method-container_customerInformation_input container_checkout-container_payment-method-container_customerInformation_inputage'/>
              <input 
                type="text" 
                placeholder='What is your current rank in the martial arts?'
                name='rank' 
                required
                className='container_checkout-container_payment-method-container_customerInformation_input container_checkout-container_payment-method-container_customerInformation_inputrank'/>
                <input 
                type="text" 
                placeholder='How long have you been training?'
                name='experience' 
                required
                className='container_checkout-container_payment-method-container_customerInformation_input container_checkout-container_payment-method-container_customerInformation_inputrank'/>
                <button
                type='submit'
                className='container_checkout-container_payment-method-container_customerInformation_button'
                onClick={() => handledivValue(2)}
                >
                  submit info
                </button>
            </form>
          </div>
          <h3>Step 2</h3>
          <div
          style={{ display: divValue === 2 ? 'block' : 'none' }}
          >  
          <PayPalScriptProvider
          options={{clientId: "AeRwLnK1GJC9dC23rxdWmtpNeL7rimwW-37sOwr9a3y0hPZWlYJjMQVFo9jwy5kbObRW1_tBmP5ViyN1"}}
          >
            <PayPalButtons 
                createOrder={async () => {
                try {
                  const res = await fetch('/api/checkout', {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                      productName: searchParams.productName,
                      productPrice: searchParams.productPrice
                    })
                  });

                  if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                  }
                  const order = await res.json()
                  console.log(order)
                  return order.id
                } catch (error) {
                  console.error('Error fetching or parsing order:', error);
                  return null; 
                }
                }}
                onApprove={(data, actions) => {
                  console.log(data);
                  actions.order.capture()
                }}
                onCancel={(data) => {
                  console.log("cancelled", data)
                } }

            />
          </PayPalScriptProvider>

            {paymentApproved && (
        <div>
          <h2>Thanks for join us!</h2>
          <p>Here there is the rules of our World Bushido Academy</p>
          <button><Link href={"https://drive.google.com/file/d/1o3SyDH1TQ9ImK1NlHbcT7E6ZixVxYsj6/view?usp=drive_link"}>Download the WBF Rules</Link></button>
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
