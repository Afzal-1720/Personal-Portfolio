import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  const contactMethods = [
    {
      type: 'Phone',
      value: '+91 9360060297',
      link: 'tel:+919360060297',
      icon: <PhoneIcon className="h-6 sm:h-8 w-6 sm:w-8 text-blue-600" />,
    },
    {
      type: 'Email',
      value: portfolioData.contact.email,
      link: `mailto:${portfolioData.contact.email}`,
      icon: <EnvelopeIcon className="h-6 sm:h-8 w-6 sm:w-8 text-blue-600" />,
    },
    {
      type: 'LinkedIn',
      value: 'LinkedIn Profile',
      link: portfolioData.contact.linkedin,
      icon: <FaLinkedin className="h-6 sm:h-8 w-6 sm:w-8 text-blue-600" />,
    },
    {
      type: 'GitHub',
      value: 'GitHub Profile',
      link: portfolioData.contact.github,
      icon: <FaGithub className="h-6 sm:h-8 w-6 sm:w-8 text-blue-600" />,
    },
  ];

  return (
    <motion.section
      id="contact"
      className="py-12 sm:py-20 bg-gray-100"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-full sm:max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Contact</h2>
        <p className="text-base sm:text-lg mb-6 sm:mb-8 text-center">Feel free to reach out for opportunities or collaborations!</p>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:bg-blue-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {method.icon}
              <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-gray-800">{method.type}</h3>
              <p className="mt-2 text-gray-600 break-words text-sm sm:text-base text-center">{method.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;