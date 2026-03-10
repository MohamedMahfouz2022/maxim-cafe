// ============================================================
// data/menuData.js
// ============================================================

export const menuData = {
  "قهوة ساخنة": [
    { id: 1,  name: "إسبريسو",        nameEn: "Espresso",          price: 25, desc: "جرعة قهوة مركزة بنكهة غنية",           image: "/images/menu/espresso.jpg" },
    { id: 2,  name: "كابتشينو",       nameEn: "Cappuccino",        price: 35, desc: "إسبريسو مع رغوة الحليب الناعمة",        image: "/images/menu/cappuccino.jpg" },
    { id: 3,  name: "لاتيه",          nameEn: "Latte",             price: 38, desc: "إسبريسو بالحليب المبخر الكريمي",        image: "/images/menu/latte.jpg" },
    { id: 4,  name: "أمريكانو",       nameEn: "Americano",         price: 28, desc: "إسبريسو مخفف بالماء الساخن",            image: "/images/menu/americano.jpg" },
    { id: 5,  name: "موكا",           nameEn: "Mocha",             price: 42, desc: "إسبريسو بالشوكولاتة والحليب",           image: "/images/menu/mocha.jpg" },
  ],
  "مشروبات باردة": [
    { id: 6,  name: "فرابتشينو",      nameEn: "Frappuccino",       price: 48, desc: "قهوة مثلجة مخفوقة بالكريمة",           image: "/images/menu/frappuccino.jpg" },
    { id: 7,  name: "آيس لاتيه",      nameEn: "Iced Latte",        price: 42, desc: "لاتيه بارد على الثلج",                  image: "/images/menu/iced-latte.jpg" },
    { id: 8,  name: "موهيتو برتقال",  nameEn: "Orange Mojito",     price: 45, desc: "برتقال طازج بالنعناع والصودا",          image: "/images/menu/orange-mojito.jpg" },
    { id: 9,  name: "ليموناضة",       nameEn: "Lemonade",          price: 32, desc: "ليمون طازج بالنعناع والسكر",            image: "/images/menu/lemonade.jpg" },
  ],
  "مأكولات": [
    { id: 10, name: "كرواسان جبن",    nameEn: "Cheese Croissant",  price: 38, desc: "كرواسان طازج بالجبن الذائب",            image: "/images/menu/cheese-croissant.jpg" },
    { id: 11, name: "باستا كريمة",    nameEn: "Cream Pasta",       price: 75, desc: "باستا بصوص الكريمة والمشروم",           image: "/images/menu/cream-pasta.jpg" },
    { id: 12, name: "سندوتش دجاج",   nameEn: "Chicken Sandwich",  price: 65, desc: "دجاج مشوي مع الخضار والصوص",           image: "/images/menu/chicken-sandwich.jpg" },
    { id: 13, name: "وافل بالعسل",    nameEn: "Honey Waffle",      price: 55, desc: "وافل طازج مع العسل والفاكهة",           image: "/images/menu/honey-waffle.jpg" },
  ],
  "كيك وحلويات": [
    { id: 14, name: "تشيز كيك",       nameEn: "Cheesecake",        price: 48, desc: "تشيز كيك نيويورك الكلاسيكي",           image: "/images/menu/cheesecake.jpg" },
    { id: 15, name: "براوني شوكولاتة",nameEn: "Chocolate Brownie", price: 35, desc: "براوني دافئ بالشوكولاتة",              image: "/images/menu/brownie.jpg" },
    { id: 16, name: "تيراميسو",       nameEn: "Tiramisu",          price: 52, desc: "الديسير الإيطالي الكلاسيكي",           image: "/images/menu/tiramisu.jpg" },
  ],
};

export const menuCategories = Object.keys(menuData);
