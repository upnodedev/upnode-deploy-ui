import { CardChainDetail } from "@/components/ui/CardChainDetail";
import { Button } from "@/components/ui/button";

export const RollupChainCard = () => {
  return (
    <div>
      <div className="rounded-t-xl border border-secondary-dark bg-primary-dark p-5">
        <CardChainDetail />
        <div className="mt-4 grid grid-cols-2 gap-6">
          <div>
            <div className="mb-1 text-sm text-tertiary-dark">Environment</div>
            <div className="font-semibold text-primary-dark">Testnet</div>
          </div>
          <div>
            <div className="mb-1 text-sm text-tertiary-dark">Cost</div>
            <div className="font-semibold text-primary-dark">15$ / month</div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between rounded-b-xl border border-t-0 border-secondary-dark bg-primary-dark px-6 py-4">
        <div className="flex items-center gap-1.5">
          <img src="/icons/plus.svg" className="h-5 w-5" />
          <div className="font-semibold text-[#CECFD2]">Add to wallet</div>
        </div>
        <Button className="rounded-full border border-[#333741] bg-secondary-dark px-3.5 py-2.5 text-sm font-semibold text-[#CECFD2] shadow-sm hover:bg-secondary-_hover-dark">
          <img src="/icons/setting.svg" className="mr-2 h-5 w-5" /> Setting
        </Button>
      </div>
    </div>
  );
};
