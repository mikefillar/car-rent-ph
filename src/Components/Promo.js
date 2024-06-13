import React from "react";

const Promo = () => {
  return (
    <div className="text-center bg-gray-800 text-white px-48 py-16 flex flex-col items-center justify-center gap-5">
      <h1 className="font-bold text-5xl">
        Save big with our cheapest car rental!
      </h1>
      <p className=" text-2xl">
        Top airports, local suppliers, and{" "}
        <span className="text-orange-600">24/7</span>support.
      </p>
    </div>
  );
};

export default Promo;
