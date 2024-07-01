import { TextHeader } from "@/components/ui/TextHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
("@untitledui-icons/react/solid");

const DeployRollUp = () => {
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
        <div className="w-3/5">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="item-1"
              className="rounded-xl border border-secondary-dark bg-primary-dark p-6 shadow"
            >
              <AccordionTrigger className="text-primary-dark">
                <div className="text-left">
                  <div className="no-underline">
                    Step 1 / 5 Build your stack{" "}
                  </div>
                  <div>
                    Configure the foundational elements of your rollup
                    blockchain.
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="w-2/5"></div>
      </div>
    </div>
  );
};

export default DeployRollUp;
