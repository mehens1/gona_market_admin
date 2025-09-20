import React from "react";
import Card from "./Card";

const colorMap = {
  green: { bg: "bg-emerald-50", fg: "text-emerald-600" },
  red: { bg: "bg-red-50", fg: "text-red-500" },
  blue: { bg: "bg-sky-50", fg: "text-sky-600" },
  purple: { bg: "bg-violet-50", fg: "text-violet-600" },
};

export default function StatCard({
  icon,
  title,
  value,
  delta,
  color = "green",
}) {
  const c = colorMap[color] || colorMap.green;
  const deltaClass = delta && delta.startsWith("+") ? "delta-up" : "delta-down";
  return (
    <Card className="flex items-center gap-4">
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center ${c.bg}`}
      >
        <i className={`pi ${icon} ${c.fg} text-xl`} />
      </div>
      <div className="flex-1">
        <div className="text-xs text-slate-500">{title}</div>
        <div className="text-lg font-semibold">{value}</div>
      </div>
      <div className="text-right">
        {delta && <div className={deltaClass}>{delta}</div>}
        <div className="text-xs text-slate-400 mt-1">This Month</div>
      </div>
    </Card>
  );
}
