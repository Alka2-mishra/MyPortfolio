import { motion } from 'framer-motion'
import { sectionVariants, pageVariants } from '../constants'

function SectionTitle({ eyebrow, title, description }) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-400">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-7 text-slate-300 font-medium">{description}</p>
    </motion.div>
  )
}

export default function AboutMe() {
  return (
    <motion.main
      className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-1/4 top-1/4 h-96 w-96 rounded-full bg-gradient-to-b from-indigo-600/20 to-purple-600/10 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 h-96 w-96 rounded-full bg-gradient-to-t from-cyan-500/10 to-teal-500/5 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <motion.div
            className="rounded-[2rem] bg-gradient-to-br from-slate-800/80 to-slate-800/40 p-6 shadow-lg ring-1 ring-indigo-500/30 backdrop-blur lg:col-span-2"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white">About Me</h3>
            <p className="mt-4 text-base leading-8 text-slate-300">
              I am a B.Tech student at C.V. Raman Global University, Bhubaneswar, pursuing Computer Science and Engineering with a specialization in AI & ML. I enjoy building software that is practical, scalable, and visually clear, with a strong interest in problem solving, full-stack development, and emerging technologies.
            </p>
          </motion.div>
          <motion.div
            className="rounded-[2rem] bg-gradient-to-br from-indigo-600/30 to-purple-600/20 p-6 text-white shadow-lg ring-1 ring-indigo-500/30 backdrop-blur"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Quick Facts</p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-200">
              <li>Location: India</li>
              <li>Focus: AI/ML, Full Stack, Product Engineering</li>
              <li>Strengths: Communication, collaboration, and execution</li>
              <li>Resume: available via your attached PDF</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionTitle
          eyebrow="Education"
          title="Strong academic foundation"
          description="Your portfolio presents the degree, institution, and performance clearly so recruiters can see the core profile immediately."
        />
        <motion.div
          className="rounded-[2rem] bg-gradient-to-br from-slate-800/80 to-slate-800/40 p-8 shadow-lg ring-1 ring-cyan-500/30 backdrop-blur"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">C.V. Raman Global University, Bhubaneswar</p>
              <h3 className="mt-3 text-2xl font-bold text-white">B.Tech in Computer Science and Engineering (AI & ML)</h3>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-indigo-600/40 to-purple-600/30 px-5 py-4 text-sm font-semibold text-white ring-1 ring-indigo-500/30">
              2023 - 2027 | CGPA: 8.68
            </div>
          </div>
        </motion.div>
      </section>
    </motion.main>
  )
}
