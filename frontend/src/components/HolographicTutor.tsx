import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mic, Volume2, Check } from "lucide-react";

const HolographicTutor = () => {
  const [isListening, setIsListening] = useState(false);
  const [userSpeech, setUserSpeech] = useState("");
  const [tutorFeedback, setTutorFeedback] = useState("");
  const [accuracy, setAccuracy] = useState(0);
  const [waveforms, setWaveforms] = useState<number[]>(Array(20).fill(1));

  // Expanded dataset of English phrases for conversation practice
  const phrases = [
    "Hello, how are you today?",
    "Nice to meet you! What’s your name?",
    "Can you help me with directions, please?",
    "I’d like to order a coffee, thank you.",
    "What time does the meeting start?",
    "Excuse me, where is the nearest bus stop?",
    "Could you repeat that, please?",
    "I’m looking forward to our conversation.",
    "How much does this cost?",
    "Thank you very much for your assistance.",
    "Can I have the menu, please?",
    "What’s the weather like today?",
    "I’d like to book a room for tonight.",
    "Do you have any recommendations for dinner?",
    "Where can I find the restroom?",
    "Let’s discuss the project details.",
    "Could you speak a bit slower, please?",
    "I appreciate your help with this.",
    "What’s your favorite book or movie?",
    "Can you tell me the way to the airport?",
    "I’d like to check in for my flight.",
    "How do you say this word in English?",
    "Thank you, have a great day!",
    "Can we schedule a meeting for tomorrow?",
    "I need assistance with my luggage.",
    "What’s on the agenda for today?",
    "Please call me if you need anything.",
    "I’m excited to learn more about this.",
    "Could you show me how to use this?",
    "Let’s take a break and continue later."
  ];
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);

  // Animation effect for the waveforms when speaking
  useEffect(() => {
    if (isListening) {
      const interval = setInterval(() => {
        setWaveforms(
          Array(20)
            .fill(0)
            .map(() => Math.random() * 2 + 0.5)
        );
      }, 100);
      return () => clearInterval(interval);
    } else {
      setWaveforms(Array(20).fill(1));
    }
  }, [isListening]);

  // Simulate speech recognition
  const startListening = () => {
    setIsListening(true);
    setUserSpeech("");
    setTutorFeedback("");
    
    // Simulate the speech recognition process
    setTimeout(() => {
      setIsListening(false);
      
      // Simulate varying levels of pronunciation accuracy
      const simulatedAccuracy = Math.floor(Math.random() * 30) + 70; // 70-99%
      setAccuracy(simulatedAccuracy);
      
      // Simulate the user's speech (in a real app this would come from speech recognition)
      setUserSpeech(currentPhrase);
      
      // Provide appropriate feedback based on accuracy
      if (simulatedAccuracy > 90) {
        setTutorFeedback("Excellent pronunciation! Your English sounds very natural.");
      } else if (simulatedAccuracy > 80) {
        setTutorFeedback("Good job! Try to focus on your intonation a bit more.");
      } else {
        setTutorFeedback("Not bad, but let’s work on your vowel sounds. Listen to the correct pronunciation again.");
      }
    }, 3000);
  };

  // Function to play the correct pronunciation
  const playCorrectPronunciation = () => {
    // This would trigger text-to-speech in a real application
    console.log("Playing correct pronunciation of:", currentPhrase);
    // Simulate audio playback visual indicator
    setIsListening(true);
    setTimeout(() => {
      setIsListening(false);
    }, 2000);
  };

  // Change to next phrase
  const nextPhrase = () => {
    const currentIndex = phrases.indexOf(currentPhrase);
    const nextIndex = (currentIndex + 1) % phrases.length;
    setCurrentPhrase(phrases[nextIndex]);
    setUserSpeech("");
    setTutorFeedback("");
    setAccuracy(0);
  };

  return (
    <div className="glass-panel p-6 w-full max-w-xl mx-auto">
      <div className="relative">
        {/* Holographic tutor visualization */}
        <div className="relative h-64 mb-6 rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-b from-varna-purple/10 to-varna-accent-cyan/10">
          {/* Holographic circle */}
          <div className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-varna-purple/20 to-varna-accent-cyan/20 animate-pulse-glow"></div>
          
          {/* Tutor character */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-varna-purple/40 to-varna-accent-teal/40 flex items-center justify-center border border-white/30 shadow-holo animate-float">
              <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="30" r="20" className="fill-white/80" />
                <path d="M30 70 Q50 90 70 70 Q80 50 50 50 Q20 50 30 70" className="fill-white/80" />
              </svg>
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-bold text-white drop-shadow-md">HoloLingua Tutor</h3>
              <p className="text-xs text-white/70">English Conversation Coach</p>
            </div>
          </div>
          
          {/* Background glow effects */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-varna-accent-cyan/10 to-transparent"></div>
        </div>

        {/* Phrase to practice */}
        <div className="mb-6 text-center">
          <p className="text-sm text-muted-foreground mb-1">Repeat this phrase:</p>
          <h2 className="text-2xl font-bold hologram-text">{currentPhrase}</h2>
          <div className="flex justify-center mt-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-xs flex gap-1 items-center" 
              onClick={playCorrectPronunciation}
            >
              <Volume2 className="h-3 w-3" />
              Listen
            </Button>
          </div>
        </div>

        {/* Visualization of speech */}
        <div className="h-16 mb-4 flex items-center justify-center gap-1">
          {waveforms.map((height, i) => (
            <div
              key={i}
              className="w-2 bg-varna-accent-cyan rounded-full animate-wave"
              style={{ 
                height: `${height * 20}px`, 
                animationDelay: `${i * 0.05}s`,
                opacity: isListening ? 1 : 0.3
              }}
            ></div>
          ))}
        </div>

        {/* Microphone button */}
        <div className="flex justify-center mb-4">
          <Button
            onClick={startListening}
            disabled={isListening}
            className={`rounded-full w-16 h-16 flex items-center justify-center ${
              isListening
                ? "bg-red-500 hover:bg-red-600"
                : "bg-gradient-to-r from-varna-purple to-varna-accent-teal"
            }`}
          >
            <Mic className="h-6 w-6" />
          </Button>
        </div>

        {/* Feedback section */}
        {userSpeech && (
          <div className="mb-6 animate-fade-in">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm font-medium">Your pronunciation:</p>
              <div className="flex items-center gap-1 text-sm">
                <span className={accuracy > 90 ? "text-green-500" : accuracy > 80 ? "text-amber-500" : "text-red-500"}>
                  {accuracy}%
                </span>
                <span className="text-muted-foreground">accuracy</span>
              </div>
            </div>
            
            <div className="p-3 rounded-lg bg-muted/50 border border-border mb-3">
              <p className="text-sm">{userSpeech}</p>
            </div>
            
            <div className="bg-gradient-to-r from-varna-purple/20 to-varna-accent-teal/20 p-3 rounded-lg border border-varna-accent-cyan/20">
              <p className="text-sm flex items-start gap-2">
                <span className="mt-1 bg-varna-accent-teal/20 p-1 rounded">
                  <Check className="h-3 w-3 text-varna-accent-teal" />
                </span>
                {tutorFeedback}
              </p>
            </div>
          </div>
        )}

        {userSpeech && (
          <div className="flex justify-center">
            <Button onClick={nextPhrase}>Next Phrase</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HolographicTutor;