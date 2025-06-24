"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/OptimizedHeader";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

export default function AboutPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const heroImages = [
    "/about-hero-1.jpg",
    "/about-hero-2.jpg",
    "/about-hero-3.jpg"
  ];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section with rotating images */}
        <section className="relative bg-gradient-to-br from-red-900 to-red-800 text-white py-20">
          <div className="absolute inset-0 opacity-20">
            {heroImages.map((img, index) => (
              <motion.div
                key={img}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: currentImage === index ? 1 : 0,
                  zIndex: currentImage === index ? 10 : 0
                }}
                transition={{ duration: 1.5 }}
              >
                <Image 
                  src={img} 
                  alt={`PROWEB Zimbabwe - Image ${index + 1}`} 
                  fill 
                  style={{objectFit: "cover"}}
                  priority={index === 0}
                />
              </motion.div>
            ))}
          </div>
          
          <div className="container mx-auto px-6 relative z-20">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">About PROWEB Zimbabwe</h1>
              <p className="text-xl mb-8 text-red-50">
                Empowering professionals across Zimbabwe since 2005
              </p>
              
              {/* Image indicators */}
              <div className="flex justify-center space-x-2 mt-8">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentImage === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Rest of the page content remains unchanged */}
        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-red-800 mb-6 border-b-2 border-red-200 pb-2 inline-block">Our Mission</h2>
                <p className="text-gray-700 mb-6">
                  PROWEB Zimbabwe is a non-partisan civil forum established in 2005 to promote the economic empowerment of Zimbabwean professionals by providing a platform for networking, capacity building, policy advocacy, and personal as well as professional development.
                </p>
                <p className="text-gray-700">
                  We champion the belief that professionals, as vital contributors to society, should be at the forefront of national development and eventually control a significant portion of the country&apos;s wealth—envisioning a future where empowered individuals shape Zimbabwe&apos;s economic and social agenda.
                </p>
              </motion.div>
              
              <motion.div
                className="relative h-80 rounded-xl overflow-hidden shadow-2xl border-4 border-white"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Image 
                  src="/mission-image.jpg" 
                  alt="PROWEB mission in action" 
                  fill 
                  style={{objectFit: "cover"}}
                />
              </motion.div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
              <motion.div
                className="relative h-80 rounded-xl overflow-hidden shadow-2xl border-4 border-white md:order-1 order-2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Image 
                  src="/vision-image.jpg" 
                  alt="PROWEB vision" 
                  fill 
                  style={{objectFit: "cover"}}
                />
              </motion.div>
              
              <motion.div
                className="md:order-2 order-1"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-red-800 mb-6 border-b-2 border-red-200 pb-2 inline-block">Our Vision</h2>
                <p className="text-gray-700 mb-6">
                  We envision a Zimbabwe where professionals are economically empowered, actively participating in wealth creation and contributing significantly to the nation&apos;s development.
                </p>
                <p className="text-gray-700">
                  PROWEB aims to be the leading platform that enables professionals to network effectively, develop their skills, and advocate for policies that create an enabling environment for professional growth and economic participation.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Core Values */}
        <section className="py-16 bg-gray-50 border-y border-red-100">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-red-800 mb-4">Our Core Values</h2>
              <p className="text-gray-700">
                The principles that guide our work and define our organizational culture
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Excellence",
                  description: "We strive for the highest standards in all our endeavors, promoting quality and professionalism in everything we do.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                },
                {
                  title: "Integrity",
                  description: "We uphold honesty, transparency, and ethical conduct in all our interactions and operations.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "Collaboration",
                  description: "We believe in the power of working together, sharing knowledge, and building strong networks for mutual growth.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                },
                {
                  title: "Innovation",
                  description: "We embrace creativity and forward-thinking approaches to address challenges and create opportunities.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )
                },
                {
                  title: "Inclusivity",
                  description: "We value diversity and ensure that our programs and initiatives are accessible to professionals from all backgrounds.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )
                },
                {
                  title: "Empowerment",
                  description: "We are committed to equipping professionals with the tools, knowledge, and opportunities they need to succeed.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg border-2 border-red-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="mb-4 text-red-700">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* History Timeline */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-red-800 mb-4">Our Journey</h2>
              <p className="text-gray-700">
                The evolution of PROWEB Zimbabwe from its founding to the present day
              </p>
            </motion.div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-200"></div>
              
              {[
                {
                  year: "2005",
                  title: "Foundation",
                  description: "PROWEB Zimbabwe was established as a forum for professional women to network and support each other."
                },
                {
                  year: "2008",
                  title: "First National Conference",
                  description: "Organized the inaugural national conference bringing together professionals from across Zimbabwe."
                },
                {
                  year: "2012",
                  title: "Expansion of Programs",
                  description: "Launched mentorship programs and expanded services to include business advisory and leadership training."
                },
                {
                  year: "2015",
                  title: "10th Anniversary",
                  description: "Celebrated a decade of empowering professionals with a gala event and the launch of a scholarship program."
                },
                {
                  year: "2018",
                  title: "Policy Advocacy Initiative",
                  description: "Began active engagement with policymakers to advocate for professional development and economic empowerment."
                },
                {
                  year: "2023",
                  title: "Digital Transformation",
                  description: "Embraced technology to expand reach and impact through online programs and digital networking platforms."
                }
              ].map((event, index) => (
                <motion.div
                  key={index}
                  className={`relative mb-12 ${index % 2 === 0 ? 'md:ml-auto md:mr-[50%]' : 'md:mr-auto md:ml-[50%]'} md:w-[45%] z-10`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-red-100 relative">
                    {/* Timeline dot */}
                    <div className="absolute top-6 md:top-1/2 md:transform md:-translate-y-1/2 w-6 h-6 rounded-full bg-red-700 border-4 border-white shadow-lg left-[-3rem] md:left-auto md:right-[-3rem]"></div>
                    
                    <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold mb-3">
                      {event.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-red-900 to-red-800 text-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Become part of a network of professionals dedicated to growth, development, and making a positive impact in Zimbabwe.
              </p>
              <Link 
                href="/membership" 
                className="inline-block bg-white text-red-900 hover:bg-red-50 px-8 py-4 rounded-full font-medium text-center transition-colors duration-300 shadow-lg border border-white"
              >
                Become a Member
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}