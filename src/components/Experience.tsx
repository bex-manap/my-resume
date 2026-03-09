import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { Briefcase, Calendar, ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

const experiences = [
  {
    id: 1,
    company: "Telegram Wallet",
    logo: "/wallet.jpg",
    role: "AML Team Lead",
    period: "January 2026 – Present",
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
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="pt-16 pb-16 md:pb-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading title="Professional Journey" />

        <div ref={containerRef} className="relative mt-16">
          {/* Background Line */}
          <div className="absolute left-[15px] md:left-[23px] top-0 bottom-0 w-[2px] bg-slate-800 rounded-full" />

          {/* Animated Fill Line */}
          <motion.div
            className="absolute left-[15px] md:left-[23px] top-0 w-[2px] bg-gradient-to-b from-cyan-400 to-blue-500 origin-top rounded-full z-0"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, index) => (
              <ExperienceItem key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({
  exp,
  index,
}: {
  exp: any;
  index: number;
  key?: React.Key;
}) {
  const [isExpanded, setIsExpanded] = useState(index === 0);

  return (
    <div className="relative pl-12 md:pl-20 group">
      {/* Animated Timeline Dot */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
        className="absolute left-[7px] md:left-[15px] top-1.5 w-[18px] h-[18px] rounded-full bg-slate-950 border-[3px] border-cyan-400 z-10 flex items-center justify-center"
      >
        <motion.div
          animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full bg-cyan-400"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div
          className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2 cursor-pointer bg-slate-900/40 hover:bg-slate-800/60 p-4 rounded-2xl border border-slate-800/60 transition-colors"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div>
            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              {exp.role}
            </h3>
            <div className="flex items-center gap-2 text-slate-400 mt-1">
              {exp.logo ? (
                <img src={exp.logo} alt={exp.company} className="w-5 h-5 rounded-sm object-contain" />
              ) : (
                <Briefcase size={16} className="text-cyan-500" />
              )}
              <span className="font-medium text-slate-300">{exp.company}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-950/50 px-3 py-1.5 rounded-full border border-slate-800 w-fit">
              <Calendar size={14} />
              <span>{exp.period}</span>
            </div>
            <button className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-cyan-400 transition-colors">
              <ChevronDown
                className={cn(
                  "transition-transform duration-300",
                  isExpanded ? "rotate-180" : "",
                )}
                size={20}
              />
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="bg-slate-900/20 border border-slate-800/40 rounded-2xl p-6 mt-2">
                <ul className="space-y-3 mb-6">
                  {exp.description.map((item: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-400 leading-relaxed"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-500/50 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill: string, i: number) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
