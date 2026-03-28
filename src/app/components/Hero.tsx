import { ArrowRight, BookOpen, Briefcase, GraduationCap } from "lucide-react";
import profileImage from "/assets/4605c3a61b49f1dde16429aabead913de23c0870.png";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 px-6 md:px-12 bg-slate-50 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f8f4f4] skew-x-12 -mr-32 -z-10 rounded-l-[100px]" />
      
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Content */}
        <div className="flex flex-col items-start text-left space-y-8 animate-in slide-in-from-left duration-700 fade-in fill-mode-both">
          
          <div className="space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-[#8B2626] text-sm font-semibold uppercase tracking-wider">
              Portfolio
            </span>
            <h1 className="text-5xl lg:text-7xl font-light text-gray-900 leading-[1.1] tracking-tight">
              Lucrezia Maria <br className="hidden lg:block"/>
              <span className="font-semibold text-gray-900">Pisano</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-600 font-medium pt-2">
              Legal Researcher & <br className="md:hidden" />Project Manager
            </h2>
          </div>

          <p className="text-lg text-gray-500 max-w-lg leading-relaxed border-l-4 border-[#8B2626] pl-6 py-2">
            Welcome. Here you will find an overview of my professional journey, including detailed insights into my legal research, project management roles, and academic workshops.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            <a 
              href="#projects" 
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#8B2626] text-white rounded-lg font-medium hover:bg-[#6e1e1e] transition-all shadow-md hover:shadow-lg focus:ring-4 focus:ring-red-100"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 hover:text-gray-900 transition-all focus:ring-4 focus:ring-gray-50"
            >
              Get in Touch
            </a>
          </div>
          
          {/* Quick Stats/Badges */}
          <div className="pt-10 grid grid-cols-2 lg:grid-cols-3 gap-6 w-full border-t border-gray-200 mt-8">
            <div className="flex items-center gap-3 text-gray-600">
              <div className="p-2 bg-white rounded-md shadow-sm border border-gray-100">
                <GraduationCap size={20} className="text-[#8B2626]" />
              </div>
              <span className="text-sm font-medium">Academic<br/>Research</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <div className="p-2 bg-white rounded-md shadow-sm border border-gray-100">
                <Briefcase size={20} className="text-[#8B2626]" />
              </div>
              <span className="text-sm font-medium">Project<br/>Management</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600 hidden lg:flex">
              <div className="p-2 bg-white rounded-md shadow-sm border border-gray-100">
                <BookOpen size={20} className="text-[#8B2626]" />
              </div>
              <span className="text-sm font-medium">Legal<br/>Workshops</span>
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div className="relative flex justify-center md:justify-end animate-in zoom-in duration-700 fade-in fill-mode-both">
          <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
            {/* Decorative circle behind */}
            <div className="absolute inset-0 bg-[#8B2626]/5 rounded-full translate-x-4 -translate-y-4"></div>
            {/* Main Image */}
            <img 
              src={profileImage} 
              alt="Lucrezia Maria Pisano" 
              className="relative w-full h-full object-cover rounded-[2rem] shadow-2xl border-8 border-white bg-gray-100 z-10"
              style={{ objectPosition: 'center 10%' }}
            />
            {/* Small floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl z-20 border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-[#8B2626]">
                <Briefcase size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Professional</p>
                <p className="text-gray-900 font-bold">Portfolio</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}