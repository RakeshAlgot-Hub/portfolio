import React from 'react';
import { Github, Code2, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex items-center justify-center mb-8">
              <Code2 className="w-12 h-12 text-indigo-600" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6">
              Welcome to My Project
            </h1>
            
            <p className="text-xl text-gray-600 text-center mb-8">
              A modern React application built with TypeScript and Tailwind CSS.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
              <a
                href="https://github.com/yourusername/yourrepo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
              >
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
              
              <a
                href="https://yourusername.github.io/yourrepo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-indigo-600 text-base font-medium rounded-md text-indigo-600 hover:bg-indigo-50 transition-colors duration-300"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Live Demo
              </a>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Features
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  React with TypeScript for type-safe development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  Tailwind CSS for modern, responsive design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  Vite for lightning-fast development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;