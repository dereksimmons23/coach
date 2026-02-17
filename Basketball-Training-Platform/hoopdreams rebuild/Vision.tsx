import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Target, Users, Rocket, Building2, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Vision = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              The Alternative Pathway
            </h1>
            <p className="text-xl text-gray-600">
              How HoopDreams is rebuilding basketball development for the players the system left behind
            </p>
          </div>

          {/* Origin Story */}
          <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white">
            <CardHeader>
              <CardTitle className="text-2xl">The Story Behind HoopDreams</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                HoopDreams started with one player: Kabir, an 8th grader with ADHD and autism who was being overlooked by the traditional high school basketball system.
              </p>
              <p>
                His coach, Derek Simmons (Coach D), had spent 15+ years developing a proven training methodology called BLAST — focused on fundamentals, footwork, and mental performance. But Coach D could only work with a handful of players at a time.
              </p>
              <p>
                When Kabir's family moved to India, Coach D built an AI version of himself — CoachFlo — so Kabir could continue training with the same methodology, anywhere in the world.
              </p>
              <p className="font-medium text-orange-800">
                That's when we realized: if we could preserve Coach D's expertise for one player, we could scale it to serve every player who's been left behind by the system.
              </p>
            </CardContent>
          </Card>

          {/* The Problem */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">The Broken System</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle>High School Basketball is Failing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-gray-700">
                  <p>📉 <strong>70% dropout rate</strong> by age 13</p>
                  <p>👥 <strong>30+ players per coach</strong> means minimal individual attention</p>
                  <p>🎯 <strong>Only elite players get resources</strong> — everyone else is forgotten</p>
                  <p>🧠 <strong>Zero mental performance training</strong> at the youth level</p>
                  <p>💸 <strong>$50-200/month</strong> for private coaching most families can't afford</p>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle>Current Apps Don't Solve It</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-gray-700">
                  <p>📱 Generic drill libraries with no coaching methodology</p>
                  <p>🤖 AI that doesn't preserve authentic expertise</p>
                  <p>🎮 Gamification that feels gimmicky and disconnected</p>
                  <p>🧘 No focus on mental toughness or confidence building</p>
                  <p>👤 One-size-fits-all approach that doesn't adapt to individuals</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* The Solution */}
          <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-white">
            <CardHeader>
              <CardTitle className="text-2xl">The HoopDreams Solution</CardTitle>
              <CardDescription className="text-lg">Three breakthrough innovations that change everything</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-orange-600">1. CoachFlo AI — Authentic Expertise Preserved</h3>
                <p className="text-gray-700">
                  First AI coaching system that preserves an expert's actual methodology, personality, and communication style. Not generic tips — Coach D's proven 15-year training system, available 24/7 to any player.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-green-600">2. Bank Shots — Engagement That Pays</h3>
                <p className="text-gray-700">
                  Revolutionary earn-back model where every workout earns credits toward subscription. Train consistently and it's free. No gimmicks — real financial reward for real commitment.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-blue-600">3. Mental Performance at Scale</h3>
                <p className="text-gray-700">
                  First platform teaching internal dialogue management, confidence building, and mental toughness to youth athletes. Not just physical skills — we train the mind.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Market Opportunity */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center">The Massive Opportunity</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-6 w-6 text-blue-600" />
                    Initial Market
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-3xl font-bold text-blue-600">$4.2B</p>
                    <p className="text-gray-600">Youth basketball market</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600">26M</p>
                    <p className="text-gray-600">Youth players in US</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600">70%</p>
                    <p className="text-gray-600">Underserved by current system</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-6 w-6 text-purple-600" />
                    Global Expansion
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-3xl font-bold text-purple-600">$100B+</p>
                    <p className="text-gray-600">Multi-sport AI coaching TAM</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-purple-600">450M</p>
                    <p className="text-gray-600">Youth athletes globally</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-purple-600">Any Sport</p>
                    <p className="text-gray-600">Methodology works universally</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Roadmap */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center">Development Roadmap</h2>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-l-green-600">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Phase 1: MVP (Now - June 2025)</CardTitle>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">In Progress</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>✅ CoachFlo AI with BLAST methodology</li>
                    <li>✅ Bank Shots earn-back system</li>
                    <li>✅ Basic drill library and progress tracking</li>
                    <li>✅ Mobile-responsive web app</li>
                    <li>⏳ 5 beta users → 30 users by June 10</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Phase 2: Scale (July - December 2025)</CardTitle>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Planned</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>📱 Native iOS/Android apps</li>
                    <li>🎥 Video analysis and annotation tools</li>
                    <li>🧠 Enhanced mental performance modules</li>
                    <li>👥 Multi-stakeholder dashboards (parents, coaches, scouts)</li>
                    <li>📊 Advanced analytics and progress metrics</li>
                    <li>🎯 Target: 500+ active users</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-600">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Phase 3: Expansion (2026+)</CardTitle>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Future</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>🌍 International markets (India, Europe, Asia)</li>
                    <li>⚽ Multi-sport expansion (soccer, football, baseball)</li>
                    <li>🏢 B2B partnerships (schools, AAU programs, training facilities)</li>
                    <li>🤝 NIL marketplace and sports agency features</li>
                    <li>💼 Acquisition by Nike, Under Armour, or Anthropic</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Business Model */}
          <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Building2 className="h-6 w-6 text-orange-600" />
                Revenue Streams
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Primary: Consumer Subscriptions</h3>
                <p className="text-gray-700">$10-100/month tiered pricing with Bank Shots earn-back. Target: 30% of users train for free due to engagement.</p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Secondary: Facility Licensing</h3>
                <p className="text-gray-700">$500-2000/month for gyms, training centers, and schools to offer HoopDreams to their athletes.</p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Future: Marketplace & Agency</h3>
                <p className="text-gray-700">NIL deals, equipment partnerships, recruiting services, and sports agency representation.</p>
              </div>

              <div className="pt-4 border-t">
                <p className="text-gray-700">
                  <strong>5-Year Projection:</strong> $5M ARR by Year 3 → Acquisition for $75-150M by Nike, Under Armour, Adidas, or Anthropic
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Acquisition Strategy */}
          <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Rocket className="h-6 w-6 text-purple-600" />
                Exit Strategy: Why We're Acquisition-Ready
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">For Nike / Under Armour / Adidas:</h3>
                <p>"You want direct relationships with the next generation of athletes. We have 30% of users training 4-5x/week — that's unprecedented engagement in youth sports. Buy us for the distribution and loyalty."</p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">For Anthropic / OpenAI:</h3>
                <p>"We've cracked AI personality preservation and expertise scaling. This is your flagship consumer AI application showing Claude can enhance (not replace) human expertise. Buy us for the methodology and proof-of-concept."</p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">For Apple / Microsoft:</h3>
                <p>"We're building the coaching OS for all sports. This is the Peloton of athletic development. Buy us for the platform and expand it across your ecosystem."</p>
              </div>
            </CardContent>
          </Card>

          {/* The Team */}
          <Card className="border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Users className="h-6 w-6 text-blue-600" />
                The Team
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-bold text-lg text-gray-900">Derek Simmons — Founder & CEO</h3>
                <p className="text-gray-700">15+ years coaching experience. Creator of BLAST methodology and The CW Standard AI ethics framework. 2,500+ hours of documented human-AI collaboration research.</p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-900">Claude Wisdom Strategies</h3>
                <p className="text-gray-700">Parent company (Kansas LLC) with portfolio of AI innovation projects: claudewill.io, flinthills.io, floshake.io. Strategic consulting for AI implementation and ethical frameworks.</p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-900">Seeking:</h3>
                <p className="text-gray-700">Technical co-founder, seed funding ($250-500K), and strategic partnerships with Anthropic, sports brands, or youth sports organizations.</p>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="border-2 border-orange-300 bg-gradient-to-r from-orange-100 to-blue-100">
            <CardContent className="text-center py-8 space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Join the Alternative Pathway</h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Every player deserves expert coaching. Every coach deserves to scale their impact. Let's rebuild basketball development together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/demo">
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                    Try CoachFlo Demo
                  </Button>
                </Link>
                <a href="mailto:simmons.derek@gmail.com">
                  <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                    Contact for Investment
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Vision;
