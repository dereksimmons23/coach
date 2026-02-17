import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Send, Bot, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Demo = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hey! I'm CoachFlo, your AI basketball coach built on Coach D's 15+ years of training methodology. I'm here to help you develop your game — from fundamentals to mental toughness. What's on your mind today?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simulated AI responses based on common player questions
  const getCoachFloResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes("nervous") || msg.includes("scared") || msg.includes("pressure")) {
      return "I hear you. Pressure is real, but here's what we're gonna work on: controlling what you can control. When you feel nervous, that's your body getting ready to perform. Channel it. Take three deep breaths, visualize making the play, then trust your training. Remember — you've done this a thousand times in practice. The game is just another rep. What specific situation makes you most nervous?";
    }
    
    if (msg.includes("shooting") || msg.includes("shot")) {
      return "Let's talk shooting. Your form is more important than how many you make right now. Here's our BLAST approach: Balance first — feet shoulder-width, athletic stance. Loading the shot — from your legs, not your arms. Alignment — elbow under the ball, wrist cocked. Follow-through — hold it like you're reaching into a cookie jar on the top shelf. What part of your shot feels off right now?";
    }
    
    if (msg.includes("dribbling") || msg.includes("handles") || msg.includes("ball handling")) {
      return "Ball handling is all about repetition and purpose. Every dribble should have a reason. We're not just bouncing — we're moving with intention. Start with basics: pound dribbles (strong hands), crossovers (change direction), between the legs (protect the ball). Do 100 reps daily, both hands. Keep your head up — if you're looking at the ball, you're not seeing the defense. Want a specific drill to start with?";
    }
    
    if (msg.includes("confidence") || msg.includes("don't believe")) {
      return "Confidence isn't something you wait to feel — it's something you build through preparation. Every rep you do in practice is a deposit in your confidence bank. You're not waiting to feel ready; you're making yourself ready. Here's a mental game exercise: before bed tonight, visualize yourself making three great plays in your next game. See it clearly. Feel it. Your brain doesn't know the difference between visualization and reality. What's one thing you do well that you can build on?";
    }
    
    if (msg.includes("defense") || msg.includes("defending")) {
      return "Defense is about effort and positioning, not just athleticism. Anybody can play great defense if they're willing to work. Here's what we focus on: stay low (butt down, chest up), move your feet (no reaching, no lunging), and keep your hands active. Defense is where you prove you're a competitor. Offense might get you noticed, but defense wins games. What part of defense do you struggle with most?";
    }
    
    if (msg.includes("footwork")) {
      return "Footwork is the foundation of everything we do. Great players aren't just fast — they're quick, controlled, and balanced. We drill pivoting, jump stops, and triple threat position every session. Your feet should be active, ready to move in any direction. Think of your feet like a fighter's stance — always ready. Want me to break down a specific footwork drill for you?";
    }
    
    if (msg.includes("game") || msg.includes("play time")) {
      return "Playing time is earned through consistency, effort, and being coachable. Here's what coaches look for: do you play hard on defense? Do you make good decisions? Do you make your teammates better? Focus on those three things and your minutes will come. Control what you can control. What's one thing you can improve to show your coach you're ready for more minutes?";
    }
    
    if (msg.includes("quit") || msg.includes("give up")) {
      return "Look, basketball is hard. Development isn't linear — you're gonna have bad days, bad games, bad weeks even. But quitting is permanent. Tough stretches are temporary. The players who make it aren't the most talented — they're the ones who refused to quit when it got hard. Let's talk about what's making you feel this way. What happened?";
    }
    
    if (msg.includes("thank") || msg.includes("thanks")) {
      return "You got it! Remember, improvement happens in the details and the consistency. Keep putting in the work, and let me know how it goes. I'm here whenever you need me. 💪🏀";
    }
    
    // Default response
    return "That's a great question. Here's what I want you to think about: every challenge in basketball is an opportunity to grow. Whether it's a skill you're working on or a mental barrier you're facing, we break it down into smaller pieces and tackle them one by one. Tell me more about what you're working on, and let's make a plan together. What's your biggest goal right now?";
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const assistantMessage: Message = {
        role: "assistant",
        content: getCoachFloResponse(input)
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickPrompts = [
    "I'm nervous before games",
    "How do I improve my shooting?",
    "I want to work on my ball handling",
    "How do I get more playing time?"
  ];

  const handleQuickPrompt = (prompt: string) => {
    setInput(prompt);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <Card className="border-orange-200 bg-gradient-to-r from-orange-50 to-blue-50">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-2">
                <Bot className="h-8 w-8 text-orange-600" />
                CoachFlo AI Demo
              </CardTitle>
              <CardDescription className="text-lg">
                Experience authentic coaching powered by AI. This is a demo using pre-programmed responses. The full platform uses Claude AI to preserve Coach D's complete methodology.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Chat Interface */}
          <Card className="border-2 border-orange-200">
            <CardContent className="p-0">
              {/* Messages */}
              <div className="h-[500px] overflow-y-auto p-6 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.role === 'assistant' && (
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center">
                          <Bot className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    )}
                    
                    <div className={`max-w-[80%] rounded-lg p-4 ${
                      message.role === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <p className="whitespace-pre-wrap">{message.content}</p>
                    </div>
                    
                    {message.role === 'user' && (
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                          <User className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex gap-3 justify-start">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center">
                        <Bot className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Prompts */}
              <div className="border-t p-4 bg-gray-50">
                <p className="text-sm text-gray-600 mb-2">Try asking:</p>
                <div className="flex flex-wrap gap-2">
                  {quickPrompts.map((prompt, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickPrompt(prompt)}
                      className="text-xs"
                    >
                      {prompt}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="border-t p-4 flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask CoachFlo anything about basketball training..."
                  className="flex-1"
                  disabled={isTyping}
                />
                <Button 
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="bg-orange-600 hover:bg-orange-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Technical Note */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-lg">What Makes This Different</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p className="text-gray-700">
                ✅ <strong>Authentic Voice:</strong> CoachFlo preserves Coach D's actual coaching methodology, personality, and communication style
              </p>
              <p className="text-gray-700">
                ✅ <strong>Context Aware:</strong> The full system remembers each athlete's journey, goals, and challenges (like Coach D remembers Kabir)
              </p>
              <p className="text-gray-700">
                ✅ <strong>Mental Performance:</strong> First platform to teach internal dialogue management and mental toughness at scale
              </p>
              <p className="text-gray-700">
                ✅ <strong>Scalable Expertise:</strong> Takes 15+ years of proven training methodology and makes it available to every player
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Demo;
