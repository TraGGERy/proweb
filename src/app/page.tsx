import Header from "@/components/OptimizedHeader";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Services from "@/components/Services";
import AchievementsSection from "@/components/AchievementsSection";
import CallToAction from "@/components/CallToAction";
import ContactInfoBar from "@/components/ContactInfoBar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getOrganizationData, getWebsiteData } from "@/lib/structuredData";

// Define metadata for this page
export const metadata = {
  title: 'PROWEB Zimbabwe | Empowering Professional Women in Business',
  description: 'PROWEB Zimbabwe is dedicated to empowering professional women through networking, mentorship, training, and advocacy for economic growth and leadership development.',
  alternates: {
    canonical: 'https://prowebzimbabwe.org',
  },
};

export default function Home() {
  // Structured data for the home page
  const organizationData = getOrganizationData();
  const websiteData = getWebsiteData();
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* JSON-LD structured data */}
      <JsonLd data={organizationData} />
      <JsonLd data={websiteData} />
      
      <Header />
      <Hero />
      <Features />
      <About />
      <Services />
      <AchievementsSection />
      <CallToAction />
      <ContactInfoBar />
      <Footer />
    </div>
  );
}
