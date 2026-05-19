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
    title: 'CareNova',
    year: '2025',
    description:
      'MERN-based healthcare platform for video, audio, and chat communication with a generative AI symptom checker and digital prescriptions.',
    tags: ['MERN', 'AI', 'Healthcare', 'Real-time communication'],
  },
  {
    title: 'Evalo',
    year: 'Cloud IDE',
    description:
      'Cloud-based IDE supporting 10+ languages with real-time execution, execution history, smart output handling, and theme customization.',
    tags: ['Cloud', 'IDE', 'Collaboration', 'Multi-language'],
  },
  {
    title: 'TourSafe',
    year: 'Safety Tech',
    description:
      'Tourist safety system with AI anomaly detection, geo-fencing, multilingual SOS alerts, and automated e-FIR generation.',
    tags: ['AI', 'Geo-fencing', 'Safety', 'Automation'],
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

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-hero-grid text-slate-900">
      <header className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/20 to-transparent" />
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-10 md:px-10 lg:flex-row lg:items-center lg:py-16">
          <div className="lg:w-3/5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for internships, collaborations, and product work
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
              ALKA MISHRA
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
              B.Tech student specializing in Artificial Intelligence and Machine Learning, with strong expertise in Python, C++, AI/ML, and full-stack web development. I build scalable applications, solve algorithmic problems, and create AI-driven solutions.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-200">
              <a className="rounded-full border border-white/15 bg-white/10 px-4 py-2 transition hover:bg-white/20" href="mailto:alkam7974@gmail.com">
                alkam7974@gmail.com
              </a>
              <a className="rounded-full border border-white/15 bg-white/10 px-4 py-2 transition hover:bg-white/20" href="tel:+917888683743">
                +91-7888683743
              </a>
              <a className="rounded-full border border-white/15 bg-white/10 px-4 py-2 transition hover:bg-white/20" href="https://www.linkedin.com/in/alka-mishra-a34408310/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="rounded-full border border-white/15 bg-white/10 px-4 py-2 transition hover:bg-white/20" href="https://leetcode.com/u/Alka_mishra/" target="_blank" rel="noreferrer">
                LeetCode
              </a>
              <a className="rounded-full border border-white/15 bg-white/10 px-4 py-2 transition hover:bg-white/20" href="https://github.com/Alka2-mishra" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="rounded-full border border-white/15 bg-white/10 px-4 py-2 transition hover:bg-white/20" href="https://www.codechef.com/users/alkamishra_03" target="_blank" rel="noreferrer">
                CodeChef
              </a>
              <a className="rounded-full border border-white/15 bg-white/10 px-4 py-2 transition hover:bg-white/20" href="https://www.hackerrank.com/profile/alkam7974" target="_blank" rel="noreferrer">
                HackerRank
              </a>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/10 p-4 text-white shadow-glow backdrop-blur">
                  <p className="text-2xl font-extrabold tracking-tight text-cyan-200">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-200">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-2/5">
            <div className="relative mx-auto max-w-md rounded-[2rem] border border-white/10 bg-white/90 p-4 shadow-glow backdrop-blur-xl">
              <div className="absolute -right-3 -top-3 h-24 w-24 rounded-full bg-amber-300/80 blur-2xl" />
              <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-cyan-300/60 blur-2xl" />
              <img
                src="/formalPhoto.jpeg"
                alt="Alka Mishra"
                className="relative h-[420px] w-full rounded-[1.5rem] object-cover object-top"
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-slate-950/80 p-4 text-white backdrop-blur">
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Focused on</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {highlights.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="bg-slate-50">
        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <SectionTitle
            eyebrow="About"
            title="A clean, modern portfolio that highlights your work and story"
            description="This layout keeps the content structured and easy to scan, while still feeling polished on desktop and mobile."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 lg:col-span-2">
              <h3 className="text-2xl font-bold text-slate-900">About Me</h3>
              <p className="mt-4 text-base leading-8 text-slate-600">
                I am a B.Tech student at C.V. Raman Global University, Bhubaneswar, pursuing Computer Science and Engineering with a specialization in AI & ML. I enjoy building software that is practical, scalable, and visually clear, with a strong interest in problem solving, full-stack development, and emerging technologies.
              </p>
            </div>
            <div className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Quick Facts</p>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-200">
                <li>Location: India</li>
                <li>Focus: AI/ML, Full Stack, Product Engineering</li>
                <li>Strengths: Communication, collaboration, and execution</li>
                <li>Resume: available via your attached PDF</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <SectionTitle
            eyebrow="Education"
            title="Strong academic foundation"
            description="Your portfolio presents the degree, institution, and performance clearly so recruiters can see the core profile immediately."
          />
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">C.V. Raman Global University, Bhubaneswar</p>
                <h3 className="mt-3 text-2xl font-bold text-slate-900">B.Tech in Computer Science and Engineering (AI & ML)</h3>
              </div>
              <div className="rounded-2xl bg-cyan-50 px-5 py-4 text-sm font-semibold text-cyan-800">
                2023 - 2027 | CGPA: 8.68
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <SectionTitle
            eyebrow="Skills"
            title="Technical stack and core strengths"
            description="The skills section is grouped to make scanning easy for recruiters and mentors."
          />
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <SectionTitle
            eyebrow="Experience"
            title="Work experience and open-source contribution"
            description="A compact timeline helps separate training, contribution work, and project execution."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {experiences.map((experience) => (
              <article key={experience.role} className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">{experience.duration}</p>
                <h3 className="mt-3 text-2xl font-bold text-slate-900">{experience.role}</h3>
                <p className="mt-1 text-sm font-medium text-slate-500">{experience.org}</p>
                <ul className="mt-5 space-y-3 text-base leading-7 text-slate-600">
                  {experience.details.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 flex-none rounded-full bg-amber-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <SectionTitle
            eyebrow="Projects"
            title="Featured projects"
            description="These are highlighted with concise summaries so visitors can understand the idea and scope quickly."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-glow">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                    {project.year}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <SectionTitle
            eyebrow="More"
            title="Certifications and achievements"
            description="This section preserves the rest of your resume content in a compact, polished format."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-2xl font-bold text-slate-900">Certifications</h3>
              <ul className="mt-5 space-y-3 text-slate-600">
                {certifications.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-cyan-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-2xl font-bold text-slate-900">Achievements</h3>
              <ul className="mt-5 space-y-3 text-slate-600">
                <li className="flex gap-3"><span className="mt-2 h-2 w-2 flex-none rounded-full bg-amber-400" /><span>Secured 4th place in the IIIT Bhubaneswar National-Level Hackathon.</span></li>
                <li className="flex gap-3"><span className="mt-2 h-2 w-2 flex-none rounded-full bg-amber-400" /><span>Achieved a 5-Star Badge in Python on HackerRank.</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24 pt-10 md:px-10">
          <div className="rounded-[2.5rem] bg-gradient-to-r from-slate-950 to-slate-800 p-8 text-white shadow-glow md:p-10">
            <div className="grid gap-8 md:grid-cols-[1.4fr_0.6fr] md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Contact</p>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">Let&apos;s connect and build something useful.</h2>
                <p className="mt-4 max-w-2xl text-slate-300">
                  If you want to review the full resume, collaborate on a project, or discuss internships, these are the best places to reach me.
                </p>
              </div>
              <div className="grid gap-3">
                <a className="rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-cyan-100" href="mailto:alkam7974@gmail.com">
                  Email Me
                </a>
                <a className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10" href="/AlkaMishra_Resume_.pdf" target="_blank" rel="noreferrer">
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App