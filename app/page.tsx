import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05081C] flex flex-col items-center justify-center text-white">

      <h1 className="text-7xl font-extrabold text-blue-500 mb-6">
        SENTINEL AI
      </h1>

      <p className="text-2xl text-gray-300 mb-16">
        Industrial Safety Intelligence Platform
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

        <div className="bg-slate-900 rounded-2xl p-8 text-center w-48">
          <h2 className="text-5xl font-bold text-green-400">128</h2>
          <p className="text-gray-300 mt-2">Workers Online</p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 text-center w-48">
          <h2 className="text-5xl font-bold text-red-400">3</h2>
          <p className="text-gray-300 mt-2">High Risk Zones</p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 text-center w-48">
          <h2 className="text-5xl font-bold text-yellow-400">96%</h2>
          <p className="text-gray-300 mt-2">AI Safety Score</p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 text-center w-48">
          <h2 className="text-5xl font-bold text-cyan-400">24</h2>
          <p className="text-gray-300 mt-2">Active Sensors</p>
        </div>

      </div>

      <Link
        href="/dashboard"
        className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-12 py-5 rounded-2xl text-3xl font-bold shadow-lg"
      >
        Launch Dashboard
      </Link>

    </main>
  );
}