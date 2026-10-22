import portrait from './Anish-green.png';

export const profile = {
  name: 'Anish',
  logo: 'anish.dev',
  photo: portrait,
  email: 'anishchoudharysnps@gmail.com',
  github: 'https://github.com/anishchoudhary01',
  linkedin: 'https://www.linkedin.com/in/anish-choudhary-0089a1342',
  resume: '/resume.pdf',
};

export const projects = [
  {
    number: '01', name: 'MediaLens', category: 'AI / NLP',
    description: 'An AI-powered media bias and public sentiment analysis platform using natural language processing and machine learning.',
    tags: ['Python', 'Scikit-learn', 'NLP', 'FastAPI', 'React', 'MongoDB'],
    highlight: 'TF-IDF + SVM · 76% validation accuracy', visual: 'medialens', github: '', demo: '',
  },
  {
    number: '02', name: 'FloodVision', category: 'AI / Vision',
    description: 'A flood detection and prediction project combining satellite imagery with spatial and temporal modelling.',
    tags: ['Python', 'PyTorch', 'CNN', 'GRU', 'GCN', 'Sentinel-1 / 2'],
    highlight: 'Spatial + temporal modelling', visual: 'floodvision', github: '', demo: '',
  },
  {
    number: '03', name: 'OutreachOS', category: 'Backend / Full Stack',
    description: 'A full-stack email scheduling system designed around delayed jobs, background workers, sender rate limiting, and idempotent scheduling.',
    tags: ['Node.js', 'PostgreSQL', 'Prisma', 'Redis', 'BullMQ', 'Docker'],
    highlight: 'Reliable systems, carefully composed', visual: 'outreach', github: '', demo: '',
  },
  {
    number: '04', name: 'BusEase', category: 'UI / UX',
    description: 'A UI/UX case study for a bus tracking application featuring live location, seat availability, ETA, and notifications.',
    tags: ['Figma', 'UI/UX', 'HCI'],
    highlight: 'From friction to a clearer journey', visual: 'busease', github: '', demo: '',
  },
];

export const uiUxProjects = [
  {
    slug: 'busease', number: '01', name: 'BusEase', figmaUrl: 'https://www.figma.com/design/oIXtOdenFdDRyXbK71oKMb/BusEase?node-id=0-1&p=f&t=ghNSa9eiu9GAHgK1-0', figmaScreens: [
      { src: '/assets/uiux/busease/Frame 1.png', caption: 'Live Bus Tracking', alt: 'BusEase live bus tracking screen' },
     
    ],
    type: 'Transportation UX case study',
    methods: ['Figma', 'User Research', 'Wireframing', 'Interaction Design'],
    description: 'A transportation-focused UX case study exploring clearer public-transport journeys through live bus tracking, arrival times, and seat availability.',
    sections: [
      ['Problem', 'Public transportation journeys can feel uncertain when riders lack clear information about live locations, arrival times, and available seats.'],
      ['User research', 'Conducted user interviews and surveys to identify public transportation challenges.'],
      ['Personas', 'Developed user personas to keep rider needs visible throughout the design process.'],
      ['Feature prioritization', 'Prioritized features using the MoSCoW method.'],
      ['Wireframes', 'Designed wireframes for live bus tracking, arrival times, and seat availability.'],
      ['Proposed user journey', 'Mapped a clearer path from finding a route to tracking the bus and planning the ride.'],
    ],
    visual: 'busease',
  },
  {
    slug: 'sharecircle', number: '02', name: 'ShareCircle: Peer-to-Peer Rental Application', figmaUrl: 'https://www.figma.com/design/8n7wpSOtrrDMrAMNAcuyI7/ShareCircle?node-id=0-1&t=1GXGg1NfszROF5M6-1', figmaScreens: [
      { src: '/assets/uiux/sharecircle/Frame 128.png', caption: 'Item Discovery', alt: 'ShareCircle item discovery screen' },
      
    ],
    type: 'Product design case study',
    methods: ['Figma', 'UI Design', 'Prototyping', 'User Flows'],
    description: 'A peer-to-peer rental marketplace concept designed to make browsing, listing, and renting personal items feel simple and trustworthy.',
    sections: [
      ['Marketplace journey', 'Designed intuitive user flows for browsing, listing, and renting personal items through a peer-to-peer marketplace.'],
      ['Key screens', 'Structured screens for item discovery, item details, rental booking, and user profiles.'],
      ['User flows', 'Simplified the rental journey by connecting discovery, item evaluation, booking, and profile touchpoints.'],
      ['Prototype', 'Organized the product concept as a Figma prototype-ready flow for exploring the core rental experience.'],
    ],
    visual: 'sharecircle',
  },
  {
    slug: 'ustart-driver-app', number: '03', name: 'UStart Driver App', figmaUrl: 'https://www.figma.com/design/F7k7ellAVINypd2xX78B1z/PS2?node-id=0-1&t=EwXsb6OX0woXBm2P-1', figmaScreens: [
      { src: '/assets/uiux/ustart/Cover-page.png', caption: 'Drivers-App', alt: 'UStart driver app item discovery screen' },
    ],
    type: 'Mobile app design case study',
    methods: ['Figma', 'Mobile App Design', 'UI Animation'],
    description: 'A mobile driver experience covering onboarding, ride pickup and drop-off, payments, Help Support, and localized Hindi interface content.',
    sections: [
      ['Onboarding', 'Created onboarding slides and driver app screens to introduce the product experience.'],
      ['Ride management', 'Designed screens for ride pickup and drop-off flows.'],
      ['Payment screens', 'Designed payment-related screens for the driver experience.'],
      ['Support', 'Created Help Support screens to make assistance easier to find.'],
      ['Hindi localization', 'Created localized Hindi interface content and onboarding slides.'],
    ],
    visual: 'ustart',
  },
];

export const skillGroups = [
  ['Languages', ['Java', 'Python', 'JavaScript', 'SQL']],
  ['Frontend', ['HTML', 'CSS', 'React', 'React Native']],
  ['Backend + data', ['Node.js', 'Express', 'FastAPI', 'MongoDB', 'PostgreSQL', 'SQL']],
  ['AI / ML', ['Scikit-learn', 'PyTorch', 'TensorFlow', 'OpenCV', 'NLP', 'Computer Vision']],
  ['Tools', ['Git', 'GitHub', 'Docker', 'Figma', 'Google Colab']],
];
