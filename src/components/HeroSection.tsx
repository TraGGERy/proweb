import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-red-900 text-white py-20">
      <div className="absolute inset-0 opacity-20">
        <Image 
          src="/hero-background.jpg" 
          alt="Women professionals networking" 
          fill 
          style={{objectFit: "cover"}}
          priority
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Empowering Zimbabwe&apos;s Professional Women</h1>
          <p className="text-xl mb-8">Networking, capacity building, and advocacy for women&apos;s economic empowerment since 2005.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/join" className="bg-yellow-500 text-red-900 hover:bg-yellow-400 px-6 py-3 rounded-full font-medium text-center">
              Join PROWEB
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-full font-medium text-center">
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}