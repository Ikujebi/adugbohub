
import type { ReactNode } from "react";

interface SectionLabelProps {
  number: string;
  children: ReactNode;
}

export function SectionLabel({
  number,
  children,
}: SectionLabelProps) {
  return (
    <div className="mb-5 inline-flex items-center gap-3">
      <span className="text-xs font-bold tracking-[0.18em] text-purple-400">
        {number}
      </span>

      <span className="h-px w-8 bg-gradient-to-r from-purple-500 to-red-500" />

      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
        {children}
      </span>
    </div>
  );
}
