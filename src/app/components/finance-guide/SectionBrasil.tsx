import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { AlertTriangle, TrendingDown, Users } from 'lucide-react';

const debtData = [
  { year: '2019', value: 63.5 },
  { year: '2020', value: 66.5 },
  { year: '2021', value: 70.9 },
  { year: '2022', value: 77.9 },
  { year: '2023', value: 78.3 },
];

export const SectionBrasil = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">O Brasil e o Dinheiro</h2>
        <p className="text-slate-600 text-lg">Um panorama sobre a saúde financeira nacional e os desafios que enfrentamos.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="bg-red-50 border-red-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-red-600 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Inadimplência
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-slate-800">~72 milhões</p>
            <p className="text-sm text-slate-600">de brasileiros com o nome restrito (negativados) em 2023.</p>
          </CardContent>
        </Card>
        <Card className="bg-orange-50 border-orange-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-orange-600 flex items-center gap-2">
              <TrendingDown className="h-5 w-5" />
              Endividamento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-slate-800">77.9%</p>
            <p className="text-sm text-slate-600">das famílias possuem algum tipo de dívida (cartão, carnê, financiamento).</p>
          </CardContent>
        </Card>
        <Card className="bg-blue-50 border-blue-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-blue-600 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Educação
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-slate-800">Ranking 74º</p>
            <p className="text-sm text-slate-600">Posição do Brasil em educação financeira global (S&P Global FinLit Survey).</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle>Evolução do Endividamento das Famílias (%)</CardTitle>
          <CardDescription>Percentual de famílias com dívidas no Brasil nos últimos anos.</CardDescription>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={debtData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="year" />
              <YAxis domain={[50, 90]} />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                formatter={(value: number) => [`${value}%`, 'Endividamento']}
              />
              <Bar dataKey="value" fill="#f97316" radius={[4, 4, 0, 0]} barSize={50} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="bg-slate-100 p-6 rounded-xl border-l-4 border-emerald-500">
        <h3 className="text-lg font-bold text-slate-800 mb-2">Por que isso acontece?</h3>
        <ul className="list-disc list-inside space-y-2 text-slate-700">
          <li><strong>Falta de Educação de Base:</strong> Poucas escolas ensinam sobre dinheiro.</li>
          <li><strong>Cultura do Imediatismo:</strong> O desejo de "ter agora e pagar depois" impulsionado pelo crédito fácil.</li>
          <li><strong>Inflação e Juros Altos:</strong> O custo de vida sobe e as dívidas crescem como bola de neve.</li>
          <li><strong>Tabu:</strong> Falar sobre dinheiro ainda é desconfortável para muitas famílias.</li>
        </ul>
      </div>
    </div>
  );
};
