"use client";

import { useState } from "react";

export default function Settings() {
  const [helmet, setHelmet] = useState(true);
  const [fire, setFire] = useState(true);
  const [smoke, setSmoke] = useState(true);
  const [gas, setGas] = useState(true);
  const [emergency, setEmergency] = useState(true);

  const saveSettings = () => {
    alert("✅ Sentinel AI Configuration Saved Successfully!");
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-5xl font-bold text-cyan-400">
        Sentinel AI Settings
      </h1>

      <p className="text-gray-400 mt-2">
        Configure AI Monitoring Modules
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-10">

        <div className="bg-slate-900 rounded-2xl p-8">

          <h2 className="text-2xl font-bold mb-6">
            AI Detection Modules
          </h2>

          <div className="space-y-5">

            <label className="flex justify-between items-center">
              Helmet Detection
              <input
                type="checkbox"
                checked={helmet}
                onChange={() => setHelmet(!helmet)}
              />
            </label>

            <label className="flex justify-between items-center">
              Fire Detection
              <input
                type="checkbox"
                checked={fire}
                onChange={() => setFire(!fire)}
              />
            </label>

            <label className="flex justify-between items-center">
              Smoke Detection
              <input
                type="checkbox"
                checked={smoke}
                onChange={() => setSmoke(!smoke)}
              />
            </label>

            <label className="flex justify-between items-center">
              Gas Monitoring
              <input
                type="checkbox"
                checked={gas}
                onChange={() => setGas(!gas)}
              />
            </label>

            <label className="flex justify-between items-center">
              Emergency AI
              <input
                type="checkbox"
                checked={emergency}
                onChange={() => setEmergency(!emergency)}
              />
            </label>

          </div>

          <button
            onClick={saveSettings}
            className="mt-8 bg-cyan-600 hover:bg-cyan-700 px-8 py-4 rounded-xl font-bold"
          >
            Save Configuration
          </button>

        </div>

        <div className="bg-slate-900 rounded-2xl p-8">

          <h2 className="text-2xl font-bold mb-6">
            System Status
          </h2>

          <div className="space-y-4 text-lg">

            <div className="flex justify-between">
              <span>Backend</span>
              <span className="text-green-400">🟢 Connected</span>
            </div>

            <div className="flex justify-between">
              <span>AI Engine</span>
              <span className="text-green-400">🟢 Running</span>
            </div>

            <div className="flex justify-between">
              <span>CCTV Cameras</span>
              <span className="text-green-400">🟢 Online</span>
            </div>

            <div className="flex justify-between">
              <span>IoT Sensors</span>
              <span className="text-green-400">🟢 Active</span>
            </div>

            <div className="flex justify-between">
              <span>Cloud Sync</span>
              <span className="text-green-400">🟢 Enabled</span>
            </div>

            <div className="flex justify-between">
              <span>Database</span>
              <span className="text-green-400">🟢 Connected</span>
            </div>

          </div>

          <div className="mt-10 bg-slate-800 rounded-xl p-6">

            <h3 className="text-xl font-bold mb-3">
              Platform Information
            </h3>

            <p>Version : 1.0.0</p>
            <p>Framework : Next.js + FastAPI</p>
            <p>AI Engine : Sentinel AI</p>
            <p>Status : Operational</p>

          </div>

        </div>

      </div>

    </main>
  );
}