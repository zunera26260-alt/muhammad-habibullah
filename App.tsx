
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/Static/About';
import FAQs from './pages/Static/FAQs';
import Contact from './pages/Static/Contact';
import Privacy from './pages/Static/Privacy';
import Terms from './pages/Static/Terms';
import Disclaimer from './pages/Static/Disclaimer';
import CookiePolicy from './pages/Static/CookiePolicy';

// Tool Pages
import AgeCalculator from './pages/Tools/AgeCalculator';
import LoveCalculator from './pages/Tools/LoveCalculator';
import WordToPdf from './pages/Tools/WordToPdf';
import ImageEnhancer from './pages/Tools/ImageEnhancer';
import BackgroundRemover from './pages/Tools/BackgroundRemover';
import PasswordGenerator from './pages/Tools/PasswordGenerator';
import WordCounter from './pages/Tools/WordCounter';
import CaseConverter from './pages/Tools/CaseConverter';
import BmiCalculator from './pages/Tools/BmiCalculator';
import PercentageCalculator from './pages/Tools/PercentageCalculator';
import QrGenerator from './pages/Tools/QrGenerator';
import EmojiPicker from './pages/Tools/EmojiPicker';
import NamePicker from './pages/Tools/NamePicker';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          
          {/* Tools */}
          <Route path="/age-calculator" element={<AgeCalculator />} />
          <Route path="/love-calculator" element={<LoveCalculator />} />
          <Route path="/word-to-pdf" element={<WordToPdf />} />
          <Route path="/image-enhancer" element={<ImageEnhancer />} />
          <Route path="/background-remover" element={<BackgroundRemover />} />
          <Route path="/password-generator" element={<PasswordGenerator />} />
          <Route path="/word-counter" element={<WordCounter />} />
          <Route path="/case-converter" element={<CaseConverter />} />
          <Route path="/bmi-calculator" element={<BmiCalculator />} />
          <Route path="/percentage-calculator" element={<PercentageCalculator />} />
          <Route path="/qr-generator" element={<QrGenerator />} />
          <Route path="/emoji-picker" element={<EmojiPicker />} />
          <Route path="/name-picker" element={<NamePicker />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
