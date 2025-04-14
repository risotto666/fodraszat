"use client";

import { useState } from "react";
import { Element } from "react-scroll";

const MapSection = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Element name="map">
      <div className="relative w-screen h-[500px] mt-4 p-3">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-10 rounded-3xl">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
          </div>
        )}

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2608.4560848249034!2d0.1502352768431421!3d52.242624471989735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d871af122b54d7%3A0xf36b1c24a44d7e86!2s124%20The%20Sycamores%2C%20Milton%2C%20Cambridge%20CB24%206ZH!5e1!3m2!1sen!2suk!4v1744383319831!5m2!1sen!2suk"
          className="w-full h-full rounded-3xl relative z-0"
          onLoad={() => setLoading(false)}
          loading="lazy"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Element>
  );
};

export default MapSection;
