export const site = {
  name: "Let's Fly Initiative",
  motto: "Start with what you have, from where you are.",
  email: "Letsflyinitiative@gmail.com",
  location: "Ondo State, Nigeria",
  socials: {
    facebook: "", // add link
    whatsapp: "", // add number / link
    tiktok: "", // add link
    linkedin: "", // add link
  },
   mapQuery: "Ondo State, Nigeria", // change to the exact office or town if the client wants a pin
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Projects", to: "/projects" },
  { label: "Opportunities", to: "/opportunities" },
  { label: "Get Involved", to: "/get-involved" },
  { label: "Contact", to: "/contact" },
];

export const hero = {
  eyebrow: "Let's Fly Initiative",
  prefix: "Are you a student looking for",
  words: ["opportunities?", "guidance?", "a mentor?", "what's next?"],
  subtitle:
    "Opportunities, guidance and mentors to help you figure out your next step, wherever you're starting from.",
  ctaPrimary: { label: "Explore Opportunities", to: "/opportunities" },
  ctaSecondary: { label: "Get Involved", to: "/get-involved" },
};

export const whatWeDo = {
  intro:
    "At Let's Fly Initiative, we believe that a person's circumstances should not determine the limits of their possibilities.",
  items: [
    {
      icon: "GraduationCap",
      title: "Educational Support",
      text: "Helping students access the resources and support they need to stay in school and pursue their education.",
    },
    {
      icon: "Compass",
      title: "Career & Mentorship",
      text: "Connecting young people with guidance, mentors and practical information to make better career decisions.",
    },
    {
      icon: "Globe",
      title: "Global Opportunities",
      text: "Helping students discover legitimate scholarships, fellowships, study opportunities and pathways beyond their immediate environment.",
    },
    {
      icon: "HeartHandshake",
      title: "Community Outreach",
      text: "Taking education, health awareness and support directly to underserved communities.",
    },
  ],
};

export const approach = {
  steps: [
    {
      title: "Discover",
      text: "Find the scholarships, programs and pathways that exist for you.",
    },
    {
      title: "Prepare",
      text: "Understand what's required and get ready to apply with confidence.",
    },
    {
      title: "Connect",
      text: "Meet mentors and peers who have walked the road before.",
    },
    {
      title: "Take Action",
      text: "Know your next step, then take it.",
    },
  ],
  text: "We don't just tell young people that opportunities exist. We help them understand where to find them, how to prepare for them and what steps to take next.",
};

export const impact = [
  { value: 1000, suffix: "+", label: "Students Reached" },
  { value: 10, suffix: "+", label: "Mentorship Sessions" },
  { value: 15, suffix: "+", label: "Volunteers" },
  { value: 10, suffix: "+", label: "Community Projects" },
];

export const why = {
  title: "Why Let's Fly?",
  paragraphs: [
    "Many young people have the ability and ambition to succeed but lack access to the right information, resources or networks.",
    "Let's Fly exists to bridge that gap.",
    "We want every young person we encounter to leave with something valuable: a new idea, a useful connection, a practical resource, or the confidence to take their next step.",
  ],
};

export const about = {
  who: [
    "Let's Fly Initiative is a youth-focused initiative committed to helping young people access education, mentorship, career guidance and opportunities that can expand their possibilities.",
    "We work particularly with students and young people who may have limited access to information, resources and networks.",
    "Our work combines education, mentorship, opportunity discovery and community-based interventions to help young people make informed decisions about their futures.",
  ],
  mission:
    "To equip young people with the information, support, opportunities and connections they need to make informed decisions and pursue their potential.",
  vision:
    "A world where every young person can discover and pursue meaningful opportunities, regardless of their background or circumstances.",
};

export const programs = [
  {
    icon: "GraduationCap",
    title: "Educational Support",
    text: "We support students through educational resources, mentorship and interventions designed to help them remain engaged with their education.",
  },
  {
    icon: "Compass",
    title: "Career & Mentorship",
    text: "We provide young people with access to career conversations, mentorship and practical guidance to help them understand their options and make informed decisions.",
  },
  {
    icon: "Globe",
    title: "Opportunities & Global Exposure",
    text: "We help young people discover scholarships, fellowships, competitions, internships, study opportunities and other legitimate pathways for growth.",
  },
  {
    icon: "Stethoscope",
    title: "Health & Wellbeing Education",
    text: "Through community-based activities, we provide age-appropriate health education and promote informed health decisions among young people.",
  },
  {
    icon: "HeartHandshake",
    title: "Community Outreach",
    text: "We work with communities and local partners to identify needs and develop practical interventions that respond to them.",
  },
];

export const projects = [
  {
    slug: "eagles-guide",
    title: "Eagle's Guide",
    featured: true,
    status: "Completed",
    location: "Cross River, Akure and Ondo City",
    target: "Secondary School Students",
    problem:
      "Many students lack access to adequate career guidance, mentorship, positive role models, and practical knowledge needed to make informed educational and life decisions and prepare effectively for their future.",
    response:
      "Eagle's Guide is an education outreach initiative designed to expose students to practical information, career guidance, mentorship, and educational resources that can help them make informed decisions and pursue their academic goals.",
    provided: [],
  },
  {
    slug: "orphanage-outreach",
    title: "Orphanage Homes Outreach",
    featured: false,
    status: "Completed",
    location:
      "Ondo City, Ondo State — Overcomer's Orphanage, Godly Seed & Christ Orphanage Home",
    target: "Children in orphanage homes",
    problem:
      "Limited access to basic welfare resources and health/hygiene education among children in vulnerable settings.",
    response:
      "Let's Fly Initiative organized a child-focused outreach combining welfare support, health checks, hygiene/menstrual-health education and meaningful engagement.",
    provided: [
      "Health education and checks",
      "Hygiene and menstrual-health education",
      "Gift and support items",
      "Educational materials",
      "Mentorship and interaction",
    ],
  },
  {
    slug: "health-education-access",
    title: "Improving Health Education Access Among Secondary School Students",
    featured: false,
    status: "Ongoing",
    location: "Rural communities in Ondo State",
    target: "Secondary-school students",
    problem:
      "Many students in underserved communities have limited access to reliable and age-appropriate health information.",
    response:
      "Let's Fly Initiative seeks to bring practical health education closer to students through interactive sessions and community engagement.",
    provided: [
      "Health education sessions",
      "Interactive discussions",
      "Educational materials",
      "Menstrual health education",
      "Hygiene education",
      "Referral information where appropriate",
    ],
  },
];

export const opportunities = {
  tagline: "Find opportunities. Prepare. Apply. Grow.",
  intro:
    "We curate opportunities that can help students and young people develop academically, professionally and personally.",
  categories: [
    {
      icon: "GraduationCap",
      label: "Scholarships",
      text: "Funding to study at home or abroad.",
    },
    {
      icon: "Briefcase",
      label: "Internships",
      text: "Real experience to build your career early.",
    },
    {
      icon: "Globe",
      label: "Fellowships",
      text: "Programs that grow leaders and ideas.",
    },
    {
      icon: "Trophy",
      label: "Competitions",
      text: "Challenges that put your skills on show.",
    },
    {
      icon: "Laptop",
      label: "Training & Courses",
      text: "Learn new skills, often for free.",
    },
    {
      icon: "Wifi",
      label: "Remote Opportunities",
      text: "Work and learn from wherever you are.",
    },
  ],
  notice:
    "We aim to share opportunities from legitimate sources and encourage applicants to verify eligibility, deadlines and application requirements directly with the official provider.",
};

// Demo listings. Replace with real ones. `category` must match a label above.
// Leave `link` empty until you have the official application page.
export const opportunityList = [
  {
    title: "Sample Scholarship Listing",
    org: "Provider name",
    category: "Scholarships",
    deadline: "Add deadline",
    link: "",
  },
  {
    title: "Sample Internship Listing",
    org: "Provider name",
    category: "Internships",
    deadline: "Add deadline",
    link: "",
  },
  {
    title: "Sample Fellowship Listing",
    org: "Provider name",
    category: "Fellowships",
    deadline: "Add deadline",
    link: "",
  },
  {
    title: "Sample Online Course Listing",
    org: "Provider name",
    category: "Training & Courses",
    deadline: "Rolling",
    link: "",
  },
  {
    title: "Sample Online Course Listing",
    org: "Provider name",
    category: "Competitions",
    deadline: "Rolling",
    link: "",
  },
   {
    title: "Sample Online Course Listing",
    org: "Provider name",
    category: "Remote Opportunities",
    deadline: "Rolling",
    link: "",
  },
];

// Fill these in when the client confirms how donors should pay.
// If all three are empty, the site tells people to get in touch instead.
export const donation = {
  bankName: "",
  accountName: "",
  accountNumber: "",
};

export const getInvolved = [
  {
    icon: "Hand",
    title: "Volunteer",
    text: "Share your skills, time or experience to support our programs.",
    cta: "Become a Volunteer",
  },
  {
    icon: "UserRound",
    title: "Become a Mentor",
    text: "Help a young person navigate academics, career decisions or personal development.",
    cta: "Become a Mentor",
  },
  {
    icon: "Handshake",
    title: "Partner With Us",
    text: "Organizations, businesses, schools and professionals can collaborate with us on projects and community initiatives.",
    cta: "Partner With Us",
  },
  {
    icon: "Heart",
    title: "Support a Project",
    text: "Your financial or in-kind contribution can help us deliver educational and community interventions.",
    cta: "Support Let's Fly",
  },
];

// Placeholder partners. Add `logo` (an imported image) to any entry
// and it will show the logo instead of the text wordmark.
export const partners = [
  { name: "Partner One" },
  { name: "Partner Two" },
  { name: "Partner Three" },
  { name: "Partner Four" },
  { name: "Partner Five" },
  { name: "Partner Six" },
];

export const cta = {
  title: "Join the",
  accent: "movement.",
  text: "Whether you're a student looking for direction, a professional willing to mentor, a volunteer with a skill, or an organization looking for a grassroots partner, there is a place for you here.",
  closing: "Let's create possibilities together.",
  primary: { label: "Become a Volunteer", to: "/get-involved?type=volunteer" },
  secondary: { label: "Partner With Us", to: "/get-involved?type=partner" },
  paths: [
    {
      icon: "GraduationCap",
      label: "A student",
      text: "Find opportunities and guidance",
      to: "/opportunities",
    },
    {
      icon: "UserRound",
      label: "A mentor",
      text: "Guide a young person forward",
      to: "/get-involved",
    },
    {
      icon: "Hand",
      label: "A volunteer",
      text: "Give your time and skills",
      to: "/get-involved",
    },
    {
      icon: "Handshake",
      label: "An organization",
      text: "Partner with us on projects",
      to: "/get-involved",
    },
  ],
};
