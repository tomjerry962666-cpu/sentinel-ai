"use client";

import { useState } from "react";

export default function AIPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(
    "Sentinel AI Ready. Ask any industrial safety question."
  );

  const askAI = () => {
    const q = question.toLowerCase();

    if (q.includes("helmet")) {
      setAnswer("✅ Helmet compliance is 98%. One worker without a helmet detected in Zone B.");
    } else if (q.includes("fire")) {
      setAnswer("🔥 Fire risk is LOW. No active flames detected. Smoke sensors normal.");
    } else if (q.includes("gas")) {
      setAnswer("🟢 Gas concentration is within safe industrial limits.");
    } else if (q.includes("worker")) {
      setAnswer("👷 128 workers detected. One worker is approaching a restricted area.");
    } else if (q.includes("risk")) {
      setAnswer("⚠ Current risk score is 18%. Predicted risk after 30 minutes is 67%.");
    } else if (q.includes("emergency")) {
      setAnswer("🚨 Emergency response team is on standby. Estimated response time: 42 seconds.");
    } else {
      setAnswer("🤖 Sentinel AI analyzed your query. All critical industrial systems are operational.");
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-5xl font-bold text-cyan-400">
        Sentinel AI Copilot
      </h1>

      <p className="text-gray-400 mt-3">
        AI Industrial Safety Assistant
      </p>

      <div className="bg-slate-900 rounded-2xl p-8 mt-10">

        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Example: Is any worker without helmet?"
          className="w-full h-36 rounded-xl bg-slate-800 p-4 outline-none"
        />

        <button
          onClick={askAI}
          className="mt-6 bg-cyan-600 hover:bg-cyan-700 px-8 py-4 rounded-xl font-bold"
        >
          Ask Sentinel AI
        </button>

        <div className="mt-8 bg-slate-800 rounded-xl p-6">
          <h2 className="text-green-400 font-bold mb-3">
            AI Response
          </h2>

          <p className="text-lg">
            {answer}
          </p>
        </div>

      </div>

    </main>
  );
}