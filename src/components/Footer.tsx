import { socialLinks } from '../data/social';
import { IconType } from 'react-icons';

const Footer = () => {
  return (
<footer className="bg-light-200 dark:bg-dark-300">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="text-dark-200 dark:text-light-100">
        © 2024 Priyam Singhal. All rights reserved.
      </div>
      
      <div className="flex space-x-6 mt-4 md:mt-0">
  {socialLinks.map((link: { url: string; icon: IconType }) => (
    <a
      key={link.url} // Added key prop for React list rendering
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-dark-200 hover:text-primary dark:text-light-100 dark:hover:text-primary"
    >
      <link.icon size={20} />
    </a>
  ))}
</div>
    </div>
  </div>
</footer> 
  );
};

export default Footer;
