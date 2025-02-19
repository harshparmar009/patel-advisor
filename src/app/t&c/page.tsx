import Footer from "@/components/pages/Footer";
import Navbar from "@/components/pages/Navbar";

export default function Terms  () {
  return (
    <div>
      <Navbar/>
      <div className="max-w-6xl mx-auto p-6 mt-12">
      <h2 className="text-2xl font-bold text-center mb-6">Terms and Conditions</h2>
      <p className="text-gray-700 text-lg text-center mb-8">
        By accessing or using Patel Legal Advisors’ services, you agree to abide by the following terms and conditions:
      </p>
      <ul className="text-gray-700 text-lg list-disc list-inside mb-8">
        <li>All legal consultations and advice provided are based on the information shared by the client.</li>
        <li>Patel Legal Advisors is not liable for any decisions made based on our consultation.</li>
        <li>Clients must provide accurate and complete information for effective legal guidance.</li>
        <li>All fees and charges are subject to change without prior notice.</li>
        <li>Unauthorized use of our legal resources and materials is strictly prohibited.</li>
      </ul>
    </div>
    <Footer/>
    </div>
  );
};

