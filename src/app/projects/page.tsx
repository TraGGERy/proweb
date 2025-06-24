"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/OptimizedHeader";
import Footer from "@/components/Footer";
import { useState } from "react";

// Sample projects data - in a real application, this would come from an API or CMS
const projectsData = [
  {
    id: 1,
    title: "Women in Tech Mentorship Program",
    description: "A structured mentorship program connecting experienced women professionals in technology with emerging female talent. The program aims to increase women's representation in Zimbabwe's tech industry through knowledge transfer, career guidance, and networking opportunities.",
    category: "Education",
    teamSize: 8,
    fundingGoal: 25000,
    fundingRaised: 18750,
    status: "Active",
    startDate: "January 2023",
    endDate: "December 2023",
    image: "/IMG_7203.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Rural SME Digital Transformation",
    description: "Supporting small and medium enterprises in rural Zimbabwe to adopt digital technologies for business growth. The project provides training, equipment, and ongoing support to help rural businesses establish online presence, implement digital payment systems, and leverage e-commerce opportunities.",
    category: "Economic Development",
    teamSize: 12,
    fundingGoal: 45000,
    fundingRaised: 32000,
    status: "Active",
    startDate: "March 2023",
    endDate: "March 2025",
    image: "/IMG_7204.jpg",
    featured: true
  },
  {
    id: 3,
    title: "Youth Professional Skills Development",
    description: "Equipping young Zimbabweans with essential professional skills for the modern workplace. The program includes workshops on communication, leadership, digital literacy, financial management, and entrepreneurship, complemented by internship placements with partner organizations.",
    category: "Education",
    teamSize: 6,
    fundingGoal: 18000,
    fundingRaised: 12000,
    status: "Active",
    startDate: "June 2023",
    endDate: "May 2024",
    image: "/IMG_7448.jpg",
    featured: false
  },
  {
    id: 4,
    title: "Professional Women's Policy Advocacy",
    description: "Advocating for policies that promote gender equality in the workplace and support women's professional advancement. The project involves research, stakeholder engagement, policy brief development, and advocacy campaigns targeting key decision-makers in government and the private sector.",
    category: "Advocacy",
    teamSize: 5,
    fundingGoal: 15000,
    fundingRaised: 9000,
    status: "Active",
    startDate: "April 2023",
    endDate: "March 2024",
    image: "/IMG_7538.jpg",
    featured: false
  },
  {
    id: 5,
    title: "Community Business Incubator",
    description: "Establishing a business incubator to support emerging entrepreneurs from underserved communities. The incubator provides workspace, business development services, mentorship, and seed funding to help transform innovative ideas into sustainable businesses.",
    category: "Economic Development",
    teamSize: 10,
    fundingGoal: 60000,
    fundingRaised: 35000,
    status: "Active",
    startDate: "February 2023",
    endDate: "January 2026",
    image: "/IMG_7543.jpg",
    featured: true
  },
  {
    id: 6,
    title: "Professional Leadership Conference Series",
    description: "A quarterly conference series bringing together professionals from various sectors to discuss leadership challenges and opportunities in Zimbabwe. Each conference features keynote speeches, panel discussions, workshops, and networking sessions focused on a specific leadership theme.",
    category: "Events",
    teamSize: 7,
    fundingGoal: 20000,
    fundingRaised: 15000,
    status: "Active",
    startDate: "January 2023",
    endDate: "December 2023",
    image: "/IMG_7546.jpg",
    featured: false
  },
  {
    id: 7,
    title: "Digital Skills for Teachers",
    description: "Enhancing the digital literacy of teachers across Zimbabwe to improve educational outcomes. The project provides training on educational technology, digital content creation, online teaching methodologies, and digital assessment tools, supported by equipment donations to participating schools.",
    category: "Education",
    teamSize: 9,
    fundingGoal: 35000,
    fundingRaised: 22000,
    status: "Active",
    startDate: "May 2023",
    endDate: "April 2024",
    image: "/IMG_7202.jpg",
    featured: false
  },
  {
    id: 8,
    title: "Professional Women's Health Initiative",
    description: "Promoting health awareness and access to healthcare services for professional women. The project includes health education workshops, wellness programs, health screening events, and advocacy for workplace health policies that address women's specific health needs.",
    category: "Health",
    teamSize: 6,
    fundingGoal: 22000,
    fundingRaised: 14000,
    status: "Active",
    startDate: "July 2023",
    endDate: "June 2024",
    image: "/IMG_7463.jpg",
    featured: false
  }
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [showFundingModal, setShowFundingModal] = useState(false);
  const [fundingAmount, setFundingAmount] = useState("");
  
  // Get unique categories
  const categories = ["All", ...Array.from(new Set(projectsData.map(project => project.category)))];
  
  // Filter projects based on category and search query
  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // Featured projects for the top section
  const featuredProjects = projectsData.filter(project => project.featured);
  
  // Handle funding submission
  const handleFundingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would connect to a payment processor
    alert(`Thank you for your contribution of $${fundingAmount}! You would now be redirected to a payment gateway.`);
    setShowFundingModal(false);
    setFundingAmount("");
  };
  
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
              <h1 className="text-4xl font-bold text-red-800 mb-4">Our Projects</h1>
              <p className="text-xl text-gray-600">
                Initiatives that drive professional growth and economic empowerment in Zimbabwe
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Projects</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="relative h-48 w-full">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        style={{objectFit: "cover"}}
                      />
                      <div className="absolute top-4 left-4 bg-red-800 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {project.category}
                      </div>
                    </div>
                    <div className="p-6 flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                      
                      <div className="flex items-center mb-4">
                        <div className="mr-6">
                          <span className="block text-sm text-gray-500">Team Size</span>
                          <span className="font-bold text-gray-900">{project.teamSize} people</span>
                        </div>
                        <div>
                          <span className="block text-sm text-gray-500">Timeline</span>
                          <span className="font-bold text-gray-900">{project.startDate} - {project.endDate}</span>
                        </div>
                      </div>
                      
                      {/* Funding Progress */}
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium text-gray-700">
                            ${project.fundingRaised.toLocaleString()} raised
                          </span>
                          <span className="font-medium text-gray-700">
                            ${project.fundingGoal.toLocaleString()} goal
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-red-800 h-2.5 rounded-full" 
                            style={{ width: `${(project.fundingRaised / project.fundingGoal) * 100}%` }}
                          ></div>
                        </div>
                        <div className="text-right text-xs text-gray-500 mt-1">
                          {Math.round((project.fundingRaised / project.fundingGoal) * 100)}% funded
                        </div>
                      </div>
                    </div>
                    
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100 mt-auto">
                      <div className="flex space-x-3">
                        <button 
                          onClick={() => setActiveProject(project.id)}
                          className="flex-1 bg-white text-red-800 border border-red-800 hover:bg-red-50 px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-300"
                        >
                          Contact Team
                        </button>
                        <button 
                          onClick={() => {
                            setActiveProject(project.id);
                            setShowFundingModal(true);
                          }}
                          className="flex-1 bg-red-800 text-white hover:bg-red-700 px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-300"
                        >
                          Fund Project
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Projects Filters */}
        <section className="py-8 bg-gray-50 border-y border-gray-200">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                      selectedCategory === category 
                        ? 'bg-red-800 text-white' 
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-64 px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                />
                <svg 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
          </div>
        </section>
        
        {/* All Projects */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            {filteredProjects.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="relative h-48 w-full">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        style={{objectFit: "cover"}}
                      />
                      <div className="absolute top-4 left-4 bg-red-800 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {project.category}
                      </div>
                    </div>
                    <div className="p-6 flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                      
                      <div className="flex items-center mb-4">
                        <div className="mr-6">
                          <span className="block text-sm text-gray-500">Team Size</span>
                          <span className="font-bold text-gray-900">{project.teamSize} people</span>
                        </div>
                        <div>
                          <span className="block text-sm text-gray-500">Status</span>
                          <span className="font-bold text-green-600">{project.status}</span>
                        </div>
                      </div>
                      
                      {/* Funding Progress */}
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium text-gray-700">
                            ${project.fundingRaised.toLocaleString()} raised
                          </span>
                          <span className="font-medium text-gray-700">
                            ${project.fundingGoal.toLocaleString()} goal
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-red-800 h-2.5 rounded-full" 
                            style={{ width: `${(project.fundingRaised / project.fundingGoal) * 100}%` }}
                          ></div>
                        </div>
                        <div className="text-right text-xs text-gray-500 mt-1">
                          {Math.round((project.fundingRaised / project.fundingGoal) * 100)}% funded
                        </div>
                      </div>
                    </div>
                    
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100 mt-auto">
                      <div className="flex space-x-3">
                        <button 
                          onClick={() => setActiveProject(project.id)}
                          className="flex-1 bg-white text-red-800 border border-red-800 hover:bg-red-50 px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-300"
                        >
                          Contact Team
                        </button>
                        <button 
                          onClick={() => {
                            setActiveProject(project.id);
                            setShowFundingModal(true);
                          }}
                          className="flex-1 bg-red-800 text-white hover:bg-red-700 px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-300"
                        >
                          Fund Project
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 className="mt-4 text-lg font-medium text-gray-900">No projects found</h3>
                <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria</p>
                <button 
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Reset Filters
                </button>
              </div>
            )}
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
              <h2 className="text-3xl font-bold mb-6">Have a Project Idea?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                We&apos;re always looking for impactful initiatives that align with our mission of professional empowerment and economic development.
              </p>
              <Link 
                href="#footer" 
                className="inline-block bg-white text-red-900 hover:bg-red-50 px-8 py-4 rounded-full font-medium text-center transition-colors duration-300 shadow-lg border border-white"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Submit Your Proposal
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      
      {/* Contact Modal */}
      {activeProject !== null && !showFundingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div 
            className="bg-white rounded-xl max-w-md w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  Contact Project Team
                </h3>
                <button 
                  onClick={() => setActiveProject(null)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              <p className="text-gray-600 mb-6">
                Send a message to the team working on <span className="font-medium text-gray-900">
                  {projectsData.find(p => p.id === activeProject)?.title}
                </span>
              </p>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                    placeholder="How would you like to get involved?"
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button 
                    type="submit"
                    className="w-full bg-red-800 text-white hover:bg-red-700 px-4 py-3 rounded-lg font-medium transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
      
      {/* Funding Modal */}
      {activeProject !== null && showFundingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div 
            className="bg-white rounded-xl max-w-md w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  Support This Project
                </h3>
                <button 
                  onClick={() => {
                    setShowFundingModal(false);
                    setActiveProject(null);
                  }}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              <p className="text-gray-600 mb-6">
                Your contribution will help fund <span className="font-medium text-gray-900">
                  {projectsData.find(p => p.id === activeProject)?.title}
                </span>
              </p>
              
              <form className="space-y-4" onSubmit={handleFundingSubmit}>
                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">Contribution Amount (USD)</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input 
                      type="number" 
                      id="amount" 
                      className="w-full pl-7 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                      placeholder="Enter amount"
                      min="5"
                      value={fundingAmount}
                      onChange={(e) => setFundingAmount(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="anonymous"
                      type="checkbox"
                      className="h-4 w-4 text-red-800 border-gray-300 rounded focus:ring-red-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="anonymous" className="font-medium text-gray-700">Make my contribution anonymous</label>
                  </div>
                </div>
                
                <div className="pt-2">
                  <button 
                    type="submit"
                    className="w-full bg-red-800 text-white hover:bg-red-700 px-4 py-3 rounded-lg font-medium transition-colors duration-300"
                  >
                    Proceed to Payment
                  </button>
                </div>
                
                <p className="text-xs text-gray-500 text-center">
                  Your payment information is securely processed. By contributing, you agree to our terms and conditions.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      )}
      
      <Footer />
    </>
  );
}