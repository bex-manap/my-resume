import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { AdditionalInfo } from "./components/AdditionalInfo";
import { Contact } from "./components/Contact";

const COINS = [
  { symbol: "BTC", color: "#F7931A", price: "67,420", change: "+2.4%" },
  { symbol: "ETH", color: "#627EEA", price: "3,521", change: "+1.8%" },
  { symbol: "BNB", color: "#F3BA2F", price: "412", change: "-0.6%" },
  { symbol: "TON", color: "#0098EA", price: "6.84", change: "+5.1%" },
];

export default function App() {
  const tickerItems = [
    ...COINS,
    ...COINS,
    ...COINS,
    ...COINS,
    ...COINS,
    ...COINS,
    ...COINS,
    ...COINS,
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 pb-10">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <AdditionalInfo />
        <Contact />
      </main>
      <footer className="py-8 pb-16 text-center text-slate-500 text-sm border-t border-slate-800">
        <p>© {new Date().getFullYear()} AML Team Lead. All rights reserved.</p>
      </footer>

      {/* Ticker */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-950/95 backdrop-blur-md border-t border-cyan-500/20 py-2.5 overflow-hidden z-50 shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
        <div className="flex animate-[ticker_30s_linear_infinite] whitespace-nowrap w-max hover:[animation-play-state:paused]">
          {tickerItems.map((c, i) => (
            <span
              key={i}
              className="mr-16 text-xs md:text-sm tracking-wider font-mono flex items-center cursor-default"
            >
              <span style={{ color: c.color }}>◆ {c.symbol}</span>
              <span className="text-white ml-3">${c.price}</span>
              <span
                className={
                  c.change.startsWith("+")
                    ? "text-emerald-400 ml-2"
                    : "text-rose-400 ml-2"
                }
              >
                {c.change}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
