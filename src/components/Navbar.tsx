"use client";

export default function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full z-50 bg-[url('/bg-img.png')] ">
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="text-white font-semibold hover:text-pink-200 transition">Platform</a>
            <a href="#" className="text-white font-semibold hover:text-pink-200 transition">Solutions</a>
            <a href="#" className="text-white font-semibold hover:text-pink-200 transition">Enterprise</a>
          </div>
          <div className="flex-1 flex justify-center">
            <span className="text-pink-200 font-extrabold text-3xl tracking-widest" style={{ fontFamily: 'Satoshi, Arial, Helvetica, sans-serif', letterSpacing: '0.1em' }}>WEBMATE</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white font-semibold hover:text-pink-200 transition">Resources</a>
            <a href="#" className="text-white font-semibold hover:text-pink-200 transition">Pricing</a>
            <a href="#" className="text-pink-200 font-semibold hover:text-white transition">Log In</a>
            <a href="#" className="ml-2 px-5 py-2 rounded-md border border-pink-200 text-pink-200 font-semibold hover:bg-pink-200 hover:text-black transition bg-transparent">Get started</a>
          </div>
        </div>
      </nav>
    );
  }