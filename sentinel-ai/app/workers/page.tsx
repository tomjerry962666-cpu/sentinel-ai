export default function Workers() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-5xl font-bold text-green-400">
        Worker Monitoring
      </h1>

      <table className="w-full mt-10">

        <thead>

          <tr>

            <th>Name</th>

            <th>Helmet</th>

            <th>Location</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>Worker 001</td>

            <td>✅</td>

            <td>Production</td>

            <td className="text-green-400">Safe</td>

          </tr>

          <tr>

            <td>Worker 002</td>

            <td>❌</td>

            <td>Zone B</td>

            <td className="text-red-400">Warning</td>

          </tr>

        </tbody>

      </table>

    </main>
  );
}