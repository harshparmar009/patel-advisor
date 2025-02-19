import Image from "next/image";
// import aboutPic from '../../../public/images/bbc-energy.png'
import logo from '../../../public/image/site-logo.png'

export default function AboutUs () {
  return (
    <div className="w-full px-6 mt-28">
      
       <main className="container  mx-auto px-4 ">
      {/* <h1 className="text-3xl text-red-700 font-bold text-center mb-6">- ABOUT US -</h1> */}
        <h1 className="text-5xl text-red-700 font-bold text-center mb-6">- What We Do -</h1>
      <div className="w-full flex items-center justify-center">
      <Image
            src={logo}
            alt="Logo"
            width={100}
            height={100}
            className="w-64 rounded-2xl mb-[10px]"
            
          />
      </div>
      <p className="text-center text-lg mb-12 max-w-3xl mx-auto ">
      Patel Legal Advisors EXPERT is a fastest growing organization which provides solution of your any business related queries. We here provides all type of Business Registration assistance. Patel Legal Advisors EXPERT was registered in 2022 with a mission to provide best professional services. We have a professional Team players having 5+ years experience in our team as our Team is built with professional Chartered Accountants, Company Secretaries and Lawyers. We provide our Services Pan India.
      </p>
     
    </main>
    </div>
  )
}

