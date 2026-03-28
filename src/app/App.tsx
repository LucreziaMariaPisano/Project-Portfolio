import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { AcademicExperience } from "./components/AcademicExperience";
import { TeachingEngagements } from "./components/TeachingEngagements";
import { Projects } from "./components/Projects";
import { CommunityEngagement } from "./components/CommunityEngagement";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth selection:bg-[#8B2626]/20">
      <Header />
      <main>
        <Hero />
        <About />
        <AcademicExperience />
        <TeachingEngagements />
        <Projects />
        <CommunityEngagement />
        <Education />
        <Contact />
      </main>
      
      {/* Temporary Footer for completeness */}
      <footer className="bg-gray-50 py-12 px-6 md:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Lucrezia Maria Pisano. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <a href="https://www.linkedin.com/in/lucrezia-maria-pisano/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">LinkedIn</a>
            <a href="mailto:lucreziamaria.pisano@gmail.com" className="hover:text-gray-900 transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}