import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, User, MessageCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    alert('Message sent successfully!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'abhijeetsoren222@gmail.com',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 9777837771',
      color: 'text-green-500',
      bgColor: 'bg-green-500'
    },
    {
      icon: MapPin,
      title: 'Address',
      content: 'Unit 6 Ganga Nagar,Bhubaneswar,Odisha',
      color: 'text-red-500',
      bgColor: 'bg-red-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 25 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.8, 1],
              opacity: [0.2, 0.6, 0.2],
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
            Get In <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ready to transform your security with our IoT solutions? Let's discuss your needs
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 perspective-1000">
          {/* Contact Information with 3D Effects */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 45 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 relative group transform-gpu"
                  initial={{ opacity: 0, y: 20, rotateX: 30 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    rotateX: -2,
                    rotateY: 2,
                    z: 10
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* 3D Glow Effect */}
                  <div className={`absolute inset-0 ${info.bgColor} opacity-0 group-hover:opacity-5 rounded-lg blur-lg transition-opacity duration-300`} />
                  
                  <motion.div 
                    className={`w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-4 relative transform-gpu`}
                    whileHover={{ 
                      rotateY: 360,
                      scale: 1.1
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <info.icon className={`w-6 h-6 ${info.color}`} />
                    
                    {/* Icon reflection */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 rounded-full" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{info.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{info.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 p-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl text-white relative overflow-hidden transform-gpu"
              initial={{ opacity: 0, y: 20, rotateX: 30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                rotateX: -3,
                z: 15
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* 3D Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                {Array.from({ length: 10 }, (_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                ))}
              </div>
              
              <h4 className="text-xl font-bold mb-4 relative z-10">Why Choose VigilloT?</h4>
              <ul className="space-y-2 text-sm relative z-10">
                <li>✓ Cutting-edge IoT technology</li>
                <li>✓ 24/7 expert support</li>
                <li>✓ Scalable solutions</li>
                <li>✓ Proven track record</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form with 3D Effects */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -45 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.form 
              onSubmit={handleSubmit} 
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 relative transform-gpu"
              whileHover={{ 
                rotateX: -2,
                rotateY: 2,
                z: 10
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* 3D Form Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl" />
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 relative z-10">
                Send us a Message
              </h3>
              
              <div className="space-y-6 relative z-10">
                <motion.div 
                  className="relative"
                  whileFocus={{ scale: 1.02 }}
                >
                  <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                  />
                </motion.div>
                
                <motion.div 
                  className="relative"
                  whileFocus={{ scale: 1.02 }}
                >
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                  />
                </motion.div>
                
                <motion.div 
                  className="relative"
                  whileFocus={{ scale: 1.02 }}
                >
                  <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows={5}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none transition-all duration-300"
                  />
                </motion.div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 relative overflow-hidden transform-gpu"
                  whileHover={{ 
                    scale: 1.02,
                    rotateX: -2,
                    z: 5
                  }}
                  whileTap={{ scale: 0.98 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {isSubmitting ? (
                    <motion.div 
                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                  
                  {/* Button shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;