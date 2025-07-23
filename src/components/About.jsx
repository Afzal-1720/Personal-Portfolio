import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

function About() {
  return (
    <motion.section
      id="about"
      className="py-12 sm:py-20 bg-white"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-full sm:max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">About Me</h2>

        <div className="flex flex-col items-center gap-6 sm:gap-10">
          {/* Profile Image */}
          <div className="w-full flex justify-center">
            <img
              src={profileImg}
              className="w-48 h-48 sm:w-80 sm:h-80 object-cover rounded-full shadow-lg border-4 border-gray-200"
            />
          </div>

          {/* Text Content */}
          <div className="w-full text-center">
            <p className="text-base sm:text-lg leading-relaxed">
              I'm a Computer Science student at RIT Chennai, passionate about full stack development,
              artificial intelligence, and machine learning. I specialize in building user-friendly applications
              using technologies like <strong>Flutter</strong>, <strong>Spring Boot</strong>, <strong>FastAPI</strong>,
              and <strong>React</strong>, and handling databases like <strong>PostgreSQL</strong> and <strong>MongoDB</strong>.
              <br /><br />
              My goal is to create impactful solutions that enhance user experiences and drive innovation.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;