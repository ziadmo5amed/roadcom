import React from "react";
import { motion } from "framer-motion";

const fields = [
  { icon: "🤖", title: "الذكاء الاصطناعي" },
  { icon: "🔒", title: "الأمن السيبراني" },
  { icon: "🌐", title: "إنترنت الأشياء" },
  { icon: "⚙", title: "الروبوتات" },
  { icon: "🖨", title: "الطباعة ثلاثية الأبعاد" },
  { icon: "☁", title: "التخزين السحابي" },
  { icon: "💼", title: "ريادة الأعمال" },
];

// إعداد الأنيميشن
const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // البداية
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // يخلي الكروت تظهر ورا بعض
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function FieldsSection() {
  return (
    <section className="px-6 py-20 text-white bg-gradient-to-b from-purple-900 to-blue-950 md:px-16 lg:px-24">
      {/* العنوان */}
      <motion.h2
        className="mb-4 mb-10 font-bold font-extrabold text-center text-pink-400 md:text-5xl"
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
            custom={index} // مهم علشان الـ delay يشتغل
          >
            <div className="mb-4 text-5xl">{field.icon}</div>
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
