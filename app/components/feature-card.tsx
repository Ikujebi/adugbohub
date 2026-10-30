
import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
  accent: "purple" | "red";
  image: string;
  imageAlt: string;
}

export function FeatureCard({
  icon: Icon,
  number,
  title,
  description,
  accent,
  image,
  imageAlt,
}: FeatureCardProps) {
  const purple = accent === "purple";

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-white/[0.07] bg-[#0d0d12] transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-[#111117]">
      <div
        role="img"
        aria-label={imageAlt}
        className="relative h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]"
        style={{ backgroundImage: `url("${image}")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-transparent to-black/10" />

        <span className="absolute bottom-4 left-5 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[10px] font-semibold tracking-wider text-white backdrop-blur-md">
          ADUGBOHUB
        </span>
      </div>

      <div className="relative flex flex-1 flex-col justify-between p-7 sm:p-8">
        <div
          className={`absolute -right-12 -top-12 h-36 w-36 rounded-full blur-[70px] ${
            purple ? "bg-purple-600/10" : "bg-red-600/10"
          }`}
        />

        <div className="relative">
          <div className="mb-7 flex items-center justify-between">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${
                purple
                  ? "border-purple-500/20 bg-purple-500/10 text-purple-400"
                  : "border-red-500/20 bg-red-500/10 text-red-400"
              }`}
            >
              <Icon size={22} strokeWidth={1.8} />
            </div>

            <span className="font-mono text-sm font-bold text-slate-700 transition-colors group-hover:text-purple-400">
              {number}
            </span>
          </div>

          <h3 className="text-lg font-bold tracking-tight text-white">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-400">
            {description}
          </p>
        </div>

        <div className="relative mt-7 flex items-center justify-between border-t border-white/[0.06] pt-5">
          <span className="text-xs font-medium text-slate-500 transition-colors group-hover:text-slate-300">
            AdugboHub capability
          </span>

          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] text-slate-500 transition-all group-hover:border-purple-500/40 group-hover:bg-purple-600 group-hover:text-white">
            <ArrowUpRight size={15} />
          </span>
        </div>
      </div>
    </article>
  );
}
