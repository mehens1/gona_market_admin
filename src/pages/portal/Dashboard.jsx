import React from "react";
import StatCard from "../../components/ui/StatCard";
import LineChart from "../../components/widgets/LineChart";
import DonutChart from "../../components/widgets/DonutChart";
import Card from "../../components/ui/Card";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const user = useSelector((state) => state.auth.user);

  // get current time, either morning or afternoon or evening to display saluation
  const currentHour = new Date().getHours();
  let timeOfDay;
  if (currentHour < 12) {
    timeOfDay = "Morning";
  } else if (currentHour < 18) {
    timeOfDay = "Afternoon";
  } else {
    timeOfDay = "Evening";
  }
  return (
    <>
      <div
        className={`flex items-center  ${
          timeOfDay == "Morning" ? "primary-bg" : "secondary-bg"
        } text-white p-4 mb-10 rounded-lg`}
      >
        <div className="text-slate-700 text-lg text-white">
          Good {timeOfDay},{" "}
          <span className="font-semibold lighter-secondary-text">
            {user?.first_name || user?.last_name || user?.email}
          </span>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 primary-bg center">
      <LineChart />
      <LineChart />
        {/* <div className="space-y-6"> */}
        {/* <div>left</div>
        <div>right</div> */}

        {/* big charts row */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
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
        </div> */}

        {/* bottom summary */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card title="Recent Activity">
              <div className="text-sm text-slate-500">No activity in demo</div>
            </Card>
            <Card title="Top Games">
              <div className="text-sm text-slate-500">Placeholder content</div>
            </Card>
          </div> */}
        {/* </div> */}

        {/* Right column */}
        {/* <aside className="space-y-4">
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
        </aside> */}
      </div>
    </>
  );
}
