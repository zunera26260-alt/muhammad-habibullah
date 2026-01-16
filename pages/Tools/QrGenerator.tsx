
import React, { useState, useRef } from 'react';
import SEOWrapper from '../../components/SEOWrapper';
import { QrCode, Download, Link as LinkIcon } from 'lucide-react';

const QrGenerator: React.FC = () => {
  const [value, setValue] = useState('https://habixmedia.com');

  const seoData = {
    title: 'Free QR Code Generator: Create Custom, Print-Ready QR Codes Instantly',
    introduction: 'Connect your offline world to your online presence. Habix Media\'s QR Code Generator is the fastest way to create permanent, high-resolution QR codes for websites, menus, vCards, and more.',
    howToUse: [
      'Type or paste your URL, phone number, or text into the input field.',
      'The QR code regenerates instantly in the preview pane.',
      'Check the code with your smartphone camera to verify it works.',
      'Click "Open Image to Download" to save the PNG file for your prints.'
    ],
    benefits: [
      'Permanent Access: Our codes are "static," meaning they never expire.',
      'No Hidden Fees: Create unlimited codes for commercial or personal use.',
      'High Contrast Design: Optimized for all scanners, including low-light environments.',
      'Versatile Format: Perfect for business cards, posters, stickers, and restaurant menus.'
    ],
    detailedArticle: `QR (Quick Response) codes have become the standard for bridge technology. In a world moving toward contactless interaction, having a reliable generator is essential for any business. Habix Media provides a robust, no-nonsense utility that adheres to the ISO/IEC 18004 standard for QR code generation.

Our tool is optimized for high-density information. Whether you're linking to a complex URL with tracking parameters or providing a full digital menu for your café, our generator ensures that the "pixels" (modules) are arranged for maximum scan-ability.

Strategic Uses for QR Codes:
- Digital Menus: Reduce printing costs and maintain hygiene by linking diners to a PDF or web menu.
- Contact Sharing: Create a QR code that automatically adds your contact details to someone's phone.
- Wi-Fi Access: Share your network details securely without typing long passwords.
- Event Marketing: Place a QR code on a flyer to direct potential attendees to a registration page.

Why use Habix Media?
Unlike many "free" generators that inject ads or require subscriptions after a certain number of scans, our codes are yours forever. We don't use redirect links, which means your customers go straight to your destination, fostering trust and improving user experience. Experience the simplicity of professional tools at Habix Media.`
  };

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(value)}`;

  return (
    <SEOWrapper content={seoData}>
      <div className="p-8 md:p-12 text-center">
        <div className="max-w-xl mx-auto space-y-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-slate-100 text-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <QrCode size={32} />
            </div>
            <h2 className="text-2xl font-bold">QR Code Generator</h2>
          </div>

          <div className="space-y-4">
            <div className="text-left space-y-2">
              <label className="text-sm font-bold text-slate-700 flex items-center">
                <LinkIcon size={14} className="mr-2" /> URL or Text content
              </label>
              <input 
                type="text" 
                className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-500 outline-none transition-all"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter URL (e.g., https://example.com)"
              />
            </div>

            <div className="bg-slate-50 p-12 rounded-3xl border border-slate-100 flex items-center justify-center">
              <div className="bg-white p-4 rounded-2xl shadow-lg border border-slate-100">
                <img src={qrUrl} alt="QR Code" className="w-48 h-48" />
              </div>
            </div>

            <button 
              onClick={() => window.open(qrUrl, '_blank')}
              className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-lg flex items-center justify-center space-x-2"
            >
              <Download size={20} />
              <span>Open Image to Download</span>
            </button>
          </div>
        </div>
      </div>
    </SEOWrapper>
  );
};

export default QrGenerator;
