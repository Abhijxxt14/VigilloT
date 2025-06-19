import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Zap, Eye, Wifi, Brain, Lock } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const features = [
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Multi-layered security protocols with real-time threat detection and prevention systems that adapt to emerging cyber threats.',
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      accentColor: 'text-red-500'
    },
    {
      icon: Eye,
      title: 'Smart Monitoring',
      description: 'AI-powered surveillance with intelligent pattern recognition, behavioral analysis, and predictive alerts for proactive security.',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      accentColor: 'text-green-500'
    },
    {
      icon: Wifi,
      title: 'IoT Integration',
      description: 'Seamless integration with existing IoT infrastructure, supporting thousands of devices with unified management protocols.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      accentColor: 'text-blue-500'
    },
    {
      icon: Brain,
      title: 'AI Analytics',
      description: 'Machine learning algorithms for predictive analytics, anomaly detection, and intelligent insights from your data streams.',
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      accentColor: 'text-purple-500'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Lightning-fast data processing with sub-millisecond latency, ensuring immediate response to critical security events.',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      accentColor: 'text-yellow-500'
    },
    {
      icon: Lock,
      title: 'Data Privacy',
      description: 'End-to-end encryption with zero-knowledge architecture ensuring your sensitive data remains completely private and secure.',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      accentColor: 'text-indigo-500'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, features.length]);

  const currentFeature = features[currentIndex];

  const cardVariants = {
    enter: {
      x: 300,
      opacity: 0,
      scale: 0.8,
      rotateY: 45
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: {
      x: -300,
      opacity: 0,
      scale: 0.8,
      rotateY: -45,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 2
      }
    }
  };

  const floatingElements = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 3 + 2
  }));

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className={`absolute w-${Math.floor(element.size/4)} h-${Math.floor(element.size/4)} ${currentFeature.accentColor} opacity-5 rounded-full`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              ease: "easeInOut"
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
            Powerful <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover the cutting-edge capabilities that make VigilloT the ultimate IoT monitoring solution
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Feature Card */}
          <div className="flex justify-center mb-12">
            <div 
              className="relative w-full max-w-2xl h-96 perspective-1000"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  className={`absolute inset-0 ${currentFeature.bgColor} rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 p-12 cursor-pointer`}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Card Content */}
                  <div className="text-center h-full flex flex-col justify-center relative">
                    {/* Animated Icon */}
                    <motion.div
                      className={`w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-r ${currentFeature.color} flex items-center justify-center shadow-xl relative`}
                      variants={iconVariants}
                      initial="initial"
                      animate="animate"
                    >
                      <currentFeature.icon size={48} className="text-white" />
                      
                      {/* Icon glow effect */}
                      <motion.div
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${currentFeature.color} opacity-30`}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 0.1, 0.3]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                    
                    {/* Title with typing effect */}
                    <motion.h3
                      className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      {currentFeature.title}
                    </motion.h3>
                    
                    {/* Description with stagger effect */}
                    <motion.p
                      className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      {currentFeature.description}
                    </motion.p>

                    {/* Progress indicator */}
                    <motion.div
                      className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      <motion.div
                        className={`h-full bg-gradient-to-r ${currentFeature.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 4, ease: "linear" }}
                        key={currentIndex}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mb-8">
            {features.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 5000);
                }}
                className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-12 h-3' 
                    : 'w-3 h-3 hover:w-6'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className={`absolute inset-0 rounded-full ${
                  index === currentIndex 
                    ? `bg-gradient-to-r ${features[index].color}` 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`} />
                
                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 bg-white/30 rounded-full"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Feature Preview Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                  index === currentIndex
                    ? `${feature.bgColor} ring-2 ring-offset-2 ring-offset-gray-50 dark:ring-offset-gray-900`
                    : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
                } ${
                  index === currentIndex 
                    ? `ring-${feature.accentColor.split('-')[1]}-500` 
                    : ''
                }`}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 5000);
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center`}>
                  <feature.icon size={20} className="text-white" />
                </div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white text-center">
                  {feature.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;