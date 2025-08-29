"use client";
import { useState } from "react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
      <nav className="fixed top-0 left-0 w-full z-50 bg-[url('/bg-img.png')]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white font-semibold hover:text-pink-200 transition">Platform</a>
            <a href="#" className="text-white font-semibold hover:text-pink-200 transition">Solutions</a>
            <a href="#" className="text-white font-semibold hover:text-pink-200 transition">Enterprise</a>
          </div>
          
          <div className="flex-1 md:flex-none flex justify-center md:justify-start">
            <span className="text-pink-200 font-extrabold text-2xl sm:text-3xl tracking-widest" style={{ fontFamily: 'Satoshi, Arial, Helvetica, sans-serif', letterSpacing: '0.1em' }}>WEBMATE</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-white font-semibold hover:text-pink-200 transition">Resources</a>
            <a href="#" className="text-white font-semibold hover:text-pink-200 transition">Pricing</a>
            <a href="#" className="text-pink-200 font-semibold hover:text-white transition">Log In</a>
            <a href="#" className="ml-2 px-5 py-2 rounded-md border border-pink-200 text-pink-200 font-semibold hover:bg-pink-200 hover:text-black transition bg-transparent">Get started</a>
          </div>

          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-[url('/bg-img.png')] border-t border-white/20">
            <div className="px-4 py-4 space-y-4">
              <a href="#" className="block text-white font-semibold hover:text-pink-200 transition py-2">Platform</a>
              <a href="#" className="block text-white font-semibold hover:text-pink-200 transition py-2">Solutions</a>
              <a href="#" className="block text-white font-semibold hover:text-pink-200 transition py-2">Enterprise</a>
              <a href="#" className="block text-white font-semibold hover:text-pink-200 transition py-2">Resources</a>
              <a href="#" className="block text-white font-semibold hover:text-pink-200 transition py-2">Pricing</a>
              <a href="#" className="block text-pink-200 font-semibold hover:text-white transition py-2">Log In</a>
              <a href="#" className="block px-5 py-2 rounded-md border border-pink-200 text-pink-200 font-semibold hover:bg-pink-200 hover:text-black transition bg-transparent text-center">Get started</a>
            </div>
          </div>
        )}
      </nav>
    );
  }