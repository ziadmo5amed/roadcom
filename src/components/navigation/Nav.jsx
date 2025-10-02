import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [" عن Tech Pioneer", "المجالات المتاحة", " الأدمن ", "للتواصل"];

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
    <nav className="z-50 px-4 py-3 text-white bg-gray-900 shadow-md">
      <div className="container flex items-center justify-between mx-auto">
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
        <ul className="items-center hidden space-x-8 md:flex">
          {links.map((link, idx) => (
            <motion.li
              key={idx}
              className="relative text-lg cursor-pointer group"
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
      className="fixed left-0 z-40 w-full bg-pink-400 top-20 md:hidden"
    >
      <motion.ul
        className="flex flex-col items-stretch px-6 py-4 mt-8 space-y-3 shadow-lg"
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
            className="relative px-5 py-3 text-white border-b-2 rounded-md cursor-pointer group"
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

 
