
import React from 'react';
import { Cookie } from 'lucide-react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Cookie size={32} />
        </div>
        <h1 className="text-4xl font-bold text-slate-900">Cookie Policy</h1>
      </div>
      
      <div className="prose prose-slate max-w-none space-y-8 bg-white p-8 md:p-12 rounded-3xl border border-slate-200">
        <section>
          <h2 className="text-2xl font-bold">What are Cookies?</h2>
          <p>Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">How We Use Cookies</h2>
          <p>Habix Media uses cookies for the following purposes:</p>
          <ul>
            <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly.</li>
            <li><strong>Performance Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.</li>
            <li><strong>Functionality Cookies:</strong> These are used to recognize you when you return to our website and enable us to personalize our content for you.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Managing Cookies</h2>
          <p>Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.aboutcookies.org" className="text-indigo-600 underline">aboutcookies.org</a>.</p>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicy;
