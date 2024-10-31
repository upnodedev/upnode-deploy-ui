"use client";

import LineChart from "@/components/ui/LineChart";
import { SubHeader } from "@/components/ui/SubHeader";
import { TextHeader } from "@/components/ui/TextHeader";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { DashboardDeployCard } from "./DeployCard";
import { RollupChainCard } from "./RollupChainCard";
import { DashboardStatsCard } from "./StatsCard";
import { useProtectedRoute } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const [selectedRange, setSelectedRange] = useState(1);
  const selectedRangeData = [
    "12 months",
    "3 months",
    "30 days",
    "7 days",
    "24 hours",
  ];
  useProtectedRoute();
  return (
    <div className="px-8 py-8">
      <div className="flex justify-between">
        <TextHeader
          title="Dashboard"
          description="Overview of your rollup performance and key metrics."
        />
        <div className="flex gap-3">
          <Button className="rounded-full border border-[#333741] bg-secondary-dark px-3.5 py-2.5 text-sm font-semibold text-[#CECFD2] shadow-sm hover:bg-secondary-_hover-dark">
            <img src="/icons/upload.svg" className="mr-2 h-5 w-5" /> Login with
            Email
          </Button>
          <Button className="shadow-s rounded-full bg-gradient-to-l from-[#6A11CB] to-[#2575FC] px-3.5 py-2.5 text-md font-semibold text-[#CECFD2]">
            <img src="/icons/plus.svg" className="mr-2 h-5 w-5" /> Deploy
          </Button>
        </div>
      </div>
      <div className="my-8 flex gap-6">
        <div className="w-4/6 rounded-xl bg-primary-dark p-6 shadow">
          <div className="flex gap-5">
            <div className="w-4/6">
              <div className="mb-5 flex justify-between">
                <div className="text-lg font-semibold text-primary-dark">
                  Fraxtal L3 Chain
                </div>
                <Button className="rounded-full bg-active-dark px-3.5 py-2.5 text-sm font-semibold text-[#CECFD2] shadow-sm hover:bg-secondary-_hover-dark">
                  View report
                </Button>
              </div>
              <div className="mb-5 flex gap-1">
                {selectedRangeData.map((range, index) => {
                  return (
                    <Button
                      key={range}
                      className={`rounded-md px-3 py-2 text-sm font-semibold text-[#CECFD2] shadow-sm hover:bg-secondary-_hover-dark ${selectedRange === index + 1 && "bg-active-dark"}`}
                    >
                      {range}
                    </Button>
                  );
                })}
              </div>
              <LineChart />
            </div>
            <div className="flex">
              <Separator
                orientation="vertical"
                className="h-full bg-[#1F242F]"
              />
            </div>
            <div className="flex flex-col gap-5">
              <DashboardStatsCard
                title="Total Transactions"
                value="11,1114,862"
              />
              <DashboardStatsCard title="Active Users" value="22,671" />
              <DashboardStatsCard title="Uptime" value="98.6%" />
            </div>
          </div>
        </div>
        <DashboardDeployCard />
      </div>
      <div>
        <SubHeader title="My rollup chain" />
        <div className="grid grid-cols-3 gap-6">
          <RollupChainCard />
          <RollupChainCard />
          <RollupChainCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
