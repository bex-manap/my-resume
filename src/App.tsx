import React from 'react';
import Hero from './components/Hero';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import { RESUME_DATA } from './constants';
import { GraduationCap, Languages, TrendingUp, Download, Mail } from 'lucide-react';

interface SectionTitleProps {
  children: React.ReactNode;
  icon: React.ElementType;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, icon: Icon }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="p-2 bg-stone-200 text-stone-800 rounded-lg">
      <Icon className="w-6 h-6" />
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-stone-900">{children}</h2>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      <Hero />
      
      <main className="container mx-auto px-4 md:px-6 py-20 max-w-5xl space-y-24">
        
        {/* Experience Section */}
        <section id="experience" className="scroll-mt-20">
          <SectionTitle icon={TrendingUp}>Professional Experience</SectionTitle>
          <ExperienceSection />
        </section>

        {/* Education & Skills Split */}
        <div className="grid md:grid-cols-2 gap-12">
            
            {/* Education */}
            <section>
              <SectionTitle icon={GraduationCap}>Education</SectionTitle>
              <div className="space-y-6">
                {RESUME_DATA.education.map(edu => (
                    <div key={edu.id} className="bg-white p-6 rounded-2xl border-l-4 border-stone-700 shadow-sm">
                        <h3 className="text-lg font-bold text-stone-900">{edu.degree}</h3>
                        <p className="text-stone-600">{edu.institution}</p>
                        <p className="text-sm text-stone-400 mt-2">{edu.year}</p>
                    </div>
                ))}
              </div>
            </section>

             {/* Languages */}
             <section>
                <SectionTitle icon={Languages}>Languages</SectionTitle>
                <div className="space-y-4">
                    {RESUME_DATA.languages.map((lang, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 bg-white border border-stone-100 rounded-xl shadow-sm">
                            <span className="font-semibold text-stone-700">{lang.language}</span>
                            <span className="text-sm text-stone-600 bg-stone-100 px-3 py-1 rounded-full">{lang.level}</span>
                        </div>
                    ))}
                </div>
            </section>

        </div>

        {/* Skills */}
        <section>
           <SectionTitle icon={TrendingUp}>Technical Skills</SectionTitle>
           <SkillsSection />
        </section>

        {/* Growth */}
        <section className="bg-gradient-to-br from-stone-800 to-stone-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    Growth & Contributions
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {RESUME_DATA.growth.map((item, i) => (
                        <div key={i} className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors">
                            <p className="leading-relaxed text-stone-100">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Decorative circles - Warm Tones */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-stone-600 rounded-full blur-[80px] opacity-30"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-stone-500 rounded-full blur-[80px] opacity-30"></div>
        </section>

        {/* Contact Form */}
        <section id="contact">
          <SectionTitle icon={Mail}>Get in Touch</SectionTitle>
          <ContactSection />
        </section>

        {/* Footer */}
        <footer className="pt-12 border-t border-stone-200 text-center text-stone-500 pb-20">
            <p>© {new Date().getFullYear()} {RESUME_DATA.personalInfo.name}. All rights reserved.</p>
            <div className="mt-4 flex justify-center gap-4">
                <a 
                  href="/Bekzat Manapov Resume.pdf" 
                  download
                  className="flex items-center gap-2 text-sm font-medium text-stone-800 hover:text-stone-600 transition-colors"
                >
                    <Download className="w-4 h-4" />
                    Download PDF Resume
                </a>
            </div>
        </footer>

      </main>
    </div>
  );
};

export default App;