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
            return (
              <div key={index} className="container_committee-container_committee_card">
                <div className="container_committee-container_committee_card_picture-container">
                  <Image
                    src={committee.committeePicture}
                    width={300}
                    height={300}
                    className="container_committee-container_committee_card_picture-container_committeePicture"
                    alt="committee of world bushido member profile picture"
                  />
                </div>
                <div className="container_committee-container_committee_card_description">
                  <h3>{committee.commiteName}</h3>
                  <p>{committee.description}</p>
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
