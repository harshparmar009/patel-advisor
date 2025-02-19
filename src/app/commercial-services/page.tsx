import Footer from "@/components/pages/Footer";
import Navbar from "@/components/pages/Navbar";

export default function CommercialServices(){
    return (
       <div>
        <Navbar/>
         <div className="max-w-6xl mx-auto p-6 mt-12">
          <h2 className="text-2xl font-bold text-center mb-6">Our Commercial Services</h2>
          <p className="text-gray-700 text-lg text-center mb-8">
            At Patel Legal Advisors, we provide expert commercial legal services, ensuring businesses operate within the
            legal framework while protecting their interests. Our services include:
          </p>
          <ul className="text-gray-700 text-lg list-disc list-inside mb-8">
            <li>Business formation and compliance</li>
            <li>Contract drafting and negotiation</li>
            <li>Intellectual property protection</li>
            <li>Dispute resolution and litigation</li>
            <li>Employment law advisory</li>
          </ul>
        </div>
        <Footer/>
       </div>
      );
}