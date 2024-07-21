import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  slack,
  pulse,
  trello,
  asana,
  monday,
  google,
  technology,
  asanaproject,
  mondayone,
  mondaytwo,
  sendpulse
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Digital Marketing',
    icon: frontend,
  },
  {
    title: 'Communication',
    icon: backend,
  },
  {
    title: 'Project Management',
    icon: ux,
  },
  {
    title: 'Customer Service',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'Slack',
    icon: slack,
  },
  {
    name: 'Sendpluse',
    icon: pulse,
  },
  {
    name: 'Trello',
    icon: trello,
  },
  {
    name: 'Asana',
    icon: asana,
  },
  {
    name: 'Monday.com',
    icon: monday,
  },
  {
    name: 'Google Workspace',
    icon: google,
  },
  {
    name: 'AI tools',
    icon: technology,
  },
];

const experiences = [
  {
    title: 'Virtual Assistant (Intern)',
    company_name: '',
    icon: microverse,
    iconBg: '#333333',
    date: 'May 2024 - date',
  },
  {
    title: 'Administrative Assistant',
    company_name: 'OE Consultancy Ltd',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Jan 2024 - date',
  },
  // {
  //   title: 'Mentor (Volunteer)',
  //   company_name: 'Microverse',
  //   icon: microverse,
  //   iconBg: '#333333',
  //   date: 'Mar 2022 - May 2022',
  // },
  // {
  //   title: 'Junior Software Engineer',
  //   company_name: 'Kelhel',
  //   icon: kelhel,
  //   iconBg: '#333333',
  //   date: 'May 2022 - Oct 2022',
  // },
  // {
  //   title: 'Full Stack Developer',
  //   company_name: 'Diversity Cyber Council',
  //   icon: dcc,
  //   iconBg: '#333333',
  //   date: 'Sep 2022 - Present',
  // },
];

const projects = [
  {
    id: 'project-1',
    name: 'Asana',
    description: 'Tool to set company-wide goals, manage strategic plans, and get work done on a single platform.',
    // tags: [
    //   {
    //     name: 'react',
    //     color: 'blue-text-gradient',
    //   },
    //   {
    //     name: 'mongodb',
    //     color: 'green-text-gradient',
    //   },
    //   {
    //     name: 'tailwind',
    //     color: 'pink-text-gradient',
    //   },
    // ],
    image: asanaproject,
    // repo: 'https://github.com/shaqdeff/KomiKult',
    demo: '/Asana.png',
  },
  {
    id: 'project-2',
    name: 'Monday.com',
    description:
      'An all-in-one work management platform that helps teams streamline their workflow, collaborate seamlessly, and manage complex project',
    // tags: [
    //   {
    //     name: 'react',
    //     color: 'blue-text-gradient',
    //   },
    //   {
    //     name: 'restapi',
    //     color: 'green-text-gradient',
    //   },
    //   {
    //     name: 'scss',
    //     color: 'pink-text-gradient',
    //   },
    // ],
    image: mondayone,
    // repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: '/Monday.com.png',
  },
  {
    id: 'project-3',
    name: 'Monday.com 2',
    description: 'An all-in-one work management platform that helps teams streamline their workflow, collaborate seamlessly, and manage complex project',
    // tags: [
    //   {
    //     name: 'nextjs',
    //     color: 'blue-text-gradient',
    //   },
    //   {
    //     name: 'supabase',
    //     color: 'green-text-gradient',
    //   },
    //   {
    //     name: 'css',
    //     color: 'pink-text-gradient',
    //   },
    // ],
    image: mondaytwo,
    // repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: '/Monday.com2.png',
  },
  {
    id: 'project-4',
    name: 'Sendpulse',
    description: `SendPulse is an all-in-one automation platform that specializes in email, SMS, and chatbot marketing`,
    // tags: [
    //   {
    //     name: 'nextjs',
    //     color: 'blue-text-gradient',
    //   },
    //   {
    //     name: 'supabase',
    //     color: 'green-text-gradient',
    //   },
    //   {
    //     name: 'css',
    //     color: 'pink-text-gradient',
    //   },
    // ],
    image: sendpulse,
    // repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: '/sendpulse.png',
  },
];

export { services, technologies, experiences, projects };
