
import Image from "next/image";
import {
  Apple,
  ArrowRight,
  Download,
  Smartphone,
} from "lucide-react";

export default function AppDownloadSection() {
  return (
    <section
      id="get-app"
      className="scroll-mt-24 overflow-hidden bg-brand-soft py-20 sm:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2">
        {/* Text content */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-lavender px-4 py-2 text-sm font-semibold text-brand-purple">
            <Smartphone size={16} />
            AdugboHub Mobile App
          </span>

          <h2 className="mt-6 max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-5xl">
            Your neighbourhood, right in your pocket.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-brand-muted">
            Stay connected to your community wherever you go. Get important
            updates, discover local businesses, connect with neighbours, and
            make everyday community life easier with AdugboHub.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-3 rounded-2xl border border-brand-border bg-white px-5 py-4">
              <Download className="text-brand-red" size={24} />
              <div>
                <p className="text-xs text-brand-muted">Android app</p>
                <p className="font-bold text-brand-ink">
                  Coming soon
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-brand-border bg-white px-5 py-4">
              <Apple className="text-brand-purple" size={24} />
              <div>
                <p className="text-xs text-brand-muted">iOS app</p>
                <p className="font-bold text-brand-ink">
                  Coming soon
                </p>
              </div>
            </div>
          </div>

          <p className="mt-6 text-sm text-brand-muted">
            App download links will be available here when the official
            store listings are ready.
          </p>

          <a
            href="/#discover"
            className="mt-7 inline-flex items-center gap-2 font-bold text-brand-red transition hover:text-brand-purple"
          >
            Explore AdugboHub features
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Image */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-brand-lavender blur-3xl" />
          <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-brand-pink blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-brand-border bg-white p-3 shadow-xl">
            <Image
              src="/images/community-chat.jpg"
              alt="Neighbours connecting through AdugboHub"
              width={900}
              height={700}
              className="h-[320px] w-full rounded-[1.5rem] object-cover sm:h-[420px]"
            />

            <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/60 bg-white/95 p-5 shadow-lg backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-brand-pink p-3 text-brand-red">
                  <Smartphone size={24} />
                </div>

                <div>
                  <p className="font-bold text-brand-ink">
                    Your community, connected
                  </p>
                  <p className="text-sm text-brand-muted">
                    One place for neighbourhood life
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
