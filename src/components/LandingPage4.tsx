import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote: "Love the integrations with Calendar, Zoom and WhatsApp. Makes my life easier!",
    name: "Aishwarya Srinivasan",
    title: "LinkedIn Top Voice",
    img: "/profile_1.jpg",
  },
  {
    quote: "The entire experience is just so seamless. My followers love it",
    name: "Joerg Storm",
    title: "300K on LinkedIn",
    img: "/profile_2.jpg",
  },
  {
    quote: "Webmate is my go-to platform for scheduling 1:1 sessions and hosting webinars!",
    name: "Xinran Waibel",
    title: "Founder of Data Engineer Things",
    img: "/profile_3.jpg",
  },
  {
    quote: "The best way to monetize your expertise and connect with your audience.",
    name: "Alex Johnson",
    title: "Tech Influencer",
    img: "/profile_4.jpg",
  },
  {
    quote: "Super easy to use and my clients love the booking flow!",
    name: "Priya Patel",
    title: "Business Coach",
    img: "/profile_5.jpg",
  },
  {
    quote: "A must-have for anyone offering consulting or coaching online.",
    name: "Michael Chen",
    title: "Startup Mentor",
    img: "/profile_6.jpg",
  },
];

const features = [
  {
    bg: "bg-pink-100",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="8" fill="none"/><path d="M13 28l3.5-7H11a1 1 0 01-.9-1.45l6-12A1 1 0 0117 7h6a1 1 0 01.9 1.45l-2.5 5.05H29a1 1 0 01.9 1.45l-8 16A1 1 0 0120 32h-6a1 1 0 01-.9-1.45L13 28z" stroke="#222" strokeWidth="2" strokeLinejoin="round"/></svg>
    ),
    title: <><span className="font-extrabold text-5xl">2X</span></>,
    desc: <>convert better with <span className="font-bold">localised currency</span></>,
  },
  {
    bg: "bg-purple-100",
    icon: null,
    title: <><span className="font-extrabold text-5xl">40%</span></>,
    desc: <>increase in conversion<br/>with <span className="font-bold">testimonial showcase</span></>,
    overlay: [
      { text: '5/5 "Loved the session"', img: '/profile_7.jpg' },
      { text: '5/5 "Best advice ever"', img: '/profile_1.jpg' },
    ],
  },
  {
    bg: "bg-green-200",
    icon: null,
    title: <><span className="font-extrabold text-5xl">upto 4X</span></>,
    desc: <>your earnings with <span className="font-bold">country<br/>based pricing</span></>,
    overlay: [
      { text: '100$', img: 'https://flagcdn.com/in.svg' },
      { text: '400$', img: 'https://flagcdn.com/us.svg' },
    ],
  },
];

export default function LandingPage4() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="w-full bg-[url('/bg-img.png')]  py-24 px-4 flex flex-col items-center justify-center"
    >
      {/* Feature Section */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-green-400 text-5xl font-bold mb-16 text-center"
        style={{ fontFamily: "Satoshi, Arial, Helvetica, sans-serif" }}
      >
        Earn & Convert <span className="font-extrabold">more</span> with Webmate
      </motion.h2>
      <motion.div
        className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {features.map((f, i) => (
          <motion.div
            key={i}
            className={`rounded-[40px] p-8 relative flex flex-col justify-between min-h-[260px] ${f.bg}`}
            style={{ fontFamily: "Satoshi, Arial, Helvetica, sans-serif" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            {f.icon && <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.2 }}>{f.icon}</motion.div>}
            {f.overlay && (
              <div className="absolute top-6 right-6 flex flex-col gap-2">
                {f.overlay.map((o, j) => (
                  <motion.div
                    key={j}
                    className="flex items-center bg-white/80 rounded-full px-3 py-1 text-xs font-semibold shadow mb-1"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.3 + j * 0.1 }}
                  >
                    {o.img && (
                      <Image src={o.img} alt="flag" width={24} height={24} className="w-6 h-6 rounded-full mr-2 object-cover" />
                    )}
                    <span>{o.text}</span>
                  </motion.div>
                ))}
              </div>
            )}
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.25 }}>{f.title}</motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.3 }} className="text-lg text-black/80">{f.desc}</motion.div>
          </motion.div>
        ))}
      </motion.div>
      {/* Testimonials Section (keep previous code below) */}
      <motion.div
        className="w-full bg-[url('/bg-img.png')]  py-24 px-4 flex flex-col items-center justify-center rounded-3xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-white text-5xl font-bold mb-16 text-center"
          style={{ fontFamily: "Satoshi, Arial, Helvetica, sans-serif" }}
        >
          Don&apos;t Just Take Our Word for It
        </motion.h2>
        <motion.div
          className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-gray-100 rounded-[48px] p-8 flex flex-col justify-between shadow-lg min-h-[260px]"
              style={{ fontFamily: "Satoshi, Arial, Helvetica, sans-serif" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-5xl text-gray-300 mb-4">"</motion.span>
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.25 }} className="text-black text-lg mb-8">{t.quote}</motion.div>
              <div className="flex items-center gap-4 mt-auto">
                <Image src={t.img} alt={t.name} width={48} height={48} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.35 }} className="font-bold text-black">{t.name}</motion.div>
                  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.4 }} className="text-gray-600 text-sm">{t.title}</motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
