import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { resumeData } from '../data/resume';
import CopyableContact from './CopyableContact';
import portraitImg from '../assets/portrait.png';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const data = resumeData[language];

  return (
    <section className="py-16 border-b border-blue-100">
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-6 sm:gap-8 mb-12 max-w-3xl mx-auto">
        <img
          src={portraitImg}
          alt={data.name}
          width={96}
          height={96}
          className="w-[72px] h-[72px] sm:w-20 sm:h-20 rounded-full object-cover object-top shrink-0 border border-blue-100/80 shadow-sm opacity-95"
        />
        <div className="text-center sm:text-left min-w-0 flex-1">
          <h1 className="text-5xl sm:text-6xl font-bold gradient-text mb-3">{data.name}</h1>
          <p className="text-lg sm:text-2xl text-blue-600 font-semibold leading-snug">{data.title}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <CopyableContact
          label={language === 'zh' ? '邮箱' : 'Email'}
          value={data.contact.email}
        />
        <CopyableContact
          label={language === 'zh' ? '电话' : 'Phone'}
          value={data.contact.phone}
        />
        <CopyableContact
          label={language === 'zh' ? '微信' : 'WeChat'}
          value={data.contact.wechat}
        />
        <CopyableContact
          label={language === 'zh' ? '出生年月' : 'DOB'}
          value={data.contact.dob}
        />
      </div>
    </section>
  );
};

export default Hero;
