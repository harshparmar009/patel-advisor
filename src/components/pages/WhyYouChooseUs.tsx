import Image from 'next/image'
import { Trophy, DollarSign, Sun } from 'lucide-react'
import profilePic from '../../../public/image/01.jpeg'

export default function WhyYouChooseUs() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-blue-800 font-bold mb-8 text-center">WHY YOU CHOOSE US</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-4xl md:text-right font-bold mb-6">Good works wonders now and then: Behold!</h3>
            <div className='flex justify-center items-center md:justify-end'>
            <Image
              src={profilePic}
              alt="Award ceremony"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
            </div>
          </div>
          <div className="space-y-6">
            {[
              {
                icon: <Trophy className="w-8 h-8 text-orange-500" />,
                title: "WE MAKE YOUR DREAM COME TRUE",
                description: "We are a team of experienced professionals who will complete your project successfully."
              },
              {
                icon: <DollarSign className="w-8 h-8 text-orange-500" />,
                title: "BEST PRICE FOR EXCELLENT WORK",
                description: "Reasonable price and best service."
              },
              {
                icon: <Sun className="w-8 h-8 text-orange-500" />,
                title: "WE HEAR YOU",
                description: "We always anticipate what you expect"
              }
            ].map((point, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 flex items-start space-x-4">
                <div className="bg-orange-100 p-2 rounded-full flex-shrink-0">{point.icon}</div>
                <div>
                  <h4 className="font-semibold text-lg">{point.title}</h4>
                  <p className="text-sm text-gray-600">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}