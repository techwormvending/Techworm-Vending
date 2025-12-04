'use client'

import React, { useState, useEffect } from 'react';
import { ChevronRight, Zap, Package, TrendingUp, MessageCircle, Leaf, BarChart3, Clock, ArrowLeft } from 'lucide-react';

export default function MachinesPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const machines = [
    {
      id: 1,
      name: 'US 360CT Mini',
      tagline: 'Compact Convenience',
      description: 'The perfect fit for any space. Powerful AI in a slim profile. Fits anywhere, performs everywhere.',
      icon: '⚡',
      color: 'from-cyan-500 to-blue-600',
      gradient: 'from-cyan-500/10 to-blue-500/10',
      borderColor: 'border-cyan-500/50',
      specs: {
        'Capacity': '240-300 items',
        'Footprint': 'Compact & slim',
        'AI Recognition': '99.9% accuracy',
        'Temperature Control': 'Full range',
        'Installation': 'Any location',
        'Power': '110V standard'
      },
      features: [
        'Universal placement (fits anywhere)',
        'AI-powered item recognition',
        'Flexible temperature settings',
        'Low maintenance design',
        'Perfect for offices, lobbies, and small spaces'
      ],
      highlight: 'Universal Placement'
    },
    {
      id: 2,
      name: 'DC-550D Hybrid',
      tagline: 'Dual Temperature Control',
      description: 'Refrigerated AND frozen in one intelligent machine. Your customers choose. Your revenue grows.',
      icon: '❄️',
      color: 'from-purple-500 to-pink-600',
      gradient: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500/50',
      specs: {
        'Capacity': '400-550 items',
        'Chilled Section': 'Adjustable temperature',
        'Frozen Section': 'Deep freeze capable',
        'Independent Zones': 'Separate controls',
        'Product Mix': 'Unlimited variety',
        'Revenue': '2X traditional machines'
      },
      features: [
        'Dual-zone cooling system',
        'Independent temperature controls',
        'Perfect for fresh food + frozen items',
        'Bloom Fresh integration ready',
        'Maximum revenue per square foot',
        'Ideal for high-traffic locations'
      ],
      highlight: 'Frozen + Chilled'
    },
    {
      id: 3,
      name: 'US1200CT Supermarket',
      tagline: 'Double Door Powerhouse',
      description: 'A convenience store in a machine. Over 1200 items. Double doors. Unlimited possibilities.',
      icon: '🏪',
      color: 'from-emerald-500 to-teal-600',
      gradient: 'from-emerald-500/10 to-teal-500/10',
      borderColor: 'border-emerald-500/50',
      specs: {
        'Capacity': '1200+ items',
        'Design': 'Double-door premium',
        'Inventory': 'Unlimited variety',
        'Display': 'Premium presentation',
        'Revenue Potential': '5X traditional',
        'Best For': 'Major locations'
      },
      features: [
        '1200+ item capacity',
        'Double-door elegant design',
        'Premium product presentation',
        'Complete convenience store experience',
        'Highest revenue generator',
        'Perfect for airports, transit hubs, major venues'
      ],
      highlight: 'Supermarket Scale'
    }
  ];

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
          <a href="/" className="flex items-center gap-2 px-6 py-2 bg-slate-900 border border-cyan-500/30 rounded-lg font-bold hover:border-cyan-500 transition-all">
            <ArrowLeft size={18} />
            Back
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-20">
            <p className="text-cyan-400 font-black text-sm mb-4 tracking-widest">THE MACHINES</p>
            <h1 className="text-6xl md:text-7xl font-black leading-tight mb-6">
              Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Perfect Machine</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From compact to supermarket scale. Every TechWorm machine is packed with AI technology, zero moving parts, and maximum capacity.
            </p>
          </div>
        </div>
      </section>

      {/* Machines Grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {machines.map((machine, idx) => (
            <div
              key={machine.id}
              className={`group transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className="relative h-full rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-500/20 group-hover:scale-105">
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${machine.gradient} group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Top glow accent */}
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${machine.color} rounded-full filter blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>

                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div className="text-6xl mb-6">{machine.icon}</div>

                  {/* Title */}
                  <h3 className="text-3xl font-black text-white mb-2">{machine.name}</h3>
                  <p className={`text-sm font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${machine.color}`}>
                    {machine.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                    {machine.description}
                  </p>

                  {/* Specs */}
                  <div className="mb-8 flex-grow">
                    <h4 className="font-bold text-white mb-4 text-sm">SPECIFICATIONS</h4>
                    <div className="space-y-3">
                      {Object.entries(machine.specs).map(([label, value], i) => (
                        <div key={i} className="text-sm">
                          <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">{label}</p>
                          <p className="text-slate-200 font-semibold">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8 border-t border-cyan-500/10 pt-6">
                    <h4 className="font-bold text-white mb-4 text-sm">FEATURES</h4>
                    <ul className="space-y-2">
                      {machine.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                          <Zap className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlight badge */}
                  <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${machine.color} bg-opacity-10 border border-cyan-500/30 rounded-lg text-cyan-300 text-xs font-semibold mb-6 w-full justify-center`}>
                    <TrendingUp className="w-4 h-4" />
                    {machine.highlight}
                  </div>

                  {/* CTA Button */}
                  <a href="mailto:sales@techwormvending.com?subject=Request%20Demo%20-%20${machine.name}" className={`w-full py-3 px-4 bg-gradient-to-r ${machine.color} text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 group-hover:shadow-cyan-500/30 flex items-center justify-center gap-2`}>
                  <MessageCircle className="w-4 h-4" />
                  Request Demo
                </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="relative z-10 border-t border-cyan-500/20 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Compare All <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Three Models</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-cyan-500/20">
                  <th className="text-left py-4 px-6 font-bold text-white">Feature</th>
                  <th className="text-center py-4 px-6 font-bold text-cyan-400">US 360CT Mini</th>
                  <th className="text-center py-4 px-6 font-bold text-purple-400">DC-550D Hybrid</th>
                  <th className="text-center py-4 px-6 font-bold text-emerald-400">US1200CT</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Capacity', values: ['240-300', '400-550', '1200+'] },
                  { feature: 'AI Accuracy', values: ['99.9%', '99.9%', '99.9%'] },
                  { feature: 'Temperature Zones', values: ['1', '2', '2'] },
                  { feature: 'Footprint', values: ['Compact', 'Standard', 'Large'] },
                  { feature: 'Ideal For', values: ['Offices', 'Mixed items', 'High-traffic'] },
                  { feature: 'Revenue Potential', values: ['2X', '3X', '5X'] },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-800 hover:bg-slate-900/30 transition">
                    <td className="py-4 px-6 font-semibold text-white">{row.feature}</td>
                    <td className="py-4 px-6 text-center text-slate-300">{row.values[0]}</td>
                    <td className="py-4 px-6 text-center text-slate-300">{row.values[1]}</td>
                    <td className="py-4 px-6 text-center text-slate-300">{row.values[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="rounded-2xl overflow-hidden border border-cyan-500/30">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
          <div className="relative p-12 md:p-16 text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Every machine comes with AI technology, Bloom Fresh integration, real-time tracking, and WhatsApp customer service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:sales@techwormvending.com?subject=Schedule%20a%20Consultation" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-black text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105 inline-block text-center">
                Schedule a Consultation
              </a>
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
              <p className="text-cyan-400 font-semibold text-sm cursor-pointer hover:text-cyan-300">Connect on WhatsApp</p>
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
