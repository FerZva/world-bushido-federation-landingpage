import React from 'react';
import Link from 'next/link';
import Header from '../components/Header'

function page() {

  return (
    <>
        <Header />
        <h1>Product List</h1>
        <Link href="products/1"><h2>Product 1</h2></Link>
        <h2>Product 2</h2>
        <h2>Product 3</h2>
    </>
  )
}

export default page