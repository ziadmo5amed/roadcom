import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Info = () => {
  return (
    <section className="bg-gradient-to-b from-blue-950 to-purple-900 text-white py-30 px-6 md:px-16 lg:px-24">
      {/* ---------- عن Tech Pioneer ---------- */}
      <motion.div
        className="max-w-4xl mx-auto text-center  space-y-6"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
          <span className="text-pink-400">Tech Pioneer</span> عن
        </h2>
        <p className="text-base text-xl md:text-3xl leading-relaxed text-gray-200">
          <br />
          هي مبادرة شبابية رائدة تهدف إلى تمكين الطلاب والشباب من عمر{" "}
          <span className="font-bold  text-pink-600 "> 15 حتى 38 عامًا </span>
          لاكتساب المهارات المستقبلية في أهم مجالات التكنولوجيا
          <br />
          نركز على المجالات الأكثر تأثيرًا في{" "}
          <span className=" font-semibold">
            الثورة الصناعية الرابعة
          </span>
        </p>
      </motion.div>

      {/* ---------- رؤيتنا ---------- */}
      <motion.div
        className="max-w-3xl mx-auto text-center py-25"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-pink-400 mb-6">
          رؤيتنا
        </h2>
        <p className="text-xl md:text-3xl leading-relaxed font-medium">
          أن نصبح{" "}
          <span className="text-pink-600 font-bold">
            المؤسسة العربية الأولى
          </span>{" "}
          لتمكين الشباب من أدوات وتقنيات المستقبل وبناء{" "}
          <span className=" font-semibold">جيل مبتكر</span> قادر على المنافسة
          عالميًا
        </p>
      </motion.div>

      {/* ---------- رسالتنا ---------- */}
      <motion.div
        className="max-w-3xl mx-auto text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-pink-400 inline-block pb-2">
          رسالتنا
        </h2>
        <p className="text-xl md:text-3xl leading-relaxed font-medium text-center">
          نشر{" "}
          <span className="font-bold ">المعرفة التكنولوجية</span> للشباب من خلال{" "}
          <span className="text-pink-600 font-semibold">التدريب العملي</span>،{" "}
          <span className="text-pink-600 font-semibold">ورش العمل</span>،{" "}
          <span className="text-pink-600 font-semibold">البرامج التفاعلية</span>{" "}
          مع ربطهم بـ{" "}
          <span className=" font-bold">فرص حقيقية</span> في سوق العمل.
        </p>
      </motion.div>

      {/* ---------- أهدافنا ---------- */}
      <motion.div
        className="max-w-4xl mx-auto text-center py-25"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-pink-400 mb-10 inline-block pb-2">
          أهدافنا
        </h2>
        <ul className="space-y-6 text-center text-xl md:text-2xl font-medium">
          <li className="flex flex-row-reverse items-start gap-3">
            <span className="w-3 h-3 mt-2 bg-purple-600 rounded-full"></span>
            تدريب{" "}
            <span className="text-pink-600 font-bold">100,000 شاب وشابة</span> في
            مختلف المجالات التقنية بحلول عام 2030
          </li>
          <li className="flex flex-row-reverse items-start gap-3">
            <span className="w-3 h-3 mt-2 bg-pink-500 rounded-full"></span>
            إقامة{" "}
            <span className="text-pink-600 font-semibold">
              ورش عمل ومعسكرات تكنولوجية عملية
            </span>{" "}
            على مستوى الجامعات والمدارس
          </li>
          <li className="flex flex-row-reverse items-start gap-3">
            <span className="w-3 h-3 mt-2 bg-purple-500 rounded-full"></span>
            دعم{" "}
            <span className="text-pink-600 font-bold">
              الابتكار الطلابي وريادة الأعمال التقنية
            </span>
            .
          </li>
          <li className="flex flex-row-reverse items-start gap-3">
            <span className="w-3 h-3 mt-2 bg-pink-500 rounded-full"></span>
            بناء شبكة قوية من{" "}
            <span className="text-pink-600 font-semibold">
              الشباب المبدع والخبراء والشركاء
            </span>
            .
          </li>
          <li className="flex flex-row-reverse items-start gap-3">
            <span className="w-3 h-3 mt-2 bg-purple-600 rounded-full"></span>
            ربط المتدربين بـ{" "}
            <span className=" text-pink-600 font-bold">
              فرص تدريبية ووظيفية حقيقية
            </span>{" "}
            في سوق العمل.
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Info;
