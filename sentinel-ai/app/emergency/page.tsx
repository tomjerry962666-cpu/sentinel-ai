export default function Emergency() {
  return (
    <main className="min-h-screen bg-red-950 text-white p-10">

      <h1 className="text-5xl font-bold text-red-400">
        Emergency Response Center
      </h1>

      <p className="text-gray-300 mt-3">
        AI Incident Management Dashboard
      </p>

      <div className="grid md:grid-cols-4 gap-6 mt-10">

        <div className="bg-red-900 rounded-xl p-6">
          <h2 className="text-xl">Critical Alerts</h2>
          <p className="text-5xl font-bold mt-4">01</p>
        </div>

        <div className="bg-yellow-700 rounded-xl p-6">
          <h2 className="text-xl">Warnings</h2>
          <p className="text-5xl font-bold mt-4">03</p>
        </div>

        <div className="bg-green-700 rounded-xl p-6">
          <h2 className="text-xl">Medical Team</h2>
          <p className="text-5xl font-bold mt-4">Ready</p>
        </div>

        <div className="bg-blue-700 rounded-xl p-6">
          <h2 className="text-xl">Response Time</h2>
          <p className="text-5xl font-bold mt-4">42s</p>
        </div>

      </div>

      <div className="bg-slate-900 rounded-xl p-8 mt-10">

        <h2 className="text-3xl font-bold mb-6">
          Active Emergency
        </h2>

        <ul className="space-y-4 text-xl">

          <li>🚨 Worker approaching Hazard Zone B</li>

          <li>👷 PPE violation detected</li>

          <li>🔥 Fire Risk: LOW</li>

          <li>🟢 Gas Sensors Normal</li>

          <li>🚑 Emergency Team Ready</li>

        </ul>

      </div>

    </main>
  );
}