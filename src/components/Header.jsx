import { motion } from 'framer-motion';

function Header() {
  return (
    <motion.header
      className="bg-gray-900 text-white p-4 sticky top-0 z-10 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="flex justify-between items-center max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold">Muhammad Afzal.F</h1>
        <ul className="flex space-x-6">
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-400 transition-colors duration-300"
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