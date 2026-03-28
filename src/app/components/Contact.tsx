import { Mail, Phone, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-sm font-semibold text-[#8B2626] uppercase tracking-wider mb-3">
            Contact
          </h2>
          <h3 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-4">
            Let's <span className="font-semibold">Connect</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Interested in collaboration, consultation, or learning more about my work? Feel free to reach out.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Email */}
          <a 
            href="mailto:lucreziamaria.pisano@gmail.com"
            className="bg-slate-50 p-8 rounded-2xl border border-gray-100 hover:border-[#8B2626] hover:bg-white transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 border border-gray-200 group-hover:border-[#8B2626] group-hover:bg-red-50 transition-all">
              <Mail className="text-[#8B2626]" size={24} />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Email</h4>
            <p className="text-sm text-gray-600 break-all">
              lucreziamaria.pisano@gmail.com
            </p>
          </a>

          {/* Phone */}
          <a 
            href="tel:+33745111324"
            className="bg-slate-50 p-8 rounded-2xl border border-gray-100 hover:border-[#8B2626] hover:bg-white transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 border border-gray-200 group-hover:border-[#8B2626] group-hover:bg-red-50 transition-all">
              <Phone className="text-[#8B2626]" size={24} />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Phone</h4>
            <p className="text-sm text-gray-600">
              +33 745 111 324
            </p>
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/lucrezia-maria-pisano/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-50 p-8 rounded-2xl border border-gray-100 hover:border-[#8B2626] hover:bg-white transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 border border-gray-200 group-hover:border-[#8B2626] group-hover:bg-red-50 transition-all">
              <Linkedin className="text-[#8B2626]" size={24} />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">LinkedIn</h4>
            <p className="text-sm text-gray-600">
              linkedin.com/in/lucrezia-maria-pisano
            </p>
          </a>

        </div>

      </div>
    </section>
  );
}
