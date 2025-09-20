import React from "react";
import Card from "../ui/Card";
import { Chart } from "primereact/chart";

export default function DonutChart() {
  const data = {
    labels: ["Facebook", "Twitter", "Instagram", "Linkedin"],
    datasets: [
      {
        data: [25, 25, 25, 25],
        backgroundColor: ["#7C3AED", "#06B6D4", "#60A5FA", "#10B981"],
        hoverOffset: 8,
      },
    ],
  };
  const options = {
    plugins: {
      legend: { display: false },
    },
    maintainAspectRatio: false,
  };
  return (
    <Card title="External Resources" className="h-56">
      <div className="flex items-center gap-6">
        <div className="w-44 h-44">
          <Chart type="doughnut" data={data} options={options} />
        </div>
        <ul className="text-sm text-slate-600 space-y-2">
          <li className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-violet-500 inline-block" />
            Facebook
          </li>
          <li className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-cyan-500 inline-block" />
            Twitter
          </li>
          <li className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-sky-400 inline-block" />
            Instagram
          </li>
          <li className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
            Linkedin
          </li>
        </ul>
      </div>
    </Card>
  );
}
