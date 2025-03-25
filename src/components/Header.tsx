import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed w-full bg-light-100 dark:bg-dark-300 shadow-sm z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="#hero" className="text-2xl font-bold text-dark-300 dark:text-light-100">
              Priyam Singhal
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              to="#about" 
              className="text-dark-200 hover:text-primary dark:text-light-100 dark:hover:text-primary"
            >
              About
            </Link>
            <Link 
              to="#experience" 
              className="text-dark-200 hover:text-primary dark:text-light-100 dark:hover:text-primary"
            >
              Experience
            </Link>
            <Link 
              to="#contact" 
              className="text-dark-200 hover:text-primary dark:text-light-100 dark:hover:text-primary"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 