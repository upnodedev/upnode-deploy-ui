"use client";

import { CardUI } from "@/components/ui/CardUI";
import { SubHeader } from "@/components/ui/SubHeader";
import { TextHeader } from "@/components/ui/TextHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@radix-ui/react-separator";
import { ArrowLeftIcon } from "lucide-react";
import { NetworkInfoItem } from "../../chain/setting/NetworkInfoItem";
import { InputHelpToolTip } from "./InputHelpToolTip";
import { SelectChainCard } from "./SelectChainCard";
import { SelectStackCard } from "./SelectStackCard";
import { useState } from "react";

const initialState = {
  BATCHER_PRIVATE_KEY:
    "0xe7200279dabfc7aebb57ffa0f3c59244bb06ca920b804262019ad5a1dff642a1",
  PROPOSER_PRIVATE_KEY:
    "0xe7200279dabfc7aebb57ffa0f3c59244bb06ca920b804262019ad5a1dff642a1",
  SEQUENCER_PRIVATE_KEY:
    "0xe7200279dabfc7aebb57ffa0f3c59244bb06ca920b804262019ad5a1dff642a1",
  DEPLOYER_PRIVATE_KEY:
    "0xe7200279dabfc7aebb57ffa0f3c59244bb06ca920b804262019ad5a1dff642a1",
  L2_CHAIN_NAME: "rolluptest",
  L2_CHAIN_ID: 43333,
  CELESTIA_RPC: "rpc-mocha.pops.one",
};

const SattlementLayer = [
  {
    img: "/logo/ethereum.svg",
    title: "Ethereum L1",
    value: "ethereum",
  },
  {
    img: "/logo/op.svg",
    title: "Optimism L2",
    value: "optimism",
  },
  {
    img: "/icons/base.svg",
    title: "Base L2",
    value: "base",
  },
  {
    img: "/icons/frax.png",
    title: "Frax L2",
    value: "frax",
  },
];

const DaLayer = [
  {
    img: "/icons/celestia.svg",
    title: "Celestia DA",
    value: "celestia",
  },
  {
    img: "/logo/ethereum.svg",
    title: "Ethereum DA",
    value: "ethereum",
    disabled: true,
  },
  {
    img: "/icons/near.webp",
    title: "Near DA",
    value: "near",
    disabled: true,
  },
];

const privateKeyList = [
  "BATCHER_PRIVATE_KEY",
  "PROPOSER_PRIVATE_KEY",
  "SEQUENCER_PRIVATE_KEY",
  "DEPLOYER_PRIVATE_KEY",
];

const DeployRollUp = () => {
  const [state, setState] = useState({
    L2_CHAIN_NAME: "",
    L2_CHAIN_ID: "",
    L1_RPC_URL: "",
    BATCHER_PRIVATE_KEY: "",
    PROPOSER_PRIVATE_KEY: "",
    SEQUENCER_PRIVATE_KEY: "",
    DEPLOYER_PRIVATE_KEY: "",
    CELESTIA_RPC: "",
    sattlement_layer: "ethereum",
    da_layer: "celestia",
  });

  const onChanngValue = (key: string, value: string) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

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
        <TextHeader
          title="Deploy New Rollup"
          description="Easily create and manage your custom rollup blockchain."
        />
        <div className="flex gap-3">
          <Button className="shadow-s rounded-full bg-gradient-to-l from-[#6A11CB] to-[#2575FC] px-3.5 py-2.5 text-md font-semibold text-[#CECFD2]">
            <img src="/icons/plus.svg" className="mr-2 h-5 w-5" /> Deploy to
            mainnet
          </Button>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="w-3/5 space-y-5">
          <Accordion
            type="multiple"
            defaultValue={["item-1"]}
            className="w-full space-y-5"
          >
            <AccordionItem
              value="item-1"
              className="rounded-xl border border-secondary-dark bg-primary-dark p-6 shadow"
            >
              <AccordionTrigger className="text-lg font-semibold text-primary-dark">
                <div>
                  <div className="text-left">
                    <div>Build your stack </div>
                    <div className="text-sm font-normal text-quaternary-dark">
                      Configure the foundational elements of your rollup
                      blockchain.
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-5">
                  <div className="mt-6 flex gap-5">
                    <div className="flex-grow">
                      <Input
                        label="Rollup name"
                        id="L2_CHAIN_NAME"
                        placeholder="e.g. Turbo Chain"
                        required
                      />
                    </div>
                    <div className="flex-grow">
                      <Input
                        id="L2_CHAIN_ID"
                        label="Chain ID"
                        required
                        placeholder="1234"
                      />
                    </div>
                  </div>
                  <div>
                    <SubHeader title="Select a stack" />
                    <div className="flex gap-5">
                      <SelectStackCard
                        img="/logo/op.svg"
                        title="OP Stack"
                        description="Write a description"
                        isSelected={true}
                      />
                      <SelectStackCard
                        img="/logo/arbitrum.svg"
                        title="Arbitrum Orbit"
                        description="Write a description"
                        isSelected={false}
                        disabled={true}
                      />
                    </div>
                  </div>
                  <div>
                    <SubHeader title="Select a Settlement layer" />
                    <div className="grid grid-cols-4 gap-5">
                      {SattlementLayer.map((item, index) => (
                        <SelectChainCard
                          key={index}
                          img={item.img}
                          title={item.title}
                          isSelected={state.sattlement_layer === item.value}
                          onClick={() =>
                            onChanngValue("sattlement_layer", item.value)
                          }
                        />
                      ))}
                    </div>
                  </div>
                  <Separator className="h-[1px] w-full border border-secondary-dark" />
                  <div>
                    <div className="mb-3 font-medium text-primary-dark">
                      Data Availability
                    </div>
                    <SubHeader title="Select a Data availability provider" />
                    <div className="mb-3.5 grid grid-cols-4 gap-5">
                      {DaLayer.map((item, index) => (
                        <SelectChainCard
                          key={index}
                          img={item.img}
                          title={item.title}
                          isSelected={state.da_layer === item.value}
                          onClick={() => onChanngValue("da_layer", item.value)}
                          disabled={item.disabled}
                        />
                      ))}
                    </div>
                    <div className="flex flex-col gap-3 rounded-xl border border-secondary-dark bg-secondary-dark p-4">
                      <InputHelpToolTip
                        label="Settlement RPC"
                        placeholder="Enter the RPC endpoint for the settlement layer."
                        value={state.L1_RPC_URL}
                        onChange={(e) =>
                          onChanngValue("L1_RPC_URL", e.target.value)
                        }
                      />
                      <InputHelpToolTip
                        label="Deployer Private Key"
                        placeholder="OX..."
                        value={state.DEPLOYER_PRIVATE_KEY}
                        onChange={(e) =>
                          onChanngValue("DEPLOYER_PRIVATE_KEY", e.target.value)
                        }
                      />
                      <InputHelpToolTip
                        label="Batcer Private Key"
                        placeholder="OX..."
                        value={state.BATCHER_PRIVATE_KEY}
                        onChange={(e) =>
                          onChanngValue("BATCHER_PRIVATE_KEY", e.target.value)
                        }
                      />
                      <InputHelpToolTip
                        label="Sequencer Private Key"
                        placeholder="OX..."
                        value={state.SEQUENCER_PRIVATE_KEY}
                        onChange={(e) =>
                          onChanngValue("SEQUENCER_PRIVATE_KEY", e.target.value)
                        }
                      />
                      <InputHelpToolTip
                        label="Proposer Private Key"
                        placeholder="OX..."
                        value={state.PROPOSER_PRIVATE_KEY}
                        onChange={(e) =>
                          onChanngValue("PROPOSER_PRIVATE_KEY", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            {/* <AccordionItem
              value="item-2"
              className="rounded-xl border border-secondary-dark bg-primary-dark p-6 shadow"
            >
              <AccordionTrigger className="text-lg font-semibold text-primary-dark">
                <div>
                  <div className="text-left">
                    <div>Step 2 / 5 Choose your environment</div>
                    <div className="text-sm font-normal text-quaternary-dark">
                      Choose between testnet and mainnet environments for your
                      rollup deployment.
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="mt-1 text-sm font-semibold text-primary-dark">
                  Select a stack
                </div>
                <div className="mt-3 grid grid-cols-2 gap-5">
                  <div className="flex items-start gap-3 rounded-xl border border-primary-dark p-5 shadow-sm">
                    <img src="/icons/gitpull.svg" className="h-6 w-6" alt="" />
                    <div>
                      <div className="text-xl font-medium text-primary-dark">
                        Testnet
                      </div>
                      <div className="text-md text-primary-dark">Sepolia</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl border border-primary-dark p-5 shadow-sm">
                    <img src="/icons/gitpull.svg" className="h-6 w-6" alt="" />
                    <div>
                      <div className="text-xl font-medium text-primary-dark">
                        Mainnet
                      </div>
                      <div className="text-md text-primary-dark">Sepolia</div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem> */}
          </Accordion>
          {/* <div className="rounded-xl border border-secondary-dark bg-primary-dark p-6 shadow">
            <div className="space-y-4">
              <div className="flex justify-between gap-3">
                <div>
                  <div className="text-md font-medium text-secondary-dark">
                    Select a native token
                  </div>
                  <div className="text-md font-normal text-tertiary-dark">
                    Define the native token for your rollup. Ensure it is a
                    valid ERC-20 token with 18 decimals and is non-rebasing.
                  </div>
                </div>
                <Switch id="airplane-mode" />
              </div>
              <Input label="Token address" placeholder="0x..." required />
              <div className="text-sm text-tertiary-dark">
                Ensure the token&apos;s contract address is on Ethereum
                (Sepolia)
              </div>
              <div className="flex items-center gap-3">
                <img src="/icons/check.svg" alt="" />
                <div className="text-secondary-dark">Valid ERC-20</div>
              </div>
              <div className="flex items-center gap-3">
                <img src="/icons/check-green.svg" alt="" />
                <div className="text-secondary-dark">18 decimals</div>
              </div>
              <div className="flex items-center gap-3">
                <img src="/icons/check-green.svg" alt="" />
                <div className="text-secondary-dark">Non-rebasing</div>
              </div>
            </div>
          </div> */}
          <div className="rounded-xl border border-secondary-dark bg-tertiary-dark p-6 shadow">
            <div className="flex justify-between gap-3">
              <div>
                <div className="text-md font-medium text-secondary-dark">
                  Advanced settings
                </div>
                <div className="text-md font-normal text-tertiary-dark">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </div>
              </div>
              <Switch id="airplane-mode" />
            </div>
            <div className="mt-5">
              <div className="flex gap-5">
                <div>
                  <div className="mb-1.5 text-sm font-medium text-secondary-dark">
                    Block Gas Limit
                  </div>
                  <div className="flex">
                    <div className="rounded-full rounded-r-none border border-primary-dark bg-primary-dark py-2.5 pl-3.5 pr-3 text-md text-[#94969C]">
                      gas
                    </div>
                    <input
                      className="rounded-full rounded-l-none border border-primary-dark bg-primary-dark py-2.5 pl-3.5 pr-3 text-md text-[#94969C]"
                      placeholder="30,000,000"
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-1.5 text-sm font-medium text-secondary-dark">
                    Withdraw Period
                  </div>
                  <div className="flex">
                    <div className="rounded-full rounded-r-none border border-primary-dark bg-primary-dark py-2.5 pl-3.5 pr-3 text-md text-[#94969C]">
                      sec
                    </div>
                    <input
                      className="rounded-full rounded-l-none border border-primary-dark bg-primary-dark py-2.5 pl-3.5 pr-3 text-md text-[#94969C]"
                      placeholder="604,800"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/5">
          <CardUI>
            <div className="mb-5 text-lg font-semibold text-primary-dark">
              Summary
            </div>
            <div className="flex flex-col gap-4">
              <Separator className="h-[1px] bg-[#1F242F]" />
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
                    <img src="/icons/frax.png" className="h-6 w-6" alt="" />
                    <div className="text-md font-semibold">Fraxtal Testnet</div>
                  </div>
                }
                canCopy={false}
              />
              <NetworkInfoItem
                title="Data availability layer"
                value={
                  <div className="flex gap-2">
                    <img src="/icons/near.webp" className="h-6 w-6" alt="" />
                    <div className="text-md font-semibold">Near DA</div>
                  </div>
                }
                canCopy={false}
              />
              <NetworkInfoItem
                title="Environment"
                value={<div className="text-md font-semibold">Testnet</div>}
                canCopy={false}
              />
              <NetworkInfoItem title="Native Token" value="frxETH" />
              <Separator className="hidden h-[1px] bg-[#1F242F]" />
              <div className="hidden">
                <div className="mb-3 text-sm text-quaternary-dark">
                  Costs and pricing
                </div>
                <div className="rounded-xl border border-secondary-dark bg-secondary-dark p-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-md text-tertiary-dark">
                      Deployment cost
                    </div>
                    <div className="gradient-text text-right">Free</div>
                    <div className="text-md text-tertiary-dark">Plan cost</div>
                    <div className="text-right text-md font-semibold text-primary-dark">
                      $15 / month
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardUI>
          <Button className="mt-5 w-full rounded-full border border-[#FFFFFF1F] bg-brand-secondary-dark py-2.5 text-md font-semibold text-white">
            <img src="/icons/plus.svg" className="mr-2 h-5 w-5" /> Deploy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeployRollUp;
