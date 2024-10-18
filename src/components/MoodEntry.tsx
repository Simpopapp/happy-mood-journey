import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const MoodEntry = ({ onSubmit }: { onSubmit: () => void }) => {
  const [mood, setMood] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você adicionaria a lógica para salvar a entrada
    onSubmit();
    setMood('');
    setNote('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Select onValueChange={setMood} value={mood}>
        <SelectTrigger>
          <SelectValue placeholder="Escolha seu humor" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="feliz">😊 Feliz</SelectItem>
          <SelectItem value="triste">😢 Triste</SelectItem>
          <SelectItem value="ansioso">😰 Ansioso</SelectItem>
          <SelectItem value="calmo">😌 Calmo</SelectItem>
          <SelectItem value="irritado">😠 Irritado</SelectItem>
        </SelectContent>
      </Select>
      <Textarea
        placeholder="Notas sobre seu dia..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="min-h-[100px]"
      />
      <Button type="submit" className="w-full">Registrar Humor</Button>
    </form>
  );
};

export default MoodEntry;