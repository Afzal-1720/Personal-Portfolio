import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-20 bg-gray-100"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {portfolioData.projects.map((project, index) => (
            <a
              key={index}
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover bg-gray-100"
                  onError={(e) =>
                    (e.target.src =
                      'https://via.placeholder.com/400x200?text=Project+Image')
                  }
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-600">{project.duration}</p>
                  <p className="mt-2 text-gray-700">{project.description}</p>
                  <p className="mt-2 text-blue-600">
                    Tech: {project.tech.join(', ')}
                  </p>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
