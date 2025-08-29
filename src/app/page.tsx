"use client"
import Navbar from "@/components/Navbar";
import LandingPage2 from "@/components/LandingPage2";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import LandingPage3 from "@/components/LandingPage3";
import LandingPage4 from "@/components/LandingPage4";
import Footer from "@/components/Footer";
import Image from "next/image";

const cards = [
  { name: "Ganesh Balakrishnan", subtitle: "Shark Tank India", label: "Aurm", color: "from-yellow-400 to-orange-500", img: "/profile_1.jpg" },
  { name: "Aditi Paul, PhD", subtitle: "Helping immigrants", label: "Dr. Paul & Company", color: "from-red-500 to-pink-500", img: "/profile_2.jpg" },
  { name: "Radhika Agrawal", subtitle: "Experience Design", label: "Design Consultant", color: "from-blue-500 to-cyan-400", img: "/profile_3.jpg" },
  { name: "Melissa (Chapman)", subtitle: "PMP eBook Author", label: "Chaucer", color: "from-yellow-400 to-purple-400", img: "/profile_4.jpg" },
  { name: "Expert 5", subtitle: "DeFi Analyst", label: "DeFi", color: "from-green-400 to-lime-400", img: "/profile_5.jpg" },
  { name: "Expert 6", subtitle: "Smart Contract Auditor", label: "Audit", color: "from-purple-500 to-indigo-400", img: "/profile_6.jpg" },
  { name: "Expert 7", subtitle: "DAO Strategist", label: "DAO", color: "from-pink-400 to-red-400", img: "/profile_7.jpg" },
];

function ConveyorCards() {
  const controls = useAnimation();
  useEffect(() => {
    controls.start({
      y: [0, -1800],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 36,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  return (
    <div className="h-[100vh] w-[280px] sm:w-[340px] flex flex-col items-center overflow-hidden p-2">
      <motion.div animate={controls} className="flex flex-col gap-8">
        {cards.concat(cards[0]).map((card, i) => (
          <div
            key={i}
            className="w-[240px] sm:w-[300px] h-[180px] sm:h-[220px] bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden border border-gray-100"
          >
            <div className={`relative h-[80px] sm:h-[100px] w-full bg-gradient-to-r ${card.color} flex items-end justify-center`}> 
              <Image src={card.img} alt={card.name} width={64} height={64} className="absolute left-1/2 -translate-x-1/2 bottom-2 w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-white object-cover shadow-md" />
              <span className="absolute top-3 left-3 bg-white/80 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow" style={{ fontFamily: 'Satoshi, Arial, Helvetica, sans-serif' }}>{card.label}</span>
            </div>
            <div className="flex-1 flex flex-col justify-center px-4 sm:px-5 pt-6 sm:pt-8 pb-4">
              <div className="text-base sm:text-lg font-bold text-gray-900 mb-1" style={{ fontFamily: 'Satoshi, Arial, Helvetica, sans-serif' }}>{card.name}</div>
              <div className="text-gray-500 text-xs sm:text-sm" style={{ fontFamily: 'Satoshi, Arial, Helvetica, sans-serif' }}>{card.subtitle}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-[url('/bg-img.png')] bg-cover bg-center flex items-center justify-start pt-16">
        <div className="flex flex-col lg:flex-row w-full items-start">
          <div className="max-w-3xl mx-4 sm:ml-8 mt-8 sm:mt-25 flex-1 text-center lg:text-left">
            <h1 className="text-white text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight lg:whitespace-nowrap" style={{ fontFamily: 'Satoshi, Arial, Helvetica, sans-serif' }}>Book experts.</h1>
            <h1 className="text-white text-5xl sm:text-7xl lg:text-8xl font-bold mb-2 leading-tight" style={{ fontFamily: 'Satoshi, Arial, Helvetica, sans-serif' }}>Pay in crypto.</h1>
            <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 px-4 sm:px-0" style={{ fontFamily: 'Satoshi, Arial, Helvetica, sans-serif' }}>Your Web3-native link-in-bio for paid 1:1s and consulting.</p>
            <button className="mt-2 px-6 sm:px-8 py-3 sm:py-4 bg-pink-200 text-black text-lg sm:text-xl font-bold rounded-lg shadow-lg hover:bg-pink-300 transition flex items-center gap-3 mx-auto lg:mx-0" style={{ fontFamily: 'Satoshi, Arial, Helvetica, sans-serif' }}>
              Register As an Expert
              <FiArrowRight className="text-xl sm:text-2xl" />
            </button>
          </div>
          <div className="flex-1 flex justify-center items-center mt-8 lg:mt-8">
            <Navbar/>
            <ConveyorCards />
          </div>
        </div>
      </div>
      <LandingPage2 />
      <LandingPage3/>
      <LandingPage4/>
      <Footer/>
    </>
  );
}
