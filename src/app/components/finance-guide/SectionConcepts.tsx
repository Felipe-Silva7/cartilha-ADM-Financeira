import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Search } from 'lucide-react';

const concepts = [
  { term: "Ativo", def: "Tudo aquilo que coloca dinheiro no seu bolso (Investimentos, imóveis de aluguel, direitos autorais).", category: "Geral" },
  { term: "Passivo", def: "Tudo aquilo que tira dinheiro do seu bolso (Casa própria, carro, mensalidades, dívidas).", category: "Geral" },
  { term: "Inflação (IPCA)", def: "O aumento generalizado dos preços. Se a inflação é 5% ao ano, seu dinheiro precisa render pelo menos 5% para não perder valor de compra.", category: "Economia" },
  { term: "Selic", def: "A taxa básica de juros da economia brasileira. Define quanto rende a Poupança e investimentos como Tesouro Direto.", category: "Economia" },
  { term: "CDI", def: "Taxa que os bancos usam para emprestar dinheiro entre si. Muito usada como referência de rendimento (ex: 100% do CDI).", category: "Investimentos" },
  { term: "Juros Compostos", def: "Juros sobre juros. O principal aliado do investidor a longo prazo, pois faz o dinheiro crescer exponencialmente.", category: "Matemática" },
  { term: "Liquidez", def: "A velocidade com que você consegue transformar um investimento em dinheiro na mão. A poupança tem liquidez imediata; um imóvel tem liquidez baixa.", category: "Investimentos" },
  { term: "Reserva de Emergência", def: "Montante guardado (3 a 6 meses de custo de vida) para imprevistos como desemprego ou doença.", category: "Planejamento" },
  { term: "Renda Fixa", def: "Investimentos onde as regras de rendimento são definidas no momento da aplicação. Mais seguros.", category: "Investimentos" },
  { term: "Renda Variável", def: "Investimentos onde não se sabe o retorno futuro, podendo haver prejuízo. Ex: Ações, Fundos Imobiliários.", category: "Investimentos" },
];

export const SectionConcepts = () => {
  const [search, setSearch] = useState("");

  const filteredConcepts = concepts.filter(c => 
    c.term.toLowerCase().includes(search.toLowerCase()) || 
    c.def.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Dicionário Financeiro</h2>
        <p className="text-slate-600 text-lg">Entenda o "economês" de forma simples e direta.</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
        <Input 
          placeholder="Busque por um termo (ex: Selic, Ativo)..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {filteredConcepts.map((item, index) => (
          <Card key={index} className="border-slate-200 hover:border-emerald-200 transition-colors">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg text-emerald-800">{item.term}</CardTitle>
                <Badge variant="outline" className="text-xs text-slate-500">{item.category}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-sm leading-relaxed">{item.def}</p>
            </CardContent>
          </Card>
        ))}
        {filteredConcepts.length === 0 && (
          <p className="col-span-2 text-center text-slate-500 py-8">Nenhum termo encontrado.</p>
        )}
      </div>
    </div>
  );
};
