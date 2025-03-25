export interface ExperienceItemProp {
  company: string;
  title: string;
  period: string;
  location: string;
  description: string[];
}

export interface EducationItemProp {
  school: string;
  degree: string;
  period: string;
  location: string;
  details?: string[];
}

export interface CertificationItemProp {
  name: string;
  issuer: string;
  date: string;
}

export const resumeData = {
  name: "Priyam Singhal",
  title: "Software Engineering Leader & Entrepreneur",
  summary: "Entrepreneurial engineering leader with a track record of building innovative products and high-performing teams. Currently focused on leveraging technology for social impact in education and sustainability.",
  
  experience: [
    {
      company: "Ed2Play & Change2Green",
      title: "Founder & CEO",
      period: "2025 - Present",
      location: "San Francisco Bay Area",
      description: [
        "Founded two mission-driven startups in education and sustainability sectors",
        "Building AI-powered educational gaming platform to make learning engaging",
        "Developing technology solutions for environmental sustainability",
        "Leading product strategy, engineering, and business development"
      ]
    },
    {
      company: "M2We (NPO for Stanford GSB LEAD Alumni)",
      title: "Head of Operations & Logistics",
      period: "2023 - 2024",
      location: "Bay Area, CA",
      description: [
        "Organized a successful event for in-person 500+ LEADers from all",
        "With a team of total 5 people, organized event logistics like registrations, speakers, content, scheduling, catering, seating, venues, sessions, swags, field trips, transportations, accommodations etc."
      ]
    },
    {
      company: "Amazon",
      title: "Software Development Manager",
      period: "2019 - 2024",
      location: "Bay Area, CA",
      description: [
        "Led engineering teams in developing large-scale distributed systems",
        "Drove technical strategy and architectural decisions",
        "Led a 25+ person team developing Visual Search (Amazon Lens) mobile features including iOS and Android using Objective-C, Java, Kotlin and ReactNative",
        "Collaborated with product, design, and backend teams to deliver successful products and shape the roadmap",
        "Conducted A/B tests to enhance user experience",
        "Hired, mentored, and developed software engineers"
      ]
    },
    {
      company: "Amazon",
      title: "Software Development Engineer",
      period: "2016 - 2019",
      location: "Bay Area, CA",
      description: [
        "Designed innovative iOS app UI with multi-gesture responsiveness",
        "Led a major app refactor for Amazon mobile Shopping app",
        "Mentored engineers on coding practices and knowledge sharing"
      ]
    },
    {
      company: "Apple (via TCS)",
      title: "Software Development Engineer",
      period: "2010 - 2016",
      location: "Bay Area, CA",
      description: [
        "Developed iOS features for the Apple POS application used in Apple Stores worldwide (EasyPay Touch)",
        "Developed automation testing infrastructure based in Objective-C"
      ]
    }
    // Add more experiences from the PDF
  ],

  education: [
    {
      school: "Stanford Graduate School of Business",
      degree: "Stanford LEAD Program",
      period: "2022 - 2023",
      location: "Stanford, CA"
    },
    {
      school: "Noida Institute of Engineering and Technology",
      degree: "Bachelor of Technology in Information Technology",
      period: "2006 - 2010"
    },
    // Add more education from the PDF
  ],

  certifications: [
    {
      name: "AWS Machine Learning University GenAI for Leaders",
      issuer: "Amazon Web Services",
      date: "2024"
    },
    {
      name: "Sun Certified Java Programmer",
      issuer: "Oracle",
      date: "2013"
    },
    {
      name: "LEAD1x: Exercising Leadership: Foundational Principles",
      issuer: "EdX & HarvardX",
      date: "2020"
    },
    // Add more certifications from the PDF
  ],

  skills: [
    "Engineering Leadership",
    "System Design",
    "Agile Methodologies",
    "Team Building",
    "Full Stack Development",
    "DevOps & CI/CD",
    "Planning & Strategy",
    "Product Management",
    "Software Analytics",
    "Generative AI",
    "Mobile Development",
    "Operations & Logistics",
    "Event Management",
    "Team Management",    
  ]
}; 