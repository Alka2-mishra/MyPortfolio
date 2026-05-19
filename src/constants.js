export const skills = [
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

export const stats = [
  { value: '4th', label: 'IIIT Bhubaneswar hackathon rank' },
  { value: '15+', label: 'GitHub issues resolved in GSSoC' },
  { value: '10+', label: 'Pull requests submitted' },
  { value: '5+', label: 'Mini-projects completed in Python training' },
]

export const projects = [
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

export const experiences = [
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
    org: 'GirlScript Summer of Code (GSSoC 2025)',
    duration: 'May 2025 - Jun 2025',
    details: [
      'Resolved 15+ GitHub issues and contributed to 3+ repositories.',
      'Improved React UI responsiveness and collaborated with 20+ contributors.',
    ],
  },
]

export const certifications = [
  'Generative AI: The Evolution of Thoughtful Online Search',
  'Learning Microsoft 365 Copilot for Work',
]

export const highlights = [
  'AI / ML Enthusiast',
  'Full-Stack Developer',
  'Open-Source Contributor',
  'Problem Solver',
]

export const sectionVariants = {
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

export const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
}

export const projectCardVariants = {
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


