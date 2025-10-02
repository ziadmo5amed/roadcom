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
    <section className="px-6 text-white bg-gradient-to-b from-blue-950 to-purple-900 py-30 md:px-16 lg:px-24">
      {/* ---------- عن Tech Pioneer ---------- */}
      <motion.div
        className="max-w-4xl mx-auto space-y-6 text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="mb-4 text-3xl font-extrabold md:text-5xl">
          عن  <span className="text-pink-400">Tech Pioneer</span>
        </h2>
        <p className="text-base text-xl leading-relaxed text-gray-200 md:text-3xl">
          <br />
          هي مبادرة شبابية رائدة تهدف إلى تمكين الطلاب والشباب من عمر{" "}
          <span className="font-bold text-pink-600 "> 15 حتى 38 عامًا </span>
          لاكتساب المهارات المستقبلية في أهم مجالات التكنولوجيا
          <br />
          نركز على المجالات الأكثر تأثيرًا في{" "}
          <span className="font-semibold ">
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
        <h2 className="mb-6 text-3xl font-extrabold text-pink-400 md:text-5xl">
          رؤيتنا
        </h2>
        <p className="text-xl font-medium leading-relaxed md:text-3xl">
          أن نصبح{" "}
          <span className="font-bold text-pink-600">
            المؤسسة العربية الأولى
          </span>{" "}
          لتمكين الشباب من أدوات وتقنيات المستقبل وبناء{" "}
          <span className="font-semibold ">جيل مبتكر</span> قادر على المنافسة
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
        <h2 className="inline-block pb-2 text-3xl font-extrabold text-pink-400 md:text-5xl">
          رسالتنا
        </h2>
        <p className="text-xl font-medium leading-relaxed text-center md:text-3xl">
          نشر{" "}
          <span className="font-bold ">المعرفة التكنولوجية</span> للشباب من خلال{" "}
          <span className="font-semibold text-pink-600">التدريب العملي</span>،{" "}
          <span className="font-semibold text-pink-600">ورش العمل</span>،{" "}
          <span className="font-semibold text-pink-600">البرامج التفاعلية</span>{" "}
          مع ربطهم بـ{" "}
          <span className="font-bold ">فرص حقيقية</span> في سوق العمل.
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
        <h2 className="inline-block pb-2 mb-10 text-3xl font-extrabold text-pink-400 md:text-5xl">
          أهدافنا
        </h2>
        <ul className="space-y-6 text-lg font-medium text-right md:text-2xl">
  <li className="flex items-start gap-3">
    
    <p className="flex-1">
      1 -
      تدريب{" "}
      <span className="font-bold text-pink-600">100,000 شاب وشابة</span> في
      مختلف المجالات التقنية بحلول عام 2030
     
    </p>
  </li>

  <li className="flex items-start gap-3">
 
    <p className="flex-1">
      2 - 
      إقامة{" "}
      <span className="font-semibold text-pink-600">
        ورش عمل ومعسكرات تكنولوجية عملية
      </span>{" "}
      على مستوى الجامعات والمدارس
     
    </p>
  </li>

  <li className="flex items-start gap-3">
   
    <p className="flex-1">
      3 -
      
      دعم{" "}
      <span className="font-bold text-pink-600">
       الابتكار الطلابي وريادة الأعمال التقنية
        
      </span>{" "} 
    
    </p>
  </li>

  <li className="flex items-start gap-3">
  
    <p className="flex-1">
      4 - 
      بناء شبكة قوية من{" "}
      <span className="font-semibold text-pink-600">
        الشباب المبدع والخبراء والشركاء
        
      </span>{" "} 
     
    </p>
  </li>

  <li className="flex items-center gap-3 ">
  
    <p className="flex-1">
      5 -
      ربط المتدربين بـ{" "}
      <span className="font-bold text-pink-600">
        فرص تدريبية ووظيفية حقيقية
      </span>{" "}
      في سوق العمل
    
    </p>
  </li>
</ul>

      </motion.div>
    </section>
  );
};

export default Info;
