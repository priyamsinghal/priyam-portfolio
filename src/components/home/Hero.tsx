import { motion } from 'framer-motion';
import FloatingBallScroll from '../Animations/FloatingBallScroll';

const Hero = () => {  
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-24 md:pt-0">
      <div className="absolute inset-0 pointer-events-none">
                <FloatingBallScroll color="rgba(1, 0, 255, 0.6)" top="-10%" left="-10%" size="280px" direction="false" />
                {/* <FloatingBallScroll color="rgba(255, 0, 1, 0.6)" top="20%" left="60%" size="280px" direction="true"/> */}
                {/* <FloatingBallScroll color="rgba(0, 255, 1, 0.5)" top="60%" left="20%" size="280px" direction="false"/> */}
                <FloatingBallScroll color="rgba(50, 189, 157, 0.8)" top="90%" left="90%" size="280px" direction="true"/>
            </div>
      <div className="max-w-screen-2xl mx-auto px-8 sm:px-10 lg:px-12 flex flex-col md:flex-row items-center gap-8">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left md:w-4/5"
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
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            From India to Silicon Valley, I'm passionate about building impactful 
            technology solutions and leading high-performing products. My father is in construction business and my mother is his support system. Growing up I always wanted to be a lawyer but destiny had something else planned for me. I went to complete my bachelor’s in Information Technology from a private college in Greater Noida and joined Tata Consultancy Services (TCS) as a Software Developer. In 2011 I started working for Apple (as a Contractor through TCS) and moved on from Automation Development Engineer to Mobile Software Developer. During this time, I met my soulmate Devanshu and transitioned into a new phase of my life. In 2016, I went on to join Amazon, specifically their Visual Search product team as Software Development Engineer. After spending 3 years at Amazon as a Software Development Engineer I was offered to manage the mobile development team in the same organization and as any other aspiring professional, I took it. During my time at Amazon I went through several ups & downs and worked on several projects. This included experiencing motherhood in addition to several accolades and promotions at work & personal life both.  In December 2024, I made the bittersweet decision to resign from Amazon—a place that has been an integral part of my life. Visual Search was my first baby, and it will always hold a special place in my heart. I am incredibly grateful to everyone I worked with, learned from, and collaborated with over the years. The experiences I had shaped me into the professional I am today.
For some, this might come as a surprise, but my close network knew that this has been on my mind for quite some time. Like many professionals in their mid-thirties, I found myself reflecting deeply on my role in this world. My husband would often joke, "Kya hum yaha yehi karne aye hai?" (Are we here to do just this?), playfully pointing at the autopilot routine of life.
While he is fully committed and thriving in his career, his words planted a seed in my mind. I felt an itch to break out of my routine and do something more creative—something that truly contributes to society. But between work and home commitments, I struggled to find the time. Even with a loving and supportive family, I couldn’t shake the feeling of being underappreciated at work.
That’s when I made a decision: I needed to give myself an option—a chance to build something awesome. I didn't want to look back 10 years from now and regret not even trying.
          </p>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mt-12 md:mt-0"
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
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
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
