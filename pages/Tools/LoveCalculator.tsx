
import React, { useState } from 'react';
import SEOWrapper from '../../components/SEOWrapper';
import { Heart } from 'lucide-react';

const LoveCalculator: React.FC = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [score, setScore] = useState<number | null>(null);

  const calculateLove = () => {
    if (!name1 || !name2) return;
    const combined = (name1.toLowerCase() + name2.toLowerCase()).split('').sort().join('');
    let sum = 0;
    for (let i = 0; i < combined.length; i++) { sum += combined.charCodeAt(i); }
    const result = (sum % 101);
    setScore(result);
  };

  const seoData = {
    title: 'Love Compatibility Calculator: Discover Your Match Percentage with Names',
    introduction: 'Are you and your partner a perfect match? Use Habix Media\'s Love Calculator to find out! Using a fun and unique name-based algorithm, we provide a compatibility score in seconds.',
    howToUse: [
      'Enter your full name in the first text box.',
      'Enter your crush or partner\'s name in the second text box.',
      'Click the "Calculate Love" button to reveal your score.',
      'Use the results to start a fun conversation or share with friends.'
    ],
    benefits: [
      'Instant Amusement: Get a score in less than a second.',
      'Zero Data Storage: We don\'t save names or results; your privacy is absolute.',
      'Socially Optimized: Results are designed to be shared on WhatsApp, Instagram, and more.',
      'Completely Free: No hidden fees or "premium results."'
    ],
    detailedArticle: `Love is a complex mystery, but that doesn't mean we can't have a little fun with it! The Habix Media Love Calculator is a lighthearted utility designed for entertainment and social engagement. 

Our tool works using a "character-based weight algorithm." Each letter in your names corresponds to a specific value. When combined, these values are processed through a modulo operation to determine a percentage from 0% to 100%. While this isn't scientific proof of a soulmate connection, it's a timeless way to celebrate a relationship or a crush.

Why people love name calculators:
1. Ice Breakers: It's the perfect way to break the ice on a first date or in a group of friends.
2. Nostalgia: Name-based matchmaking has been a favorite pastime for decades, from notebook margins to digital apps.
3. Social Sharing: Everyone loves to share their "Perfect Match" status on social media.

Please remember: This tool is strictly for entertainment purposes. True love is built on communication, trust, and shared values—not just a name matching algorithm! At Habix Media, we provide this tool to bring a bit of joy and laughter to your digital life.`
  };

  return (
    <SEOWrapper content={seoData}>
      <div className="p-8 md:p-12 text-center">
        <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Heart size={32} />
        </div>
        <h2 className="text-2xl font-bold mb-8">Love Compatibility Calculator</h2>
        
        <div className="max-w-md mx-auto space-y-6">
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Your Name"
              className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-pink-500 outline-none transition-all text-center"
              value={name1}
              onChange={(e) => setName1(e.target.value)}
            />
            <div className="text-pink-300 font-bold text-xl">+</div>
            <input 
              type="text" 
              placeholder="Partner's Name"
              className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-pink-500 outline-none transition-all text-center"
              value={name2}
              onChange={(e) => setName2(e.target.value)}
            />
          </div>
          
          <button 
            onClick={calculateLove}
            className="w-full bg-pink-600 text-white font-bold py-4 rounded-xl hover:bg-pink-700 transition-colors shadow-lg shadow-pink-200"
          >
            Calculate Love
          </button>

          {score !== null && (
            <div className="mt-8 p-8 bg-pink-50 rounded-[2rem] border-2 border-pink-100 animate-in fade-in zoom-in duration-500">
              <div className="text-5xl font-black text-pink-600 mb-2">{score}%</div>
              <p className="text-pink-400 font-medium">
                {score > 80 ? "Perfect Match! ❤️" : score > 50 ? "Great Potential! ✨" : "Good Friends! 😊"}
              </p>
            </div>
          )}
        </div>
      </div>
    </SEOWrapper>
  );
};

export default LoveCalculator;
