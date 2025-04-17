import React, { useState } from 'react';
import { Building2, Calendar, ChevronRight, Linkedin, Instagram, MessageSquare, Users } from 'lucide-react';
import { DiagnosticForm } from './components/DiagnosticForm';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Section } from './components/Section';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      <Section
        id="sobre-evento"
        title="Sobre o Evento"
        icon={<Calendar className="w-6 h-6 text-[#102D72]" />}
      >
        <div className="space-y-6">
          <p className="text-gray-700">
            A Reforma Tributária representa a maior mudança no sistema fiscal brasileiro das últimas décadas. 
            Com a implementação do IBS (Imposto sobre Bens e Serviços) e da CBS (Contribuição sobre Bens e Serviços), 
            as empresas precisam se preparar para uma nova realidade.
          </p>
          <p className="text-gray-700">
            Neste evento exclusivo, vamos explorar como a Inteligência Artificial está revolucionando 
            os processos fiscais e como sua empresa pode se beneficiar dessas mudanças.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h4 className="font-semibold text-[#102D72] mb-3">Principais tópicos:</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-[#385DA1]" />
                <span>Impactos da CBS e IBS nas empresas</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-[#385DA1]" />
                <span>Automação de processos fiscais com IA</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-[#385DA1]" />
                <span>Preparação tecnológica para a transição</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-[#385DA1]" />
                <span>Cases práticos de sucesso</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        id="sobre-nos"
        title="Sobre a Forbiz"
        icon={<Building2 className="w-6 h-6 text-[#102D72]" />}
        className="bg-gray-50"
      >
        <div className="space-y-6">
          <p className="text-gray-700">
            A Forbiz é uma empresa líder em soluções tecnológicas para a área fiscal, 
            combinando expertise tributária com inteligência artificial para oferecer 
            as melhores soluções para nossos clientes.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-[#102D72] mb-2">Nossa Missão</h4>
              <p className="text-gray-600">
                Simplificar a complexidade tributária através da tecnologia
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-[#102D72] mb-2">Experiência</h4>
              <p className="text-gray-600">
                +10 anos no mercado tributário
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-[#102D72] mb-2">Clientes</h4>
              <p className="text-gray-600">
                +1000 empresas atendidas
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="consultora-virtual"
        title="Consultora Virtual"
        icon={<MessageSquare className="w-6 h-6 text-[#102D72]" />}
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=500"
              alt="AI Assistant"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-semibold text-[#213147]">
              Conheça a Sofia
            </h3>
            <p className="text-gray-700">
              Nossa assistente virtual especializada em reforma tributária. 
              Com IA avançada, ela está pronta para esclarecer suas dúvidas 
              e auxiliar na transição para o novo sistema tributário.
            </p>
            <button className="bg-[#102D72] text-white px-6 py-3 rounded-lg hover:bg-[#213147] transition-colors">
              Conversar com Sofia
            </button>
          </div>
        </div>
      </Section>

      <Section
        id="diagnostico"
        title="Diagnóstico Tributário"
        icon={<Users className="w-6 h-6 text-[#102D72]" />}
        className="bg-gray-50"
      >
        <DiagnosticForm />
      </Section>

      <footer className="bg-[#213147] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4">Contato</h4>
              <p>contato@forbiz.com.br</p>
              <p>+55 (11) 9999-9999</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="https://linkedin.com/company/forbiz" className="hover:text-[#A8EAFF] transition-colors">
                  <Linkedin />
                </a>
                <a href="https://instagram.com/forbiz" className="hover:text-[#A8EAFF] transition-colors">
                  <Instagram />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Links Úteis</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#sobre-evento" className="hover:text-[#A8EAFF] transition-colors">
                    Sobre o Evento
                  </a>
                </li>
                <li>
                  <a href="#diagnostico" className="hover:text-[#A8EAFF] transition-colors">
                    Diagnóstico Tributário
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>© 2024 Forbiz. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;