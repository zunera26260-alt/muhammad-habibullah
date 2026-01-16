
import React from 'react';
import { 
  Calculator, Heart, FileText, Image, Eraser, QrCode, 
  Lock, Hash, Type, Percent, User, Smile, MousePointer2 
} from 'lucide-react';
import { Tool } from './types';

export const TOOLS: Tool[] = [
  { id: 'age-calc', name: 'Age Calculator', description: 'Calculate your exact age in years, months, and days.', icon: <Calculator />, category: 'math', path: '/age-calculator' },
  { id: 'love-calc', name: 'Love Calculator', description: 'Find the compatibility between two names.', icon: <Heart />, category: 'misc', path: '/love-calculator' },
  { id: 'word-pdf', name: 'Word to PDF', description: 'Convert text documents to PDF format instantly.', icon: <FileText />, category: 'productivity', path: '/word-to-pdf' },
  { id: 'img-enhance', name: 'AI Image Enhancer', description: 'Improve image quality using advanced AI.', icon: <Image />, category: 'image', path: '/image-enhancer' },
  { id: 'bg-remove', name: 'Background Remover', description: 'Remove backgrounds from images with AI.', icon: <Eraser />, category: 'image', path: '/background-remover' },
  { id: 'qr-gen', name: 'QR Code Generator', description: 'Create custom QR codes for any URL or text.', icon: <QrCode />, category: 'productivity', path: '/qr-generator' },
  { id: 'pass-gen', name: 'Password Generator', description: 'Generate strong, secure passwords.', icon: <Lock />, category: 'productivity', path: '/password-generator' },
  { id: 'word-count', name: 'Word Counter', description: 'Count characters, words, and sentences.', icon: <Hash />, category: 'text', path: '/word-counter' },
  { id: 'case-conv', name: 'Text Case Converter', description: 'Switch between uppercase, lowercase, and more.', icon: <Type />, category: 'text', path: '/case-converter' },
  { id: 'percent-calc', name: 'Percentage Calculator', description: 'Simple tool for all percentage math.', icon: <Percent />, category: 'math', path: '/percentage-calculator' },
  { id: 'bmi-calc', name: 'BMI Calculator', description: 'Check your Body Mass Index quickly.', icon: <User />, category: 'math', path: '/bmi-calculator' },
  { id: 'emoji-pick', name: 'Emoji Picker', description: 'Browse and copy your favorite emojis.', icon: <Smile />, category: 'misc', path: '/emoji-picker' },
  { id: 'name-pick', name: 'Random Name Picker', description: 'Fairly pick a name from a list.', icon: <MousePointer2 />, category: 'misc', path: '/name-picker' },
];
