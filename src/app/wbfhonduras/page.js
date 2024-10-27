import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import Honor from '../assets/Grow.jpg'
import Grow from '../assets/Honor.jpg'
import Learn from '../assets/learn.jpg'

const wbfhonduras = () => {
  return (
    <div className='container'>
        <Header />
        <div className='container_wbfhonduras-page'>
            <div className='container_wbfhonduras-page_introduction-container'>
              <h1 className='container_wbfhonduras-page_introduction-container_first-title'>World Bushido Federation Honduras</h1>
              <p className='container_wbfhonduras-page_introduction-container_gradient-text'>Now available in Honduras</p>
            </div>
            <div className='container_wbfhonduras-page_gallery-container'>
              <div className='container_wbfhonduras-page_gallery-container_title'>
                <h3 className='container_wbfhonduras-page_gallery-container_title_h3'>Change <br/> your life</h3>
                <p className='container_wbfhonduras-page_gallery-container_title_p'>In world Bushido Federation we are dedicated to empowering you with the confidence and self-steem needed to get yourself out of a dangerous situation</p>
              </div>
              <div className='container_wbfhonduras-page_gallery-container_gallery'>
                <Image
                  src={Honor}
                  width={500}
                  height={500}
                  className='container_wbfhonduras-page_gallery-container_gallery_image'
                />
                <Image
                  src={Grow}
                  width={500}
                  height={500}
                  className='container_wbfhonduras-page_gallery-container_gallery_image'
                />
                <Image
                  src={Learn}
                  width={500}
                  height={500}
                  className='container_wbfhonduras-page_gallery-container_gallery_image'
                />
              </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default wbfhonduras