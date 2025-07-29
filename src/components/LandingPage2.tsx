"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LandingPage2(){
    const categories = [
        "Career", "Consulting", "Content", "Cybersecurity", "Data & AI", "Design", "Finance", "HR", "Law", "Marketing", "Mental Health", "Product", "Software", "Study Abroad", "Best Selling", "Supply Chain", "Others"
    ];
    const cards = [
      { name: "Ganesh Balakrishnan", subtitle: "Shark Tank India", label: "Aurm", color: "from-yellow-400 to-orange-500", img: "https://randomuser.me/api/portraits/men/32.jpg" },
      { name: "Aditi Paul, PhD", subtitle: "Helping immigrants", label: "Dr. Paul & Company", color: "from-red-500 to-pink-500", img: "https://randomuser.me/api/portraits/women/44.jpg" },
      { name: "Radhika Agrawal", subtitle: "Experience Design", label: "Design Consultant", color: "from-blue-500 to-cyan-400", img: "https://randomuser.me/api/portraits/women/68.jpg" },
      { name: "Melissa (Chapman)", subtitle: "PMP eBook Author", label: "Chaucer", color: "from-yellow-400 to-purple-400", img: "https://randomuser.me/api/portraits/women/65.jpg" },
      { name: "Expert 5", subtitle: "DeFi Analyst", label: "DeFi", color: "from-green-400 to-lime-400", img: "https://randomuser.me/api/portraits/men/45.jpg" }
    ];

    const containerRef = useRef<HTMLDivElement>(null);
    const [cardsToShow, setCardsToShow] = useState(cards.length);

    useEffect(() => {
      function updateCardsToShow() {
        if (!containerRef.current) return;
        const containerWidth = containerRef.current.offsetWidth;
        const cardWidth = 300 + 32; // card width + gap (w-[300px] + gap-8 = 2rem = 32px)
        const maxCards = Math.floor(containerWidth / cardWidth);
        setCardsToShow(Math.max(1, Math.min(maxCards, cards.length)));
      }
      updateCardsToShow();
      window.addEventListener("resize", updateCardsToShow);
      return () => window.removeEventListener("resize", updateCardsToShow);
    }, [cards.length]);

    return (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="min-h-screen bg-[url('/bg-img.png')] bg-cover bg-center flex flex-col justify-center items-center px-8"
        >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-white text-6xl font-bold mb-3  text-center"
              style={{ fontFamily: 'Satoshi, Arial, Helvetica, sans-serif' }}
            >
              Empowering <span className="animated-gradient italic bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-500 bg-[length:200%_200%] bg-clip-text text-transparent inline-block">Experts</span> with Crypto
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-200 text-lg mt-2 text-center"
              style={{ fontFamily: 'Satoshi, Arial, Helvetica, sans-serif' }}
            >
              Connect your wallet, set your price, and start earning in your favorite digital currency.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-wrap gap-4 justify-center w-full max-w-5xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            >
                {categories.map((cat, i) => (
                    <motion.button
                        key={cat}
                        className={
                            `px-7 py-3 rounded-full border border-black font-bold text-lg transition-all duration-200 ` +
                            (i === 0
                                ? "bg-black text-white shadow"
                                : "bg-transparent text-black hover:bg-black hover:text-white")
                        }
                        style={{ fontFamily: 'Satoshi, Arial, Helvetica, sans-serif' }}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                    >
                        {cat}
                    </motion.button>
                ))}
            </motion.div>
            <motion.div
              ref={containerRef}
              className="mt-14 flex flex-row gap-8 justify-center w-full max-w-6xl overflow-x-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            >
              {cards.slice(0, cardsToShow).map((card, i) => (
                <motion.div
                  key={i}
                  className="w-[300px] h-[220px] bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden border border-gray-100 min-w-[300px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className={`relative h-[100px] w-full bg-gradient-to-r ${card.color} flex items-end justify-center`}>
                    <Image src={card.img} alt={card.name} width={64} height={64} className="absolute left-1/2 -translate-x-1/2 bottom-2 w-16 h-16 rounded-full border-4 border-white object-cover shadow-md" />
                    <span className="absolute top-3 left-3 bg-white/80 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow" style={{ fontFamily: 'Satoshi, Arial, Helvetica, sans-serif' }}>{card.label}</span>
                  </div>
                  <div className="flex-1 flex flex-col justify-center px-5 pt-8 pb-4">
                    <div className="text-lg font-bold text-gray-900 mb-1" style={{ fontFamily: 'Satoshi, Arial, Helvetica, sans-serif' }}>{card.name}</div>
                    <div className="text-gray-500 text-sm" style={{ fontFamily: 'Satoshi, Arial, Helvetica, sans-serif' }}>{card.subtitle}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <style jsx>{`
              .animated-gradient {
                animation: gradient-move 1s linear infinite;
              }
              @keyframes gradient-move {
                0% { background-position: 0% 50%; }
                100% { background-position: 100% 50%; }
              }
            `}</style>
        </motion.div>
    );
}