import { motion } from 'framer-motion'
import { stats, highlights } from '../constants'

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 -top-1/4 h-96 w-96 rounded-full bg-gradient-to-b from-indigo-600/20 to-purple-600/10 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 h-96 w-96 rounded-full bg-gradient-to-t from-cyan-500/10 to-teal-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 py-10 md:px-10 lg:flex-row lg:items-center lg:py-16">
        <motion.div
          className="lg:w-3/5"
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
            <a className="rounded-full border border-purple-400/40 bg-purple-500/10 px-4 py-2 text-purple-200 transition hover:bg-purple-500/20 hover:border-purple-400/60" href="tel:+917888683743">
              +91-7888683743
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

        <motion.div
          className="lg:w-2/5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative mx-auto max-w-md rounded-[2rem] border border-indigo-500/50 bg-white/5 p-4 shadow-lg backdrop-blur-xl">
            <div className="absolute -right-3 -top-3 h-24 w-24 rounded-full bg-indigo-500/60 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-cyan-400/40 blur-2xl" />
            <img
              src="/formalPhoto.jpeg"
              alt="Alka Mishra"
              className="relative h-[420px] w-full rounded-[1.5rem] object-cover object-top"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-slate-950/80 p-4 text-white backdrop-blur">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Focused on</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {highlights.map((item) => (
                  <span key={item} className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  )
}
