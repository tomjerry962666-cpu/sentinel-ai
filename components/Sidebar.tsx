"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Map,
  Camera,
  Users,
  Activity,
  ShieldAlert,
  FileText,
  Siren,
  Bot,
  Settings,
} from "lucide-react";

const menu = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Factory Map", href: "/map", icon: Map },
  { name: "CCTV", href: "/cctv", icon: Camera },
  { name: "Workers", href: "/workers", icon: Users },
  { name: "Sensors", href: "/sensors", icon: Activity },
  { name: "Risk Engine", href: "/risk", icon: ShieldAlert },
  { name: "Reports", href: "/reports", icon: FileText },
  { name: "Emergency", href: "/emergency", icon: Siren },
  { name: "AI Copilot", href: "/ai", icon: Bot },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-72 h-screen bg-slate-900 text-white p-6">
      <h1 className="text-3xl font-bold text-blue-400 mb-10">
        SENTINEL AI
      </h1>

      <nav className="space-y-3">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-xl p-3 hover:bg-slate-800 transition"
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}