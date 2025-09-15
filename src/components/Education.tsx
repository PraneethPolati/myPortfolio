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
                  B.Tech in Electronics & Communication Engineering
                </h4>
                <p className="text-lg text-blue-600 font-semibold mb-2">
                  Vaagdevi College of Engineering, Warangal
                </p>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <Calendar size={16} />
                  <span>2019 – 2023 | CGPA: 7.1/10</span>
                </div>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  12th Grade (MPC)
                </h4>
                <p className="text-lg text-blue-600 font-semibold mb-2">
                  Alphores Junior College, Hanamkonda
                </p>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <Calendar size={16} />
                  <span>2017 – 2019 | 80%</span>
                </div>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  10th Grade
                </h4>
                <p className="text-lg text-blue-600 font-semibold mb-2">
                  Sri Chaitanya Techno School, Warangal
                </p>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <Calendar size={16} />
                  <span>2016 – 2017 | CGPA: 8.2/10</span>
                </div>
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
                'MERN Stack Internship Certification (EY)',
                'Java Full Stack Development Certification (IHub Institute)'
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
      </div>
    </section>
  );
};
