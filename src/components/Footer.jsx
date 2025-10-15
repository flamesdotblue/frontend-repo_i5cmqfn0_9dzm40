export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="w-full border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-500 flex items-center justify-between">
        <p>© {year} Hello World. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a className="hover:text-gray-800 transition-colors" href="#privacy">Privacy</a>
          <a className="hover:text-gray-800 transition-colors" href="#terms">Terms</a>
        </div>
      </div>
    </footer>
  )
}
