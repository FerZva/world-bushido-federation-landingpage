import React from "react";
import { Committee } from "../services/data";
import Image from "next/image";
import Header from "../components/Header";
import Footer from '../components/Footer'
import '../styles/styles.scss'

const page = () => {
  const data = Committee;
  return (
    <div className="container">
      <Header />
      <div className="container_committee-container">

        <div className="container_committee-container_description">
          <h2>
            The goal of the World Bushido Federation Teaching and passing on the
            right tradition to martial artists
          </h2>
        </div>

        <div className="container_committee-container_committee">
          {data.map((committee, index) => {
            const { committeePicture, commiteName, description } = committee;
            return (
              <div key={index} className="container_committee-container_committee_card">
                <Image
                  src={committeePicture}
                  width={300}
                  height={300}
                />
                <div className="container_committee-container_committee_card_description">
                  <h3>{commiteName}</h3>
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default page;
