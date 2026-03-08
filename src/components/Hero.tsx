import React from 'react';
import { RESUME_DATA } from '../constants';
import { Github, Linkedin, Twitter, Mail, ChevronDown, MapPin, Building2, Download } from 'lucide-react';

const SocialIcon = ({ name, className }: { name: string; className?: string }) => {
  switch (name.toLowerCase()) {
    case 'github': return <Github className={className} />;
    case 'linkedin': return <Linkedin className={className} />;
    case 'twitter': return <Twitter className={className} />;
    case 'email': return <Mail className={className} />;
    case 'telegram': return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.928 2.62c-.99-.46-2.58-.69-4.84.14-11.06 4.09-15.02 5.86-15.19 6.86-.14.83.69 1.25 1.54 1.52.85.27 2.2.82 2.2.82s.64 1.96 1.03 3.63c.27 1.16.27 1.01.83.99.55-.02.99-.41 1.27-.68.28-.27 1.76-1.74 1.76-1.74s2.61 1.96 4.7 3.44c1.1.77 2.06.41 2.34-.85.74-3.3 2.15-9.28 2.61-12.06.05-.33.05-.66-.25-.97-.3-.31-.69-.36-1.05-.22z"/>
      </svg>
    );
    default: return <Mail className={className} />;
  }
};

const Hero: React.FC = () => {
  const { personalInfo, socials } = RESUME_DATA;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-stone-900 text-white overflow-hidden">
      {/* Background Decorative Elements - Earth Tones */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
         <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-stone-500 rounded-full blur-[120px]" />
         <div className="absolute top-[40%] -right-[10%] w-[500px] h-[500px] bg-stone-600 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
        
        {/* Profile Image */}
        <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-stone-500 to-stone-200 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
          <img 
            src={personalInfo.avatarUrl} 
            alt={personalInfo.name} 
            className="relative w-full h-full rounded-full object-cover border-4 border-stone-800 shadow-2xl"
          />
          <div className="absolute bottom-4 right-4 bg-stone-800 p-2 rounded-full border border-stone-600 shadow-lg">
             <div className="w-2.5 h-2.5 bg-stone-200 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center md:text-left max-w-2xl">
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-100 via-stone-200 to-stone-400">{personalInfo.name}</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-stone-400 mb-6 font-light">
            {personalInfo.title}
          </h2>

          <p className="text-stone-300 text-lg leading-relaxed mb-8">
            {personalInfo.description}
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8 text-sm text-stone-400">
             <div className="flex items-center gap-2 bg-stone-800/50 px-4 py-2 rounded-lg backdrop-blur-sm border border-stone-700">
                <Building2 className="w-4 h-4 text-stone-300" />
                <span>{personalInfo.currentRole} at <span className="font-medium text-stone-200">{personalInfo.currentCompany}</span></span>
             </div>
             <div className="flex items-center gap-2 bg-stone-800/50 px-4 py-2 rounded-lg backdrop-blur-sm border border-stone-700">
                <MapPin className="w-4 h-4 text-stone-300" />
                <span>{personalInfo.location}</span>
             </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <a 
              href="/Bekzat Manapov Resume.pdf" 
              download
              className="flex items-center gap-2 px-6 py-3 bg-stone-100 hover:bg-white text-stone-900 rounded-full font-medium transition-all shadow-lg hover:-translate-y-1"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
            
            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  className="p-3 bg-stone-800 rounded-full text-stone-400 hover:text-stone-100 hover:bg-stone-700 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                  aria-label={social.platform}
                >
                  <SocialIcon name={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-stone-500">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;