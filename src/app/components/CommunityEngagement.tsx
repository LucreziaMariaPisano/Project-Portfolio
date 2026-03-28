import { Users, Network, Scale, Globe, BookOpen, Heart } from "lucide-react";
import imgCCIFLyon from "/src/assets/3657fd2670e76392d38e4fed09ff54aaacb035d4.png";
import imgParoleGiuste from "/src/assets/dee4a8564d8e0277b0a433b39f24df9d4c68e8c6.png";
import imgCCIFConference from "/src/assets/90a019def1087a604e433d1dcac5b47ab0dd9c02.png";s
import imgAuditWorkshop from "/src/assets/bb23bb3a35f535a82f4b6481c30e85d48ff3a500.png";
import imgAuditTeam from "/src/assets/383451f2ca8275990a193c5be56b836dbebab4e1.png";
import imgSplashCollective from "/src/assets/9efad6b23987c79c3ff92df49c89c6b015ccd910.png";
import imgUrbactTeam1 from "/src/assets/cf35ef2d019ea767d9e6df3a071c531a532c8c52.png";
import imgUrbactTeam2 from "/src/assets/d73c0bc3fb8b932f29f6c010d7c229e9b8ea2f02.png";
import imgUrbactAgenda from "/src/assets/572255887f3c2d0a6613473231dfaf31e48ecd3f.png";
import imgUrbactPresentation from "/src/assets/f62566f4a78f3d0d1cf1ff2948aa880281a26ab1.png";

export function CommunityEngagement() {
  const activities = [
    {
      title: "Commons & Grassroots Research - Naples",
      category: "Urban Commons & Political Ecology",
      icon: <Users className="text-[#8B2626]" size={28} />,
      description: "Active researcher and facilitator in Naples' commons networks, exploring creative uses of law and participatory practices for urban commons governance.",
      involvements: [
        {
          name: "URBACT III Transfer Network - Civic eState",
          role: "Speaker & Good Practices Presenter",
          details: "Presented Naples' urban commons good practices at the Final Event of URBACT III Transfer Network 'Pooling the urban commons as civic patrimony' (September 2018). Part of the network alongside scholars Prof. Giuseppe Micciarelli and Prof. Christian Iaione. Partner cities included Naples (Lead Partner), Barcelona, Gdansk, Ghent, Amsterdam, Iași, and Prešov."
        },
        {
          name: "L'Asilo Napoli",
          role: "Researcher & Workshop Facilitator",
          link: "https://www.exasilofilangieri.it/",
          details: "Facilitated workshops and research activities on commons-based governance and creative legal frameworks."
        },
        {
          name: "Commons Napoli Network",
          role: "Active Member",
          link: "https://commonsnapoli.org/",
          details: "Part of Naples' commons network, exploring creative uses of law for collaborative governance."
        },
        {
          name: "Collettivo Splash",
          role: "Collective Member & Co-Author",
          link: "https://www.instagram.com/splash_napoli/",
          details: "Member of the immaterial labor collective. Co-authored 'Le parole giuste. Glossario ecologista' published by A SUD (Fandango Libri)."
        },
        {
          name: "Istituto Italiano di Studi Politici & Filosofici",
          role: "Collaborator",
          details: "Collaborated on themes of political ecology and commons-based governance."
        },
        {
          name: "Consulta Pubblica di Audit - Naples",
          role: "Member & Auditor",
          link: "https://www.comune.napoli.it/articolo_tematico/partecipazione/consulta-pubblica-di-audit-sulle-risorse-e-sul-debito-della-citta-di-napoli/",
          details: "Participated in the Public Audit Consultation on Naples' municipal resources and debt."
        }
      ],
      images: [imgUrbactTeam1, imgUrbactTeam2, imgUrbactAgenda, imgUrbactPresentation, imgParoleGiuste, imgSplashCollective]
    },
    {
      title: "International Debt Research Networks",
      category: "Public Debt & Feminist Economics",
      icon: <Scale className="text-[#8B2626]" size={28} />,
      description: "Active member of international networks researching public debt, fiscal sovereignty, and feminist approaches to economic justice.",
      involvements: [
        {
          name: "RICPD - Red de Investigación sobre Deuda Pública",
          role: "Network Member & Researcher",
          link: "https://ricdp.org/",
          details: "Member of the international research network on public debt, collaborating with leading scholars across Latin America and Europe."
        },
        {
          name: "Academic Collaborations",
          role: "Co-Researcher & Conference Speaker",
          details: "Collaborated with Prof. Ramiro Chimuris Sosa (Facultad de Derecho, Universidad de la República, Uruguay) and Gonzalo Ubilla on feminist economics and debt. Co-organized conferences on 'Feminismo y Deuda'."
        },
        {
          name: "Publications & Conferences",
          role: "Author & Speaker",
          details: "Authored 'Voci di donne non ascoltate' in Feminismo & Deuda (2020). Participated in conferences and collaborated with Maria Lucia Fattorelli on debt auditing methodologies."
        },
        {
          name: "Pincha tu Deuda - Madrid",
          role: "Participant",
          link: "https://auditoriaciudadana.net/pincha-tu-deuda/",
          details: "Participated in international networks and events on citizen debt auditing in Madrid."
        }
      ],
      images: [imgAuditWorkshop, imgAuditTeam]
    },
    {
      title: "European Commons Networks",
      category: "Commons & Participatory Governance",
      icon: <Network className="text-[#8B2626]" size={28} />,
      description: "Studied and participated in commons networks across France and Belgium, organizing events on inclusion, participation, and European commons movements.",
      involvements: [
        {
          name: "Remix The Commons",
          role: "Organizer & Collaborator",
          link: "https://www.remixthecommons.org/en/the-project/",
          details: "Organized events and activities on inclusion, participation, and diffusion of the European commons network."
        },
        {
          name: "Tiers Lieux - Lyon & Villeurbanne",
          role: "Participant & Researcher",
          details: "Engaged with third-place movements in Lyon and Villeurbanne, studying collaborative spaces and community-led initiatives."
        }
      ],
      images: []
    },
    {
      title: "Italian Chamber of Commerce for France - Lyon",
      category: "Economic Diplomacy & Cultural Promotion",
      icon: <Globe className="text-[#8B2626]" size={28} />,
      description: "Supported the Director's office in promoting Italian economic and cultural activities in France, organizing major promotional events.",
      involvements: [
        {
          name: "CCIF-Lyon",
          role: "Assistant to the Director",
          details: "Worked with Director Annibale Fracasso di Torrepaduli organizing events promoting Made in Italy, including the Italian Village at Place de la République (Lyon), Chambéry, and Strasbourg."
        },
        {
          name: "Key Activities",
          role: "Event Coordinator & Organizer",
          details: "Organized online conferences, coordinated the DLECI Italian language examination for a Paris business school, and participated in cultural and economic promotion activities."
        }
      ],
      images: [imgCCIFLyon, imgCCIFConference]
    },
    {
      title: "Amnesty International Strasbourg",
      category: "Human Rights Advocacy",
      icon: <Heart className="text-[#8B2626]" size={28} />,
      description: "Collaborated with Amnesty International's Strasbourg chapter on human rights advocacy and awareness campaigns.",
      involvements: [
        {
          name: "Amnesty International - Strasbourg Chapter",
          role: "Collaborator",
          details: "Worked with Regional Director Bertrand Goldman on human rights campaigns and advocacy initiatives."
        }
      ],
      images: []
    }
  ];

  return (
    <section id="community" className="py-24 px-6 md:px-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-sm font-semibold text-[#8B2626] uppercase tracking-wider mb-3">
            Community Engagement
          </h2>
          <h3 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-4">
            Commons, Networks & <span className="font-semibold">Grassroots Research</span>
          </h3>
          <p className="text-lg text-gray-600">
            Active participation in grassroots movements, commons networks, and community-based research exploring creative legal frameworks, participatory governance, and economic justice.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="space-y-12">
          {activities.map((activity, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-gray-100">
              
              {/* Activity Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white border border-gray-200 shrink-0">
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-[#8B2626] uppercase tracking-wider mb-2">
                    {activity.category}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{activity.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{activity.description}</p>
                </div>
              </div>

              {/* Images Gallery */}
              {activity.images.length > 0 && (
                <div className={`grid ${activity.images.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-4 mb-8`}>
                  {activity.images.map((img, imgIndex) => (
                    <div key={imgIndex} className="rounded-xl overflow-hidden border border-gray-200 bg-white">
                      <img 
                        src={img} 
                        alt={`${activity.title} - Image ${imgIndex + 1}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Involvements */}
              <div className="space-y-4">
                {activity.involvements.map((involvement, invIndex) => (
                  <div key={invIndex} className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                      <div>
                        <h5 className="font-bold text-gray-900 text-lg">
                          {involvement.link ? (
                            <a 
                              href={involvement.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:text-[#8B2626] transition-colors"
                            >
                              {involvement.name}
                            </a>
                          ) : (
                            involvement.name
                          )}
                        </h5>
                        <p className="text-sm font-medium text-[#8B2626]">{involvement.role}</p>
                      </div>
                      {involvement.link && (
                        <a 
                          href={involvement.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs text-gray-500 hover:text-gray-900 transition-colors break-all md:text-right"
                        >
                          {involvement.link}
                        </a>
                      )}
                    </div>
                    <p className="text-gray-600 leading-relaxed">{involvement.details}</p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}