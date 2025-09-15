import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic foundation and continuous learning through certifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Bachelor of Technology in Computer Science Engineering
                </h4>
                <p className="text-lg text-blue-600 font-semibold mb-2">
                  Engineering College
                </p>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <Calendar size={16} />
                  <span>2018 - 2022</span>
                </div>
                <p className="text-gray-700">
                  Comprehensive study of computer science fundamentals including data structures, 
                  algorithms, software engineering principles, and modern programming languages.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-emerald-600 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
            </div>

            <div className="space-y-4">
              {[
                'JavaScript ES6+ Certification',
                'React Developer Certification',
                'Node.js Fundamentals',
                'MongoDB Database Administration',
                'Git Version Control'
              ].map((cert, index) => (
                <div
                  key={cert}
                  className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-emerald-50 rounded-xl hover:from-purple-100 hover:to-emerald-100 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-emerald-600 rounded-full"></div>
                  <span className="text-gray-800 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
            <p className="text-gray-700 leading-relaxed">
              I believe in lifelong learning and staying updated with the latest technologies. 
              I regularly attend conferences, participate in online courses, and contribute to 
              open-source projects to expand my knowledge and give back to the community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};