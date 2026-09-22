import portraitImg from '../assets/images/aiswarya_portrait_1789970469903.jpg';
import {
  EngineeringProject,
  EducationEntry,
  InternshipEntry,
  SeminarEntry,
  LeadershipEntry,
  SkillCategory
} from '../types';

export const PERSONAL_INFO = {
  name: 'Aiswarya V R',
  title: 'B.Tech Electrical & Electronics Engineering',
  specialization: 'Passionate about Energy Systems, Emerging Technologies & Sustainable Engineering',
  tagline: 'PASSIONATE ABOUT ENERGY SYSTEMS, EMERGING TECHNOLOGIES & SUSTAINABLE ENGINEERING',
  college: 'SCMS School of Engineering and Technology, Ernakulam',
  university: 'APJ Abdul Kalam Technological University (KTU)',
  portraitImage: portraitImg,
  email: 'aiswaryavr2004@gmail.com', // direct placeholder matching user identity
  phone: '+91 85907 04337',
  linkedinUrl: 'https://www.linkedin.com/in/aiswarya-v-r-5a864335b?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  instagramUrl: 'https://www.instagram.com',
  youtubeUrl: 'https://www.youtube.com',
  location: 'Ernakulam / Aluva, Kerala, India',
  
  // Natural personal introduction based on user's exact quote
  aboutBio: `Driven by curiosity and a passion for Electrical & Electronics Engineering, I have a strong interest in power systems, power generation, and electric vehicles. I enjoy exploring emerging technologies, expanding my technical knowledge, and continuously developing my skills through learning and hands-on experience. I look forward to contributing to innovative and sustainable engineering solutions.`
};

export const TECHNICAL_INTERESTS: { title: string; subtitle: string; iconKey: string }[] = [
  {
    title: 'Power Systems',
    subtitle: 'Analysis, transmission grids, load balancing, and network reliability',
    iconKey: 'zap'
  },
  {
    title: 'Power Generation',
    subtitle: 'Conventional, renewable integration, and sustainable energy conversion',
    iconKey: 'activity'
  },
  {
    title: 'Electric Vehicles',
    subtitle: 'EV powertrains, charging infrastructure, battery systems, and mobility tech',
    iconKey: 'battery-charging'
  },
  {
    title: 'Electrical & Electronics Engineering',
    subtitle: 'Core circuits, electromagnetic devices, measurement, and power conversion',
    iconKey: 'cpu'
  },
  {
    title: 'Emerging Technologies',
    subtitle: 'Smart grids, digital simulation tools, and automation systems',
    iconKey: 'git-branch'
  },
  {
    title: 'Sustainable Engineering',
    subtitle: 'Clean energy transition, efficiency optimization, and eco-conscious design',
    iconKey: 'leaf'
  }
];

export const EDUCATION_LIST: EducationEntry[] = [
  {
    id: 'btech',
    institution: 'SCMS School of Engineering and Technology, Ernakulam',
    degree: 'Bachelor of Technology (B.Tech) — Electrical and Electronics Engineering',
    affiliation: 'Affiliated with APJ Abdul Kalam Technological University (KTU)',
    period: '2024 – 2028',
    location: 'Karukutty, Ernakulam, Kerala',
    highlights: [
      'Focusing on Core Electrical Systems, Power Engineering, Digital Electronics & Control Systems',
      'Active participant in Energy Cell and campus technical initiatives'
    ]
  },
  {
    id: 'schooling',
    institution: 'Vidyadhiraja Vidyabhavan, Aluva',
    degree: 'Secondary Education',
    period: 'Completed',
    location: 'Aluva, Ernakulam, Kerala',
    highlights: [
      'Built strong foundational mathematics and physical sciences acumen'
    ]
  }
];

export const PROJECTS_LIST: EngineeringProject[] = [
  {
    id: 'electronic-stethoscope',
    title: 'Electronic Stethoscope',
    projectType: 'Group Project',
    objective: 'Electronic capture, amplification, and recording of acoustic heartbeat sounds to enable accessible digital cardiac monitoring.',
    contribution: 'Collaborative development of the simulation circuit, signal capture pipeline analysis, and investigating low-cost implementation for healthcare delivery in resource-constrained areas.',
    tools: ['Circuit Simulation', 'Signal Conditioning', 'Audio Amplification Models'],
    skillsLearned: ['Acoustic Sensor Interfacing', 'Biomedical Signal Processing Concepts', 'Accessible Device Prototyping', 'Team Collaboration'],
    summary: 'Group project involving electronic capture and recording of heartbeat sounds. Developed a simulation of the proposed system and explored its potential for accessible healthcare monitoring, particularly in areas with limited healthcare facilities.'
  },
  {
    id: 'urban-jungle',
    title: 'Urban Jungle',
    projectType: 'Group Project',
    objective: 'Proposing an intuitive indoor navigation and crowd-monitoring application for commercial shopping complexes and malls.',
    contribution: 'Participated in conceptual architecture, crowd density level modeling, and structuring user movement optimization workflows.',
    tools: ['System Design Concepts', 'Spatial Mapping Logic', 'UI/UX Information Architecture'],
    skillsLearned: ['Indoor Positioning Concepts', 'Crowd Density Monitoring Logic', 'User Experience Design for Navigation', 'Technical Presentation'],
    summary: 'Group project proposing an indoor navigation and crowd-monitoring application for shopping malls. The concept combines indoor maps with crowd-level information to help users locate shops and plan their movement.'
  },
  {
    id: 'digital-voting-machine',
    title: 'Digital Voting Machine',
    projectType: 'Group Project',
    objective: 'Designing and simulating a secure digital vote entry, processing, and tallying system.',
    contribution: 'Contributed to digital logic design, truth table validation, and MATLAB system simulation for input counting and output verification.',
    tools: ['MATLAB', 'Digital Logic Design', 'Boolean Algebra', 'State Logic Simulation'],
    skillsLearned: ['MATLAB Simulation Workflows', 'Combinational & Sequential Logic', 'Reliability in Digital Systems', 'System Verification'],
    summary: 'Group project developed and simulated using MATLAB. Demonstrates digital vote entry, processing and counting while providing practical exposure to simulation and digital logic.'
  }
];

export const INTERNSHIP_DATA: InternshipEntry = {
  company: 'KSEB Substation, Aluva',
  location: 'Aluva, Ernakulam, Kerala',
  role: 'Technical Intern / Vocational Trainee',
  exposures: [
    'Substation operations and single line diagram (SLD) layout',
    'High-voltage electrical equipment (Transformers, Switchgear, Busbars, CT/PT)',
    'Power transmission and distribution network topology',
    'Protection systems (Relays, Circuit Breakers, Lightning Arresters)',
    'Monitoring and control room dispatch operations',
    'Strict electrical safety protocols, earthing grids, and maintenance routines'
  ],
  whatILearned: `This internship bridged classroom theoretical principles with industrial high-voltage operations. Witnessing transformers, protection relays, and circuit breakers in live operation clarified how power transmission and distribution systems maintain grid stability, manage faults, and prioritize technician safety.`
};

export const SEMINARS_LIST: SeminarEntry[] = [
  {
    id: 'ev-policy',
    title: 'EV Policy Framework & Implementation',
    type: 'Academic Seminar & Case Study',
    coverage: [
      'Electric vehicle adoption trajectories and global standards',
      'EV charging infrastructure grid-integration and fast-charging protocols',
      'Government initiatives, subsidy frameworks, and net-zero incentives',
      'Implementation bottlenecks, grid impact, and battery lifecycle challenges'
    ],
    relevance: 'Explored policies accelerating electric mobility and the engineering adaptations required for high-penetration EV charging grids.'
  },
  {
    id: 'ayurvedic-knowledge',
    title: 'Medicinal Plants & Ayurvedic Knowledge',
    type: 'Seminar — Indian Knowledge System (IKS)',
    coverage: [
      'Traditional Indian medicinal flora and ethnobotanical documentation',
      'Foundational Ayurvedic principles and natural bio-compounds',
      'Cultural heritage preservation and sustainable harvesting methods',
      'Contemporary relevance in modern healthcare and green biotechnology'
    ],
    relevance: 'Synthesized classical Indian heritage knowledge with contemporary scientific rigor, emphasizing sustainable ecosystems.'
  }
];

export const LEADERSHIP_LIST: LeadershipEntry[] = [
  {
    id: 'nss-energy',
    role: 'NSS Volunteer & Energy Cell Coordinator',
    organization: 'National Service Scheme (NSS) & Energy Conservation Cell, SSET',
    highlights: [
      'Active NSS involvement in community service, social outreach, and civic awareness campaigns',
      'Spearheaded energy-related student initiatives promoting conservation and sustainable practices',
      'Organized technical workshops and community drives fostering leadership, teamwork, and cross-batch coordination'
    ]
  },
  {
    id: 'sset-koottu',
    role: 'Core Team Member — SSET Koottu',
    organization: 'SSET Koottu Social & Inclusivity Initiative',
    highlights: [
      'Promoted inclusion, empathy, and accessibility across collegiate and community spaces',
      'Engaged in proactive community outreach and meaningful interaction with people with disabilities',
      'Practiced team coordination, social responsibility, and inclusive leadership to foster supportive environments'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Technical',
    skills: [
      'MATLAB',
      'Electronics',
      'Digital Logic',
      'Power Systems',
      'Electrical Systems',
      'Simulation'
    ]
  },
  {
    category: 'Professional',
    skills: [
      'Problem Solving',
      'Communication',
      'Presentation',
      'Leadership',
      'Teamwork',
      'Research',
      'Coordination'
    ]
  },
  {
    category: 'Additional Interest',
    skills: [
      'Singing'
    ]
  }
];

export const PERSONAL_STRENGTHS: string[] = [
  'Curious Learner',
  'Creative Thinker',
  'Team Player',
  'Responsible',
  'Adaptable',
  'Problem Solver',
  'Communicator'
];
