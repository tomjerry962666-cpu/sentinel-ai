type Props = {
  title: string;
  value: string;
  color: string;
};

export default function StatCard({
  title,
  value,
  color,
}: Props) {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-800">
      <h2 className={`text-4xl font-bold ${color}`}>
        {value}
      </h2>

      <p className="text-gray-400 mt-2">
        {title}
      </p>
    </div>
  );
}