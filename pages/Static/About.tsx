
import React from 'react';
import { Rocket, Shield, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-5xl font-extrabold text-slate-900">About Habix Media</h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
          Simplifying digital complexity with free, powerful, and privacy-focused tools.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="p-8 bg-white rounded-3xl border border-slate-100 text-center space-y-4">
          <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto">
            <Rocket size={28} />
          </div>
          <h3 className="text-xl font-bold">Our Mission</h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            To provide the web's most comprehensive and accessible multi-tool platform, empowering creators and professionals daily.
          </p>
        </div>
        <div className="p-8 bg-white rounded-3xl border border-slate-100 text-center space-y-4">
          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto">
            <Shield size={28} />
          </div>
          <h3 className="text-xl font-bold">Privacy First</h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            We believe your data is your property. That's why we build tools that work locally whenever possible.
          </p>
        </div>
        <div className="p-8 bg-white rounded-3xl border border-slate-100 text-center space-y-4">
          <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mx-auto">
            <Globe size={28} />
          </div>
          <h3 className="text-xl font-bold">Global Access</h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            Habix Media is used by millions across 150+ countries. Excellence has no borders.
          </p>
        </div>
      </div>

      <div className="bg-slate-900 rounded-[3rem] p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Built for the Modern Web</h2>
        <p className="text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed text-lg">
          Habix Media started as a small side project to solve daily digital annoyances. Today, it has evolved into a full-scale professional utility hub. Whether you're an engineer, a content creator, or a student, our goal remains the same: to give you the tools you need to succeed, without the fluff.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-2xl font-bold transition-all">
          Explore All Tools
        </button>
      </div>
    </div>
  );
};

export default About;
