import { motion } from 'framer-motion';
import { ExperienceItemProp, resumeData } from '../data/resume';
import { useInView } from 'react-intersection-observer';

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

const ExperienceItem = ({ company, title, period, location, description }: ExperienceItemProp) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={itemVariants}
      className="relative mx-auto"
    >
      {/* <div className={`relative w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0 ${
          key % 2 === 0 ? "text-left" : "text-right"
        }`} /> */}
                
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {title}
                  </h3>
                  <div className="text-lg text-blue-600 dark:text-blue-400">
                    {company}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {period} | {location}
                  </div>
                </div>

                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  {description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
    </motion.div>
  );
};

const Experience = () => {
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8">
        <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-8">
          Experience
        </h1>

        {/* Professional Experience */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-dark-300 dark:text-light-100 mb-6">
            Professional Experience
          </h2>
          <div className="space-y-12">
            
            {resumeData.experience.map((exp: ExperienceItemProp, index) => (
              <div className="relative pl-8 border-l-2 border-blue-500 dark:border-blue-400">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0" />
                <ExperienceItem key={index} {...exp}/>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-dark-300 dark:text-light-100 mb-6">
            Skills
          </h2>
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, y: 50 }}
            animate={inView2 ? {opacity: 1, y: 0} : {opacity: 0, y:50}}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-light-200 dark:bg-dark-200 p-6 rounded-lg">
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-primary text-light-100 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
            </div>
          </motion.div>
        </div>
        {/* Education Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-dark-300 dark:text-light-100 mb-6">
            Education
          </h2>
          <motion.div
            ref={ref3}
            initial={{ opacity: 0, y: 20 }}
            animate={inView3 ? {opacity: 1, y: 0} : {opacity: 0, y:20}}
            transition={{ duration: 0.8 }}
          >
          <div className="space-y-8">
            {resumeData.education.map((edu) => (
              <div className="bg-light-200 dark:bg-dark-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-dark-300 dark:text-light-100">
                  {edu.degree}
                </h3>
                <div className="text-lg text-primary">
                  {edu.school}
                </div>
                <div className="text-sm text-dark-100 dark:text-gray-400">
                  {edu.period} | {edu.location}
                </div>
              </div>
            ))}
          </div>
          </motion.div>
        </div>

        {/* Certifications Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-dark-300 dark:text-light-100 mb-6">
            Certifications
          </h2>
          <div className="space-y-8">
            {resumeData.certifications.map((cert, index) => (
              <motion.div
                key={index}
                ref={ref4}
                initial={{ opacity: 0, y: 20 }}
                animate={inView4 ? {opacity: 1, y: 0} : {opacity: 0, y:20}}
                transition={{ duration: 0.8 }}
                className="bg-light-200 dark:bg-dark-200 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-dark-300 dark:text-light-100">
                  {cert.name}
                </h3>
                <div className="text-lg text-primary">
                  {cert.issuer}
                </div>
                <div className="text-sm text-dark-100 dark:text-gray-400">
                  {cert.date}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default Experience;
