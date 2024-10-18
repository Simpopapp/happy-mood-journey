import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import MoodEntry from '@/components/MoodEntry';
import MoodChart from '@/components/MoodChart';
import { motion } from "framer-motion";
import { Smile, Frown, Meh } from 'lucide-react';

const Index = () => {
  const { toast } = useToast()
  const [showEntry, setShowEntry] = useState(false);

  const handleNewEntry = () => {
    toast({
      title: "Nova entrada adicionada",
      description: "Seu humor foi registrado com sucesso!",
    })
    setShowEntry(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-pink-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-800 font-cursive">Diário de Humor</h1>
        
        {!showEntry ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="flex justify-center space-x-4 mb-8">
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                <Smile size={48} className="text-yellow-500" />
              </motion.div>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}>
                <Meh size={48} className="text-orange-500" />
              </motion.div>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}>
                <Frown size={48} className="text-blue-500" />
              </motion.div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-6 py-3 rounded-full text-xl font-cursive shadow-lg"
              onClick={() => setShowEntry(true)}
            >
              Registrar Humor
            </motion.button>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-purple-700">Como você está se sentindo hoje?</h2>
              <MoodEntry onSubmit={handleNewEntry} />
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-purple-700">Seu Humor ao Longo do Tempo</h2>
              <MoodChart />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Index;