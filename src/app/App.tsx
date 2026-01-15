import React, { useState } from 'react';
import { 
  BookOpen, 
  TrendingUp, 
  PiggyBank, 
  AlertTriangle, 
  Target, 
  LayoutDashboard,
  Menu,
  X,
  GraduationCap,
  Globe2,
  Brain,
  Dumbbell,
  Library,
  Briefcase
} from 'lucide-react';
import { Button } from './components/ui/button';
import { Calculator } from './components/finance-guide/Calculator';
import { BudgetChart } from './components/finance-guide/BudgetChart';
import { Quiz } from './components/finance-guide/Quiz';
import { SectionBrasil } from './components/finance-guide/SectionBrasil';
import { SectionConcepts } from './components/finance-guide/SectionConcepts';
import { SectionPerspectives } from './components/finance-guide/SectionPerspectives';
import { SectionExercises } from './components/finance-guide/SectionExercises';
import { SectionResources } from './components/finance-guide/SectionResources';
import { SectionAdministration } from './components/finance-guide/SectionAdministration';
import { motion, AnimatePresence } from 'motion/react';

// Navigation Items Configuration
const navItems = [
  { id: 'home', label: 'Início', icon: LayoutDashboard },
  { id: 'brasil', label: 'Contexto Brasil', icon: Globe2 },
  { id: 'admin', label: 'Administração', icon: Briefcase },
  { id: 'mindset', label: 'Mentalidade', icon: Brain },
  { id: 'concepts', label: 'Conceitos', icon: BookOpen },
  { id: 'budget', label: 'Orçamento', icon: PiggyBank },
  { id: 'debt', label: 'Dívidas', icon: AlertTriangle },
  { id: 'invest', label: 'Investimentos', icon: TrendingUp },
  { id: 'practice', label: 'Prática & Exercícios', icon: Dumbbell },
  { id: 'resources', label: 'Recursos', icon: Library },
  { id: 'quiz', label: 'Avaliação', icon: GraduationCap },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection onStart={() => setActiveSection('brasil')} />;
      case 'brasil':
        return <SectionBrasil />;
      case 'admin':
        return <SectionAdministration />;
      case 'mindset':
        return <SectionPerspectives />;
      case 'concepts':
        return <SectionConcepts />;
      case 'budget':
        return <BudgetSection />;
      case 'debt':
        return <DebtSection />;
      case 'invest':
        return <InvestSection />;
      case 'practice':
        return <SectionExercises />;
      case 'resources':
        return <SectionResources />;
      case 'quiz':
        return <QuizSection />;
      default:
        return <HomeSection onStart={() => setActiveSection('brasil')} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-slate-300 transform transition-transform duration-200 ease-in-out
        md:translate-x-0 md:static md:h-screen overflow-y-auto
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 border-b border-slate-800 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-white text-xl">
            <div className="bg-emerald-500 p-1.5 rounded-lg">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span>EDUCA DIN</span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden text-slate-400">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Sumário
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                  ${isActive 
                    ? 'bg-emerald-600 text-white shadow-md' 
                    : 'hover:bg-slate-800 hover:text-white'
                  }
                `}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-white'}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="p-6 mt-auto">
          <div className="bg-slate-800 rounded-xl p-4 text-center">
            <p className="text-xs text-slate-400 mb-2">Progresso do Curso</p>
            <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full w-[30%]"></div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden bg-white border-b border-slate-200 p-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)}>
            <Menu className="w-6 h-6" />
          </Button>
          <h1 className="font-bold text-slate-800">EDUCA DIN</h1>
        </header>

        {/* Content Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12 scroll-smooth">
          <div className="max-w-4xl mx-auto">
            {renderContent()}
          </div>
          
          <footer className="mt-20 pt-8 border-t border-slate-200 text-center text-slate-400 text-sm pb-8">
            © 2026 EDUCA DIN - Educação Financeira para Todos
          </footer>
        </div>
      </main>
    </div>
  );
}

// --- Sub-Components (Internal to App.tsx to avoid file clutter, but using imported separate sections where possible) ---

const HomeSection = ({ onStart }: { onStart: () => void }) => (
  <div className="space-y-8 animate-in fade-in duration-500">
    <div className="text-center py-12 md:py-20 bg-emerald-900 rounded-3xl text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Sua Cartilha Financeira
        </h1>
        <p className="text-emerald-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Um guia completo e interativo para transformar sua relação com o dinheiro. 
          Dos conceitos básicos à prática.
        </p>
        <Button onClick={onStart} size="lg" className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold px-8">
          Começar a Jornada
        </Button>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="font-bold text-lg mb-2">Para quem é este guia?</h3>
        <ul className="space-y-2 text-slate-600 text-sm">
          <li>• Quem quer sair das dívidas</li>
          <li>• Quem quer começar a investir</li>
          <li>• Quem quer organizar o orçamento</li>
          <li>• Estudantes e iniciantes no mercado de trabalho</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="font-bold text-lg mb-2">O que você vai aprender?</h3>
        <ul className="space-y-2 text-slate-600 text-sm">
          <li>• Como funciona o dinheiro no Brasil</li>
          <li>• Psicologia financeira</li>
          <li>• Ferramentas práticas de organização</li>
          <li>• Dicas de livros e vídeos</li>
        </ul>
      </div>
    </div>
  </div>
);

const BudgetSection = () => (
  <div className="space-y-8 animate-in fade-in duration-500">
    <div>
      <h2 className="text-3xl font-bold text-slate-800 mb-2">Organizando o Orçamento</h2>
      <p className="text-slate-600 text-lg">A regra 50/30/20 explicada na prática.</p>
    </div>
    <BudgetChart />
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
       <h3 className="font-bold text-slate-800 mb-4">Simulador de Metas</h3>
       <Calculator />
    </div>
  </div>
);

const DebtSection = () => (
  <div className="space-y-8 animate-in fade-in duration-500">
    <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
      <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
        <AlertTriangle /> Saindo do Vermelho
      </h2>
      <p className="text-red-800 mb-6">
        Passo a passo prático para renegociar e quitar dívidas.
      </p>
      <div className="space-y-4">
        {[
          "Liste todas as dívidas (Valor total e CET)",
          "Priorize dívidas com juros altos (Cartão, Cheque Especial)",
          "Troque dívidas caras por baratas (Empréstimo Consignado)",
          "Gere renda extra para amortizar o principal"
        ].map((step, i) => (
          <div key={i} className="flex gap-4 items-center bg-white p-4 rounded-lg shadow-sm">
            <span className="font-bold text-red-500 text-xl">0{i+1}</span>
            <span className="text-slate-700">{step}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const InvestSection = () => (
  <div className="space-y-8 animate-in fade-in duration-500">
    <div>
      <h2 className="text-3xl font-bold text-slate-800 mb-2">Investimentos</h2>
      <p className="text-slate-600 text-lg">Faça o dinheiro trabalhar para você.</p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-emerald-500 transition-colors">
        <h3 className="font-bold text-emerald-700 mb-2">Renda Fixa</h3>
        <p className="text-sm text-slate-600 mb-4">Emprestar dinheiro para o governo ou bancos.</p>
        <ul className="text-sm space-y-2 text-slate-500">
          <li>• Tesouro Direto (Seguro)</li>
          <li>• CDBs (Garantia FGC)</li>
          <li>• LCI/LCA (Isento de IR)</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-purple-500 transition-colors">
        <h3 className="font-bold text-purple-700 mb-2">Renda Variável</h3>
        <p className="text-sm text-slate-600 mb-4">Ser sócio de grandes empresas ou imóveis.</p>
        <ul className="text-sm space-y-2 text-slate-500">
          <li>• Ações (Empresas)</li>
          <li>• Fundos Imobiliários (Aluguéis)</li>
          <li>• ETFs (Cestas de ativos)</li>
        </ul>
      </div>
    </div>
  </div>
);

const QuizSection = () => (
  <div className="space-y-8 animate-in fade-in duration-500">
    <div>
      <h2 className="text-3xl font-bold text-slate-800 mb-2">Avaliação Final</h2>
      <p className="text-slate-600 text-lg">Teste seus conhecimentos adquiridos.</p>
    </div>
    <Quiz />
  </div>
);
