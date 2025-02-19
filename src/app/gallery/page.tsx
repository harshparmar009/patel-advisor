
import Footer from "@/components/pages/Footer";
import Navbar from "@/components/pages/Navbar";
import Image from "next/image";

const images = [
  "/image/image1.jpg",
  "/image/image2.jpg",
  "/image/image3.jpg",
  "/image/image4.jpg",
];

export default function AboutUs ()  {
  return (
    <div>
      <Navbar/>
      <div className="max-w-6xl mx-auto p-6 mt-12">
      <h1 className="text-3xl font-bold text-center mb-6">About Patel Legal Advisors</h1>
      <p className="text-gray-700 text-lg text-center mb-8">
        Patel Legal Advisors is a dedicated team of legal professionals committed to providing expert legal
        guidance and solutions. With years of experience in various legal fields, we strive to ensure justice
        and legal clarity for our clients.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg">
            <Image src={src} alt={`Agency Image ${index + 1}`} width={300} height={200} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

