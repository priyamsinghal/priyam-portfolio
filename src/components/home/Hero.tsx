import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I'm{' '}
            <span className="text-blue-600 dark:text-blue-400">
              Priyam Singhal
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            Entrepreneur & Software Engineering Leader
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
            From India to Silicon Valley, I'm passionate about building impactful 
            technology solutions and leading high-performing engineering teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 
                       transition-colors duration-300 inline-block text-center"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mt-12 md:mt-0"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10 blur-xl"></div>
            <img
              src="/assets/profile_image.JPG"
              alt="Priyam Singhal"
              className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto 
                       border-4 border-white dark:border-gray-800 shadow-lg"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
