import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Bot, DollarSign, Brain, Users, Target, CheckCircle, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block px-4 py-2 bg-orange-100 rounded-full text-orange-800 font-medium text-sm mb-4">
            🏀 The Alternative Pathway to Basketball Development
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Expert Basketball Coaching
            <br />
            <span className="text-orange-600">Powered by AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Train with Coach D's proven methodology 24/7. Earn Bank Shots for every workout. Build confidence, skills, and mental toughness — all in one platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link to="/demo">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8">
                Try CoachFlo Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 text-lg px-8">
                See Pricing
              </Button>
            </Link>
          </div>
          
          <p className="text-sm text-gray-500 pt-4">
            Join the movement to rebuild basketball development for players the system left behind
          </p>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="bg-red-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              High School Basketball is Broken
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-red-200 bg-white">
                <CardContent className="pt-6 text-center">
                  <div className="text-5xl font-bold text-red-600 mb-2">70%</div>
                  <p className="text-gray-700">of players quit by age 13</p>
                </CardContent>
              </Card>
              
              <Card className="border-red-200 bg-white">
                <CardContent className="pt-6 text-center">
                  <div className="text-5xl font-bold text-red-600 mb-2">30+</div>
                  <p className="text-gray-700">players per coach means zero individual attention</p>
                </CardContent>
              </Card>
              
              <Card className="border-red-200 bg-white">
                <CardContent className="pt-6 text-center">
                  <div className="text-5xl font-bold text-red-600 mb-2">$0</div>
                  <p className="text-gray-700">spent on mental performance training at youth level</p>
                </CardContent>
              </Card>
            </div>
            
            <p className="text-center text-gray-700 text-lg mt-8 max-w-2xl mx-auto">
              Only elite players get resources. Everyone else is forgotten. Private coaching costs $50-200/month that most families can't afford.
            </p>
          </div>
        </div>
      </section>

      {/* Three Core Innovations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Three Breakthrough Innovations
              </h2>
              <p className="text-xl text-gray-600">
                Why HoopDreams is different from every other basketball app
              </p>
            </div>

            {/* CoachFlo */}
            <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Bot className="h-8 w-8 text-orange-600" />
                  1. CoachFlo AI — Authentic Expertise Preserved
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 text-lg">
                  First AI coaching system that preserves an expert's actual methodology, personality, and communication style. Not generic tips — Coach D's proven 15-year training system, available 24/7 to any player.
                </p>
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Real coaching methodology, not generic advice</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Available 24/7 from anywhere in the world</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Remembers your journey and adapts to you</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Mental performance training included</span>
                  </div>
                </div>
                <Link to="/demo">
                  <Button className="bg-orange-600 hover:bg-orange-700 mt-4">
                    Try CoachFlo Demo
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Bank Shots */}
            <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-white">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <DollarSign className="h-8 w-8 text-green-600" />
                  2. Bank Shots — Engagement That Pays
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 text-lg">
                  Revolutionary earn-back model where every workout earns credits toward your subscription. Train consistently and it's FREE. No gimmicks — real financial reward for real commitment.
                </p>
                <div className="bg-white border-2 border-green-300 rounded-lg p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Complete 1 workout</span>
                    <span className="text-green-600 font-bold">Earn $1.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">7-day streak bonus</span>
                    <span className="text-green-600 font-bold">Earn $2.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Hit skill milestones</span>
                    <span className="text-green-600 font-bold">Earn $1-5</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex items-center justify-between font-bold">
                      <span className="text-gray-900">Train 10 times/month</span>
                      <span className="text-green-600 text-xl">100% FREE</span>
                    </div>
                  </div>
                </div>
                <Link to="/pricing">
                  <Button className="bg-green-600 hover:bg-green-700 mt-4">
                    See How Bank Shots Work
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Mental Performance */}
            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Brain className="h-8 w-8 text-blue-600" />
                  3. Mental Performance at Scale
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 text-lg">
                  First platform teaching internal dialogue management, confidence building, and mental toughness to youth athletes. Not just physical skills — we train the mind.
                </p>
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Manage pre-game nerves and anxiety</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Build authentic confidence through preparation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Develop positive self-talk patterns</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Handle pressure situations with composure</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-blue-200">
              <CardContent className="pt-8 space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                    K
                  </div>
                  <div>
                    <p className="font-bold text-lg text-gray-900">Kabir Patel</p>
                    <p className="text-gray-600">8th Grade, Traveling to India for Training</p>
                  </div>
                </div>
                <p className="text-gray-700 text-lg italic">
                  "I was nervous about training alone in India for a month. With CoachFlo, I had Coach D with me every day. I improved my shooting, gained confidence, and never felt like I was training by myself."
                </p>
                <p className="text-gray-600 text-sm">
                  Kabir is HoopDreams' first athlete — the player who inspired us to build this platform
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Built for Every Stakeholder
              </h2>
              <p className="text-xl text-gray-600">
                Not just for players — HoopDreams serves the entire basketball ecosystem
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-blue-200 hover:border-blue-400 transition-colors">
                <CardHeader>
                  <Users className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle>For Players</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-gray-700">
                  <p>• 24/7 expert coaching access</p>
                  <p>• Personalized training plans</p>
                  <p>• Mental performance training</p>
                  <p>• Earn back your subscription</p>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:border-green-400 transition-colors">
                <CardHeader>
                  <Users className="h-10 w-10 text-green-600 mb-2" />
                  <CardTitle>For Parents</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-gray-700">
                  <p>• Affordable alternative to private coaching</p>
                  <p>• Track your child's progress</p>
                  <p>• No wasted subscription fees</p>
                  <p>• Proven methodology, not gimmicks</p>
                </CardContent>
              </Card>

              <Card className="border-orange-200 hover:border-orange-400 transition-colors">
                <CardHeader>
                  <Users className="h-10 w-10 text-orange-600 mb-2" />
                  <CardTitle>For Coaches</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-gray-700">
                  <p>• Scale your expertise beyond 1-on-1</p>
                  <p>• Track multiple athletes easily</p>
                  <p>• Focus on what you do best</p>
                  <p>• Grow your training business</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Differentiation */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
              Why We're Different
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-red-600">Other Basketball Apps</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-gray-700">
                  <p>❌ Generic drill libraries</p>
                  <p>❌ No actual coaching methodology</p>
                  <p>❌ Gimmicky gamification</p>
                  <p>❌ Zero mental performance focus</p>
                  <p>❌ One-size-fits-all approach</p>
                  <p>❌ Pay monthly, use it or not</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-blue-50 border-2 border-orange-300">
                <CardHeader>
                  <CardTitle className="text-orange-600">HoopDreams</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-gray-700">
                  <p>✅ Proven BLAST methodology (15+ years)</p>
                  <p>✅ Authentic AI coaching personality</p>
                  <p>✅ Earn-back model (train for free!)</p>
                  <p>✅ Mental toughness training included</p>
                  <p>✅ Adapts to individual needs</p>
                  <p>✅ Only pay for what you use</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                  The Massive Opportunity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">$4.2B</div>
                    <p className="text-gray-700">Youth basketball market</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">26M</div>
                    <p className="text-gray-700">Youth players in US</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">70%</div>
                    <p className="text-gray-700">Underserved by current system</p>
                  </div>
                </div>
                <p className="text-center text-gray-700 mt-6">
                  And that's just basketball. This methodology works for any sport — $100B+ global TAM.
                </p>
                <div className="text-center mt-4">
                  <Link to="/vision">
                    <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                      See Our Vision & Roadmap
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-orange-600 to-blue-600 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 text-white">
            <h2 className="text-4xl font-bold">
              Ready to Transform Your Game?
            </h2>
            <p className="text-xl opacity-90">
              Join the alternative pathway to basketball development. Expert coaching, mental toughness training, and a platform that rewards your commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/demo">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8">
                  Try CoachFlo Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                  View Pricing
                </Button>
              </Link>
            </div>
            <p className="text-sm opacity-75 pt-4">
              No credit card required • Start training today • Earn back your subscription
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
