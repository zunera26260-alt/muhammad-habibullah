
import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is Habix Media free to use?",
      a: "Yes, 100%. All our tools, including AI-powered image enhancers and document converters, are free for everyone. We do not require account registration."
    },
    {
      q: "How does the AI Image Enhancer work?",
      a: "We use the Google Gemini API to process your images. The AI analyzes the pixels, predicts missing details, and restores clarity, lighting, and sharpness using advanced neural networks."
    },
    {
      q: "Is my data secure?",
      a: "Absolutely. Most of our tools run locally in your web browser, meaning your data never leaves your computer. For tools that require server processing (like AI), your data is processed and then discarded."
    },
    {
      q: "Can I use these tools on my phone?",
      a: "Yes! Habix Media is fully responsive and optimized for mobile devices. You can use all our tools on any modern smartphone or tablet browser."
    },
    {
      q: "Do I need to install any software?",
      a: "No installation is required. Everything works directly in your web browser (Chrome, Safari, Firefox, Edge, etc.)."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <HelpCircle size={32} />
        </div>
        <h1 className="text-4xl font-bold text-slate-900">Frequently Asked Questions</h1>
        <p className="text-slate-500 mt-4">Everything you need to know about Habix Media.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden bg-white transition-all">
            <button 
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-50"
            >
              <span className="font-bold text-slate-900">{faq.q}</span>
              {openIndex === idx ? <ChevronUp size={20} className="text-indigo-600" /> : <ChevronDown size={20} className="text-slate-400" />}
            </button>
            {openIndex === idx && (
              <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
