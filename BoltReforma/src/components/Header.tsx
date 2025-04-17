import React from 'react';
import { Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              src="https://forbiz.com.br/wp-content/uploads/2023/12/logo-forbiz-1.png"
              alt="Forbiz Logo"
              className="h-8"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#sobre-evento" className="text-gray-700 hover:text-[#102D72] transition-colors">
              Sobre o Evento
            </a>
            <a href="#sobre-nos" className="text-gray-700 hover:text-[#102D72] transition-colors">
              Sobre Nós
            </a>
            <a href="#diagnostico" className="text-gray-700 hover:text-[#102D72] transition-colors">
              Diagnóstico
            </a>
            <button className="bg-[#102D72] text-white px-4 py-2 rounded-lg hover:bg-[#213147] transition-colors">
              Inscreva-se
            </button>
          </nav>

          <button className="md:hidden">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
}