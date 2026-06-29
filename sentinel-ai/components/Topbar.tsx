"use client";

import { Bell, Search, UserCircle2 } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-20 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-8">
      <div>
        <h1 className="text-2xl font-bold text-white">
          Industrial Safety Dashboard
        </h1>
        <p className="text-gray-400 text-sm">
          Live AI Monitoring & Predictive Risk Intelligence
        </p>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center bg-slate-800 rounded-xl px-4 py-2">
          <Search className="text-gray-400 mr-2" size={18} />
          <input
            placeholder="Search..."
            className="bg-transparent outline-none text-white"
          />
        </div>

        <Bell className="text-yellow-400" size={24} />

        <UserCircle2 className="text-cyan-400" size={34} />
      </div>
    </header>
  );
}