import React from "react";
import logo from "./img/smart-car.png";

const Header = () => {
  const links = [
    {
      link: "Home",
      href: "/",
    },
    {
      link: "About",
      href: "/About",
    },
    {
      link: "Vehicle",
      href: "/Vehicle",
    },
    {
      link: "Testimonial",
      href: "/Testimonial",
    },
    {
      link: "Our Team",
      href: "/Team",
    },
    {
      link: "Contact",
      href: "/Contact",
    },
  ];
  return (
    <header className="flex justify-between items-center py-5 px-10">
      <div className=" flex justify-center items-center gap-2">
        <img className="h-14 hover:cursor-pointer" src={logo} alt="Cars.PH" />
        <h1 className="text-2xl font-bold text-gray-800 hover:cursor-pointer">
          Cars.PH
        </h1>
      </div>
      <nav>
        <ul className=" flex justify-center items-center gap-5">
          {links.map((link) => (
            <li key={link.link}>
              <a
                className="text-gray-700 font-bold hover:text-orange-600 transition-all ease-linear duration-300"
                href={link.href}
              >
                {link.link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex justify-center items-center gap-5">
        <a
          href="/"
          className="text-gray-700 font-bold hover:text-orange-600 transition-all ease-linear duration-300"
        >
          Sign In
        </a>
        <button
          type="button"
          className="font-bold px-5 py-3 rounded text-white bg-orange-600 hover:shadow-lg hover:shadow-orange-500 transition-all ease-linear duration-300"
        >
          Register
        </button>
      </div>
    </header>
  );
};

export default Header;
