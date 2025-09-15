import React from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-emerald-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects,
                or just having a chat about technology and innovation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-blue-100">polatipraneeth@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-blue-100">+91 9849773202</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-blue-100">Warangal, Telangana, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {[
                  {
                    icon: <Github size={20} />,
                    href: 'https://github.com/PraneethPolati',
                    label: 'GitHub',
                  },
                  {
                    icon: <Linkedin size={20} />,
                    href: 'https://www.linkedin.com/in/praneethpolati/',
                    label: 'LinkedIn',
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form (Netlify Ready) */}
          <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Send Message</h3>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              action="/success"
              className="space-y-6"
            >
              {/* Hidden field required by Netlify */}
              <input type="hidden" name="form-name" value="contact" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
