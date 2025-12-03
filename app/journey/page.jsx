'use client'

import React, { useState } from 'react';
import { ChevronRight, ArrowLeft, Send } from 'lucide-react';

export default function StartJourneyPage() {
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    products: '',
    footTraffic: '',
    location: '',
    currentSetup: '',
    machinesInterested: '',
    timeline: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/sales@techwormvending.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New TechWorm Inquiry - ${formData.businessName}`,
          _captcha: false
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          businessName: '',
          businessType: '',
          products: '',
          footTraffic: '',
          location: '',
          currentSetup: '',
          machinesInterested: '',
          timeline: '',
          contactName: '',
          contactEmail: '',
          contactPhone: '',
          message: ''
        });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-cyan-500/20 backdrop-blur-sm py-6">
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

      {/* Main Content */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-black text-sm mb-4 tracking-widest">LET'S BEGIN</p>
          <h1 className="text-6xl md:text-7xl font-black leading-tight mb-6">
            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Journey</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Tell us about your business and let's explore how TechWorm can transform your retail vending experience.
          </p>
        </div>

        {submitted && (
          <div className="mb-8 p-6 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/50 rounded-xl">
            <p className="text-emerald-400 font-bold text-lg">✓ Thank you! Your form has been submitted successfully.</p>
            <p className="text-emerald-300 text-sm mt-2">We'll be in touch within 24 hours.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-cyan-500/20 rounded-2xl p-12 backdrop-blur-sm">
          
          {/* Business Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-black text-white mb-8">Business Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-cyan-400 mb-2">Business Name *</label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-lg text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition"
                  placeholder="Your business name"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-cyan-400 mb-2">What Kind of Business? *</label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition"
                >
                  <option value="">Select business type</option>
                  <option value="Office">Office</option>
                  <option value="Retail">Retail</option>
                  <option value="Gym/Fitness">Gym/Fitness</option>
                  <option value="Hospital/Medical">Hospital/Medical</option>
                  <option value="School/University">School/University</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Hotel/Hospitality">Hotel/Hospitality</option>
                  <option value="Transportation/Transit">Transportation/Transit</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-cyan-400 mb-2">What Kind of Products Are You Interested In? *</label>
                <select
                  name="products"
                  value={formData.products}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition"
                >
                  <option value="">Select products</option>
                  <option value="Snacks Only">Snacks Only</option>
                  <option value="Beverages Only">Beverages Only</option>
                  <option value="Snacks & Beverages">Snacks & Beverages</option>
                  <option value="Fresh Food">Fresh Food (Bloom Fresh)</option>
                  <option value="Mix of Everything">Mix of Everything</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-cyan-400 mb-2">Foot Traffic Per Week *</label>
                <select
                  name="footTraffic"
                  value={formData.footTraffic}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition"
                >
                  <option value="">Select traffic volume</option>
                  <option value="Less than 100">Less than 100</option>
                  <option value="100-500">100-500</option>
                  <option value="500-1000">500-1,000</option>
                  <option value="1000-5000">1,000-5,000</option>
                  <option value="5000-10000">5,000-10,000</option>
                  <option value="More than 10000">More than 10,000</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-bold text-cyan-400 mb-2">Where Are You Located? *</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-lg text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition"
                placeholder="City, State or full address"
              />
            </div>
          </div>

          {/* Current Setup & Preferences */}
          <div className="mb-12 border-t border-cyan-500/10 pt-12">
            <h2 className="text-2xl font-black text-white mb-8">Current Setup & Preferences</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-cyan-400 mb-2">What's Your Current Setup? *</label>
                <select
                  name="currentSetup"
                  value={formData.currentSetup}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition"
                >
                  <option value="">Select current setup</option>
                  <option value="No vending solution">No vending solution</option>
                  <option value="Traditional vending machine">Traditional vending machine</option>
                  <option value="Multiple machines">Multiple machines</option>
                  <option value="In-house snack service">In-house snack service</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-cyan-400 mb-2">How Many Machines Are You Interested In? *</label>
                <select
                  name="machinesInterested"
                  value={formData.machinesInterested}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition"
                >
                  <option value="">Select quantity</option>
                  <option value="1 machine">1 machine</option>
                  <option value="2-3 machines">2-3 machines</option>
                  <option value="4-5 machines">4-5 machines</option>
                  <option value="6-10 machines">6-10 machines</option>
                  <option value="More than 10">More than 10</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-bold text-cyan-400 mb-2">Timeline *</label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition"
              >
                <option value="">Select timeline</option>
                <option value="Immediate (within 30 days)">Immediate (within 30 days)</option>
                <option value="1-3 months">1-3 months</option>
                <option value="3-6 months">3-6 months</option>
                <option value="6-12 months">6-12 months</option>
                <option value="Just exploring options">Just exploring options</option>
              </select>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-12 border-t border-cyan-500/10 pt-12">
            <h2 className="text-2xl font-black text-white mb-8">Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-cyan-400 mb-2">Your Name *</label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-lg text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition"
                  placeholder="Full name"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-cyan-400 mb-2">Email *</label>
                <input
                  type="email"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-lg text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition"
                  placeholder="your@email.com"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-cyan-400 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-lg text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>
          </div>

          {/* Additional Message */}
          <div className="mb-8 border-t border-cyan-500/10 pt-12">
            <label className="block text-sm font-bold text-cyan-400 mb-2">Additional Information (Optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-lg text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition resize-none"
              placeholder="Tell us anything else about your needs or questions..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-black text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            {loading ? 'Submitting...' : 'Submit Your Application'}
          </button>

          <p className="text-xs text-slate-500 text-center mt-6">
            By submitting this form, you agree to be contacted by TechWorm Vending about your inquiry.
          </p>
        </form>
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
              <p className="text-cyan-400 font-semibold text-sm">sales@techwormvending.com</p>
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
