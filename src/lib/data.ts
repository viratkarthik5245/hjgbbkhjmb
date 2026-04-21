export const DATES = {
  courseStart: new Date('2026-04-23T00:00:00'),
  tcsRegistrationClose: new Date('2026-05-14T23:59:59'),
  courseEnd: new Date('2026-05-25T23:59:59'),
  examDate: new Date('2026-05-27T00:00:00'),
};

export const STATS = [
  { label: 'Eligible Students', value: 'YOG 2024, 2025 & 2026' },
  { label: 'Students Registered', value: '15,000+' },
  { label: 'Placement Tracks Covered', value: '3' },
];

export const TIMELINE_EVENTS = [
  {
    date: 'April 23, 2026',
    title: 'Codera Crash Course Starts',
    description: 'Live sessions begin with orientation and foundations.',
    status: 'active' as const,
  },
  {
    date: 'May 14, 2026',
    title: 'TCS NQT Registration Closes',
    description: 'Last date to register on the TCS NQT portal.',
    status: 'upcoming' as const,
  },
  {
    date: 'May 25, 2026',
    title: 'Crash Course Ends',
    description: 'Final revision sessions and mock tests conclude.',
    status: 'upcoming' as const,
  },
  {
    date: 'May 27, 2026',
    title: 'TCS NQT Exam Date',
    description: 'Appear with full confidence after 6 weeks of prep.',
    status: 'upcoming' as const,
  },
];

export const TRACKS = [
  {
    name: 'Ninja',
    salary: '₹3.36 LPA',
    color: 'brand',
    sections: 'Aptitude + Verbal + Reasoning + Basic Coding',
    target: 'All students — minimum target',
    bgGradient: 'from-blue-50 to-blue-100',
    borderColor: 'border-blue-200',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'Digital',
    salary: '₹7 LPA',
    color: 'accent',
    sections: 'Python + DSA + CS Fundamentals + Advanced Aptitude',
    target: 'Strong in coding',
    bgGradient: 'from-amber-50 to-orange-100',
    borderColor: 'border-orange-200',
    badgeColor: 'bg-orange-100 text-orange-700',
  },
  {
    name: 'Prime',
    salary: '₹9 LPA',
    color: 'success',
    sections: 'Digital topics + AI/ML + Advanced DSA',
    target: 'Top-track aspirants',
    bgGradient: 'from-emerald-50 to-green-100',
    borderColor: 'border-green-200',
    badgeColor: 'bg-green-100 text-green-700',
  },
];

export const SYLLABUS_WEEKS = [
  {
    week: 0,
    title: 'Orientation & Quant Foundations',
    description: 'TCS NQT Overview',
    sessions: 3,
  },
  {
    week: 1,
    title: 'Quantitative Aptitude I',
    description: 'Number systems, percentages, profit & loss, time & work',
    sessions: 6,
  },
  {
    week: 2,
    title: 'Quantitative Aptitude II',
    description: 'Quant, Reasoning, Verbal & Python Basics',
    sessions: 6,
  },
  {
    week: 3,
    title: 'Logical Reasoning I & II',
    description: 'Patterns, puzzles, data interpretation, coding-decoding',
    sessions: 6,
  },
  {
    week: 4,
    title: 'Verbal Ability I & II',
    description: 'Reading comprehension, grammar, vocabulary, para-jumbles',
    sessions: 6,
  },
  {
    week: 5,
    title: 'Advanced Aptitude',
    description: 'Advanced quantitative and reasoning topics for Digital & Prime',
    sessions: 6,
  },
  {
    week: 6,
    title: 'Mock Tests & Final Revision',
    description: 'Full-length mock tests, doubt clearing, and exam strategies',
    sessions: 4,
  },
];

export const MENTORS = [
  {
    name: 'Aptitude & Verbal Specialist',
    title: 'Aptitude & Verbal Specialist',
    subtitle: 'Coached 10,000+ students for placements',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'MERN, DSA & GenAI Expert',
    title: 'MERN, DSA & GenAI Expert',
    subtitle: 'Kintali Sri Varsha',
    image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Python & MERN Stack Expert',
    title: 'Python & MERN Stack Expert',
    subtitle: 'Gen AI & LLM Applications Expert',
    image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export const STEPS = [
  {
    step: 1,
    title: 'Register on this page',
    description: 'Register via the link',
  },
  {
    step: 2,
    title: 'Get confirmation',
    description: 'WhatsApp/email from team',
  },
  {
    step: 3,
    title: 'Join live sessions',
    description: 'Starting April 20 (link sent before class)',
  },
  {
    step: 4,
    title: 'Practice & test weekly',
    description: 'Weekly tests to track your score',
  },
  {
    step: 5,
    title: 'Crack TCS NQT',
    description: 'Appear on May 27 with full confidence',
  },
];

export const FAQS = [
  {
    question: 'Will sessions be recorded if I miss a live class?',
    answer:
      'Yes, recordings will be available for every class within the learning portal under Weekend Sprints in the Live Classes section.',
  },
  {
    question:
      'Is there a certificate after completing the crash course?',
    answer:
      "No, it's just a crash course to help you qualify TCS NQT Exam so certificate is not available.",
  },
  {
    question:
      "I haven't registered on the TCS portal yet. Can I still join the crash course?",
    answer:
      'Yes! You can join the crash course now and register for TCS NQT on the official website ASAP.',
  },
  {
    question: 'How do I register on the TCS NQT portal?',
    answer:
      'Visit https://nextstep.tcsapps.com/indiacampus/#/ and register for TCS NQT 2026. The last date is May 14, 2026.',
  },
  {
    question:
      'Which track should I aim for — Ninja, Digital, or Prime?',
    answer:
      "If you're new to coding, start with Ninja (₹3.36 LPA). If you're comfortable with Python and DSA, aim for Digital (₹7 LPA). If you have AI/ML knowledge too, go for Prime (₹9 LPA).",
  },
  {
    question: 'Do I need prior coding knowledge to join this course?',
    answer:
      "No prior experience needed for the Ninja track. For Digital and Prime tracks, basic Python knowledge is helpful but not mandatory — the course covers everything from the beginning.",
  },
  {
    question: 'Is this course only for Codera students?',
    answer:
      'Yes, this crash course is exclusively available for Codera students only.',
  },
  {
    question: 'What is the eligible graduation year?',
    answer:
      'TCS NQT 2026 is open to students with Year of Graduation (YOG) 2024, 2025, and 2026.',
  },
  {
    question:
      'What support does Codera provide after the NQT exam?',
    answer:
      'For students who qualify the NQT, Codera provides TR, MR, and HR interview preparation bootcamps, mock interviews, resume building guidance.',
  },
  {
    question:
      'How many sessions are there in total and how long is each?',
    answer:
      'Approximately, there are 37 core sessions + 4 advanced sessions, each 2 hours long — 74 hours of total preparation, completely free.',
  },
];

export const NQT_INFO = {
  title: 'What is TCS NQT?',
  description:
    'TCS National Qualifier Test (NQT) is a national-level hiring exam conducted by Tata Consultancy Services every year. It is open to all eligible B.Tech graduates. Codera is helping students prepare with a structured crash course, mock tests, and interview coaching.',
  highlights: [
    {
      title: 'Conducted by TCS',
      description: 'Independent public exam, not affiliated with Codera',
    },
    {
      title: 'Ninja (₹3.36 LPA), Digital (₹7 LPA), Prime (₹9 LPA)',
      description:
        'Performance on NQT determines your track, not CGPA',
    },
    {
      title: 'Mass Hiring Scale',
      description:
        "One of India's largest annual campus hiring drives",
    },
  ],
};
