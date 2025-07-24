import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 sm:py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center max-w-full sm:max-w-4xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Muhammad Afzal.F
        </motion.h2>
        <p className="text-xl sm:text-2xl mb-6">Full Stack Developer</p>
        <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Full Stack Developer and Software Developer skilled in Java Spring Boot, RESTful API development, and microservices-based backend systems. Experienced in Flutter, React and Vue.js for frontend integration with strong UI-API connectivity. Proficient in PostgreSQL, MySQL, MongoDB, Git, and Docker. Strong foundation in data structures and algorithms.
        </p>
        <motion.a
          href="#contact"
          className="mt-6 inline-block bg-white text-blue-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-blue-100"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.a>
      </div>
    </motion.section>
  );
}

export default Home;