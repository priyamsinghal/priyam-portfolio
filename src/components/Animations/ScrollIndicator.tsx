import { useState, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator = () => {
  const [showIndicator, setShowIndicator] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState<number | null>(null);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const isAtBottom = currentScrollY + windowHeight >= docHeight - 10; // threshold of 10px
      
      // Determine scroll direction: true if scrolling down
      const scrollingDown = currentScrollY > prevScrollY;

      // Clear any previous timeout
      if (scrollTimeout) clearTimeout(scrollTimeout);

      // Hide indicator if at bottom or scrolling up
      if (isAtBottom || !scrollingDown) {
        setShowIndicator(false);
      } else {
        // If scrolling down and not at bottom, wait a moment after scrolling stops to show the indicator
        const timeout = setTimeout(() => {
          setShowIndicator(true);
        }, 10); // 300ms pause after scrolling
        setScrollTimeout(timeout);
      }
      
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [prevScrollY, scrollTimeout]);

  if (!showIndicator) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-10 p-2 rounded-full z-50"
    >
      <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-blue-400 rounded-full mt-2"></div>
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;
