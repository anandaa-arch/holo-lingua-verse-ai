import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, RotateCw, User, Bot, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

interface ScenarioOption {
  id: string;
  name: string;
  languages: string[];
  level: string;
}

const scenarioOptions: ScenarioOption[] = [
  { id: "cafe", name: "Café Conversation", languages: ["en", "mr"], level: "Beginner" },
  { id: "hotel", name: "Hotel Check-In", languages: ["en", "mr"], level: "Intermediate" },
  { id: "business", name: "Business Meeting", languages: ["en", "mr"], level: "Advanced" },
  { id: "restaurant", name: "Restaurant Order", languages: ["en", "mr"], level: "Beginner" },
  { id: "airport", name: "Airport Navigation", languages: ["en", "mr"], level: "Intermediate" },
];

const RoleplayScenario = () => {
  const [activeScenario, setActiveScenario] = useState<ScenarioOption>(scenarioOptions[0]); // Default to Café Conversation
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! Welcome to Café Lumière. What would you like to order today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [userInput, setUserInput] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    const newUserMessage: Message = {
      id: messages.length + 1,
      text: userInput,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages([...messages, newUserMessage]);
    setUserInput("");
    setIsTyping(true);

    setTimeout(() => {
      let aiResponse = "";

      const inputLower = userInput.toLowerCase();

      if (selectedLanguage === "en") {
        // Café Conversation Etiquette
        if (activeScenario.id === "cafe") {
          if (inputLower.includes("hello") || inputLower.includes("hi")) {
            aiResponse = "Hello! Welcome to Café Lumière. How can I assist you today?";
          } else if (inputLower.includes("order") || inputLower.includes("menu")) {
            aiResponse = "Certainly! Here’s our menu. Would you like coffee, tea, or a pastry?";
          } else if (inputLower.includes("coffee") || inputLower.includes("tea")) {
            aiResponse = "Great choice! Would you like it with milk or sugar?";
          } else if (inputLower.includes("pastry") || inputLower.includes("cake")) {
            aiResponse = "Excellent! We have croissants and muffins. Which would you prefer?";
          } else if (inputLower.includes("price") || inputLower.includes("cost")) {
            aiResponse = "A coffee is $3, tea is $2.50, and pastries start at $4. Would you like to order?";
          } else if (inputLower.includes("thank") || inputLower.includes("thanks")) {
            aiResponse = "My pleasure! Enjoy your time at Café Lumière!";
          } else {
            aiResponse = "Sorry, I didn’t catch that. Could you please repeat or clarify your request?";
          }
        }

        // Hotel Check-In Etiquette
        else if (activeScenario.id === "hotel") {
          if (inputLower.includes("hello") || inputLower.includes("hi")) {
            aiResponse = "Hello! Welcome to Hotel Estrella. How may I assist you with your check-in?";
          } else if (inputLower.includes("reservation") || inputLower.includes("book")) {
            aiResponse = "Thank you! Please provide your name or reservation number, and I’ll check for you.";
          } else if (inputLower.includes("room") || inputLower.includes("check")) {
            aiResponse = "Your room is 304 on the third floor. Here’s your key. Enjoy your stay!";
          } else if (inputLower.includes("wifi") || inputLower.includes("internet")) {
            aiResponse = "The WiFi password is 'EstrellaGuest2023'. Let me know if you need help connecting.";
          } else if (inputLower.includes("breakfast") || inputLower.includes("meal")) {
            aiResponse = "Breakfast is served from 7:00 to 10:00 AM in the dining area. Enjoy!";
          } else if (inputLower.includes("thank") || inputLower.includes("thanks")) {
            aiResponse = "You’re welcome! Have a pleasant stay at Hotel Estrella.";
          } else {
            aiResponse = "I’m sorry, I didn’t understand. Could you please rephrase your request?";
          }
        }

        // Business Meeting Etiquette
        else if (activeScenario.id === "business") {
          if (inputLower.includes("hello") || inputLower.includes("hi")) {
            aiResponse = "Good day! Welcome to the business meeting. Shall we begin?";
          } else if (inputLower.includes("agenda") || inputLower.includes("start")) {
            aiResponse = "Certainly! The agenda includes project updates and discussions. Would you like to proceed?";
          } else if (inputLower.includes("discuss") || inputLower.includes("talk")) {
            aiResponse = "Great! Please share your thoughts or let me know the topic you’d like to cover.";
          } else if (inputLower.includes("schedule") || inputLower.includes("time")) {
            aiResponse = "The meeting is scheduled for 1 hour. Would you like a break midway?";
          } else if (inputLower.includes("thank") || inputLower.includes("thanks")) {
            aiResponse = "My pleasure! Looking forward to our next meeting.";
          } else {
            aiResponse = "Apologies, I didn’t follow. Could you please clarify your point?";
          }
        }

        // Restaurant Order Etiquette
        else if (activeScenario.id === "restaurant") {
          if (inputLower.includes("hello") || inputLower.includes("hi")) {
            aiResponse = "Good evening! Welcome to Restaurant Bella Italia. May I show you the menu?";
          } else if (inputLower.includes("order") || inputLower.includes("menu")) {
            aiResponse = "Of course! We have pasta, pizza, and desserts. What would you like to start with?";
          } else if (inputLower.includes("pasta") || inputLower.includes("pizza")) {
            aiResponse = "Excellent choice! Would you like a side salad or drink with that?";
          } else if (inputLower.includes("dessert") || inputLower.includes("cake")) {
            aiResponse = "Great! We offer tiramisu and cheesecake. Which one would you prefer?";
          } else if (inputLower.includes("thank") || inputLower.includes("thanks")) {
            aiResponse = "You’re welcome! Enjoy your meal at Bella Italia!";
          } else {
            aiResponse = "Sorry, I didn’t get that. Could you please repeat your order?";
          }
        }

        // Airport Navigation Etiquette
        else if (activeScenario.id === "airport") {
          if (inputLower.includes("hello") || inputLower.includes("hi")) {
            aiResponse = "Hello! Welcome to Tokyo International Airport. How can I assist you today?";
          } else if (inputLower.includes("direction") || inputLower.includes("where")) {
            aiResponse = "Certainly! The check-in counters are to your left, and gates are straight ahead. Need more help?";
          } else if (inputLower.includes("flight") || inputLower.includes("board")) {
            aiResponse = "Please show your boarding pass, and I’ll guide you to your gate.";
          } else if (inputLower.includes("baggage") || inputLower.includes("luggage")) {
            aiResponse = "The baggage claim is on the ground floor. Would you like directions?";
          } else if (inputLower.includes("thank") || inputLower.includes("thanks")) {
            aiResponse = "My pleasure! Safe travels from Tokyo International Airport!";
          } else {
            aiResponse = "I’m sorry, I didn’t understand. Could you please ask again?";
          }
        }
      }

      else if (selectedLanguage === "mr") {
        // Café Conversation Etiquette
        if (activeScenario.id === "cafe") {
          if (inputLower.includes("नमस्कार") || inputLower.includes("हाय")) {
            aiResponse = "नमस्कार! कॅफे ल्युमिएरमध्ये स्वागत आहे. मी तुम्हाला कशात मदत करू शकतो?";
          } else if (inputLower.includes("ऑर्डर") || inputLower.includes("मेनू")) {
            aiResponse = "नक्कीच! आमचा मेनू हा आहे. तुम्हाला कॉफी, चहा किंवा पेस्ट्री हवे आहेत का?";
          } else if (inputLower.includes("कॉफी") || inputLower.includes("चहा")) {
            aiResponse = "चांगला पर्याय! दूध किंवा साखर घ्यायचे आहे का?";
          } else if (inputLower.includes("पेस्ट्री") || inputLower.includes("केक")) {
            aiResponse = "उत्तम! आमच्याकडे क्रोआसंट आणि मफिन्स आहेत. कोणते हवे?";
          } else if (inputLower.includes("किंमत") || inputLower.includes("किंमती")) {
            aiResponse = "कॉफी $3, चहा $2.50, आणि पेस्ट्री $4 पासून सुरू. ऑर्डर करायचे आहे का?";
          } else if (inputLower.includes("धन्यवाद")) {
            aiResponse = "आपले स्वागत आहे! कॅफे ल्युमिएरमध्ये तुमचा वेळ आनंददायी व्हावा!";
          } else {
            aiResponse = "मला समजले नाही. कृपया तुमची विनंती पुन्हा सांगा किंवा स्पष्ट करा.";
          }
        }

        // Hotel Check-In Etiquette
        else if (activeScenario.id === "hotel") {
          if (inputLower.includes("नमस्कार") || inputLower.includes("हाय")) {
            aiResponse = "नमस्कार! हॉटेल एस्ट्रीला यांचे स्वागत आहे. तुमच्या चेक-इनसाठी मी कशात मदत करू शकतो?";
          } else if (inputLower.includes("राखीव") || inputLower.includes("बुक")) {
            aiResponse = "धन्यवाद! कृपया तुमचे नाव किंवा राखीव क्रमांक द्या, मी तपासतो.";
          } else if (inputLower.includes("खोली") || inputLower.includes("चेक")) {
            aiResponse = "तुमची खोली 304 आहे, तिसऱ्या मजल्यावर. हे तुमचे किल्ले, तुमचा मुक्काम आनंददायी व्हावा!";
          } else if (inputLower.includes("wifi") || inputLower.includes("इंटरनेट")) {
            aiResponse = "WiFi चा पासवर्ड 'EstrellaGuest2023' आहे. कनेक्ट करण्यास मदत हवी आहे का?";
          } else if (inputLower.includes("नाश्ता") || inputLower.includes("जेवण")) {
            aiResponse = "नाश्ता सकाळी 7:00 ते 10:00 वाजेपर्यंत डायनिंग क्षेत्रात मिळतो. आनंद घ्या!";
          } else if (inputLower.includes("धन्यवाद")) {
            aiResponse = "आपले स्वागत आहे! हॉटेल एस्ट्रीलामध्ये तुमचा सुखद मुक्काम व्हावा.";
          } else {
            aiResponse = "मला समजले नाही. कृपया तुमची विनंती पुन्हा मांडा.";
          }
        }

        // Business Meeting Etiquette
        else if (activeScenario.id === "business") {
          if (inputLower.includes("नमस्कार") || inputLower.includes("हाय")) {
            aiResponse = "सुसंगत दिवस! व्यवसाय बैठकीत स्वागत आहे. सुरू करूया का?";
          } else if (inputLower.includes("अजेंडा") || inputLower.includes("सुरू")) {
            aiResponse = "नक्कीच! अजेंडामध्ये प्रकल्प अपडेट्स आणि चर्चा आहेत. पुढे जाऊया का?";
          } else if (inputLower.includes("चर्चा") || inputLower.includes("बोलू")) {
            aiResponse = "चांगले! कृपया तुमचे विचार शेअर करा किंवा तुम्हाला कोणता विषय हवा आहे ते सांगा.";
          } else if (inputLower.includes("वेळापत्रक") || inputLower.includes("वेळ")) {
            aiResponse = "बैठक 1 तासासाठी नियोजित आहे. मध्येच ब्रेक हवा आहे का?";
          } else if (inputLower.includes("धन्यवाद")) {
            aiResponse = "आपले स्वागत आहे! पुढील बैठकीसाठी उत्सुक आहे.";
          } else {
            aiResponse = "मला समजले नाही. कृपया तुमचे मत स्पष्ट करा.";
          }
        }

        // Restaurant Order Etiquette
        else if (activeScenario.id === "restaurant") {
          if (inputLower.includes("नमस्कार") || inputLower.includes("हाय")) {
            aiResponse = "सुसंगत संध्याकाळ! रेस्टॉरंट बेला इटालियामध्ये स्वागत आहे. मेनू दाखवू का?";
          } else if (inputLower.includes("ऑर्डर") || inputLower.includes("मेनू")) {
            aiResponse = "नक्कीच! आमच्याकडे पास्ता, पिझ्झा आणि डेझर्ट आहेत. सुरूवात कशापासून करायची?";
          } else if (inputLower.includes("पास्ता") || inputLower.includes("पिझ्झा")) {
            aiResponse = "उत्तम निवड! त्यासोबत सॅलड किंवा ड्रिंक हवा आहे का?";
          } else if (inputLower.includes("डेझर्ट") || inputLower.includes("केक")) {
            aiResponse = "चांगले! आमच्याकडे टिरामिसू आणि चीजकेक आहे. कोणते हवे?";
          } else if (inputLower.includes("धन्यवाद")) {
            aiResponse = "आपले स्वागत आहे! बेला इटालियामध्ये तुमचे जेवण आनंददायी व्हावे!";
          } else {
            aiResponse = "मला समजले नाही. कृपया तुमची ऑर्डर पुन्हा सांगा.";
          }
        }

        // Airport Navigation Etiquette
        else if (activeScenario.id === "airport") {
          if (inputLower.includes("नमस्कार") || inputLower.includes("हाय")) {
            aiResponse = "नमस्कार! टोकियो आंतरराष्ट्रीय विमानतळावर स्वागत आहे. मी तुम्हाला कशात मदत करू शकतो?";
          } else if (inputLower.includes("दिशा") || inputLower.includes("कुठे")) {
            aiResponse = "नक्कीच! चेक-इन काउंटर्स उजवीकडे आहेत, आणि गेट्स सरळ पुढे आहेत. आणखी मदत हवी आहे का?";
          } else if (inputLower.includes("फ्लाइट") || inputLower.includes("बोर्ड")) {
            aiResponse = "कृपया तुमचे बोर्डिंग पास दाखवा, मी तुम्हाला गेटपर्यंत मार्गदर्शन करतो.";
          } else if (inputLower.includes("बॅगेज") || inputLower.includes("सामान")) {
            aiResponse = "बॅगेज क्लेम ग्राउंड फ्लोरवर आहे. दिशा हव्या आहेत का?";
          } else if (inputLower.includes("धन्यवाद")) {
            aiResponse = "आपले स्वागत आहे! टोकियो आंतरराष्ट्रीय विमानतळावरून सुखकर प्रवास!";
          } else {
            aiResponse = "मला समजले नाही. कृपया पुन्हा विचारा.";
          }
        }
      }

      if (!aiResponse) {
        aiResponse = selectedLanguage === "en"
          ? "Sorry, I didn’t understand. Could you please rephrase your request?"
          : "मला समजले नाही. कृपया तुमची विनंती पुन्हा मांडा.";
      }

      const newAiMessage: Message = {
        id: messages.length + 2,
        text: aiResponse,
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newAiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const resetConversation = () => {
    let initialMessage = "";
    if (selectedLanguage === "en") {
      switch (activeScenario.id) {
        case "cafe":
          initialMessage = "Hello! Welcome to Café Lumière. What would you like to order today?";
          break;
        case "hotel":
          initialMessage = "Hello! Welcome to Hotel Estrella. How may I assist you with your check-in?";
          break;
        case "business":
          initialMessage = "Good day! Welcome to the business meeting. Shall we begin?";
          break;
        case "restaurant":
          initialMessage = "Good evening! Welcome to Restaurant Bella Italia. May I show you the menu?";
          break;
        case "airport":
          initialMessage = "Hello! Welcome to Tokyo International Airport. How can I assist you today?";
          break;
        default:
          initialMessage = "Hello! How can I assist you today?";
      }
    } else if (selectedLanguage === "mr") {
      switch (activeScenario.id) {
        case "cafe":
          initialMessage = "नमस्कार! कॅफे ल्युमिएरमध्ये स्वागत आहे. आज तुम्हाला काय ऑर्डर करायचे आहे?";
          break;
        case "hotel":
          initialMessage = "नमस्कार! हॉटेल एस्ट्रीला यांचे स्वागत आहे. तुमच्या चेक-इनसाठी मी कशात मदत करू शकतो?";
          break;
        case "business":
          initialMessage = "सुसंगत दिवस! व्यवसाय बैठकीत स्वागत आहे. सुरू करूया का?";
          break;
        case "restaurant":
          initialMessage = "सुसंगत संध्याकाळ! रेस्टॉरंट बेला इटालियामध्ये स्वागत आहे. मेनू दाखवू का?";
          break;
        case "airport":
          initialMessage = "नमस्कार! टोकियो आंतरराष्ट्रीय विमानतळावर स्वागत आहे. मी तुम्हाला कशात मदत करू शकतो?";
          break;
        default:
          initialMessage = "नमस्कार! मी तुम्हाला कशात मदत करू शकतो?";
      }
    }

    setMessages([
      {
        id: 1,
        text: initialMessage,
        sender: "ai",
        timestamp: new Date(),
      },
    ]);
  };

  const changeScenario = (scenario: ScenarioOption) => {
    setActiveScenario(scenario);
    resetConversation();
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Scenario selector */}
      <div className="mb-4 flex flex-wrap gap-2">
        {scenarioOptions.map((scenario) => (
          <Button
            key={scenario.id}
            variant={activeScenario.id === scenario.id ? "default" : "outline"}
            size="sm"
            className={cn(
              "text-xs",
              activeScenario.id === scenario.id
                ? "bg-gradient-to-r from-varna-purple to-varna-accent-teal"
                : ""
            )}
            onClick={() => changeScenario(scenario)}
          >
            {scenario.name}
          </Button>
        ))}
      </div>

      {/* Active scenario info */}
      <Card className="mb-4 p-4 flex justify-between items-center bg-gradient-to-r from-varna-purple/10 to-varna-accent-teal/10 border-varna-purple/20">
        <div>
          <h3 className="font-bold text-lg">{activeScenario.name}</h3>
          <p className="text-sm text-muted-foreground">
            Language: {selectedLanguage === "en" ? "English" : "Marathi"} • Level: {activeScenario.level}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={resetConversation} title="Reset conversation">
            <RotateCw className="h-4 w-4" />
          </Button>
          <select
            value={selectedLanguage}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedLanguage(e.target.value)}
            className="border p-1 rounded bg-background text-muted-foreground"
          >
            <option value="en">English</option>
            <option value="mr">Marathi</option>
          </select>
        </div>
      </Card>

      {/* Chat messages */}
      <div className="bg-card rounded-lg border border-border h-[400px] mb-4 overflow-y-auto p-4 flex flex-col gap-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2 flex gap-2 ${
                message.sender === "user"
                  ? "bg-varna-purple text-white rounded-br-none"
                  : "bg-muted rounded-bl-none"
              }`}
            >
              {message.sender === "ai" && (
                <Bot className="h-5 w-5 mt-1 shrink-0 text-varna-accent-teal" />
              )}
              <div>
                <p className="text-sm">{message.text}</p>
                <p className="text-xs opacity-50 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
              {message.sender === "user" && (
                <User className="h-5 w-5 mt-1 shrink-0" />
              )}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-2xl px-4 py-2 bg-muted rounded-bl-none">
              <div className="flex gap-1 items-center h-6">
                <div className="w-2 h-2 rounded-full bg-varna-purple animate-bounce" style={{ animationDelay: "0ms" }}></div>
                <div className="w-2 h-2 rounded-full bg-varna-purple animate-bounce" style={{ animationDelay: "150ms" }}></div>
                <div className="w-2 h-2 rounded-full bg-varna-purple animate-bounce" style={{ animationDelay: "300ms" }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input area */}
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <textarea
            value={userInput}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setUserInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type your message..."
            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm resize-none h-[100px] focus:outline-none focus:ring-2 focus:ring-varna-purple/30"
          />
          <Button
            className="absolute right-2 bottom-2 rounded-full h-8 w-8 p-0 bg-gradient-to-r from-varna-purple to-varna-accent-teal"
            onClick={handleSendMessage}
          >
            <MessageCircle className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoleplayScenario;