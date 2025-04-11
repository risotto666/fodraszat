"use client";
import { Element } from "react-scroll";

function Hero() {
  return (
    <Element name="hero">
      <div>
        <img className="w-screen lg:h-full h-[300px]" src="/hair.jpg.webp" />
      </div>
    </Element>
  );
}

export default Hero;
