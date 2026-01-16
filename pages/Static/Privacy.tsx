
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 prose prose-slate">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-slate-500 italic mb-8">Last Updated: May 20, 2024</p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold">Our Privacy Promise</h2>
        <p>At Habix Media, we value your privacy above all else. Most of our tools are designed to work entirely within your browser, meaning your data never touches our servers.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold">Data Collection</h2>
        <p>We do not collect personal information like names, addresses, or phone numbers unless you voluntarily provide them through our contact form. We may collect anonymous usage data to improve our services.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold">AI Tool Processing</h2>
        <p>When you use our AI Image Enhancer or Background Remover, the images you upload are sent to Google's Gemini API for processing. These images are processed in real-time and are not stored by Habix Media. Google's privacy policies also apply to these specific interactions.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold">Cookies</h2>
        <p>We use essential cookies to ensure the website functions correctly. We may also use analytics cookies (like Google Analytics) to understand how visitors use our site.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold">Changes to This Policy</h2>
        <p>We reserve the right to update this policy as needed. We will notify users of any significant changes by posting the new policy on this page.</p>
      </section>
    </div>
  );
};

export default Privacy;
