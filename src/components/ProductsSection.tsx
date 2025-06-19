import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Smartphone, Shield, Wifi, Monitor, Cloud } from 'lucide-react';

const ProductsSection: React.FC = () => {
  const products = [
    {
      icon: Camera,
      title: 'VigilloT Cam Pro',
      description: 'AI-powered surveillance camera with 4K resolution and night vision',
      price: '$299',
      features: ['4K Ultra HD', 'Night Vision', 'AI Detection', 'Cloud Storage'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'VigilloT Mobile',
      description: 'Complete mobile app for monitoring and controlling your IoT devices',
      price: 'Free',
      features: ['Real-time Alerts', 'Remote Control', 'Analytics', 'Multi-device'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'VigilloT Security Hub',
      description: 'Central security management system for enterprise solutions',
      price: '$999',
      features: ['Multi-site Management', 'Advanced Analytics', '24/7 Monitoring', 'Custom Alerts'],
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section id="products" className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              scale: [1, 2, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
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
            Our <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive IoT solutions designed for modern security needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 perspective-1000">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 relative group transform-gpu"
              initial={{ opacity: 0, y: 50, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                rotateX: -5,
                rotateY: index % 2 === 0 ? 5 : -5,
                scale: 1.02,
                z: 50
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* 3D Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-0 group-hover:opacity-5 rounded-2xl blur-xl transition-opacity duration-300`} />
              
              <motion.div
                className={`w-16 h-16 rounded-xl bg-gradient-to-r ${product.color} flex items-center justify-center mb-6 shadow-lg relative transform-gpu`}
                whileHover={{ 
                  rotateY: 360,
                  scale: 1.1
                }}
                transition={{ duration: 0.8 }}
              >
                <product.icon size={32} className="text-white" />
                
                {/* Icon reflection */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 rounded-xl" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {product.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {product.description}
              </p>
              
              <div className="mb-6">
                <motion.span 
                  className="text-3xl font-bold text-gray-900 dark:text-white"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {product.price}
                </motion.span>
                {product.price !== 'Free' && <span className="text-gray-600 dark:text-gray-400">/device</span>}
              </div>
              
              <ul className="space-y-2 mb-8">
                {product.features.map((feature, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-center text-gray-600 dark:text-gray-400"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * idx }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-green-500 rounded-full mr-3"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: idx * 0.2
                      }}
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>
              
              <motion.button
                className={`w-full py-3 bg-gradient-to-r ${product.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 relative overflow-hidden transform-gpu`}
                whileHover={{ 
                  scale: 1.05,
                  rotateX: -2,
                  z: 10
                }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <span className="relative z-10">Learn More</span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>

              {/* 3D Border Effect */}
              <div className="absolute inset-0 border border-transparent group-hover:border-white/20 rounded-2xl transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;