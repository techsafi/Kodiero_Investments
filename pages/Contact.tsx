
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    spaceType: 'Shop'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send to API
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-24 min-h-screen">
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-serif">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our management team is available to answer any questions about our spaces, leasing terms, and amenities.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 font-serif">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="bg-amber-500 p-4 rounded-2xl text-white shadow-lg shadow-amber-500/20 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                    <p className="text-gray-500 font-medium">{CONTACT_INFO.phone}</p>
                    <p className="text-gray-400 text-sm">Mon - Fri, 8am - 6pm</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="bg-slate-900 p-4 rounded-2xl text-white shadow-lg shadow-slate-900/20 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <p className="text-gray-500 font-medium">{CONTACT_INFO.email}</p>
                    <p className="text-gray-400 text-sm">Online support 24/7</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="bg-amber-500 p-4 rounded-2xl text-white shadow-lg shadow-amber-500/20 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Address</h4>
                    <p className="text-gray-500 font-medium">{CONTACT_INFO.address}</p>
                    <p className="text-gray-400 text-sm">Kondele Hub, Kisumu</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 p-8 rounded-[2rem] border border-emerald-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-500 p-2 rounded-lg text-white">
                  <MessageCircle size={20} />
                </div>
                <h3 className="font-bold text-emerald-900">WhatsApp Chat</h3>
              </div>
              <p className="text-emerald-700 mb-6 text-sm">
                Get an instant response by chatting with our leasing agent directly on WhatsApp.
              </p>
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                className="block w-full text-center bg-emerald-500 text-white py-3 rounded-xl font-bold hover:bg-emerald-600 transition-colors shadow-xl shadow-emerald-500/10"
              >
                Message Us Now
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[3rem] shadow-2xl p-10 md:p-16 border border-gray-100 relative overflow-hidden">
              <h2 className="text-3xl font-bold text-slate-900 mb-10 font-serif">Inquiry Form</h2>
              
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-200 p-10 rounded-3xl text-center"
                >
                  <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                    <Send size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-emerald-700">Thank you for your interest. A member of our management team will reach out to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Your Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Email Address</label>
                      <input 
                        required
                        type="email" 
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                        placeholder="+254 7XX XXX XXX"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Preferred Space</label>
                      <select 
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all appearance-none"
                        value={formData.spaceType}
                        onChange={e => setFormData({...formData, spaceType: e.target.value})}
                      >
                        <option value="Shop">Retail Shop</option>
                        <option value="Office">Executive Office</option>
                        <option value="Storage">Storage Unit</option>
                        <option value="Other">General Inquiry</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Message</label>
                    <textarea 
                      required
                      rows={5}
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all resize-none"
                      placeholder="Tell us about your business needs..."
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-amber-500 text-white py-5 rounded-2xl font-bold text-lg hover:bg-amber-600 transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-3 group"
                  >
                    <span>Send Inquiry</span>
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <section className="h-[500px] relative mt-12 bg-slate-100">
        <div className="absolute inset-0 grayscale contrast-125">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.088151213093!2d34.7709337!3d-0.0886475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa48d3c010d49%3A0x6a10067b8a74e2d3!2sKondele%2C%20Kisumu!5e0!3m2!1sen!2ske!4v1715000000000!5m2!1sen!2ske" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="absolute top-10 left-10 z-10 hidden md:block">
          <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-xs border border-gray-100">
            <h4 className="font-bold text-slate-900 mb-2">Visit Us</h4>
            <p className="text-gray-500 text-sm mb-4">Kodiero Business Center, Kondele-Kibos Rd, Kisumu.</p>
            <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-widest">
              <Clock size={16} /> Open Now
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
