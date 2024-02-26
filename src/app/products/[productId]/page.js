import React from 'react';
import Link from 'next/link';
import Header from '@/app/components/Header';

export default function ProductDetails( { params } ) {
  return (
  <>
    <Header/>
    <h1>Details about product {params.productId}</h1>
    <button><Link href="/products">Go back</Link></button>
  </>
  )
}