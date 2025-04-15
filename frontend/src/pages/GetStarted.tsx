
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Globe, BookOpen, Users } from "lucide-react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-12 md:py-20 px-4">
          <div className="max-w-[980px] mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Started with Varnanetra
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              Begin your language learning journey with our cutting-edge AI-powered platform.
            </p>
            
            <div className="glass-panel p-8 md:p-12 mb-12 text-left max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6">Choose Your Plan</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Free Plan */}
                <div className="border border-white/10 rounded-xl p-6 bg-card/50 hover:border-white/20 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-medium">Free</h3>
                      <p className="text-muted-foreground">Get started for free</p>
                    </div>
                    <span className="text-2xl font-bold">$0</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                      <span>Basic AI conversation practice</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                      <span>Limited pronunciation feedback</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                      <span>5 AI roleplay scenarios</span>
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline">
                    Start Free
                  </Button>
                </div>
                
                {/* Premium Plan */}
                <div className="border border-white/10 rounded-xl p-6 bg-gradient-to-br from-varna-purple/20 to-varna-accent-teal/20 hover:border-white/20 transition-all relative">
                  <div className="absolute top-3 right-3 bg-varna-purple text-white text-xs px-2 py-1 rounded-full">
                    Popular
                  </div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-medium">Premium</h3>
                      <p className="text-muted-foreground">Full access to all features</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold">$19.99</span>
                      <p className="text-sm text-muted-foreground">per month</p>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                      <span>Unlimited AI conversations</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                      <span>Advanced pronunciation analysis</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                      <span>All AI roleplay scenarios</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                      <span>Holographic AR tutor</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                      <span>Progress tracking & analytics</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-varna-purple to-varna-accent-teal hover:opacity-90 transition-opacity text-white">
                    Subscribe Now
                  </Button>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground text-center">
                All plans include a 7-day money-back guarantee. No credit card required for free trial.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mb-8">How It Works</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-varna-purple/20 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-varna-purple" />
                </div>
                <h3 className="text-xl font-medium mb-2">1. Choose a Language</h3>
                <p className="text-muted-foreground text-center">
                  Select from over 25 languages to start your learning journey.
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-varna-accent-cyan/20 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-varna-accent-cyan" />
                </div>
                <h3 className="text-xl font-medium mb-2">2. Set Your Goals</h3>
                <p className="text-muted-foreground text-center">
                  Define your learning objectives and preferred pace.
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-varna-accent-teal/20 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-varna-accent-teal" />
                </div>
                <h3 className="text-xl font-medium mb-2">3. Start Practice</h3>
                <p className="text-muted-foreground text-center">
                  Jump into conversations with AI tutors and track your progress.
                </p>
              </div>
            </div>
            
            <Link to="/features" className="apple-button inline-flex items-center gap-2">
              Explore Features
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GetStarted;
