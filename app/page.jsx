'use client'

import React, { useState, useEffect } from 'react';
import { ChevronRight, Zap, Package, TrendingUp, MessageCircle, Leaf, BarChart3, Clock } from 'lucide-react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <header className={`relative z-10 border-b border-cyan-500/20 backdrop-blur-sm py-6 transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
              <span className="text-white font-black text-lg">∞</span>
            </div>
            <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              TECHWORM
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#vision" className="text-slate-300 hover:text-cyan-400 transition">Vision</a>
            <a href="#efficiency" className="text-slate-300 hover:text-cyan-400 transition">Efficiency</a>
            <a href="#capacity" className="text-slate-300 hover:text-cyan-400 transition">Capacity</a>
            <a href="#bloom" className="text-slate-300 hover:text-cyan-400 transition">Bloom Fresh</a>
            <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105">
              Contact Us
            </button>
          </nav>
        </div>
      </header>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-cyan-400 font-black text-sm mb-4 tracking-widest">THE FUTURE IS NOW</p>
              <h1
