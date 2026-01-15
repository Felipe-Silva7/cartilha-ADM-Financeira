import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Youtube, BookOpen, Lightbulb } from 'lucide-react';
import { Button } from '../ui/button';

export const SectionResources = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Recursos Extras</h2>
        <p className="text-slate-600 text-lg">Onde continuar aprendendo e se aprofundando.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="text-yellow-500" />
              Dicas de Aprendizagem
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              <li className="flex gap-2">
                <span className="text-emerald-600 font-bold">1.</span>
                <span className="text-slate-600">Estude um pouco por dia. 15 minutos diários valem mais que 2 horas no domingo.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-600 font-bold">2.</span>
                <span className="text-slate-600">Ensine alguém. Explicar o que aprendeu (para o cônjuge ou filhos) fixa o conteúdo.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-600 font-bold">3.</span>
                <span className="text-slate-600">Use a tecnologia. Baixe apps de gestão financeira para automatizar o registro.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-600 font-bold">4.</span>
                <span className="text-slate-600">Siga canais confiáveis. Cuidado com promessas de "dinheiro fácil".</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Youtube className="text-red-600" />
              Canais Recomendados
            </CardTitle>
            <CardDescription>Conteúdo de qualidade no YouTube Brasil</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-3">
              {[
                { name: "Me Poupe! (Nathalia Arcuri)", focus: "Desfuder a vida financeira / Entretenimento" },
                { name: "Primo Rico (Thiago Nigro)", focus: "Investimentos e Mindset" },
                { name: "Nath Finanças", focus: "Finanças reais para quem ganha pouco" },
                { name: "Favelado Investidor", focus: "Investimentos acessíveis" },
                { name: "Gustavo Cerbasi", focus: "Inteligência Financeira" }
              ].map((channel, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                  <div>
                    <p className="font-bold text-slate-800">{channel.name}</p>
                    <p className="text-xs text-slate-500">{channel.focus}</p>
                  </div>
                  <Youtube className="w-5 h-5 text-slate-400" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-slate-900 text-slate-300 p-8 rounded-2xl">
        <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6" /> Livros Essenciais
        </h3>
        <div className="grid sm:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold text-white">Pai Rico, Pai Pobre</h4>
            <p className="text-sm mt-1">Robert Kiyosaki</p>
            <p className="text-xs mt-2 text-slate-400">O clássico sobre Ativos x Passivos e mentalidade.</p>
          </div>
          <div>
            <h4 className="font-bold text-white">Os Segredos da Mente Milionária</h4>
            <p className="text-sm mt-1">T. Harv Eker</p>
            <p className="text-xs mt-2 text-slate-400">Como seus modelos mentais definem sua riqueza.</p>
          </div>
          <div>
            <h4 className="font-bold text-white">Casais Inteligentes Enriquecem Juntos</h4>
            <p className="text-sm mt-1">Gustavo Cerbasi</p>
            <p className="text-xs mt-2 text-slate-400">Fundamental para finanças em família.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
