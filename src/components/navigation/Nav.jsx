import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Home", "Services", "About", "Contact"];

  // أنميشن للمنيو
  const menuVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -8, scale: 0.99 },
  };

  // أنميشن لكل عنصر
  const itemVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <nav className="bg-gray-900 text-white px-4 py-3 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* اللوجو */}
        <motion.img
          src={logo}
          alt="logo"
          className="w-16 md:w-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Desktop links */}
        <ul className="hidden md:flex space-x-8 items-center">
          {links.map((link, idx) => (
            <motion.li
              key={idx}
              className="relative cursor-pointer group text-lg"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              custom={idx}
            >
              <span className="transition-colors duration-300 group-hover:text-blue-400">
                {link}
              </span>
              {/* خط متحرك تحت اللينك */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle menu"
          className="block md:hidden focus:outline-none"
          onClick={() => setIsOpen((s) => !s)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile animated menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <motion.ul
              className="mx-4 mt-3 rounded-lg bg-black/95 py-4 shadow-lg flex flex-col items-stretch space-y-2"
              role="menu"
              aria-label="Mobile menu"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
            >
              {links.map((link, i) => (
                <motion.li
                  key={link}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  className="px-5 py-3 relative text-white group cursor-pointer rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="transition-colors duration-300 group-hover:text-blue-400">
                    {link}
                  </span>
                  <span className="absolute left-0 bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;

 
