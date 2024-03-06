"use client";
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/styles.scss'
import axios from 'axios'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

function Page({ searchParams }) {
 
  return (
    <div className='container'>
      <Header />

      <section className='container_checkout-container'>
        <div className='container_checkout-container_products-cart-container'>
          <h2 className='container_checkout-container_products-cart-container_title'>Your shopping cart</h2>
          {/* Mapear los productos en la colección */}
            <div className='container_checkout-container_products-cart-container_items-container'>
              <p className='container_checkout-container_products-cart-container_items-container_item-product-name'>Product: {searchParams.productName}</p>
              <p className='container_checkout-container_products-cart-container_items-container_item-product-price'>Price: ${searchParams.productPrice}</p>
              <p className='container_checkout-container_products-cart-container_items-container_item-product-price'>Price: ${searchParams.description}</p>
              
            </div>
        </div>

        <div className='container_checkout-container_payment-method-container'>
          <PayPalScriptProvider
          options={{clientId: "Acoo8Nj6KYBnmWdvhe6pl1KwWlidh3oZUzD09QsSRNTKP2ZPLP6rX-tMdO392FCzjJ0Mx92qzENcTBS5"}}
          >
            <PayPalButtons 
                createOrder={async () => {
                const res = await fetch('/api/checkout', {
                  method: "POST"
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
