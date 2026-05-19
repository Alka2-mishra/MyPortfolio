import { motion } from 'framer-motion'
import { experiences, certifications, sectionVariants, pageVariants } from '../constants'

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

export default function Experience() {
  return (
    <motion.main
      className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-1/4 top-1/4 h-96 w-96 rounded-full bg-gradient-to-b from-purple-600/20 to-indigo-600/10 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 h-96 w-96 rounded-full bg-gradient-to-t from-cyan-500/10 to-teal-500/5 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionTitle
          eyebrow="Experience"
          title="Work experience and open-source contribution"
          description="A compact timeline helps separate training, contribution work, and project execution."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.role}
              className="rounded-[2rem] bg-gradient-to-br from-slate-800/80 to-slate-800/40 p-6 shadow-lg ring-1 ring-indigo-500/30 backdrop-blur"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">{experience.duration}</p>
              <h3 className="mt-3 text-2xl font-bold text-white">{experience.role}</h3>
              <p className="mt-1 text-sm font-medium text-slate-400">{experience.org}</p>
              <ul className="mt-5 space-y-3 text-base leading-7 text-slate-300">
                {experience.details.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-gradient-to-r from-cyan-400 to-teal-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionTitle
          eyebrow="More"
          title="Certifications and achievements"
          description="This section preserves the rest of your resume content in a compact, polished format."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            className="rounded-[2rem] bg-gradient-to-br from-slate-800/80 to-slate-800/40 p-6 shadow-lg ring-1 ring-cyan-500/30 backdrop-blur"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white">Certifications</h3>
            <ul className="mt-5 space-y-3 text-slate-300">
              {certifications.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="rounded-[2rem] bg-gradient-to-br from-slate-800/80 to-slate-800/40 p-6 shadow-lg ring-1 ring-purple-500/30 backdrop-blur"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white">Achievements</h3>
            <ul className="mt-5 space-y-3 text-slate-300">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-purple-400" />
                <span>Secured 4th place in the IIIT Bhubaneswar National-Level Hackathon.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-purple-400" />
                <span>Achieved a 5-Star Badge in Python on HackerRank.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}
