
import type { LucideIcon } from "lucide-react";

interface AudienceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  index: number;
}

export function AudienceCard({
  icon: Icon,
  title,
  description,
  image,
  imageAlt,
  index,
}: AudienceCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/[0.07] bg-[#0d0d12] transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30">
      <div
        role="img"
        aria-label={imageAlt}
        className="h-56 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]"
        style={{ backgroundImage: `url("${image}")` }}
      />

      <div className="relative p-8">
        <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-900/80 to-red-950/80 text-purple-300 ring-1 ring-white/[0.08]">
          <Icon size={25} />
        </div>

        <h3 className="text-xl font-bold text-white">{title}</h3>

        <p className="mt-4 text-sm leading-7 text-slate-400">
          {description}
        </p>

        <div className="mt-8 flex items-center justify-between border-t border-white/[0.07] pt-5">
          <span className="text-xs font-semibold text-slate-500">
            AdugboHub ecosystem
          </span>

          <span className="font-mono text-xs text-purple-400">
            0{index + 1}
          </span>
        </div>
      </div>
    </article>
  );
}
