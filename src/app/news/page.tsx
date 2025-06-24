"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/OptimizedHeader";
import Footer from "@/components/Footer";
import { useState } from "react";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbData, getArticleData } from "@/lib/structuredData";

// Metadata is moved to a separate file (metadata.ts) since this is a client component

// Sample news data - in a real application, this would come from an API or CMS
const newsArticles = [
  {
    id: 1,
    title: "PROWEB Annual Conference 2023 Highlights",
    excerpt: "Over 500 professionals gathered for our annual conference focused on digital transformation and economic empowerment.",
    content: "The PROWEB Zimbabwe Annual Conference 2023 was a resounding success, bringing together over 500 professionals from various sectors across the country. The two-day event, held at the Harare International Conference Centre, featured keynote speeches, panel discussions, and workshops centered around the theme 'Digital Transformation and Economic Empowerment in Zimbabwe'.\n\nNotable speakers included the Minister of ICT, Postal and Courier Services, industry leaders from telecommunications and banking sectors, and international experts in digital innovation. Participants engaged in discussions about leveraging technology for economic growth, developing digital skills, and creating an enabling environment for innovation.\n\nThe conference also provided an excellent networking platform, with many attendees reporting valuable connections made during the event. The gala dinner on the final evening celebrated outstanding achievements of professionals who have made significant contributions to their fields and to Zimbabwe's development.",
    date: "November 15, 2023",
    author: "PROWEB Communications Team",
    category: "Events",
    image: "/IMG_7546.jpg",
    featured: true
  },
  {
    id: 2,
    title: "New Mentorship Program Launched for Young Professionals",
    excerpt: "PROWEB Zimbabwe introduces a structured mentorship program connecting experienced professionals with emerging talent.",
    content: "PROWEB Zimbabwe is proud to announce the launch of our comprehensive Mentorship Program designed to bridge the gap between experienced professionals and emerging talent. The program, which will commence in January 2024, aims to foster knowledge transfer, career guidance, and professional development.\n\nThe six-month structured program will pair mentees with mentors based on career interests, skills, and development goals. Mentors will provide guidance on career advancement, leadership development, and navigating professional challenges. The program includes monthly one-on-one sessions, group workshops, and networking events.\n\n'We believe that mentorship is a powerful tool for professional growth and succession planning,' said the PROWEB Chairperson. 'By connecting our experienced members with young professionals, we're not only investing in individual careers but also in the future of Zimbabwe's professional landscape.'\n\nApplications for both mentors and mentees are now open. Interested professionals can apply through our website or contact the PROWEB secretariat for more information.",
    date: "October 28, 2023",
    author: "Professional Development Committee",
    category: "Programs",
    image: "/IMG_7546 (1).jpg",
    featured: true
  },
  {
    id: 3,
    title: "PROWEB Partners with Ministry of Industry for SME Support Initiative",
    excerpt: "A new partnership aims to provide professional services and support to small and medium enterprises across Zimbabwe.",
    content: "PROWEB Zimbabwe has signed a Memorandum of Understanding (MoU) with the Ministry of Industry and Commerce to launch an SME Support Initiative. The partnership will leverage the expertise of PROWEB members to provide professional services, training, and mentorship to small and medium enterprises across Zimbabwe.\n\nThe initiative will focus on key areas including business planning, financial management, digital marketing, and legal compliance. PROWEB members will volunteer their time and expertise to conduct workshops, provide consultations, and develop resources tailored to the needs of local entrepreneurs.\n\n'SMEs are the backbone of our economy, and many face challenges that could be addressed with the right professional guidance,' said the PROWEB Executive Director during the signing ceremony. 'Our members are excited to contribute their skills to support Zimbabwe's economic development through this initiative.'\n\nThe program will initially target 100 SMEs in Harare, Bulawayo, and Mutare, with plans to expand to other regions based on the pilot's success. Interested SMEs can register for the program starting December 1, 2023.",
    date: "October 15, 2023",
    author: "Partnerships Committee",
    category: "Partnerships",
    image: "/IMG_7202.jpg",
    featured: false
  },
  {
    id: 4,
    title: "Professional Women in Leadership Summit Scheduled for February 2024",
    excerpt: "The summit will focus on strategies for increasing women's representation in leadership positions across all sectors.",
    content: "PROWEB Zimbabwe is pleased to announce the Professional Women in Leadership Summit scheduled for February 15-16, 2024, at the Rainbow Towers Hotel in Harare. The summit will bring together women leaders, aspiring leaders, and allies to discuss strategies for increasing women's representation in leadership positions across all sectors.\n\nThe two-day event will feature keynote addresses, panel discussions, workshops, and networking sessions. Topics will include leadership development, overcoming gender barriers, work-life integration, and creating inclusive workplaces. The summit will also showcase success stories of women who have broken the glass ceiling in various industries.\n\n'Despite progress in recent years, women remain underrepresented in leadership positions in Zimbabwe and globally,' noted the PROWEB Gender Committee Chairperson. 'This summit aims to inspire, equip, and connect women professionals to take on leadership roles and make their mark in their respective fields.'\n\nRegistration for the summit is now open, with early bird discounts available until December 31, 2023. PROWEB members will receive special rates, and a limited number of scholarships will be available for young professionals.",
    date: "October 5, 2023",
    author: "Gender Committee",
    category: "Events",
    image: "/IMG_7204.jpg",
    featured: false
  },
  {
    id: 5,
    title: "PROWEB Zimbabwe Launches Digital Skills Training Program",
    excerpt: "A new initiative aims to equip professionals with essential digital skills for the modern workplace.",
    content: "In response to the growing importance of digital literacy in the workplace, PROWEB Zimbabwe has launched a comprehensive Digital Skills Training Program. The program is designed to equip professionals from various sectors with essential digital skills to enhance their productivity and competitiveness in an increasingly digital economy.\n\nThe training program covers a range of topics including data analysis, digital marketing, cloud computing, cybersecurity, and remote work tools. Courses will be delivered through a blended learning approach, combining online modules with in-person workshops conducted by industry experts.\n\n'Digital transformation is no longer optional but essential for professional success and organizational growth,' said the PROWEB Professional Development Coordinator. 'Our program aims to bridge the digital skills gap and ensure that Zimbabwean professionals can thrive in the digital age.'\n\nThe first cohort of the program will commence in January 2024, with courses scheduled throughout the year. PROWEB members will receive preferential rates, and corporate packages are available for organizations looking to upskill their teams.",
    date: "September 20, 2023",
    author: "Professional Development Committee",
    category: "Programs",
    image: "/IMG_7448.jpg",
    featured: false
  },
  {
    id: 6,
    title: "PROWEB Zimbabwe Celebrates 18 Years of Professional Empowerment",
    excerpt: "The organization marks its 18th anniversary with reflections on achievements and future plans.",
    content: "PROWEB Zimbabwe celebrated its 18th anniversary on September 10, 2023, marking nearly two decades of empowering professionals across the country. The milestone was commemorated with a special event at the Meikles Hotel in Harare, attended by founding members, current leadership, partners, and supporters.\n\nThe celebration included reflections on the organization's journey, from its humble beginnings with just 25 members to its current status as one of Zimbabwe's leading professional networks with over 3,000 members nationwide. Key achievements highlighted included the establishment of mentorship programs, policy advocacy initiatives, professional development workshops, and networking events that have benefited thousands of professionals.\n\n'For 18 years, PROWEB has been at the forefront of professional empowerment in Zimbabwe, creating opportunities for growth, connection, and impact,' said the PROWEB Chairperson. 'As we look to the future, we remain committed to our mission of economic empowerment and professional excellence.'\n\nThe anniversary celebration also served as a platform to unveil PROWEB's strategic plan for the next five years, which focuses on digital transformation, expanded outreach to emerging professionals, enhanced advocacy, and strengthened partnerships for greater impact.",
    date: "September 12, 2023",
    author: "PROWEB Communications Team",
    category: "Organization",
    image: "/IMG_7543.jpg",
    featured: false
  }
];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArticle, setActiveArticle] = useState<number | null>(null);
  
  // Structured data for the news page
  const breadcrumbData = getBreadcrumbData([
    { name: 'Home', url: 'https://prowebzimbabwe.org/' },
    { name: 'News', url: 'https://prowebzimbabwe.org/news' }
  ]);
  
  // Generate article structured data for featured articles
  const featuredArticlesData = newsArticles
    .filter(article => article.featured)
    .map(article => getArticleData({
      headline: article.title,
      description: article.excerpt,
      image: `https://prowebzimbabwe.org${article.image}`,
      datePublished: new Date(article.date).toISOString(),
      dateModified: new Date(article.date).toISOString(),
      author: article.author
    }));
  
  // Get unique categories
  const categories = ["All", ...Array.from(new Set(newsArticles.map(article => article.category)))];
  
  // Filter articles based on category and search query
  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // Featured articles for the top section
  const featuredArticles = newsArticles.filter(article => article.featured);
  
  return (
    <>
      {/* JSON-LD structured data */}
      <JsonLd data={breadcrumbData} />
      {featuredArticlesData.map((articleData, index) => (
        <JsonLd key={`article-${index}`} data={articleData} />
      ))}
      
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
              <h1 className="text-4xl font-bold text-red-800 mb-4">News & Updates</h1>
              <p className="text-xl text-gray-600">
                Stay informed about PROWEB Zimbabwe&apos;s latest activities, events, and initiatives
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured News</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {featuredArticles.map((article, index) => (
                  <motion.div
                    key={article.id}
                    className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="relative h-64 w-full">
                      <Image 
                        src={article.image} 
                        alt={article.title} 
                        fill 
                        style={{objectFit: "cover"}}
                      />
                      <div className="absolute top-4 left-4 bg-red-800 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {article.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span>{article.date}</span>
                        <span className="mx-2">•</span>
                        <span>{article.author}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                      <button 
                        onClick={() => setActiveArticle(article.id)}
                        className="text-red-800 font-medium hover:text-red-700 flex items-center"
                      >
                        Read More
                        <svg className="ml-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* News Filters */}
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
                  placeholder="Search news..."
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
        
        {/* News Articles */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            {filteredArticles.length > 0 ? (
              <div className="grid md:grid-cols-3 gap-8">
                {filteredArticles.map((article, index) => (
                  <motion.div
                    key={article.id}
                    className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="relative h-48 w-full">
                      <Image 
                        src={article.image} 
                        alt={article.title} 
                        fill 
                        style={{objectFit: "cover"}}
                      />
                      <div className="absolute top-4 left-4 bg-red-800 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {article.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span>{article.date}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{article.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm line-clamp-3">{article.excerpt}</p>
                      <button 
                        onClick={() => setActiveArticle(article.id)}
                        className="text-red-800 text-sm font-medium hover:text-red-700 flex items-center"
                      >
                        Read More
                        <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 className="mt-4 text-lg font-medium text-gray-900">No news articles found</h3>
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
        
        {/* Newsletter Signup */}
        <section className="py-16 bg-gray-50 border-y border-gray-200">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
                <p className="text-gray-600 mb-8">
                  Subscribe to our newsletter to receive the latest news and updates directly in your inbox
                </p>
                <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                  />
                  <button className="bg-red-800 text-white hover:bg-red-700 px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Article Modal */}
      {activeArticle !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div 
            className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {newsArticles.find(article => article.id === activeArticle) && (
              <div>
                <div className="relative h-64 w-full">
                  <Image 
                    src={newsArticles.find(article => article.id === activeArticle)!.image} 
                    alt={newsArticles.find(article => article.id === activeArticle)!.title} 
                    fill 
                    style={{objectFit: "cover"}}
                  />
                  <button 
                    onClick={() => setActiveArticle(null)}
                    className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-300"
                  >
                    <svg className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                  <div className="absolute top-4 left-4 bg-red-800 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {newsArticles.find(article => article.id === activeArticle)!.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span>{newsArticles.find(article => article.id === activeArticle)!.date}</span>
                    <span className="mx-2">•</span>
                    <span>{newsArticles.find(article => article.id === activeArticle)!.author}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {newsArticles.find(article => article.id === activeArticle)!.title}
                  </h2>
                  <div className="prose max-w-none text-gray-700">
                    {newsArticles.find(article => article.id === activeArticle)!.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Share this article</h3>
                    <div className="flex space-x-4">
                      <button className="text-blue-600 hover:text-blue-800">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </button>
                      <button className="text-blue-400 hover:text-blue-600">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </button>
                      <button className="text-blue-500 hover:text-blue-700">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
      
      <Footer />
    </>
  );
}