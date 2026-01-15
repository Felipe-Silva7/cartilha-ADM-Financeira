import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Necessidades (50%)', value: 50, color: '#10b981' }, // emerald-500
  { name: 'Desejos (30%)', value: 30, color: '#3b82f6' }, // blue-500
  { name: 'Invest/Poupança (20%)', value: 20, color: '#8b5cf6' }, // violet-500
];

export const BudgetChart = () => {
  return (
    <div className="w-full h-64 bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center">
      <h3 className="text-lg font-semibold text-slate-800 mb-2">Regra 50/30/20</h3>
      <div className="w-full h-full min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value: number) => `${value}%`}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Legend verticalAlign="bottom" height={36} iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
