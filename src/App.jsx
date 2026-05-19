import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Projects from './components/Projects'

const skills = [
  'Python',
  'JavaScript',
  'HTML',
  'CSS',
  'React.js',
  'Next.js',
  'Node.js',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'OracleDB',
  'Git',
  'GitHub',
  'Linux',
  'AWS',
  'Docker',
]

const stats = [
  { value: '4th', label: 'IIIT Bhubaneswar hackathon rank' },
  { value: '15+', label: 'GitHub issues resolved in GSSoC' },
  { value: '10+', label: 'Pull requests submitted' },
  { value: '5+', label: 'Mini-projects completed in Python training' },
]

const projects = [
  {
    title: 'BrainWave',
    year: 'AI Platform',
    description:
      'An AI-focused product experience project centered on modern UI, intelligent workflows, and practical problem solving.',
    tags: ['AI', 'Product', 'Web App', 'Frontend'],
    repo: 'https://github.com/Alka2-mishra/BrainWave',
  },
  {
    title: 'Invexa',
    year: 'Product Build',
    description:
      'A full-stack product project focused on clean architecture, responsive interfaces, and reliable end-to-end user flows.',
    tags: ['Full Stack', 'UX', 'Web', 'Scalable'],
    repo: 'https://github.com/Alka2-mishra/Invexa',
  },
  {
    title: 'CareNova',
    year: '2025',
    description:
      'MERN-based healthcare platform for video, audio, and chat communication with a generative AI symptom checker and digital prescriptions.',
    tags: ['MERN', 'AI', 'Healthcare', 'Real-time communication'],
    repo: 'https://github.com/Alka2-mishra/CareNova',
  },
  {
    title: 'Evalo',
    year: 'Cloud IDE',
    description:
      'Cloud-based IDE supporting 10+ languages with real-time execution, execution history, smart output handling, and theme customization.',
    tags: ['Cloud', 'IDE', 'Collaboration', 'Multi-language'],
    repo: 'https://github.com/Alka2-mishra/evalo',
  },
  {
    title: 'TourSafe',
    year: 'Safety Tech',
    description:
      'Tourist safety system with AI anomaly detection, geo-fencing, multilingual SOS alerts, and automated e-FIR generation.',
    tags: ['AI', 'Geo-fencing', 'Safety', 'Automation'],
    repo: 'https://github.com/Alka2-mishra/toursafe',
  },
]

const experiences = [
  {
    role: 'Python Trainee',
    org: 'Python Training',
    duration: 'Dec 2024 - Feb 2025',
    details: [
      'Completed intensive training in OOP, exception handling, collections, and file handling.',
      'Built 5+ mini-projects and coding exercises to strengthen debugging and problem solving.',
    ],
  },
  {
    role: 'Open-Source Contributor',
    org: 'GirlScript Summer of Code (GSSoC ’25)',
    duration: 'May 2025 - Jun 2025',
    details: [
      'Resolved 15+ GitHub issues and contributed to 3+ repositories.',
      'Improved React UI responsiveness and collaborated with 20+ contributors.',
    ],
  },
]

const certifications = [
  'Generative AI: The Evolution of Thoughtful Online Search',
  'Learning Microsoft 365 Copilot for Work',
]

const highlights = [
  'AI / ML Enthusiast',
  'Full-Stack Developer',
  'Open-Source Contributor',
  'Problem Solver',
]

const sectionVariants = {
  hidden: { opacity: 0, y: 44, scale: 0.985, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const projectCardVariants = {
  hidden: { opacity: 0, x: 80, scale: 0.98 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <p className="text-sm font-bold uppercase tracking-[0.35em] text-teal-600">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-7 text-slate-700 font-medium">{description}</p>
    </motion.div>
  )
}

function App() {
  const [currentPage, setCurrentPage] = useState('about')

  const pages = {
    about: <AboutMe />,
    experience: <Experience />,
    projects: <Projects />,
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Header />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-800/50 bg-slate-950/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex items-center justify-center gap-8 py-4">
            {[
              { id: 'about', label: 'About Me' },
              { id: 'experience', label: 'Experience' },
              { id: 'projects', label: 'Projects' },
            ].map((page) => (
              <motion.button
                key={page.id}
                onClick={() => setCurrentPage(page.id)}
                className={`relative px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] transition ${
                  currentPage === page.id
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {page.label}
                {currentPage === page.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500"
                    layoutId="underline"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </nav>

      {/* Page content with smooth transitions */}
      <AnimatePresence mode="wait">
        <div key={currentPage}>
          {pages[currentPage]}
        </div>
      </AnimatePresence>

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