import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
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
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-dark-200 dark:text-light-100">
              <FaLinkedin className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
              <div>
                <p className="text-gray-600 dark:text-gray-300">
                  <a href="https://www.linkedin.com/in/priyamsinghal/" target="_blank" rel="noopener noreferrer">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                      LinkedIn
                    </h3>
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-dark-200 dark:text-light-100">
              <FaTwitter className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
              <div>
                <p className="text-gray-600 dark:text-gray-300">
                  <a href="https://www.linkedin.com/in/priyamsinghal/" target="_blank" rel="noopener noreferrer">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                      Twitter
                    </h3>
                  </a>
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