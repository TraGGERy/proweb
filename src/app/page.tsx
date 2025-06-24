import Image from "next/image";
import Link from "next/link";
import Header from "@/components/OptimizedHeader";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Services from "@/components/Services";
import AchievementsSection from "@/components/AchievementsSection";
import CallToAction from "@/components/CallToAction";
import ContactInfoBar from "@/components/ContactInfoBar";
import Footer from "@/components/Footer";
import { auth } from "@clerk/nextjs/server";

export default function Home() {
  
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
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
