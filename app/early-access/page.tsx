"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  MapPin,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
} from "lucide-react";

export default function EarlyAccessPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    platform: "android",
    neighbourhood: "",
    city: "Lagos",
    userRole: "resident", // resident, business, estate_admin
    agreeToTest: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Connect your database logic or API route here (e.g., Supabase / API endpoint)
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8FC] font-sans text-slate-900 selection:bg-[#E53945] selection:text-white">
      {/* HEADER */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#686878] transition hover:text-[#20202A]"
          >
            <ArrowLeft size={18} />
            Back to Homepage
          </Link>

          <div className="flex items-center gap-2">
            <span className="text-xl font-black tracking-tight text-[#20202A]">
              Adugbo<span className="text-[#E53945]">Hub.</span>
            </span>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-20">
        {!submitted ? (
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            {/* LEFT SIDE: Value proposition info */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#F3EDFB] px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#7138B8]">
                <Sparkles size={14} />
                Beta Tester Program
              </span>

              <h1 className="mt-6 text-4xl font-black tracking-tight text-[#20202A] sm:text-5xl">
                Be the first to test <span className="text-[#E53945]">AdugboHub.</span>
              </h1>

              <p className="mt-4 text-base leading-7 text-[#686878]">
                Join our exclusive early testing community. Help shape the future of local neighbourhood connection in your area before the official app store release.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FDE8ED] text-[#D92F4B]">
                    <Smartphone size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#20202A]">Early App Builds</h3>
                    <p className="text-sm text-[#686878]">
                      Get direct TestFlight (iOS) or APK/Play Console access before launch.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EEE7FF] text-[#7138B8]">
                    <Users size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#20202A]">Direct Founder & Dev Feedback</h3>
                    <p className="text-sm text-[#686878]">
                      Your input directly influences feature updates and neighbourhood tools.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E5F6EF] text-[#16865C]">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#20202A]">Verified Community Badge</h3>
                    <p className="text-sm text-[#686878]">
                      Pioneer status badge on your profile when the app goes live.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: REGISTRATION FORM */}
            <div className="rounded-3xl border border-[#EEEAF2] bg-white p-7 shadow-xl shadow-purple-900/5 sm:p-9">
              <h2 className="text-xl font-black text-[#20202A]">Register for Early Access</h2>
              <p className="mt-1 text-xs text-[#686878]">
                Fill out the quick details below to claim your testing spot.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#686878] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Abraham Kehinde"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 bg-[#F9F8FA] px-4 py-3 text-sm font-medium outline-none transition focus:border-[#7138B8] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#686878] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 bg-[#F9F8FA] px-4 py-3 text-sm font-medium outline-none transition focus:border-[#7138B8] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#686878] mb-1.5">
                    Mobile Operating System *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, platform: "android" })}
                      className={`flex items-center justify-center gap-2 rounded-xl border py-3 text-xs font-extrabold transition ${
                        formData.platform === "android"
                          ? "border-[#7138B8] bg-[#EEE7FF] text-[#7138B8]"
                          : "border-gray-200 bg-white text-gray-600"
                      }`}
                    >
                      Android (Play Store)
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, platform: "ios" })}
                      className={`flex items-center justify-center gap-2 rounded-xl border py-3 text-xs font-extrabold transition ${
                        formData.platform === "ios"
                          ? "border-[#7138B8] bg-[#EEE7FF] text-[#7138B8]"
                          : "border-gray-200 bg-white text-gray-600"
                      }`}
                    >
                      iPhone (TestFlight)
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#686878] mb-1.5">
                      Neighbourhood / Area *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Yaba, Ikeja"
                      value={formData.neighbourhood}
                      onChange={(e) => setFormData({ ...formData, neighbourhood: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 bg-[#F9F8FA] px-4 py-3 text-sm font-medium outline-none transition focus:border-[#7138B8] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#686878] mb-1.5">
                      City
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 bg-[#F9F8FA] px-4 py-3 text-sm font-medium outline-none transition focus:border-[#7138B8] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#686878] mb-1.5">
                    Primary Interest
                  </label>
                  <select
                    value={formData.userRole}
                    onChange={(e) => setFormData({ ...formData, userRole: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 bg-[#F9F8FA] px-4 py-3 text-sm font-medium outline-none transition focus:border-[#7138B8] focus:bg-white"
                  >
                    <option value="resident">Resident / Community Member</option>
                    <option value="business">Local Vendor / Business Owner</option>
                    <option value="estate_admin">Estate Manager / Security Official</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full rounded-2xl bg-gradient-to-r from-[#E53945] to-[#7138B8] py-4 text-sm font-extrabold text-white shadow-lg shadow-purple-900/20 transition hover:opacity-95"
                >
                  Submit Registration
                </button>
              </form>
            </div>
          </div>
        ) : (
          /* CONFIRMATION SCREEN */
          <div className="mx-auto max-w-lg rounded-3xl border border-[#EEEAF2] bg-white p-10 text-center shadow-2xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E5F6EF] text-[#16865C]">
              <CheckCircle2 size={36} />
            </div>

            <h2 className="mt-6 text-3xl font-black text-[#20202A]">You're on the testing list!</h2>
            <p className="mt-3 text-sm leading-6 text-[#686878]">
              Thank you, <span className="font-bold text-[#20202A]">{formData.fullName}</span>. We have saved your spot for testing AdugboHub in <span className="font-bold text-[#20202A]">{formData.neighbourhood}</span>.
            </p>
            <p className="mt-2 text-xs text-[#686878]">
              We will send your testing invite and app build links directly to <span className="font-bold text-[#7138B8]">{formData.email}</span> shortly.
            </p>

            <Link
              href="/"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#7138B8] px-6 py-3.5 text-xs font-bold text-white shadow-md transition hover:bg-[#5E2D9E]"
            >
              Return to Homepage
              <ChevronRight size={16} />
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}