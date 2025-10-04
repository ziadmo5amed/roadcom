import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    community: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message || "تم إرسال البيانات بنجاح ✅");

      setFormData({
        name: "",
        email: "",
        phone: "",
        community: "",
      });
    } catch (err) {
      alert("🚨 مشكلة في الاتصال بالسيرفر");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl">
        <h2 className="mb-6 text-2xl font-bold text-center text-purple-700">
          نموذج تسجيل الطلاب
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="الاسم الكامل"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            name="email"
            placeholder="البريد الإلكتروني"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="tel"
            name="phone"
            placeholder="رقم الهاتف"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <select
            name="community"
            value={formData.community}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">-- اختر من القائمة --</option>
            <option value="🤖 الذكاء الاصطناعي">🤖 الذكاء الاصطناعي</option>
            <option value="🔒 الأمن السيبراني">🔒 الأمن السيبراني</option>
            <option value="🌐 إنترنت الأشياء">🌐 إنترنت الأشياء</option>
            <option value="⚙ الروبوتات">⚙ الروبوتات</option>
            <option value="🖨 الطباعة ثلاثية الأبعاد">🖨 الطباعة ثلاثية الأبعاد</option>
            <option value="☁ التخزين السحابي">☁ التخزين السحابي</option>
            <option value="💼 ريادة الأعمال">💼 ريادة الأعمال</option>
          </select>
          <button
            type="submit"
            className="w-full py-3 font-semibold text-white transition duration-300 bg-purple-600 rounded-lg shadow-md hover:bg-purple-700"
          >
            تسجيل
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
