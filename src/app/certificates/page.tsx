
import Footer from "@/components/pages/Footer";
import Navbar from "@/components/pages/Navbar";
import Image from "next/image";

const certificates = [
    "/image/c1.jpg",
    "/image/c2.jpg",
    "/image/c3.jpg",
  ];

export default function Certificate  ()  {
  return (
    <div>
      <Navbar/>
    <div className="max-w-6xl mx-auto p-6 mt-12">
      <h2 className="text-2xl font-bold text-center mb-6">Our Certifications</h2>
      <p className="text-gray-700 text-lg text-center mb-8">
        We take pride in our certifications that validate our expertise and commitment to excellence in the legal field.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {certificates.map((src, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg">
            <Image src={src} alt={`Certificate ${index + 1}`} width={300} height={200} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

