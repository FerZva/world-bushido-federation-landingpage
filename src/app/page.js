import Header from './components/Header';
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Link href="/products"><h3>Go to products</h3></Link>
      </main>
    </>
  );
}
