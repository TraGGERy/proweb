import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-red-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              PROWEB Zimbabwe is a non-partisan civil forum established in 2005 to promote the economic empowerment of Zimbabwean women by providing a platform for networking, capacity building, policy advocacy, and personal as well as professional development.
            </p>
            <p className="text-gray-700">
              We champion the belief that women, as vital contributors to society, should be at the forefront of national development and eventually control a significant portion of the country's wealth—envisioning a future where empowered women shape Zimbabwe's economic and social agenda.
            </p>
          </div>
          <div className="md:w-1/2 relative h-80 rounded-lg overflow-hidden shadow-xl">
            <Image 
              src="/mission-image.jpg" 
              alt="PROWEB mission in action" 
              fill 
              style={{objectFit: "cover"}}
            />
          </div>
        </div>
      </div>
    </section>
  );
}