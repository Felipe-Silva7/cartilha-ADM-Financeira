import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { CheckCircle2, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const questions = [
  {
    id: 1,
    question: "O que é uma Reserva de Emergência?",
    options: [
      "Dinheiro para gastar em viagens de férias",
      "Um valor guardado para imprevistos (3 a 6 meses de custo de vida)",
      "Limite do cartão de crédito",
      "Investimento em ações de alto risco"
    ],
    correct: 1
  },
  {
    id: 2,
    question: "Qual a recomendação da regra 50/30/20 para 'Desejos'?",
    options: [
      "50% da renda",
      "20% da renda",
      "30% da renda",
      "0% da renda"
    ],
    correct: 2
  },
  {
    id: 3,
    question: "Qual a melhor estratégia para dívidas com juros altos?",
    options: [
      "Ignorar até caducar",
      "Pagar o mínimo do cartão",
      "Fazer mais dívidas para pagar as antigas",
      "Priorizar o pagamento e renegociar com o credor"
    ],
    correct: 3
  }
];

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (index: number) => {
    if (selectedOption !== null) return;
    
    setSelectedOption(index);
    const correct = index === questions[currentQuestion].correct;
    setIsCorrect(correct);
    
    if (correct) setScore(s => s + 1);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(c => c + 1);
        setSelectedOption(null);
        setIsCorrect(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setIsCorrect(null);
    setShowResult(false);
    setScore(0);
  };

  if (showResult) {
    return (
      <Card className="w-full text-center py-8 border-slate-200">
        <CardContent className="space-y-4">
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-4xl"
          >
            {score === questions.length ? '🏆' : score > 0 ? '👏' : '📚'}
          </motion.div>
          <CardTitle className="text-2xl">Você acertou {score} de {questions.length}!</CardTitle>
          <p className="text-slate-500">
            {score === questions.length 
              ? "Parabéns! Você é um mestre das finanças." 
              : "Continue estudando para melhorar seus conhecimentos!"}
          </p>
          <Button onClick={resetQuiz} className="bg-emerald-600 hover:bg-emerald-700 mt-4">
            Tentar Novamente
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full border-slate-200">
      <CardHeader>
        <CardTitle className="flex justify-between items-center text-lg">
          <span>Quiz Financeiro</span>
          <span className="text-sm font-normal text-slate-500">
            {currentQuestion + 1}/{questions.length}
          </span>
        </CardTitle>
        <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2">
          <div 
            className="bg-emerald-500 h-1.5 rounded-full transition-all duration-300" 
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <h3 className="font-medium text-lg mb-4 text-slate-800">
          {questions[currentQuestion].question}
        </h3>
        <div className="space-y-2">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={selectedOption !== null}
              className={`w-full text-left p-4 rounded-lg border transition-all duration-200 flex items-center justify-between
                ${selectedOption === null 
                  ? 'border-slate-200 hover:border-emerald-500 hover:bg-emerald-50' 
                  : selectedOption === index 
                    ? isCorrect 
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-700' 
                      : 'border-red-500 bg-red-50 text-red-700'
                    : index === questions[currentQuestion].correct
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-700' // Show correct answer
                      : 'border-slate-100 text-slate-400 opacity-50'
                }
              `}
            >
              <span>{option}</span>
              {selectedOption === index && (
                isCorrect ? <CheckCircle2 className="w-5 h-5 text-emerald-600" /> : <XCircle className="w-5 h-5 text-red-600" />
              )}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
