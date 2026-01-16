
import React from 'react';
import { FileWarning } from 'lucide-react';

const Disclaimer: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <FileWarning size={32} />
        </div>
        <h1 className="text-4xl font-bold text-slate-900">General Disclaimer</h1>
      </div>
      
      <div className="prose prose-slate max-w-none space-y-8 bg-white p-8 md:p-12 rounded-3xl border border-slate-200">
        <section>
          <h2 className="text-2xl font-bold">No Warranties</h2>
          <p>The information and tools provided by Habix Media are for educational and convenience purposes only. Habix Media makes no representations or warranties, express or implied, as to the accuracy, completeness, or suitability for any purpose of the information or tools contained on this website.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Health and Legal Advice</h2>
          <p>Our health tools (like the BMI Calculator) are not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Similarly, our productivity tools are not for legal or official financial certification.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">External Links</h2>
          <p>Habix Media may contain links to external websites that are not provided or maintained by or in any way affiliated with Habix Media. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Limitation of Liability</h2>
          <p>In no event shall Habix Media be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service.</p>
        </section>
      </div>
    </div>
  );
};

export default Disclaimer;
