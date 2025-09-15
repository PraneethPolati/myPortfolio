import React from 'react';
import { Code, Heart, Target } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate software engineer with a love for creating elegant solutions to complex problems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              As a dedicated Software Engineer, I bring expertise in full-stack development 
              with a focus on React, Node.js, and modern JavaScript frameworks. I have experience 
              building scalable web applications and working with diverse technology stacks.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm passionate about writing clean, maintainable code and staying current with 
              the latest industry trends. My experience spans from frontend development with 
              React to backend services with Node.js and database management.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Clean Code</h3>
                <p className="text-sm text-gray-600">Writing maintainable, scalable code</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
                <Target className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Problem Solving</h3>
                <p className="text-sm text-gray-600">Turning complex challenges into solutions</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl">
                <Heart className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Passion</h3>
                <p className="text-sm text-gray-600">Love for continuous learning</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-200 via-purple-200 to-emerald-200 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-500">
              <div className="absolute inset-4 bg-white rounded-2xl shadow-inner flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">P</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Praneeth</h3>
                  <p className="text-gray-600">Software Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};