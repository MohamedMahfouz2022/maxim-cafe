/** @type {import('next').NextConfig} */
const nextConfig = {
  // مطلوب عشان Three.js و R3F يشتغلوا صح في Next.js App Router
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
};


module.exports = nextConfig;

