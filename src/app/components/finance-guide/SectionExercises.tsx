import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../ui/card';
import { Button } from '../ui/button';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

const scenarios = [
  {
    id: 1,
    title: "O Dilema do 13º Salário",
    desc: "João recebeu R$ 2.000,00 de décimo terceiro. Ele tem uma dívida no cartão de R$ 1.500 (juros de 12% a.m.) e quer muito comprar um tênis novo de R$ 400.",
    options: [
      { text: "Comprar o tênis e pagar parte da dívida.", feedback: "Cuidado! Os juros do restante da dívida vão crescer rápido e engolir o valor do tênis em poucos meses.", type: "bad" },
      { text: "Pagar toda a dívida e guardar os R$ 500 restantes.", feedback: "Excelente! João eliminou o juro alto e começou uma reserva.", type: "good" },
      { text: "Investir os R$ 2.000 na poupança.", feedback: "Errado. A poupança rende ~0.5% a.m., enquanto a dívida cresce 12%. Ele perderia dinheiro.", type: "bad" }
    ]
  },
  {
    id: 2,
    title: "Compra de Carro",
    desc: "Ana quer comprar um carro de R$ 50.000. Ela tem o dinheiro à vista investido rendendo 10% ao ano. O financiamento oferecido tem juros de 15% ao ano.",
    options: [
      { text: "Financiar para não descapitalizar.", feedback: "Matematicamente ruim. Os juros do financiamento (15%) são maiores que o rendimento (10%). Ela pagará mais caro.", type: "bad" },
      { text: "Pagar à vista.", feedback: "Correto! Ela economiza 5% ao ano nessa diferença de juros.", type: "good" }
    ]
  }
];

export const SectionExercises = () => {
  const [activeScenario, setActiveScenario] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<{msg: string, type: string} | null>(null);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Exercícios Práticos</h2>
        <p className="text-slate-600 text-lg">Tome as decisões e veja as consequências.</p>
      </div>

      <div className="grid md:grid-cols-1 gap-6">
        {scenarios.map((scenario) => (
          <Card key={scenario.id} className="border-slate-200 overflow-hidden">
            <CardHeader className="bg-slate-50 border-b border-slate-100">
              <CardTitle className="text-lg text-slate-800">{scenario.title}</CardTitle>
              <p className="text-slate-600 mt-2">{scenario.desc}</p>
            </CardHeader>
            <CardContent className="p-6 space-y-3">
              {scenario.options.map((option, idx) => (
                <div key={idx}>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-left h-auto p-4 whitespace-normal hover:border-emerald-400 hover:bg-emerald-50"
                    onClick={() => {
                      setFeedback({ msg: option.feedback, type: option.type });
                      setActiveScenario(scenario.id);
                    }}
                  >
                    {option.text}
                  </Button>
                  {activeScenario === scenario.id && feedback && feedback.msg === option.feedback && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      className={`mt-2 p-3 rounded-md text-sm flex items-start gap-2 ${feedback.type === 'good' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}
                    >
                      {feedback.type === 'good' ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
                      {feedback.msg}
                    </motion.div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-emerald-900 text-white">
        <CardHeader>
          <CardTitle>Desafio de Mudança de Atitude</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <div className="bg-emerald-700 w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
              <div>
                <p className="font-bold">Diagnóstico (Semana 1)</p>
                <p className="text-emerald-200 text-sm">Anote ABSOLUTAMENTE tudo que gastar por 7 dias. Até a bala.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="bg-emerald-700 w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">2</div>
              <div>
                <p className="font-bold">O Corte (Semana 2)</p>
                <p className="text-emerald-200 text-sm">Identifique 3 gastos supérfluos e elimine-os. Cancele assinaturas não usadas.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="bg-emerald-700 w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">3</div>
              <div>
                <p className="font-bold">A Negociação (Semana 3)</p>
                <p className="text-emerald-200 text-sm">Ligue para operadora de internet/celular e peça desconto ou mude para plano mais barato.</p>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};
