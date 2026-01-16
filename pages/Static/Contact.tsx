
import React from 'react';
import { Mail, MessageSquare, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">Get in Touch</h1>
            <p className="text-slate-500 mt-4 text-lg">
              Have questions, feedback, or a tool suggestion? We'd love to hear from you. Our team typically responds within 24 hours.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Email Us</h4>
                <p className="text-slate-600">aliahmad540855@gmail.com</p>
                <p className="text-slate-400 text-sm">Direct support and business inquiries.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                <MessageSquare size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Global Support</h4>
                <p className="text-slate-600">Available 24/7</p>
                <p className="text-slate-400 text-sm">We respond to every single query.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Our Studio</h4>
                <p className="text-slate-600">123 Digital Ave, Suite 404</p>
                <p className="text-slate-400 text-sm">Tech City, TC 90210</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-indigo-500/5">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Full Name</label>
                <input 
                  type="text" 
                  className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email Address</label>
                <input 
                  type="email" 
                  className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  placeholder="aliahmad540855@gmail.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Subject</label>
              <select className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all">
                <option>General Inquiry</option>
                <option>Bug Report</option>
                <option>Tool Suggestion</option>
                <option>Business Partnership</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Message</label>
              <textarea 
                rows={5}
                className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 flex items-center justify-center space-x-2">
              <Send size={18} />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
