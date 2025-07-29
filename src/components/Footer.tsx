"use client"
import { motion } from "framer-motion";
import React from "react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="w-full bg-[url('/bg-img.png')]  text-white py-8 px-4 "
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-lg font-bold">Webmate</div>
        <div className="text-sm text-gray-400">© {new Date().getFullYear()} Sarthak Harsh. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-green-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-green-400 transition">Terms of Service</a>
        </div>
      </div>
    </motion.footer>
  );
}