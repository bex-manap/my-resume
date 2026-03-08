import type { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  personalInfo: {
    name: "Bekzat Manapov",
    title: "AML Team Lead | Blockchain Investigations",
    description: "AML Team Lead with 4 years of experience in crypto compliance (ex-Binance, TON Wallet). Specializing in Team Management, Fraud Detection, Blockchain Investigations, Transaction Monitoring, and P2P investigation.",
    location: "Global",
    currentRole: "AML Team Lead",
    currentCompany: "Telegram Wallet",
    avatarUrl: "/ava.jpg"
  },
  contact: {
    email: "bex.manapov@gmail.com",
    telegram: "https://t.me/bekzatmanapov", 
    whatsapp: "https://wa.me/"
  },
  socials: [
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/bekzatmanapov", icon: "linkedin" },
    { platform: "Telegram", url: "https://t.me/bekzatmanapov", icon: "telegram" },
    { platform: "Email", url: "mailto:bex.manapov@gmail.com", icon: "mail" }
  ],
  experience: [
    {
      id: "0",
      role: "AML Team Lead",
      company: "Telegram Wallet",
      // Using public URL for Telegram Wallet logo
      logo: "/wallet.jpg",
      period: "January 2026 - Present",
      description: "Leading the AML team and overseeing compliance operations to ensure adherence to regulatory standards and internal SLAs.",
      achievements: [
        "Team Management: Supervising a team of AML/KYC analysts, managing shifts, and ensuring all tasks meet established SLAs (Service Level Agreements).",
        "Quality Assurance (QA): Regularly reviewing the team's cases to ensure the accuracy of risk assessments and adherence to internal protocols.",
        "Escalation Point: Serving as the final escalation point for critical-risk transactions, most complex cases and PEP (Politically Exposed Persons) reviews.",
        "Policy Development: Assist the Manager of Compliance in updating AML/CFT manuals to reflect evolving regulatory requirements.",
        "Stakeholder Collaboration: Working with Product and Engineering teams to integrate compliance features into the Wallet interface without compromising user experience.",
        "Trainings: Designed and delivered training programs for AML analysts, covering internal workflows to ensure consistent team performance."
      ]
    },
    {
      id: "1",
      role: "AML/CTF Specialist",
      company: "Telegram Wallet",
      // Using public URL for Telegram Wallet logo
      logo: "/wallet.jpg",
      period: "February 2025 - January 2026",
      description: "Achieved QA score of 98% and top list of KPI while handling critical risk cases.",
      achievements: [
        "Processed over 20,000 critical-risk blockchain transactions to mitigate risks in accordance with AML and CTF procedures.",
        "Helped to add multiple improvements in guidelines and QA standards to increase the efficiency of preventing illicit activities.",
        "Collaborated with development team to optimize admin systems, leading to a 15% reduction in manual case review time.",
        "Utilized on-chain analysis tools (Elliptic) to track illicit funds and trace blockchain transactions."
      ]
    },
    {
      id: "2",
      role: "Compliance Specialist",
      company: "Telegram Wallet",
      // Using public URL for Telegram Wallet logo
      logo: "/wallet.jpg",
      period: "September 2024 - February 2025",
      description: "Monitored blockchain transactions to prevent high-risk transactions in accordance with AML and CTF procedures.",
      achievements: [
        "Prevented over 5,000 high-risk users using enhanced due diligence and on-chain transactions.",
        "Reported and Escalated critical risk cases when required.",
        "Conducted profile due diligence to investigate and resolve cases involving money laundering, fraud, terrorism financing, scam, CSAM and other illicit activities.",
        "Conducted KYC reviews to identify and prevent the onboarding of high-risk profiles.",
        "Conducted in-depth investigations into P2P scam incidents to resolve disputes and prevent future attempts."
      ]
    },
    {
      id: "3",
      role: "Senior P2P Investigation Specialist",
      company: "Binance",
      // Using public URL for Binance logo
      logo: "/binance.png",
      period: "October 2022 - September 2024",
      description: "Simultaneously served as CSAT and agent performance analyst. Assisted as QA specialist.",
      achievements: [
        "Successfully resolved over 30,000 P2P financial disputes, ensuring timely and fair resolutions.",
        "Identified and prevented fraudulent activities on P2P by manually marking scammers and analyzing complex fraud schemes.",
        "Identified and escalated cases for potential money laundering and terrorist financing activities."
      ]
    },
  ],
  education: [
    {
      id: "edu1",
      degree: "Bachelor of Computer Science",
      institution: "Nazarbayev University",
      year: "August 2018 - June 2022"
    }
  ],
  skills: [
    {
      category: "Core Competencies",
      items: ["Blockchain Analysis (TON, BTC, ETH)", "Fraud Detection", "P2P Dispute Resolution", "AML/CTF Regulations (FATF, FinCEN)", "Risk Management", "Team Leadership"]
    },
    {
      category: "Software & Tools",
      items: ["SumSub", "Elliptic", "Chainalysis", "Jira", "Slack", "MySQL", "Linux", "Google Workspace"]
    },
    {
      category: "Soft Skills",
      items: ["Cross-team Collaboration", "Process Optimization", "Critical Thinking", "Detail Oriented", "Decision Making"]
    }
  ],
  growth: [
    "Volunteering: Digital Bridge (2023), Binance Meet Up (2023), Binance Super Meet up (2024) - Event organization and brand representation.",
    "Educated forum participants on Binance products and crypto fundamentals, promoting awareness and adoption of blockchain technology.",
    "Managing Family Crypto Portfolio: 8 years experience in interaction with various blockchain networks and diligent transaction monitoring."
  ],
  languages: [
    { language: "English", level: "C2 Proficiency" },
    { language: "Kazakh", level: "Native Proficiency" },
    { language: "Russian", level: "Bilingual Proficiency" },
    { language: "Turkish", level: "Working Proficiency" }
  ]
};