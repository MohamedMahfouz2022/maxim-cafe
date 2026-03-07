# ☕ Maxim Café — كافيه ماكسيم

موقع كافيه ماكسيم — Landing Page احترافية مع تجربة طلب مدمجة عبر واتساب.

---

## 🚀 تشغيل المشروع

```bash
# 1. تثبيت الحزم
npm install

# 2. تشغيل على localhost
npm run dev
```

افتح المتصفح على: [http://localhost:3000](http://localhost:3000)

---

## 🛠 الـ Stack المستخدم

| التقنية | الاستخدام |
|---|---|
| **Next.js 14** (App Router) | الإطار الأساسي |
| **React 18** | مكتبة الـ UI |
| **Tailwind CSS** | التصميم والـ styling |
| **Framer Motion** | الأنيميشن |
| **React Three Fiber** | الـ 3D Canvas |
| **Three.js** | الـ 3D geometries |
| **@react-three/drei** | helpers للـ R3F |
| **Biome** | Linter + Formatter |

---

## 📁 هيكل المشروع

```
maxim-cafe/
├── app/
│   ├── globals.css        ← Tailwind directives
│   ├── layout.jsx         ← Root layout + metadata + CartProvider
│   └── page.jsx           ← الصفحة الرئيسية
│
├── components/
│   ├── 3d/
│   │   └── CoffeeCup.jsx  ← كوب القهوة الثلاثي الأبعاد
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx        ← Hero + 3D Cup
│   │   ├── Menu.jsx        ← عرض المنيو
│   │   └── OrderFromTable.jsx ← الطلب عبر واتساب
│   └── ui/
│       ├── CartSummary.jsx
│       ├── CategoryTabs.jsx
│       └── MenuCard.jsx
│
├── context/
│   └── CartContext.jsx     ← سلة مشتركة بين المنيو والطلبات
│
├── data/
│   └── menuData.js
│
├── hooks/ (محتفظ بيها للـ reference)
│   └── useCart.js
│
├── biome.json
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
└── tailwind.config.js
```

---

## ✨ المميزات

- 🎯 **كوب قهوة 3D** يدور في الـ Hero
- 🛒 **سلة مشتركة** بين المنيو وقسم الطلبات (عبر React Context)
- 📱 **Responsive** على كل الأجهزة مع Hamburger Menu للموبايل
- 💬 **الطلب عبر واتساب** — رسالة منسقة تلقائياً للكاشير
- 🎨 **Framer Motion** أنيميشن على كل الـ sections

---

## 📱 رقم واتساب الكاشير

الطلبات بتتبعت تلقائياً على: **01013495432**

---

## 🔧 أوامر Biome

```bash
npm run lint      # فحص الكود
npm run format    # تنسيق الكود
npm run check     # فحص + تنسيق معاً
```

---

## 📦 Build للـ Production

```bash
npm run build
npm run start
```
