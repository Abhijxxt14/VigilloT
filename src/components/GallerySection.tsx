import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Users, Building, Shield, Zap, TrendingUp, Activity } from 'lucide-react';

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [animatedStats, setAnimatedStats] = useState({
    users: 0,
    clients: 0,
    incidents: 0,
    uptime: 0
  });

  const images = [
    'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/5935791/pexels-photo-5935791.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  const stats = [
    { 
      icon: Users, 
      label: 'Active Users', 
      value: 10000, 
      displayValue: '10,000+', 
      color: 'text-blue-500',
      bgColor: 'bg-blue-500',
      percentage: 85,
      trend: '+12%'
    },
    { 
      icon: Building, 
      label: 'Enterprise Clients', 
      value: 500, 
      displayValue: '500+', 
      color: 'text-green-500',
      bgColor: 'bg-green-500',
      percentage: 92,
      trend: '+8%'
    },
    { 
      icon: Shield, 
      label: 'Security Incidents Prevented', 
      value: 1000000, 
      displayValue: '1M+', 
      color: 'text-red-500',
      bgColor: 'bg-red-500',
      percentage: 98,
      trend: '+25%'
    },
    { 
      icon: Zap, 
      label: 'Uptime', 
      value: 99.9, 
      displayValue: '99.9%', 
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500',
      percentage: 99.9,
      trend: '+0.1%'
    }
  ];

  // Animate stats on component mount
  useEffect(() => {
    const animateValue = (start: number, end: number, duration: number, callback: (value: number) => void) => {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = start + (end - start) * easeOutQuart;
        callback(current);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      animate();
    };

    const timer = setTimeout(() => {
      animateValue(0, 10000, 2000, (value) => 
        setAnimatedStats(prev => ({ ...prev, users: Math.floor(value) }))
      );
      animateValue(0, 500, 2200, (value) => 
        setAnimatedStats(prev => ({ ...prev, clients: Math.floor(value) }))
      );
      animateValue(0, 1000000, 2500, (value) => 
        setAnimatedStats(prev => ({ ...prev, incidents: Math.floor(value) }))
      );
      animateValue(0, 99.9, 2800, (value) => 
        setAnimatedStats(prev => ({ ...prev, uptime: Math.round(value * 10) / 10 }))
      );
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const formatStatValue = (stat: typeof stats[0], animatedValue: number) => {
    if (stat.label === 'Uptime') {
      return `${animatedValue}%`;
    } else if (stat.label === 'Security Incidents Prevented') {
      return animatedValue >= 1000000 ? '1M+' : `${Math.floor(animatedValue / 1000)}K+`;
    } else if (stat.label === 'Active Users') {
      return animatedValue >= 10000 ? '10K+' : `${Math.floor(animatedValue / 1000)}K+`;
    } else {
      return `${animatedValue}+`;
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Project <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Showcasing our successful IoT implementations and achievements with interactive analytics
          </p>
        </motion.div>

        {/* Interactive Stats Section with 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative group perspective-1000"
              initial={{ opacity: 0, rotateX: 45, y: 50 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                rotateY: 5,
                rotateX: -5,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 transform-gpu">
                {/* 3D Glow Effect */}
                <div className={`absolute inset-0 ${stat.bgColor} opacity-5 rounded-2xl blur-xl group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon with 3D effect */}
                <div className={`relative w-16 h-16 mx-auto mb-4 rounded-full ${stat.bgColor} flex items-center justify-center shadow-lg transform-gpu group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                  
                  {/* Icon reflection */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20" />
                </div>

                {/* Animated Value */}
                <motion.div
                  className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1, type: "spring" }}
                  viewport={{ once: true }}
                >
                  {formatStatValue(stat, 
                    stat.label === 'Active Users' ? animatedStats.users :
                    stat.label === 'Enterprise Clients' ? animatedStats.clients :
                    stat.label === 'Security Incidents Prevented' ? animatedStats.incidents :
                    animatedStats.uptime
                  )}
                </motion.div>

                {/* Progress Bar with 3D effect */}
                <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-3 overflow-hidden">
                  <motion.div
                    className={`absolute inset-y-0 left-0 ${stat.bgColor} rounded-full shadow-lg`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.percentage}%` }}
                    transition={{ duration: 2, delay: 1 + index * 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                  
                  {/* Progress glow */}
                  <motion.div
                    className={`absolute inset-y-0 left-0 ${stat.bgColor} rounded-full opacity-50 blur-sm`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.percentage}%` }}
                    transition={{ duration: 2, delay: 1 + index * 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>

                {/* Label and Trend */}
                <div className="text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{stat.label}</p>
                  <div className="flex items-center justify-center space-x-1">
                    <TrendingUp className="w-3 h-3 text-green-500" />
                    <span className="text-xs text-green-500 font-semibold">{stat.trend}</span>
                  </div>
                </div>

                {/* Interactive Chart Lines */}
                <div className="absolute bottom-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <Activity className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Gallery with 3D Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg perspective-1000"
              initial={{ opacity: 0, rotateY: 45, z: -100 }}
              whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                rotateY: -5,
                rotateX: 5,
                z: 50,
                transition: { duration: 0.3 }
              }}
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative transform-gpu">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* 3D Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-semibold">Project {index + 1}</h3>
                    <p className="text-sm opacity-80">IoT Implementation</p>
                  </div>
                </div>

                {/* 3D Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/50 rounded-2xl transition-colors duration-300" />
                
                {/* Reflection Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Modal with 3D Effects */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-4xl max-h-[90vh] perspective-1000"
                initial={{ scale: 0.5, rotateY: 90, opacity: 0 }}
                animate={{ scale: 1, rotateY: 0, opacity: 1 }}
                exit={{ scale: 0.5, rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative transform-gpu">
                  <img
                    src={images[selectedImage]}
                    alt={`Gallery ${selectedImage + 1}`}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  />
                  
                  {/* 3D Frame Effect */}
                  <div className="absolute inset-0 border-4 border-white/20 rounded-lg" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/5 rounded-lg" />
                </div>
                
                <motion.button
                  className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors transform-gpu"
                  onClick={() => setSelectedImage(null)}
                  whileHover={{ scale: 1.1, rotateZ: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;