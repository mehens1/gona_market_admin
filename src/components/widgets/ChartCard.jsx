import React from 'react'
import Card from '../../components/ui/Card'
import { Chart } from 'primereact/chart'

export default function ChartCard() {
  const data = {
    labels: ['04 Jan', '08 Jan', '12 Jan', '16 Jan', '20 Jan', '26 Jan', '28 Jan', '30 Jan', '31 Jan'],
    datasets: [
      {
        label: 'Players',
        data: [120, 260, 400, 420, 500, 620, 410, 300, 380],
        fill: false,
        borderColor: '#34D399',
        tension: 0.4,
        pointBackgroundColor: '#10B981',
        pointRadius: 4
      },
      {
        label: 'Average',
        data: [80, 200, 320, 350, 420, 450, 380, 280, 330],
        fill: false,
        borderColor: '#94A3B8',
        borderDash: [6,4],
        tension: 0.4,
        pointRadius: 0
      }
    ]
  }

  const options = {
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: '#f3f4f6' }
      },
      x: {
        grid: { display: false }
      }
    },
    maintainAspectRatio: false,
  }

  return (
    <Card title="Game Stats" className="h-72">
      <div className="h-56">
        <Chart type="line" data={data} options={options} />
      </div>
    </Card>
  )
}
