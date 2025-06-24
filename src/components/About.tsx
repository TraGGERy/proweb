"use client"

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-24 bg-gray-50 border-y border-red-100">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-red-800 mb-4 border-b-2 border-red-200 pb-2 inline-block">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              PROWEB Zimbabwe is a non-partisan civil forum established in 2005 to promote the economic empowerment of Zimbabwean professionals by providing a platform for networking, capacity building, policy advocacy, and personal as well as professional development.
            </p>
            <p className="text-gray-700">
              We champion the belief that professionals, as vital contributors to society, should be at the forefront of national development and eventually control a significant portion of the country&apos;s wealth—envisioning a future where empowered individuals shape Zimbabwe&apos;s economic and social agenda.
            </p>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative h-80 rounded-xl overflow-hidden shadow-2xl border-4 border-white"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <Image 
              src="/mission-image.jpg" 
              alt="PROWEB mission in action" 
              fill 
              style={{objectFit: "cover"}}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}