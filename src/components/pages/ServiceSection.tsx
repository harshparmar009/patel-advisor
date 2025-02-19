import Image from "next/image";
import aboutPic from '../../../public/image/02.jpeg'

export default function ServiceSection () {
    const services = [
      { title: "REGISTRATION SERVICES", description: "We register companies, LLPs, and partnerships as per your requirement.", },
      { title: "COMPLIANCE MANAGEMENT", description: "We handle compliance for companies, LLPs, and proprietors.", },
      { title: "TAX PREPARATION", description: "GST & Income tax services for individuals, LLPs & companies.", },
      { title: "ACCOUNTING AND BOOKKEEPING", description: "Monthly and annual accounting & bookkeeping services.", },
    ];
    const professionals = [
        "REGISTRATIONS",
        "REGULATORY COMPLIANCES",
        "ACCOUNTING & BOOKKEEPING",
        "LEGAL SERVICES",
        "GST & TAX FILINGS",
      ];
    return (
    <div>
      <section className="py-16 bg-white text-center">
        <h2 className="text-4xl font-bold text-red-700">OUR MAIN SERVICES</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
              <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700">Know More</button>
            </div>
          ))}
        </div>
      </section>
        <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-red-600">CA, CS, LAWYERS AT ONE PLACE</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {professionals.map((profession, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold">{profession}</h3>
              <p className="mt-2 text-gray-600">Professional services available with us.</p>
            </div>
          ))}
        </div>
      </section>
      <div className="w-full px-6 mt-32">
        <div className="w-full flex items-center justify-center ">
         <h1 className="text-4xl font-bold text-red-700 mb-4 uppercase">
         Patel Legal Advisors THE BEST CHOICE!</h1>
        </div>
      <div className="flex w-full">

      <div className="w-1/2 flex items-end justify-center ">
        <div className="w-[300px] h-[300px]">
        <Image
        src={aboutPic}
        alt="picture"
        width={100}
        height={100}
        className="w-full h-full object-cover"
        />
        </div>
        </div>

        <div className="w-1/2 flex items-start justify-start flex-col gap-2 px-2 py-2 text-black">
            <h3 className="text-2xl text-red-500 uppercase">ABOUT Patel Legal Advisors EXPERT INDIA LLP</h3>
            <p className="text-lg">Patel Legal Advisors is a fastest growing organization which provides solution of your any business related queries. We here provides all type of Business Registration assistance. Patel Legal Advisors EXPERT was registered in 2022 with a mission to provide best professional services. We have a professional Team players having 5+ years experience in our team as our Team is built with professional Chartered Accountants, Company Secretaries and Lawyers. We provide our Services Pan India.</p>
        </div>

      </div>
    </div>
      </div>
    );
  };