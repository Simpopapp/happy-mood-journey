import React from 'react';
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import MoodEntry from '@/components/MoodEntry';
import MoodChart from '@/components/MoodChart';

const Index = () => {
  const { toast } = useToast()

  const handleNewEntry = () => {
    toast({
      title: "Nova entrada adicionada",
      description: "Seu humor foi registrado com sucesso!",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-800">Diário de Humor</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-purple-700">Como você está se sentindo hoje?</h2>
            <MoodEntry onSubmit={handleNewEntry} />
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-purple-700">Seu Humor ao Longo do Tempo</h2>
            <MoodChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;