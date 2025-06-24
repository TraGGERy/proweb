import Link from "next/link";
import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="py-16 bg-yellow-50 relative">
      <div className="absolute right-0 bottom-0 opacity-20 hidden md:block">
        <Image 
          src="/logo.png" 
          alt="PROWEB Logo" 
          width={200} 
          height={200} 
        />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl font-bold text-red-800 mb-4">Join Our Community</h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          Become part of a network of professional women committed to personal growth, mutual support, and national development.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/membership" className="bg-red-800 text-white hover:bg-red-700 px-8 py-3 rounded-full font-medium">
            Become a Member
          </Link>
          <Link href="/newsletter" className="bg-yellow-500 text-red-900 hover:bg-yellow-400 px-8 py-3 rounded-full font-medium">
            Subscribe to Newsletter
          </Link>
        </div>
      </div>
    </section>
  );
}