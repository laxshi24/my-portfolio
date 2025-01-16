import React from 'react';
import { Github, Linkedin, Mail, Code } from 'lucide-react';

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 px-6 rounded-t-lg shadow-lg">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0">
          {/* Name and Title Section */}
          <div className="text-center sm:text-left space-y-2">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              S. Laxshika
            </h2>
            <p className="text-gray-400 font-medium">Full Stack Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/laxshi24"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-200"
            >
              <Github className="w-6 h-6 text-gray-400 hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/laxshika/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-200"
            >
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-blue-400" />
            </a>
            <a
              href="mailto:laxshisiva@gmail.com"
              className="transform hover:scale-110 transition-transform duration-200"
            >
              <Mail className="w-6 h-6 text-gray-400 hover:text-red-400" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-right space-y-2">
            <div className="flex items-center justify-center sm:justify-end space-x-2">
              <Mail className="w-4 h-4 text-gray-400" />
              <p className="text-gray-400 hover:text-white transition-colors duration-200">
                laxshisiva@gmail.com
              </p>
            </div>
            <div className="flex items-center justify-center sm:justify-end space-x-2">
              <Code className="w-4 h-4 text-gray-400" />
              <p className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                #FullStackDev2024
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Line */}
        <div className="mt-8 pt-4 border-t border-gray-700">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} S. Laxshika. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;