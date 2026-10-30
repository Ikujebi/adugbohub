
import {
  BellRing,
  Building2,
  ChevronRight,
  MapPin,
  MessageCircle,
  ShieldCheck,
  ShoppingBag,
  UsersRound,
  UserRoundCheck,
} from "lucide-react";

const quickActions = [
  { icon: MessageCircle, label: "Chat", color: "text-purple-400" },
  { icon: UserRoundCheck, label: "Visitors", color: "text-red-400" },
  { icon: ShoppingBag, label: "Market", color: "text-purple-300" },
  { icon: ShieldCheck, label: "Safety", color: "text-emerald-400" },
];

export function AppPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/20 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="absolute -right-10 top-10 h-48 w-48 rounded-full bg-red-600/10 blur-[90px]"
      />

      <div className="relative z-10 mx-auto w-[290px] rounded-[38px] border border-white/10 bg-[#111116] p-3 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)] sm:w-[320px]">
        <div className="mb-3 flex items-center justify-center">
          <div className="h-1.5 w-16 rounded-full bg-white/10" />
        </div>

        <div className="overflow-hidden rounded-[28px] border border-white/[0.05] bg-[#09090d] p-4">
          <div className="mb-6 flex items-center justify-between text-[10px] text-slate-500">
            <span className="font-semibold text-slate-300">9:41</span>

            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Connected</span>
            </div>
          </div>

          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-purple-400">
                YOUR COMMUNITY
              </p>

              <h3 className="mt-1 text-lg font-bold tracking-tight text-white">
                Welcome home.
              </h3>

              <p className="mt-1 text-[10px] text-slate-500">
                Your neighbourhood, connected.
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-700 to-red-600 text-xs font-bold text-white">
              AH
            </div>
          </div>

          <div className="mb-4 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-950/80 to-[#17111d] p-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold text-purple-300">
                COMMUNITY PORTAL
              </span>

              <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-1 text-[9px] font-semibold text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Active
              </span>
            </div>

            <h4 className="mt-4 text-base font-bold text-white">
              Your neighbourhood
            </h4>

            <p className="mt-1 text-[10px] leading-relaxed text-slate-400">
              Everything happening around your community, in one place.
            </p>

            <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-3 text-[10px] text-slate-300">
              <MapPin size={13} className="text-purple-400" />
              Community dashboard
              <ChevronRight size={13} className="ml-auto text-slate-500" />
            </div>
          </div>

          <div className="mb-5">
            <div className="mb-3 flex items-center justify-between">
              <h4 className="text-xs font-bold text-white">Quick access</h4>
              <span className="text-[9px] text-slate-500">
                Explore services
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {quickActions.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex flex-col items-center gap-2 rounded-xl border border-white/[0.05] bg-white/[0.025] py-3"
                  >
                    <Icon size={17} className={item.color} />
                    <span className="text-[9px] text-slate-400">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
            <div className="mb-3 flex items-center justify-between">
              <h4 className="text-xs font-bold text-white">
                Community updates
              </h4>
              <span className="text-[9px] text-purple-400">View all</span>
            </div>

            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                <BellRing size={15} />
              </div>

              <div>
                <p className="text-[10px] font-semibold text-slate-200">
                  Community announcement
                </p>

                <p className="mt-1 text-[9px] leading-relaxed text-slate-500">
                  Important updates from your community administration.
                </p>

                <span className="mt-2 block text-[8px] text-slate-600">
                  Community notice
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5 flex justify-around border-t border-white/[0.06] pt-4 text-slate-500">
            <div className="flex flex-col items-center gap-1 text-purple-400">
              <Building2 size={15} />
              <span className="text-[8px]">Home</span>
            </div>

            <div className="flex flex-col items-center gap-1">
              <MessageCircle size={15} />
              <span className="text-[8px]">Chat</span>
            </div>

            <div className="flex flex-col items-center gap-1">
              <MapPin size={15} />
              <span className="text-[8px]">Explore</span>
            </div>

            <div className="flex flex-col items-center gap-1">
              <UsersRound size={15} />
              <span className="text-[8px]">Members</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -left-2 top-28 z-20 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#17171e]/95 p-3 shadow-2xl backdrop-blur-xl sm:flex lg:-left-12">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
          <ShieldCheck size={19} />
        </div>

        <div>
          <p className="text-xs font-bold text-white">Visitor access</p>
          <p className="mt-1 text-[10px] text-slate-400">
            Digital gate passes
          </p>
        </div>
      </div>

      <div className="absolute -right-2 bottom-32 z-20 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#17171e]/95 p-3 shadow-2xl backdrop-blur-xl sm:flex lg:-right-12">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
          <MessageCircle size={19} />
        </div>

        <div>
          <p className="text-xs font-bold text-white">Stay connected</p>
          <p className="mt-1 text-[10px] text-slate-400">
            Community communication
          </p>
        </div>
      </div>

      <div className="relative z-10 mt-8 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2 text-[10px] font-semibold tracking-wide text-slate-400">
          <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
          THE NEIGHBOURHOOD, REIMAGINED
        </span>
      </div>
    </div>
  );
}
