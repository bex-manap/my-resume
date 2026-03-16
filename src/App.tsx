import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { AdditionalInfo } from "./components/AdditionalInfo";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <AdditionalInfo />
        <Contact />
      </main>
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-800">
        <p>© {new Date().getFullYear()} AML Team Lead. All rights reserved.</p>
      </footer>
    </div>
  );
}
