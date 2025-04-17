import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-[#213147] text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Você está preparado para enfrentar a Nova Era Tributária do Brasil?
          </h1>
          
          <p className="text-xl mb-8 text-gray-300">
            Descubra como a Inteligência Artificial pode revolucionar seus processos fiscais
            e prepare-se para as mudanças da Reforma Tributária.
          </p>

          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#A8EAFF]" />
              <span>14 de Maio às 19h</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#A8EAFF]" />
              <span>Evento Online</span>
            </div>
          </div>

          <button className="bg-[#A8EAFF] text-[#213147] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white transition-colors">
            Realize sua Inscrição
          </button>
        </div>
      </div>
    </div>
  );
}