export default function FactoryMap() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-4xl font-bold text-cyan-400">
        Live Factory Digital Twin
      </h1>

      <p className="text-gray-400 mt-2">
        AI Monitoring of Industrial Plant
      </p>

      <div className="mt-10 bg-slate-900 rounded-2xl h-[700px] relative overflow-hidden">

        <div className="absolute left-12 top-12 w-52 h-40 bg-green-600 rounded-xl flex items-center justify-center">
          Production
        </div>

        <div className="absolute right-20 top-16 w-52 h-40 bg-yellow-500 rounded-xl flex items-center justify-center">
          Warehouse
        </div>

        <div className="absolute left-24 bottom-20 w-56 h-44 bg-red-600 rounded-xl flex items-center justify-center">
          High Risk Zone
        </div>

        <div className="absolute right-28 bottom-28 w-52 h-44 bg-blue-600 rounded-xl flex items-center justify-center">
          Control Room
        </div>

        <div className="absolute left-72 top-56 w-5 h-5 rounded-full bg-green-400 animate-ping"></div>

        <div className="absolute left-[520px] top-[420px] w-5 h-5 rounded-full bg-red-500 animate-ping"></div>

        <div className="absolute right-[240px] top-[260px] w-5 h-5 rounded-full bg-yellow-400 animate-ping"></div>

      </div>

    </main>
  );
}