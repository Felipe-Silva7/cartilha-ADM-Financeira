import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Briefcase, GraduationCap, TrendingUp, AlertTriangle, Brain, Target, ShieldCheck, HeartPulse } from 'lucide-react';

export const SectionAdministration = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Administração Financeira</h2>
        <p className="text-slate-600 text-lg">
          Planejamento e consciência para uma vida tranquila e próspera.
        </p>
      </div>

      {/* Intro Blocks */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-emerald-50 border-emerald-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-emerald-800">
              <Briefcase className="w-5 h-5" /> Tomada de Decisão
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-700 leading-relaxed">
            <p>
              Para a tomada de decisão consciente é preciso a administração financeira no planejamento orçamental, visto que ela impacta diretamente na qualidade de vida, futuro e a tranquilidade econômica.
            </p>
            <p className="mt-4">
              Acumular contas em atrasos ou manter hábitos financeiros ruins pode afastar você dos seus planos e sonhos, causando descontrole financeiro.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-blue-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <GraduationCap className="w-5 h-5" /> O Que é Educação Financeira?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-700 leading-relaxed">
            <p>
              Vai muito além de economizar recursos. Refere-se à habilidade de entender e gerenciar seus recursos de forma consciente e responsável.
            </p>
            <p className="mt-4">
              Quem possui educação financeira sabe planejar, investir e gastar conforme objetivos, lidando melhor com riscos e patrimônio no curto e longo prazo.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Gen Z Stats */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <AlertTriangle className="text-orange-500" /> Jovens e Finanças (Geração Z)
        </h3>
        <p className="text-slate-600 mb-6">
          Um estudo aponta que <strong>47%</strong> dos jovens nascidos entre 1995 e 2010 não têm controle das finanças pessoais.
        </p>
        
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { val: "19%", label: "Não sabem monitorar as finanças" },
            { val: "18%", label: "Falta de hábito e disciplina" },
            { val: "16%", label: "Falta de renda" }
          ].map((stat, i) => (
            <div key={i} className="bg-slate-50 p-4 rounded-lg text-center border border-slate-100">
              <div className="text-3xl font-bold text-slate-800 mb-1">{stat.val}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Pros & Cons */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Benefits */}
        <div>
          <h3 className="text-xl font-bold text-emerald-700 mb-4 flex items-center gap-2">
            <TrendingUp className="w-6 h-6" /> Benefícios
          </h3>
          <div className="space-y-4">
            <BenefitCard 
              icon={ShieldCheck} 
              title="Responsabilidade" 
              desc="Ajuda a gerenciar mesadas e primeiros salários, criando hábitos de controle e reduzindo dependência." 
            />
            <BenefitCard 
              icon={Brain} 
              title="Consumo Consciente" 
              desc="Incentiva a diferenciar necessidades de desejos, evitando impulsos e compras desnecessárias." 
            />
             <BenefitCard 
              icon={HeartPulse} 
              title="Bem-Estar" 
              desc="Reduz o estresse financeiro e promove saúde mental equilibrada ao sentir controle sobre as finanças." 
            />
             <BenefitCard 
              icon={Target} 
              title="Realização de Sonhos" 
              desc="Permite planejar metas de curto, médio e longo prazo (faculdade, casa, móveis)." 
            />
          </div>
        </div>

        {/* Malefics */}
        <div>
          <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6" /> Riscos da Falta de Educação
          </h3>
          <div className="space-y-4">
            <MaleficCard 
              title="Endividamento Precoce" 
              desc="Jovens caem facilmente em armadilhas de crédito, como cartões e empréstimos." 
            />
            <MaleficCard 
              title="Consumo Excessivo" 
              desc="O desejo de posse sem necessidade leva a gastos não planejados e impulsivos." 
            />
            <MaleficCard 
              title="Risco ao Empreender" 
              desc="Jovens empreendedores sem base financeira têm maior risco de falência." 
            />
            <MaleficCard 
              title="Baixa Qualidade de Vida" 
              desc="O descontrole gera insônia, depressão e ansiedade, impactando relacionamentos e produtividade." 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const BenefitCard = ({icon: Icon, title, desc}: any) => (
  <div className="flex gap-4 p-4 bg-emerald-50/50 rounded-lg border border-emerald-100 hover:bg-emerald-50 transition-colors">
    <div className="bg-emerald-100 p-2 rounded-lg h-fit">
      <Icon className="w-5 h-5 text-emerald-600" />
    </div>
    <div>
      <h4 className="font-bold text-emerald-900">{title}</h4>
      <p className="text-sm text-emerald-800 mt-1">{desc}</p>
    </div>
  </div>
);

const MaleficCard = ({title, desc}: any) => (
  <div className="p-4 bg-red-50/50 rounded-lg border border-red-100 hover:bg-red-50 transition-colors">
    <h4 className="font-bold text-red-900 mb-1">{title}</h4>
    <p className="text-sm text-red-800">{desc}</p>
  </div>
);
