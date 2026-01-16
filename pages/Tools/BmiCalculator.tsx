
import React, { useState } from 'react';
import SEOWrapper from '../../components/SEOWrapper';
import { User } from 'lucide-react';

const BmiCalculator: React.FC = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // cm to m
    if (w > 0 && h > 0) {
      const result = w / (h * h);
      setBmi(parseFloat(result.toFixed(1)));
      if (result < 18.5) setCategory('Underweight');
      else if (result < 25) setCategory('Normal weight');
      else if (result < 30) setCategory('Overweight');
      else setCategory('Obese');
    }
  };

  const seoData = {
    title: 'Body Mass Index (BMI) Calculator: Accurate Health and Fitness Assessment',
    introduction: 'Understanding your body mass index is a key step in managing your overall health. Use the Habix Media BMI Calculator to instantly determine your category and set your fitness goals.',
    howToUse: [
      'Input your current weight in Kilograms (kg).',
      'Input your exact height in Centimeters (cm).',
      'Click "Calculate BMI" to see your score.',
      'Read the classification (Underweight, Normal, Overweight, Obese) to understand your status.'
    ],
    benefits: [
      'Metric Precision: Optimized for the standard metric system used by health professionals.',
      'Instant Classification: Understand exactly where you stand against WHO standards.',
      'Mobile Ready: Check your BMI at the gym or in the clinic from your smartphone.',
      'Private Health Check: Your health data is processed locally and never stored.'
    ],
    detailedArticle: `Body Mass Index (BMI) is a simple index of weight-for-height that is commonly used to classify underweight, overweight, and obesity in adults. It is defined as weight in kilograms divided by the square of height in meters (kg/m²).

While BMI is not a direct measure of body fat, it is a highly useful screening tool for health professionals. Our Habix Media BMI Calculator follows the standards set by the World Health Organization (WHO) to provide you with a reliable estimate.

Understanding the Categories:
- Underweight (BMI < 18.5): May indicate malnutrition or underlying health issues.
- Normal weight (BMI 18.5–24.9): Associated with the lowest risk of chronic diseases.
- Overweight (BMI 25.0–29.9): May increase the risk of heart disease, type 2 diabetes, and certain cancers.
- Obese (BMI ≥ 30.0): Significant health risks associated; consultation with a healthcare provider is recommended.

Important Consideration:
BMI has limitations. It does not distinguish between muscle mass and fat mass. Athletes or individuals with high muscle density may have a high BMI score while remaining perfectly healthy. This tool should be used as one of several metrics for assessing health, alongside waist circumference and metabolic check-ups. At Habix Media, we provide this tool to empower your wellness journey with accurate data.`
  };

  return (
    <SEOWrapper content={seoData}>
      <div className="p-8 md:p-12 text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <User size={32} />
        </div>
        <h2 className="text-2xl font-bold mb-8">BMI Calculator</h2>
        
        <div className="max-w-md mx-auto space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-left space-y-2">
              <label className="text-sm font-bold text-slate-700">Weight (kg)</label>
              <input 
                type="number" 
                placeholder="70"
                className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-500 outline-none"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="text-left space-y-2">
              <label className="text-sm font-bold text-slate-700">Height (cm)</label>
              <input 
                type="number" 
                placeholder="175"
                className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-500 outline-none"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
          </div>
          
          <button 
            onClick={calculateBMI}
            className="w-full bg-green-600 text-white font-bold py-4 rounded-xl hover:bg-green-700 transition-colors shadow-lg shadow-green-200"
          >
            Calculate BMI
          </button>

          {bmi !== null && (
            <div className="mt-8 p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="text-4xl font-black text-slate-900 mb-1">{bmi}</div>
              <div className={`text-sm font-bold uppercase tracking-widest ${
                category === 'Normal weight' ? 'text-green-600' : 'text-orange-500'
              }`}>
                {category}
              </div>
            </div>
          )}
        </div>
      </div>
    </SEOWrapper>
  );
};

export default BmiCalculator;
