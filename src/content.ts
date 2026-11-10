// Single source of truth for all resume content.
// Every design variant reads from here, so the text stays identical across designs.

export const profile = {
  name: "Bekzat Manapov",
  greeting: "I am",
  photo: "/ava.jpg",
  badge: "4+ years of compliance experience",
  roles: [
    "AML Team Lead",
    "Blockchain Investigation",
    "Fraud Prevention",
    "P2P Investigations",
    "Web3",
  ],
  summary:
    "AML Team Lead with extensive experience in top-tier crypto exchanges like Binance and Wallet.",
  focus: [
    "Fraud Detection",
    "Blockchain Investigations",
    "Transaction Monitoring",
    "P2P investigation",
  ],
  resumePdf: "/Bekzat Manapov Resume.pdf",
  footer: "AML Team Lead. All rights reserved.",
};

export const links = {
  linkedin: "https://www.linkedin.com/in/bekzatmanapov/",
  email: "mailto:bex.manapov@gmail.com",
  emailAddress: "bex.manapov@gmail.com",
  telegram: "https://t.me/bex_man",
  telegramHandle: "@bex_man",
  whatsapp: "https://wa.me/77066076607",
};

export const nav = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const sections = {
  experience: { title: "Professional Journey" },
  skills: {
    title: "Core Competencies",
    subtitle:
      "Technical and leadership skills honed through years of experience in high-stakes regulatory environments.",
  },
  background: {
    title: "Background & Beyond",
    subtitle: "Continuous learning and giving back to the community.",
  },
  contact: { title: "Contact Information" },
};

export type Experience = {
  id: number;
  company: string;
  logo?: string;
  role: string;
  period: string;
  start: string;
  end: string;
  description: string[];
  skills: string[];
};

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Telegram Wallet",
    logo: "/wallet.jpg",
    role: "AML Team Lead",
    period: "January 2026 – Present",
    start: "January 2026",
    end: "Present",
    description: [
      "Lead the AML team and oversee compliance operations, ensuring adherence to regulatory standards and internal SLAs.",
      "Manage a team of AML analysts, coordinate shifts, and ensure all tasks meet established Service Level Agreements.",
      "Conduct regular quality assurance reviews of team cases to ensure accuracy of risk assessments and adherence to internal protocols.",
      "Serve as the final escalation point for critical-risk transactions, most complex cases and PEP (Politically Exposed Persons) reviews",
      "Assist the Manager of Compliance in updating AML/CFT manuals to reflect evolving regulatory requirements",
      "Designed and delivered training programs for AML analysts, covering internal workflows to ensure consistent team performance.",
    ],
    skills: [
      "Team Leadership",
      "Quality Assurance",
      "PEP Reviews",
      "Training & Development",
    ],
  },
  {
    id: 2,
    company: "Telegram Wallet",
    logo: "/wallet.jpg",
    role: "AML Compliance Specialist",
    period: "September 2024 – January 2026",
    start: "September 2024",
    end: "January 2026",
    description: [
      "Maintained a QA score of 98% and consistently ranked at the top of KPI metrics across all reviewed tasks.",
      "Processed over 20,000 high-risk blockchain transactions to mitigate exposure to money laundering, fraud, terrorism financing, and other illicit activities.",
      "Conducted KYC reviews and profile due diligence to investigate and resolve cases involving money laundering, fraud, terrorism financing, scam, CSAM, and other illicit conduct.",
      "Contributed to multiple improvements in internal guidelines and QA standards, enhancing detection and prevention efficiency.",
      "Applied on-chain analysis tools (Elliptic) to trace illicit funds and reconstruct blockchain transaction flows.",
      "Coordinated across compliance, security, and legal teams to strengthen AML processes and mitigate emerging risks.",
    ],
    skills: [
      "Transaction Monitoring",
      "KYC/EDD",
      "On-Chain Analysis (Elliptic)",
      "Process Improvement",
    ],
  },
  {
    id: 3,
    company: "Binance",
    logo: "/binance.png",
    role: "Senior P2P Investigation Specialist",
    period: "October 2022 – September 2024",
    start: "October 2022",
    end: "September 2024",
    description: [
      "Successfully resolved over 30,000 P2P financial disputes, delivering timely and fair outcomes for all parties involved.",
      "Identified and prevented fraudulent activities on the P2P platform through case manual marking (CMM) and analysis of complex fraud schemes.",
      "Escalated cases with indicators of money laundering or terrorist financing to senior compliance stakeholders.",
      "Concurrently served as CSAT analyst and agent performance analyst; also assisted the QA team in quality reviews.",
    ],
    skills: [
      "P2P Investigations",
      "Fraud Detection",
      "Dispute Resolution",
      "CSAT Analysis",
    ],
  },
  {
    id: 4,
    company: "DrinkIt & Health Project",
    role: "Assistant to CEO",
    period: "June 2019 – October 2022",
    start: "June 2019",
    end: "October 2022",
    description: [
      "Managed investor relations and negotiated deals with investors, landlords, suppliers, and media personalities.",
      "Organized investor meetings, presentations, and events showcasing the company's financial performance.",
      "Handled HR across the company, including recruitment, onboarding, and employee relations.",
      "Ran the company's coffee shop, managing supplier relationships and negotiating contracts.",
      "Maintained business process documentation and tracked financial reports.",
    ],
    skills: [
      "Investor Relations",
      "Negotiations",
      "HR & Recruitment",
      "Financial Reporting",
    ],
  },
];

export const skills = [
  {
    name: "AML/CFT Compliance",
    description:
      "Hands-on experience applying FATF, FinCEN, EU AMLD, and OFAC frameworks to detect and prevent money laundering, terrorism financing, and sanctions violations across crypto platforms.",
  },
  {
    name: "Team Leadership",
    description:
      "Leading and supervising AML/KYC analyst teams, managing shifts, setting SLAs, conducting performance reviews, and serving as the final escalation point for complex cases.",
  },
  {
    name: "Transaction Monitoring",
    description:
      "Processed 20,000+ high-risk blockchain transactions, identifying suspicious patterns and escalating critical cases in accordance with internal AML/CTF procedures.",
  },
  {
    name: "Tools & Platforms",
    description:
      "Elliptic, Chainalysis, TRM Forensics, SumSub, Jira, Linux, Microsoft Office, Google Workspace, Slack, MySQL, Java, Python, JavaScript",
  },
  {
    name: "KYC/KYB & EDD",
    description:
      "Conducted in-depth identity verification and enhanced due diligence reviews to assess customer risk profiles and prevent onboarding of high-risk or sanctioned entities.",
  },
  {
    name: "Risk Assessment",
    description:
      "Evaluated counterparty and transactional risk across crypto products, applying structured risk frameworks to prioritize and mitigate exposure to financial crime.",
  },
  {
    name: "Blockchain & On-Chain Analysis",
    description:
      "Traced illicit fund flows across TON, BTC, ETH, and stablecoin networks using Elliptic and Chainalysis, reconstructing transaction paths to support investigations and regulatory reporting.",
  },
  {
    name: "Fraud Detection & P2P Investigations",
    description:
      "Closed 30,000+ fraud and dispute cases across P2P platforms, identifying scam patterns, preventing repeat offenders, and contributing to platform-wide security improvements.",
  },
  {
    name: "Sanctions Screening",
    description:
      "Applied OFAC SDN and other sanctions lists to flag and block prohibited entities, ensuring platform compliance with international sanctions regimes.",
  },
  {
    name: "Policy & Procedure Development",
    description:
      "Contributed to the creation and refinement of AML/CFT manuals, QA standards, and internal guidelines to reflect evolving regulatory requirements and operational best practices.",
  },
  {
    name: "Suspicious Activity Reporting (SAR)",
    description:
      "Identified and escalated suspicious activity for regulatory reporting, ensuring timely and accurate SAR/STR filings in line with jurisdictional obligations.",
  },
  {
    name: "Quality Assurance",
    description:
      "Maintained a 98% QA score as a specialist and now oversees team-wide case quality as lead, ensuring accuracy of risk assessments and consistent adherence to compliance protocols.",
  },
];

export const certifications = [
  { title: "Certified Investigator", issuer: "TRM Academy", year: "" },
];

export const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Nazarbayev University - Astana, Kazakhstan",
    year: "August 2018 – June 2022",
    bullets: [
      "President, NU Business Club — organized the annual Business Forum with 900+ participants.",
      "Founder, University Crypto Community — established and led a club dedicated to blockchain research and crypto education.",
    ],
  },
];

export const languages = [
  { name: "English", proficiency: "C2 Proficiency" },
  { name: "Russian", proficiency: "Bilingual" },
  { name: "Kazakh", proficiency: "Native" },
  { name: "Turkish", proficiency: "Working Proficiency" },
];

export const volunteering = [
  {
    role: "Event Organizer & Educator",
    organization:
      "Binance Digital Bridge 2023 · Binance Meet Up 2023 · Binance Super Meet Up 2024",
    events: [
      "Binance Digital Bridge 2023",
      "Binance Meet Up 2023",
      "Binance Super Meet Up 2024",
    ],
    period: "2023 – 2024",
    bullets: [
      "Assisted in event organization, booth setup, and attendee coordination to ensure smooth execution and professional brand representation.",
      "Educated forum participants on Binance products and crypto fundamentals, promoting awareness and adoption of blockchain technology.",
    ],
  },
];

/** "September 2024 – January 2026" → "Sep 2024 – Jan 2026" */
export function shortPeriod(period: string) {
  return period.replace(
    /\b(January|February|March|April|May|June|July|August|September|October|November|December)\b/g,
    (m) => m.slice(0, 3),
  );
}

/** Splits text so figures like "20,000", "30,000+", "98%", "900+" can be styled. */
export function splitFigures(text: string): { text: string; figure: boolean }[] {
  const re = /(\d{1,3}(?:,\d{3})+\+?|\d+%|\d+\+)/g;
  const out: { text: string; figure: boolean }[] = [];
  let last = 0;
  for (const m of text.matchAll(re)) {
    if (m.index! > last) out.push({ text: text.slice(last, m.index), figure: false });
    out.push({ text: m[0], figure: true });
    last = m.index! + m[0].length;
  }
  if (last < text.length) out.push({ text: text.slice(last), figure: false });
  return out;
}
