
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Pause, Square, Volume2, Mic, Music } from 'lucide-react';

const BeatMaker = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBeat, setCurrentBeat] = useState(0);
  const [pattern, setPattern] = useState({
    kick: [true, false, true, false, true, false, true, false],
    snare: [false, false, true, false, false, false, true, false],
    hihat: [true, true, true, true, true, true, true, true],
    openhat: [false, false, false, true, false, false, false, true]
  });
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [bpm] = useState(120);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentBeat((prev) => (prev + 1) % 8);
      }, (60 / bpm / 2) * 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, bpm]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const stop = () => {
    setIsPlaying(false);
    setCurrentBeat(0);
  };

  const toggleStep = (instrument: keyof typeof pattern, step: number) => {
    setPattern(prev => ({
      ...prev,
      [instrument]: prev[instrument].map((active, index) => 
        index === step ? !active : active
      )
    }));
  };

  const instrumentColors = {
    kick: 'from-red-500 to-red-600',
    snare: 'from-blue-500 to-blue-600',
    hihat: 'from-yellow-500 to-yellow-600',
    openhat: 'from-green-500 to-green-600'
  };

  const instrumentNames = {
    kick: 'Kick',
    snare: 'Snare',
    hihat: 'Hi-Hat',
    openhat: 'Open Hat'
  };

  return (
    <section className="w-full py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Interactive Beat Maker</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create your own beats and experience the rhythm! Click the steps to build your pattern.
          </p>
        </div>

        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white border-gray-700 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Music size={28} className="text-pink-400" />
              Beat Sequencer
              <div className="ml-auto flex items-center gap-2 text-sm">
                <Volume2 size={16} />
                {bpm} BPM
              </div>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Transport Controls */}
            <div className="flex justify-center gap-4 mb-8">
              <Button
                onClick={togglePlay}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 px-6 py-3 rounded-xl font-semibold"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                <span className="ml-2">{isPlaying ? 'Pause' : 'Play'}</span>
              </Button>
              
              <Button
                onClick={stop}
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-700 px-6 py-3 rounded-xl"
              >
                <Square size={20} />
                <span className="ml-2">Stop</span>
              </Button>
            </div>

            {/* Beat Grid */}
            <div className="space-y-4">
              {/* Step indicators */}
              <div className="flex gap-2 justify-center mb-4">
                {Array.from({ length: 8 }, (_, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center text-sm font-bold transition-all duration-150 ${
                      currentBeat === i && isPlaying
                        ? 'border-pink-400 bg-pink-400 text-white scale-110'
                        : 'border-gray-600 text-gray-400'
                    }`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>

              {/* Instrument patterns */}
              {Object.entries(pattern).map(([instrument, steps]) => (
                <div key={instrument} className="flex items-center gap-4">
                  <div className="w-20 text-right font-semibold text-gray-300">
                    {instrumentNames[instrument as keyof typeof instrumentNames]}
                  </div>
                  
                  <div className="flex gap-2 flex-1 justify-center">
                    {steps.map((active, stepIndex) => (
                      <button
                        key={stepIndex}
                        onClick={() => toggleStep(instrument as keyof typeof pattern, stepIndex)}
                        className={`w-8 h-8 rounded-lg border-2 transition-all duration-150 hover:scale-105 ${
                          active
                            ? `bg-gradient-to-br ${instrumentColors[instrument as keyof typeof instrumentColors]} border-transparent shadow-lg`
                            : 'border-gray-600 hover:border-gray-500 bg-gray-800'
                        } ${
                          currentBeat === stepIndex && isPlaying && active
                            ? 'ring-2 ring-white ring-opacity-60 scale-110'
                            : ''
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Info Section */}
            <div className="mt-8 p-6 bg-white/5 rounded-xl border border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <Mic size={20} className="text-pink-400" />
                <h3 className="text-lg font-semibold">Try Vybaze AI Feedback</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Create a beat like this in your DAW, then upload it to Vybaze for instant AI analysis 
                on rhythm, arrangement, and production quality!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BeatMaker;
