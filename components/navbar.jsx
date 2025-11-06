"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileOpen]);

  const menuItems = [
    { href: "/meet-adam", label: "Meet Adam" },
    { href: "/speaking", label: "Speaking" },
    { href: "/about", label: "Bestsellers" },
    { href: "/", label: "Insights" },
  ];

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const itemVariants = {
    closed: {
      x: 50,
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
    },
  };

  const staggerContainer = {
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isHidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      } bg-black/90 backdrop-blur-md border-b border-gray-800`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            style={{
              fontFamily: "'Brush Script MT', cursive",
            }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white z-50"
          >
            Humail Ijaz<span className="text-yellow-400">.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 font-bold hover:text-yellow-400 transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="px-8 py-3 text-white border border-gray-600 font-semibold rounded-full hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300"
            >
              Book Adam
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                className="w-full h-0.5 bg-white block"
                animate={{
                  rotate: isMobileOpen ? 45 : 0,
                  y: isMobileOpen ? 9 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-white block"
                animate={{
                  opacity: isMobileOpen ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-white block"
                animate={{
                  rotate: isMobileOpen ? -45 : 0,
                  y: isMobileOpen ? -9 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="fixed inset-0 bg-black h-screen">
              <motion.div
                className="flex flex-col items-center justify-center h-full px-8"
                variants={staggerContainer}
              >
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    variants={itemVariants}
                    custom={index}
                    className="w-full text-center"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="block py-4 text-2xl font-bold text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={itemVariants}
                  custom={menuItems.length}
                  className="mt-8"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileOpen(false)}
                    className="inline-block px-10 py-4 text-white text-xl border-2 border-yellow-400 font-semibold rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300"
                  >
                    Book Adam
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}