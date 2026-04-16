import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { resumeData } from '../data/resume';
import CopyableContact from './CopyableContact';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const data = resumeData[language];

  return (
    <section className="py-16 border-b border-blue-100">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold gradient-text mb-3">{data.name}</h1>
        <p className="text-2xl text-blue-600 font-semibold mb-8">{data.title}</p>
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
