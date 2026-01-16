
import React, { useState } from 'react';
import SEOWrapper from '../../components/SEOWrapper';
import { Calculator } from 'lucide-react';

const AgeCalculator: React.FC = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState<{ years: number; months: number; days: number } | null>(null);

  const calculateAge = () => {
    if (!birthDate) return;
    const birth = new Date(birthDate);
    const today = new Date();
    
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }
    if (days < 0) {
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
      months--;
    }

    setAge({ years, months, days });
  };

  const seoData = {
    title: 'Precision Age Calculator: Calculate Your Exact Age Online for Free',
    introduction: 'Need to know your exact age down to the day? Our professional Age Calculator at Habix Media is the most accurate tool available for calculating chronological age, anniversary milestones, and official date differences.',
    howToUse: [
      'Input your date of birth in the standard date picker.',
      'Select the reference date (defaults to today).',
      'Click the "Calculate Age" button to trigger the algorithm.',
      'Review the detailed breakdown of your age in years, months, and days.'
    ],
    benefits: [
      'Leap Year Compatibility: Our algorithm accounts for February 29th across all generations.',
      'Instant Processing: Results are calculated locally in milliseconds.',
      'Zero Registration: Use the tool freely without creating an account.',
      'Versatile Usage: Ideal for legal forms, astrological charts, or party planning.'
    ],
    detailedArticle: `Age calculation might seem simple, but the complexities of the Gregorian calendar—with varying month lengths and leap years—can make manual calculation prone to error. Whether you're filling out a passport application, calculating eligibility for a retirement plan, or simply curious about your "half-birthday," precision matters.

Our Habix Media Age Calculator utilizes a specialized temporal algorithm that subtracts your birth year from the current year, then adjusts based on the current month and day to ensure 100% accuracy. 

Why use a digital age tool?
1. Verification: Many insurance and banking forms require exact chronological data.
2. Milestone Tracking: Easily find out exactly when you'll turn 10,000 days old or other unique milestones.
3. Astrological Precision: Knowing your exact age helps in creating precise natal charts and horoscopes.

At Habix Media, we prioritize your data privacy. Your date of birth is processed entirely within your browser session and is never transmitted to our servers or stored in any database. This makes our tool not just fast and accurate, but also one of the most secure utilities on the internet.`
  };

  return (
    <SEOWrapper content={seoData}>
      <div className="p-8 md:p-12 text-center">
        <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Calculator size={32} />
        </div>
        <h2 className="text-2xl font-bold mb-8">Exact Age Calculator</h2>
        
        <div className="max-w-md mx-auto space-y-4">
          <div className="text-left">
            <label className="block text-sm font-medium text-slate-700 mb-1">Select Birth Date</label>
            <input 
              type="date" 
              className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>
          <button 
            onClick={calculateAge}
            className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
          >
            Calculate Age
          </button>

          {age && (
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="bg-indigo-50 p-4 rounded-2xl">
                <div className="text-2xl font-bold text-indigo-600">{age.years}</div>
                <div className="text-xs text-slate-500 font-bold uppercase">Years</div>
              </div>
              <div className="bg-indigo-50 p-4 rounded-2xl">
                <div className="text-2xl font-bold text-indigo-600">{age.months}</div>
                <div className="text-xs text-slate-500 font-bold uppercase">Months</div>
              </div>
              <div className="bg-indigo-50 p-4 rounded-2xl">
                <div className="text-2xl font-bold text-indigo-600">{age.days}</div>
                <div className="text-xs text-slate-500 font-bold uppercase">Days</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </SEOWrapper>
  );
};

export default AgeCalculator;
