import React from 'react';
import { RESUME_DATA } from '../constants';

const SkillsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {RESUME_DATA.skills.map((skillGroup, idx) => (
        <div key={idx} className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
          <h3 className="text-lg font-bold text-stone-800 mb-4 flex items-center gap-2">
            {skillGroup.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {skillGroup.items.map((skill, sIdx) => (
              <span 
                key={sIdx}
                className="px-3 py-1.5 bg-white border border-stone-200 text-stone-700 text-sm font-medium rounded-lg shadow-sm hover:border-stone-400 hover:text-stone-900 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;