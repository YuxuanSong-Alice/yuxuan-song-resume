import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { resumeData } from '../data/resume';

const Education: React.FC = () => {
  const { language } = useLanguage();
  const data = resumeData[language];

  return (
    <section className="py-16 border-b border-blue-100">
      <h2 className="section-title">
        {language === 'zh' ? '教育背景' : 'Education Background'}
      </h2>

      <div className="space-y-6">
        {data.education.map((edu, index) => (
          <div key={index} className="timeline-item card">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{edu.school}</h3>
                <p className="text-blue-600 font-semibold">{edu.degree}</p>
              </div>
              <span className="text-sm text-gray-500 font-semibold bg-blue-50 px-3 py-1 rounded-full">{edu.period}</span>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              <span className="font-semibold">{language === 'zh' ? '平均绩点' : 'GPA'}:</span> {edu.gpa}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
