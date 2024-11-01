import * as React from "react";

import { cn } from "@/lib/utils";
import { Asterisk, HelpCircle } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
}

const InputHelpToolTip = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, required = false, ...props }, ref) => {
    return (
      <div>
        <label htmlFor="username" className="flex text-secondary-dark">
          {label}
          {required && (
            <Asterisk className="h-3.5 w-3.5 text-brand-tertiary-dark" />
          )}
        </label>
        <div className="relative">
          <input
            type={type}
            className={cn(
              "mt-1.5 flex h-10 w-full rounded-full border border-primary-dark bg-primary-dark px-3.5 py-2.5 text-base text-placeholder-dark placeholder:text-placeholder-dark focus:border-[#3B82F6] focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
              className,
            )}
            ref={ref}
            {...props}
          />
          <HelpCircle className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#85888E]" />
        </div>
      </div>
    );
  },
);
InputHelpToolTip.displayName = "Input";

export { InputHelpToolTip };
