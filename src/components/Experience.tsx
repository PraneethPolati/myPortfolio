import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'MERN Stack Development Intern',
      company: 'EY GDS',
      location: 'Remote / India',
      period: 'Feb 2025 – Mar 2025',
      description: [
        'Developed a MERN stack web application as part of a 6-week internship using MongoDB, Express.js, React.js, and Node.js',
        'Collaborated with mentors and industry experts in master classes on AI tools, UI/UX design, and web development best practices',
        'Presented the final project to a panel of EY experts, showcasing coding, problem-solving, and presentation skills'
      ],
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Git', 'UI/UX']
    },
    {
      title: 'Full Stack Development Intern',
      company: 'Innomatics Research Labs',
      location: 'Hyderabad, India',
      period: 'Sept 2024 – Nov 2024',
      description: [
        'Built user-friendly, responsive web applications using React.js and JavaScript for smooth functionality across devices',
        'Collaborated with team members using GitHub for version control and project quality maintenance',
        'Integrated and tested APIs using Postman to ensure reliable data flow and improve app performance'
      ],
      technologies: ['React.js', 'JavaScript', 'APIs', 'Postman', 'GitHub']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey of growth, learning, and creating impactful solutions
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-purple-600 to-emerald-600 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform md:-translate-x-1/2 z-10"></div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg font-semibold text-blue-600 mb-2">
                          {exp.company}
                        </h4>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-700 flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
