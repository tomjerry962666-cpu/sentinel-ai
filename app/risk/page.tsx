"use client";

import { useState } from "react";

export default function RiskPage() {
  const [risk, setRisk] = useState(18);

  const calculateRisk = () => {
    const value = Math.floor(Math.random() * 80) + 10;
    setRisk(value);
  };

  const getColor = () => {
    if (risk < 30) return "text-green-400";
    if (risk < 60) return "text-yellow-400";
    return "text-red-500";
  };

  const getStatus = () => {
    if (risk < 30) return "LOW";
    if (risk < 60) return "MEDIUM";
    return "HIGH";
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-5xl font-bold text-red-400">
        AI Risk Prediction Engine
      </h1>

      <p className="text-gray-400 mt-2">
        Real-Time Industrial Risk Analysis
      </p>

      <div className="grid md:grid-cols-4 gap-6 mt-10">

        <div className="bg-slate-900 rounded-xl p-6">
          <h2>Current Risk</h2>
          <p className={`text-5xl font-bold mt-4 ${getColor()}`}>
            {risk}%
          </p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6">
          <h2>Risk Level</h2>
          <p className={`text-5xl font-bold mt-4 ${getColor()}`}>
            {getStatus()}
          </p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6">
          <h2>Workers Safe</h2>
          <p className="text-5xl font-bold mt-4 text-green-400">
            126
          </p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6">
          <h2>Alerts</h2>
          <p className="text-5xl font-bold mt-4 text-red-400">
            03
          </p>
        </div>

      </div>

      <div className="bg-slate-900 rounded-xl p-8 mt-10">

        <h2 className="text-3xl font-bold mb-6">
          AI Risk Analysis
        </h2>

        <div className="space-y-4 text-lg">

          <div className="flex justify-between">
            <span>Helmet Compliance</span>
            <span className="text-green-400">98%</span>
          </div>

          <div className="flex justify-between">
            <span>Fire Probability</span>
            <span className="text-yellow-400">12%</span>
          </div>

          <div className="flex justify-between">
            <span>Gas Leak Probability</span>
            <span className="text-green-400">4%</span>
          </div>

          <div className="flex justify-between">
            <span>Equipment Failure</span>
            <span className="text-yellow-400">22%</span>
          </div>

          <div className="flex justify-between">
            <span>Overall AI Prediction</span>
            <span className={getColor()}>
              {getStatus()}
            </span>
          </div>

        </div>

        <button
          onClick={calculateRisk}
          className="mt-10 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-bold"
        >
          Run AI Risk Prediction
        </button>

      </div>

    </main>
  );
}