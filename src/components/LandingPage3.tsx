"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LandingPage3() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="w-full min-h-screen bg-[url('/bg-img.png')] flex flex-col items-center justify-center py-12 px-4"
    >
      {/* Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="w-full flex justify-center mb-8"
      >
        <div className="bg-gradient-to-r from-pink-400 to-blue-400 text-white px-6 py-2 rounded-full shadow-lg text-sm font-semibold flex items-center gap-2" style={{ fontFamily: 'Satoshi, Arial, Helvetica, sans-serif' }}>
          <span>✨ Featuring all sites on a Times Square Billboard</span>
          <span className="ml-2 underline cursor-pointer">Get Featured →</span>
        </div>
      </motion.div>
      {/* Main Content */}
      <motion.div
        className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        {/* Left Side */}
        <motion.div
          className="flex-1 flex flex-col items-start justify-center md:pl-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-5xl md:text-6xl font-bold text-green-300 leading-tight mb-6"
            style={{ fontFamily: 'Satoshi, Arial, Helvetica, sans-serif' }}
          >
            Create your<br />Webmate page in a <span className="text-orange-400">flash</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-gray-700 mb-8"
            style={{ fontFamily: 'Satoshi, Arial, Helvetica, sans-serif' }}
          >
            Start earning $$ by the time you finish reading our website
          </motion.p>
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-lg font-semibold underline text-gray-700 flex items-center gap-1"
            style={{ fontFamily: 'Satoshi, Arial, Helvetica, sans-serif' }}
          >
            Launch your page <span role="img" aria-label="arrow">↗️</span>
          </motion.a>
        </motion.div>
        {/* Right Side - Card Mockup */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-orange-100 rounded-3xl p-8 w-[400px] max-w-full shadow-xl flex flex-col gap-6" style={{ fontFamily: 'Satoshi, Arial, Helvetica, sans-serif' }}>
            {/* Profile Row */}
            <div className="flex items-center gap-4">
              <Image src="/profile_6.jpg" alt="Vivianne Miedema" width={56} height={56} className="w-14 h-14 rounded-full object-cover border-4 border-white shadow" />
              <div>
                <div className="font-bold text-lg text-black">Vivianne Miedema</div>
                <div className="text-gray-500 text-sm">webmate.io/Vivianne</div>
              </div>
            </div>
            {/* Placeholder for stats */}
            <div className="flex gap-3 mt-2 mb-2">
              <div className="w-20 h-6 bg-gray-200 rounded-lg" />
              <div className="w-20 h-6 bg-gray-200 rounded-lg" />
            </div>
            {/* Colorful vertical bar */}
            <div className="absolute right-8 top-24 flex flex-col gap-3">
              <div className="w-6 h-6 rounded-lg bg-red-400 flex items-center justify-center"><span className="text-white text-xl">✓</span></div>
              <div className="w-6 h-6 rounded-lg bg-orange-300" />
              <div className="w-6 h-6 rounded-lg bg-purple-400" />
              <div className="w-6 h-6 rounded-lg bg-teal-400" />
            </div>
            {/* Flash Icon and notifications */}
            <div className="flex gap-4 items-center mt-4">
              <div className="flex items-center justify-center w-32 h-32 rounded-2xl bg-orange-400">
                <span className="text-white text-7xl font-bold">⚡</span>
              </div>
              <div className="flex flex-col gap-3">
                <div className="bg-white rounded-xl px-4 py-2 flex items-center gap-2 shadow text-black font-semibold">
                  <span className="bg-red-500 w-3 h-3 rounded-full inline-block" /> New sale | $30
                </div>
                <div className="bg-gray-100 rounded-xl px-4 py-2 flex items-center gap-2 text-gray-700">
                  <span className="bg-red-200 w-3 h-3 rounded-full inline-block" /> A new testimonial
                </div>
                <div className="bg-gray-100 rounded-xl px-4 py-2 flex items-center gap-2 text-gray-400 line-through">
                  <span className="bg-red-100 w-3 h-3 rounded-full inline-block" /> New booking | $100
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      {/* Booking & Features Section */}
      <motion.div
        className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12 mt-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        {/* Left: Booking Card in Pink Rounded Box */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative bg-pink-200 rounded-[80px] w-[500px] h-[500px] flex items-center justify-center shadow-xl">
            <div className="bg-white rounded-3xl shadow-lg w-[340px] p-8 flex flex-col items-center" style={{ fontFamily: 'Satoshi, Arial, Helvetica, sans-serif' }}>
              <div className="flex items-center gap-3 mb-4">
                <Image src="/profile_7.jpg" alt="avatar" width={48} height={48} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-bold text-lg text-black">Book session</div>
                  <div className="text-gray-500 text-sm">Select date & time</div>
                </div>
                <span className="ml-2 w-3 h-3 bg-blue-500 rounded-full inline-block" />
              </div>
              {/* Date Selector */}
              <div className="flex gap-2 mb-6">
                <div className="flex flex-col items-center border rounded-lg px-4 py-2 bg-gray-50">
                  <span className="text-xs text-gray-400">Fri</span>
                  <span className="font-semibold">29 Sep</span>
                </div>
                <div className="flex flex-col items-center border-2 border-black rounded-lg px-4 py-2 bg-white">
                  <span className="text-xs text-gray-400">Sat</span>
                  <span className="font-bold">30 Sep</span>
                </div>
                <div className="flex flex-col items-center border rounded-lg px-4 py-2 bg-gray-50">
                  <span className="text-xs text-gray-400">Sun</span>
                  <span className="font-semibold">31 Sep</span>
                </div>
                <div className="flex flex-col items-center border rounded-lg px-4 py-2 bg-gray-50">
                  <span className="text-xs text-gray-400">Mon</span>
                  <span className="font-semibold">01 Oct</span>
                </div>
              </div>
              {/* Next available */}
              <div className="w-full flex items-center justify-between mt-4">
                <span className="text-black font-bold">07:00pm, Tue 29st</span>
                <button className="bg-black text-white px-6 py-2 rounded-lg font-bold">Book</button>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Right: Features Accordion */}
        <motion.div
          className="flex-1 flex flex-col justify-center text-green-400 items-start max-w-xl w-full mt-12 md:mt-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            {
              title: "Offer 1:1 sessions",
              desc: "Mentorship sessions, consultations, discovery calls - do what you do best. We take care of everything else",
              open: true,
            },
            {
              title: "Setup Priority DM in seconds",
              desc: "",
              open: false,
            },
            {
              title: "Host a webinar",
              desc: "",
              open: false,
            },
            {
              title: "Bundle your services",
              desc: "",
              open: false,
            },
            {
              title: "Sell courses & products",
              desc: "",
              open: false,
            },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              className="w-full border-b last:border-b-0 text-green-400 border-gray-200 py-6 flex flex-col"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-4">
                  <span className="text-orange-400 text-xl font-bold min-w-[32px]">{`0${idx + 1}`}</span>
                  <span className="text-2xl font-semibold text-green-400">{item.title}</span>
                </div>
                <span className="text-orange-400 text-3xl font-bold">&#709;</span>
              </div>
              {item.open && item.desc && (
                <div className="pl-12 pt-3 text-gray-600 text-base font-normal">{item.desc}</div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
