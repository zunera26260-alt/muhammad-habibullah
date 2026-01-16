
import React, { useState } from 'react';
import SEOWrapper from '../../components/SEOWrapper';
import { Percent } from 'lucide-react';

const PercentageCalculator: React.FC = () => {
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const v1 = parseFloat(val1);
    const v2 = parseFloat(val2);
    if (!isNaN(v1) && !isNaN(v2)) {
      setResult((v1 / 100) * v2);
    }
  };

  const seoData = {
    title: 'Percentage Calculator: Quick Math Solutions for Discounts, Tips, and Math Problems',
    introduction: 'Solve any percentage problem instantly. Habix Media provides a streamlined calculator for everyday math, helping you find discounts, calculate tips, and handle professional statistical changes.',
    howToUse: [
      'Enter the percentage value you are looking for (the "X" in "X%").',
      'Enter the base number or total value (the "Y" in "of Y").',
      'Click the "Calculate Result" button.',
      'The precise numeric result will appear instantly below.'
    ],
    benefits: [
      'No Manual Math: Avoid errors in multi-step percentage calculations.',
      'Shopping Assistant: Quickly find exactly how much you save during store sales.',
      'Professional Utility: Ideal for determining taxes, interest rates, and profit margins.',
      'Zero Ads: Focused, clean interface for distraction-free math.'
    ],
    detailedArticle: `Percentage calculations are a fundamental part of daily life, yet they remain one of the most common sources of mental math errors. Whether you're a student working on a math assignment, a business owner analyzing growth, or a shopper trying to find the best deal, accuracy is paramount.

The Habix Media Percentage Calculator is built to handle the "What is X% of Y" problem set. Our tool uses a high-precision floating-point engine to ensure that even complex decimal values are calculated correctly.

Common Applications:
1. Finance & Banking: Calculate interest earned on savings or the amount of tax owed on a purchase.
2. Retail & E-commerce: Determine the final price of an item after a 15%, 30%, or 50% discount.
3. Hospitality: Quickly find the appropriate tip amount (e.g., 18% or 20%) for restaurant service.
4. Statistics: Understand the magnitude of a change relative to a total sample size.

At Habix Media, we believe that simple tools should be robust and fast. Our calculator is optimized for mobile responsiveness, so you can perform calculations on the go—at the store, in a meeting, or in the classroom. Experience stress-free math today.`
  };

  return (
    <SEOWrapper content={seoData}>
      <div className="p-8 md:p-12 text-center">
        <div className="max-w-md mx-auto space-y-8">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Percent size={32} />
          </div>
          <h2 className="text-2xl font-bold">What is X% of Y?</h2>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <input 
                type="number" 
                placeholder="20"
                className="flex-1 p-4 rounded-xl border border-slate-200 text-center text-xl font-bold"
                value={val1}
                onChange={(e) => setVal1(e.target.value)}
              />
              <span className="text-slate-400 font-bold">% of</span>
              <input 
                type="number" 
                placeholder="100"
                className="flex-1 p-4 rounded-xl border border-slate-200 text-center text-xl font-bold"
                value={val2}
                onChange={(e) => setVal2(e.target.value)}
              />
            </div>
            
            <button 
              onClick={calculate}
              className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
            >
              Calculate Result
            </button>

            {result !== null && (
              <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Result</div>
                <div className="text-4xl font-black text-blue-600">{result}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </SEOWrapper>
  );
};

export default PercentageCalculator;
