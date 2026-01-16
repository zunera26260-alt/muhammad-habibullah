
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight } from 'lucide-react';
import { TOOLS } from '../constants';

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredTools = TOOLS.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || tool.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'all', name: 'All Tools' },
    { id: 'productivity', name: 'Productivity' },
    { id: 'image', name: 'Image & AI' },
    { id: 'text', name: 'Text Utils' },
    { id: 'math', name: 'Math & Calculators' },
    { id: 'misc', name: 'Miscellaneous' },
  ];

  return (
    <div className="space-y-12 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Professional Tools for <span className="text-indigo-300">Every Task.</span>
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto">
            Habix Media provides 100% free, high-performance web utilities. From advanced AI image processing to simple productivity counters.
          </p>
          
          <div className="relative max-w-xl mx-auto pt-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search tools (e.g., 'PDF', 'Age', 'Image')..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Main Tools Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                activeCategory === cat.id 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
                : 'bg-white text-slate-600 hover:bg-indigo-50 border border-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTools.length > 0 ? (
            filteredTools.map((tool) => (
              <Link
                key={tool.id}
                to={tool.path}
                className="group relative bg-white p-6 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {tool.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-sm text-slate-500 line-clamp-2">
                  {tool.description}
                </p>
                <div className="mt-4 flex items-center text-xs font-bold text-indigo-600 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  Open Tool <ChevronRight size={14} />
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-20 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 text-slate-400 mb-4">
                <Search size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">No tools found</h3>
              <p className="text-slate-500">Try searching for something else or browse categories.</p>
              <button 
                onClick={() => { setSearchTerm(''); setActiveCategory('all'); }}
                className="text-indigo-600 font-medium hover:underline"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* SEO Article Area */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center">Why Use Habix Media?</h2>
          <div className="grid md:grid-cols-2 gap-8 text-slate-600 leading-relaxed">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-indigo-600">Free Forever</h3>
              <p>We believe professional utilities should be accessible to everyone. All our tools are free, no registration required, and no hidden fees.</p>
              <h3 className="text-xl font-semibold text-indigo-600">Privacy First</h3>
              <p>Your data stays with you. Most of our tools run entirely in your browser. For AI tools, we never store your personal images permanently.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-indigo-600">Lightning Fast</h3>
              <p>Optimized for speed. Whether you're converting a document or calculating your BMI, results are delivered in milliseconds.</p>
              <h3 className="text-xl font-semibold text-indigo-600">Mobile Friendly</h3>
              <p>Habix Media is designed to work perfectly on any device. Carry a full toolbox in your pocket wherever you go.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
