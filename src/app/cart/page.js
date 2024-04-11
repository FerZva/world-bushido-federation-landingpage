"use client";
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/styles.scss'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { sendEmail } from '../api/send/sendEmail';

function Page({ searchParams }) {
 
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
          <div className='container_checkout-container_payment-method-container_customerInformation'>
            <form action={async (formData) => {
              await SendEmail(formData);
            }}>
              <h2 className='container_checkout-container_payment-method-container_customerInformation_title'>Tell us about yourself</h2>
              <input 
                type="text"
                placeholder='First Name' 
                className='container_checkout-container_payment-method-container_customerInformation_input container_checkout-container_payment-method-container_customerInformation_inputname'/>
              <input 
                type="text" 
                placeholder='Last Name' 
                className='container_checkout-container_payment-method-container_customerInformation_input container_checkout-container_payment-method-container_customerInformation_inputname'/>
              <input 
                type="email" 
                placeholder='Email' 
                className='container_checkout-container_payment-method-container_customerInformation_input container_checkout-container_payment-method-container_customerInformation_inputemail'/>
              <input 
                type="text" 
                placeholder='What is your age' 
                className='container_checkout-container_payment-method-container_customerInformation_input container_checkout-container_payment-method-container_customerInformation_inputage'/>
              <input 
                type="text" 
                placeholder='What is your current rank in the martial arts?' 
                className='container_checkout-container_payment-method-container_customerInformation_input container_checkout-container_payment-method-container_customerInformation_inputrank'/>
            </form>
          </div>
          <PayPalScriptProvider
          options={{clientId: "Ad4TxMZhXM-A2adm1IMaZwbKDsdgHUD_MqO5pgdUXtf3R9oSedAWY5ByATwHvK2uBhV4ycCOKPeYAGY4"}}
          >
            <PayPalButtons 
                createOrder={async () => {
                const res = await fetch('/api/checkout', {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    productName: searchParams.productName,
                    productPrice: searchParams.productPrice
                  })
                })
                const order = await res.json()
                console.log(order)
                return order.id
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
          
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Page;
