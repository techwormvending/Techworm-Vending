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
      {/* Animated gradient background */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      {/* Header */}
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

      {/* Hero Section - The Future */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-cyan-400 font-black text-sm mb-4 tracking-widest">THE FUTURE IS NOW</p>
              <h1 className="text-6xl md:text-7xl font-black leading-tight mb-6">
                <span className="block">AI IS</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">RESHAPING</span>
                <span className="block">RETAIL VENDING</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-lg">
                Vending machines aren't just dispensers anymore. They're intelligent retail partners that understand demand, maximize space, and deliver unparalleled customer experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/journey" className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-black text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2 inline-block">
                  Start Your Journey <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </a>
                <a href="/machines" className="px-8 py-4 bg-slate-900 border-2 border-cyan-500/40 rounded-lg font-bold text-lg hover:border-cyan-500 hover:bg-slate-800 transition-all inline-block text-center">
                  See Machines
                </a>
              </div>
            </div>
            <div className="relative h-96 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-500/30 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                <img 
                  src="tech_logo.jpg" 
                  alt="TechWorm Logo" 
                  className="max-w-full max-h-full object-contain p-8"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div style="text-align: center;"><p style="color: rgba(203, 213, 225, 0.6);">Your Logo Here</p></div>';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className={`relative z-10 max-w-5xl mx-auto px-6 py-24 transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="rounded-3xl overflow-hidden border border-cyan-500/30 backdrop-blur-sm hover:border-cyan-500/50 transition-all shadow-2xl">
          {/* Video Container */}
          <div className="relative bg-black aspect-video flex items-center justify-center">
            <video 
              className="w-full h-full object-cover"
              controls
              autoPlay
              loop
              muted
            >
              <source src="/videos/web.mp4" type="video/mp4" />
              Your browser doesn't support HTML5 video.
            </video>
          </div>
          
          {/* Video Info */}
          <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 p-8 border-t border-cyan-500/20">
            <h3 className="text-3xl font-black text-white mb-3">How TechWorm Works</h3>
            <p className="text-slate-300 text-lg">
              Experience the future of vending. AI-powered recognition, instant checkout, unlimited variety.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section id="vision" className="relative z-10 border-t border-cyan-500/20 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-20 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Why AI is the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Future of Vending</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Traditional vending is dead. Limited selection. Poor stocking. Zero insight. AI vending changes everything.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📊',
                title: 'Real-Time Intelligence',
                desc: 'Know exactly what sells, when, and where. Optimize every placement with data.',
                delay: 200
              },
              {
                icon: '⚡',
                title: 'Frictionless Experience',
                desc: 'Grab what you want. AI charges automatically. No buttons. No scanning. No wait.',
                delay: 300
              },
              {
                icon: '🚀',
                title: 'Infinite Scalability',
                desc: 'Manage dozens of machines from one dashboard. Install, stock, and grow effortlessly.',
                delay: 400
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 bg-slate-900/50 hover:bg-slate-800 transition-all duration-300 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${item.delay}ms` }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-black mb-3">{item.title}</h3>
                <p className="text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Efficiency Section */}
      <section id="efficiency" className="relative z-10 border-t border-cyan-500/20 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <p className="text-cyan-400 font-black text-sm mb-4 tracking-widest">SMARTER STOCKING</p>
              <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                Never Stock Empty Again
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Our AI tracks inventory in real-time. Knows which items are moving. Predicts demand patterns. Our team stocks efficiently—less travel, less time, maximum efficiency.
              </p>
              <ul className="space-y-4">
                {[
                  'Predictive inventory management',
                  'Route optimization for stocking',
                  'Instant low-stock alerts',
                  'Data-driven product selection'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
              style={{ transitionDelay: '200ms' }}>
              <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-12 backdrop-blur-sm">
                <div className="text-center mb-8">
                  <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">40%</div>
                  <p className="text-slate-300">Less stocking time per location</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <p className="text-sm text-slate-400 mb-2">Traditional Vending</p>
                    <div className="h-2 bg-slate-700 rounded-full">
                      <div className="h-full bg-slate-500 rounded-full" style={{width: '40%'}}></div>
                    </div>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <p className="text-sm text-cyan-400 font-semibold mb-2">TechWorm AI</p>
                    <div className="h-2 bg-slate-700 rounded-full">
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-6 text-center">Based on optimized routing & predictive stocking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capacity & Variety Section */}
      <section id="capacity" className="relative z-10 border-t border-cyan-500/20 py-24 bg-gradient-to-b from-slate-900/50 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-cyan-400 font-black text-sm mb-4 tracking-widest">REVOLUTIONARY CAPACITY</p>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Same Size. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">20X More Items</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our machines don't just hold more—they hold infinitely more variety. While competitors waste space on moving parts, we use every inch for product.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className={`border border-slate-700 rounded-xl p-12 bg-slate-900/50 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
              style={{ transitionDelay: '300ms' }}>
              <h3 className="text-2xl font-black mb-8 text-slate-400">Traditional Vending</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-slate-500 mb-2">Total Items</p>
                  <p className="text-5xl font-black">150</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-2">Different Varieties</p>
                  <p className="text-5xl font-black">40</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-2">Time to Restock</p>
                  <p className="text-5xl font-black">45m</p>
                </div>
                <div className="pt-6 border-t border-slate-700">
                  <p className="text-sm text-slate-500 mb-2">Limited by mechanical dispensers</p>
                  <p className="text-xs text-slate-600">Moving parts waste 60% of space</p>
                </div>
              </div>
            </div>

            <div className={`border-2 border-cyan-500/50 rounded-xl p-12 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 transition-all duration-1000 hover:shadow-2xl hover:shadow-cyan-500/30 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
              style={{ transitionDelay: '400ms' }}>
              <h3 className="text-2xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">TechWorm AI</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-slate-400 mb-2">Total Items</p>
                  <p className="text-5xl font-black text-cyan-400">800+</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-2">Different Varieties</p>
                  <p className="text-5xl font-black text-purple-400">400+</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-2">Time to Restock</p>
                  <p className="text-5xl font-black text-cyan-400">15m</p>
                </div>
                <div className="pt-6 border-t border-cyan-500/20">
                  <p className="text-sm text-cyan-400 font-semibold mb-2">✓ Computer vision. No moving parts.</p>
                  <p className="text-xs text-slate-400">Every inch is product space</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`border border-cyan-500/30 rounded-xl p-12 bg-slate-900/50 backdrop-blur-sm transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
            style={{ transitionDelay: '500ms' }}>
            <h3 className="text-2xl font-black mb-8">What Our Variety Means</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-cyan-400 font-bold mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Customer Satisfaction
                </p>
                <p className="text-slate-300">Customers find what they want. Every time. No disappointment. No missed sales.</p>
              </div>
              <div>
                <p className="text-purple-400 font-bold mb-3 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Revenue Multiplication
                </p>
                <p className="text-slate-300">More variety = higher transaction rates = more revenue per square foot.</p>
              </div>
              <div>
                <p className="text-cyan-400 font-bold mb-3 flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Fresh Food Integration
                </p>
                <p className="text-slate-300">Partner with Bloom Fresh to offer perishable items. Grab breakfast, lunch, snacks—all in one place.</p>
              </div>
              <div>
                <p className="text-purple-400 font-bold mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  24/7 Real Convenience
                </p>
                <p className="text-slate-300">True 24-hour convenience store experience. Not limited to shelf-stable items anymore.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloom Partnership Section */}
      <section id="bloom" className="relative z-10 border-t border-cyan-500/20 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              style={{ transitionDelay: '300ms' }}>
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/40 rounded-2xl p-12 backdrop-blur-sm">
                <div className="text-center">
                  <Leaf className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-3xl font-black mb-4">Bloom Fresh</h3>
                  <p className="text-slate-300 mb-6">Local distributor. Fresh food. Same-day delivery.</p>
                  <p className="text-sm text-slate-400">Real salads. Real sandwiches. Real breakfast items. Real fresh.</p>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
              style={{ transitionDelay: '400ms' }}>
              <p className="text-green-400 font-black text-sm mb-4 tracking-widest">FRESH FOOD REVOLUTION</p>
              <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                Fresh Food. <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Every Day</span>
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Vending machines finally enter the 21st century. No more stale crackers. Partner with Bloom Fresh Food for same-day fresh deliveries. Real meals. Real nutrition. Real convenience.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Fresh salads & bowl meals',
                  'Breakfast sandwiches daily',
                  'Locally sourced ingredients',
                  'Same-day restocking',
                  'Refrigerated delivery'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Leaf className="w-5 h-5 text-green-400" />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-slate-800/50 rounded-lg border border-green-500/20">
                <p className="text-green-400 font-bold text-sm">This Changes Everything</p>
                <p className="text-slate-300 text-sm mt-2">Your machines aren't vending anymore—they're mini convenience stores with fresh, nutritious options that compete with walk-in stores.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="rounded-2xl overflow-hidden border border-cyan-500/30">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
          <div className="relative p-12 md:p-16 text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              The Future of Retail <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Starts Here</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Efficiency. Capacity. Variety. Fresh food. Real customer service. This isn't the future of vending—it's the present. And it's here now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-black text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105">
                Schedule a Consultation
              </button>
              <a href="https://wa.me/14127799809" className="px-8 py-4 bg-slate-800 border-2 border-emerald-500/40 text-emerald-400 rounded-lg font-bold text-lg hover:border-emerald-500 hover:bg-slate-700 transition-all flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-cyan-500/20 backdrop-blur-sm mt-20 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
                  <span className="font-black text-white">∞</span>
                </div>
                <span className="font-black text-white">TECHWORM</span>
              </div>
              <p className="text-slate-400 text-sm">The future of AI-powered retail vending is here.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <p className="text-slate-400 text-sm">Pittsburgh, PA</p>
              <a href="https://wa.me/14127799809" className="text-cyan-400 font-semibold text-sm cursor-pointer hover:text-cyan-300">WhatsApp: (412) 779-9809</a>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Partners</h4>
              <p className="text-slate-400 text-sm">Bloom Fresh Food</p>
              <p className="text-slate-400 text-sm">Local Distribution Network</p>
            </div>
          </div>
          <div className="border-t border-cyan-500/10 pt-8 text-center text-slate-500 text-sm">
            <p>&copy; 2025 TechWorm Vending. The future of retail is intelligent. It's fresh. It's here.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
