import Image from "next/image";
import aboutPic from '../../../public/image/02.jpeg'

export default function ServiceSection() {
  const services = [
    {
      title: "REGISTRATION SERVICES",
      description: "We Register Company / LLP/ Partnership Firm as per your Requirement. Registrations of GST, FSSAI, DSC, DIN, MSME, IEC etc.",
    },
    {
      title: "COMPLIANCE MANAGEMENT",
      description: "Compliances for Companies, LLPs, Partnerships & Sole Proprietors etc. Drafting of Your documents, contracts, and registrations",
    },
    {
      title: "TAX PREPARATION",
      description: "GST & Income tax services for individuals, LLPs & companies.",
    },
    {
      title: "ACCOUNTING AND BOOKKEEPING",
      description: "Accounting & Book keeping services on Monthly/ annual basis",
    },
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
      {/* Services Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-4xl font-bold text-red-700">OUR MAIN SERVICES</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
              <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700">
                Know More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Professionals Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-red-600">CA, CS, LAWYERS AT ONE PLACE</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {professionals.map((profession, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold">{profession}</h3>
              <p className="mt-2 text-gray-600">
                All type of business registrations are available with us.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <div className="w-full px-6 mt-32">
        <div className="w-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-red-700 mb-4 uppercase">
            Patel Legal Advisors THE BEST CHOICE!
          </h1>
        </div>

        <div className="flex flex-col md:flex-row w-full gap-6 items-center md:items-start">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px]">
              <Image
                src={aboutPic}
                alt="picture"
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 text-black text-center md:text-left">
            <h3 className="text-2xl text-red-500 uppercase">ABOUT Patel Legal Advisors</h3>
            <p className="text-lg">
              Patel Legal Advisors is a fastest growing organization which provides
              solution of your any business related queries. We here provides all type
              of Business Registration assistance. Patel Legal Advisors was registered
              in 2022 with a mission to provide best professional services. We have a
              professional Team players having 5+ years experience in our team as our
              Team is built with professional Chartered Accountants, Company
              Secretaries and Lawyers. We provide our Services Pan India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
