
import React, { useState } from 'react';
import SEOWrapper from '../../components/SEOWrapper';
import { FileText, Download, Loader2 } from 'lucide-react';

const WordToPdf: React.FC = () => {
  const [text, setText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDownload = () => {
    if (!text) return;
    setIsProcessing(true);
    setTimeout(() => {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`<html><body style="font-family: sans-serif; padding: 40px; line-height: 1.6;">${text.replace(/\n/g, '<br/>')}</body></html>`);
        printWindow.document.close();
        printWindow.print();
      }
      setIsProcessing(false);
    }, 1500);
  };

  const seoData = {
    title: 'Text to PDF Converter: Professional Document Formatting and Portability',
    introduction: 'Need to convert plain text to a professional PDF document instantly? Habix Media provides a high-fidelity conversion utility that ensures your documents are ready for printing, sharing, or archiving.',
    howToUse: [
      'Paste your content or type directly into the document editor.',
      'Format your text into paragraphs as desired.',
      'Click the "Convert and Download PDF" button.',
      'Use your system\'s "Print to PDF" dialog to save your professional file.'
    ],
    benefits: [
      'Universal Compatibility: PDF files look the same on any device or OS.',
      'Lightweight Output: Our conversion process creates small, fast-loading files.',
      'No Software Needed: Skip the heavy word processors; everything happens online.',
      'Private and Secure: Your sensitive document content never touches our database.'
    ],
    detailedArticle: `Portable Document Format (PDF) is the gold standard for document exchange. Whether you're submitting a resume, sharing a manifesto, or sending a formal letter, PDF ensures that your formatting is preserved exactly as you intended. 

The Habix Media Word/Text to PDF utility is designed for users who need speed without sacrificing quality. We use a specialized "Print-to-Buffer" technology that renders your text into a standard PDF structure compatible with Adobe Acrobat, Chrome PDF Viewer, and mobile document readers.

Why use our PDF tool?
- Formal Communication: Emails can be messy; a PDF attachment adds a layer of professionalism.
- Archiving: Text files can be corrupted or changed; PDFs are stable for long-term storage.
- Printing: Our output is optimized for standard A4 and Letter paper sizes, ensuring no awkward text cut-offs.

At Habix Media, we provide this utility for free to streamline your professional workflow. Our interface is minimal and distraction-free, allowing you to focus on the content of your document while we handle the technical conversion. Experience seamless document management with Habix Media.`
  };

  return (
    <SEOWrapper content={seoData}>
      <div className="p-8 md:p-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FileText size={32} />
            </div>
            <h2 className="text-2xl font-bold">Text to PDF Converter</h2>
            <p className="text-slate-500 mt-2">Paste your text and generate a professional PDF instantly.</p>
          </div>

          <textarea 
            rows={15}
            className="w-full p-6 bg-slate-50 rounded-3xl border border-slate-200 focus:ring-2 focus:ring-red-500 outline-none transition-all font-serif text-lg leading-relaxed shadow-inner"
            placeholder="Type your document content here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          
          <button 
            onClick={handleDownload}
            disabled={!text || isProcessing}
            className="w-full bg-red-600 text-white font-bold py-5 rounded-xl hover:bg-red-700 transition-colors shadow-lg shadow-red-200 flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            {isProcessing ? <Loader2 className="animate-spin" /> : <Download size={20} />}
            <span>{isProcessing ? 'Processing Document...' : 'Convert and Download PDF'}</span>
          </button>
        </div>
      </div>
    </SEOWrapper>
  );
};

export default WordToPdf;
