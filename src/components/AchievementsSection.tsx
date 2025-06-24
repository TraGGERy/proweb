import Image from "next/image";
import Link from "next/link";

export default function AchievementsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-red-800 mb-2 text-center">Celebrating Achievements</h2>
        <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Recognizing and honoring the success stories of Zimbabwean women
        </p>
        
        <div className="bg-red-800 text-white rounded-lg p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image 
              src="/IMG_7543.jpg" 
              alt="Awards ceremony" 
              fill 
              style={{objectFit: "cover"}}
            />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Women Achievers Awards</h3>
            <p className="mb-6 max-w-3xl">
              Our annual Women Achievers Awards celebrate exceptional women who have demonstrated outstanding leadership, innovation, and impact in their respective fields. These awards not only recognize individual excellence but also inspire the next generation of women leaders.
            </p>
            <Link href="/awards" className="inline-block bg-yellow-500 text-red-900 hover:bg-yellow-400 px-6 py-3 rounded-full font-medium">
              Learn About Our Awards
            </Link>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 bg-red-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-red-800 mb-4">PROWEB GEMS Magazine</h3>
            <p className="text-gray-700 mb-4">
              Our quarterly publication showcases inspiring stories, professional advice, and the latest trends affecting women in business and leadership across Zimbabwe.
            </p>
            <Link href="/magazine" className="text-red-800 font-medium hover:text-red-600 flex items-center">
              Read Latest Issue
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          <div className="md:w-1/2 bg-red-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-red-800 mb-4">Community Impact Projects</h3>
            <p className="text-gray-700 mb-4">
              From free health services to grassroots capacity building, our community initiatives extend the benefits of women&apos;s empowerment to broader society.
            </p>
            <Link href="/impact" className="text-red-800 font-medium hover:text-red-600 flex items-center">
              Explore Our Impact
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}