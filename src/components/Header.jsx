import { motion } from 'framer-motion'
import { stats, highlights } from '../constants'

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 -top-1/4 h-96 w-96 rounded-full bg-gradient-to-b from-indigo-600/20 to-purple-600/10 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 h-96 w-96 rounded-full bg-gradient-to-t from-cyan-500/10 to-teal-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 py-8 md:px-10 lg:py-12">
        <motion.div
          className="lg:w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 px-4 py-2 text-sm font-medium text-cyan-300 shadow-lg backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for internships, collaborations, and product work
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            ALKA MISHRA
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            B.Tech student specializing in Artificial Intelligence and Machine Learning, with strong expertise in Python, C++, AI/ML, and full-stack web development. I build scalable applications, solve algorithmic problems, and create AI-driven solutions.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-white">
            <a className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-cyan-200 transition hover:bg-cyan-500/20 hover:border-cyan-400/60" href="mailto:alkam7974@gmail.com">
              alkam7974@gmail.com
            </a>
            <a className="rounded-full border border-indigo-400/40 bg-indigo-500/10 px-4 py-2 text-indigo-200 transition hover:bg-indigo-500/20 hover:border-indigo-400/60" href="https://www.linkedin.com/in/alka-mishra-a34408310/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-cyan-200 transition hover:bg-cyan-500/20 hover:border-cyan-400/60" href="https://leetcode.com/u/Alka_mishra/" target="_blank" rel="noreferrer">
              LeetCode
            </a>
            <a className="rounded-full border border-purple-400/40 bg-purple-500/10 px-4 py-2 text-purple-200 transition hover:bg-purple-500/20 hover:border-purple-400/60" href="https://github.com/Alka2-mishra" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="rounded-full border border-indigo-400/40 bg-indigo-500/10 px-4 py-2 text-indigo-200 transition hover:bg-indigo-500/20 hover:border-indigo-400/60" href="https://www.codechef.com/users/alkamishra_03" target="_blank" rel="noreferrer">
              CodeChef
            </a>
            <a className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-cyan-200 transition hover:bg-cyan-500/20 hover:border-cyan-400/60" href="https://www.hackerrank.com/profile/alkam7974" target="_blank" rel="noreferrer">
              HackerRank
            </a>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-600/20 to-purple-600/10 p-4 text-white shadow-lg backdrop-blur"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <p className="text-2xl font-extrabold tracking-tight text-cyan-300">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </header>
  )
}
