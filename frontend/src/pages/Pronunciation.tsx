
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PronunciationAnalyzer from "@/components/PronunciationAnalyzer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mic, Wand2, BarChart4, Globe, VolumeX, Volume2 } from "lucide-react";

const Pronunciation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero section */}
        <section className="py-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-varna-purple/5 to-varna-accent-cyan/5 -z-10"></div>
          <div className="container mx-auto text-center">
            <div className="mb-4 p-3 rounded-full bg-varna-accent-teal/10 w-fit mx-auto">
              <Mic className="h-6 w-6 text-varna-accent-teal" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="hologram-text">Pronunciation Analysis</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Master perfect pronunciation with AI-driven analysis and personalized feedback.
            </p>
          </div>
        </section>
        
        {/* Pronunciation comparison visualization */}
        <section className="py-8 px-4 bg-gradient-to-b from-background to-varna-purple/5">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-card rounded-xl border border-border p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Advanced Waveform Analysis</h2>
                  <p className="text-muted-foreground mb-6">
                    Our AI analyzes your speech patterns at a granular level, comparing them to native speakers to identify areas for improvement. See the difference in waveforms and get personalized guidance.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4 text-varna-accent-teal" />
                          <span className="text-sm font-medium">Native Speaker</span>
                        </div>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Volume2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="h-16 bg-black/5 rounded-lg p-2 flex items-center">
                        {Array(40).fill(0).map((_, i) => {
                          const height = Math.sin(i * 0.3) * 30 + 40;
                          return (
                            <div
                              key={`native-${i}`}
                              className="flex-1 mx-[1px] bg-varna-accent-teal"
                              style={{ height: `${height}%`, borderRadius: "2px" }}
                            ></div>
                          )
                        })}
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Mic className="h-4 w-4 text-varna-purple" />
                          <span className="text-sm font-medium">Your Pronunciation</span>
                        </div>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Volume2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="h-16 bg-black/5 rounded-lg p-2 flex items-center">
                        {Array(40).fill(0).map((_, i) => {
                          const native = Math.sin(i * 0.3) * 30 + 40;
                          const offset = Math.random() * 25 - 10;
                          const height = Math.max(10, Math.min(90, native + offset));
                          return (
                            <div
                              key={`user-${i}`}
                              className="flex-1 mx-[1px] bg-varna-purple"
                              style={{ height: `${height}%`, borderRadius: "2px" }}
                            ></div>
                          )
                        })}
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-varna-purple/5 border border-varna-purple/20">
                      <h4 className="font-semibold mb-2">Analysis</h4>
                      <p className="text-sm text-muted-foreground">
                        Your pronunciation is close, but you need to work on the middle syllables and intonation pattern. Try slowing down and emphasizing the second syllable more clearly.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">Common Challenges</h2>
                  <div className="space-y-4">
                    <Card className="p-4 border border-border bg-card/50">
                      <div className="flex justify-between">
                        <div className="flex items-center gap-2 mb-2">
                          <VolumeX className="h-4 w-4 text-red-500" />
                          <h4 className="font-medium">Silent Letters</h4>
                        </div>
                        <span className="text-xs bg-red-100 text-red-500 dark:bg-red-900/30 dark:text-red-300 px-2 rounded-full">Challenging</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Many languages have silent letters that you shouldn't pronounce. Our system helps you identify them.
                      </p>
                    </Card>
                    
                    <Card className="p-4 border border-border bg-card/50">
                      <div className="flex justify-between">
                        <div className="flex items-center gap-2 mb-2">
                          <Wand2 className="h-4 w-4 text-amber-500" />
                          <h4 className="font-medium">Intonation Patterns</h4>
                        </div>
                        <span className="text-xs bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-300 px-2 rounded-full">Moderate</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        The rise and fall of your voice can change meaning. We analyze your pitch patterns to help you sound more natural.
                      </p>
                    </Card>
                    
                    <Card className="p-4 border border-border bg-card/50">
                      <div className="flex justify-between">
                        <div className="flex items-center gap-2 mb-2">
                          <BarChart4 className="h-4 w-4 text-green-500" />
                          <h4 className="font-medium">Rhythm & Stress</h4>
                        </div>
                        <span className="text-xs bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-300 px-2 rounded-full">Progressing</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Languages have natural rhythms. Our AI helps you match the timing and stress patterns of native speakers.
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
              
              {/* Pronunciation practice */}
              <div className="mt-12 max-w-4xl mx-auto">
                <h3 className="text-xl font-bold mb-6 text-center">Try Our Pronunciation Analyzer</h3>
                <PronunciationAnalyzer />
              </div>
            </div>
          </div>
        </section>
        
        {/* How it works */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-10 text-center">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-varna-purple/10 flex items-center justify-center mb-4">
                  <Mic className="h-8 w-8 text-varna-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2">Record Your Speech</h3>
                <p className="text-muted-foreground">
                  Practice pronouncing words or phrases by recording your speech through our app.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-varna-accent-cyan/10 flex items-center justify-center mb-4">
                  <Wand2 className="h-8 w-8 text-varna-accent-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI Analysis</h3>
                <p className="text-muted-foreground">
                  Our advanced AI analyzes your pronunciation, accent, rhythm, and intonation patterns.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-varna-accent-teal/10 flex items-center justify-center mb-4">
                  <BarChart4 className="h-8 w-8 text-varna-accent-teal" />
                </div>
                <h3 className="text-xl font-bold mb-2">Get Detailed Feedback</h3>
                <p className="text-muted-foreground">
                  Receive personalized feedback and specific exercises to improve your pronunciation.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits section */}
        <section className="py-16 px-4 bg-gradient-to-b from-background to-varna-purple/5">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-10 text-center">Benefits of Pronunciation Analysis</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-card p-6 border border-border">
                <h3 className="text-xl font-bold mb-4 hologram-text">Sound Like a Native Speaker</h3>
                <p className="text-muted-foreground mb-4">
                  Master authentic pronunciation, rhythm and intonation patterns to sound more natural when you speak.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-varna-purple/10 p-1 mt-1">
                      <Wand2 className="h-3 w-3 text-varna-purple" />
                    </div>
                    <span className="text-sm">Reduce your foreign accent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-varna-purple/10 p-1 mt-1">
                      <Wand2 className="h-3 w-3 text-varna-purple" />
                    </div>
                    <span className="text-sm">Develop natural speech patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-varna-purple/10 p-1 mt-1">
                      <Wand2 className="h-3 w-3 text-varna-purple" />
                    </div>
                    <span className="text-sm">Learn regional variations and accents</span>
                  </li>
                </ul>
              </Card>
              
              <Card className="bg-card p-6 border border-border">
                <h3 className="text-xl font-bold mb-4 hologram-text">Boost Your Confidence</h3>
                <p className="text-muted-foreground mb-4">
                  Feel more confident in conversations when you know you're pronouncing words correctly.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-varna-accent-cyan/10 p-1 mt-1">
                      <Wand2 className="h-3 w-3 text-varna-accent-cyan" />
                    </div>
                    <span className="text-sm">Speak more freely without hesitation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-varna-accent-cyan/10 p-1 mt-1">
                      <Wand2 className="h-3 w-3 text-varna-accent-cyan" />
                    </div>
                    <span className="text-sm">Be understood clearly the first time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-varna-accent-cyan/10 p-1 mt-1">
                      <Wand2 className="h-3 w-3 text-varna-accent-cyan" />
                    </div>
                    <span className="text-sm">Reduce communication anxiety</span>
                  </li>
                </ul>
              </Card>
              
              <Card className="bg-card p-6 border border-border">
                <h3 className="text-xl font-bold mb-4 hologram-text">Personalized Learning</h3>
                <p className="text-muted-foreground mb-4">
                  Get customized exercises that target your specific pronunciation challenges.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-varna-accent-teal/10 p-1 mt-1">
                      <Wand2 className="h-3 w-3 text-varna-accent-teal" />
                    </div>
                    <span className="text-sm">Focus on sounds difficult for your native language</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-varna-accent-teal/10 p-1 mt-1">
                      <Wand2 className="h-3 w-3 text-varna-accent-teal" />
                    </div>
                    <span className="text-sm">Track your improvement over time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-varna-accent-teal/10 p-1 mt-1">
                      <Wand2 className="h-3 w-3 text-varna-accent-teal" />
                    </div>
                    <span className="text-sm">Adjust difficulty based on your progress</span>
                  </li>
                </ul>
              </Card>
              
              <Card className="bg-card p-6 border border-border">
                <h3 className="text-xl font-bold mb-4 hologram-text">Enhanced Communication</h3>
                <p className="text-muted-foreground mb-4">
                  Improve overall communication by mastering pronunciation nuances that affect meaning.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-varna-purple/10 p-1 mt-1">
                      <Wand2 className="h-3 w-3 text-varna-purple" />
                    </div>
                    <span className="text-sm">Avoid misunderstandings due to mispronunciation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-varna-purple/10 p-1 mt-1">
                      <Wand2 className="h-3 w-3 text-varna-purple" />
                    </div>
                    <span className="text-sm">Master tone differences that change meaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-varna-purple/10 p-1 mt-1">
                      <Wand2 className="h-3 w-3 text-varna-purple" />
                    </div>
                    <span className="text-sm">Learn culturally appropriate speaking patterns</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-varna-purple to-varna-accent-teal rounded-2xl p-8 md:p-12 shadow-xl text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGMxMC4wMSAwIDE4LTkuOTQxIDE4LTIwLjk1MUwzNiAxOHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48Y2lyY2xlIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIGN4PSIxOCIgY3k9IjE4IiByPSIxOCIvPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48L2c+PC9zdmc+')] opacity-10"></div>
              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Perfect Your Pronunciation Today</h2>
                <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                  Start using our advanced AI pronunciation analysis tools and speak with confidence in any language.
                </p>
                
                <Button size="lg" variant="secondary" className="bg-white text-varna-purple hover:bg-white/90 border-none">
                  Start Free Analysis
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pronunciation;
