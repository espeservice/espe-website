'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const imageVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6 }
};

export function ServicesOverview() {
  const features = [
    {
      title: "Seamless Service Experience",
      description: "Our platform connects you with trusted professionals in minutes, not days. Experience hassle-free service booking and management with our intuitive interface. From booking to completion, we ensure a smooth journey for both customers and service providers.",
      image: "/images/seamless-experience.jpg",
      imagePosition: "left"
    },
    {
      title: "Verified Professionals",
      description: "Every service provider on our platform undergoes rigorous verification, ensuring quality and reliability for every service. Our comprehensive vetting process includes background checks, skill assessments, and customer reviews to maintain the highest standards.",
      image: "/images/verified-professionals.jpg",
      imagePosition: "right"
    },
    {
      title: "Real-time Tracking",
      description: "Stay informed with live updates on your service requests. Track progress, communicate with providers, and manage everything in one place. Our advanced tracking system keeps you updated at every step of your service journey.",
      image: "/images/real-time-tracking.jpg",
      imagePosition: "left"
    }
  ];

  return (
    <motion.div 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.div 
        className="text-center mb-12"
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-semibold text-gray-900 mb-3">
          Discover ESPE Service
        </h2>
        <motion.div 
          className="w-16 h-1 bg-[#248c89] mx-auto mb-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Your trusted platform for professional services
        </p>
      </motion.div>

      <div className="space-y-24">
        {features.map((feature, index) => (
          <motion.div 
            key={index} 
            className={`flex flex-col ${feature.imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Image Section */}
            <motion.div 
              className="w-full md:w-1/2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
                variants={imageVariants}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
              </motion.div>
            </motion.div>

            {/* Text Section */}
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: feature.imagePosition === 'right' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center gap-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-[#248c89] flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {index === 0 && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      )}
                      {index === 1 && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      )}
                      {index === 2 && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      )}
                    </svg>
                  </motion.div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                </motion.div>
                <motion.p 
                  className="text-lg text-gray-600 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {feature.description}
                </motion.p>
                <motion.div 
                  className="mt-6 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-12 h-12">
                    <motion.div 
                      className="absolute inset-0 border-2 border-[#248c89] rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div 
                      className="absolute inset-2 border-2 border-[#248c89]/50 rounded-full"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div 
                      className="absolute inset-4 border-2 border-[#248c89]/30 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
} 