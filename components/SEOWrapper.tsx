
import React from 'react';
import { SEOContent } from '../types';

interface SEOWrapperProps {
  children: React.ReactNode;
  content: SEOContent;
}

const SEOWrapper: React.FC<SEOWrapperProps> = ({ children, content }) => {
  return (
    <div className="pb-20">
      <div className="max-w-5xl mx-auto px-4 pt-10">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden mb-12">
          {children}
        </div>

        <article className="max-w-none bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6 border-b pb-4 border-indigo-100">{content.title}</h1>
          
          <div className="prose prose-indigo max-w-none">
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium italic">
              {content.introduction}
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <span className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-sm">1</span>
                  Step-by-Step Guide
                </h2>
                <ul className="space-y-4">
                  {content.howToUse.map((step, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-slate-700">
                      <span className="flex-shrink-0 w-2 h-2 bg-indigo-500 rounded-full mt-2.5" />
                      <span className="text-sm md:text-base">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <span className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-sm">2</span>
                  Professional Benefits
                </h2>
                <ul className="space-y-4">
                  {content.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-slate-700">
                      <span className="flex-shrink-0 w-5 h-5 bg-indigo-200 text-indigo-700 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
                      <span className="text-sm md:text-base font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {content.detailedArticle && (
              <div className="mt-12 space-y-6">
                <h2 className="text-3xl font-bold text-slate-900">Comprehensive Deep Dive</h2>
                <div className="text-slate-600 leading-loose space-y-4 whitespace-pre-wrap text-base md:text-lg">
                  {content.detailedArticle}
                </div>
              </div>
            )}
            
            <div className="mt-16 pt-8 border-t border-slate-100 bg-slate-50 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Platform Assurance</h3>
              <p className="text-sm text-slate-500">
                Habix Media is committed to providing the most reliable multi-tool suite on the web. Our algorithms are regularly audited for precision. Data processed through this tool is handled with strict adherence to our privacy-first philosophy, ensuring your information remains secure and ephemeral.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default SEOWrapper;
