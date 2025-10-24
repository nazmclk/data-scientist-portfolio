import React from 'react';


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Nazım ÇALIK
            </h3>
            <p className="text-gray-400">
              Data Scientist | Machine Learning Engineer | AI Enthusiast
            </p>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="text-gray-400">
                © 2025 NAZIM ÇALIK. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;