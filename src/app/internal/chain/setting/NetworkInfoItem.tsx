import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { ReactNode } from "react";

interface NetworkInfoItemProps {
  title: string;
  value: ReactNode;
  canCopy?: boolean;
  canDownload?: boolean;
}
export const NetworkInfoItem = ({
  title,
  value,
  canCopy = true,
  canDownload = false,
}: NetworkInfoItemProps) => {
  return (
    <div>
      <div className="text-sm text-tertiary-dark">{title}</div>
      <div className="mt-1 flex items-center justify-between">
        <div className="text-primary-dark">{value}</div>
        {canCopy && (
          <Button
            variant="ghost"
            className="flex h-auto gap-1.5 p-0 text-sm text-[#CECFD2]"
          >
            {canDownload ? (
              <>
                <img src="/icons/download.svg" className="h-5 w-5" alt="" />
                Download
              </>
            ) : (
              <>
                <Copy className="h-5 w-5" /> Copy{" "}
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  );
};
