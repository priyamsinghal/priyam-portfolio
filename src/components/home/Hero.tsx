import { motion } from 'framer-motion';
import FloatingBallScroll from '../Animations/FloatingBallScroll';

const Hero = () => {  
  return (
    <div className="relative flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-24">
      {/*background animations */}
      <div className="absolute inset-0 pointer-events-none">
                <FloatingBallScroll color="rgba(0, 70, 255, 0.6)" top="-10%" left="-10%" size="280px" direction="false" />
                <FloatingBallScroll color="rgba(0, 70, 255, 0.6)" top="80%" left="90%" size="280px" direction="true"/>
            </div>
      <div className="max-w-screen-2xl mx-auto px-8 sm:px-10 lg:px-12 flex flex-col md:flex-row items-center gap-8 mb-16">
        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 w-auto h-auto md:w-auto md:h-auto rounded-full opacity-10 blur-xl"></div>
            <img
              src="/assets/profile_image.JPG"
              alt="Priyam Singhal"
              className="relative rounded-full w-auto h-auto md:w-auto md:h-auto object-cover mx-auto 
                       border-4 border-white dark:border-gray-800 shadow-lg"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:w-1/2"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm{' '}
            <span className="text-blue-600 dark:text-blue-400">
              Priyam Singhal
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            Entrepreneur & Software Engineering Leader
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            I am an engineering leader and creative problem-solver with a passion for helping people and building meaningful tech products. My journey took me from India to Silicon Valley, where I’ve led high-performing teams, honed my leadership skills, and discovered the power of innovation and empathy. Whether I'm brainstorming fresh ideas or mentoring aspiring engineers, I love blending creativity with collaboration to make technology accessible, impactful, and fun. 
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Let’s explore what we can build together!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
