"use client";

import React from "react";
import { motion } from "framer-motion";

const GallerOutlet = () => {
  const images = [
    "/image1.jpeg",
    "/image8.jpeg",
    "/evergreen-image.jpeg",
    "/image2.jpeg",
    "/image3.jpeg",
    "/image4.jpeg",
    "/image5.jpeg",
    "/image6.jpeg",
    "/image7.jpeg",
    "/image9.jpeg",

  ];

  return (
    <section className="min-h-screen w-full bg-black text-white py-20 px-4 sm:px-6 lg:px-12">
      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
          Evergreen Gallery & Media Highlights
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed">
          A visual journey of achievements, global recognition, and the
          remarkable moments that define Hamail Ejaz’s entrepreneurial impact
          across Pakistan and the world.
        </p>
      </motion.div>

      {/* Video Section */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-lg"
      >
        <video
          src="/hamail-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto object-cover"
        ></video>
      </motion.div> */}

      {/* Grid Gallery */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              className="w-full h-100 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GallerOutlet;
