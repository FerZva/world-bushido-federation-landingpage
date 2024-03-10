import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import CEOPicture from '../assets/CEO.png';
import BushidoLogo from '../assets/WORLD-BUSHIDO.png';
import '../styles/styles.scss'


function page() {
  return (
    <div className='container'>
      <Header />
      <section className='container_CEO-section'>
        <div  className='container_CEO-section_image-container'>
          <Image src={CEOPicture} alt='CEO Photo' className='container_CEO-section_image-container_image'/>
        </div>
        <div className='container_CEO-section_description-container'>
          <h2 className='container_CEO-section_description-container_title'>Welcome to<br />World Bushido Federation</h2>

          <p className='container_CEO-section_description-container_paragraph'>
            I am Hanshi Jorge Borjas, Founder of Bushido Federation and World Bushido Federation. This idea came to me after having spent most of my life studying the different Martial Arts and hoping in a unification as well as teaching “Bushido” (Warriors Way) to our students and those that did not know about the way.
          </p>
          <br />
          <p className='container_CEO-section_description-container_paragraph'>
            This came to me after continuously observing the rivalry between the different Martial Arts Schools, and listening to the “Sensei”, “Sifu”, “Sabonnim”, “Guachannim” and “Soke” telling their students that their styles or system was the best, and according to them other systems don’t even exist. The truth is that it depends on who is teaching as there are no “Bad Students “.
          </p>
          <br />
          <p className='container_CEO-section_description-container_paragraph'>
            Bushido emphasize and negates everything priorly written, as it guides us to: Humility, Integrity, Respect, Honor, Love and mostly Honor. Fellow Martial Artist let’s unite and teach what Matsutatsu Oyama founder of Kyokushin, Gichin Funakoshi, “Father of Modern Karate, Gogen Yamaguchi, Founder Internacional Karate-Do Goku Kai and Morehei Ueshiba the Founder of Aikido the “Art of Love and Harmony”. Let’s leave our disparities aside and let’s follow in their footsteps.
          </p>
          <br />
          <h4 className='container_CEO-section_description-container_signed'>Hanshi Jorge Borjas, Ph.D</h4>
        </div>
      </section>

      <section className='container_about-us'>
        <Image src={BushidoLogo} className='container_about-us_image'/>
        <div className='container_about-us_description'>
          <p className='container_about-us_description_paragraph'>
            World Bushido Federation was created due to all the disparity I have encountered throughout the different Martial Arts system all over the World. There the idea to unify Martial Arts through one Federation that would unite all systems by using the Warriors Code(Bushido) by teaching it to our students and followers.
          </p>
          
          <p className='container_about-us_description_paragraph'>
            The year was 2007 when this idea came up after watching the rivalry between the Martial Arts Schools, listening to the: “Sensei’s”, “Sifus”, “Sabonnims”, “Guachannims”, “Soke” telling their students that their system was the best around and according to them the other styles do not exist. The truth of it all is that there is no “bad students” as it all depends on who is teaching, this taught me that there is only bad “Teachers”.
          </p>
          
          <p>
            Bushido emphasizes and at the same time negates all written above. Since it directs us to: Humility,Integrity, Respect, Humbleness, Honesty, Compassion and above all unrelentless Honor. Most of the founding Fathers, Matsutatsu Oyama, founder of Kyokushin, Guchin Funakoshi, founder of “Modern Karate” as well as the founder of the International Karate-Do Goku Kai and let’s not forget Morihei Ueshiba O Sensei, founder of Aikido the “Art of love and Harmony” they left a legacy for us to follow.
            World Bushido Federations vision is to unite all Martial Arts in one big Family we are not asking you to change your system, just to apply the 7 Virtues of Bushido and make them a household name all over the World by getting all the “Real Grandmasters” to teach those Virtues so we can reach the entire Globe.
          </p>
          <br />
          <p className='container_about-us_description_paragraph'>
            Our mission is to spread the message in regards to the “Warriors Code” (Bushido) and stick to what we were taught when we began to learn Martial Arts, there should be no disparities between us as we learn and teach different systems. But, mostly my goal has been to teach people not to forget where they come from and that nobody is better than anybody. We have different mind sets, yet our goals as members of World Bushido Federation should be the same.
          </p>
          
          <p className='container_about-us_description_paragraph'>
            World Bushido Federation plans to be unique all over the Globe, we will hold events, tournaments, seminars, always withholding our beliefs in the Way of the Warrior as the will of God. As we are traditional in everyway, as the “Samurai” were in simple words we are the “Samurai” of this era.
          </p>
        </div>
        <p className='container_about-us_signature'>Hanshi Jorge Borjas, Ph.D</p>
      </section>
      <Footer />
    </div>
    
  )
}

export default page