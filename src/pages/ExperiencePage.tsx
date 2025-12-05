import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItemProps {
  company: string;
  role: string;
  period: string;
  description: string[];
  isLatest?: boolean;
}

function ExperienceItem({ company, role, period, description, isLatest }: ExperienceItemProps) {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-slate-200 last:pb-0">
      <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full ${
        isLatest ? 'bg-blue-600' : 'bg-slate-400'
      }`}></div>

      <div className="space-y-3">
        <div>
          <h3 className="text-xl font-bold text-slate-900">{role}</h3>
          <p className="text-blue-600 font-semibold">{company}</p>
        </div>

        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <Calendar className="w-4 h-4" />
          <span>{period}</span>
        </div>

        <ul className="space-y-2 text-slate-700">
          {description.map((item, index) => (
            <li key={index} className="flex gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ExperiencePage() {
  const experiences = [
    {
      company: "Current Company Name",
      role: "Current Position",
      period: "2023 - Present",
      description: [
        "Key responsibility or achievement in your current role",
        "Another important contribution or project you've led",
        "Technical skills or leadership qualities demonstrated"
      ],
      isLatest: true
    },
    {
      company: "Previous Company Name",
      role: "Previous Position",
      period: "2020 - 2023",
      description: [
        "Major project or responsibility in this role",
        "Skills developed or achievements earned",
        "Impact you made on the organization"
      ]
    },
    {
      company: "Earlier Company Name",
      role: "Earlier Position",
      period: "2018 - 2020",
      description: [
        "What you accomplished in this position",
        "Technologies or methodologies you worked with",
        "Professional growth and learning experiences"
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <Briefcase className="w-8 h-8 text-blue-600" />
        <h1 className="text-4xl font-bold text-slate-900">Experience</h1>
      </div>

      <div className="h-1 w-20 bg-blue-600 rounded-full"></div>

      <p className="text-lg text-slate-600">
        A timeline of my professional journey and key accomplishments.
      </p>

      <div className="mt-8">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </div>
  );
}
