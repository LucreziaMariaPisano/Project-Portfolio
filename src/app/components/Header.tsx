import { Menu, X, Download } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 print:hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <div className="flex items-center">
          <Logo />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-600">
          <a href="#" className="text-gray-900 transition-colors">Home</a>
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#academic" className="hover:text-gray-900 transition-colors">Experience</a>
          <a href="#teaching" className="hover:text-gray-900 transition-colors">Speaking</a>
          <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
          <a href="#community" className="hover:text-gray-900 transition-colors">Community</a>
          <a href="#education" className="hover:text-gray-900 transition-colors">Education</a>
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-[#8B2626] transition-colors shadow-sm ml-4"
          >
            <Download size={16} />
            Download PDF
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={handlePrint}
            className="flex items-center justify-center p-2 bg-gray-900 text-white rounded-lg hover:bg-[#8B2626] transition-colors shadow-sm"
            aria-label="Download PDF"
          >
            <Download size={18} />
          </button>
          <button 
            className="text-gray-600 hover:text-gray-900"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-sm">
          <a href="#" className="text-gray-900 font-medium" onClick={toggleMenu}>Home</a>
          <a href="#about" className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>About</a>
          <a href="#academic" className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>Experience</a>
          <a href="#teaching" className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>Speaking</a>
          <a href="#projects" className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>Projects</a>
          <a href="#community" className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>Community</a>
          <a href="#education" className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>Education</a>
        </div>
      )}
    </header>
  );
}