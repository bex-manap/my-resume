import React from "react";
import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import {
  ShieldCheck,
  Users,
  Search,
  Wrench,
  UserCheck,
  AlertTriangle,
  Link,
  ShieldAlert,
  Ban,
  FileText,
  Flag,
  CheckCircle,
} from "lucide-react";

const skills = [
  {
    name: "AML/CFT Compliance",
    description:
      "Hands-on experience applying FATF, FinCEN, EU AMLD, and OFAC frameworks to detect and prevent money laundering, terrorism financing, and sanctions violations across crypto platforms.",
    icon: ShieldCheck,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/30",
    shadow: "hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]",
  },
  {
    name: "Team Leadership",
    description:
      "Leading and supervising AML/KYC analyst teams, managing shifts, setting SLAs, conducting performance reviews, and serving as the final escalation point for complex cases.",
    icon: Users,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/30",
    shadow: "hover:shadow-[0_0_20px_rgba(96,165,250,0.3)]",
  },
  {
    name: "Transaction Monitoring",
    description:
      "Processed 20,000+ high-risk blockchain transactions, identifying suspicious patterns and escalating critical cases in accordance with internal AML/CTF procedures.",
    icon: Search,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/30",
    shadow: "hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]",
  },
  {
    name: "Tools & Platforms",
    description:
      "Elliptic, Chainalysis, TRM Forensics, SumSub, Jira, Linux, Microsoft Office, Google Workspace, Slack, MySQL, Java, Python, JavaScript",
    icon: Wrench,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/30",
    shadow: "hover:shadow-[0_0_20px_rgba(192,132,252,0.3)]",
  },
  {
    name: "KYC/KYB & EDD",
    description:
      "Conducted in-depth identity verification and enhanced due diligence reviews to assess customer risk profiles and prevent onboarding of high-risk or sanctioned entities.",
    icon: UserCheck,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/30",
    shadow: "hover:shadow-[0_0_20px_rgba(251,191,36,0.3)]",
  },
  {
    name: "Risk Assessment",
    description:
      "Evaluated counterparty and transactional risk across crypto products, applying structured risk frameworks to prioritize and mitigate exposure to financial crime.",
    icon: AlertTriangle,
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    border: "border-rose-400/30",
    shadow: "hover:shadow-[0_0_20px_rgba(251,113,133,0.3)]",
  },
  {
    name: "Blockchain & On-Chain Analysis",
    description:
      "Traced illicit fund flows across TON, BTC, ETH, and stablecoin networks using Elliptic and Chainalysis, reconstructing transaction paths to support investigations and regulatory reporting.",
    icon: Link,
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
    border: "border-indigo-400/30",
    shadow: "hover:shadow-[0_0_20px_rgba(129,140,248,0.3)]",
  },
  {
    name: "Fraud Detection & P2P Investigations",
    description:
      "Closed 30,000+ fraud and dispute cases across P2P platforms, identifying scam patterns, preventing repeat offenders, and contributing to platform-wide security improvements.",
    icon: ShieldAlert,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/30",
    shadow: "hover:shadow-[0_0_20px_rgba(251,146,60,0.3)]",
  },
  {
    name: "Sanctions Screening",
    description:
      "Applied OFAC SDN and other sanctions lists to flag and block prohibited entities, ensuring platform compliance with international sanctions regimes.",
    icon: Ban,
    color: "text-red-400",
    bg: "bg-red-400/10",
    border: "border-red-400/30",
    shadow: "hover:shadow-[0_0_20px_rgba(248,113,113,0.3)]",
  },
  {
    name: "Policy & Procedure Development",
    description:
      "Contributed to the creation and refinement of AML/CFT manuals, QA standards, and internal guidelines to reflect evolving regulatory requirements and operational best practices.",
    icon: FileText,
    color: "text-teal-400",
    bg: "bg-teal-400/10",
    border: "border-teal-400/30",
    shadow: "hover:shadow-[0_0_20px_rgba(45,212,191,0.3)]",
  },
  {
    name: "Suspicious Activity Reporting (SAR)",
    description:
      "Identified and escalated suspicious activity for regulatory reporting, ensuring timely and accurate SAR/STR filings in line with jurisdictional obligations.",
    icon: Flag,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/30",
    shadow: "hover:shadow-[0_0_20px_rgba(250,204,21,0.3)]",
  },
  {
    name: "Quality Assurance",
    description:
      "Maintained a 98% QA score as a specialist and now oversees team-wide case quality as lead, ensuring accuracy of risk assessments and consistent adherence to compliance protocols.",
    icon: CheckCircle,
    color: "text-lime-400",
    bg: "bg-lime-400/10",
    border: "border-lime-400/30",
    shadow: "hover:shadow-[0_0_20px_rgba(163,230,53,0.3)]",
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-slate-900/30 relative z-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Core Competencies"
          subtitle="Technical and leadership skills honed through years of experience in high-stakes regulatory environments."
        />

        <div className="flex flex-wrap gap-4 md:gap-6 mt-16 justify-center md:justify-start">
          {skills.map((skill, index) => (
            <SkillBadge key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBadge({
  skill,
  index,
}: {
  skill: any;
  index: number;
  key?: React.Key;
}) {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.05 }}
      className={`relative group flex items-center gap-3 px-5 py-3 rounded-full border ${skill.border} ${skill.bg} backdrop-blur-sm cursor-pointer transition-all duration-300 ${skill.shadow}`}
    >
      <Icon className={skill.color} size={20} />
      <span className="text-slate-200 font-medium whitespace-nowrap">
        {skill.name}
      </span>

      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-4 rounded-xl bg-slate-800 border border-slate-700 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 translate-y-2 group-hover:translate-y-0 pointer-events-none">
        <div className="flex justify-between items-center mb-2">
          <span className="text-white font-bold text-sm">{skill.name}</span>
        </div>
        <p className="text-slate-400 text-xs leading-relaxed whitespace-normal">
          {skill.description}
        </p>
        {/* Tooltip Arrow */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-[6px] border-transparent border-t-slate-800" />
      </div>
    </motion.div>
  );
}
