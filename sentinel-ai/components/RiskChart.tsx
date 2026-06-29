"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { riskData } from "@/data/chartData";

export default function RiskChart() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 h-[380px]">
      <h2 className="text-white text-2xl font-bold mb-6">
        AI Risk Trend
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={riskData}>
          <CartesianGrid stroke="#374151" />

          <XAxis dataKey="time" stroke="#94a3b8" />

          <YAxis stroke="#94a3b8" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="risk"
            stroke="#3b82f6"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}