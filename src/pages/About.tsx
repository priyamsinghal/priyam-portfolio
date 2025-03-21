import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <h1 className="text-4xl font-bold text-dark-300 dark:text-light-100">
          About Me
        </h1>
        
        <div className="prose prose-lg text-dark-200 dark:text-light-100 max-w-none">
          <p>
            From the vibrant city of Hapur to the innovation hub of Silicon Valley, 
            my journey has been driven by a passion for technology and its power 
            to create meaningful impact.
          </p>

          <p>
            As a software engineering leader and entrepreneur, I've had the privilege 
            of working with exceptional teams at companies like Amazon and Apple, 
            where I've led the development of scalable solutions that serve millions 
            of users globally.
          </p>

          <p>
            Today, I'm focused on building sustainable technology solutions through 
            my ventures Ed2Play and Change2Green, while mentoring the next generation 
            of tech leaders and contributing to the startup ecosystem.
          </p>

          <div className="pt-4">
            <h2 className="text-2xl font-semibold text-dark-300 dark:text-light-100 mb-4">
              Core Values
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                Innovation with Purpose
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                Sustainable Development
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                Continuous Learning
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                Empowering Others
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
