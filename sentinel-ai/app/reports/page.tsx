export default function Reports() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-5xl font-bold text-green-400">
        AI Safety Reports
      </h1>

      <p className="text-gray-400 mt-2">
        Automated Industrial Analytics
      </p>

      <div className="grid md:grid-cols-4 gap-6 mt-10">

        <div className="bg-slate-900 rounded-xl p-6">
          <h2>Today's Incidents</h2>
          <p className="text-5xl font-bold mt-3 text-red-400">01</p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6">
          <h2>PPE Compliance</h2>
          <p className="text-5xl font-bold mt-3 text-green-400">98%</p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6">
          <h2>AI Accuracy</h2>
          <p className="text-5xl font-bold mt-3 text-cyan-400">99.2%</p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6">
          <h2>Safety Score</h2>
          <p className="text-5xl font-bold mt-3 text-yellow-400">96%</p>
        </div>

      </div>

      <div className="bg-slate-900 rounded-xl p-8 mt-10">

        <h2 className="text-3xl font-bold mb-6">
          Daily AI Report
        </h2>

        <table className="w-full">

          <thead>

            <tr className="text-left border-b border-slate-700">

              <th className="pb-3">Time</th>

              <th>Status</th>

              <th>Location</th>

              <th>AI Decision</th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-b border-slate-800">

              <td className="py-4">09:14</td>

              <td className="text-yellow-400">Warning</td>

              <td>Zone B</td>

              <td>Helmet Missing</td>

            </tr>

            <tr className="border-b border-slate-800">

              <td className="py-4">10:52</td>

              <td className="text-green-400">Safe</td>

              <td>Warehouse</td>

              <td>PPE Verified</td>

            </tr>

            <tr>

              <td className="py-4">12:26</td>

              <td className="text-green-400">Safe</td>

              <td>Production</td>

              <td>Normal Activity</td>

            </tr>

          </tbody>

        </table>

        <button className="mt-8 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl font-bold">
          Download AI Report (PDF)
        </button>

      </div>

    </main>
  );
}
