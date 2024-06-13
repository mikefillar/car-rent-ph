import React from "react";
import car from "./img/main-car.png";

const Main = () => {
  return (
    <main className="flex justify-center items-center px-10 py-5 mb-10">
      <div className="w-1/2 flex flex-col gap-6">
        <h2 className="font-bold text-2xl">Plan your trips now!</h2>
        <h1 className="font-bold text-5xl leading-tight">
          Save <span className="text-orange-600">big</span> with our car rental
          deals!
        </h1>
        <p className="text-gray-600">
          Rent the car of your dreams. Lowest prices, unlimited miles, flexible
          pick-up options, and more.
        </p>
        <div className="flex gap-2">
          <a
            className="px-6 py-4 font-bold text-white hover:shadow-lg hover:shadow-orange-500 bg-orange-600 rounded flex items-center justify-center gap-1 text-lg transition-all ease-linear duration-300"
            href="/#Book"
          >
            Book ride <ion-icon name="checkmark-outline"></ion-icon>
          </a>
          <a
            className="px-6 py-4 rounded font-bold bg-black text-white flex items-center justify-center gap-1 text-lg hover:text-black hover:bg-white transition-all ease-linear duration-300"
            href="/#Model"
          >
            Learn more <ion-icon name="chevron-forward-outline"></ion-icon>
          </a>
        </div>
      </div>
      <div>
        <img src={car} alt="main-car" />
      </div>
    </main>
  );
};

export default Main;
