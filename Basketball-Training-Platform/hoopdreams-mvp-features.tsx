import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, LineChart, Video, Users, Trophy, BookOpen } from 'lucide-react';

const HoopDreamsMVP = () => {
  const [activeTab, setActiveTab] = useState('player');
  
  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto p-4 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary">HoopDreams MVP Features</h1>
        <p className="text-gray-600 mt-2">Target Release: May 31, 2025</p>
      </div>
      
      <Tabs defaultValue="player" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="player">Player Experience</TabsTrigger>
          <TabsTrigger value="coach">Coach Dashboard</TabsTrigger>
          <TabsTrigger value="parent">Parent Portal</TabsTrigger>
        </TabsList>
        
        <TabsContent value="player" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureCard 
              icon={<Video className="w-6 h-6 text-blue-500" />}
              title="Skill Assessment" 
              description="Video-based skill evaluation with AI-assisted analysis"
              status="In Development"
            />
            <FeatureCard 
              icon={<BookOpen className="w-6 h-6 text-green-500" />}
              title="Personalized Drills" 
              description="Custom training plans based on individual needs"
              status="Planned"
            />
            <FeatureCard 
              icon={<LineChart className="w-6 h-6 text-purple-500" />}
              title="Progress Tracking" 
              description="Visual metrics on skill development and improvement"
              status="In Development"
            />
            <FeatureCard 
              icon={<Trophy className="w-6 h-6 text-amber-500" />}
              title="Achievement System" 
              description="Gamified rewards for completing training milestones"
              status="Planned"
            />
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Player Training Flow</CardTitle>
              <CardDescription>Initial user journey through the app</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">1</div>
                  <p className="text-center">Initial Assessment</p>
                </div>
                <div className="hidden md:block border-t-2 border-dashed flex-grow border-gray-300"></div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">2</div>
                  <p className="text-center">Custom Plan</p>
                </div>
                <div className="hidden md:block border-t-2 border-dashed flex-grow border-gray-300"></div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">3</div>
                  <p className="text-center">Daily Drills</p>
                </div>
                <div className="hidden md:block border-t-2 border-dashed flex-grow border-gray-300"></div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">4</div>
                  <p className="text-center">Progress Review</p>
                </div>
                <div className="hidden md:block border-t-2 border-dashed flex-grow border-gray-300"></div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">5</div>
                  <p className="text-center">Level Up</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="coach" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureCard 
              icon={<Users className="w-6 h-6 text-indigo-500" />}
              title="Team Management" 
              description="Oversee multiple players' development and progress"
              status="In Development"
            />
            <FeatureCard 
              icon={<Video className="w-6 h-6 text-blue-500" />}
              title="Video Analysis Tools" 
              description="Advanced annotation and side-by-side comparison"
              status="Planned"
            />
            <FeatureCard 
              icon={<Clock className="w-6 h-6 text-orange-500" />}
              title="Training Plan Builder" 
              description="Create and assign personalized development plans"
              status="In Development"
            />
            <FeatureCard 
              icon={<LineChart className="w-6 h-6 text-purple-500" />}
              title="Performance Analytics" 
              description="Comprehensive data on player improvement"
              status="Planned"
            />
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Coach Dashboard Preview</CardTitle>
              <CardDescription>Main interface for player management</CardDescription>
            </CardHeader>
            <CardContent className="bg-gray-50 p-4 rounded-md">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">My Athletes</h3>
                  <span className="text-sm text-blue-600">View All</span>
                </div>
                {["Kabir P.", "Maya S.", "Jackson T.", "Elena R.", "Carlos M."].map((name, i) => (
                  <div key={i} className="flex items-center justify-between bg-white p-2 rounded-md">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                      <span>{name}</span>
                    </div>
                    <div className="text-xs text-gray-500">Last active: Today</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="parent" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureCard 
              icon={<CheckCircle className="w-6 h-6 text-green-500" />}
              title="Progress Monitoring" 
              description="Track your child's development and engagement"
              status="Planned"
            />
            <FeatureCard 
              icon={<Clock className="w-6 h-6 text-orange-500" />}
              title="Session Scheduling" 
              description="View and manage upcoming training sessions"
              status="Planned"
            />
            <FeatureCard 
              icon={<Video className="w-6 h-6 text-blue-500" />}
              title="Highlight Access" 
              description="View and share performance highlights and improvements"
              status="Planned"
            />
            <FeatureCard 
              icon={<Users className="w-6 h-6 text-indigo-500" />}
              title="Coach Communication" 
              description="Direct messaging with coaches and trainers"
              status="Future Release"
            />
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Mobile Experience</CardTitle>
              <CardDescription>Parent view on mobile devices</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="border-8 border-gray-800 rounded-3xl w-64 p-2 bg-white">
                <div className="h-12 flex items-center justify-center border-b">
                  <span className="font-medium">HoopDreams</span>
                </div>
                <div className="space-y-3 mt-3">
                  <div className="bg-blue-50 p-2 rounded-md">
                    <div className="text-xs font-medium">Kabir's Progress</div>
                    <div className="mt-2 h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{width: '65%'}}></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span>Left Hand Development</span>
                      <span>65%</span>
                    </div>
                  </div>
                  <div className="p-2 border-b">
                    <div className="text-xs font-medium">Upcoming Sessions</div>
                    <div className="mt-1 text-xs">Friday, April 7 - 4:30 PM</div>
                  </div>
                  <div className="p-2">
                    <div className="text-xs font-medium">Recent Achievements</div>
                    <div className="flex gap-2 mt-1">
                      <div className="w-6 h-6 bg-amber-100 rounded-full"></div>
                      <div className="w-6 h-6 bg-amber-100 rounded-full"></div>
                      <div className="w-6 h-6 bg-gray-100 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, status }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center space-x-2">
          {icon}
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <span className={`text-xs px-2 py-1 rounded-full ${
          status === 'In Development' ? 'bg-blue-100 text-blue-800' : 
          status === 'Planned' ? 'bg-amber-100 text-amber-800' : 
          'bg-gray-100 text-gray-800'
        }`}>
          {status}
        </span>
      </CardFooter>
    </Card>
  );
};

export default HoopDreamsMVP;