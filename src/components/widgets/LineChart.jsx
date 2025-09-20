import React from "react";
import Card from "../ui/Card";
import { Chart } from "primereact/chart";

export default function LineChart() {
  const data = {
    labels: [
      "04 Jan",
      "08 Jan",
      "12 Jan",
      "16 Jan",
      "20 Jan",
      "26 Jan",
      "28 Jan",
      "30 Jan",
      "31 Jan",
    ],
    datasets: [
      {
        label: "Players",
        data: [120, 260, 420, 460, 620, 700, 520, 380, 420],
        borderColor: "#34D399",
        backgroundColor: "rgba(52,211,153,0.05)",
        tension: 0.35,
        pointBackgroundColor: "#34D399",
        pointRadius: 4,
        fill: true,
      },
      {
        label: "Avg",
        data: [90, 200, 320, 360, 420, 520, 420, 340, 360],
        borderColor: "#94A3B8",
        borderDash: [6, 4],
        tension: 0.35,
        pointRadius: 0,
        fill: false,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: "#8592A3" },
        grid: { color: "#EEF2F6" },
      },
      x: {
        ticks: { color: "#8592A3" },
        grid: { display: false },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <Card title="Game Stats" className="h-72">
      <div className="h-56">
        <Chart type="line" data={data} options={options} />
      </div>
    </Card>
  );
}
