import React from "react";
import ThemeToggler from "../theme-toggler/theme-toggler";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { email } from "@/lib/global-vars";

const Header = () => {
  return (
    <nav className="flex items-center gap-2 justify-between py-4 px-1 md:px-4">
      <div className="flex items-center gap-2 justify-center">
        <div className="p-1.5 md:p-2 rounded-lg bg-zinc-700 dark:bg-white flex items-center justify-center text-white dark:text-zinc-800 font-semibold text-[11px] md:text-md transition-all duration-300">
          {"{ SC }"}
        </div>
        <span className="font-light text-zinc-800 dark:text-white transition-all duration-300 text-sm md:text-2xl">
          SharCode
        </span>
      </div>
      <div className="flex items-center gap-2">
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <a
                href={`mailto:${email}`}
                aria-label={`Email ${email}`}
                className="flex items-center gap-2 bg-white dark:bg-zinc-800 rounded-full py-1.5 px-3 md:px-4 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 active:scale-95 transition-transform"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-[11px] md:text-sm font-medium text-emerald-600 transition-all duration-300">
                  Available
                </span>
              </a>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              Say Hi👋, to {email}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        {/* <ThemeToggler /> */}
      </div>
    </nav>
  );
};

export default Header;
