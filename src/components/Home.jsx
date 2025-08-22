import { motion } from 'framer-motion';
import { ChevronDownIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import TypingAnimation from './TypingAnimation';
import ParticleBackground from './ParticleBackground';

function Home() {
  const roles = [
    'Full Stack Developer',
    'Software Developer',
    
    'AI/ML Enthusiast'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Particle Background */}
      <ParticleBackground />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 blur-xl"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 blur-xl"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          className="mb-8"
          variants={itemVariants}
        >
          <motion.h1
            className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Muhammad Afzal.F
          </motion.h1>

          <motion.div
            className="text-2xl sm:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6 h-16 flex items-center justify-center"
            variants={itemVariants}
          >
            <TypingAnimation texts={roles} speed={100} deleteSpeed={50} pauseTime={2000} />
          </motion.div>
        </motion.div>

        <motion.p
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8"
          variants={itemVariants}
        >
          Passionate about creating innovative solutions with modern technologies.
          Specialized in full-stack development, microservices architecture, and
          building scalable applications that deliver exceptional user experiences.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <motion.a
            href="#contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Get in Touch</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.a>

          <motion.a
            href="#projects"
            className="group px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <DocumentArrowDownIcon className="w-5 h-5" />
            View Projects
          </motion.a>
        </motion.div>

        {/* Tech Stack Preview */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-4 opacity-60"
          variants={itemVariants}
        >
          {['React', 'Vue.js', 'Spring Boot','Node.js', 'Flutter', 'PostgreSQL', 'Docker'].map((tech, index) => (
            <motion.span
              key={tech}
              className="px-4 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full text-sm font-medium text-gray-600 dark:text-gray-400 border border-gray-200/50 dark:border-gray-700/50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-500 dark:text-gray-400"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDownIcon className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Home;