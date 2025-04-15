import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoleplayScenario from "@/components/RoleplayScenario";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Plus, MessageCircle, Globe, BookOpen, Languages } from "lucide-react";

interface Scenario {
  id: string;
  title: { en: string; mr: string };
  description: { en: string; mr: string };
  level: string;
}

const Roleplay = () => {
  const languages = [
    { id: "en", name: "English", scenarios: 24, flag: "🇬🇧" },
    { id: "mr", name: "Marathi", scenarios: 24, flag: "🇮🇳" },
  ];

  const scenarios: Scenario[] = [
    {
      id: "hotel-check-in",
      title: { en: "Hotel Check-In", mr: "हॉटेल चेक-इन" },
      description: {
        en: "Practice checking into a hotel and asking about amenities.",
        mr: "हॉटेलमध्ये चेक-इन करण्याचा आणि सुविधांबद्दल विचारण्याचा सराव करा.",
      },
      level: "Intermediate",
    },
    {
      id: "business-meeting",
      title: { en: "Business Meeting", mr: "व्यवसाय बैठक" },
      description: {
        en: "Discuss project proposals and negotiate terms in English or Marathi.",
        mr: "इंग्रजी किंवा मराठीत प्रकल्प प्रस्तावे आणि अटींची चर्चा करा.",
      },
      level: "Advanced",
    },
    {
      id: "restaurant-order",
      title: { en: "Restaurant Order", mr: "रेस्टॉरंट ऑर्डर" },
      description: {
        en: "Order food, ask about ingredients, and make special requests.",
        mr: "जेवण ऑर्डर करा, साहित्याबद्दल विचार आणि खास विनंत्या करा.",
      },
      level: "Beginner",
    },
    {
      id: "cafe-conversation",
      title: { en: "Cafe Conversation", mr: "कॅफे संभाषण" },
      description: {
        en: "Chat with a barista and order a coffee in English or Marathi.",
        mr: "इंग्रजी किंवा मराठीत बारीस्टासोबत गप्पा मारून कॉफी ऑर्डर करा.",
      },
      level: "Beginner",
    },
    {
      id: "airport-navigation",
      title: { en: "Airport Navigation", mr: "विमानतळ नेव्हिगेशन" },
      description: {
        en: "Ask for directions and check flight details in English or Marathi.",
        mr: "इंग्रजी किंवा मराठीत दिशा विचार आणि उड्डाण तपशील तपासा.",
      },
      level: "Intermediate",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero section */}
        <section className="py-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-varna-purple/5 to-varna-accent-cyan/5 -z-10"></div>
          <div className="container mx-auto text-center">
            <div className="mb-4 p-3 rounded-full bg-varna-accent-cyan/10 w-fit mx-auto">
              <Users className="h-6 w-6 text-varna-accent-cyan" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="hologram-text">AI Roleplay Universe</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Practice real-world conversations in English and Marathi with our AI-powered roleplay scenarios.
            </p>
          </div>
        </section>
        
        {/* Available languages */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold mb-6">Select a Language</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {languages.map((lang) => (
                <Card key={lang.id} className="bg-card p-4 rounded-xl border border-border hover:border-varna-purple/30 hover:shadow-md transition-all cursor-pointer">
                  <div className="flex flex-col items-center text-center">
                    <span className="text-4xl mb-2">{lang.flag}</span>
                    <h3 className="font-medium">{lang.name}</h3>
                    <p className="text-xs text-muted-foreground">{lang.scenarios} scenarios</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured scenarios */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Featured Scenarios</h2>
              <Button variant="outline" className="flex items-center gap-1">
                <Plus className="h-4 w-4" />
                Create Custom Scenario
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {scenarios.map((scenario) => (
                <Card
                  key={scenario.id}
                  className="bg-card border border-border overflow-hidden hover:border-varna-purple/30 hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="h-32 bg-gradient-to-r from-varna-purple/20 to-varna-accent-cyan/20 flex items-center justify-center">
                    <div className="p-4 rounded-full bg-white/10 backdrop-blur-lg border border-white/30">
                      <MessageCircle className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold">
                        {scenario.title.en} / {scenario.title.mr}
                      </h3>
                      <span className="text-xs bg-varna-purple/10 text-varna-purple px-2 py-1 rounded-full">
                        English & Marathi
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {scenario.description.en} / {scenario.description.mr}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">{scenario.level}</span>
                      <Button variant="ghost" size="sm" className="text-varna-purple p-0 flex items-center gap-1 h-auto">
                        Start
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Active roleplay section */}
        <section className="py-12 px-4 bg-gradient-to-b from-background to-varna-purple/5">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-card rounded-xl border border-border p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">Active Roleplay</h2>
              
              <div className="max-w-4xl mx-auto">
                <RoleplayScenario /> {/* Removed props since RoleplayScenario now handles its own state */}
              </div>
            </div>
            
            {/* Roleplay benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="bg-card p-6 border border-border">
                <div className="mb-4 p-3 rounded-full bg-varna-purple/10 w-fit">
                  <Globe className="h-6 w-6 text-varna-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2">Authentic Practice</h3>
                <p className="text-muted-foreground">
                  Practice with AI characters that respond naturally in English and Marathi, adapting to your language level.
                </p>
              </Card>
              
              <Card className="bg-card p-6 border border-border">
                <div className="mb-4 p-3 rounded-full bg-varna-accent-cyan/10 w-fit">
                  <BookOpen className="h-6 w-6 text-varna-accent-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-2">Cultural Context</h3>
                <p className="text-muted-foreground">
                  Learn appropriate English and Marathi cultural expressions and context-specific vocabulary.
                </p>
              </Card>
              
              <Card className="bg-card p-6 border border-border">
                <div className="mb-4 p-3 rounded-full bg-varna-accent-teal/10 w-fit">
                  <Users className="h-6 w-6 text-varna-accent-teal" />
                </div>
                <h3 className="text-xl font-bold mb-2">Memory & Progress</h3>
                <p className="text-muted-foreground">
                  Our AI remembers your English and Marathi conversations and adapts future scenarios to help you improve.
                </p>
              </Card>
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-varna-purple to-varna-accent-teal rounded-2xl p-8 md:p-12 shadow-xl text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1lbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGMxMC4wMSAwIDE4LTkuOTQxIDE4LTIwLjk1MUwzNiAxOHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48Y2lyY2xlIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIGN4PSIxOCIgY3k9IjE4IiByPSIxOCIvPjxwYXRoIGQ9Ik0wIDhoNjB2NTJIMHoiLz48L2c+PC9zdmc+')] opacity-10"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Unlock All Roleplay Scenarios</h2>
                <p className="text-lg text-white/80 mb-8 max-w-2xl">
                  Get unlimited access to over 100+ roleplay scenarios in English and Marathi. Perfect your conversational skills in any situation.
                </p>
                
                <Button size="lg" variant="secondary" className="bg-white text-varna-purple hover:bg-white/90 border-none">
                  Get Premium Access
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

export default Roleplay;