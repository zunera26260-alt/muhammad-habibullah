
import React, { useState } from 'react';
import SEOWrapper from '../../components/SEOWrapper';
import { Type, Copy, Check } from 'lucide-react';

const CaseConverter: React.FC = () => {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  const toUpper = () => setText(text.toUpperCase());
  const toLower = () => setText(text.toLowerCase());
  const toTitle = () => {
    const val = text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    setText(val);
  };
  const toSentence = () => {
    const val = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, c => c.toUpperCase());
    setText(val);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const seoData = {
    title: 'Text Case Converter: Uppercase, Lowercase, and Title Case',
    introduction: 'Accidentally left Caps Lock on? Or need to format a long title for an article? Our Case Converter handles text transformation in one click. Switch between sentence case, title case, uppercase, and lowercase without manual editing.',
    howToUse: [
      'Paste your text into the editor.',
      'Click the transformation button of your choice.',
      'The text updates instantly.',
      'Copy the formatted text to your clipboard.'
    ],
    benefits: [
      'Multiple conversion types.',
      'Instant real-time update.',
      'Handles large paragraphs.',
      'No registration required.'
    ]
  };

  return (
    <SEOWrapper content={seoData}>
      <div className="p-8 md:p-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-slate-100 text-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Type size={32} />
            </div>
            <h2 className="text-2xl font-bold">Text Case Converter</h2>
          </div>

          <textarea 
            rows={10}
            className="w-full p-6 bg-slate-50 rounded-3xl border border-slate-200 focus:ring-2 focus:ring-slate-500 outline-none transition-all font-mono"
            placeholder="Paste your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>

          <div className="flex flex-wrap gap-4">
            <button onClick={toUpper} className="flex-1 py-3 px-4 bg-slate-100 hover:bg-slate-200 rounded-xl font-bold text-slate-700 transition-colors">UPPERCASE</button>
            <button onClick={toLower} className="flex-1 py-3 px-4 bg-slate-100 hover:bg-slate-200 rounded-xl font-bold text-slate-700 transition-colors">lowercase</button>
            <button onClick={toTitle} className="flex-1 py-3 px-4 bg-slate-100 hover:bg-slate-200 rounded-xl font-bold text-slate-700 transition-colors">Title Case</button>
            <button onClick={toSentence} className="flex-1 py-3 px-4 bg-slate-100 hover:bg-slate-200 rounded-xl font-bold text-slate-700 transition-colors">Sentence case</button>
          </div>

          <button 
            onClick={copyToClipboard}
            className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors flex items-center justify-center space-x-2"
          >
            {copied ? <Check size={20} className="text-green-400" /> : <Copy size={20} />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy Formatted Text'}</span>
          </button>
        </div>
      </div>
    </SEOWrapper>
  );
};

export default CaseConverter;
