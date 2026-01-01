
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
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="bg-slate-50 py-8 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-6xl font-bold text-slate-900 mb-2 md:mb-6 font-serif">Get in Touch</h1>
          <p className="text-xs md:text-lg text-gray-600 max-w-2xl mx-auto">
            Our management team is available to answer any questions about our spaces and leasing terms.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-24">
        <div className="grid lg:grid-cols-3 gap-8 md:gap-16">
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-6 md:space-y-12">
            <div>
              <h2 className="text-lg md:text-3xl font-bold text-slate-900 mb-4 md:mb-8 font-serif">Information</h2>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-8">
                <div className="flex gap-3 md:gap-6 bg-white p-3 md:p-0 rounded-xl md:rounded-none shadow-sm md:shadow-none">
                  <div className="bg-amber-500 p-2 md:p-4 rounded-lg md:rounded-2xl text-white shrink-0 h-fit">
                    <Phone size={16} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs md:text-lg">Phone</h4>
                    <p className="text-gray-500 text-[10px] md:text-base font-medium">{CONTACT_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex gap-3 md:gap-6 bg-white p-3 md:p-0 rounded-xl md:rounded-none shadow-sm md:shadow-none">
                  <div className="bg-slate-900 p-2 md:p-4 rounded-lg md:rounded-2xl text-white shrink-0 h-fit">
                    <Mail size={16} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs md:text-lg">Email</h4>
                    <p className="text-gray-500 text-[10px] md:text-base font-medium break-all">{CONTACT_INFO.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 p-4 md:p-8 rounded-2xl md:rounded-[2rem] border border-emerald-100">
              <div className="flex items-center gap-2 mb-2 md:mb-4">
                <div className="bg-emerald-500 p-1.5 rounded-lg text-white">
                  <MessageCircle size={16} />
                </div>
                <h3 className="font-bold text-emerald-900 text-xs md:text-base">WhatsApp Support</h3>
              </div>
              <p className="text-emerald-700 mb-4 text-[10px] md:text-sm">
                Get an instant response from our leasing agent.
              </p>
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                className="block w-full text-center bg-emerald-500 text-white py-2.5 rounded-xl font-bold text-xs md:text-base hover:bg-emerald-600"
              >
                Message Now
              </a>
            </div>
          </div>

          {/* Form - Tighter for mobile */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl md:rounded-[3rem] shadow-xl md:shadow-2xl p-6 md:p-16 border border-gray-100">
              <h2 className="text-lg md:text-3xl font-bold text-slate-900 mb-6 md:mb-10 font-serif">Inquiry Form</h2>
              
              {submitted ? (
                <div className="bg-emerald-50 p-8 rounded-2xl text-center">
                  <h3 className="text-lg font-bold text-emerald-900">Message Sent!</h3>
                  <p className="text-xs text-emerald-700">We will reach out to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-gray-700 uppercase tracking-wider">Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full px-4 py-3 md:py-4 rounded-xl md:rounded-2xl bg-slate-50 border border-slate-100 text-xs md:text-base"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-gray-700 uppercase tracking-wider">Email</label>
                      <input 
                        required
                        type="email" 
                        className="w-full px-4 py-3 md:py-4 rounded-xl md:rounded-2xl bg-slate-50 border border-slate-100 text-xs md:text-base"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-700 uppercase tracking-wider">Message</label>
                    <textarea 
                      required
                      rows={3}
                      className="w-full px-4 py-3 md:py-4 rounded-xl md:rounded-2xl bg-slate-50 border border-slate-100 text-xs md:text-base resize-none"
                      placeholder="Your requirements..."
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-amber-500 text-white py-3 md:py-5 rounded-xl md:rounded-2xl font-bold text-sm md:text-lg hover:bg-amber-600 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Send Inquiry</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Map - Compact height on mobile */}
      <section className="h-[300px] md:h-[500px] relative mt-4 md:mt-12 bg-slate-100">
        <div className="absolute inset-0 grayscale contrast-125">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.088151213093!2d34.7709337!3d-0.0886475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa48d3c010d49%3A0x6a10067b8a74e2d3!2sKondele%2C%20Kisumu!5e0!3m2!1sen!2ske!4v1715000000000!5m2!1sen!2ske" 
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" 
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
