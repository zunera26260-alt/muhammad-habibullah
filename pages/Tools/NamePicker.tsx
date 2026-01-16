
import React, { useState } from 'react';
import SEOWrapper from '../../components/SEOWrapper';
import { MousePointer2, RefreshCw, Trophy } from 'lucide-react';

const NamePicker: React.FC = () => {
  const [names, setNames] = useState('');
  const [winner, setWinner] = useState<string | null>(null);
  const [isRolling, setIsRolling] = useState(false);

  const pickWinner = () => {
    const list = names.split('\n').map(n => n.trim()).filter(Boolean);
    if (list.length === 0) return;
    
    setIsRolling(true);
    setWinner(null);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * list.length);
      setWinner(list[randomIndex]);
      setIsRolling(false);
    }, 1500);
  };

  const seoData = {
    title: 'Random Name Picker: Pick a Winner Fairly',
    introduction: 'Need to pick a winner for a giveaway, choose who goes first in a game, or select a random task assignee? Our Random Name Picker ensures a 100% fair and unbiased selection process. Simply enter your list of names and let the algorithm do the work.',
    howToUse: [
      'Type or paste your list of names, one per line.',
      'Click the "Pick a Winner" button.',
      'Watch as the tool randomly cycles through the names.',
      'Celebrate the randomly selected winner!'
    ],
    benefits: [
      'Unbiased random selection.',
      'Supports large lists of names.',
      'Fun animation and reveal.',
      'Reset and rerun easily.'
    ]
  };

  return (
    <SEOWrapper content={seoData}>
      <div className="p-8 md:p-12 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MousePointer2 size={32} />
            </div>
            <h2 className="text-2xl font-bold">Random Name Picker</h2>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-bold text-slate-700 text-left">Enter Names (one per line)</label>
            <textarea 
              rows={8}
              className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-500 outline-none font-medium"
              placeholder="Alice&#10;Bob&#10;Charlie&#10;David"
              value={names}
              onChange={(e) => setNames(e.target.value)}
            ></textarea>

            {winner && !isRolling && (
              <div className="bg-purple-600 text-white p-8 rounded-3xl space-y-2 animate-bounce">
                <Trophy className="mx-auto mb-2" size={40} />
                <div className="text-xs font-bold uppercase tracking-widest opacity-80">The Winner is</div>
                <div className="text-4xl font-black">{winner}</div>
              </div>
            )}

            <button 
              onClick={pickWinner}
              disabled={isRolling || !names.trim()}
              className="w-full bg-purple-600 text-white font-bold py-4 rounded-xl hover:bg-purple-700 transition-colors shadow-lg shadow-purple-200 flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {isRolling ? <RefreshCw className="animate-spin" /> : <MousePointer2 size={20} />}
              <span>{isRolling ? 'Picking...' : 'Pick a Winner'}</span>
            </button>
          </div>
        </div>
      </div>
    </SEOWrapper>
  );
};

export default NamePicker;
