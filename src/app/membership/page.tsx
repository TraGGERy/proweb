"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/OptimizedHeader";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function MembershipPage() {
  const [activeTab, setActiveTab] = useState("benefits");
  
  return (
    <>
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Page Title */}
        <section className="py-10 bg-white border-b border-red-100">
          <div className="container mx-auto px-6">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
                
              <h1 className="text-4xl font-bold text-red-800 mb-4 ">Membership</h1>
              <p className="text-xl text-gray-600">
                Join our community of professionals and unlock a world of opportunities
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Membership Tabs */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center mb-10 border-b border-gray-200">
              <button
                onClick={() => setActiveTab("benefits")}
                className={`px-6 py-3 text-lg font-medium transition-colors duration-300 ${
                  activeTab === "benefits" 
                    ? "text-red-800 border-b-2 border-red-800" 
                    : "text-gray-600 hover:text-red-800"
                }`}
              >
                Benefits
              </button>
              <button
                onClick={() => setActiveTab("tiers")}
                className={`px-6 py-3 text-lg font-medium transition-colors duration-300 ${
                  activeTab === "tiers" 
                    ? "text-red-800 border-b-2 border-red-800" 
                    : "text-gray-600 hover:text-red-800"
                }`}
              >
                Membership Tiers
              </button>
              <button
                onClick={() => setActiveTab("process")}
                className={`px-6 py-3 text-lg font-medium transition-colors duration-300 ${
                  activeTab === "process" 
                    ? "text-red-800 border-b-2 border-red-800" 
                    : "text-gray-600 hover:text-red-800"
                }`}
              >
                Application Process
              </button>
              <button
                onClick={() => setActiveTab("faq")}
                className={`px-6 py-3 text-lg font-medium transition-colors duration-300 ${
                  activeTab === "faq" 
                    ? "text-red-800 border-b-2 border-red-800" 
                    : "text-gray-600 hover:text-red-800"
                }`}
              >
                FAQ
              </button>
            </div>
            
            {/* Benefits Tab */}
            {activeTab === "benefits" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-5xl mx-auto"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Membership Benefits</h2>
                
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="flex flex-col space-y-8">
                    {[
                      {
                        title: "Networking Opportunities",
                        description: "Connect with professionals across various industries through regular networking events, conferences, and our online platform.",
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        )
                      },
                      {
                        title: "Professional Development",
                        description: "Access workshops, training sessions, and resources designed to enhance your skills and advance your career.",
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                        )
                      },
                      {
                        title: "Mentorship Programs",
                        description: "Benefit from guidance and support from experienced professionals or become a mentor to share your expertise.",
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        )
                      }
                    ].map((benefit, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start p-6 bg-white rounded-xl shadow-md border-2 border-red-100"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                      >
                        <div className="flex-shrink-0 mr-4 text-red-700">{benefit.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                          <p className="text-gray-600">{benefit.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col space-y-8">
                    {[
                      {
                        title: "Business Opportunities",
                        description: "Discover potential business partnerships, clients, and collaborations through our extensive network.",
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        )
                      },
                      {
                        title: "Advocacy & Representation",
                        description: "Have your voice heard on issues affecting professionals through our advocacy initiatives and policy engagements.",
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        )
                      },
                      {
                        title: "Exclusive Resources",
                        description: "Access to research publications, industry reports, and educational materials to keep you informed and ahead.",
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        )
                      }
                    ].map((benefit, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start p-6 bg-white rounded-xl shadow-md border-2 border-red-100"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                        whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                      >
                        <div className="flex-shrink-0 mr-4 text-red-700">{benefit.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                          <p className="text-gray-600">{benefit.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Membership Tiers Tab */}
            {activeTab === "tiers" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-5xl mx-auto"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Membership Tiers</h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Standard",
                      price: "$50",
                      period: "per year",
                      description: "Perfect for professionals looking to expand their network and access basic resources.",
                      features: [
                        "Access to networking events",
                        "Monthly newsletter",
                        "Member directory listing",
                        "Discounted event tickets",
                        "Basic online resources"
                      ],
                      cta: "Join Now",
                      popular: false
                    },
                    {
                      title: "Premium",
                      price: "$120",
                      period: "per year",
                      description: "Ideal for professionals seeking enhanced opportunities and resources for career growth.",
                      features: [
                        "All Standard benefits",
                        "Mentorship program access",
                        "Professional development workshops",
                        "Industry-specific networking",
                        "Advanced online resources",
                        "Quarterly business mixers"
                      ],
                      cta: "Join Now",
                      popular: true
                    },
                    {
                      title: "Executive",
                      price: "$250",
                      period: "per year",
                      description: "Designed for leaders and executives looking for high-level connections and opportunities.",
                      features: [
                        "All Premium benefits",
                        "Executive roundtable sessions",
                        "Leadership development programs",
                        "Speaking opportunities at events",
                        "Exclusive executive networking",
                        "Policy advocacy participation",
                        "One-on-one business consulting"
                      ],
                      cta: "Join Now",
                      popular: false
                    }
                  ].map((tier, index) => (
                    <motion.div 
                      key={index}
                      className={`rounded-2xl overflow-hidden shadow-lg ${
                        tier.popular 
                          ? 'border-2 border-red-500 relative transform md:-translate-y-4' 
                          : 'border border-gray-200'
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    >
                      {tier.popular && (
                        <div className="bg-red-500 text-white text-center py-1 text-sm font-bold">
                          MOST POPULAR
                        </div>
                      )}
                      <div className="p-8 bg-white">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.title}</h3>
                        <div className="flex items-baseline mb-4">
                          <span className="text-3xl font-extrabold text-red-800">{tier.price}</span>
                          <span className="ml-1 text-gray-500">{tier.period}</span>
                        </div>
                        <p className="text-gray-600 mb-6">{tier.description}</p>
                        <ul className="space-y-3 mb-8">
                          {tier.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <button 
                          className={`w-full py-3 px-4 rounded-lg font-medium ${
                            tier.popular 
                              ? 'bg-red-800 text-white hover:bg-red-700' 
                              : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-300'
                          } transition-colors duration-300`}
                        >
                          {tier.cta}
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
            
            {/* Application Process Tab */}
            {activeTab === "process" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Application Process</h2>
                
                <div className="space-y-12">
                  {[
                    {
                      step: 1,
                      title: "Complete the Application Form",
                      description: "Fill out our online application form with your personal and professional details.",
                      action: "Start Application"
                    },
                    {
                      step: 2,
                      title: "Submit Required Documents",
                      description: "Upload your professional credentials, CV, and any other required documentation.",
                      action: "View Requirements"
                    },
                    {
                      step: 3,
                      title: "Pay Membership Fee",
                      description: "Process the payment for your selected membership tier through our secure payment system.",
                      action: "View Payment Options"
                    },
                    {
                      step: 4,
                      title: "Application Review",
                      description: "Our membership committee will review your application within 5-7 business days.",
                      action: null
                    },
                    {
                      step: 5,
                      title: "Welcome to PROWEB",
                      description: "Upon approval, you'll receive your membership package and access to all member benefits.",
                      action: null
                    }
                  ].map((step, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex-shrink-0 bg-red-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-6">
                        {step.step}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600 mb-4">{step.description}</p>
                        {step.action && (
                          <button className="text-red-800 font-medium hover:text-red-700 flex items-center">
                            {step.action}
                            <svg className="ml-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                          </button>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-12 text-center">
                  <Link 
                    href="/apply" 
                    className="inline-block bg-red-800 text-white hover:bg-red-700 px-8 py-4 rounded-lg font-medium text-center transition-colors duration-300 shadow-lg"
                  >
                    Start Your Application
                  </Link>
                </div>
              </motion.div>
            )}
            
            {/* FAQ Tab */}
            {activeTab === "faq" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  {[
                    {
                      question: "Who can become a member of PROWEB Zimbabwe?",
                      answer: "PROWEB Zimbabwe welcomes professionals from all sectors and industries in Zimbabwe. This includes business owners, executives, managers, and employees across various fields such as finance, technology, healthcare, education, and more."
                    },
                    {
                      question: "How long does the membership last?",
                      answer: "All memberships are valid for one year from the date of approval. You will receive a renewal notice approximately one month before your membership expires."
                    },
                    {
                      question: "Can I upgrade my membership tier?",
                      answer: "Yes, you can upgrade your membership tier at any time. You will only need to pay the difference between your current tier and the new tier for the remainder of your membership period."
                    },
                    {
                      question: "Are there any additional fees for events and workshops?",
                      answer: "Most regular networking events are included in your membership. Specialized workshops, conferences, and training sessions may have additional fees, but members always receive significant discounts compared to non-members."
                    },
                    {
                      question: "How can I get involved beyond just being a member?",
                      answer: "We encourage members to actively participate by joining committees, volunteering at events, becoming mentors, contributing to our newsletter, or speaking at our events. Contact our membership coordinator to discuss opportunities."
                    },
                    {
                      question: "Is there a corporate membership option?",
                      answer: "Yes, we offer corporate membership packages for organizations that want to enroll multiple employees. Please contact our membership department for customized corporate solutions and pricing."
                    }
                  ].map((faq, index) => (
                    <motion.div 
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-10 text-center">
                  <p className="text-gray-600 mb-4">Still have questions? We&apos;re here to help!</p>
                  <Link 
                    href="#footer" 
                    className="inline-block text-red-800 font-medium hover:text-red-700"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-gray-50 border-y border-red-100">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-red-800 mb-4">What Our Members Say</h2>
              <p className="text-gray-700">
                Hear from professionals who have experienced the benefits of PROWEB membership
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Joining PROWEB was one of the best decisions I've made for my career. The networking opportunities and professional development resources have been invaluable.",
                  name: "Sarah Moyo",
                  title: "Marketing Director",
                  image: "/testimonial-1.jpg"
                },
                {
                  quote: "The mentorship program at PROWEB helped me navigate challenges in my career and provided guidance that led to my promotion to a leadership position.",
                  name: "David Chikwanda",
                  title: "Financial Analyst",
                  image: "/testimonial-2.jpg"
                },
                {
                  quote: "As a business owner, PROWEB has connected me with potential clients and partners that I wouldn't have met otherwise. The return on my membership investment has been tremendous.",
                  name: "Grace Mutasa",
                  title: "CEO, Tech Solutions",
                  image: "/testimonial-3.jpg"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg border-2 border-red-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="flex items-center mb-6">
                    <div className="mr-4 w-16 h-16 relative rounded-full overflow-hidden border-2 border-red-200">
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        fill 
                        style={{objectFit: "cover"}}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">&quot;{testimonial.quote}&quot;</p>
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
              <h2 className="text-3xl font-bold mb-6">Ready to Join PROWEB Zimbabwe?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Take the next step in your professional journey and become part of our thriving community.
              </p>
              <Link 
                href="/apply" 
                className="inline-block bg-white text-red-900 hover:bg-red-50 px-8 py-4 rounded-full font-medium text-center transition-colors duration-300 shadow-lg border border-white"
              >
                Apply for Membership
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}