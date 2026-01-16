
import React, { useState } from 'react';
import SEOWrapper from '../../components/SEOWrapper';
import { Smile, Search, Copy, Check } from 'lucide-react';

const EMOJIS = [
  { char: '😀', name: 'grin' }, { char: '😂', name: 'joy' }, { char: '🥰', name: 'love' },
  { char: '😍', name: 'heart eyes' }, { char: '🤩', name: 'star' }, { char: '😎', name: 'cool' },
  { char: '🤔', name: 'thinking' }, { char: '😴', name: 'sleep' }, { char: '🥳', name: 'party' },
  { char: '😭', name: 'sob' }, { char: '😡', name: 'angry' }, { char: '😱', name: 'scream' },
  { char: '🔥', name: 'fire' }, { char: '✨', name: 'sparkle' }, { char: '❤️', name: 'heart' },
  { char: '👍', name: 'up' }, { char: '🚀', name: 'rocket' }, { char: '🎉', name: 'celebrate' },
  { char: '🌈', name: 'rainbow' }, { char: '🍕', name: 'pizza' }, { char: '☕', name: 'coffee' }
];

const EmojiPicker: React.FC = () => {
  const [search, setSearch] = useState('');
  const [copiedEmoji, setCopiedEmoji] = useState<string | null>(null);

  const filtered = EMOJIS.filter(e => e.name.includes(search.toLowerCase()));

  const copyEmoji = (char: string) => {
    navigator.clipboard.writeText(char);
    setCopiedEmoji(char);
    setTimeout(() => setCopiedEmoji(null), 2000);
  };

  const seoData = {
    title: 'Emoji Picker: Find and Copy Your Favorite Emojis',
    introduction: 'Sometimes your keyboard just doesn\'t have enough emojis. Our Emoji Picker lets you quickly browse and find the perfect icon for your next social media post, message, or project. Simple, fast, and always accessible.',
    howToUse: [
      'Search for emojis using the search bar.',
      'Click on an emoji to copy it to your clipboard.',
      'Paste it wherever you need it!'
    ],
    benefits: [
      'Quick search functionality.',
      'One-click copy.',
      'Visual categories.',
      'Lightweight and fast.'
    ]
  };

  return (
    <SEOWrapper content={seoData}>
      <div className="p-8 md:p-12 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Smile size={32} />
            </div>
            <h2 className="text-2xl font-bold">Emoji Picker</h2>
          </div>

          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search emojis..."
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-7 gap-4">
            {filtered.map((e) => (
              <button
                key={e.char}
                onClick={() => copyEmoji(e.char)}
                className="group relative h-16 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-3xl hover:bg-white hover:shadow-lg transition-all"
                title={e.name}
              >
                {e.char}
                {copiedEmoji === e.char && (
                  <div className="absolute inset-0 bg-green-500/90 rounded-xl flex items-center justify-center text-white text-sm">
                    <Check size={20} />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </SEOWrapper>
  );
};

export default EmojiPicker;
