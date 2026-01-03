import type { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  personalInfo: {
    name: "Bekzat Manapov",
    title: "AML/CTF | Blockchain Investigations | P2P",
    description: 'Experienced AML/CTF Specialist with a strong background in crypto compliance at Binance and TON Wallet. Focused on blockchain forensics, fraud prevention, transaction monitoring, and P2P risk mitigation.',
    location: "Global",
    currentRole: "AML/CTF Team Lead",
    currentCompany: "Telegram Wallet",
    avatarUrl: "/ava.jpg"
  },
  contact: {
    email: "bex.manapov@gmail.com",
    telegram: "https://t.me/bex_man", 
    whatsapp: "https://wa.me/77066076607"
  },
  socials: [
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/bekzatmanapov", icon: "linkedin" },
    { platform: "Telegram", url: "https://t.me/bex_man", icon: "telegram" },
    { platform: "Email", url: "mailto:bex.manapov@gmail.com", icon: "mail" }
  ],
  experience: [
    {
      id: "1",
      role: "AML/CTF Team Lead",
      company: "Telegram Wallet",
      // Using public URL for Telegram Wallet logo
      logo: "/wallet.jpg",
      period: "February 2025 - Present",
      description: "Achieved QA score of 98% and top list of KPI while handling critical risk cases.",
      achievements: [
        "Processed over 10,000 critical-risk blockchain transactions to mitigate risks in accordance with AML and CTF procedures.",
        "Helped to add multiple improvements in guidelines and QA standards to increase the efficiency of preventing money laundering, fraud, terrorism financing, scam, CSAM and other illicit activities.",
        "Collaborated with development team to optimize admin systems to enhance compliance and AML operational efficiency. Which led to a 15% reduction in manual case review time",
        "Utilized on-chain analysis tools (Elliptic and Chainalysis) to track illicit funds and trace blockchain transactions.",
        "Collaborated with other teams (compliance, security, and legal) to mitigate risks and improve AML processes."
      ]
    },
    {
      id: "2",
      role: "Compliance Specialist",
      company: "Telegram Wallet",
      // Using public URL for Telegram Wallet logo
      logo: "/wallet.jpg",
      period: "September 2024 - February 2025",
      description: "Handled AML/CTF transaction monitoring, KYC/EDD reviews, P2P fraud investigations, and escalation of high-risk crypto activity.",
      achievements: [
        "Monitored blockchain transactions to prevent high-risk transactions in accordance with AML and CTF procedures.",
        "Prevented over 5,000 high-risk users using enhanced due diligence and on-chain transactions.",
        "Reported and Escalated critical risk cases when required.",
        "Fraud detection. Conducted profile due diligence in order to investigate and resolve cases involving money laundering, fraud, terrorism financing, scam, CSAM and other illicit activities.",
        "Conducted KYC reviews to identify and prevent the onboarding of high-risk profiles.",
        "P2P market: Conducted in-depth investigations into scam incidents in order to resolve disputes and prevent future scam attempts."
      ]
    },
    {
      id: "3",
      role: "Senior P2P Investigation Specialist",
      company: "Binance",
      // Using public URL for Binance logo
      logo: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
      period: "October 2022 - September 2024",
      description: "Resolved 20,000+ P2P disputes, detected fraud schemes, escalated ML/TF cases, and supported QA, CSAT, and agent performance analysis.",
      achievements: [
        "Successfully resolved over 20,000 P2P financial disputes, ensuring timely and fair resolutions.",
        "Identified and prevented fraudulent activities on P2P, contributing to platform security by case manually marking (CMM) scammers and analyzing complex fraud schemes.",
        "Identifying and escalating cases for potential money laundering and terrorist financing activities.",
        "Simultaneously served as CSAT and agent performance analyst. Assisted as QA specialist."
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
      items: ["Blockchain Analysis (TON, BTC, ETH)", "Fraud Detection", "P2P Dispute Resolution", "AML/CTF Regulations (FATF, FinCEN)", "Risk Management"]
    },
    {
      category: "Software & Tools",
      items: ["SumSub", "Elliptic", "Chainalysis", "Jira", "Slack", "MySQL", "Linux", "Google Workspace"]
    },
    {
      category: "Soft Skills",
      items: ["Cross-team Collaboration", "Process Optimization", "Critical Thinking", "Detail Oriented"]
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