import React from 'react';
import ValueProposition from '../components/ValueProposition';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-br from-gray-100 to-blue-100">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">HoopDreams Value Proposition</h1>
      <ValueProposition />
      <footer className="mt-10 text-center text-gray-500 text-sm">
        HoopDreams Investment Opportunity • 2025
      </footer>
    </div>
  );
} 