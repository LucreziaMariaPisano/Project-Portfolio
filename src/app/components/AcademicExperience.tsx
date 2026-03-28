import { Building2, MapPin, FileOutput, CheckCircle2, BookOpen, GraduationCap, Globe } from "lucide-react";

export function AcademicExperience() {
  const experiences = [
    {
      role: "Research Assistant in International Law",
      institution: "Université Paris Nanterre / CNRS",
      location: "Paris, France",
      icon: <Globe className="text-[#8B2626]" size={28} />,
      description: "Conducted in-depth juridical research focusing on the United Nations system, with a specific emphasis on the UN Special Committee on Decolonization.",
      outputs: [
        "Authored a comprehensive research report analyzing the legal and political status of the 17 Non-Self-Governing Territories."
      ],
      featured: true
    },
    {
      role: "Comparative Public Law Research Assistant",
      institution: "Syracuse University NY (Strasbourg Campus)",
      location: "Strasbourg, France",
      icon: <BookOpen className="text-[#8B2626]" size={28} />,
      description: "Executed cross-jurisdictional comparative research on public law, fundamental rights, migration policy, and the intersection of Artificial Intelligence with human rights.",
      outputs: [
        "Designed the academic syllabus for the 'US and Comparative Case-Law' course.",
        "Formulated detailed case-law rubrics and structured comparative legal analyses for students."
      ],
      featured: true
    },
    {
      role: "Teaching & Research Assistant in Space Law",
      institution: "International Space University",
      location: "Strasbourg, France",
      icon: <GraduationCap className="text-[#8B2626]" size={28} />,
      description: "Facilitated courses on international space law and security alongside Dr. Aurélie Trur. Explored the complex intersections between human rights, international frameworks, and next-generation security challenges.",
      outputs: [
        "Co-organized and produced the official reporting for the NATO Summit on Space & Security."
      ],
      featured: true
    },
    {
      role: "Legal Trainee",
      institution: "European Court of Human Rights",
      location: "Strasbourg, France",
      period: "March - July 2024",
      icon: <Globe className="text-[#8B2626]" size={28} />,
      description: "Participated in a comprehensive traineeship programme under the supervision of Judge Giovanni Flavia (Judge in respect of Italy), contributing to the legal work of the Court and the Italian Filtering Unit.",
      outputs: [
        "Prepared draft reports on cases brought before the Court and conducted research on ECHR jurisprudence, international law, and comparative law.",
        "Attended public hearings and section meetings as assistant to the Judge.",
        "Processed applications in the Italian Filtering Unit under the supervision of non-judicial rapporteurs appointed by the President.",
        "Dealt with inadmissibility decisions and verified compatibility of new applications with Rule 47 requirements.",
        "Co-authored three academic articles with Judge Giovanni Flavia: 'The Role of Private International Law in the ECtHR Case Law', 'The Neapolitan Pragmatica', and 'The Guardianship Institution'.",
        "Received Certificate of Excellence from the Court's Registry for outstanding work, dedication, and enthusiasm."
      ],
      featured: false
    },
    {
      role: "Legal Trainee in Corporate Affairs",
      institution: "Loro Piana (LVMH Group)",
      location: "Milan, Italy",
      period: "January - August 2023",
      icon: <Building2 className="text-[#8B2626]" size={28} />,
      description: "Supported the legal department of a leading luxury goods company within the LVMH Group, focusing on corporate compliance, data protection, and regulatory frameworks.",
      outputs: [
        "Drafted commercial contracts and legal agreements for corporate affairs.",
        "Handled GDPR compliance and data protection matters.",
        "Supported corporate compliance initiatives and internal legal procedures.",
        "Researched and analyzed ESG (Environmental, Social, and Governance) regulations."
      ],
      featured: false
    }
  ];

  const featuredExperiences = experiences.filter(exp => exp.featured);
  const otherExperiences = experiences.filter(exp => !exp.featured);

  return (
    <section id="academic" className="py-24 px-6 md:px-12 bg-slate-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-sm font-semibold text-[#8B2626] uppercase tracking-wider mb-3">
            Experience
          </h2>
          <h3 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-4">
            Legal Practice & <span className="font-semibold">Academic Research</span>
          </h3>
          <p className="text-lg text-gray-600">
            A diverse track record spanning international institutions, corporate legal practice, and academic research in international law and human rights.
          </p>
        </div>

        {/* Horizontal Layout (Scrollable on small screens) */}
        <div className="flex overflow-x-auto gap-6 md:gap-8 pb-8 pt-4 -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory hide-scrollbar">
          {featuredExperiences.map((exp, index) => (
            <div key={index} className="flex flex-col h-full w-[85vw] sm:w-[350px] lg:w-[calc(33.333%-1.5rem)] shrink-0 snap-center p-6 md:p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative">
              
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-red-50 mb-6 shrink-0">
                {exp.icon}
              </div>

              <div className="flex flex-col gap-1 mb-4">
                <h4 className="text-xl font-bold text-gray-900">{exp.role}</h4>
                <div className="flex flex-col gap-2 text-sm text-gray-500 mt-2">
                  <span className="flex items-start gap-2 font-medium text-gray-700">
                    <Building2 size={16} className="text-[#8B2626] shrink-0 mt-0.5" />
                    <span className="leading-tight">{exp.institution}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={16} className="text-gray-400 shrink-0" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                {exp.description}
              </p>

              {/* Key Outputs Box */}
              <div className="bg-red-50/50 rounded-xl p-5 border border-red-100/50 mt-auto">
                <div className="flex items-center gap-2 mb-3">
                  <FileOutput size={18} className="text-[#8B2626]" />
                  <h5 className="font-semibold text-gray-900 text-sm tracking-wide uppercase">Key Outputs</h5>
                </div>
                <ul className="space-y-3">
                  {exp.outputs.map((output, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 size={18} className="text-[#8B2626] shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">{output}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* Other Experiences */}
        <div className="mt-12">
          <h4 className="text-xl font-bold text-gray-900 mb-4">Other Experiences</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherExperiences.map((exp, index) => (
              <div key={index} className="flex flex-col h-full w-full shrink-0 p-6 md:p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative">
                
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-red-50 mb-6 shrink-0">
                  {exp.icon}
                </div>

                <div className="flex flex-col gap-1 mb-4">
                  <h4 className="text-xl font-bold text-gray-900">{exp.role}</h4>
                  <div className="flex flex-col gap-2 text-sm text-gray-500 mt-2">
                    <span className="flex items-start gap-2 font-medium text-gray-700">
                      <Building2 size={16} className="text-[#8B2626] shrink-0 mt-0.5" />
                      <span className="leading-tight">{exp.institution}</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin size={16} className="text-gray-400 shrink-0" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                  {exp.description}
                </p>

                {/* Key Outputs Box */}
                <div className="bg-red-50/50 rounded-xl p-5 border border-red-100/50 mt-auto">
                  <div className="flex items-center gap-2 mb-3">
                    <FileOutput size={18} className="text-[#8B2626]" />
                    <h5 className="font-semibold text-gray-900 text-sm tracking-wide uppercase">Key Outputs</h5>
                  </div>
                  <ul className="space-y-3">
                    {exp.outputs.map((output, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 size={18} className="text-[#8B2626] shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm leading-relaxed">{output}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}