import { motion } from 'framer-motion'
import { projects, skills, sectionVariants, projectCardVariants, pageVariants } from '../constants'

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

export default function Projects() {
  return (
    <motion.main
      className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-1/4 top-1/4 h-96 w-96 rounded-full bg-gradient-to-b from-cyan-600/20 to-teal-600/10 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 h-96 w-96 rounded-full bg-gradient-to-t from-indigo-500/10 to-purple-500/5 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionTitle
          eyebrow="Projects"
          title="Featured projects"
          description="These are highlighted with concise summaries so visitors can understand the idea and scope quickly."
        />
        <div className="flex gap-8 overflow-x-auto pb-6 [scrollbar-width:thin] [scrollbar-color:#06b6d4_transparent] snap-x snap-mandatory">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="min-w-[420px] snap-start rounded-[1.5rem] bg-gradient-to-br from-indigo-600/40 to-purple-600/30 p-6 text-white shadow-lg ring-1 ring-indigo-500/30 backdrop-blur md:min-w-[520px] lg:min-w-[620px] h-80 overflow-auto"
              variants={projectCardVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ x: 8, y: -6, scale: 1.015 }}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <span className="rounded-full border border-cyan-400/50 bg-cyan-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  {project.year}
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-200">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-white/20">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                className="mt-5 inline-flex rounded-full border border-cyan-400/50 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200 transition hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-teal-500/30"
                href={project.repo}
                target="_blank"
                rel="noreferrer"
              >
                View Repository
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionTitle
          eyebrow="Skills"
          title="Technical stack and core strengths"
          description="The skills section is grouped to make scanning easy for recruiters and mentors."
        />
        <motion.div
          className="rounded-[2rem] bg-gradient-to-br from-slate-800/80 to-slate-800/40 p-8 shadow-lg ring-1 ring-purple-500/30 backdrop-blur"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full bg-gradient-to-r from-indigo-600/30 to-purple-600/20 px-4 py-2 text-sm font-medium text-slate-200 ring-1 ring-indigo-500/30">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-10 md:px-10">
        <motion.div
          className="rounded-[2.5rem] bg-gradient-to-r from-indigo-600/40 via-purple-600/40 to-slate-800/60 p-8 text-white shadow-lg ring-1 ring-indigo-500/30 backdrop-blur md:p-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid gap-8 md:grid-cols-[1.4fr_0.6fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Contact</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Let&apos;s connect and build something useful.</h2>
              <p className="mt-4 max-w-2xl text-slate-300">
                If you want to review the full resume, collaborate on a project, or discuss internships, these are the best places to reach me.
              </p>
            </div>
            <div className="grid gap-3">
              <a className="rounded-2xl bg-gradient-to-r from-cyan-400 to-teal-400 px-4 py-3 text-center text-sm font-semibold text-slate-950 transition hover:from-cyan-300 hover:to-teal-300" href="mailto:alkam7974@gmail.com">
                Email Me
              </a>
              <a className="rounded-2xl border border-cyan-400/50 bg-cyan-500/10 px-4 py-3 text-center text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20" href="/AlkaMishra_Resume_.pdf" target="_blank" rel="noreferrer">
                View Resume
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.main>
  )
}
