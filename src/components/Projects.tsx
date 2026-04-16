import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { resumeData } from '../data/resume';

const Projects: React.FC = () => {
  const { language } = useLanguage();
  const data = resumeData[language];

  return (
    <section className="py-16 border-b border-blue-100">
      <h2 className="section-title">
        {language === 'zh' ? '核心项目与成果' : 'Core Projects & Achievements'}
      </h2>

      <div className="space-y-6">
        {data.projects.map((project, index) => (
          <div key={index} className="timeline-item card">
            <h3 className="text-lg font-bold text-gray-900 mb-3">{project.title}</h3>
            <p
              className={`text-gray-700 leading-relaxed mb-4 ${
                language === 'en' ? 'whitespace-pre-line' : ''
              }`}
            >
              {project.description}
            </p>
            <div className="info-box">
              <p className="text-sm text-gray-700 whitespace-pre-line">
                {language === 'zh' ? (
                  <>
                    <span className="font-bold text-blue-600">核心业绩：</span>
                    {project.results}
                  </>
                ) : (
                  <span className="font-semibold text-gray-800">{project.results}</span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
