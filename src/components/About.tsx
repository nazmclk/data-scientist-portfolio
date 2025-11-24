import React from 'react';
import { Award, Users, Coffee, BookOpen } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const stats = [
    { icon: Award, label: 'Years Experience', value: '3+' },
    { icon: Users, label: 'Projects Completed', value: '50+' },
    { icon: Coffee, label: 'Models Deployed', value: '25+' },
    { icon: BookOpen, label: 'Research Papers', value: '3' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={elementRef}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Passionate Data Scientist
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  With over 3 years of experience in data science and machine learning, I specialize in transforming complex datasets into actionable business insights. My expertise spans across predictive modeling, natural language processing, computer vision, and deep learning.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  I have a proven track record of delivering end-to-end ML solutions that drive business value, from initial data exploration to model deployment and monitoring in production environments.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  When I'm not diving deep into data, you'll find me contributing to open-source projects, writing technical blog posts, or exploring the latest advances in AI research.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-1">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-2 text-center">
                  <img 
                    src="my-foto.jpg" 
                    alt="Nazım ÇALIK"
                    className="w-48 h-48 mx-auto rounded-full object-cover mb-4"
                  />
                </div>
              </div>
            
            
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="inline-flex p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg mb-3">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;