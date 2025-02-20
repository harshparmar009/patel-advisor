
import Footer from '@/components/pages/Footer'
import Navbar from '@/components/pages/Navbar'

export default function AboutPage() {
  return (
    <div> 
      <Navbar/>
      <section className="mt-4 bg-gray-100 py-16 px-6 md:px-16 lg:px-32">
      <div className=" max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About Patel Legal Advisor</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Patel Legal Advisor is a trusted legal consultancy dedicated to providing expert guidance and
          personalized solutions for a wide range of legal matters. With a commitment to integrity,
          professionalism, and client satisfaction, we strive to deliver clear and effective legal advice tailored
          to each client's unique needs. Our expertise spans across various legal domains, ensuring that individuals
          and businesses receive the best possible representation and support. At Patel Legal Advisor, we believe in
          building strong relationships based on trust, transparency, and a deep understanding of the law, helping our
          clients navigate legal complexities with confidence.
        </p>
      </div>
    </section>
      <Footer/>
    </div>
  )
}
