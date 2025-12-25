import React from 'react';
import { RESUME_DATA } from '../constants';
import { Calendar } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  return (
    <div className="space-y-12">
      {RESUME_DATA.experience.map((exp) => (
        <div key={exp.id} className="relative pl-8 md:pl-0">
          {/* Timeline Line */}
          {/* Adjusted left position based on new column width: 288px (w-72) + 21px = 309px */}
          <div className="hidden md:block absolute left-[309px] top-0 bottom-0 w-px bg-stone-200" />
          
          <div className="md:flex gap-12 group">
            {/* Left Column: Date - Increased width from w-72 (288px) to fit long dates */}
            <div className="md:w-72 flex-shrink-0 mb-2 md:mb-0 md:text-right">
              <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone-600 bg-stone-100 px-3 py-1 rounded-full border border-stone-200 whitespace-nowrap">
                <Calendar className="w-3.5 h-3.5" />
                {exp.period}
              </div>
            </div>

            {/* Timeline Dot */}
            {/* Adjusted left position: 309px - 5px = 304px */}
            <div className="hidden md:block absolute left-[304px] top-4 w-2.5 h-2.5 rounded-full bg-stone-400 ring-4 ring-white group-hover:bg-stone-800 transition-colors" />

            {/* Right Column: Content */}
            <div className="flex-1 bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
               <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    {exp.logo && (
                      <div className="flex-shrink-0">
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`} 
                          className="w-12 h-12 object-contain rounded-lg bg-stone-50 p-1 border border-stone-100" 
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-bold text-stone-900">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-stone-600 mt-1">
                          <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                  </div>
               </div>
               
               <p className="text-stone-600 mb-4 leading-relaxed">
                 {exp.description}
               </p>

               <div>
                 <ul className="space-y-2">
                   {exp.achievements.map((item, i) => (
                     <li key={i} className="flex items-start gap-3 text-sm text-stone-700">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-stone-400 flex-shrink-0" />
                        <span>{item}</span>
                     </li>
                   ))}
                 </ul>
               </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;