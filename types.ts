
// Import React to resolve the 'React' namespace error for React.ReactNode.
import React from 'react';

export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  category: 'productivity' | 'image' | 'text' | 'math' | 'misc';
  path: string;
}

export interface SEOContent {
  title: string;
  introduction: string;
  howToUse: string[];
  benefits: string[];
  detailedArticle?: string; // New field for long-form SEO content
}
