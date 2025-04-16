import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Globe, Users, Mic, Brain, Sparkles, BookOpen, 
  Languages, Layers, Wand2, BarChart4, Trophy, Heart, SpellCheck 
} from "lucide-react";

const Features = () => {
  

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero section */}
        <section className="py-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-varna-purple/5 to-varna-accent-cyan/5 -z-10"></div>
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="hologram-text">Revolutionary Features</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Discover how Varnanetra is transforming language learning with cutting-edge technology.
            </p>
          </div>
        </section>
        
        {/* Main features section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            {/* Holographic AR Tutor */}
            <div className="mb-24">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                <div className="md:w-1/2">
                  <div className="bg-gradient-to-r from-varna-purple/20 to-varna-accent-cyan/20 p-1 rounded-lg">
                    <div className="bg-card rounded-lg p-8 border border-white/10">
                      <div className="h-64 flex items-center justify-center relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-40 h-40 rounded-full bg-gradient-radial from-varna-accent-cyan/30 to-transparent animate-pulse"></div>
                        </div>
                        <div className="relative z-10">
                          <div className="w-40 h-40 rounded-full bg-gradient-to-r from-varna-purple/30 to-varna-accent-teal/30 flex items-center justify-center border border-white/30 shadow-holo animate-float">
                            <Globe className="h-20 w-20 text-white/80" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-8 w-1 bg-varna-purple rounded-full"></div>
                    <h2 className="text-3xl font-bold">Holographic AR Tutor</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Experience language learning like never before with our holographic AR tutors. These AI-powered virtual instructors appear in your environment through augmented reality, providing personalized coaching and correcting your pronunciation in real-time.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-varna-purple/10 p-1">
                        <Sparkles className="h-4 w-4 text-varna-purple" />
                      </div>
                      <span>Life-sized holographic tutors that respond to your speech</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-varna-purple/10 p-1">
                        <Sparkles className="h-4 w-4 text-varna-purple" />
                      </div>
                      <span>Real-time pronunciation correction and feedback</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-varna-purple/10 p-1">
                        <Sparkles className="h-4 w-4 text-varna-purple" />
                      </div>
                      <span>Natural gestures and cultural expressions</span>
                    </li>
                  </ul>
                  <Button className="bg-gradient-to-r from-varna-purple to-varna-accent-teal hover:opacity-90 transition-opacity" asChild>
                    <Link to="/roleplay">See HoloLingua in Action</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* AI Roleplay Universe */}
            <div className="mb-24">
              <div className="flex flex-col-reverse md:flex-row items-center gap-8 mb-12">
                <div className="md:w-1/2">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-8 w-1 bg-varna-accent-cyan rounded-full"></div>
                    <h2 className="text-3xl font-bold">AI Roleplay Universe</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Practice languages in context with our AI Roleplay Universe. Create custom AI avatars that act as language partners in realistic scenarios, from ordering at a restaurant to negotiating a business deal.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-varna-accent-cyan/10 p-1">
                        <Sparkles className="h-4 w-4 text-varna-accent-cyan" />
                      </div>
                      <span>Customizable AI language partners that remember your interactions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-varna-accent-cyan/10 p-1">
                        <Sparkles className="h-4 w-4 text-varna-accent-cyan" />
                      </div>
                      <span>Scenario-based learning for real-world language use</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-varna-accent-cyan/10 p-1">
                        <Sparkles className="h-4 w-4 text-varna-accent-cyan" />
                      </div>
                      <span>Adaptive difficulty based on your skill level</span>
                    </li>
                  </ul>
                  <Button className="bg-gradient-to-r from-varna-accent-cyan to-varna-accent-teal hover:opacity-90 transition-opacity" asChild>
                    <Link to="/roleplay">Explore Roleplay Scenarios</Link>
                  </Button>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-gradient-to-r from-varna-accent-cyan/20 to-varna-accent-teal/20 p-1 rounded-lg">
                    <div className="bg-card rounded-lg p-8 border border-white/10">
                      <div className="h-64 flex items-center justify-center relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-40 h-40 rounded-full bg-gradient-radial from-varna-accent-cyan/30 to-transparent animate-pulse"></div>
                        </div>
                        <div className="relative z-10">
                          <div className="w-40 h-40 rounded-full bg-gradient-to-r from-varna-accent-cyan/30 to-varna-accent-teal/30 flex items-center justify-center border border-white/30 shadow-holo animate-float">
                            <Users className="h-20 w-20 text-white/80" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pronunciation Analysis */}
            <div className="mb-24">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                <div className="md:w-1/2">
                  <div className="bg-gradient-to-r from-varna-accent-teal/20 to-varna-purple/20 p-1 rounded-lg">
                    <div className="bg-card rounded-lg p-8 border border-white/10">
                      <div className="h-64 flex items-center justify-center relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-40 h-40 rounded-full bg-gradient-radial from-varna-accent-teal/30 to-transparent animate-pulse"></div>
                        </div>
                        <div className="relative z-10">
                          <div className="w-40 h-40 rounded-full bg-gradient-to-r from-varna-accent-teal/30 to-varna-purple/30 flex items-center justify-center border border-white/30 shadow-holo animate-float">
                            <Mic className="h-20 w-20 text-white/80" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-8 w-1 bg-varna-accent-teal rounded-full"></div>
                    <h2 className="text-3xl font-bold">Pronunciation Analysis</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Master perfect pronunciation with our AI-driven speech analysis. Our technology analyzes your speech patterns, comparing them to native speakers and providing detailed feedback on improving your accent and fluency.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-varna-accent-teal/10 p-1">
                        <Sparkles className="h-4 w-4 text-varna-accent-teal" />
                      </div>
                      <span>Detailed analysis of pronunciation, rhythm, and intonation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-varna-accent-teal/10 p-1">
                        <Sparkles className="h-4 w-4 text-varna-accent-teal" />
                      </div>
                      <span>Visual waveform comparisons with native speakers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-varna-accent-teal/10 p-1">
                        <Sparkles className="h-4 w-4 text-varna-accent-teal" />
                      </div>
                      <span>Targeted exercises for problematic sounds</span>
                    </li>
                  </ul>
                  <Button className="bg-gradient-to-r from-varna-accent-teal to-varna-purple hover:opacity-90 transition-opacity" asChild>
                    <Link to="/pronunciation">Try Pronunciation Coach</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Grammar Correction Feature */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="md:w-1/2">
              <div className="bg-gradient-to-r from-varna-accent-teal/20 to-varna-purple/20 p-1 rounded-lg">
                <div className="bg-card rounded-lg p-8 border border-white/10">
                  <div className="h-64 flex items-center justify-center relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-40 h-40 rounded-full bg-gradient-radial from-varna-accent-teal/30 to-transparent animate-pulse"></div>
                    </div>
                    <div className="relative z-10">
                      <div className="w-40 h-40 rounded-full bg-gradient-to-r from-varna-accent-teal/30 to-varna-purple/30 flex items-center justify-center border border-white/30 shadow-holo animate-float">
                        <SpellCheck className="h-20 w-20 text-white/80" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-1 bg-varna-accent-teal rounded-full"></div>
                <h2 className="text-3xl font-bold">AI Grammar Correction</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Elevate your language skills with our advanced AI-powered grammar correction system. Get instant, context-aware feedback that helps you understand and improve your writing.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-varna-accent-teal/10 p-1">
                    <Sparkles className="h-4 w-4 text-varna-accent-teal" />
                  </div>
                  <span>Real-time grammar and style suggestions</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-varna-accent-teal/10 p-1">
                    <Sparkles className="h-4 w-4 text-varna-accent-teal" />
                  </div>
                  <span>Contextual language improvement tips</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-varna-accent-teal/10 p-1">
                    <Sparkles className="h-4 w-4 text-varna-accent-teal" />
                  </div>
                  <span>Multi-language grammar support</span>
                </li>
              </ul>
              <Button className="bg-gradient-to-r from-varna-accent-teal to-varna-purple hover:opacity-90 transition-opacity" asChild>
                <Link to="/grammar-correction">Try Grammar Coach</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Additional features grid */}
        <section className="py-16 px-4 bg-gradient-to-b from-background to-varna-purple/5">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-10 text-center">More Powerful Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="bg-card p-6 rounded-xl border border-border hover:border-varna-purple/30 transition-colors">
                <div className="mb-4 p-3 rounded-full bg-varna-purple/10 w-fit">
                  <BookOpen className="h-6 w-6 text-varna-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2">Adaptive Curriculum</h3>
                <p className="text-muted-foreground">
                  AI-generated learning path that adapts to your goals, learning style, and progress.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-card p-6 rounded-xl border border-border hover:border-varna-purple/30 transition-colors">
                <div className="mb-4 p-3 rounded-full bg-varna-accent-cyan/10 w-fit">
                  <Languages className="h-6 w-6 text-varna-accent-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-2">50+ Languages</h3>
                <p className="text-muted-foreground">
                  Learn major languages and rare dialects with the same advanced technology.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-card p-6 rounded-xl border border-border hover:border-varna-purple/30 transition-colors">
                <div className="mb-4 p-3 rounded-full bg-varna-accent-teal/10 w-fit">
                  <Layers className="h-6 w-6 text-varna-accent-teal" />
                </div>
                <h3 className="text-xl font-bold mb-2">Multi-Sensory Learning</h3>
                <p className="text-muted-foreground">
                  Engage all your senses with AR visual cues, audio guidance, and haptic feedback.
                </p>
              </div>
              
              {/* Feature 4 */}
              <div className="bg-card p-6 rounded-xl border border-border hover:border-varna-purple/30 transition-colors">
                <div className="mb-4 p-3 rounded-full bg-varna-purple/10 w-fit">
                  <Wand2 className="h-6 w-6 text-varna-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2">Cultural Context</h3>
                <p className="text-muted-foreground">
                  Learn language within cultural contexts, idioms, and region-specific expressions.
                </p>
              </div>
              
              {/* Feature 5 */}
              <div className="bg-card p-6 rounded-xl border border-border hover:border-varna-purple/30 transition-colors">
                <div className="mb-4 p-3 rounded-full bg-varna-accent-cyan/10 w-fit">
                  <BarChart4 className="h-6 w-6 text-varna-accent-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-2">Progress Analytics</h3>
                <p className="text-muted-foreground">
                  Detailed insights into your learning patterns, strengths, and areas for improvement.
                </p>
              </div>
              
              {/* Feature 6 */}
              <div className="bg-card p-6 rounded-xl border border-border hover:border-varna-purple/30 transition-colors">
                <div className="mb-4 p-3 rounded-full bg-varna-accent-teal/10 w-fit">
                  <Brain className="h-6 w-6 text-varna-accent-teal" />
                </div>
                <h3 className="text-xl font-bold mb-2">Neuro-Optimized Learning</h3>
                <p className="text-muted-foreground">
                  Scientifically designed learning sequences that work with your brain's natural learning processes.
                </p>
              </div>
              
              {/* Feature 7 */}
              <div className="bg-card p-6 rounded-xl border border-border hover:border-varna-purple/30 transition-colors">
                <div className="mb-4 p-3 rounded-full bg-varna-purple/10 w-fit">
                  <Trophy className="h-6 w-6 text-varna-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2">Gamified Challenges</h3>
                <p className="text-muted-foreground">
                  Fun, competitive elements that keep you motivated and engaged in your learning journey.
                </p>
              </div>
              
              {/* Feature 8 - CTA */}
              <div className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-varna-purple to-varna-accent-teal p-6 rounded-xl border border-transparent relative overflow-hidden text-white">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGMxMC4wMSAwIDE4LTkuOTQxIDE4LTIwLjk1MUwzNiAxOHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48Y2lyY2xlIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIGN4PSIxOCIgY3k9IjE4IiByPSIxOCIvPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48L2c+PC9zdmc+')] opacity-10"></div>
                <div className="mb-4 p-3 rounded-full bg-white/10 w-fit">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Ready to transform your language learning?</h3>
                <p className="text-white/80 mb-4">
                  Experience all these features and more with your free trial.
                </p>
                <Button variant="secondary" className="bg-white text-varna-purple hover:bg-white/90 border-none">
                  Start Free Trial
                </Button>
              </div>
              
              {/* Feature 9 */}
              <div className="lg:col-span-1 bg-card p-6 rounded-xl border border-border hover:border-varna-purple/30 transition-colors">
                <div className="mb-4 p-3 rounded-full bg-varna-accent-teal/10 w-fit">
                  <Globe className="h-6 w-6 text-varna-accent-teal" />
                </div>
                <h3 className="text-xl font-bold mb-2">Offline Learning</h3>
                <p className="text-muted-foreground">
                  Continue your language practice even without an internet connection.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-varna-purple to-varna-accent-teal rounded-2xl p-8 md:p-12 shadow-xl text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGMxMC4wMSAwIDE4LTkuOTQxIDE4LTIwLjk1MUwzNiAxOHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48Y2lyY2xlIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIGN4PSIxOCIgY3k9IjE4IiByPSIxOCIvPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48L2c+PC9zdmc+')] opacity-10"></div>
              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover the Future of Language Learning</h2>
                <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                  Join thousands of learners who are achieving fluency faster with Varnanetra's revolutionary approach.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" variant="secondary" className="bg-white text-varna-purple hover:bg-white/90 border-none" asChild>
                    <Link to="/get-started">Start 7-Day Free Trial</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Schedule Demo
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

export default Features;
