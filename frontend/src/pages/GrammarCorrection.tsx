
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SpellCheck, Wand2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GrammarCorrection = () => {
  const [text, setText] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const { toast } = useToast();

  const handleCheck = () => {
    if (!text.trim()) {
      toast({
        title: "No text to check",
        description: "Please enter some text to check for grammar corrections.",
        variant: "destructive",
      });
      return;
    }

    setIsChecking(true);
    // TODO: Implement grammar checking logic
    setTimeout(() => {
      toast({
        title: "Coming Soon!",
        description: "Grammar checking functionality will be available soon.",
      });
      setIsChecking(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="hologram-text">AI Grammar Coach</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Perfect your writing with our advanced AI-powered grammar correction system.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
              <div className="mb-6">
                <Textarea 
                  placeholder="Enter your text here to check for grammar and style improvements..."
                  className="min-h-[200px] text-lg"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
              
              <div className="flex justify-end gap-4">
                <Button
                  variant="outline"
                  onClick={() => setText("")}
                  disabled={!text || isChecking}
                >
                  Clear
                </Button>
                <Button
                  onClick={handleCheck}
                  disabled={!text || isChecking}
                  className="bg-gradient-to-r from-varna-accent-teal to-varna-purple hover:opacity-90"
                >
                  {isChecking ? (
                    <>
                      <Wand2 className="mr-2 h-4 w-4 animate-spin" />
                      Checking...
                    </>
                  ) : (
                    <>
                      <SpellCheck className="mr-2 h-4 w-4" />
                      Check Grammar
                    </>
                  )}
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

export default GrammarCorrection;
