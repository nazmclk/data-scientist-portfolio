import React from 'react';
import { Github, ExternalLink, Eye } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: 'Customer Churn Prediction Model',
      category: 'Predictive Modeling',
      description: 'Built a machine learning model to predict customer churn using ensemble methods, achieving 94% accuracy and helping reduce churn by 23%.',
      technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'Streamlit'],
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: '#',
      demo: '#',
      notebook: '#'
    },
    {
      title: 'Sentiment Analysis for Social Media',
      category: 'Natural Language Processing',
      description: 'Developed a real-time sentiment analysis system for social media posts using BERT and deployed it on AWS with 99.2% uptime.',
      technologies: ['Python', 'BERT', 'Transformers', 'AWS', 'Docker', 'FastAPI'],
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: '#',
      demo: '#',
      notebook: '#'
    },
    {
      title: 'Medical Image Classification',
      category: 'Computer Vision',
      description: 'Created a CNN model for detecting pneumonia in chest X-rays with 96% accuracy, potentially assisting healthcare professionals.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Flask'],
      image: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: '#',
      demo: '#',
      notebook: '#'
    },
    {
      title: 'Stock Price Forecasting',
      category: 'Time Series Analysis',
      description: 'Implemented LSTM and ARIMA models for stock price prediction with feature engineering and risk assessment metrics.',
      technologies: ['Python', 'LSTM', 'ARIMA', 'Matplotlib', 'Yahoo Finance API'],
      image: 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: '#',
      demo: '#',
      notebook: '#'
    },
    {
      title: 'Sales Analytics Dashboard',
      category: 'Data Visualization',
      description: 'Built an interactive dashboard for sales analytics with real-time data processing and automated reporting features.',
      technologies: ['Python', 'Plotly Dash', 'PostgreSQL', 'Pandas', 'Plotly'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: '#',
      demo: '#',
      notebook: '#'
    },
    {
      title: 'Recommendation Engine',
      category: 'Machine Learning',
      description: 'Developed a collaborative filtering recommendation system for e-commerce, increasing user engagement by 35%.',
      technologies: ['Python', 'Collaborative Filtering', 'Matrix Factorization', 'Surprise', 'Redis'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: '#',
      demo: '#',
      notebook: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={elementRef}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
              A showcase of my data science projects spanning machine learning, deep learning, and data analytics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex space-x-2">
                        <a
                          href={project.github}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-200"
                        >
                          <Github className="w-5 h-5 text-white" />
                        </a>
                        <a
                          href={project.demo}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-200"
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </a>
                        <a
                          href={project.notebook}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-200"
                        >
                          <Eye className="w-5 h-5 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
            >
              <Github className="w-5 h-5 mr-2" />
              View More on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;