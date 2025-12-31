
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, TrendingUp, Users } from 'lucide-react';
import Hero from '../components/Hero';
import { AMENITIES, SPACES, getIcon } from '../constants';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="pb-20">
      <Hero />

      {/* Highlights Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-serif"
            >
              The Best Choice for Your Growing Business
            </motion.h2>
            <p className="text-gray-600 text-lg">
              Kodiero Investments provides the perfect blend of location, luxury, and logistics for entrepreneurs in the Lakeside City.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <MapPin className="text-amber-500" size={32} />, 
                title: "Prime Location", 
                desc: "Situated in Kondele, the beating heart of Kisumu's trade, ensuring maximum visibility and accessibility." 
              },
              { 
                icon: <TrendingUp className="text-amber-500" size={32} />, 
                title: "Affordable Rates", 
                desc: "High-value commercial spaces with flexible lease terms designed to help startups and established firms thrive." 
              },
              { 
                icon: <Users className="text-amber-500" size={32} />, 
                title: "Professional Community", 
                desc: "Join a network of successful professionals and retailers within a managed, secure corporate environment." 
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
              >
                <div className="mb-6 inline-block p-3 bg-white rounded-2xl shadow-sm group-hover:bg-amber-500 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 block">World-Class Features</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 font-serif">Designed for Seamless Operations</h2>
              <p className="text-gray-400 text-lg mb-10">
                We've invested in top-tier infrastructure so you can focus on what matters most—running your business efficiently.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {AMENITIES.map((amenity) => (
                  <div key={amenity.id} className="flex gap-4">
                    <div className="text-amber-500 shrink-0">
                      {getIcon(amenity.icon, "w-6 h-6")}
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{amenity.title}</h4>
                      <p className="text-xs text-gray-500">{amenity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Office" 
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-500 rounded-3xl -z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-white/20 rounded-3xl -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Spaces */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">Featured Business Units</h2>
              <p className="text-gray-600 text-lg">
                Explore our diverse range of spaces. From boutique shops to expansive executive offices.
              </p>
            </div>
            <Link to="/spaces" className="text-amber-600 font-bold hover:text-amber-700 flex items-center gap-2 group">
              View All Spaces <TrendingUp size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SPACES.map((space, idx) => (
              <motion.div
                key={space.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={space.image} alt={space.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-amber-600">
                    {space.type}
                  </div>
                  {space.status === 'Available' && (
                    <div className="absolute bottom-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {space.status}
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2">{space.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <CheckCircle2 size={16} className="text-amber-500 mr-2" />
                    {space.size}
                  </div>
                  <div className="space-y-2 mb-6">
                    {space.features.slice(0, 2).map((f, i) => (
                      <div key={i} className="text-xs text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-2"></span>
                        {f}
                      </div>
                    ))}
                  </div>
                  <Link 
                    to="/contact" 
                    className="block text-center py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-amber-500 transition-colors"
                  >
                    Inquire Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto bg-amber-500 rounded-[3rem] py-20 px-8 relative overflow-hidden text-center">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-serif leading-tight">Ready to elevate your business presence?</h2>
            <p className="text-amber-100 text-xl mb-12">
              Book a site visit today and experience why Kodiero is the preferred hub for Kisumu's rising businesses.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-white text-amber-600 px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                Book a Viewing
              </Link>
              <Link 
                to="/about" 
                className="bg-amber-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-amber-700 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-amber-400/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-600/30 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
