import React from 'react';
import { Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const experiences = [
    {
      type: 'work',
      title: 'Data Scientist',
      company: 'IME-Brands',
      location: ' Illinois, USA',
      period: '2023 - 2024',
      description: 'Led a team in developing customer analytics solutions, implementing end-to-end machine learning pipelines that enhanced customer insights and retention.',
      achievements: [
        'Developed models leveraging historical data and machine learning techniques to forecast revenue and profitability, while enhancing sales and personalization through customer segmentation, basket analysis, and recommendation systems.',
        'Created interactive Power BI dashboards and optimized marketing strategies through A/B testing to support data-driven decision-making.',
        'Performed NLP-based sentiment analysis on product reviews and applied computer vision for product image analysis and classification, improving actionable insights and data processing efficiency.'
      ]
    }
  ];

  

  const education = [
    {
      type: 'education',
      title: 'Engineering',
      company: 'Dokuz Eylul University',
      location: 'İzmir, Turkey',
      period: '2002 - 2007',
      description: 'Bachelor of Science in Engineering.',
      achievements: [
        'GPA: 3.4/4.0'        
      ]
    } 
   ];

  const allItems = [...experiences, ...education].sort((a, b) => {
    const yearA = parseInt(a.period.split(' - ')[0]);
    const yearB = parseInt(b.period.split(' - ')[0]);
    return yearB - yearA;
  });

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={elementRef}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Experience & Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
              My professional journey and academic background in data science and technology
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

            <div className="space-y-12">
              {allItems.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className="ml-20 w-full">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                        <div className="flex items-center mb-2 sm:mb-0">
                          {item.type === 'work' ? (
                            <Briefcase className="w-5 h-5 text-blue-600 mr-2" />
                          ) : (
                            <GraduationCap className="w-5 h-5 text-purple-600 mr-2" />
                          )}
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {item.title}
                          </h3>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <Calendar className="w-4 h-4 mr-1" />
                          {item.period}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                          {item.company}
                        </h4>
                        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                          <MapPin className="w-4 h-4 mr-1" />
                          {item.location}
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="space-y-2">
                        <h5 className="font-semibold text-gray-800 dark:text-gray-200">
                          Key Achievements:
                        </h5>
                        <ul className="space-y-1">
                          {item.achievements.map((achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="text-gray-600 dark:text-gray-300 flex items-start"
                            >
                              <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;