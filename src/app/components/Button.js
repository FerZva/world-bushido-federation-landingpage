import React from 'react';
import Link from 'next/link';
import '../styles/styles.scss'

const Button = ({buttontext, link, productName, price})  => {
  return (
    <button className="container_button">
        <Link href={`${link}`} className='container_button_buttonlink'>
          <p><strong>{buttontext}</strong></p>
        </Link>
    </button>
  )
}
 
export default Button;