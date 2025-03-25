import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="flex flex-col sm:flex-row gap-4">
        <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
              Get in Touch
            </h1>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <a href="https://www.linkedin.com/in/priyamsinghal/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="h-6 w-6 text-dark-600 dark:text-light-400" />
              </a>
              <a href="https://x.com/priyam_singhal" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="h-6 w-6 text-dark-600 dark:text-light-400" />
              </a>
           </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact; 