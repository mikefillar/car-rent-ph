import React from "react";
import man from "./img/man.png";
import woman from "./img/woman.png";

const Reviews = () => {
  return (
    <section className="mt-14">
      <div className="flex items-center justify-center flex-col">
        <div className="text-center flex flex-col gap-4 w-2/4">
          <h2 className="font-semibold text-xl">Reviewed by people</h2>
          <h1 className="font-bold text-4xl">Clients testimonials</h1>
          <p className="text-gray-600">
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>
        </div>
        <div className="flex px-32 gap-10 mt-14">
          <div className="w-1/2 p-10 shadow-md shadow-gray-400">
            <p className="text-xl">
              "We rented a car from this website and had an amazing experience!
              The booking was easy and the rental rates were very affordable."
            </p>
            <div className="flex justify-start items-center gap-2 mt-6">
              <img className="w-20" src={woman} alt="man" />
              <div>
                <p>John Doe</p>
                <p>Quezon City</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 p-10 shadow-md shadow-gray-400">
            <p className="text-xl">
              "The car was in great condition and made our trip even better.
              Highly recommend for this car rental website!"
            </p>
            <div className="flex justify-start items-center gap-2 mt-12">
              <img className="w-20" src={man} alt="man" />
              <div>
                <p>John Doe</p>
                <p>Quezon City</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
