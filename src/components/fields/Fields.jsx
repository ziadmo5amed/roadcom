 import React from "react";
import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { FaGlobe, FaCloud, FaBusinessTime, FaPrint } from "react-icons/fa";
import { GiRobotGolem } from "react-icons/gi";

const fields = [
  { icon: <FaRobot className="text-6xl text-pink-600" />, title: "الذكاء الاصطناعي" },
  { icon: <MdSecurity className="text-6xl text-pink-600" />, title: "الأمن السيبراني" },
  { icon: <FaGlobe className="text-6xl text-pink-600" />, title: "إنترنت الأشياء" },
  { icon: <GiRobotGolem className="text-6xl text-pink-600" />, title: "الروبوتات" },
  { icon: <FaPrint className="text-6xl text-pink-600" />, title: "الطباعة ثلاثية الأبعاد" },
  { icon: <FaCloud className="text-6xl text-pink-600" />, title: "التخزين السحابي" },
  { icon: <FaBusinessTime className="text-6xl text-pink-600" />, title: "ريادة الأعمال" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export default function FieldsSection() {
  return (
    <section className="px-6 py-20 text-white bg-gradient-to-b from-purple-900 to-blue-950 md:px-16 lg:px-24">
      {/* العنوان */}
      <motion.h2
        className="mb-10 text-4xl font-extrabold text-center text-pink-400 md:text-5xl"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        المجالات المتاحة
      </motion.h2>

      {/* الكروت */}
      <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 md:grid-cols-3">
        {fields.map((field, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-between p-6 transition bg-white shadow-md rounded-2xl hover:shadow-lg"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
          >
            <div className="mb-4">{field.icon}</div>
            <h3 className="mb-6 text-xl font-semibold text-gray-700">
              {field.title}
            </h3>
            <button className="px-6 py-2 text-white transition duration-300 ease-in-out bg-pink-600 rounded-xl hover:bg-blue-800">
              سجل الآن
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
 