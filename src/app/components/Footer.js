import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6"
import { FaYoutube } from "react-icons/fa";
import '../styles/styles.scss'
const Footer = () => {
  return (
    <footer className='container_footer-container'>
      
      <div className='container_footer-container_social-media-container'>
        <div 
          className='container_footer-container_social-media-container_social-link
          container_footer-container_social-media-container_youtube'
        > 
          <Link 
            href="https://youtube.com/@wbf_jb?si=2_WP_QlR8EjExF4t"
            target="_blank"
            className='container_footer-container_social-media-container_social-link_link'
          >
            <FaYoutube color='white' size={30} />
          </Link>
        </div>

        <div 
          className='container_footer-container_social-media-container_social-link
          container_footer-container_social-media-container_facebook'
        >
          <Link 
            href="https://www.facebook.com/share/9F43K9v56Eb4aqA4/?mibextid=WC7FNe"
            target="_blank"
            className='container_footer-container_social-media-container_social-link_link'
          >
            <FaFacebook color='white' size={30} />
          </Link>
        </div>

        <div 
          className='container_footer-container_social-media-container_social-link
          container_footer-container_social-media-container_instagram'
        >
          <Link 
            href="https://www.instagram.com/wbf_jb?igsh=OHFpNGdseWg1Y3R0"
            target="_blank"
            className='container_footer-container_social-media-container_social-link_link'
          >
            <FaInstagram color='white' size={30} />
          </Link>
        </div>

        <div 
          className='container_footer-container_social-media-container_social-link
          container_footer-container_social-media-container_tiktok'
        >
          <Link 
            href="https://www.tiktok.com/@wbf_jb?_t=8kA2RmqeHbB&_r=1"
            target="_blank"
            className='container_footer-container_social-media-container_social-link_link'
          >
            <FaTiktok color='white' size={30} />
          </Link>
        </div>

       {/* <p>World Bushido Federation © 2024. All Rights Reserved.</p> */}
      </div>
    </footer>
  )
}

export default Footer