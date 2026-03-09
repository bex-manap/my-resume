import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Linkedin, Mail, Send, Download, Bitcoin } from "lucide-react";

export function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 md:pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl mix-blend-screen" />
        <HexGrid />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row gap-12 md:gap-12 items-center z-10">
        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left order-last md:order-first"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-sm font-medium mb-6"
          >
            4+ years of compliance experience
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-2 leading-tight">
            I am <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Bekzat Manapov
            </span>
          </h1>
          <Typewriter
            words={[
              "AML Team Lead",
              "Blockchain Investigation",
              "Fraud Prevention",
              "P2P Investigations",
              "Web3",
            ]}
          />
          <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed mx-auto md:mx-0">
            AML Team Lead with extensive experience in top-tier crypto exchanges
            like Binance and Wallet.
            <br className="mt-2 block" />
            Fraud Detection | Blockchain Investigations | Transaction Monitoring
            | P2P investigation
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto justify-center md:justify-start">
            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 items-center">
              <a
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center px-[32px] py-[14px] rounded-[50px] bg-gradient-to-r from-[#00C6FF] to-[#0072FF] text-white text-[15px] font-semibold tracking-[0.5px] transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(0,198,255,0.4)] hover:scale-105 active:scale-95"
              >
                Get in Touch
              </a>
              <a
                href="/Bekzat_Manapov_Resume.pdf"
                download="Bekzat_Manapov_Resume.pdf"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-[32px] py-[14px] rounded-[50px] bg-transparent border-[1.5px] border-[#00C6FF] text-[#00C6FF] text-[15px] font-semibold tracking-[0.5px] transition-all duration-300 ease-in-out hover:bg-[#0072FF]/20 hover:shadow-[0_0_20px_rgba(0,198,255,0.4)] hover:scale-105 active:scale-95"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </div>
            <div className="flex items-center gap-3 w-full justify-center sm:justify-start sm:ml-2 mt-2 sm:mt-0">
              <SocialLink
                href="https://www.linkedin.com/in/bekzatmanapov/"
                icon={<Linkedin size={20} />}
              />
              <SocialLink
                href="mailto:bex.manapov@gmail.com"
                icon={<Mail size={20} />}
              />
              <SocialLink
                href="https://t.me/bex_man"
                icon={<Send size={20} />}
              />
            </div>
          </div>
        </motion.div>

        {/* IMAGE CONTENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center md:justify-end w-full md:w-1/2 order-first md:order-last mb-4 md:mb-0"
        >
          <div className="relative w-full max-w-[320px] mx-auto rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl shadow-cyan-500/10">
            {/* Portrait image - tall aspect ratio */}
            <img
              src="/ava.jpg"
              alt="Bekzat Manapov"
              className="w-full aspect-[3/4] object-cover object-top block opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://picsum.photos/seed/portrait/600/800";
              }}
            />

            {/* Gradient fade at bottom so text blends in */}
            <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-[#050d1a] to-transparent pointer-events-none" />

            {/* "AML Team Lead" badge - bottom left of photo */}
            <motion.div
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-4 left-4 bg-[#050d1a]/85 backdrop-blur-md border border-cyan-500/20 rounded-2xl px-4 py-2.5 shadow-xl cursor-default transition-all duration-300 hover:shadow-[0_0_20px_rgba(41,130,255,0.3)] hover:border-[#2982ff]/40"
            >
              <span className="font-bold text-sm tracking-wide" style={{ color: "#2982ff" }}>
                AML Team Lead
              </span>
            </motion.div>

            {/* Floating coin icons - vertical stack on the right edge */}
            <div className="absolute right-[-18px] top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
              {[
                "https://assets.coingecko.com/coins/images/1/small/bitcoin.png",
                "https://assets.coingecko.com/coins/images/279/small/ethereum.png",
                "https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png",
                "https://assets.coingecko.com/coins/images/17980/small/ton_symbol.png",
              ].map((img, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                  className="w-[42px] h-[42px] rounded-full bg-[#0a1929] border-[1.5px] border-cyan-500/25 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                >
                  <img
                    src={img}
                    className="w-6 h-6 object-contain"
                    referrerPolicy="no-referrer"
                    alt="crypto"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full border border-slate-700 bg-slate-800/50 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all hover:-translate-y-1"
    >
      {icon}
    </a>
  );
}

function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1500);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      Math.max(reverse ? 30 : 80, Math.random() * 50),
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <div className="text-xl md:text-2xl font-medium text-cyan-400 h-8 mb-6 flex items-center justify-center md:justify-start">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse ml-1 w-1 h-6 bg-cyan-400 inline-block"></span>
    </div>
  );
}

function HexGrid() {
  const hexes = Array.from({ length: 60 });
  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.15] pointer-events-none z-0 mix-blend-screen">
      {hexes.map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${(i % 10) * 11 + (Math.floor(i / 10) % 2 === 0 ? 0 : 5.5)}%`,
            top: `${Math.floor(i / 10) * 12}%`,
            width: 48,
            height: 48,
            clipPath:
              "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)",
            background: `rgba(34,211,238,${0.1 + Math.random() * 0.3})`,
            animation: `hexPulse ${2 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}
