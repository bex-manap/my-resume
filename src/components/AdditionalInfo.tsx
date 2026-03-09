import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { Award, GraduationCap, Globe, Heart } from "lucide-react";

const certifications = [
  {
    title: "Certified Investigator",
    issuer: "TRM Academy",
    year: "",
  },
];

const education = [
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

const languages = [
  { name: "English", proficiency: "C2 Proficiency" },
  { name: "Russian", proficiency: "Bilingual" },
  { name: "Kazakh", proficiency: "Native" },
  { name: "Turkish", proficiency: "Working Proficiency" },
];

const volunteering = [
  {
    role: "Event Organizer & Educator",
    organization:
      "Binance Digital Bridge 2023 · Binance Meet Up 2023 · Binance Super Meet Up 2024",
    period: "2023 – 2024",
    bullets: [
      "Assisted in event organization, booth setup, and attendee coordination to ensure smooth execution and professional brand representation.",
      "Educated forum participants on Binance products and crypto fundamentals, promoting awareness and adoption of blockchain technology.",
    ],
  },
];

export function AdditionalInfo() {
  return (
    <section id="education" className="py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Background & Beyond"
          subtitle="Continuous learning and giving back to the community."
        />

        <div className="grid md:grid-cols-2 gap-16 mt-16">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                <Award className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>
            <div className="space-y-6">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h4>
                  <div className="flex justify-between items-center mt-2 text-slate-400 text-sm">
                    <span>{cert.issuer}</span>
                    {cert.year && (
                      <span className="font-mono bg-slate-800 px-2 py-1 rounded-md">
                        {cert.year}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                <GraduationCap className="text-blue-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {edu.degree}
                  </h4>
                  <div className="flex justify-between items-center mt-2 text-slate-400 text-sm mb-4">
                    <span>{edu.institution}</span>
                    <span className="font-mono bg-slate-800 px-2 py-1 rounded-md">
                      {edu.year}
                    </span>
                  </div>
                  {edu.bullets && (
                    <ul className="space-y-2 mt-4">
                      {edu.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-slate-400 text-sm leading-relaxed"
                        >
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500/50 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                <Globe className="text-emerald-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Languages</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {languages.map((lang, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col gap-1"
                >
                  <span className="text-white font-medium">{lang.name}</span>
                  <span className="text-sm text-slate-400">
                    {lang.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Volunteering */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
                <Heart className="text-purple-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Volunteering</h3>
            </div>
            <div className="space-y-6">
              {volunteering.map((vol, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-white">
                      {vol.role}
                    </h4>
                    <span className="text-xs font-mono text-slate-500 bg-slate-800 px-2 py-1 rounded-md">
                      {vol.period}
                    </span>
                  </div>
                  <p className="text-sm text-cyan-400 mb-4">
                    {vol.organization}
                  </p>
                  {vol.bullets ? (
                    <ul className="space-y-2">
                      {vol.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-slate-400 text-sm leading-relaxed"
                        >
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-purple-500/50 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {/* @ts-ignore */}
                      {vol.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
