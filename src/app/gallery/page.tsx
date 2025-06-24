"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/OptimizedHeader";
import Footer from "@/components/Footer";
import { useState } from "react";

// Sample gallery data - in a real application, this would come from an API or CMS
const galleryImages = [
  {
    id: 1,
    title: "Annual Conference 2023",
    description: "Highlights from our flagship event featuring industry leaders and professionals from across Zimbabwe.",
    date: "November 2023",
    category: "Events",
    image: "/gallery/conference-1.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Women in Leadership Summit",
    description: "Celebrating and empowering women professionals in various leadership roles.",
    date: "October 2023",
    category: "Events",
    image: "/gallery/women-leadership.jpg",
    featured: true
  },
  {
    id: 3,
    title: "Mentorship Program Launch",
    description: "The official launch of our structured mentorship program connecting experienced professionals with emerging talent.",
    date: "October 2023",
    category: "Programs",
    image: "/gallery/mentorship.jpg",
    featured: false
  },
  {
    id: 4,
    title: "SME Support Initiative Signing Ceremony",
    description: "Partnership signing with the Ministry of Industry for our SME Support Initiative.",
    date: "October 2023",
    category: "Partnerships",
    image: "/gallery/partnership.jpg",
    featured: false
  },
  {
    id: 5,
    title: "Digital Skills Workshop",
    description: "Professionals learning essential digital skills for the modern workplace.",
    date: "September 2023",
    category: "Training",
    image: "/gallery/digital-skills.jpg",
    featured: false
  },
  {
    id: 6,
    title: "18th Anniversary Celebration",
    description: "PROWEB Zimbabwe celebrates 18 years of professional empowerment.",
    date: "September 2023",
    category: "Organization",
    image: "/gallery/anniversary.jpg",
    featured: true
  },
  {
    id: 7,
    title: "Networking Mixer",
    description: "Professionals connecting and building relationships at our quarterly networking event.",
    date: "August 2023",
    category: "Events",
    image: "/gallery/networking.jpg",
    featured: false
  },
  {
    id: 8,
    title: "Executive Roundtable",
    description: "Industry leaders discussing economic challenges and opportunities in Zimbabwe.",
    date: "August 2023",
    category: "Events",
    image: "/gallery/roundtable.jpg",
    featured: false
  },
  {
    id: 9,
    title: "Community Outreach Program",
    description: "PROWEB members giving back to the community through our skills-sharing initiative.",
    date: "July 2023",
    category: "Community",
    image: "/gallery/community.jpg",
    featured: false
  },
  {
    id: 10,
    title: "Leadership Development Workshop",
    description: "Professionals enhancing their leadership skills through interactive sessions.",
    date: "July 2023",
    category: "Training",
    image: "/gallery/leadership.jpg",
    featured: false
  },
  {
    id: 11,
    title: "Industry Tour",
    description: "Members visiting a leading manufacturing facility to learn about operations and innovations.",
    date: "June 2023",
    category: "Field Trips",
    image: "/gallery/industry-tour.jpg",
    featured: false
  },
  {
    id: 12,
    title: "Annual General Meeting",
    description: "Members gathering to review the organization's performance and elect new leadership.",
    date: "June 2023",
    category: "Organization",
    image: "/gallery/agm.jpg",
    featured: false
  },
  {
    id: 13,
    title: "Youth Empowerment Program",
    description: "Engaging with young professionals and students to prepare them for the workplace.",
    date: "May 2023",
    category: "Programs",
    image: "/gallery/youth.jpg",
    featured: false
  },
  {
    id: 14,
    title: "Policy Advocacy Workshop",
    description: "Working with stakeholders to develop policy recommendations for professional growth.",
    date: "May 2023",
    category: "Advocacy",
    image: "/gallery/policy.jpg",
    featured: false
  },
  {
    id: 15,
    title: "International Women's Day Celebration",
    description: "Honoring the achievements and contributions of women professionals.",
    date: "March 2023",
    category: "Events",
    image: "/gallery/womens-day.jpg",
    featured: false
  }
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeImage, setActiveImage] = useState<number | null>(null);
  
  // Get unique categories
  const categories = ["All", ...Array.from(new Set(galleryImages.map(image => image.category)))];
  
  // Filter images based on category and search query
  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = selectedCategory === "All" || image.category === selectedCategory;
    const matchesSearch = image.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          image.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // Featured images for the top section
  const featuredImages = galleryImages.filter(image => image.featured);
  
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
              <h1 className="text-4xl font-bold text-red-800 mb-4">Gallery</h1>
              <p className="text-xl text-gray-600">
                Visual highlights from PROWEB Zimbabwe's events, programs, and activities
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Featured Gallery */}
        {featuredImages.length > 0 && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Moments</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    className={`relative overflow-hidden rounded-xl shadow-lg cursor-pointer ${
                      index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    onClick={() => setActiveImage(image.id)}
                  >
                    <div className={`relative ${index === 0 ? 'h-96' : 'h-64'} w-full`}>
                      <Image 
                        src={image.image} 
                        alt={image.title} 
                        fill 
                        style={{objectFit: "cover"}}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6">
                        <span className="inline-block bg-red-800 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                          {image.category}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-1">{image.title}</h3>
                        <p className="text-gray-200 text-sm">{image.date}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Gallery Filters */}
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
                  placeholder="Search gallery..."
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
        
        {/* Gallery Grid */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            {filteredImages.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    className="relative overflow-hidden rounded-xl shadow-md cursor-pointer group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    onClick={() => setActiveImage(image.id)}
                  >
                    <div className="relative h-64 w-full">
                      <Image 
                        src={image.image} 
                        alt={image.title} 
                        fill 
                        style={{objectFit: "cover"}}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <span className="inline-block bg-red-800 text-white text-xs font-bold px-2 py-1 rounded-full mb-2">
                          {image.category}
                        </span>
                        <h3 className="text-lg font-bold text-white mb-1">{image.title}</h3>
                        <p className="text-gray-200 text-xs">{image.date}</p>
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
                <h3 className="mt-4 text-lg font-medium text-gray-900">No gallery images found</h3>
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
        <section className="py-16 bg-gray-50 border-y border-gray-200">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Next Event</h2>
                <p className="text-gray-600 mb-8">
                  Be part of our vibrant community and create memories at our upcoming events
                </p>
                <Link 
                  href="/events" 
                  className="inline-block bg-red-800 text-white hover:bg-red-700 px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                >
                  View Upcoming Events
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Image Modal */}
      {activeImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <motion.div 
            className="relative max-w-6xl max-h-[90vh] overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button 
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors duration-300"
            >
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            
            {/* Navigation buttons */}
            <button 
              onClick={() => {
                const currentIndex = galleryImages.findIndex(img => img.id === activeImage);
                const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
                setActiveImage(galleryImages[prevIndex].id);
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors duration-300"
            >
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            
            <button 
              onClick={() => {
                const currentIndex = galleryImages.findIndex(img => img.id === activeImage);
                const nextIndex = (currentIndex + 1) % galleryImages.length;
                setActiveImage(galleryImages[nextIndex].id);
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors duration-300"
            >
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
            
            {galleryImages.find(img => img.id === activeImage) && (
              <>
                <div className="relative h-[70vh] w-full">
                  <Image 
                    src={galleryImages.find(img => img.id === activeImage)!.image} 
                    alt={galleryImages.find(img => img.id === activeImage)!.title} 
                    fill 
                    style={{objectFit: "contain"}}
                  />
                </div>
                <div className="bg-black/50 backdrop-blur-sm p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{galleryImages.find(img => img.id === activeImage)!.title}</h3>
                  <p className="text-gray-300 mb-2">{galleryImages.find(img => img.id === activeImage)!.description}</p>
                  <div className="flex items-center text-sm text-gray-400">
                    <span>{galleryImages.find(img => img.id === activeImage)!.date}</span>
                    <span className="mx-2">•</span>
                    <span>{galleryImages.find(img => img.id === activeImage)!.category}</span>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
      
      <Footer />
    </>
  );
}