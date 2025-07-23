import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-12 sm:py-20 bg-white"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-full sm:max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(portfolioData.skills).map(([category, items]) => (
            <div key={category} className="p-3 sm:p-4 bg-gray-50 rounded-lg shadow">
              <h3 className="text-base sm:text-lg font-semibold mb-2">{category}</h3>
              <ul className="list-disc list-inside">
                {items.map((item, index) => (
                  <li key={index} className="text-gray-700 text-sm sm:text-base">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;