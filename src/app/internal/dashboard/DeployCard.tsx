import { Button } from "@/components/ui/button";

export const DashboardDeployCard = () => {
  return (
    <div className="flex-grow">
      <div className="relative rounded-xl bg-[url('/image/card1.png')] bg-cover p-6 shadow">
        <div className="max-w-64">
          <div className="text-display-xs font-semibold text-white">
            Launch Your Own Blockchain in Minutes
          </div>
          <div className="mt-2 text-xs text-secondary-dark">
            Experience the simplicity and power of deploying your own rollup
            chain with UPNODE DEPLOY.
          </div>
          <Button className="text-md shadow-s mt-5 rounded-full bg-gradient-to-l from-[#6A11CB] to-[#2575FC] px-3.5 py-2.5 font-semibold text-[#CECFD2]">
            <img src="/icons/plus.svg" className="mr-2 h-5 w-5" /> Deploy Now
          </Button>
        </div>
        <div className="absolute bottom-0 right-0">
          <img src="/image/Metal-3D.png" alt="" />
        </div>
      </div>
    </div>
  );
};
