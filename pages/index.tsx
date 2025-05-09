"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden font-sans flex flex-col items-center justify-center">

      <Image src={"/logo.webp"} alt="" width={300} height={100} className="flex justify-center items-center ">
        
      </Image>
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-30"
        style={{
          backgroundImage: 'url("/win.gif")',
        }}
      ></div>

      {/* Hero Section */}
      <section className="relative z-10 text-center py-12 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-md animate-pulse "
        >
          🎉 ফ্রি ১০০০ টাকা বোনাস জিতে নিন!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-6 text-xl md:text-2xl text-green-300 font-semibold"
        >
          🕐 সীমিত সময়ের এই অফারটি মিস করবেন না!
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-2 text-lg text-white"
        >
          🔥 এখনই রেজিস্ট্রেশন করে প্রথম ডিপোজিটে বোনাস জিতে নিন 💰
        </motion.p>

        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-10"
        >
          <div className="flex items-center justify-center w-full mt-16 bottom-20 left-0 right-0 z-50 md:hidden px-4 ">
            <Link
              href="https://www.sohoz88.live/register"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 bottom-20 left-0 right-0 z-50 md:hidden   py-4 mask-t-from-95% rounded-full font-bold text-xl animate-bounce  bottom-0 shadow-2xl shadow-yellow-500 hover:scale-105 transition-transform"
            >
              এখনই দাবি করুন 🚀
            </Link>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-4 text-sm text-gray-300"
        >
          * এই অফারটি পেতে মিনিমাম ১০০০ টাকা ডিপোজিট করতে হবে 🎯
        </motion.p>
      </section>

      {/* Bottom Sticky CTA for Mobile */}
      <div className="fixed bottom-16 left-0 right-0 z-50 md:hidden px-4">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 70 }}
          className="bg-yellow-500 text-black text-center py-3 rounded-xl animate-pulse shadow-xl"
        >
          📢 এখনই রেজিস্টার করুন ও জিতুন ১০০০৳ বোনাস!
        </motion.div>
      </div>
    </main>
  );
}
