import { Star } from 'lucide-react'

export default function FeatureCard({ title, description, icon: Icon = Star }) {
  return (
    <div className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center mb-4">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-sm leading-6 text-gray-600">{description}</p>
    </div>
  )
}
