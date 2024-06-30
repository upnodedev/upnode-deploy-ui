import { ProjectChainIcon } from "./ProjectChain";

export const CardChainDetail = () => {
  return (
    <div className="flex justify-between gap-6">
      <div className="flex gap-3">
        <ProjectChainIcon />
        <div>
          <div className="font-semibold text-primary-dark">Hokum Chain</div>
          <div className="flex gap-1">
            <img src="/icons/base.svg" alt="" />
            <div className="text-sm text-secondary-dark">Base</div>
            <div className="text-sm text-secondary-dark">+</div>
            <img src="/icons/celestia.svg" alt="" />
            <div className="text-sm text-secondary-dark">Celestia DA</div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-1 rounded-full border border-[#085D3A] bg-[#053321] py-0.5 pl-1.5 pr-2 text-[#75E0A7]">
          <div className="h-2 w-2 rounded-full bg-[#17B26A]" />
          <div className="text-xs">Online</div>
        </div>
      </div>
    </div>
  );
};
