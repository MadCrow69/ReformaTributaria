import React, { useState } from 'react';

interface FormData {
  // Empresa
  razaoSocial: string;
  cnpj: string;
  website: string;
  localizacao: string;
  responsavel: string;
  email: string;
  telefone: string;

  // Estrutura
  setor: string[];
  regimeTributario: string;
  faturamento: string;
  multiestado: string;
  regimesEspeciais: string;
  beneficiosFiscais: string;

  // Operações
  estudoImpactos: string;
  creditosPisCofins: string;
  clausulasRevisao: string;
  ncms: string[];
  cargaTributaria: string;
  contabilidade: string;

  // Tecnologia
  equipePreparo: string;
  sistemaGestao: string;
  atualizacaoSistema: string;
  apuracaoTributos: string;
  historicoCreditos: string;
  receberRelatorio: string;
}

export function DiagnosticForm() {
  const [formData, setFormData] = useState<FormData>({
    razaoSocial: '',
    cnpj: '',
    website: '',
    localizacao: '',
    responsavel: '',
    email: '',
    telefone: '',
    setor: [],
    regimeTributario: '',
    faturamento: '',
    multiestado: '',
    regimesEspeciais: '',
    beneficiosFiscais: '',
    estudoImpactos: '',
    creditosPisCofins: '',
    clausulasRevisao: '',
    ncms: ['', '', '', '', ''],
    cargaTributaria: '',
    contabilidade: '',
    equipePreparo: '',
    sistemaGestao: '',
    atualizacaoSistema: '',
    apuracaoTributos: '',
    historicoCreditos: '',
    receberRelatorio: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // This will be configured later with Supabase
      const response = await fetch('https://your-supabase-url/rest/v1/diagnostico', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add Supabase headers here
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Formulário enviado com sucesso! Em breve entraremos em contato.');
      } else {
        throw new Error('Falha ao enviar formulário');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao enviar formulário. Por favor, tente novamente.');
    }
  };

  const FormSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-[#102D72] mb-4">{title}</h3>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
      <FormSection title="1. Dados da empresa">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Razão Social</label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#102D72] focus:ring focus:ring-[#102D72] focus:ring-opacity-50"
              value={formData.razaoSocial}
              onChange={(e) => setFormData({ ...formData, razaoSocial: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">CNPJ</label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#102D72] focus:ring focus:ring-[#102D72] focus:ring-opacity-50"
              value={formData.cnpj}
              onChange={(e) => setFormData({ ...formData, cnpj: e.target.value })}
            />
          </div>
        </div>
        {/* Add other company fields similarly */}
      </FormSection>

      <FormSection title="2. Estrutura e regime fiscal">
        <div>
          <label className="block text-sm font-medium text-gray-700">Setor principal da empresa</label>
          <div className="mt-2 space-y-2">
            {['Indústria', 'Comércio', 'Serviços', 'Agropecuária', 'Outro'].map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-[#102D72] focus:ring-[#102D72]"
                  checked={formData.setor.includes(option)}
                  onChange={(e) => {
                    const newSetor = e.target.checked
                      ? [...formData.setor, option]
                      : formData.setor.filter((s) => s !== option);
                    setFormData({ ...formData, setor: newSetor });
                  }}
                />
                <span className="ml-2">{option}</span>
              </label>
            ))}
          </div>
        </div>
        {/* Add other structure fields similarly */}
      </FormSection>

      <FormSection title="3. Operações e riscos com a nova tributação">
        {/* Add operation fields */}
      </FormSection>

      <FormSection title="4. Obrigações acessórias e tecnologia">
        {/* Add technology fields */}
      </FormSection>

      <div className="mt-8">
        <button
          type="submit"
          className="w-full bg-[#102D72] text-white px-6 py-3 rounded-lg hover:bg-[#213147] transition-colors"
        >
          Enviar e Receber Diagnóstico
        </button>
      </div>
    </form>
  );
}