import Header from './components/Header';
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <body className='relative'>
      <Header />
      <main className='flex flex-row flex-wrap justify-between'>
        <div>
          <p>
          So far our Federations is full of Martial Artists a few Fighting stars, many Champion in different systems, so far we have been able to create a big family with the same beliefs, and the aplication of Warriors Code.
          </p>
          <br />
          <p>
          Shihan Jorge Borjas
CEO & FOUNDER WBF
          </p>
        </div>
        <div>
          Logo
        </div>
      </main>
    </body>
  );
}
