import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Headphones, Code, Users, Zap, Award } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Settings,
      title: 'Custom Installation',
      description: 'Professional installation and setup of your IoT monitoring systems with expert guidance.',
      color: 'bg-blue-500'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock technical support to ensure your systems are always running smoothly.',
      color: 'bg-green-500'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions to meet your specific monitoring and security requirements.',
      color: 'bg-purple-500'
    },
    {
      icon: Users,
      title: 'Training Programs',
      description: 'Comprehensive training for your team to maximize the potential of your IoT systems.',
      color: 'bg-orange-500'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Continuous monitoring and optimization to ensure peak performance of your systems.',
      color: 'bg-red-500'
    },
    {
      icon: Award,
      title: 'Compliance Consulting',
      description: 'Expert guidance to ensure your systems meet industry standards and regulations.',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive support services to help you get the most out of your IoT investment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={28} className="text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
              
              <motion.div
                className="mt-6 flex items-center text-blue-600 dark:text-blue-400 font-semibold cursor-pointer group-hover:translate-x-2 transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Learn More →
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;