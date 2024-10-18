import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { motion } from "framer-motion";
import { Smile, Frown, Meh, Heart, Star, Angry, Zap, Coffee, Sun, Cloud } from 'lucide-react';

const MoodEntry = ({ onSubmit }: { onSubmit: () => void }) => {
  const [mood, setMood] = useState('');
  const [intensity, setIntensity] = useState(5);
  const [note, setNote] = useState('');

  const moods = [
    { icon: Smile, label: 'Feliz', color: 'text-yellow-500' },
    { icon: Frown, label: 'Triste', color: 'text-blue-500' },
    { icon: Meh, label: 'Neutro', color: 'text-gray-500' },
    { icon: Heart, label: 'Amado', color: 'text-red-500' },
    { icon: Star, label: 'Inspirado', color: 'text-purple-500' },
    { icon: Angry, label: 'Irritado', color: 'text-red-600' },
    { icon: Zap, label: 'Energético', color: 'text-yellow-600' },
    { icon: Coffee, label: 'Cansado', color: 'text-brown-500' },
    { icon: Sun, label: 'Otimista', color: 'text-orange-500' },
    { icon: Cloud, label: 'Pensativo', color: 'text-blue-400' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
    setMood('');
    setIntensity(5);
    setNote('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-5 gap-4">
        {moods.map((item) => (
          <motion.button
            key={item.label}
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMood(item.label)}
            className={`p-2 rounded-full ${mood === item.label ? 'bg-purple-100' : ''}`}
          >
            <item.icon className={`w-8 h-8 ${item.color}`} />
          </motion.button>
        ))}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Intensidade</label>
        <Slider
          value={[intensity]}
          onValueChange={(value) => setIntensity(value[0])}
          max={10}
          step={1}
          className="w-full"
        />
      </div>
      <Textarea
        placeholder="Como você está se sentindo hoje?"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="min-h-[100px]"
      />
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
          <Heart className="mr-2 h-4 w-4" /> Registrar Humor
        </Button>
      </motion.div>
    </form>
  );
};

export default MoodEntry;