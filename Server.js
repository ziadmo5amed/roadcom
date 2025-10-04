import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// إعدادات SMTP باستخدام host + port
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,              // البورت المضمون مع Gmail
  secure: true,           // لازم true مع 465
  auth: {
    user: "ziadmohamedabrahim@gmail.com",   // إيميلك
    pass: "taycsgeybcwwrnkk",               // App Password
  },
  tls: {
    rejectUnauthorized: false,  // تجاهل مشاكل الـ SSL
  },
});

// استقبال بيانات الفورم وإرسال الإيميلات
app.post("/send", async (req, res) => {
  const { name, email, phone, community } = req.body;

  console.log("Form Data Received:", req.body);

  try {
    // إرسال البيانات للإيميل الأساسي
    await transporter.sendMail({
      from: `"نموذج التسجيل" <ziadmohamedabrahim@gmail.com>`,
      to: "ziadmohamedabrahim@gmail.com", // هنا بتستقبل كل البيانات
      subject: "📝 تسجيل جديد",
      text: `
👤 الاسم: ${name}
📧 الإيميل: ${email}
📱 التليفون: ${phone}
🌐 الاهتمام: ${community}
      `,
    });

    // إرسال رسالة تأكيد للطالب
    if (email) {
      await transporter.sendMail({
        from: `"نموذج التسجيل" <ziadmohamedabrahim@gmail.com>`,
        to: email,
        subject: "✅ تم تسجيلك بنجاح",
        text: `
مرحبًا ${name}،

تم استلام بياناتك بنجاح.

🌐 الاهتمام: ${community}

تحياتنا،
فريق الدعم
        `,
      });
    }

    res.json({ success: true, message: "✅ البيانات وصلت بنجاح للإيميل" });

  } catch (error) {
    console.error("❌ Error sending emails:", error);
    res.status(500).json({ success: false, message: "❌ في مشكلة في الإرسال" });
  }
});

app.get("/", (req, res) => {
  res.send("🚀 السيرفر شغال، استخدم POST /send لإرسال البيانات");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
