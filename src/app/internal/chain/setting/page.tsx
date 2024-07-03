import { CardChainDetail } from "@/components/ui/CardChainDetail";
import { CardUI } from "@/components/ui/CardUI";
import { InputCopyText } from "@/components/ui/InputCopytext";
import { SubHeader } from "@/components/ui/SubHeader";
import { TextHeader } from "@/components/ui/TextHeader";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import { ArrowLeftIcon } from "lucide-react";
import { NetworkInfoItem } from "./NetworkInfoItem";
import { SelectCard } from "./SelectCard";
("@untitledui-icons/react/solid");

const ChainSetting = () => {
  return (
    <div className="px-8 py-8">
      <Button
        variant="ghost"
        className="gap-1.5 p-0 text-sm font-semibold text-[#CECFD2]"
      >
        <ArrowLeftIcon />
        Go back
      </Button>
      <div className="mb-8 mt-6 flex items-center justify-between">
        <TextHeader title="Chain Setting" description="Lorem" />
        <div className="flex gap-3">
          <Button className="shadow-s rounded-full bg-gradient-to-l from-[#6A11CB] to-[#2575FC] px-3.5 py-2.5 text-md font-semibold text-[#CECFD2]">
            <img src="/icons/plus.svg" className="mr-2 h-5 w-5" /> Deploy to
            mainnet
          </Button>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="w-3/5">
          <CardUI>
            <CardChainDetail />
            <div className="mt-5 flex flex-col gap-3 rounded-xl border border-secondary-dark bg-secondary-dark p-4 shadow">
              <InputCopyText
                title="RPC"
                text="https://rpc-opkit-domains-jlpe79dzdp.t.conduit.xyz"
              />
              <InputCopyText
                title="RPC"
                text="https://rpc-opkit-domains-jlpe79dzdp.t.conduit.xyz"
              />
              <InputCopyText
                title="RPC"
                text="https://rpc-opkit-domains-jlpe79dzdp.t.conduit.xyz"
              />
            </div>
          </CardUI>
          <div className="mt-6">
            <SubHeader title="Setting" />
            <div className="grid grid-cols-3 gap-6">
              <SelectCard
                title="Chain"
                description="Chain information, gas fee, and more"
                icon="/icons/setting-chain.svg"
              />
              <SelectCard
                title="Chain"
                description="Chain information, gas fee, and more"
                icon="/icons/setting-chain.svg"
              />
              <SelectCard
                title="Chain"
                description="Chain information, gas fee, and more"
                icon="/icons/setting-chain.svg"
              />
            </div>
          </div>
          <div className="mt-6">
            <SubHeader title="Apps" />
            <div className="grid grid-cols-3 gap-6">
              <SelectCard
                title="Chain"
                description="Chain information, gas fee, and more"
                icon="/icons/setting-chain.svg"
              />
              <SelectCard
                title="Chain"
                description="Chain information, gas fee, and more"
                icon="/icons/setting-chain.svg"
              />
              <SelectCard
                title="Chain"
                description="Chain information, gas fee, and more"
                icon="/icons/setting-chain.svg"
              />
              <SelectCard
                title="Chain"
                description="Chain information, gas fee, and more"
                icon="/icons/setting-chain.svg"
              />
              <SelectCard
                title="Chain"
                description="Chain information, gas fee, and more"
                icon="/icons/setting-chain.svg"
              />
              <SelectCard
                title="Chain"
                description="Chain information, gas fee, and more"
                icon="/icons/setting-chain.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-2/5">
          <CardUI>
            <div className="mb-5 text-lg font-semibold text-primary-dark">
              Network information
            </div>
            <div className="flex flex-col gap-4">
              <Separator className="h-[1px] bg-[#1F242F]" />
              <NetworkInfoItem
                title="Slug"
                value="conduit:opkit-domains-jlpe79dzdp"
              />
              <NetworkInfoItem title="Chain ID" value="5057" />
              <NetworkInfoItem
                title="Framework"
                value={
                  <div className="flex gap-2">
                    <img src="/logo/op.svg" className="h-6 w-6" alt="" />
                    <div className="text-md font-semibold">OP Stack</div>
                  </div>
                }
                canCopy={false}
              />
              <NetworkInfoItem
                title="Settlement layer"
                value={
                  <div className="flex gap-2">
                    <img src="/logo/op.svg" className="h-6 w-6" alt="" />
                    <div className="text-md font-semibold">Base</div>
                  </div>
                }
                canCopy={false}
              />
              <NetworkInfoItem
                title="Data availability layer"
                value={
                  <div className="flex gap-2">
                    <img src="/logo/op.svg" className="h-6 w-6" alt="" />
                    <div className="text-md font-semibold">Celestia DA</div>
                  </div>
                }
                canCopy={false}
              />
              <NetworkInfoItem
                title="Environment"
                value={<div className="text-md font-semibold">Testnet</div>}
                canCopy={false}
              />
              <NetworkInfoItem
                title="Native Token"
                value="0x00000000000000000999900"
              />
              <NetworkInfoItem
                title="Withdrawal Period"
                value="600 secs 10 minutes"
              />
              <NetworkInfoItem title="Gas Block Limit" value="30,000.000" />
              <NetworkInfoItem
                title="Contract Addresses"
                value="contracts.json"
                canDownload
              />
              <NetworkInfoItem
                title="Contract Addresses"
                value="rollup.json"
                canDownload
              />
              <NetworkInfoItem
                title="Contract Addresses"
                value="genesis.json"
                canDownload
              />
            </div>
          </CardUI>
          <Button className="mt-5 w-full rounded-full border border-[#FFFFFF1F] bg-brand-secondary-dark py-2.5 text-md font-semibold text-white">
            <img src="/icons/plus.svg" className="mr-2 h-5 w-5" /> Add to wallet
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChainSetting;
