import { GraduationCap, Award, FileText, Users } from "lucide-react";
import imgValgaudemar from "/assets/9ad059619c5f26265eeffcffb5dc91686a2f5dcb.png";

export function Education() {
  return (
    <section id="education" className="py-24 px-6 md:px-12 bg-slate-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-sm font-semibold text-[#8B2626] uppercase tracking-wider mb-3">
            Education & Training
          </h2>
          <h3 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-4">
            Academic <span className="font-semibold">Background</span>
          </h3>
          <p className="text-lg text-gray-600">
            Interdisciplinary legal education combining European and comparative law, human rights, privacy law, and international humanitarian law.
          </p>
        </div>

        {/* Main Degrees */}
        <div className="space-y-8 mb-12">
          
          {/* Master's Degree */}
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-slate-50 border border-gray-200 shrink-0">
                <GraduationCap className="text-[#8B2626]" size={28} />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-[#8B2626] uppercase tracking-wider mb-2">
                  2016 - 2022
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Master's Degree in Law (Laurea Magistrale)</h4>
                <p className="text-lg text-gray-600 mb-4">University of Naples Federico II · <span className="font-semibold">Graduated with Honors</span></p>
                
                <div className="space-y-4 mt-6">
                  <div className="bg-slate-50 rounded-lg p-5 border border-gray-100">
                    <h5 className="font-bold text-gray-900 mb-2">Thesis</h5>
                    <p className="text-gray-700 leading-relaxed">
                      Comparative approach to poverty and inequalities in the European context, with focus on income support measures.
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-5 border border-gray-100">
                    <h5 className="font-bold text-gray-900 mb-2">Erasmus Exchange · Université Paris Cité</h5>
                    <p className="text-gray-700 leading-relaxed">
                      International exchange program focusing on European and comparative law.
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-5 border border-gray-100">
                    <h5 className="font-bold text-gray-900 mb-3">Collaboration with Prof. Giovanna De Minico & Interdisciplinary Center ERMES</h5>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-gray-900 text-sm mb-1">Conferences:</p>
                        <ul className="text-gray-700 leading-relaxed space-y-1 ml-4">
                          <li>• "Future of University" — University of Naples Federico II & Centro ERMES (2018)</li>
                          <li>• "The Schrems Case" — University of Naples Federico II & Centro ERMES (2017)</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-gray-900 text-sm mb-1">Publication:</p>
                        <p className="text-gray-700 leading-relaxed ml-4">
                          • "Schrems Case" — EU/US data transfers, in <em>Il Foro Napoletano</em> n.3 (2017)
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold text-gray-900 text-sm mb-1">Legal Clinic:</p>
                        <p className="text-gray-700 leading-relaxed ml-4">
                          • Course in Legal Clinic with Prof. Di Donato
                        </p>
                        <p className="text-gray-700 leading-relaxed ml-4">
                          • Certificate: UNHCR — Protection of Refugees, IDPs and Stateless Persons (April 2020)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Master in Law & Business */}
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-slate-50 border border-gray-200 shrink-0">
                <Award className="text-[#8B2626]" size={28} />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-[#8B2626] uppercase tracking-wider mb-2">
                  2023
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Master in Law & Business</h4>
                <p className="text-lg text-gray-600 mb-4">24 ORE Business School</p>
                
                <div className="bg-slate-50 rounded-lg p-5 border border-gray-100 mt-4">
                  <h5 className="font-bold text-gray-900 mb-2">Specialization</h5>
                  <p className="text-gray-700 leading-relaxed">
                    Certificate in Privacy Matter Expert — Advanced training in GDPR compliance, data protection law, and privacy management.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Additional Training & Scholarships */}
        <div className="mb-12">
          <h4 className="text-2xl font-bold text-gray-900 mb-6">Specialized Training & Scholarships</h4>
          <div className="grid md:grid-cols-2 gap-6">
            
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-start gap-3 mb-3">
                <Award className="text-[#8B2626] shrink-0" size={22} />
                <div>
                  <h5 className="font-bold text-gray-900 text-lg mb-1">Konrad Adenauer Stiftung (KAS)</h5>
                  <p className="text-sm font-medium text-[#8B2626] mb-2">Selected Young Researcher · January - June 2022</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Excellence research scholarship on Germany-Italy cooperation and relations. Still part of the KAS scholar network.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-start gap-3 mb-3">
                <FileText className="text-[#8B2626] shrink-0" size={22} />
                <div>
                  <h5 className="font-bold text-gray-900 text-lg mb-1">University of Leiden</h5>
                  <p className="text-sm font-medium text-[#8B2626] mb-2">International Humanitarian Law in Theory and Practice · May 2023</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Advanced course on IHL frameworks, armed conflict law, and humanitarian protection mechanisms.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-start gap-3 mb-3">
                <FileText className="text-[#8B2626] shrink-0" size={22} />
                <div>
                  <h5 className="font-bold text-gray-900 text-lg mb-1">Fondation René Cassin (Strasbourg)</h5>
                  <p className="text-sm font-medium text-[#8B2626] mb-2">IHL & Human Rights · June - July 2023</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Specialized training on the intersection of international humanitarian law and human rights protection.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Public Speaking & Outreach */}
        <div>
          <h4 className="text-2xl font-bold text-gray-900 mb-6">Public Speaking & Community Outreach</h4>
          
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-200">
            <div className="flex flex-col md:flex-row gap-8">
              
              {/* Image */}
              <div className="md:w-2/5 shrink-0">
                <div className="rounded-xl overflow-hidden border border-gray-200">
                  <img 
                    src={imgValgaudemar} 
                    alt="Festival Valgaudemar Vallée Refuge"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-4">
                  <Users className="text-[#8B2626] shrink-0" size={24} />
                  <div>
                    <div className="text-xs font-semibold text-[#8B2626] uppercase tracking-wider mb-2">
                      July 2025
                    </div>
                    <h5 className="text-xl font-bold text-gray-900 mb-2">
                      Land Rights in International Law
                    </h5>
                    <p className="text-sm font-medium text-gray-600 mb-4">
                      Conference at Festival Valgaudemar Vallée Refuge · Saint-Firmin, France
                    </p>
                  </div>
                </div>
                
                <div className="bg-slate-50 rounded-lg p-5 border border-gray-100">
                  <h6 className="font-bold text-gray-900 mb-2">Conference Title</h6>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <em>"Colonisation et droit à la terre: repenser l'habiter"</em> (Colonization and Land Rights: Rethinking Habitation)
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Public conference exploring how the legacy of colonial practices is embedded in international law structures and its impact on land rights of living communities on a territory. Part of a community festival promoting interdisciplinary dialogue on environmental and social justice.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}