import React from "react";
import ModelButtons from "./ModelButtons";

const Models = () => {
  return (
    <section className="mx-10 mt-14 py-5 mb-14" id="Model">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="w-1/3 text-center">
          <h2 className="font-semibold text-xl">Vehicle Models</h2>
          <h1 className="font-bold text-4xl leading-loose">Our rental fleet</h1>
          <p className="text-gray-600">
            Choose from a variety of amazing vehicles to rent for your next
            adventure or business trip
          </p>
        </div>
        <ModelButtons />
      </div>
    </section>
  );
};

export default Models;
