// ============================================================
// hooks/useCart.js
// محتفظين بيه للـ reference
// في المشروع الحالي بنستخدم useCart من context/CartContext.jsx
// اللي بيستخدم React Context عشان السلة تكون shared
// ============================================================

import { useState } from "react";

export function useCart() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeItem = (id) => setItems((prev) => prev.filter((i) => i.id !== id));
  const clearCart = () => setItems([]);
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const count = items.reduce((sum, i) => sum + i.qty, 0);

  return { items, addItem, removeItem, clearCart, total, count };
}
