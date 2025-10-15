import { Sparkles, Rocket, LayoutDashboard } from 'lucide-react'
import FeatureCard from './FeatureCard'

export default function FeatureSection() {
  const items = [
    {
      title: 'Instant Start',
      description: 'Open the app and you are ready to code and ship. Zero friction, maximum focus.',
      icon: Rocket,
    },
    {
      title: 'Polished UI',
      description: 'Clean, modern design with thoughtful details and accessible components.',
      icon: LayoutDashboard,
    },
    {
      title: 'Delightful Basics',
      description: 'A friendly “Hello, World!” to greet you, plus utilities that feel good to use.',
      icon: Sparkles,
    },
  ]

  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="max-w-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
          Everything you need to say hello in style
        </h2>
        <p className="mt-2 text-gray-600">
          Lightweight components, elegant defaults, and a joyful starting point.
        </p>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <FeatureCard key={item.title} title={item.title} description={item.description} icon={item.icon} />
        ))}
      </div>
    </section>
  )
}
