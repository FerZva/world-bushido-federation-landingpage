import React from "react";
import { Committee } from "../services/data";
import Image from "next/image";
import Header from "../components/Header";

const page = () => {
  const data = Committee;
  return (
    <div className="w-full min-h[100vh]">
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
                className="m-[auto] w-full max-h-[150px]"
              />
              <h3>{commiteName}</h3>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
