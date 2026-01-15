import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Brain, Calculator, Heart, Coins, TrendingDown } from 'lucide-react';

export const SectionPerspectives = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Formas de Ver o Dinheiro</h2>
        <p className="text-slate-600 text-lg">Administração financeira não é apenas matemática. É comportamento.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-slate-200 hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Calculator className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle>A Visão Lógica (Matemática)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-slate-600">
            <p>
              Foca puramente nos números. Segundo essa visão, para enriquecer basta:
              <strong> Gastar menos do que ganha e investir a diferença.</strong>
            </p>
            <p className="text-sm bg-blue-50 p-3 rounded-md">
              "Se você tem uma dívida com juros de 10% e um investimento rendendo 5%, a matemática diz: pague a dívida primeiro."
            </p>
          </CardContent>
        </Card>

        <Card className="border-slate-200 hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-purple-600" />
            </div>
            <CardTitle>A Visão Comportamental (Psicologia)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-slate-600">
            <p>
              Considera as emoções e hábitos humanos. Sabemos o que fazer, mas nem sempre fazemos.
            </p>
            <p className="text-sm bg-purple-50 p-3 rounded-md">
              "Às vezes, pagar a menor dívida primeiro (mesmo que não seja a de maior juros) gera uma vitória rápida e motivação para continuar." (Método Bola de Neve)
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-slate-800 mb-4">Os 4 Pilares da Administração Financeira Pessoal</h3>
        <div className="grid sm:grid-cols-4 gap-4">
          {[
            { icon: Coins, title: "Ganhar", desc: "Aumentar sua renda (trabalho, extras)." },
            { icon: Calculator, title: "Gastar", desc: "Orçamento consciente e inteligente." },
            { icon: Heart, title: "Poupar", desc: "Guardar para o futuro e sonhos." },
            { icon: TrendingDown, title: "Investir", desc: "Fazer o dinheiro trabalhar para você." }
          ].map((item, i) => (
            <div key={i} className="bg-white border border-slate-200 p-4 rounded-xl text-center hover:border-emerald-400 transition-colors">
              <item.icon className="w-8 h-8 mx-auto text-emerald-600 mb-2" />
              <h4 className="font-bold text-slate-800">{item.title}</h4>
              <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
