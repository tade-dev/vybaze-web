
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Shuffle, Copy, Play } from 'lucide-react';

const ChordProgressionGenerator = () => {
  const [currentProgression, setCurrentProgression] = useState(['C', 'Am', 'F', 'G']);
  const [selectedKey, setSelectedKey] = useState('C');
  
  const keys = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'Cm', 'Dm', 'Em', 'Fm', 'Gm', 'Am', 'Bm'];
  
  const progressions = {
    'C': [
      ['C', 'Am', 'F', 'G'],
      ['C', 'F', 'Am', 'G'],
      ['Am', 'F', 'C', 'G'],
      ['C', 'G', 'Am', 'F'],
      ['F', 'G', 'C', 'Am'],
      ['C', 'Em', 'F', 'G']
    ],
    'Cm': [
      ['Cm', 'Ab', 'Eb', 'Bb'],
      ['Cm', 'Fm', 'G', 'Cm'],
      ['Cm', 'Eb', 'Ab', 'Bb'],
      ['Ab', 'Eb', 'Bb', 'Cm']
    ]
  };

  const generateProgression = () => {
    const keyProgressions = progressions[selectedKey as keyof typeof progressions] || progressions['C'];
    const randomProgression = keyProgressions[Math.floor(Math.random() * keyProgressions.length)];
    setCurrentProgression(randomProgression);
  };

  const copyProgression = () => {
    const text = currentProgression.join(' - ');
    navigator.clipboard.writeText(text);
  };

  const chordInfo = {
    'C': { type: 'Major', notes: 'C-E-G' },
    'Am': { type: 'Minor', notes: 'A-C-E' },
    'F': { type: 'Major', notes: 'F-A-C' },
    'G': { type: 'Major', notes: 'G-B-D' },
    'Em': { type: 'Minor', notes: 'E-G-B' },
    'Dm': { type: 'Minor', notes: 'D-F-A' }
  };

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Chord Progression Generator</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Generate inspiring chord progressions for your next song. Perfect for breaking writer's block!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Generator */}
          <Card className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Music size={24} className="text-pink-500" />
                Progression Generator
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Key Selection */}
              <div>
                <label className="block text-sm font-medium mb-3">Select Key:</label>
                <div className="grid grid-cols-4 gap-2">
                  {keys.map((key) => (
                    <Button
                      key={key}
                      onClick={() => setSelectedKey(key)}
                      variant={selectedKey === key ? "default" : "outline"}
                      className={`h-10 ${selectedKey === key ? 'bg-pink-500 hover:bg-pink-600' : ''}`}
                    >
                      {key}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Current Progression Display */}
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl border">
                <h3 className="font-semibold mb-4 text-gray-800">Current Progression in {selectedKey}:</h3>
                <div className="flex gap-3 justify-center mb-4">
                  {currentProgression.map((chord, index) => (
                    <div key={index} className="bg-white px-4 py-3 rounded-lg shadow-sm border-2 border-pink-200 min-w-[60px] text-center">
                      <div className="font-bold text-lg text-gray-800">{chord}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        {chordInfo[chord as keyof typeof chordInfo]?.type || 'Chord'}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-2 justify-center">
                  <Button onClick={generateProgression} className="bg-pink-500 hover:bg-pink-600">
                    <Shuffle size={16} className="mr-2" />
                    Generate New
                  </Button>
                  
                  <Button onClick={copyProgression} variant="outline">
                    <Copy size={16} className="mr-2" />
                    Copy
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Chord Details */}
          <Card className="animate-fade-in" style={{animationDelay: '0.4s'}}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Play size={24} className="text-purple-500" />
                Chord Details
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                {currentProgression.map((chord, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg border">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-lg">{chord}</h4>
                        <p className="text-sm text-gray-600">
                          {chordInfo[chord as keyof typeof chordInfo]?.type || 'Chord'} chord
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-mono text-gray-800">
                          {chordInfo[chord as keyof typeof chordInfo]?.notes || 'Notes'}
                        </p>
                        <p className="text-xs text-gray-500">Position {index + 1}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Music size={16} className="text-pink-500" />
                  Pro Tip
                </h4>
                <p className="text-sm text-gray-700">
                  Try recording this progression and upload it to Vybaze for AI feedback on harmony, 
                  voice leading, and suggestions for variations!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChordProgressionGenerator;
