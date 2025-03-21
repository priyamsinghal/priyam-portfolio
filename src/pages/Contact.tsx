import { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <h1 className="text-4xl font-bold text-dark-300 dark:text-light-100">
          Contact
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-light-200 dark:bg-dark-200 p-6 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-dark-200 dark:text-light-100 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-light-300 dark:border-dark-100 bg-light-100 dark:bg-dark-300 text-dark-200 dark:text-light-100 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-dark-200 dark:text-light-100 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-light-300 dark:border-dark-100 bg-light-100 dark:bg-dark-300 text-dark-200 dark:text-light-100 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-dark-200 dark:text-light-100 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-light-300 dark:border-dark-100 bg-light-100 dark:bg-dark-300 text-dark-200 dark:text-light-100 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-dark-200 dark:text-light-100 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-light-300 dark:border-dark-100 bg-light-100 dark:bg-dark-300 text-dark-200 dark:text-light-100 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <button className="w-full bg-primary hover:bg-primary/90 text-light-100 py-2 px-4 rounded-lg transition-colors">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-dark-200 dark:text-light-100">
              <EnvelopeIcon className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                  Email
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  priyamsinghal@aol.com
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-dark-200 dark:text-light-100">
              <FaLinkedin className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                  LinkedIn
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  <a href="https://www.linkedin.com/in/priyamsinghal/" target="_blank" rel="noopener noreferrer">
                    https://www.linkedin.com/in/priyamsinghal/
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-dark-200 dark:text-light-100">
              <MapPinIcon className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                  Location
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  San Francisco Bay Area, CA
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact; 