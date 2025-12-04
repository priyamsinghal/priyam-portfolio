import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link

 } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="min-w-screen mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex flex-col md:flex-row gap-8 lg:max-w-6xl mx-auto">
          {/* Brand */}
          <div className="md:mx-auto">
            <h3 className="text-4xl font-semibold text-blue-600 dark:text-blue-400 mb-8">
              Priyam Singhal
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Entrepreneur & Software Engineering Leader
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:mx-auto">
            <h3 className="text-4xl font-semibold text-blue-600 dark:text-blue-400 mb-8">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="#experience" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Experience
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:mx-auto">
            <h3 className="text-4xl font-semibold text-blue-600 dark:text-blue-400 mb-8">
              Get in Touch
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/priyamsinghal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/priyamsinghal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://x.com/priyam_singhal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-400"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-2 pb-2 border-t border-gray-200 dark:border-gray-800 bg-gray-100">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Priyam Singhal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
