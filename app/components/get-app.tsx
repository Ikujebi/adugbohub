"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bell,
  Check,
  ChevronRight,
  Heart,
  MapPin,
  MessageCircle,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Users,
  Wallet,
  Zap,
  X,
  Menu,
} from "lucide-react";
import logo from "@/public/images/logo2.png";

// Feature dataset with working high-quality image placeholders
const features = [
  {
    number: "01",
    title: "Your people. Your community.",
    description:
      "Connect with neighbours, join conversations and stay close to the people around you.",
    icon: Users,
    color: "bg-[#FDE8ED] text-[#D92F4B]",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Community members connecting",
  },
  {
    number: "02",
    title: "Discover what's nearby.",
    description:
      "Find local shops, services, skilled professionals and useful businesses around your neighbourhood.",
    icon: ShoppingBag,
    color: "bg-[#EEE7FF] text-[#7138B8]",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Local neighbourhood marketplace",
  },
  {
    number: "03",
    title: "Feel safer and more organised.",
    description:
      "Make visitor management and everyday neighbourhood coordination easier.",
    icon: ShieldCheck,
    color: "bg-[#E5F6EF] text-[#16865C]",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Neighbourhood visitor management",
  },
];

const steps = [
  {
    number: "01",
    title: "Get the app",
    description: "Download AdugboHub when it becomes available on your app store.",
  },
  {
    number: "02",
    title: "Join your community",
    description: "Connect with your neighbourhood and become part of the conversation.",
  },
  {
    number: "03",
    title: "Explore more",
    description: "Discover local services, community updates and useful features.",
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("Community");
  const [notification, setNotification] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#E53945] selection:text-white">
      {/* HEADER / NAVIGATION BAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#20152F]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#E53945] to-[#7138B8] font-black text-white shadow-md">
              <Image src={logo} alt="AdugboHub Logo" width={40} height={40} />
            </div>
            <span className="text-xl font-black text-white tracking-tight">
              Adugbo<span className="text-[#FF6877]">Hub.</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 text-sm font-semibold text-white/80 md:flex">
            <a href="#explore-app" className="transition hover:text-white">Features</a>
            <a href="#how-it-works" className="transition hover:text-white">How It Works</a>
            <a href="#community" className="transition hover:text-white">Community</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={() => alert("Notification feature demo clicked")} 
              className="relative p-2 text-white/80 hover:text-white transition"
              title="Notifications"
            >
              <Bell size={20} />
              {notification && <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-[#E53945]"></span>}
            </button>
            <Link 
              href="/early-access" 
              className="rounded-full bg-gradient-to-r from-[#E53945] to-[#7138B8] px-5 py-2.5 text-xs font-bold text-white shadow-lg transition hover:opacity-90"
            >
              Get Early Access
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="border-b border-white/10 bg-[#20152F] px-5 py-4 md:hidden">
            <nav className="flex flex-col gap-4 text-sm font-medium text-white/90">
              <a href="#explore-app" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
              <a href="#community" onClick={() => setMobileMenuOpen(false)}>Community</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <Link 
                href="/early-access" 
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 text-center rounded-full bg-[#E53945] py-2 text-xs font-bold text-white"
              >
                Get Early Access
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-[#20152F] text-white">
        {/* Glow ambient effects */}
        <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#E53945]/30 blur-[110px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-[480px] w-[480px] rounded-full bg-[#7138B8]/40 blur-[120px]" />

        {/* Radial Grid Background */}
        <div className="absolute inset-0 -z-10 opacity-[0.09] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-28">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold tracking-wide text-white/90 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6877] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF6877]" />
              </span>
              THE NEIGHBOURHOOD APP
              <Sparkles size={14} className="text-[#FFB7C1]" />
            </div>

            <h1 className="mt-8 max-w-2xl text-5xl font-black leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Your world.
              <br />
              Your people.
              <br />
              <span className="bg-gradient-to-r from-[#FF7C89] via-[#F5A4D3] to-[#B89AFF] bg-clip-text text-transparent">
                One neighbourhood.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
              Life is better when your neighbourhood is connected. Discover
              local businesses, connect with neighbours, get community updates
              and make everyday life easier with AdugboHub.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/early-access" className="flex min-w-[190px] items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3.5 backdrop-blur transition hover:bg-white/15 cursor-pointer">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#20152F]">
                  <Smartphone size={23} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                    Android
                  </p>
                  <p className="font-bold">Test App Build</p>
                </div>
              </Link>

              <Link href="/early-access" className="flex min-w-[190px] items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3.5 backdrop-blur transition hover:bg-white/15 cursor-pointer">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#20152F]">
                  <Smartphone size={23} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                    iPhone
                  </p>
                  <p className="font-bold">Test App Build</p>
                </div>
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-white/50">
              <span className="flex items-center gap-2">
                <Check size={16} className="text-[#8FE1B9]" />
                Built around community
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />
              <span className="flex items-center gap-2">
                <Check size={16} className="text-[#8FE1B9]" />
                Designed for everyday life
              </span>
            </div>

            <a
              href="#explore-app"
              className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-[#FF9BA8]"
            >
              Explore what you can do
              <ArrowDown size={17} className="animate-bounce" />
            </a>
          </div>

          {/* PHONE SHOWCASE */}
          <div className="relative mx-auto w-full max-w-[460px]">
            {/* Background concentric rings */}
            <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 sm:h-[470px] sm:w-[470px]" />
            <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 sm:h-[390px] sm:w-[390px]" />

            {/* Floating Card 1 */}
            <div className="absolute -left-4 top-20 z-20 hidden animate-[bounce_4s_infinite] rounded-2xl border border-white/20 bg-white p-4 text-[#20152F] shadow-2xl sm:block sm:-left-10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FDE8ED] text-[#D92F4B]">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-xs font-extrabold">Community chat</p>
                  <p className="text-[10px] text-gray-500">Stay connected</p>
                </div>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute -right-3 top-44 z-20 hidden animate-[bounce_5s_infinite] rounded-2xl border border-white/20 bg-white p-4 text-[#20152F] shadow-2xl sm:block sm:-right-12">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E5F6EF] text-[#16865C]">
                  <Bell size={18} />
                </div>
                <div>
                  <p className="text-xs font-extrabold">Community updates</p>
                  <p className="text-[10px] text-gray-500">Stay in the know</p>
                </div>
              </div>
            </div>

            {/* Smartphone Mockup Frame */}
            <div className="relative mx-auto w-[270px] rounded-[43px] border-[7px] border-[#49385B] bg-[#0D0914] p-2 shadow-[0_35px_100px_rgba(0,0,0,0.5)] sm:w-[300px]">
              <div className="relative overflow-hidden rounded-[33px] bg-[#FAF8FC]">
                {/* Dynamic Notch */}
                <div className="flex h-9 items-center justify-center bg-[#FAF8FC]">
                  <div className="h-5 w-20 rounded-full bg-[#0D0914]" />
                </div>

                {/* App Screen Content */}
                <div className="px-4 pb-5 pt-3 text-[#20152F]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-medium text-gray-500">Welcome to</p>
                      <p className="text-lg font-black tracking-tight">
                        Adugbo<span className="text-[#E53945]">Hub.</span>
                      </p>
                    </div>
                    <button 
                      onClick={() => setNotification(!notification)}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm transition hover:scale-105"
                    >
                      <Bell size={17} className={notification ? "text-[#E53945]" : "text-[#7138B8]"} />
                    </button>
                  </div>

                  {/* Dynamic Gradient Card */}
                  <div className="mt-5 rounded-2xl bg-gradient-to-br from-[#E53945] to-[#7138B8] p-4 text-white shadow-md">
                    <p className="text-[10px] font-semibold text-white/75">
                      YOUR NEIGHBOURHOOD
                    </p>
                    <p className="mt-2 text-xl font-black leading-tight">
                      Good things
                      <br />
                      happen together.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-white/85">
                      <MapPin size={12} />
                      Your community starts here
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <p className="text-xs font-extrabold">Explore AdugboHub</p>
                    <span className="text-[10px] font-bold text-[#7138B8] cursor-pointer hover:underline">See all</span>
                  </div>

                  {/* Grid Navigation inside mockup */}
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <div 
                      onClick={() => setActiveTab("Community")}
                      className={`rounded-xl p-3 shadow-sm cursor-pointer transition ${activeTab === 'Community' ? 'bg-[#FDE8ED] border border-[#D92F4B]/30' : 'bg-white'}`}
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FDE8ED] text-[#D92F4B]">
                        <Users size={16} />
                      </div>
                      <p className="mt-2 text-[10px] font-extrabold">Community</p>
                      <p className="mt-1 text-[9px] text-gray-500">Connect with neighbours</p>
                    </div>

                    <div 
                      onClick={() => setActiveTab("Marketplace")}
                      className={`rounded-xl p-3 shadow-sm cursor-pointer transition ${activeTab === 'Marketplace' ? 'bg-[#EEE7FF] border border-[#7138B8]/30' : 'bg-white'}`}
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EEE7FF] text-[#7138B8]">
                        <ShoppingBag size={16} />
                      </div>
                      <p className="mt-2 text-[10px] font-extrabold">Marketplace</p>
                      <p className="mt-1 text-[9px] text-gray-500">Discover local shops</p>
                    </div>

                    <div 
                      onClick={() => setActiveTab("Visitors")}
                      className={`rounded-xl p-3 shadow-sm cursor-pointer transition ${activeTab === 'Visitors' ? 'bg-[#E5F6EF] border border-[#16865C]/30' : 'bg-white'}`}
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E5F6EF] text-[#16865C]">
                        <ShieldCheck size={16} />
                      </div>
                      <p className="mt-2 text-[10px] font-extrabold">Visitors</p>
                      <p className="mt-1 text-[9px] text-gray-500">Manage visits</p>
                    </div>

                    <div 
                      onClick={() => setActiveTab("Messages")}
                      className={`rounded-xl p-3 shadow-sm cursor-pointer transition ${activeTab === 'Messages' ? 'bg-[#FFF0DC] border border-[#D98A23]/30' : 'bg-white'}`}
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFF0DC] text-[#D98A23]">
                        <MessageCircle size={16} />
                      </div>
                      <p className="mt-2 text-[10px] font-extrabold">Messages</p>
                      <p className="mt-1 text-[9px] text-gray-500">Keep in touch</p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-xl bg-white p-3 shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FDE8ED] text-[#D92F4B]">
                        <Heart size={16} />
                      </div>
                      <div>
                        <p className="text-[10px] font-extrabold">A better-connected community</p>
                        <p className="text-[9px] text-gray-500">Everything closer to home.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Home indicator bar */}
                <div className="flex h-7 items-center justify-center bg-[#FAF8FC]">
                  <div className="h-1 w-20 rounded-full bg-[#20152F]" />
                </div>
              </div>
            </div>

            {/* Bottom floating tag */}
            <div className="absolute -bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-white px-5 py-3 text-xs font-extrabold text-[#20152F] shadow-xl">
              <Sparkles size={15} className="text-[#E53945]" />
              A whole neighbourhood in your pocket
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-2 w-full bg-gradient-to-r from-[#E53945] via-[#B45BCC] to-[#7138B8]" />
      </section>

      {/* BRAND PROMISE STRIP */}
      <section className="border-b border-[#EEEAF2] bg-white py-7">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5 text-sm font-bold text-[#686878] sm:justify-between">
          <span className="flex items-center gap-2 transition hover:text-[#E53945] cursor-pointer">
            <Users size={17} className="text-[#E53945]" />
            Community connections
          </span>
          <span className="flex items-center gap-2 transition hover:text-[#7138B8] cursor-pointer">
            <MapPin size={17} className="text-[#7138B8]" />
            Local discovery
          </span>
          <span className="flex items-center gap-2 transition hover:text-[#16865C] cursor-pointer">
            <ShieldCheck size={17} className="text-[#16865C]" />
            Neighbourhood coordination
          </span>
          <span className="flex items-center gap-2 transition hover:text-[#D98A23] cursor-pointer">
            <Zap size={17} className="text-[#D98A23]" />
            Everyday convenience
          </span>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="explore-app" className="scroll-mt-24 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#F3EDFB] px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-[#7138B8]">
              <Sparkles size={14} />
              More than an app
            </span>
            <h2 className="mt-6 text-4xl font-black tracking-tight text-[#20202A] sm:text-5xl">
              Everything that makes a{" "}
              <span className="text-[#E53945]">neighbourhood</span> feel like home.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#686878]">
              AdugboHub brings useful neighbourhood experiences together in
              one place, helping people and communities stay connected.
            </p>
          </div>

          <div className="mt-16 grid gap-7 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.number}
                  className="group overflow-hidden rounded-[28px] border border-[#EEEAF2] bg-white transition duration-300 hover:-translate-y-2 hover:border-[#D9C8EF] hover:shadow-[0_24px_60px_rgba(60,35,90,0.10)]"
                >
                  <div className="relative h-56 overflow-hidden bg-[#F8F6FA]">
                    <img
                      src={feature.image}
                      alt={feature.imageAlt}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-black tracking-widest text-[#20202A] shadow-sm">
                      {feature.number}
                    </span>
                  </div>

                  <div className="p-7">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${feature.color}`}>
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-5 text-xl font-black tracking-tight text-[#20202A]">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#686878]">
                      {feature.description}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-xs font-extrabold text-[#7138B8] cursor-pointer group-hover:translate-x-1 transition">
                      Made for neighbourhood life
                      <ArrowUpRight size={15} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW TO GET STARTED */}
      <section id="how-it-works" className="relative overflow-hidden bg-[#F8F5FC] py-24 sm:py-28">
        <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#E9DDF9] blur-[90px]" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-[#7138B8] shadow-sm">
              Your next chapter starts here
            </span>
            <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-[#20202A] sm:text-5xl">
              Getting connected should be{" "}
              <span className="text-[#E53945]">easy.</span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-[#686878]">
              When the app launches, getting started will be simple. Here's
              what your AdugboHub journey will look like.
            </p>

            <Link
              href="/early-access"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#7138B8] px-6 py-4 text-sm font-extrabold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-1 hover:bg-[#5E2D9E]"
            >
              Get early access to test
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="space-y-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex gap-5 rounded-3xl border border-white bg-white p-6 shadow-[0_10px_35px_rgba(60,35,90,0.05)] transition hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FDE8ED] text-sm font-black text-[#D92F4B]">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-black text-[#20202A]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#686878]">
                    {step.description}
                  </p>
                </div>
                <ChevronRight size={18} className="ml-auto mt-1 shrink-0 text-[#B7A9C8]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD CTA */}
      <section id="download" className="px-5 py-24 sm:px-8 sm:py-28">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] bg-gradient-to-br from-[#E53945] via-[#A94391] to-[#7138B8] px-7 py-16 text-center text-white shadow-[0_30px_80px_rgba(113,56,184,0.22)] sm:px-14 sm:py-20">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full border border-white/15" />
          <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full border border-white/15" />
          <div className="absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] border border-white/20 bg-white/15 backdrop-blur">
              <Smartphone size={30} />
            </div>

            <p className="mt-7 text-xs font-black uppercase tracking-[0.25em] text-white/75">
              Be part of something closer
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
              Your neighbourhood is calling.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
              AdugboHub is getting ready to bring communities closer. Register now to participate in our early access testing.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                href="/early-access"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/15 px-6 py-4 text-left backdrop-blur transition hover:bg-white/25 cursor-pointer"
              >
                <Smartphone size={25} />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/70">
                    Join Beta Testing
                  </p>
                  <p className="font-extrabold">Register for Early Access</p>
                </div>
              </Link>
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 font-bold text-white/90 transition hover:text-white"
            >
              Get in touch with us
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-[#EEEAF2] bg-white py-12 text-[#686878]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-[#E53945] to-[#7138B8] font-black text-white text-xs">
                A
              </div>
              <span className="text-lg font-black text-[#20202A] tracking-tight">
                Adugbo<span className="text-[#E53945]">Hub.</span>
              </span>
            </div>
            <p className="text-xs text-[#686878]">
              © {new Date().getFullYear()} AdugboHub. All rights reserved. Connecting neighbourhoods everywhere.
            </p>
            <div className="flex gap-6 text-xs font-semibold">
              <a href="#" className="hover:text-[#7138B8]">Privacy Policy</a>
              <a href="#" className="hover:text-[#7138B8]">Terms of Service</a>
              <a href="#" className="hover:text-[#7138B8]">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}