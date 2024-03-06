"use client";
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/styles.scss'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import axios from 'axios';


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
            </div>
        </div>

        <div>
        </div>

        <div className='container_checkout-container_payment-method-container'>
          <PayPalScriptProvider options={{ "client-id": "Acoo8Nj6KYBnmWdvhe6pl1KwWlidh3oZUzD09QsSRNTKP2ZPLP6rX-tMdO392FCzjJ0Mx92qzENcTBS5" }}>
            <PayPalButtons style={{layout: 'vertical'}} createOrder={async ()=> {
              try {
                const response = await axios({
                  url: "http://localhost:3000/api/payment",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                })
                return response.data.id;
              } catch (error) {
                console.log(error)
              }
            }}
            onCancel={data => console.log("payment cancelled")}
            onApprove={(data, actions) => {
              console.log(data)
              actions.order.capture()
            }}
            />
          </PayPalScriptProvider>
            <button >Pay with PayPal</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Page;
