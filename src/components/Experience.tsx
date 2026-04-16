import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { resumeData } from '../data/resume';

const Experience: React.FC = () => {
  const { language } = useLanguage();
  const data = resumeData[language];

  return (
    <section className="py-16 border-b border-blue-100">
      <h2 className="section-title">
        {language === 'zh' ? '工作经历' : 'Professional Experience'}
      </h2>

      <div className="space-y-6">
        {data.experience.map((exp, index) => (
          <div key={index} className="timeline-item card">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {exp.company} | {exp.location}
                </h3>
                <p className="text-blue-600 font-semibold mt-1">{exp.position}</p>
              </div>
              <span className="text-sm text-gray-500 font-semibold bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap ml-4">{exp.period}</span>
            </div>
            <p className="text-gray-700 leading-relaxed mt-3">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
