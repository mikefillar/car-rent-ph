import React from "react";
import download from "./img/download.png";
import google from "./img/google.png";
import appstore from "./img/appstore.png";

const Download = () => {
  return (
    <section className="mt-24 px-10">
      <div className="flex justify-center items-center gap-20">
        <div className="w-1/2 flex flex-col gap-8">
          <h1 className="text-5xl font-bold leading-snug">
            Download our app to get most out of it{" "}
          </h1>
          <p className="text-gray-600">
            Transform your life with the power! Join the millions of happy users
            who rent cars as part of their routine to optimize their everyday
            well being. Our positive reminders are a powerful, effective way to
            keep yourself going when times are tough and to stay inspired when
            reaching for new goals and dreams.
          </p>
          <div className="display flex gap-4">
            <img className="w-40 cursor-pointer" src={google} alt="Google" />
            <img
              className="w-40 cursor-pointer"
              src={appstore}
              alt="Appstore"
            />
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img src={download} alt="Phone" />
        </div>
      </div>
    </section>
  );
};

export default Download;
