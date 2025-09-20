import React from "react";
import StatCard from "../../components/ui/StatCard";
import LineChart from "../../components/widgets/LineChart";
import DonutChart from "../../components/widgets/DonutChart";
import Card from "../../components/ui/Card";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* <div className="hidden md:flex items-center gap-4 ml-auto">
          <div className="text-slate-700 text-lg">
            Good Morning, <span className="font-semibold">Jonson</span>
          </div>

          <div className="flex items-center gap-2 bg-white rounded-full p-1 shadow-sm">
            <Button variant="ghost" size="sm">
              Weekly
            </Button>
            <Button size="sm">Monthly</Button>
            <Button variant="ghost" size="sm">
              Yearly
            </Button>
          </div>

          <button className="p-2 rounded-full hover:bg-slate-100">
            <i className="pi pi-bell" />
          </button>
          <button className="p-2 rounded-full hover:bg-slate-100">
            <i className="pi pi-cog" />
          </button>
          <img
            src="https://i.pravatar.cc/40?img=5"
            alt="avatar"
            className="w-9 h-9 rounded-full border-2 border-white shadow-sm"
          />
        </div> */}

      <div className="lg:col-span-2 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            icon="pi-user-plus"
            title="New user"
            value="35"
            delta="+120"
            color="green"
          />
          <StatCard
            icon="pi-sign-out"
            title="Left the game"
            value="15"
            delta="-12"
            color="red"
          />
          <StatCard
            icon="pi-flag"
            title="Games completed"
            value="22"
            delta="+120"
            color="blue"
          />
          <StatCard
            icon="pi-gamepad"
            title="New games"
            value="35"
            delta="+120"
            color="purple"
          />
        </div>

        {/* big charts row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <LineChart />
          </div>
          <div className="lg:col-span-1">
            <DonutChart />
            <Card className="mt-4">
              <div className="text-sm text-slate-500">Total user</div>
              <div className="text-xl font-semibold mt-2">$32,985.00</div>
              <div className="flex items-center gap-2 mt-3">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://i.pravatar.cc/40?img=1"
                />
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://i.pravatar.cc/40?img=2"
                />
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://i.pravatar.cc/40?img=3"
                />
                <div className="text-sm text-green-500">+8</div>
              </div>
            </Card>
          </div>
        </div>

        {/* bottom summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card title="Recent Activity">
            <div className="text-sm text-slate-500">No activity in demo</div>
          </Card>
          <Card title="Top Games">
            <div className="text-sm text-slate-500">Placeholder content</div>
          </Card>
        </div>
      </div>

      {/* Right column */}
      <aside className="space-y-4">
        <Card>
          <div className="text-sm text-slate-500">Total revenue</div>
          <div className="text-xl font-semibold">$32,985.00</div>
        </Card>

        <Card>
          <div className="text-sm text-slate-500">Game Expenses</div>
          <div className="text-xl font-semibold">$8,925.00</div>
        </Card>

        <Card>
          <div className="text-sm text-slate-500">Quick Actions</div>
          <div className="mt-3 flex flex-col gap-2">
            <button className="text-left px-3 py-2 rounded-lg bg-green-50 hover:bg-green-100">
              Create game
            </button>
            <button className="text-left px-3 py-2 rounded-lg hover:bg-slate-50">
              Export data
            </button>
          </div>
        </Card>
      </aside>
    </div>
  );
}
