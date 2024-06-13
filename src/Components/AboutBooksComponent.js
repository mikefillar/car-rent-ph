import React from "react";

const AboutBooksComponent = ({ src, data }) => {
  return (
    <div className="flex flex-col justify-center items-center px-20 text-center my-14">
      <img className="h-full" src={src} alt="about-icon" />
      <h1 className="font-bold text-gray-800 text-2xl leading-loose">
        {data.label}
      </h1>
      <p className="text-gray-600">{data.caption}</p>
    </div>
  );
};

export default AboutBooksComponent;
