"use client";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import StatCard from "@/components/StatCard";
import RiskChart from "@/components/RiskChart";
import useDashboard from "@/hooks/useDashboard";

export default function Dashboard() {
  const data = useDashboard();

  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <main className="p-8">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

            <StatCard
              title="Workers Online"
              value={String(data.workers)}
              color="text-green-400"
            />

            <StatCard
              title="Danger Zones"
              value={String(data.dangerZones)}
              color="text-red-400"
            />

            <StatCard
              title="AI Safety Score"
              value={`${data.safetyScore}%`}
              color="text-yellow-400"
            />

            <StatCard
              title="Active Sensors"
              value={String(data.sensors)}
              color="text-cyan-400"
            />

          </div>

          <div className="grid lg:grid-cols-2 gap-6 mt-8">

            <RiskChart />

            <div className="bg-slate-900 rounded-2xl p-6">

              <h2 className="text-white text-2xl font-bold mb-6">
                Live AI Status
              </h2>

              <div className="space-y-4">

                <div className="flex justify-between">
                  <span className="text-gray-400">
                    Helmet Detection
                  </span>

                  <span className="text-green-400">
                    ✓ Active
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">
                    Fire Detection
                  </span>

                  <span className="text-green-400">
                    ✓ Active
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">
                    Gas Monitoring
                  </span>

                  <span className="text-green-400">
                    ✓ Active
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">
                    AI Emergency Agent
                  </span>

                  <span className="text-yellow-400">
                    Standby
                  </span>
                </div>

              </div>

            </div>

          </div>

        </main>

      </div>
    </div>
  );
}