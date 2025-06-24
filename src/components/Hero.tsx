"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white py-24 md:py-32 overflow-hidden border-b-4 border-yellow-500">
      <div className="absolute inset-0">
        <Image 
          src="/bachground-1.png" 
          alt="Professional networking" 
          fill 
          style={{objectFit: "cover"}}
          priority
        />
      </div>

      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg shadow-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering Zimbabwe&apos;s Professional Community
          </motion.h1>
          
          <motion.p 
            className="text-xl mb-10 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Networking, capacity building, and advocacy for professional development since 2005.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/join" className="bg-white text-red-900 hover:bg-red-50 px-8 py-4 rounded-full font-medium text-center block transition-colors duration-300 shadow-lg border border-white">
                Join PROWEB
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/services" className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-4 rounded-full font-medium text-center block transition-colors duration-300 shadow-lg">
                Explore Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}