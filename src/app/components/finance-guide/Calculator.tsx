import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Slider } from '../ui/slider';

export const Calculator = () => {
  const [goal, setGoal] = useState<number>(10000);
  const [initial, setInitial] = useState<number>(1000);
  const [monthly, setMonthly] = useState<number>(500);
  const [months, setMonths] = useState<number>(12);

  const calculateTotal = () => {
    return initial + (monthly * months);
  };

  const total = calculateTotal();
  const progress = Math.min((total / goal) * 100, 100);

  return (
    <Card className="w-full border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl text-slate-800">Simulador de Metas</CardTitle>
        <CardDescription>Quanto tempo para realizar seu sonho?</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="goal">Meta Financeira (R$)</Label>
          <Input 
            id="goal" 
            type="number" 
            value={goal} 
            onChange={(e) => setGoal(Number(e.target.value))}
            className="font-mono"
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <Label>Investimento Mensal: R$ {monthly}</Label>
          </div>
          <Slider 
            value={[monthly]} 
            min={50} 
            max={5000} 
            step={50} 
            onValueChange={(vals) => setMonthly(vals[0])}
            className="py-4"
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <Label>Prazo: {months} meses</Label>
          </div>
          <Slider 
            value={[months]} 
            min={1} 
            max={60} 
            step={1} 
            onValueChange={(vals) => setMonths(vals[0])}
            className="py-4"
          />
        </div>

        <div className="pt-4 border-t border-slate-100">
          <div className="flex justify-between items-end mb-2">
            <span className="text-sm text-slate-500">Total Acumulado</span>
            <span className="text-2xl font-bold text-emerald-600">R$ {total.toLocaleString('pt-BR')}</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2.5">
            <div 
              className="bg-emerald-500 h-2.5 rounded-full transition-all duration-500" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-xs text-slate-400 mt-2 text-right">
            {progress >= 100 ? 'Meta atingida! 🎉' : `${Math.round(progress)}% da meta`}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
