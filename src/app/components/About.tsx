import { Scale, Globe, Users, BookOpen, Lightbulb, Shield, Briefcase, Search, FileCheck, PresentationIcon } from "lucide-react";

export function About() {
  const expertise = [
    {
      icon: <Globe className="text-[#8B2626]" size={24} />,
      title: "EU & International Law",
      description: "Specialized focus on international legal frameworks and European policies."
    },
    {
      icon: <Users className="text-[#8B2626]" size={24} />,
      title: "Advocacy & Mobilization",
      description: "Driving collective action against anti-gender movements and online hate."
    },
    {
      icon: <BookOpen className="text-[#8B2626]" size={24} />,
      title: "Academic Research",
      description: "Extensive background in legal research and academic methodologies."
    },
    {
      icon: <Lightbulb className="text-[#8B2626]" size={24} />,
      title: "Project Management",
      description: "Leading EU-funded programs on gender equality and anti-discrimination."
    },
    {
      icon: <Scale className="text-[#8B2626]" size={24} />,
      title: "Policy Drafting",
      description: "Translating complex political dynamics into actionable, legally sound strategies."
    },
    {
      icon: <Shield className="text-[#8B2626]" size={24} />,
      title: "Civic Space Protection",
      description: "Designing training and strategies to safeguard and expand civic participation."
    }
  ];

  const services = [
    {
      icon: <Briefcase className="text-[#8B2626]" size={22} />,
      title: "Project Management",
      description: "Strategic planning and coordination of EU-funded projects and initiatives."
    },
    {
      icon: <Search className="text-[#8B2626]" size={22} />,
      title: "Research",
      description: "In-depth legal and policy research on international law and comparative frameworks."
    },
    {
      icon: <FileCheck className="text-[#8B2626]" size={22} />,
      title: "Legal Advice on International Law",
      description: "Expert consultation on international legal frameworks, human rights, and EU law."
    },
    {
      icon: <PresentationIcon className="text-[#8B2626]" size={22} />,
      title: "Workshop Design & Facilitation",
      description: "Custom-designed participatory workshops and training programs on legal and civic topics."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-semibold text-[#8B2626] uppercase tracking-wider mb-3">
                About Me
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
                Policy-oriented jurist translating complex dynamics into <span className="font-semibold">actionable strategies</span>.
              </h3>
            </div>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                As a Master of Laws graduate specializing in EU and International Law, I combine a strong foundation in academic research with practical, policy-oriented expertise. My work bridges the gap between intricate legal frameworks and real-world advocacy.
              </p>
              <p>
                I am an experienced advocacy practitioner and project manager, having led numerous EU-funded programs centered on gender equality, anti-discrimination, and the protection of civic space. 
              </p>
              <p>
                By specializing in policy drafting and training design, I focus on decoding complex political challenges—such as anti-gender movements and online hate—to foster collective mobilization and drive systemic change.
              </p>
            </div>

            <div className="pt-4 pb-2">
              <a href="#projects" className="inline-flex items-center gap-2 text-[#8B2626] font-medium hover:text-[#6e1e1e] transition-colors border-b-2 border-transparent hover:border-[#8B2626] pb-1">
                Explore my projects
              </a>
            </div>
          </div>

          {/* Core Expertise Grid Side */}
          <div className="grid sm:grid-cols-2 gap-6 relative">
            {/* Decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-slate-50 rounded-full blur-3xl -z-10"></div>
            
            {expertise.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-gray-900 font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Services Section */}
        <div className="mt-24 pt-24 border-t border-gray-100">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <h3 className="text-sm font-semibold text-[#8B2626] uppercase tracking-wider mb-3">
              Services
            </h3>
            <h4 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-4">
              How I Can <span className="font-semibold">Help</span>
            </h4>
            <p className="text-lg text-gray-600">
              Specialized legal and strategic services for organizations, institutions, and civil society.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-slate-50 p-6 rounded-2xl border border-gray-100 hover:border-[#8B2626] hover:bg-white transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 border border-gray-200">
                  {service.icon}
                </div>
                <h5 className="text-gray-900 font-bold mb-2 text-lg">{service.title}</h5>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Get in Touch CTA */}
          <div className="mt-12 text-center">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B2626] text-white rounded-lg hover:bg-[#6e1e1e] transition-colors font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}