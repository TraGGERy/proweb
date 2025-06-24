import { query } from './db';

// Sample news data for seeding the database
const newsArticles = [
  {
    title: "PROWEB Annual Conference 2023 Highlights",
    excerpt: "Over 500 professionals gathered for our annual conference focused on digital transformation and economic empowerment.",
    content: "The PROWEB Zimbabwe Annual Conference 2023 was a resounding success, bringing together over 500 professionals from various sectors across the country. The two-day event, held at the Harare International Conference Centre, featured keynote speeches, panel discussions, and workshops centered around the theme 'Digital Transformation and Economic Empowerment in Zimbabwe'.\n\nNotable speakers included the Minister of ICT, Postal and Courier Services, industry leaders from telecommunications and banking sectors, and international experts in digital innovation. Participants engaged in discussions about leveraging technology for economic growth, developing digital skills, and creating an enabling environment for innovation.\n\nThe conference also provided an excellent networking platform, with many attendees reporting valuable connections made during the event. The gala dinner on the final evening celebrated outstanding achievements of professionals who have made significant contributions to their fields and to Zimbabwe's development.",
    date: "November 15, 2023",
    author: "PROWEB Communications Team",
    category: "Events",
    image: "/news-conference.jpg",
    featured: true
  },
  {
    title: "New Mentorship Program Launched for Young Professionals",
    excerpt: "PROWEB Zimbabwe introduces a structured mentorship program connecting experienced professionals with emerging talent.",
    content: "PROWEB Zimbabwe is proud to announce the launch of our comprehensive Mentorship Program designed to bridge the gap between experienced professionals and emerging talent. The program, which will commence in January 2024, aims to foster knowledge transfer, career guidance, and professional development.\n\nThe six-month structured program will pair mentees with mentors based on career interests, skills, and development goals. Mentors will provide guidance on career advancement, leadership development, and navigating professional challenges. The program includes monthly one-on-one sessions, group workshops, and networking events.\n\n'We believe that mentorship is a powerful tool for professional growth and succession planning,' said the PROWEB Chairperson. 'By connecting our experienced members with young professionals, we're not only investing in individual careers but also in the future of Zimbabwe's professional landscape.'\n\nApplications for both mentors and mentees are now open. Interested professionals can apply through our website or contact the PROWEB secretariat for more information.",
    date: "October 28, 2023",
    author: "Professional Development Committee",
    category: "Programs",
    image: "/news-mentorship.jpg",
    featured: true
  },
  {
    title: "PROWEB Partners with Ministry of Industry for SME Support Initiative",
    excerpt: "A new partnership aims to provide professional services and support to small and medium enterprises across Zimbabwe.",
    content: "PROWEB Zimbabwe has signed a Memorandum of Understanding (MoU) with the Ministry of Industry and Commerce to launch an SME Support Initiative. The partnership will leverage the expertise of PROWEB members to provide professional services, training, and mentorship to small and medium enterprises across Zimbabwe.\n\nThe initiative will focus on key areas including business planning, financial management, digital marketing, and legal compliance. PROWEB members will volunteer their time and expertise to conduct workshops, provide consultations, and develop resources tailored to the needs of local entrepreneurs.\n\n'SMEs are the backbone of our economy, and many face challenges that could be addressed with the right professional guidance,' said the PROWEB Executive Director during the signing ceremony. 'Our members are excited to contribute their skills to support Zimbabwe's economic development through this initiative.'\n\nThe program will initially target 100 SMEs in Harare, Bulawayo, and Mutare, with plans to expand to other regions based on the pilot's success. Interested SMEs can register for the program starting December 1, 2023.",
    date: "October 15, 2023",
    author: "Partnerships Committee",
    category: "Partnerships",
    image: "/news-partnership.jpg",
    featured: false
  },
  {
    title: "Professional Women in Leadership Summit Scheduled for February 2024",
    excerpt: "The summit will focus on strategies for increasing women's representation in leadership positions across all sectors.",
    content: "PROWEB Zimbabwe is pleased to announce the Professional Women in Leadership Summit scheduled for February 15-16, 2024, at the Rainbow Towers Hotel in Harare. The summit will bring together women leaders, aspiring leaders, and allies to discuss strategies for increasing women's representation in leadership positions across all sectors.\n\nThe two-day event will feature keynote addresses, panel discussions, workshops, and networking sessions. Topics will include leadership development, overcoming gender barriers, work-life integration, and creating inclusive workplaces. The summit will also showcase success stories of women who have broken the glass ceiling in various industries.\n\n'Despite progress in recent years, women remain underrepresented in leadership positions in Zimbabwe and globally,' noted the PROWEB Gender Committee Chairperson. 'This summit aims to inspire, equip, and connect women professionals to take on leadership roles and make their mark in their respective fields.'\n\nRegistration for the summit is now open, with early bird discounts available until December 31, 2023. PROWEB members will receive special rates, and a limited number of scholarships will be available for young professionals.",
    date: "October 5, 2023",
    author: "Gender Committee",
    category: "Events",
    image: "/news-women-leadership.jpg",
    featured: false
  },
  {
    title: "PROWEB Zimbabwe Launches Digital Skills Training Program",
    excerpt: "A new initiative aims to equip professionals with essential digital skills for the modern workplace.",
    content: "In response to the growing importance of digital literacy in the workplace, PROWEB Zimbabwe has launched a comprehensive Digital Skills Training Program. The program is designed to equip professionals from various sectors with essential digital skills to enhance their productivity and competitiveness in an increasingly digital economy.\n\nThe training program covers a range of topics including data analysis, digital marketing, cloud computing, cybersecurity, and remote work tools. Courses will be delivered through a blended learning approach, combining online modules with in-person workshops conducted by industry experts.\n\n'Digital transformation is no longer optional but essential for professional success and organizational growth,' said the PROWEB Professional Development Coordinator. 'Our program aims to bridge the digital skills gap and ensure that Zimbabwean professionals can thrive in the digital age.'\n\nThe first cohort of the program will commence in January 2024, with courses scheduled throughout the year. PROWEB members will receive preferential rates, and corporate packages are available for organizations looking to upskill their teams.",
    date: "September 20, 2023",
    author: "Professional Development Committee",
    category: "Programs",
    image: "/news-digital-skills.jpg",
    featured: false
  },
  {
    title: "PROWEB Zimbabwe Celebrates 18 Years of Professional Empowerment",
    excerpt: "The organization marks its 18th anniversary with reflections on achievements and future plans.",
    content: "PROWEB Zimbabwe celebrated its 18th anniversary on September 10, 2023, marking nearly two decades of empowering professionals across the country. The milestone was commemorated with a special event at the Meikles Hotel in Harare, attended by founding members, current leadership, partners, and supporters.\n\nThe celebration included reflections on the organization's journey, from its humble beginnings with just 25 members to its current status as one of Zimbabwe's leading professional networks with over 3,000 members nationwide. Key achievements highlighted included the establishment of mentorship programs, policy advocacy initiatives, professional development workshops, and networking events that have benefited thousands of professionals.\n\n'For 18 years, PROWEB has been at the forefront of professional empowerment in Zimbabwe, creating opportunities for growth, connection, and impact,' said the PROWEB Chairperson. 'As we look to the future, we remain committed to our mission of economic empowerment and professional excellence.'\n\nThe anniversary celebration also served as a platform to unveil PROWEB's strategic plan for the next five years, which focuses on digital transformation, expanded outreach to emerging professionals, enhanced advocacy, and strengthened partnerships for greater impact.",
    date: "September 12, 2023",
    author: "PROWEB Communications Team",
    category: "Organization",
    image: "/news-anniversary.jpg",
    featured: false
  }
];

// Function to seed the news articles table
export async function seedNewsArticles() {
  try {
    // Check if articles already exist
    const checkResult = await query('SELECT COUNT(*) FROM news_articles');
    
    if (parseInt(checkResult.rows[0].count) > 0) {
      console.log('News articles already seeded, skipping...');
      return;
    }
    
    // Insert each article
    for (const article of newsArticles) {
      await query(
        `INSERT INTO news_articles 
         (title, excerpt, content, date, author, category, image, featured) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
        [article.title, article.excerpt, article.content, article.date, article.author, article.category, article.image, article.featured]
      );
    }
    
    console.log(`Seeded ${newsArticles.length} news articles successfully`);
  } catch (error) {
    console.error('Error seeding news articles:', error);
    throw error;
  }
}

// Sample gallery data for seeding the database
const galleryImages = [
  {
    title: "Annual Conference 2023",
    description: "Highlights from our flagship event featuring industry leaders and professionals from across Zimbabwe.",
    date: "November 2023",
    category: "Events",
    image: "/gallery/conference-1.jpg",
    featured: true
  },
  {
    title: "Women in Leadership Summit",
    description: "Celebrating and empowering women professionals in various leadership roles.",
    date: "October 2023",
    category: "Events",
    image: "/gallery/women-leadership.jpg",
    featured: true
  },
  {
    title: "Mentorship Program Launch",
    description: "The official launch of our structured mentorship program connecting experienced professionals with emerging talent.",
    date: "October 2023",
    category: "Programs",
    image: "/gallery/mentorship.jpg",
    featured: false
  },
  {
    title: "SME Support Initiative Signing Ceremony",
    description: "Partnership signing with the Ministry of Industry for our SME Support Initiative.",
    date: "October 2023",
    category: "Partnerships",
    image: "/gallery/partnership.jpg",
    featured: false
  },
  {
    title: "Digital Skills Workshop",
    description: "Professionals learning essential digital skills for the modern workplace.",
    date: "September 2023",
    category: "Training",
    image: "/gallery/digital-skills.jpg",
    featured: false
  },
  {
    title: "18th Anniversary Celebration",
    description: "PROWEB Zimbabwe celebrates 18 years of professional empowerment.",
    date: "September 2023",
    category: "Organization",
    image: "/gallery/anniversary.jpg",
    featured: true
  }
];

// Function to seed the gallery images table
export async function seedGalleryImages() {
  try {
    // Check if images already exist
    const checkResult = await query('SELECT COUNT(*) FROM gallery_images');
    
    if (parseInt(checkResult.rows[0].count) > 0) {
      console.log('Gallery images already seeded, skipping...');
      return;
    }
    
    // Insert each image
    for (const image of galleryImages) {
      await query(
        `INSERT INTO gallery_images 
         (title, description, date, category, image, featured) 
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [image.title, image.description, image.date, image.category, image.image, image.featured]
      );
    }
    
    console.log(`Seeded ${galleryImages.length} gallery images successfully`);
  } catch (error) {
    console.error('Error seeding gallery images:', error);
    throw error;
  }
}

// Main function to seed all data
export async function seedAllData() {
  try {
    await seedNewsArticles();
    await seedGalleryImages();
    console.log('All data seeded successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
    throw error;
  }
}