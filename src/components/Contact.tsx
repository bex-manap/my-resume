import React from "react";
import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { Mail, Send, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-slate-900/50 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Information
            </span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <ContactLink
              href="https://t.me/yourtelegram"
              icon={<Send size={24} />}
              label="Telegram"
              color="bg-blue-500 hover:bg-blue-400"
            />
            <ContactLink
              href="mailto:life.bekzat@gmail.com"
              icon={<Mail size={24} />}
              label="Email Me"
              color="bg-cyan-500 hover:bg-cyan-400"
            />
            <ContactLink
              href="https://wa.me/1234567890"
              icon={<MessageCircle size={24} />}
              label="WhatsApp"
              color="bg-emerald-500 hover:bg-emerald-400"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  icon,
  label,
  color,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  color: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-3 px-8 py-4 rounded-full text-slate-950 font-bold transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl ${color}`}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}
