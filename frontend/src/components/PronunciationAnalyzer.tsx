
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mic, Volume2, RefreshCw } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface PronunciationMetrics {
  accuracy: number;
  rhythm: number;
  intonation: number;
  fluency: number;
  overall: number;
}

const PronunciationAnalyzer = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingComplete, setRecordingComplete] = useState(false);
  const [currentWord, setCurrentWord] = useState("worcestershire");
  const [metrics, setMetrics] = useState<PronunciationMetrics>({
    accuracy: 0,
    rhythm: 0,
    intonation: 0,
    fluency: 0,
    overall: 0,
  });
  
  const [waveformData, setWaveformData] = useState<number[]>(Array(40).fill(5));
  
  // List of challenging words for pronunciation practice
  const challengingWords = [
    "worcestershire",
    "specifically",
    "phenomenon",
    "peculiarly",
    "particularly",
    "entrepreneurship",
    "conscientious",
    "methodology",
    "anonymous",
    "February"
  ];
  
  // Start recording functionality
  const startRecording = () => {
    setIsRecording(true);
    setRecordingComplete(false);
    setMetrics({
      accuracy: 0,
      rhythm: 0,
      intonation: 0,
      fluency: 0,
      overall: 0,
    });
    
    // Simulate recording for 3 seconds
    setTimeout(() => {
      setIsRecording(false);
      setTimeout(() => {
        // Generate random metrics for the demo
        const randomMetrics = {
          accuracy: Math.floor(Math.random() * 30) + 65, // 65-95%
          rhythm: Math.floor(Math.random() * 40) + 60, // 60-100%
          intonation: Math.floor(Math.random() * 35) + 60, // 60-95%
          fluency: Math.floor(Math.random() * 35) + 60, // 60-95%
          overall: 0,
        };
        
        // Calculate overall score
        randomMetrics.overall = Math.floor(
          (randomMetrics.accuracy + randomMetrics.rhythm + randomMetrics.intonation + randomMetrics.fluency) / 4
        );
        
        setMetrics(randomMetrics);
        setRecordingComplete(true);
      }, 500); // Simulate analysis delay
    }, 3000); // Simulate recording time
  };
  
  // Generate random waveform data for visualization
  useEffect(() => {
    if (isRecording) {
      const interval = setInterval(() => {
        setWaveformData(
          Array(40)
            .fill(0)
            .map(() => Math.random() * 50 + 5)
        );
      }, 100);
      return () => clearInterval(interval);
    } else {
      // Reset to flat line when not recording
      setWaveformData(Array(40).fill(5));
    }
  }, [isRecording]);
  
  // Play pronunciation audio
  const playPronunciation = () => {
    console.log(`Playing pronunciation for: ${currentWord}`);
    // In a real app, this would trigger text-to-speech
  };
  
  // Select a new random word
  const selectNewWord = () => {
    let newWord = currentWord;
    while (newWord === currentWord) {
      newWord = challengingWords[Math.floor(Math.random() * challengingWords.length)];
    }
    setCurrentWord(newWord);
    setRecordingComplete(false);
  };
  
  // Get color based on score
  const getScoreColor = (score: number) => {
    if (score >= 85) return "text-green-500";
    if (score >= 70) return "text-amber-500";
    return "text-red-500";
  };
  
  // Get progress color based on score
  const getProgressColor = (score: number) => {
    if (score >= 85) return "bg-green-500";
    if (score >= 70) return "bg-amber-500";
    return "bg-red-500";
  };

  return (
    <div className="glass-panel p-6 w-full max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">Pronunciation Analyzer</h2>
      
      {/* Word to pronounce */}
      <div className="mb-6 text-center">
        <p className="text-sm text-muted-foreground mb-1">Pronounce this word:</p>
        <div className="flex items-center justify-center gap-2">
          <h3 className="text-3xl font-bold hologram-text">{currentWord}</h3>
          <Button variant="ghost" size="sm" onClick={playPronunciation} title="Listen to correct pronunciation">
            <Volume2 className="h-4 w-4 text-varna-accent-cyan" />
          </Button>
        </div>
      </div>
      
      {/* Waveform visualization */}
      <div className="h-24 mb-6 bg-black/10 rounded-lg p-2 flex items-center justify-center">
        <div className="w-full h-full flex items-center">
          {waveformData.map((height, index) => (
            <div
              key={index}
              className="flex-1 mx-[1px]"
              style={{
                height: `${isRecording ? height : 5}%`,
                backgroundColor: isRecording ? "#9b87f5" : "#9b87f580",
                borderRadius: "2px",
                transition: "height 0.1s ease"
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Record button */}
      <div className="flex justify-center mb-8">
        <Button
          onClick={startRecording}
          disabled={isRecording}
          className={`rounded-full w-16 h-16 flex items-center justify-center ${
            isRecording
              ? "bg-red-500 hover:bg-red-600"
              : "bg-gradient-to-r from-varna-purple to-varna-accent-teal"
          }`}
        >
          <Mic className="h-6 w-6" />
        </Button>
      </div>
      
      {/* Metrics */}
      {recordingComplete && (
        <div className="animate-fade-in">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm">Accuracy</span>
              <span className={`text-sm font-medium ${getScoreColor(metrics.accuracy)}`}>{metrics.accuracy}%</span>
            </div>
            <Progress value={metrics.accuracy} className={`h-2 ${getProgressColor(metrics.accuracy)}`} />
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm">Rhythm</span>
              <span className={`text-sm font-medium ${getScoreColor(metrics.rhythm)}`}>{metrics.rhythm}%</span>
            </div>
            <Progress value={metrics.rhythm} className={`h-2 ${getProgressColor(metrics.rhythm)}`} />
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm">Intonation</span>
              <span className={`text-sm font-medium ${getScoreColor(metrics.intonation)}`}>{metrics.intonation}%</span>
            </div>
            <Progress value={metrics.intonation} className={`h-2 ${getProgressColor(metrics.intonation)}`} />
          </div>
          
          <div className="mb-8">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm">Fluency</span>
              <span className={`text-sm font-medium ${getScoreColor(metrics.fluency)}`}>{metrics.fluency}%</span>
            </div>
            <Progress value={metrics.fluency} className={`h-2 ${getProgressColor(metrics.fluency)}`} />
          </div>
          
          <div className="p-4 rounded-lg bg-gradient-to-r from-varna-purple/10 to-varna-accent-teal/10 border border-varna-accent-cyan/20 flex justify-between items-center">
            <div>
              <p className="text-sm font-medium">Overall Score</p>
              <p className={`text-2xl font-bold ${getScoreColor(metrics.overall)}`}>{metrics.overall}%</p>
            </div>
            <Button onClick={selectNewWord} className="flex items-center gap-1">
              <RefreshCw className="h-4 w-4" />
              Try Another Word
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PronunciationAnalyzer;
