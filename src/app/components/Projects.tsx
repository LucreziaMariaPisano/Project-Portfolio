import { Calendar, User, CheckCircle2, Building, Globe, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgWorkshop from "/assets/72ff4277c668fce2b6d5b3f7d30ac17178f811be.png";
import imgIndoorCerts from "/assets/203f364dd9898b8b9562387f7c9a3939fde315fe.png";
import imgOutdoorCerts from "/assets/d6a0cc79de2bea2730b5d6b9369407f2f0131f21.png";

import imgGenAiGroup from "/assets/aa3830d20152c78023105b54d7afef6facc7295e.png";
import imgGenAiIndoor from "/assets/8234d58c621901e90d108591c9518e472d854dfc.png";
import imgGenAiPoster from "/assets/cda765527c2327e7f6dde409a72c8d73f755a54c.png";
import imgGenAiPresentation from "/assets/7137d748d76aed7cf314800e1c1e1efe9b4da363.png";

import imgFiercePoster from "/assets/1aafd8356d0dad3459f2476506a9e04121baf0c1.png";
import imgFierceCircle from "/assets/a659e4045e5dbe55510a1af24f15658aa88dde0c.png";
import imgFiercePasta from "/assets/654ea1658a185b9848463d38b46215369c477a42.png";
import imgFierceTable from "/assets/9727eefcc831ae801a5f1f0c31bfcf5267fa5650.png";
import imgFierceLibrary from "/assets/578101e8abd56b5825880a4edb63482dc15a5da2.png";

import imgEmigrartePool from "/assets/a5bdb9227fe08135423df7b7e3d1b67498927478.png";
import imgEmigrarteGroup from "/assets/c256bc991ed6a5be04f826913f1ef41f48601a97.png";
import imgEmigrarteIndoor from "/assets/05fbbda071a357b78e595811b044e83b0b08d445.png";

import imgBasiccGroup from "/assets/a2e1f5803b4dd7925f2ff446fbaa0095af57ab62.png";
import imgBasiccCircle from "/assets/a41359b6d352cc4dd76cdb5c734959c98419d8a9.png";
import imgBasiccView from "/assets/c470c19309afc887592be8cf6942a357a8e273ee.png";

import imgEduActionPoster from "/assets/d443fb8d88548bb03499871d534af9b73f6a091a.png";
import imgEduActionFacilitation from "/assets/13b647db4e9ae9248a725cf25a01198249d223ba.png";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-slate-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-sm font-semibold text-[#8B2626] uppercase tracking-wider mb-3">
            Featured Projects
          </h2>
          <h3 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-4">
            Project Management & <span className="font-semibold">Research</span>
          </h3>
          <p className="text-lg text-gray-600">
            Coordinating international initiatives, empowering communities, and fostering cross-border cooperation.
          </p>
        </div>

        <div className="space-y-24">
          {/* Erasmus Project: New Horizons */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 flex flex-col xl:flex-row gap-12 lg:gap-16">
            
            <div className="xl:w-1/2 space-y-8">
              {/* Header tags */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                  <Globe size={14} />
                  Erasmus+ KA210-YOU
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                  <Calendar size={14} />
                  Aug 2025 - Ongoing
                </span>
              </div>
              
              <div>
                <h4 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  New Horizons: Empowering Migrant Youth with Creative and Educational Initiatives
                </h4>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The project contributes to social integration by helping young migrants build connections and live with dignity, while also empowering youth professionals with methodologies to support them effectively. Through artistic and creative activities, it promotes mutual understanding and cultural respect, breaking down barriers between migrants and host communities. Find more details at <a href="http://www.newhorizonsproject.eu/" target="_blank" rel="noopener noreferrer" className="text-[#8B2626] hover:underline font-medium">www.newhorizonsproject.eu</a>.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 bg-slate-50 rounded-2xl p-6 border border-gray-100">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
                    <User size={16} />
                    My Role
                  </div>
                  <p className="font-medium text-gray-900">Project Manager</p>
                  <p className="text-sm text-gray-600">for EuroMed Eve Belgium NGO</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
                    <Building size={16} />
                    Partners
                  </div>
                  <p className="font-medium text-gray-900">Bilim Turkey</p>
                  <p className="font-medium text-gray-900">EduChange Network Austria</p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-gray-900 mb-4">Key Responsibilities & Deliverables:</h5>
                <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-3">
                  {[
                    "Risk Management, Quality Assurance & Communication Plan",
                    "Final Report & Dissemination Activities",
                    "Organisation of Transnational Partner Meeting (Brussels, Apr 2026)",
                    "Handbook Creation & French Translation",
                    "Development of learning tool and e-library",
                    "Design & Organisation of Theatre Workshop for Inclusion (Brussels, with Frederico Araujo)"
                  ].map((task, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 size={18} className="text-[#8B2626] shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-snug">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <a 
                  href="http://www.newhorizonsproject.eu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-[#8B2626] transition-colors font-medium shadow-sm"
                >
                  Visit Project Website
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>

            {/* Images layout */}
            <div className="xl:w-1/2 flex flex-col gap-4 justify-center">
              {/* Top main image */}
              <div className="w-full">
                 <img src={imgOutdoorCerts} alt="New Horizons Project team outdoors" className="w-full h-64 sm:h-80 object-cover object-[center_70%] rounded-2xl border border-gray-200 shadow-sm" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <img src={imgIndoorCerts} alt="Project meeting indoors" className="w-full h-48 sm:h-56 object-cover object-[center_70%] rounded-2xl border border-gray-200 shadow-sm" />
                 <img src={imgWorkshop} alt="Theatre workshop for inclusion" className="w-full h-48 sm:h-56 object-cover object-[center_60%] rounded-2xl border border-gray-200 shadow-sm" />
              </div>
            </div>
          </div>
            
          {/* EmigrArte Project */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 flex flex-col xl:flex-row-reverse gap-12 lg:gap-16">
            
            <div className="xl:w-1/2 space-y-8">
              {/* Header tags */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                  <Globe size={14} />
                  Erasmus+ Youth Exchange
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                  <Calendar size={14} />
                  Sep 27 - Oct 4, 2025
                </span>
              </div>
              
              <div>
                <h4 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  EmigrArte: Intercultural Dialogue & Social Inclusion
                </h4>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Set in Paola, Italy, this project used dance, video, and creative storytelling as non-formal education tools to address themes related to migration, identity, plural belongings, and intercultural coexistence. It fostered meaningful encounters between young migrants, second-generation youth, and their peers from various European countries to promote active participation.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 bg-slate-50 rounded-2xl p-6 border border-gray-100">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
                    <User size={16} />
                    My Role
                  </div>
                  <p className="font-medium text-gray-900">Project Manager & Facilitator</p>
                  <p className="text-sm text-gray-600">for AVEC France</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
                    <Building size={16} />
                    Partners
                  </div>
                  <p className="font-medium text-gray-900">Caleidoscopio</p>
                  <p className="font-medium text-gray-900">EuroMed Eve Belgium</p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-gray-900 mb-4">Key Responsibilities & Deliverables:</h5>
                <ul className="grid gap-x-4 gap-y-3">
                  {[
                    "End-to-end organization and logistics management for the project.",
                    "Organization and animation of non-formal education workshops throughout the stay.",
                    "Facilitation of a specific workshop utilizing the 'teatro karawane' technique."
                  ].map((task, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 size={18} className="text-[#8B2626] shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-snug">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Images layout */}
            <div className="xl:w-1/2 flex flex-col gap-4 justify-center">
              {/* Top main image */}
              <div className="w-full">
                 <img src={imgEmigrarteGroup} alt="EmigrArte Youth Exchange Group" className="w-full h-auto max-h-[22rem] object-contain bg-slate-100 rounded-2xl border border-gray-200 shadow-sm" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <img src={imgEmigrartePool} alt="Outdoor group discussion by the pool" className="w-full h-48 sm:h-56 object-cover object-[center_65%] rounded-2xl border border-gray-200 shadow-sm" />
                 <img src={imgEmigrarteIndoor} alt="Indoor workshop presentation" className="w-full h-48 sm:h-56 object-cover object-[center_60%] rounded-2xl border border-gray-200 shadow-sm" />
              </div>
            </div>
          </div>
            
          {/* Generative AI Project */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 flex flex-col xl:flex-row gap-12 lg:gap-16">
            <div className="xl:w-1/2 space-y-8">
              {/* Header tags */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                  <Globe size={14} />
                  Erasmus-Youth-2024-CB
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                  <Calendar size={14} />
                  Jan 2025 - Ongoing
                </span>
              </div>
              
              <div>
                <h4 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  Generative AI: Youth Sector Challenges & Impact
                </h4>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The project aims to strengthen the capacities of youth organisations and youth workers to address the challenges posed by online hate speech and disinformation in the digital environment. Through research activities, international training courses, digital tools, and youth-driven innovation initiatives, the project promotes critical thinking, responsible digital citizenship, and the ethical use of Artificial Intelligence in youth work.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 bg-slate-50 rounded-2xl p-6 border border-gray-100">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
                    <User size={16} />
                    My Role
                  </div>
                  <p className="font-medium text-gray-900">Project Manager</p>
                  <p className="text-sm text-gray-600">for Avec France</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
                    <Building size={16} />
                    Partners
                  </div>
                  <p className="font-medium text-gray-900 leading-snug">EuroMed Eve (BE, TN, MA), Caleidoscopio, Jordan Youth Innovation Forum</p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-gray-900 mb-4">Key Responsibilities & Deliverables:</h5>
                <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-3">
                  {[
                    "Research on AI tools and French context of hate speech",
                    "Communication & dissemination activities (social media, conference)",
                    "Coordination of project meetings and expert interviews",
                    "Management of piloting phase for mobile app demo",
                    "Review of legal matters and GDPR-related clauses",
                    "Support for international Training Courses in Paris"
                  ].map((task, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 size={18} className="text-[#8B2626] shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-snug">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Images layout - 2x2 Grid for 4 images */}
            <div className="xl:w-1/2 grid grid-cols-2 gap-4 place-content-center">
               <img src={imgGenAiGroup} alt="Generative AI Project team outdoors" className="w-full h-48 sm:h-64 object-cover object-[center_35%] rounded-2xl border border-gray-200 shadow-sm" />
               <img src={imgGenAiPresentation} alt="Online conference meeting presentation" className="w-full h-48 sm:h-64 object-cover object-[center_40%] rounded-2xl border border-gray-200 shadow-sm" />
               <img src={imgGenAiIndoor} alt="Project meeting and presentation indoors" className="w-full h-48 sm:h-64 object-cover object-[center_60%] rounded-2xl border border-gray-200 shadow-sm" />
               <img src={imgGenAiPoster} alt="Conference Poster" className="w-full h-48 sm:h-64 object-contain bg-slate-100 rounded-2xl border border-gray-200 shadow-sm p-2" />
            </div>
          </div>

          {/* FIERCE Project */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 flex flex-col xl:flex-row-reverse gap-12 lg:gap-16">
            <div className="xl:w-1/2 space-y-8">
              {/* Header tags */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                  <Globe size={14} />
                  Naples, Italy
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                  <Calendar size={14} />
                  Nov 2024
                </span>
              </div>
              
              <div>
                <h4 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  Arti femministe a Santa Chiara. Trasformare, sentire, formarsi
                </h4>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Funded by FIERCE Actions (Empowering Feminist Movements in Europe, promoted by European Alternatives), I co-organized this feminist arts festival alongside colleagues from the University of Naples and John Cabot University. The initiative aimed to create a free space for co-constructing feminist awareness through participative processes, focusing on rethinking democracy, living, and public spaces. We worked to empower women to imagine care-oriented communities, fostering inclusivity and an intersectional approach to participation. Event highlights and details can be found at <a href="https://www.instagram.com/p/DDHb8k3I--v/" target="_blank" rel="noopener noreferrer" className="text-[#8B2626] hover:underline font-medium break-all">https://www.instagram.com/p/DDHb8k3I--v/</a>.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 bg-slate-50 rounded-2xl p-6 border border-gray-100">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
                    <User size={16} />
                    My Role
                  </div>
                  <p className="font-medium text-gray-900">Project Manager</p>
                  <p className="text-sm text-gray-600">Co-designer & Animator</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
                    <Building size={16} />
                    Partners
                  </div>
                  <p className="font-medium text-gray-900 leading-snug">TAMU libreria, La taverna di Santa Chiara, Rete dei beni comuni di Napoli, Tourbillon Associazione</p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-gray-900 mb-4">Key Responsibilities & Deliverables:</h5>
                <ul className="grid gap-x-4 gap-y-3">
                  {[
                    "Co-design and animation of 'Cohousing impossibile' workshop, based on bell hooks' theories to rethink spaces.",
                    "Facilitation of 'Corpo Territorio', transforming a typical kitchen into a depatriarchalized space through collective cooking and shared memory.",
                    "Co-design of a role-playing simulation game to reflect on gender inequalities and unconscious reactions to gender-based violence, alongside writing the final report and budget coordination.",
                    "End-to-end project management, grant writing, and coordination of the two-day feminist arts festival."
                  ].map((task, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 size={18} className="text-[#8B2626] shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-snug">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Images layout - Masonry style Grid */}
            <div className="xl:w-1/2 grid grid-cols-2 gap-4 place-content-center">
               <img src={imgFierceLibrary} alt="Feminist discussion at TAMU library" className="col-span-2 w-full h-auto max-h-72 object-contain bg-slate-100 rounded-2xl border border-gray-200 shadow-sm" />
               <img src={imgFiercePasta} alt="Collective cooking workshop" className="w-full h-40 sm:h-48 object-cover object-[center_35%] rounded-2xl border border-gray-200 shadow-sm" />
               <img src={imgFierceCircle} alt="Indoor circle discussion workshop" className="w-full h-40 sm:h-48 object-cover object-[center_40%] rounded-2xl border border-gray-200 shadow-sm" />
               <img src={imgFierceTable} alt="Long table communal dinner" className="w-full h-40 sm:h-48 object-cover object-[center_60%] rounded-2xl border border-gray-200 shadow-sm" />
               <div className="w-full h-40 sm:h-48 bg-[#8ebdd5] rounded-2xl border border-gray-200 shadow-sm p-2 flex items-center justify-center">
                  <img src={imgFiercePoster} alt="Arti Femministe Poster" className="w-full h-full object-contain mix-blend-multiply" />
               </div>
            </div>
          </div>

          {/* BASICC Project */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 flex flex-col xl:flex-row gap-12 lg:gap-16">
            
            <div className="xl:w-1/2 space-y-8">
              {/* Header tags */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                  <Globe size={14} />
                  Alliances for Innovation
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                  <Calendar size={14} />
                  Oct 2024 - Nov 2024
                </span>
              </div>
              
              <div>
                <h4 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  BASICC European Project
                </h4>
                <p className="text-lg text-gray-600 leading-relaxed">
                  BASICC (Building Alternative Skills to Implement Creativities and Commons) is a European partnership bringing together 15 training organizations, higher education institutions, and common spaces across Germany, Belgium, France, Latvia, Italy, and Turkey. The program facilitated cross-border collaboration to define and transmit skills specific to "third places" (tiers-lieux), disseminating these competencies into university and vocational training programs.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 bg-slate-50 rounded-2xl p-6 border border-gray-100">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
                    <User size={16} />
                    My Role
                  </div>
                  <p className="font-medium text-gray-900">Reporting & Project Support</p>
                  <p className="text-sm text-gray-600">for Libridazioni (Italy)</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
                    <Building size={16} />
                    Partners
                  </div>
                  <p className="font-medium text-gray-900 leading-snug">15 European organizations including Alte Mu, Communa, AFPA, Plateau Urbain, SMK</p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-gray-900 mb-4">Key Responsibilities & Deliverables:</h5>
                <ul className="grid gap-x-4 gap-y-3">
                  {[
                    "Conducted comprehensive reporting activities on behalf of the Italian partner, Libridazioni.",
                    "Documented and summarized the outcomes of cooperative efforts regarding the transmission of third-place specific skills.",
                    "Supported the alignment of local Italian contributions within the broader framework of the European consortium.",
                    "Participated in discussions on economic frameworks and common spaces alongside economist Benjamin Coriat."
                  ].map((task, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 size={18} className="text-[#8B2626] shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-snug">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Images layout */}
            <div className="xl:w-1/2 flex flex-col gap-4 justify-center">
              <div className="w-full">
                <img 
                  src={imgBasiccCircle} 
                  alt="Group circle discussion during the BASICC project" 
                  className="w-full h-64 sm:h-80 object-cover object-[center_60%] rounded-2xl border border-gray-200 shadow-sm" 
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={imgBasiccGroup} 
                  alt="Team group photo with Benjamin Coriat" 
                  className="w-full h-48 sm:h-56 object-cover object-[center_30%] rounded-2xl border border-gray-200 shadow-sm" 
                />
                <img 
                  src={imgBasiccView} 
                  alt="Scenic view from the location" 
                  className="w-full h-48 sm:h-56 object-cover object-center rounded-2xl border border-gray-200 shadow-sm" 
                />
              </div>
            </div>
          </div>

          {/* EduAction Project */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 flex flex-col xl:flex-row-reverse gap-12 lg:gap-16">
            
            <div className="xl:w-1/2 space-y-8">
              {/* Header tags */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                  <Globe size={14} />
                  Mediterranean Cooperation
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                  <Calendar size={14} />
                  Oct 2023 - Feb 2024
                </span>
              </div>
              
              <div>
                <h4 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  Edu-Action for Equality: A Transnational Project Against Gender-Based Violence
                </h4>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Gender discrimination has long been a conditioning factor in current democracies, which can be considered compromised given the limited possibility of expression and action of certain groups/communities in the public sphere. This factor has systemic roots and hinders their full participation in political and social life, creating social stigmas and insurmountable hierarchies in public and private institutions. Through personal experiences and knowledge of participants from 6 Mediterranean countries (Italy, Portugal, Germany, Lebanon, Algeria, Tunisia), the project developed educational and social needs analysis, established dialogues with local policy-makers, and created new strategies and practices to ensure greater gender equality in political and social participation.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 bg-slate-50 rounded-2xl p-6 border border-gray-100">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
                    <User size={16} />
                    My Role
                  </div>
                  <p className="font-medium text-gray-900">Workshop Facilitator</p>
                  <p className="text-sm text-gray-600">in collaboration with Marie Moise, PhD and Maria Francesca de Tullio, PhD</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
                    <Building size={16} />
                    Countries Involved
                  </div>
                  <p className="font-medium text-gray-900 leading-snug">Italy, Portugal, Germany, Lebanon, Algeria, Tunisia</p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-gray-900 mb-4">Key Responsibilities & Deliverables:</h5>
                <ul className="grid gap-x-4 gap-y-3">
                  {[
                    "Co-facilitation of workshops on gender-based violence and patriarchal practices across European commons contexts.",
                    "Development of educational methodologies to address systemic gender discrimination in public participation.",
                    "Collaboration with students, teachers, and youth workers to analyze educational and social needs in participating territories.",
                    "Support in establishing dialogue channels with local policy-makers to foster cooperation among all social forces involved.",
                    "Contribution to creating strategies ensuring greater gender equality in political and social life."
                  ].map((task, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 size={18} className="text-[#8B2626] shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-snug">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Images layout */}
            <div className="xl:w-1/2 flex flex-col gap-4 justify-center">
              {/* Main poster image */}
              <div className="w-full">
                 <img src={imgEduActionPoster} alt="Edu-Action for Equality project poster" className="w-full h-auto max-h-[28rem] object-contain bg-slate-100 rounded-2xl border border-gray-200 shadow-sm" />
              </div>
              {/* Facilitation workshop image */}
              <div className="w-full">
                 <img src={imgEduActionFacilitation} alt="Workshop facilitation on gender-based violence" className="w-full h-auto max-h-64 object-contain bg-slate-100 rounded-2xl border border-gray-200 shadow-sm" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}