import { BookOpen, Presentation, Users, Landmark, FileText, ChevronRight, Globe } from "lucide-react";
import imgClass1 from "/src/assets/fc9fbfb52b3f7f2f328f0e9985efb4abdf2c8e28.png";
import imgClass2 from "/src/assets/e72494b705c7348104d50c6cfe6a3f2279d2d785.png";
import imgEvent from "/src/assets/8e6fae65e9caceeada8254bbb7f4ec9c3b7be4ed.png";
import imgSyllabus from "/src/assets/0c8731ae4c47b19a957421a7434bd875df63435f.png";
import imgEuropa1 from "/src/assets/3291ebae1ba9775555a52c39c07b4d9cd2dfdd86.png";
import imgEuropa2 from "/src/assets/482784ba86971f72ee85597bb45d24d372079a3e.png";

export function TeachingEngagements() {
  return (
    <section id="teaching" className="py-24 px-6 md:px-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-sm font-semibold text-[#8B2626] uppercase tracking-wider mb-3">
            Speaking & Instruction
          </h2>
          <h3 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-4">
            Lectures, Seminars & <span className="font-semibold">Academic Events</span>
          </h3>
          <p className="text-lg text-gray-600">
            Delivering specialized lectures, facilitating high-level institutional seminars, and bridging academia with real-world human rights advocacy.
          </p>
        </div>

        <div className="space-y-24">
          
          {/* Block 1: Syracuse University Core Teaching */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center p-3 bg-red-50 rounded-xl text-[#8B2626] mb-2">
                <BookOpen size={24} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">Teaching Assistant & Course Co-Designer</h4>
              <p className="text-gray-500 font-medium text-lg flex items-center gap-2">
                <Landmark size={20} /> Syracuse University NY (Strasbourg)
              </p>
              
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  Co-designed the syllabus and supported the delivery of the comprehensive <strong>International Humanitarian Law (IHL)</strong> course. 
                </p>
                
                <div className="bg-slate-50 rounded-xl p-6 border border-gray-100 mt-6">
                  <h5 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Presentation size={18} className="text-[#8B2626]" />
                    Delivered Lectures Include:
                  </h5>
                  <ul className="space-y-3">
                    {['IHL & Gender', 'The White Savior Narrative', 'IHL Civilians Protection', 'Human Rights, IHL and Justice Processes in the Sahel and Middle East'].map((lecture, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <ChevronRight size={18} className="text-[#8B2626] shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">{lecture}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-4 pt-4 border-t border-gray-100 flex items-start gap-3">
                  <Users size={24} className="text-[#8B2626] shrink-0 mt-1" />
                  <span>Co-designed and led a practical simulation on the <strong>Syria Conflict and IHL</strong> in collaboration with Ahmad Hallak (Head of Operations, ICRC).</span>
                </p>
              </div>
            </div>

            {/* Images grid for Syracuse */}
            <div className="flex flex-col gap-6 items-center">
              <img src={imgSyllabus} alt="Course Syllabus" className="w-full max-w-sm h-auto rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-200" />
              <div className="grid grid-cols-2 gap-4 w-full">
                <img src={imgClass1} alt="Lecture on White Savior Narrative" className="w-full h-56 md:h-72 object-cover object-center rounded-2xl border border-gray-200 shadow-sm" />
                <img src={imgClass2} alt="Lucrezia teaching" className="w-full h-56 md:h-72 object-cover object-center rounded-2xl border border-gray-200 shadow-sm" />
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Block 2: Seminars & International Conferences */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
              <div className="inline-flex items-center justify-center p-3 bg-red-50 rounded-xl text-[#8B2626] mb-2">
                <Presentation size={24} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">Guest Seminars & International Conferences</h4>
              
              <div className="space-y-6">

                {/* EuropaNova Conference */}
                <div className="group flex gap-4 p-5 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-gray-100">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 border border-gray-100 group-hover:border-red-100">
                    <Globe size={20} className="text-[#8B2626]" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 text-lg mb-1">Europa Power Initiative, Strasbourg – EuropaNova</h5>
                    <p className="text-gray-600 leading-relaxed">
                      Panelist at the international conference on <strong>"Peace & Security Challenges in Europe"</strong> (November 2025).
                    </p>
                  </div>
                </div>
                
                {/* ECtHR Seminar */}
                <div className="group flex gap-4 p-5 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-gray-100">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 border border-gray-100 group-hover:border-red-100">
                    <Landmark size={20} className="text-[#8B2626]" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 text-lg mb-1">European Court of Human Rights (ECtHR)</h5>
                    <p className="text-gray-600 leading-relaxed">
                      Organized and led a dedicated seminar for university students hosted by the Court (March 2025), focusing on environmental case law at the ECtHR.
                    </p>
                  </div>
                </div>

                {/* NY Delegation Lecture */}
                <div className="group flex gap-4 p-5 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-gray-100">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 border border-gray-100 group-hover:border-red-100">
                    <Users size={20} className="text-[#8B2626]" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 text-lg mb-1">Lecture for NY Student Delegation</h5>
                    <p className="text-gray-600 leading-relaxed">
                      Delivered a lecture offering a critical perspective on the European Convention on Human Rights (ECHR) in March 2025. Part of the "European and International Human Rights Law" course led by Prof. Cora True-Frost.
                    </p>
                  </div>
                </div>

                {/* Federico II */}
                <div className="group flex gap-4 p-5 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-gray-100">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 border border-gray-100 group-hover:border-red-100">
                    <FileText size={20} className="text-[#8B2626]" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 text-lg mb-1">Università Federico II</h5>
                    <p className="text-gray-600 leading-relaxed">
                      Led a specialized seminar on "Human Rights Protection and International Humanitarian Law".
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Images for EuropaNova */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col gap-6">
              <img src={imgEuropa2} alt="Speaking at Europa Power Initiative" className="w-full h-auto object-cover rounded-2xl border border-gray-200 shadow-md" />
              <img src={imgEuropa1} alt="Panel Discussion at EuropaNova" className="w-full h-auto object-cover rounded-2xl border border-gray-200 shadow-sm" />
            </div>

          </div>

          <hr className="border-gray-100" />

          {/* Block 3: Event Coordination */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
               <img src={imgEvent} alt="Human Rights Event Invitation" className="w-full max-w-sm h-auto rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-200 -rotate-1 hover:rotate-0 transition-transform duration-500" />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center justify-center p-3 bg-red-50 rounded-xl text-[#8B2626] mb-2">
                <Users size={24} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">Academic Event Coordination & Partnerships</h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                Supported and coordinated high-level academic events focused on human rights, the rule of law, and international justice. Actively liaised with institutional partners, including the <strong>Council of Europe</strong>, to foster cross-border academic collaboration and institutional networking.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
