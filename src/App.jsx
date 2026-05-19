import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Projects from './components/Projects'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Header Section */}
      <Header />

      {/* About Section */}
      <AboutMe />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Footer */}
      <footer className="border-t border-slate-800/50 bg-gradient-to-t from-slate-950 to-transparent py-12">
        <div className="mx-auto max-w-7xl px-6 text-center md:px-10">
          <p className="text-sm text-slate-400">
            © 2025 Alka Mishra. Built with <span className="text-cyan-400">React</span>, <span className="text-indigo-400">Framer Motion</span>, and <span className="text-purple-400">Tailwind CSS</span>.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
