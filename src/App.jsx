import Header from './components/Header'
import Hero from './components/Hero'
import FeatureSection from './components/FeatureSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-sky-50 text-gray-900">
      <Header />
      <main>
        <Hero />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
