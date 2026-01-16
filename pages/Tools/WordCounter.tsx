
import React, { useState } from 'react';
import SEOWrapper from '../../components/SEOWrapper';
import { Hash } from 'lucide-react';

const WordCounter: React.FC = () => {
  const [text, setText] = useState('');

  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;
  const sentenceCount = text.split(/[.!?]+/).filter(Boolean).length;
  const paragraphCount = text.split(/\n+/).filter(Boolean).length;

  const seoData = {
    title: 'Word and Character Counter: The Ultimate Tool for SEO Writers and Academics',
    introduction: 'Optimize your content with the Habix Media Word Counter. Track real-time statistics of your writing to ensure compliance with character limits, SEO best practices, and academic standards.',
    howToUse: [
      'Paste your content into the large text input area.',
      'Review the live statistics appearing in the grid above.',
      'Adjust your writing to meet specific word or character goals.',
      'Clear the editor with one click to start a new project.'
    ],
    benefits: [
      'SEO Precision: Manage meta descriptions (160 chars) and titles (60 chars) perfectly.',
      'Academic Compliance: Meet essay word count requirements with surgical accuracy.',
      'Reading Time Estimation: Understand the scope of your content at a glance.',
      'Privacy-Locked: Your text is never stored or uploaded; it stays in your browser.'
    ],
    detailedArticle: `Whether you're a professional blogger, a PhD student, or a social media marketer, managing text length is a daily requirement. Each platform has its own rules: Twitter has its 280-character limit, LinkedIn has its summary constraints, and Google has its snippet thresholds. 

The Habix Media Word Counter is more than just a simple count tool. It analyzes the structure of your document, identifying distinct paragraphs and sentences to provide a complete "health report" of your writing.

Key Use Cases:
- Search Engine Optimization (SEO): Writing meta tags that get cut off in search results is a waste of effort. Use our character counter to stay within the 155-160 character sweet spot.
- Copywriting: Great ad copy is often about brevity. Challenge yourself to convey a message in exactly 50 words.
- Freelance Billing: Many writers get paid per word. Our tool provides a neutral, accurate count for invoicing.

Technical Accuracy:
Our tool uses robust regex (regular expressions) to distinguish between word boundaries, accounting for hyphens, apostrophes, and various white-space characters. This ensures that your count matches what software like Microsoft Word or Google Docs would report. At Habix Media, we believe that simple tools should be perfect, which is why our Word Counter is optimized for speed and reliability across all devices.`
  };

  return (
    <SEOWrapper content={seoData}>
      <div className="p-8 md:p-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-slate-100 text-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Hash size={32} />
            </div>
            <h2 className="text-2xl font-bold">Word & Character Counter</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center">
              <div className="text-2xl font-bold text-indigo-600">{wordCount}</div>
              <div className="text-xs text-slate-400 font-bold uppercase">Words</div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center">
              <div className="text-2xl font-bold text-indigo-600">{charCount}</div>
              <div className="text-xs text-slate-400 font-bold uppercase">Characters</div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center">
              <div className="text-2xl font-bold text-indigo-600">{sentenceCount}</div>
              <div className="text-xs text-slate-400 font-bold uppercase">Sentences</div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center">
              <div className="text-2xl font-bold text-indigo-600">{paragraphCount}</div>
              <div className="text-xs text-slate-400 font-bold uppercase">Paragraphs</div>
            </div>
          </div>

          <textarea 
            rows={12}
            className="w-full p-6 bg-slate-50 rounded-3xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-mono text-sm leading-relaxed"
            placeholder="Type or paste your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          
          <button 
            onClick={() => setText('')}
            className="w-full sm:w-auto px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors"
          >
            Clear Text
          </button>
        </div>
      </div>
    </SEOWrapper>
  );
};

export default WordCounter;
