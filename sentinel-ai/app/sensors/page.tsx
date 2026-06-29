export default function Sensors() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-5xl font-bold text-cyan-400">
        Smart Sensor Network
      </h1>

      <div className="grid md:grid-cols-4 gap-6 mt-10">

        <div className="bg-slate-900 rounded-xl p-6">
          <h2>Temperature</h2>
          <p className="text-5xl text-green-400 mt-4">28°C</p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6">
          <h2>Gas Level</h2>
          <p className="text-5xl text-yellow-400 mt-4">Normal</p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6">
          <h2>Smoke</h2>
          <p className="text-5xl text-green-400 mt-4">0%</p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6">
          <h2>Humidity</h2>
          <p className="text-5xl text-blue-400 mt-4">55%</p>
        </div>

      </div>

    </main>
  );
}