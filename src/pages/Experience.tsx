import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const Experience = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-dark-300 dark:text-light-100 mb-8">
          Experience
        </h1>

        {/* Professional Experience */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-dark-300 dark:text-light-100 mb-6">
            Professional Experience
          </h2>
          <div className="space-y-12">
            {resumeData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-blue-500 dark:border-blue-400"
              >
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0" />
                
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <div className="text-lg text-blue-600 dark:text-blue-400">
                    {exp.company}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {exp.period} | {exp.location}
                  </div>
                </div>

                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-dark-300 dark:text-light-100 mb-6">
            Skills
          </h2>
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
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-dark-300 dark:text-light-100 mb-6">
            Education
          </h2>
          <div className="space-y-8">
            {resumeData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-light-200 dark:bg-dark-200 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-dark-300 dark:text-light-100">
                  {edu.degree}
                </h3>
                <div className="text-lg text-primary">
                  {edu.school}
                </div>
                <div className="text-sm text-dark-100 dark:text-gray-400">
                  {edu.period} | {edu.location}
                </div>
              </motion.div>
            ))}
          </div>
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
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
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
      </motion.div>
    </div>
  );
};

export default Experience;
