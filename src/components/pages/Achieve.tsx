import { Users, Building2, Rocket, Gem, Lock, Diamond, Users2, Award, ChevronUp, Globe, BarChart3, Trophy, TrendingUp, Factory } from 'lucide-react'

export default function Achieve() {
  return (
    <div className="bg-white p-4 sm:p-8">

      <div className="bg-blue-700 text-white text-center py-4 mb-8">
        <h2 className="text-xl sm:text-2xl font-bol d">Our Perks</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard icon={<Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="500+" subtitle="Clients" />
        <StatCard icon={<Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="400+" subtitle="Succesful Projects" />
        {/* <StatCard icon={<Users2 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="79+" subtitle="Dedicated & Energetic Team of Sales Rep" /> */}
        <StatCard icon={<Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="700+" subtitle="Registrarion" />
        <StatCard icon={<Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="5 Year" subtitle="Experiance" />
      </div>


    </div>
  )
}

function StatCard({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <div className="border rounded-lg p-3 sm:p-4 flex flex-col items-center text-center h-full justify-center">
      {icon}
      <h3 className="text-base sm:text-lg font-bold text-blue-700 mt-2">{title}</h3>
      <p className="text-xs sm:text-sm text-gray-600 mt-1">{subtitle}</p>
    </div>
  )
}