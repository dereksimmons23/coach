import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowLeft, DollarSign, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Pricing = () => {
  const [workoutsPerWeek, setWorkoutsPerWeek] = useState(2);
  
  const calculateMonthlyCost = (workouts: number) => {
    const basePrice = 10;
    const earnedPerWorkout = 1;
    const weeklyEarnings = workouts * earnedPerWorkout;
    const monthlyEarnings = weeklyEarnings * 4;
    const netCost = Math.max(0, basePrice - monthlyEarnings);
    return { basePrice, monthlyEarnings, netCost };
  };

  const { basePrice, monthlyEarnings, netCost } = calculateMonthlyCost(workoutsPerWeek);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Hero */}
          <div className="text-center space-y-4">
            <div className="inline-block px-4 py-2 bg-green-100 rounded-full text-green-800 font-medium text-sm mb-4">
              🏀💰 Bank Shots System
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Train Hard. Pay Less. <span className="text-green-600">Train Harder. Pay Nothing.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The revolutionary earn-back model that rewards consistency and commitment. Every workout earns you Bank Shots — train enough and HoopDreams is FREE.
            </p>
          </div>

          {/* Bank Shots Calculator */}
          <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-white">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-green-600" />
                Bank Shots Calculator
              </CardTitle>
              <CardDescription className="text-lg">
                See how your training can pay for itself
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How many workouts per week will you complete?
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="0"
                    max="7"
                    value={workoutsPerWeek}
                    onChange={(e) => setWorkoutsPerWeek(parseInt(e.target.value))}
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                  />
                  <span className="text-2xl font-bold text-green-600 min-w-[60px] text-right">
                    {workoutsPerWeek}
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 pt-6">
                <div className="text-center p-6 bg-white rounded-lg border-2 border-gray-200">
                  <div className="text-sm text-gray-600 mb-2">Monthly Subscription</div>
                  <div className="text-3xl font-bold text-gray-900">${basePrice}</div>
                </div>
                
                <div className="text-center p-6 bg-green-50 rounded-lg border-2 border-green-300">
                  <div className="text-sm text-gray-600 mb-2">You Earn in Bank Shots</div>
                  <div className="text-3xl font-bold text-green-600">-${monthlyEarnings}</div>
                  <div className="text-xs text-gray-500 mt-1">{workoutsPerWeek} workouts/week × 4 weeks</div>
                </div>
                
                <div className="text-center p-6 bg-blue-50 rounded-lg border-2 border-blue-300">
                  <div className="text-sm text-gray-600 mb-2">Your Net Cost</div>
                  <div className="text-3xl font-bold text-blue-600">
                    {netCost === 0 ? "FREE! 🎉" : `$${netCost}`}
                  </div>
                  {netCost === 0 && (
                    <div className="text-xs text-gray-500 mt-1">You earned it all back!</div>
                  )}
                </div>
              </div>

              {netCost === 0 && (
                <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4 text-center">
                  <p className="text-green-800 font-medium">
                    💪 You're training for FREE! Unused Bank Shots roll over to next month.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* How Bank Shots Work */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center text-gray-900">How Bank Shots Work</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="border-green-200">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl mb-2">
                    1
                  </div>
                  <CardTitle className="text-lg">Complete Workout</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Upload proof of your training session</p>
                  <p className="text-green-600 font-bold mt-2">Earn $1.00</p>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl mb-2">
                    2
                  </div>
                  <CardTitle className="text-lg">Build Streaks</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">7-day streak bonus</p>
                  <p className="text-green-600 font-bold mt-2">Earn $2.00</p>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl mb-2">
                    3
                  </div>
                  <CardTitle className="text-lg">Hit Milestones</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Skill improvements & challenges</p>
                  <p className="text-green-600 font-bold mt-2">Earn $1-5</p>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl mb-2">
                    4
                  </div>
                  <CardTitle className="text-lg">Refer Friends</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">They join, you both earn</p>
                  <p className="text-green-600 font-bold mt-2">Earn $5.00</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Pricing Tiers */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center text-gray-900">Choose Your Path</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              All tiers include Bank Shots. Train consistently and reduce your costs — or train for free.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Self-Serve Tier */}
              <Card className="border-2 border-gray-200 hover:border-orange-300 transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl">Self-Serve</CardTitle>
                  <CardDescription className="text-lg">Train on your own schedule</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold text-gray-900">$10</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <div className="text-sm text-green-600 font-medium">
                    Bank up to $10/month — train for FREE
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">CoachFlo AI chat access</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Full drill library with videos</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Progress tracking dashboard</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Bank Shots earn-back system</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Mobile app access</span>
                  </div>
                  <Button className="w-full mt-4 bg-orange-600 hover:bg-orange-700">
                    Start Self-Serve
                  </Button>
                </CardContent>
              </Card>

              {/* Guided Path Tier */}
              <Card className="border-2 border-orange-300 bg-gradient-to-br from-orange-50 to-white relative">
                <div className="absolute -top-3 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  MOST POPULAR
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Guided Path</CardTitle>
                  <CardDescription className="text-lg">Expert guidance included</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold text-gray-900">$25</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <div className="text-sm text-green-600 font-medium">
                    Bank up to $15/month
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Everything in Self-Serve</strong></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Monthly group coaching calls</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Personalized training plans</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Film review & feedback</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Mental performance modules</span>
                  </div>
                  <Button className="w-full mt-4 bg-orange-600 hover:bg-orange-700">
                    Start Guided Path
                  </Button>
                </CardContent>
              </Card>

              {/* Elite Path Tier */}
              <Card className="border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-white">
                <CardHeader>
                  <CardTitle className="text-2xl">Elite Path</CardTitle>
                  <CardDescription className="text-lg">Maximum development</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold text-gray-900">$100</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <div className="text-sm text-green-600 font-medium">
                    Bank up to $30/month
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Everything in Guided Path</strong></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">1-on-1 monthly check-ins with Coach D</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Detailed film breakdown sessions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">AAU placement & recruiting guidance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Priority support & direct access</span>
                  </div>
                  <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">
                    Start Elite Path
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Why This Model Works */}
          <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-white">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-blue-600" />
                Why Bank Shots Changes Everything
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">For Players & Parents:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✅ No more paying for unused subscriptions</li>
                  <li>✅ Incentive to stay consistent with training</li>
                  <li>✅ Actual financial reward for hard work</li>
                  <li>✅ Built-in accountability system</li>
                  <li>✅ Can train completely for free if committed</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">For HoopDreams:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✅ Highest engagement in youth sports apps</li>
                  <li>✅ Natural viral marketing ("I train for free!")</li>
                  <li>✅ Lower churn rate (engaged users stay)</li>
                  <li>✅ Proof of platform effectiveness</li>
                  <li>✅ Investor acquisition story that scales</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* FAQ */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-center text-gray-900">Bank Shots FAQ</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I save Bank Shots?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Yes! Unused Bank Shots roll over month to month. Build a balance and train free for multiple months.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Is there a cap on earnings?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">You can earn up to your tier's maximum per month, but unused credits roll over indefinitely.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I cash out Bank Shots?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Bank Shots are credits toward your HoopDreams subscription only, but train consistently and you'll never pay.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How do you verify workouts?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Upload video proof of your training. AI verification + spot audits ensure integrity while keeping it simple.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
