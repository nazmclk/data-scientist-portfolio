import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Blog: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const blogPosts = [
    {
      title: 'The Future of Automated Machine Learning (AutoML)',
      excerpt: 'Exploring how AutoML is democratizing machine learning and making it accessible to non-technical users while maintaining high performance standards.',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Machine Learning',
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '#'
    },
    {
      title: 'Building Scalable Data Pipelines with Apache Airflow',
      excerpt: 'A comprehensive guide to designing and implementing robust data pipelines that can handle millions of records with fault tolerance and monitoring.',
      date: '2024-01-08',
      readTime: '12 min read',
      category: 'Data Engineering',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '#'
    },
    {
      title: 'Understanding BERT: Transformers in Natural Language Processing',
      excerpt: 'Deep dive into BERT architecture and how transformer models revolutionized NLP, with practical implementation examples and use cases.',
      date: '2023-12-22',
      readTime: '15 min read',
      category: 'Deep Learning',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '#'
    },
    {
      title: 'MLOps Best Practices: From Development to Production',
      excerpt: 'Essential practices for deploying machine learning models in production environments, including monitoring, versioning, and continuous integration.',
      date: '2023-12-15',
      readTime: '10 min read',
      category: 'MLOps',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '#'
    },
    {
      title: 'Explainable AI: Making Black Box Models Interpretable',
      excerpt: 'Techniques and tools for understanding and explaining machine learning model decisions, crucial for building trust in AI systems.',
      date: '2023-12-01',
      readTime: '11 min read',
      category: 'AI Ethics',
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '#'
    },
    {
      title: 'Time Series Forecasting with Deep Learning',
      excerpt: 'Comparing traditional statistical methods with modern deep learning approaches for time series prediction, with code examples and performance analysis.',
      date: '2023-11-18',
      readTime: '14 min read',
      category: 'Time Series',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '#'
    }
  ];

  const categories = ['All', 'Machine Learning', 'Data Engineering', 'Deep Learning', 'MLOps', 'AI Ethics', 'Time Series'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={elementRef}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Latest Blog Posts
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
              Insights and tutorials on data science, machine learning, and AI technologies
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                    <Clock className="w-4 h-4 ml-4 mr-2" />
                    {post.readTime}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <a
                    href={post.link}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
            >
              View All Posts
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;