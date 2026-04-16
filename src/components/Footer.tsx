import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { resumeData } from '../data/resume';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const data = resumeData[language];
  const exp = data.experience[0];

  return (
    <footer className="footer-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-3">{language === 'zh' ? '联系方式' : 'Contact'}</h3>
            <p className="text-white/80 text-sm">
              {language === 'zh' ? '邮箱' : 'Email'}: {data.contact.email}
            </p>
            <p className="text-white/80 text-sm">
              {language === 'zh' ? '电话' : 'Phone'}: {data.contact.phone}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">{language === 'zh' ? '教育背景' : 'Education'}</h3>
            <p className="text-white/80 text-sm">
              {language === 'zh' ? '哥伦比亚大学 硕士' : 'Columbia University M.S.'}
            </p>
            <p className="text-white/80 text-sm">
              {language === 'zh' ? '罗格斯大学 本科' : 'Rutgers University B.S.'}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">{language === 'zh' ? '工作经历' : 'Experience'}</h3>
            <p className="text-white/80 text-sm font-semibold">{exp.company}</p>
            <p className="text-white/80 text-sm mt-2 leading-relaxed">{exp.position}</p>
            <p className="text-white/80 text-sm mt-2">{exp.period}</p>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80 text-sm leading-relaxed">
            © {new Date().getFullYear()} {data.name} | {data.title}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
