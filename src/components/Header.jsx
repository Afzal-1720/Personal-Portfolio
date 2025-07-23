import { motion } from 'framer-motion';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      className="bg-gray-900 text-white p-4 sticky top-0 z-10 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-2 sm:px-4">
        <h1 className="text-xl sm:text-2xl font-bold">Muhammad Afzal.F</h1>
        {/* Hamburger Icon for Mobile */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
        {/* Navigation Links */}
        <ul className={`flex-col sm:flex-row sm:flex space-x-0 sm:space-x-6 absolute sm:static top-16 left-0 w-full sm:w-auto bg-gray-900 sm:bg-transparent p-4 sm:p-0 ${isMenuOpen ? 'flex' : 'hidden sm:flex'}`}>
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <li key={item} className="py-2 sm:py-0">
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-400 transition-colors duration-300 text-base sm:text-lg"
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}

export default Header;