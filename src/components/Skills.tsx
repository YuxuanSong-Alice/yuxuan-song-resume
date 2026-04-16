import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { resumeData } from '../data/resume';

const Skills: React.FC = () => {
  const { language } = useLanguage();
  const data = resumeData[language];

  return (
    <section className="py-16 border-b border-blue-100">
      <h2 className="section-title">
        {language === 'zh' ? '个人技能与兴趣' : 'Skills & Interests'}
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="card">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white mr-3">🌐</span>
            {language === 'zh' ? '语言技能' : 'Languages'}
          </h3>
          <p className="text-gray-700 leading-relaxed">{data.skills.languages}</p>
        </div>

        <div className="card">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white mr-3">⚙️</span>
            {language === 'zh' ? '工具技能' : 'Tools'}
          </h3>
          <p className="text-gray-700 leading-relaxed">{data.skills.tools}</p>
        </div>

        <div className="card">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-cyan-600 rounded-lg flex items-center justify-center text-white mr-3">🎨</span>
            {language === 'zh' ? '兴趣爱好' : 'Interests'}
          </h3>
          <p className="text-gray-700 leading-relaxed">{data.skills.interests}</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
