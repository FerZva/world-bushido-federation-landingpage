import React from "react";
import { Committee } from "../services/data";
import Image from "next/image";
import Header from "../components/Header";

const page = () => {
  const data = Committee;
  return (
    <div className="w-full min-h[100vh] bg-black ">
      <Header />
      <div>
        <h2>
          The goal of the World Bushido Federation Teaching and passing on the
          right tradition to martial artists._
        </h2>
      </div>
      <div className="flex flex-wrap justify-around text-center">
        {data.map((committee, index) => {
          const { committeePicture, commiteName, description } = committee;
          return (
            <div key={index} className="w-full max-w-[150px] align-center">
              <Image
                src={committeePicture}
                width={100}
                height={100}
                className="m-[auto]"
              />
              <h3>{commiteName}</h3>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default page;
