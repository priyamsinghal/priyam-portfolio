// import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ScrollReveal>
        <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-8">
          About Me
        </h1>
        
        <div className="prose prose-lg text-dark-200 dark:text-light-100 max-w-none">
          <p className="mb-4">
            From the bustling city of Hapur (India) to the cutting-edge tech landscape of Silicon Valley, my path has been defined by a love for technology and a drive to uplift communities. Growing up, I imagined becoming a lawyer, but destiny had other plans: I earned my bachelor’s in Information Technology from a private college in Greater Noida and launched my career as a Software Developer at TCS. In 2011, I joined Apple (as a contractor through TCS), moving from Automation Development Engineer to Mobile Software Developer—a leap that sparked my fascination with user-focused innovation. 
          </p>
          <p className="mb-4">
            In 2016, I transitioned to Amazon’s Visual Search product team, spending three years as a Software Development Engineer before leading the mobile development group. This chapter brought both triumphs—like promotions and building high-impact solutions—and personal milestones, including motherhood. By December 2024, I felt the pull to explore a more creative path that could bring greater meaning and social impact. My father’s construction business and my mother’s unwavering support taught me resilience, while my husband, Devanshu, continues to inspire me to break routines and aim higher. 
            </p>
            <p className="mb-4">
            Beyond my corporate journey, I have always been deeply committed to community and education. As Head of Operations & Logistics on the Organizing Board for Me2We—a non-profit initiative for Stanford LEAD Program Alumni—I organized a highly successful conference at Stanford Campus in March 2024, bringing together over 500 in-person LEADers from around the globe. Collaborating with a focused team of five, I managed everything from registrations and on-site coordination to catering, seating, venues, and issue triaging. Additionally, my active involvement in the School PTA underscores my dedication to enhancing our education system and creating nurturing environments for future generations.
            </p>
            <p className="mb-4">
              Today, I channel my energy into sustainable technology ventures through <b>Ed2Play</b> and <b>Change2Green</b>, mentoring aspiring engineers, and advocating for <b>women’s empowerment</b> and <b>education system upliftment</b>. I firmly believe that technology should serve as a bridge—one that connects people, fosters growth, and encourages everyone, especially women, to find their voice in STEM. 
            </p>
            <p>
            At my core, I stand by:
          <div className="pt-4">
            <b>
            <ul className="space-y-3 mb-4">
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
                Women’s Empowerment
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                Continuous Learning
              </li>
            </ul>
            </b>
          </div>
          </p>
          <p>
          I’m excited to keep pushing boundaries, collaborate with passionate minds, and leverage technology to spark meaningful change—one idea, one project, and one community at a time.
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default About;
