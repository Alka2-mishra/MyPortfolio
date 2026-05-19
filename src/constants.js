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
      'Modern AI-powered productivity platform using React.js with intelligent features like AI-assisted content generation, task organization, and dynamic dashboards. Implemented responsive components with smooth animations, reusable architecture, and efficient state management for enhanced performance and user experience.',
    tags: ['AI', 'React.js', 'UI/UX', 'Frontend', 'Productivity'],
    repo: 'https://github.com/Alka2-mishra/BrainWave',
  },
  {
    title: 'Invexa',
    year: 'Product Build',
    description:
      'Full-stack inventory and billing management system for small businesses with secure authentication and role-based access control using ASP.NET Core. Features real-time inventory tracking, invoice generation, sales reporting, and analytics with responsive interfaces and optimized database queries.',
    tags: ['Full Stack', 'ASP.NET Core', 'SQL', 'RBAC', 'Business Tools'],
    repo: 'https://github.com/Alka2-mishra/Invexa',
  },
  {
    title: 'CareNova',
    year: '2025',
    description:
      'MERN-based healthcare platform enabling secure real-time video, audio, and chat communication between doctors and patients. Integrated an AI-powered symptom checker using Generative AI to analyze patient inputs and provide preliminary health recommendations. Implemented digital prescription management and appointment handling to improve accessibility and workflow efficiency. Designed scalable backend services and optimized APIs to support concurrent users and seamless real-time interactions.',
    tags: ['MERN', 'Generative AI', 'Real-time', 'Healthcare', 'Telemedicine'],
    repo: 'https://github.com/Alka2-mishra/CareNova',
  },
  {
    title: 'Evalo',
    year: 'Cloud IDE',
    description:
      'Cloud-based online IDE supporting execution of 10+ programming languages with real-time code compilation and output handling. Implemented features such as execution history, customizable themes, smart output formatting, and advanced search functionality. Developed secure code execution workflows and optimized request handling for improved system performance and scalability. Enhanced collaboration by enabling code sharing, responsive UI design, and efficient multi-user interaction capabilities.',
    tags: ['Cloud IDE', 'Multi-language', 'Collaboration', 'Real-time Execution', 'Security'],
    repo: 'https://github.com/Alka2-mishra/evalo',
  },
  {
    title: 'TourSafe',
    year: 'Safety Tech',
    description:
      'AI-driven tourist safety platform featuring anomaly detection and geo-fencing for real-time traveler monitoring and protection. Integrated multilingual SOS alerts, automated e-FIR generation, and emergency response functionalities for rapid assistance during critical situations. Designed accessible and user-friendly interfaces to improve usability for domestic and international travelers. Collaborated on scalable system architecture and intelligent safety workflows to enhance emergency communication and incident management.',
    tags: ['AI', 'Geo-fencing', 'SOS', 'Emergency Response', 'Multilingual'],
    repo: 'https://github.com/Alka2-mishra/toursafe',
  },
]

export const experiences = [
  {
    role: 'Python Trainee',
    org: 'Python Training',
    duration: 'Dec 2025 - Feb 2026',
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


