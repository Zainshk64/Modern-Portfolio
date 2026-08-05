"use client";

import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const menuItems = [
    { href: "/meet-hamail", label: "Meet Hamail" },
    { href: "/about", label: "About" },
    { href: "/insights", label: "Insights" },
  ];

  const WHATSAPP_NUMBER = "+923135352693"; // 🔴 replace
  const WHATSAPP_TEXT = "Hi! I want to discuss a business idea with you.";
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_TEXT
  )}`;

  return (
    <div className="relative">
      {/* Background Text - Large Signature Style */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <h2
          className="text-[12rem] md:text-[16rem] lg:text-[18rem] font-bold text-gray-300/30 whitespace-nowrap select-none"
          style={{
            fontFamily: "'Brush Script MT', cursive",
            lineHeight: "1",
          }}
        >
          Hamail Ijaz
        </h2>
      </div>

      {/* Floating Footer Container */}
      <footer className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Let's Chat Section */}
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Chat
            </h3>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition-all hover:scale-105 transform"
            >
              Contact Hamail
            </a>
          </div>

          {/* Footer Navigation & Social Links */}
          <div className="bg-zinc-900/80 backdrop-blur-md rounded-3xl px-8 py-6 border border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Navigation Links */}
              <nav className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8">
                <Link
                  href="/meet-hamail"
                  className="text-white hover:text-yellow-400 transition-colors text-base font-medium"
                >
                  Meet Hamail
                </Link>

                <Link
                  href="/about"
                  className="text-white hover:text-yellow-400 transition-colors text-base font-medium"
                >
                  About
                </Link>

                <Link
                  href="/insights"
                  className="text-white hover:text-yellow-400 transition-colors text-base font-medium"
                >
                  Insights
                </Link>
              </nav>

              {/* Social Media Icons */}
              <div className="flex gap-4 items-center">
                <a
                  href="https://www.instagram.com/hamailijaz01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 transition-colors p-2 hover:scale-110 transform"
                  aria-label="Instagram"
                >
                  <Instagram size={22} strokeWidth={2} />
                </a>
                <a
                  href="https://www.facebook.com/Hamailijazpk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 transition-colors p-2 hover:scale-110 transform"
                  aria-label="Facebook"
                >
                  <Facebook size={22} strokeWidth={2} />
                </a>
                <a
                  href="https://www.linkedin.com/in/hamailejaz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 transition-colors p-2 hover:scale-110 transform"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} strokeWidth={2} />
                </a>
                <a
                  href="https://www.youtube.com/@HandHVisaConsultants"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 transition-colors p-2 hover:scale-110 transform"
                  aria-label="YouTube"
                >
                  <Youtube size={25} strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-6">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Hamail Ijaz. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Brush+Script+MT&display=swap");
      `}</style>
    </div>
  );
}
