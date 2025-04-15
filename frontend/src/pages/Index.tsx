
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HolographicTutor from "@/components/HolographicTutor";
import RoleplayScenario from "@/components/RoleplayScenario";
import PronunciationAnalyzer from "@/components/PronunciationAnalyzer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, Mic, Watch, Brain, SparkleIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-varna-purple/5 to-varna-accent-cyan/5 -z-10"></div>
          <div className="container mx-auto text-center relative z-10">
            {/* Floating particles/objects in background */}
            <div className="absolute inset-0 -z-10">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute rounded-full bg-varna-purple/10 animate-pulse-glow"
                  style={{
                    width: `${Math.random() * 100 + 20}px`,
                    height: `${Math.random() * 100 + 20}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${Math.random() * 10 + 5}s`
                  }}
                ></div>
              ))}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 relative">
              <span className="hologram-text">Varnanetra</span>
              <br />
              <span className="text-2xl md:text-4xl">AI-Powered Language Learning</span>
              <SparkleIcon className="absolute -top-6 right-[calc(50%-80px)] text-varna-accent-cyan h-8 w-8 animate-pulse" />
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Revolutionary language learning with holographic tutors, AI roleplay, and real-time pronunciation analysis.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button className="bg-gradient-to-r from-varna-purple to-varna-accent-teal hover:opacity-90 transition-opacity text-white h-12 px-8">
                Get Started Free
              </Button>
              <Button variant="outline" className="border-varna-purple text-varna-purple hover:bg-varna-purple/5 h-12 px-8">
                Watch Demo
              </Button>
            </div>

            {/* Featured tech indicators */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-varna-accent-teal"></div>
                <span className="text-sm font-medium">Augmented Reality</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-varna-purple"></div>
                <span className="text-sm font-medium">AI Conversation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-varna-accent-cyan"></div>
                <span className="text-sm font-medium">Speech Analysis</span>
              </div>
            </div>
            
            {/* Main visual - holographic tutor preview */}
            <div className="relative max-w-4xl mx-auto">
              <div className="rounded-xl bg-gradient-to-r from-varna-purple/10 to-varna-accent-teal/10 p-8 border border-white/10 shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-radial from-varna-accent-cyan/20 via-transparent to-transparent opacity-70"></div>
                <HolographicTutor />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-gradient-to-r from-varna-purple to-varna-accent-teal p-4 rounded-lg shadow-lg transform rotate-3">
                <p className="text-white text-sm font-medium">Powered by advanced AI</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features section */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-varna-purple/5">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Revolutionary Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Varnanetra combines cutting-edge technology to create an immersive and personalized language learning experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-card p-6 rounded-xl border border-border relative overflow-hidden group hover:border-varna-purple/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-varna-purple/5 to-varna-accent-teal/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="mb-4 p-3 rounded-full bg-varna-purple/10 w-fit relative z-10">
                  <Globe className="h-6 w-6 text-varna-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2 relative z-10">Holographic AR Tutor</h3>
                <p className="text-muted-foreground mb-4 relative z-10">
                  Learn from lifelike AI tutors in augmented reality that correct your pronunciation in real-time.
                </p>
                <Button variant="link" className="text-varna-purple p-0 flex items-center gap-1 relative z-10">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-card p-6 rounded-xl border border-border relative overflow-hidden group hover:border-varna-purple/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-varna-purple/5 to-varna-accent-teal/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="mb-4 p-3 rounded-full bg-varna-accent-cyan/10 w-fit relative z-10">
                  <Users className="h-6 w-6 text-varna-accent-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-2 relative z-10">AI Roleplay Universe</h3>
                <p className="text-muted-foreground mb-4 relative z-10">
                  Practice real-world conversations with AI partners that adapt to your skill level.
                </p>
                <Button variant="link" className="text-varna-accent-cyan p-0 flex items-center gap-1 relative z-10">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-card p-6 rounded-xl border border-border relative overflow-hidden group hover:border-varna-purple/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-varna-purple/5 to-varna-accent-teal/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="mb-4 p-3 rounded-full bg-varna-accent-teal/10 w-fit relative z-10">
                  <Mic className="h-6 w-6 text-varna-accent-teal" />
                </div>
                <h3 className="text-xl font-bold mb-2 relative z-10">Advanced Pronunciation Analysis</h3>
                <p className="text-muted-foreground mb-4 relative z-10">
                  Receive detailed feedback on your pronunciation, intonation, and fluency.
                </p>
                <Button variant="link" className="text-varna-accent-teal p-0 flex items-center gap-1 relative z-10">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Feature 4 */}
              <div className="bg-card p-6 rounded-xl border border-border relative overflow-hidden group hover:border-varna-purple/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-varna-purple/5 to-varna-accent-teal/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="mb-4 p-3 rounded-full bg-varna-purple/10 w-fit relative z-10">
                  <Watch className="h-6 w-6 text-varna-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2 relative z-10">Wearable Integration</h3>
                <p className="text-muted-foreground mb-4 relative z-10">
                  Connect your smartwatch for biometric feedback to optimize your learning sessions.
                </p>
                <Button variant="link" className="text-varna-purple p-0 flex items-center gap-1 relative z-10">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Feature 5 */}
              <div className="bg-card p-6 rounded-xl border border-border relative overflow-hidden group hover:border-varna-purple/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-varna-purple/5 to-varna-accent-teal/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="mb-4 p-3 rounded-full bg-varna-accent-cyan/10 w-fit relative z-10">
                  <Brain className="h-6 w-6 text-varna-accent-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-2 relative z-10">Adaptive Learning</h3>
                <p className="text-muted-foreground mb-4 relative z-10">
                  AI that adjusts to your learning style, pace, and areas needing improvement.
                </p>
                <Button variant="link" className="text-varna-accent-cyan p-0 flex items-center gap-1 relative z-10">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Feature 6 - CTA */}
              <div className="bg-gradient-to-br from-varna-purple to-varna-accent-teal p-6 rounded-xl border border-transparent relative overflow-hidden text-white">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGMxMC4wMSAwIDE4LTkuOTQxIDE4LTIwLjk1MUwzNiAxOHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48Y2lyY2xlIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIGN4PSIxOCIgY3k9IjE4IiByPSIxOCIvPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48L2c+PC9zdmc+')] opacity-10"></div>
                <h3 className="text-xl font-bold mb-2 relative z-10">Ready to transform your language learning?</h3>
                <p className="text-white/80 mb-4 relative z-10">
                  Join thousands of learners already using Varnanetra's cutting-edge platform.
                </p>
                <Button variant="secondary" className="relative z-10 bg-white text-varna-purple hover:bg-white/90 border-none">
                  Start Learning Now
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Roleplay demo section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">AI-Powered Conversation Roleplay</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Practice real-world scenarios with our AI conversation partners that adapt to your language level.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto rounded-xl bg-gradient-to-r from-varna-purple/10 to-varna-accent-teal/10 p-6 border border-white/10">
              <RoleplayScenario />
            </div>
          </div>
        </section>
        
        {/* Pronunciation analysis demo section */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-varna-purple/5">
          <div className="container mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Advanced Pronunciation Coach</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get detailed feedback on your pronunciation with our AI-powered speech analysis.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <PronunciationAnalyzer />
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-varna-purple/20 to-varna-accent-teal/20 -z-10"></div>
          <div className="container mx-auto max-w-4xl">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGMxMC4wMSAwIDE4LTkuOTQxIDE4LTIwLjk1MUwzNiAxOHoiIGZpbGw9InJnYmEoMTU1LDEzNSwyNDUsMC4wNSkiLz48Y2lyY2xlIGZpbGw9InJnYmEoOCwyMjMsMjUzLDAuMDUpIiBjeD0iMTgiIGN5PSIxOCIgcj0iMTgiLz48cGF0aCBkPSJNMCAwaDYwdjYwSDB6Ii8+PC9nPjwvc3ZnPg==')] opacity-50"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 hologram-text">Begin Your Language Journey Today</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Transform the way you learn languages with cutting-edge AI technology, holographic tutors, and personalized feedback.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-gradient-to-r from-varna-purple to-varna-accent-teal hover:opacity-90 transition-opacity h-12 px-8 text-white">
                    Start Free Trial
                  </Button>
                  <Button variant="outline" className="border-varna-purple text-varna-purple hover:bg-varna-purple/5 h-12 px-8">
                    View Pricing
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
