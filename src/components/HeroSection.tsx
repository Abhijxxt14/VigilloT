import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Eye, Wifi, Smartphone, Cloud } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services = [
    { name: 'Security', icon: Shield, color: 'text-red-400' },
    { name: 'Monitoring', icon: Eye, color: 'text-green-400' },
    { name: 'IoT Solutions', icon: Wifi, color: 'text-blue-400' },
    { name: 'Mobile Apps', icon: Smartphone, color: 'text-purple-400' },
    { name: 'Cloud Services', icon: Cloud, color: 'text-cyan-400' },
    { name: 'Real-time', icon: Zap, color: 'text-yellow-400' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with 3D effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900" />
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        animate={{
          scale: hoveredService ? 1.1 : 1,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      
      {/* 3D Animated background elements */}
      <div className="absolute inset-0 perspective-1000">
        {services.map((service, index) => (
          <motion.div
            key={service.name}
            className={`absolute ${service.color} opacity-10`}
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotateX: 0,
              rotateY: 0,
              z: 0
            }}
            animate={{
              x: hoveredService === service.name ? window.innerWidth / 2 - 100 : Math.random() * window.innerWidth,
              y: hoveredService === service.name ? window.innerHeight / 2 - 100 : Math.random() * window.innerHeight,
              rotateX: hoveredService === service.name ? 360 : Math.random() * 360,
              rotateY: hoveredService === service.name ? 360 : Math.random() * 360,
              z: hoveredService === service.name ? 100 : 0,
              scale: hoveredService === service.name ? 2.5 : 1
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <service.icon size={48} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6 perspective-1000"
          initial={{ opacity: 0, y: 50, rotateX: 45 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          Vigilant <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">IoT</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30, rotateX: 30 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          Revolutionary IoT solutions for modern surveillance and monitoring systems
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12 perspective-1000">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              className="text-center cursor-pointer group"
              initial={{ opacity: 0, y: 30, rotateY: 45 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              onMouseEnter={() => setHoveredService(service.name)}
              onMouseLeave={() => setHoveredService(null)}
              whileHover={{ 
                scale: 1.1,
                rotateY: 10,
                rotateX: -10,
                z: 50
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div 
                className={`w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 backdrop-blur flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 relative ${hoveredService === service.name ? 'shadow-2xl' : ''}`}
                animate={{
                  rotateY: hoveredService === service.name ? 360 : 0,
                  scale: hoveredService === service.name ? 1.3 : 1,
                }}
                transition={{ duration: 0.8 }}
              >
                <service.icon className={`w-8 h-8 ${hoveredService === service.name ? service.color : 'text-white'} transition-colors duration-300`} />
                
                {/* 3D Glow effect */}
                {hoveredService === service.name && (
                  <motion.div
                    className={`absolute inset-0 rounded-full ${service.color.replace('text-', 'bg-')} opacity-20 blur-lg`}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </motion.div>
              <h3 className={`text-sm font-semibold transition-colors duration-300 ${
                hoveredService === service.name ? service.color : 'text-white'
              }`}>
                {service.name}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center perspective-1000"
          initial={{ opacity: 0, y: 30, rotateX: 30 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              rotateX: -5,
              rotateY: 5,
              z: 20
            }}
            whileTap={{ scale: 0.95 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <span className="relative z-10">Get Started</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
          
          <motion.button
            className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              rotateX: 5,
              rotateY: -5,
              z: 20
            }}
            whileTap={{ scale: 0.95 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <span className="relative z-10">Learn More</span>
            <motion.div
              className="absolute inset-0 bg-white/5"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;