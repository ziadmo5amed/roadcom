import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaFemale, FaMale } from "react-icons/fa";

const members = [
  { icon: <FaFemale className="text-6xl text-purple-500" />, name: " Jana Elmasry", role: "   Team Leader  " },
  { icon: <FaFemale className="text-6xl text-purple-500" />, name: " Mariem Waleed Megahed", role: "  Head of Graphic design " },
  { icon: <FaFemale className="text-6xl text-purple-500" />, name: " Haneen osama ", role: " Head of interview " },
  { icon: <FaFemale className="text-6xl text-purple-500" />, name: " Shahd Mahmoud Shaban", role: " Head of content writing " },
  { icon: <FaMale className="text-6xl text-blue-500" />, name: "youssef ehab hassan hussein", role: " Ceo " },
  { icon: <FaMale className="text-6xl text-blue-500" />, name: " Ziad Mohammed Taie3 ", role: " Vice web development" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function TeamSection() {
  return (
    <section className="px-6 py-20 text-white bg-gradient-to-b from-blue-900 to-purple-900 md:px-16 lg:px-24">
      {/* العنوان مع أيقونة الفريق */}
      <motion.div
        className="flex items-center justify-center gap-3 mb-12 text-4xl font-extrabold text-center text-pink-400 md:text-5xl"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
          فريق العمل
        <FaUsers className="text-5xl text-pink-500" />
      
      </motion.div>

      {/* الكروت */}
      <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 md:grid-cols-3">
        {members.map((member, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-6 transition bg-white shadow-md rounded-2xl hover:shadow-xl"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
          >
            <div className="mb-4">{member.icon}</div>
            <h3 className="mb-2 text-xl font-bold text-gray-800">
              {member.name}
            </h3>
            <p className="text-gray-600">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
