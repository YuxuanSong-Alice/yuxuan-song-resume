import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { resumeData } from '../data/resume';

const Header: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const data = resumeData[language];
    document.title = `${data.name} | ${data.title}`;
  }, [language]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-lg font-bold gradient-text">
          {language === 'zh' ? '宋雨萱' : 'Yuxuan Song'}
        </div>
        <button
          onClick={toggleLanguage}
          className="btn-secondary"
        >
          {language === 'zh' ? 'EN' : '中文'}
        </button>
      </div>
    </header>
  );
};

export default Header;
