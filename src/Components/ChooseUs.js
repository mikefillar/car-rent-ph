import React from "react";
import cars from "./img/cars.jpg";
import country from "./img/drive2.png";
import price from "./img/price.png";
import save from "./img/save.png";

const ChooseUs = () => {
  return (
    <section className="object-fit mt-20 mb-20">
      <img className="w-full" src={cars} alt="cars" />
      <div className="flex justify-center items-center px-32 gap-20 mt-16">
        <div className="w-1/2 flex flex-col">
          <h2 className="font-semibold text-2xl">Why choose us</h2>
          <h1 className="font-bold text-4xl  leading-tight">
            Best valued deals you will ever find
          </h1>
          <p className="text-gray-600 mt-4">
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money,
            so you can enjoy top-quality services and products without breaking
            the bank. Our deals are designed to give you the ultimate renting
            experience, so don't miss out on your chance to save big.
          </p>
          <a
            className="px-6 w-1/3 mt-4 py-4 font-bold text-white hover:shadow-lg hover:shadow-orange-500 bg-orange-600 rounded flex items-center justify-center gap-1 text-lg transition-all ease-linear duration-300"
            href="/#Book"
          >
            Book ride <ion-icon name="checkmark-outline"></ion-icon>
          </a>
        </div>

        <div className="w-1/2 flex flex-col justify-center items-center gap-8 pl-10">
          <div className="flex gap-4">
            <img src={country} alt="cross-country" />
            <div className="">
              <h1 className="font-bold text-2xl">Cross Country Drive</h1>
              <p className="text-gray-600 mt-2">
                Take your driving experience to the next level with our
                top-notch vehicles for your cross-country adventures.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <img src={price} alt="cross-country" />
            <div className="">
              <h1 className="font-bold text-2xl">All Inclusive Pricing</h1>
              <p className="text-gray-600 mt-2">
                Get everything you need in one convenient, transparent price
                with our all-inclusive pricing policy.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <img src={save} alt="cross-country" />
            <div className="">
              <h1 className="font-bold text-2xl">No Hidden Charges</h1>
              <p className="text-gray-600 mt-2">
                Enjoy peace of mind with our no hidden charges policy. We
                believe in transparent and honest pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
