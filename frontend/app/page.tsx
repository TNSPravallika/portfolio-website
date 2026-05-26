// frontend/src/app/page.tsx
// TNS Pravallika — Ultra-Premium HR Portfolio
// Next.js 15 App Router + Tailwind CSS v4 + React
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Projects from "./components/Projects";

/* ================================================================
   TYPES
================================================================ */
interface FormData { name: string; email: string; message: string; }
interface FormState { status: "idle"|"sending"|"success"|"error"; message: string; }

/* ================================================================
   DATA
================================================================ */
const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const GLASS_CARDS = [
  { emoji: "👥", label: "Recruitment",          delay: "0s",    pos: { top:"8%",  right:"2%" } },
  { emoji: "⚙️", label: "HR Operations",        delay: "1.3s",  pos: { top:"44%", left:"-2%" } },
  { emoji: "💜", label: "Employee Engagement",  delay: "2.2s",  pos: { bottom:"20%", right:"8%" } },
  { emoji: "📋", label: "ATS Management",       delay: "0.8s",  pos: { bottom:"2%",  left:"16%" } },
  { emoji: "📊", label: "HR Analytics",         delay: "1.7s",  pos: { top:"30%",  right:"28%" } },
];

const TICKER_ITEMS = [
  "Talent Acquisition", "HR Operations", "Employee Engagement",
  "ATS Management", "Recruitment", "Onboarding", "HR Analytics",
  "Performance Management", "HRIS", "Compliance",
];

const EXPERIENCES = [
  {
    role: "HR Executive",
    company: "BizNexus",
    period: "Recent · Present",
    color: "from-violet-500 to-purple-600",
    icon: "🏢",
    highlights: ["End-to-end HR operations", "Strategic talent acquisition", "Employee engagement initiatives"],
    desc: "Streamlining comprehensive HR operations, managing strategic talent acquisition processes, and driving employee engagement initiatives to support organisational growth.",
  },
  {
    role: "HR Executive Trainee",
    company: "AVA Technology",
    period: "Past Experience",
    color: "from-purple-400 to-violet-500",
    icon: "💼",
    highlights: ["Recruitment workflows", "ATS records management", "HR policy implementation"],
    desc: "Coordinated recruitment workflows, supported onboarding documentation, maintained ATS records, and assisted in crucial HR policy implementation and operations.",
  },
];

const SKILLS = [
  { icon: "🎯", label: "Talent Acquisition",      level: 92 },
  { icon: "🔄", label: "Recruitment Coordination", level: 88 },
  { icon: "⚡", label: "HR Operations",            level: 90 },
  { icon: "🗂️", label: "ATS Tools",               level: 85 },
  { icon: "🤝", label: "Employee Engagement",      level: 87 },
  { icon: "🚀", label: "Onboarding",               level: 86 },
  { icon: "📈", label: "HR Analytics",             level: 78 },
  { icon: "💼", label: "MS Office Suite",          level: 95 },
];

const EDUCATION = [
  {
    icon: "🎓", degree: "MBA — HRM",
    full: "Master of Business Administration in Human Resource Management",
    badge: "Post Graduate",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: "⚡", degree: "B.Tech — ECE",
    full: "Electronics & Communication Engineering",
    badge: "Graduate",
    color: "from-purple-400 to-indigo-500",
  },
];

const STATS = [
  { value: 8,   suffix: "+", label: "Months Experience",       icon: "📅" },
  { value: 2,   suffix: "+", label: "Companies Associated",    icon: "🏆" },
  { value: 100, suffix: "%", label: "Commitment to Excellence", icon: "⭐" },
];

/* ================================================================
   HOOKS
================================================================ */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) setStarted(true);
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const frame = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [started, target, duration]);

  return { count, ref };
}

/* ================================================================
   COMPONENTS
================================================================ */

/* ---- Navbar ---- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "py-3 bg-white/80 backdrop-blur-xl shadow-lg shadow-violet-100/50" : "py-5 bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-gradient-to-br from-violet-600 to-purple-500 rounded-xl flex items-center justify-center shadow-md shadow-violet-300 group-hover:scale-110 transition-transform duration-200">
            <span className="text-white font-bold text-sm">PT</span>
          </div>
          <span className="font-bold text-lg text-violet-700">
            Pravallika<span className="text-purple-400">.TNS</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    active === id
                      ? "text-violet-700 bg-violet-100"
                      : "text-[#1E1B4B]/65 hover:text-violet-700 hover:bg-violet-50"
                  }`}
                >
                  {link.label}
                  {active === id && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-violet-500 rounded-full" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a
         href="/resume.pdf"
          className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md shadow-violet-200 hover:shadow-violet-300 hover:scale-105 active:scale-95 transition-all duration-200 btn-shimmer"
        >
          <span>Hire Me</span>
          <span className="text-base">✨</span>
        </a>

        {/* Mobile */}
        <button
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl bg-violet-50 border border-violet-100"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-0.5 bg-violet-600 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-5 h-0.5 bg-violet-600 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-5 h-0.5 bg-violet-600 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-white/95 backdrop-blur-xl border-t border-violet-100 px-5 py-4">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block px-4 py-3 text-sm font-medium text-[#1E1B4B]/70 hover:text-violet-700 hover:bg-violet-50 rounded-xl transition-all"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a href="mailto:navyapravallika14@gmail.com"
                className="block text-center bg-gradient-to-r from-violet-600 to-purple-500 text-white px-4 py-3 rounded-xl text-sm font-semibold">
                ✨ Hire Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

/* ---- Hero Section ---- */
function HeroSection() {
  useScrollReveal();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[#F0EBFF]">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-violet-400 rounded-full opacity-20 blur-3xl animate-pulse-orb" />
        <div className="absolute bottom-[-8%] left-[-6%] w-[500px] h-[500px] bg-purple-400 rounded-full opacity-18 blur-3xl animate-pulse-orb" style={{animationDelay:"3s"}} />
        <div className="absolute top-[30%] left-[35%] w-[300px] h-[300px] bg-indigo-300 rounded-full opacity-15 blur-2xl animate-pulse-orb" style={{animationDelay:"1.5s"}} />
        {/* Decorative ring */}
        <div className="absolute top-[10%] right-[12%] w-96 h-96 border border-violet-300/20 rounded-full animate-spin-slow" />
        <div className="absolute top-[15%] right-[17%] w-72 h-72 border border-violet-400/15 rounded-full animate-spin-slow" style={{animationDirection:"reverse",animationDuration:"25s"}} />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:"radial-gradient(circle,#7C3AED 1px,transparent 1px)",backgroundSize:"32px 32px"}} />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <div className="space-y-6">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 bg-violet-100 border border-violet-200 text-violet-700 text-xs font-semibold px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for Opportunities
            </span>
          </div>

          <div className="animate-fade-up delay-100">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight text-[#1E1B4B]">
              PRAVALLIKA
              <span className="block text-gradient">TNS</span>
            </h1>
          </div>

          <div className="animate-fade-up delay-200">
            <div className="flex flex-wrap gap-2">
              {["HR Executive","Talent Acquisition","HR Operations"].map((tag) => (
                <span key={tag} className="bg-white/70 backdrop-blur-sm border border-violet-200 text-violet-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className="text-[#1E1B4B]/60 text-base leading-relaxed max-w-md animate-fade-up delay-300">
            Passionate about building high-performing teams and driving organisational excellence through strategic talent acquisition and people-focused HR operations.
          </p>

          <div className="flex flex-wrap gap-3 pt-1 animate-fade-up delay-400">
            <a href="/resume.pdf"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-violet-600 to-purple-500 hover:from-violet-700 hover:to-purple-600 text-white font-bold px-7 py-3.5 rounded-full shadow-xl shadow-violet-300 hover:shadow-violet-400 hover:-translate-y-1 active:translate-y-0 transition-all duration-200 btn-shimmer text-sm">
              📄 Download Resume
            </a>
            <a href="#contact"
              className="inline-flex items-center gap-2.5 border-2 border-violet-300 text-violet-700 hover:bg-violet-50 font-bold px-7 py-3.5 rounded-full hover:-translate-y-1 active:translate-y-0 transition-all duration-200 text-sm">
              Let's Connect →
            </a>
          </div>

          {/* Social proof mini-bar */}
          <div className="flex items-center gap-4 pt-2 animate-fade-up delay-500">
            <div className="flex -space-x-2">
              {["V","P","A","R"].map((l,i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm"
                  style={{background:`hsl(${260+i*15},60%,55%)`}}>
                  {l}
                </div>
              ))}
            </div>
            <p className="text-xs text-[#1E1B4B]/50 font-medium">Trusted by teams across industries</p>
          </div>
        </div>

        {/* Right: Glass visual */}
        <div className="relative h-[500px] md:h-[540px] flex items-center justify-center">
          {/* Central orb */}
          <div className="absolute w-64 h-64 bg-gradient-to-br from-violet-400/30 to-purple-500/20 rounded-full blur-2xl animate-pulse-orb" />

          {/* Main glass card */}
          <div className="glass relative rounded-[2rem] p-8 text-center shadow-2xl shadow-violet-200 z-10 hover-lift">
            <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg shadow-violet-300">
              💼
            </div>
            <h3 className="text-[#1E1B4B] font-bold text-xl mb-1">HR Professional</h3>
            <p className="text-violet-500 text-sm font-medium">Strategic · People-First · Data-Driven</p>
            <div className="mt-4 flex justify-center gap-2">
              {["MBA","HR","2+ Yrs"].map((b) => (
                <span key={b} className="bg-violet-100 text-violet-700 text-[11px] font-bold px-2.5 py-1 rounded-full">
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Floating glass cards */}
          {GLASS_CARDS.map((card) => (
            <div
              key={card.label}
              className="glass absolute rounded-2xl px-4 py-3 flex items-center gap-3 shadow-lg animate-float hover-lift cursor-default z-10 whitespace-nowrap"
              style={{ ...card.pos, animationDelay: card.delay }}
            >
              <span className="text-xl">{card.emoji}</span>
              <span className="text-sm font-semibold text-[#1E1B4B]">{card.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-fade-up delay-800">
        <span className="text-[10px] text-violet-400 font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border-2 border-violet-300 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-violet-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

/* ---- Ticker Strip ---- */
function TickerStrip() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="overflow-hidden bg-gradient-to-r from-violet-700 via-purple-600 to-violet-700 py-3.5 relative">
      <div className="animate-ticker flex gap-0 w-max">
        {items.map((item, i) => (
          <span key={i} className="text-white/90 text-sm font-semibold px-6 flex items-center gap-3">
            {item}
            <span className="text-violet-300/60">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---- About Section ---- */
function AboutSection() {
  return (
    <section id="about" className="py-28 bg-[#F0EBFF] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
      <div className="max-w-6xl mx-auto px-5">
        <SectionTitle pill="Who I Am" highlight="Me">About</SectionTitle>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {/* Main about card */}
          <div className="md:col-span-2 reveal">
            <div className="relative bg-white/60 backdrop-blur-sm border border-violet-100 rounded-3xl p-8 shadow-sm hover-lift noise overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-100 to-transparent rounded-bl-3xl" />
              <p className="text-[#1E1B4B]/70 text-base leading-8 relative z-10">
                Strategic and certified HR professional with hands-on experience across{" "}
                <span className="text-violet-700 font-semibold">recruitment and HR operations</span>.
                Passionate about fostering inclusive cultures, building high-performing teams, and
                implementing <span className="text-violet-700 font-semibold">data-driven HR strategies</span> that
                align with business goals. Adept at designing people-focused initiatives that enhance
                workforce engagement, productivity, and compliance. Driven to leverage expertise in{" "}
                <span className="text-violet-700 font-semibold">talent acquisition and analytics</span> to
                achieve organisational excellence.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 relative z-10">
                {["Strategic Thinker","People-First","Data-Driven","Result-Oriented"].map((t) => (
                  <span key={t} className="bg-violet-100 text-violet-700 text-xs font-semibold px-3 py-1.5 rounded-full border-animate border">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick facts */}
          <div className="flex flex-col gap-4 reveal delay-200">
            {[
              { icon:"📍", label:"Location", value:"India" },
              { icon:"🎓", label:"Education", value:"MBA – HRM" },
              { icon:"💼", label:"Experience", value:"8+ Months" },
              { icon:"✉️", label:"Email", value:"Available" },
            ].map((fact) => (
              <div key={fact.label}
                className="bg-white/70 backdrop-blur-sm border border-violet-100 rounded-2xl px-5 py-4 flex items-center gap-4 hover-lift shadow-sm">
                <span className="text-2xl">{fact.icon}</span>
                <div>
                  <p className="text-[10px] text-violet-400 font-bold uppercase tracking-widest">{fact.label}</p>
                  <p className="text-[#1E1B4B] text-sm font-semibold">{fact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Experience Section ---- */
function ExperienceSection() {
  return (
    <section id="experience" className="py-28 bg-violet-50/70 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
      <div className="max-w-6xl mx-auto px-5">
        <SectionTitle pill="Career Journey" highlight="Experience">My</SectionTitle>
        <div className="relative mt-14">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-violet-400 via-purple-400 to-transparent -translate-x-1/2" />
          <div className="flex flex-col gap-12">
            {EXPERIENCES.map((exp, i) => (
              <div key={exp.role} className={`lg:flex items-start gap-8 ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""} reveal delay-${i*200}`}>
                {/* Card */}
                <div className="flex-1 bg-white/80 backdrop-blur-sm border border-violet-100 rounded-3xl p-7 shadow-sm hover-lift relative overflow-hidden">
                  {/* Accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.color}`} />
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${exp.color} rounded-2xl flex items-center justify-center text-2xl shadow-md`}>
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-violet-700 font-bold text-lg leading-tight">{exp.role}</h3>
                        <p className="text-violet-400 text-sm font-semibold">{exp.company}</p>
                      </div>
                    </div>
                    <span className="bg-violet-100 text-violet-600 text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap">{exp.period}</span>
                  </div>
                  <p className="text-[#1E1B4B]/65 text-sm leading-7 mb-4">{exp.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((h) => (
                      <span key={h} className="bg-violet-50 border border-violet-200 text-violet-700 text-[11px] font-semibold px-2.5 py-1 rounded-full">
                        ✓ {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:flex flex-shrink-0 items-start justify-center pt-5 w-8">
                  <div className="w-5 h-5 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full border-4 border-[#F0EBFF] shadow-lg shadow-violet-300" />
                </div>

                {/* Spacer */}
                <div className="hidden lg:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Skills Section ---- */
function SkillsSection() {
  const [hovered, setHovered] = useState<string|null>(null);

  return (
    <section id="skills" className="py-28 bg-[#F0EBFF] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
      {/* Background decoration */}
      <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-violet-300 rounded-full opacity-10 blur-3xl" />
      <div className="max-w-6xl mx-auto px-5">
        <SectionTitle pill="What I Do" highlight="Competencies">Core</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {SKILLS.map((skill, i) => (
            <div
              key={skill.label}
              className={`reveal delay-${Math.min(i*100,700)} group relative bg-white/70 backdrop-blur-sm border border-violet-100 rounded-2xl p-5 cursor-default hover-lift overflow-hidden`}
              onMouseEnter={() => setHovered(skill.label)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Hover fill */}
              <div className={`absolute inset-0 bg-gradient-to-br from-violet-600 to-purple-500 transition-all duration-350 ${hovered===skill.label?"opacity-100":"opacity-0"} rounded-2xl`} />
              <div className="relative z-10">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">{skill.icon}</div>
                <p className={`font-bold text-sm mb-3 transition-colors ${hovered===skill.label?"text-white":"text-[#1E1B4B]"}`}>
                  {skill.label}
                </p>
                {/* Progress bar */}
                <div className={`h-1.5 rounded-full transition-colors ${hovered===skill.label?"bg-white/25":"bg-violet-100"}`}>
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${hovered===skill.label?"bg-white":"bg-gradient-to-r from-violet-500 to-purple-400"}`}
                    style={{width:`${skill.level}%`, transitionDelay:"0.1s"}}
                  />
                </div>
                <p className={`text-[11px] font-semibold mt-1.5 transition-colors ${hovered===skill.label?"text-white/80":"text-violet-400"}`}>
                  {skill.level}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Education Section ---- */
function EducationSection() {
  return (
    <section id="education" className="py-28 bg-violet-50/70 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
      <div className="max-w-6xl mx-auto px-5">
        <SectionTitle pill="Academic Background" highlight="Education">My</SectionTitle>
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {EDUCATION.map((edu, i) => (
            <div key={edu.degree} className={`reveal delay-${i*200} group`}>
              <div className="relative bg-white/80 backdrop-blur-sm border border-violet-100 rounded-3xl p-8 w-80 text-center shadow-sm hover-lift overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.color}`} />
                <div className={`w-16 h-16 bg-gradient-to-br ${edu.color} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 shadow-lg shadow-violet-200 group-hover:scale-110 transition-transform`}>
                  {edu.icon}
                </div>
                <span className="bg-violet-100 text-violet-600 text-[11px] font-bold px-3 py-1 rounded-full">{edu.badge}</span>
                <h3 className="text-violet-700 font-bold text-xl mt-4 mb-2">{edu.degree}</h3>
                <p className="text-[#1E1B4B]/60 text-sm leading-6">{edu.full}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Stats Section ---- */
function StatCard({ stat }: { stat: typeof STATS[number] }) {
  const { count, ref } = useCountUp(stat.value, 2200);
  return (
    <div ref={ref} className="text-center group">
      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">{stat.icon}</div>
      <div className="text-5xl font-extrabold text-white mb-1">
        {count}{stat.suffix}
      </div>
      <p className="text-violet-200 text-sm font-medium">{stat.label}</p>
    </div>
  );
}

function StatsBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-violet-700 via-purple-600 to-violet-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{backgroundImage:"radial-gradient(circle,white 1px,transparent 1px)",backgroundSize:"24px 24px"}} />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="max-w-4xl mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 relative z-10">
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Contact Section ---- */
function ContactSection() {
  const [form, setForm] = useState<FormData>({ name:"", email:"", message:"" });
  const [state, setState] = useState<FormState>({ status:"idle", message:"" });
  const [focused, setFocused] = useState<string|null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState({ status:"sending", message:"" });
    try {
      const res = await fetch("/api/contact", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setState({ status:"success", message:"Message sent! I'll be in touch soon. 💜" });
        setForm({ name:"", email:"", message:"" });
      } else {
        setState({ status:"error", message:"Something went wrong. Please email me directly." });
      }
    } catch {
      setState({ status:"error", message:"Connection failed. Please email me directly." });
    }
  };

  const inputClass = (name: string) =>
    `w-full rounded-2xl px-5 py-3.5 text-sm font-medium outline-none transition-all duration-200 ${
      focused === name
        ? "bg-white/20 border border-violet-400/60 text-white placeholder:text-violet-300/50 ring-2 ring-violet-400/30"
        : "bg-white/10 border border-white/15 text-white placeholder:text-white/35"
    }`;

  return (
    <section id="contact" className="py-28 bg-gradient-to-b from-[#2A1E2F] via-[#1E1527] to-[#150E1F] relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:"radial-gradient(circle,white 1px,transparent 1px)",backgroundSize:"28px 28px"}} />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-violet-500/20 border border-violet-500/30 text-violet-300 text-xs font-bold px-4 py-2 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse" />
            Open to Opportunities
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-violet-300/60 text-base max-w-md mx-auto">
            Ready to bring exceptional talent and HR optimisation to your organisation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Info */}
          <div className="space-y-4">
            {[
              { icon:"✉️", label:"Email",    value:"navyapravallika14@gmail.com", href:"mailto:navyapravallika14@gmail.com", sub:"Response within 24hrs" },
              { icon:"📱", label:"Phone",    value:"+91 76720 78781",             href:"tel:+917672078781",              sub:"Available Mon–Sat" },
              { icon:"🌍", label:"Location", value:"Open to Opportunities",       href:null,                              sub:"Remote & On-site both" },
              { icon:"💼", label:"LinkedIn", value:"Connect with me",             href:"#",                               sub:"Let's network" },
            ].map((info, i) => (
              <div key={info.label} className={`reveal delay-${i*100}`}>
                <div className="glass-dark rounded-2xl p-5 flex items-center gap-4 hover-lift">
                  <div className="w-12 h-12 bg-violet-500/20 border border-violet-500/30 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    {info.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-violet-400 text-[11px] font-bold uppercase tracking-widest mb-0.5">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-white/80 text-sm font-semibold hover:text-violet-300 transition-colors truncate block">
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-white/80 text-sm font-semibold">{info.value}</span>
                    )}
                    <p className="text-white/35 text-[11px] mt-0.5">{info.sub}</p>
                  </div>
                  <div className="text-violet-500/40 text-lg">→</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="reveal delay-200">
            <div className="glass-dark rounded-3xl p-7">
              <h3 className="text-white font-bold text-lg mb-5">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" placeholder="Your Name"
                  value={form.name} onChange={handleChange} required
                  onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
                  className={inputClass("name")} />
                <input type="email" name="email" placeholder="Your Email"
                  value={form.email} onChange={handleChange} required
                  onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                  className={inputClass("email")} />
                <textarea name="message" placeholder="Your Message" rows={4}
                  value={form.message} onChange={handleChange} required
                  onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                  className={`${inputClass("message")} resize-none`} />

                {state.message && (
                  <p className={`text-sm font-semibold px-4 py-3 rounded-xl ${
                    state.status==="success" ? "bg-green-500/20 text-green-300 border border-green-500/30" : "bg-red-500/20 text-red-300 border border-red-500/30"
                  }`}>
                    {state.message}
                  </p>
                )}

                <button type="submit" disabled={state.status==="sending"}
                  className="w-full bg-gradient-to-r from-violet-600 to-purple-500 hover:from-violet-500 hover:to-purple-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-violet-900/40 btn-shimmer text-sm">
                  {state.status==="sending" ? "Sending…" : "Send Message 📨"}
                </button>
              </form>
            </div>
          </div>
        </div>

        <p className="text-center text-white/20 text-xs mt-16 pt-8 border-t border-white/5">
          © 2024 Pravallika TNS · Crafted with 💜 · All rights reserved
        </p>
      </div>
    </section>
  );
}

/* ---- Section Title ---- */
function SectionTitle({ children, highlight, pill }: {
  children: React.ReactNode; highlight: string; pill: string;
}) {
  return (
    <div className="text-center reveal">
      <span className="inline-flex items-center gap-2 bg-violet-100 border border-violet-200 text-violet-600 text-xs font-bold px-4 py-2 rounded-full mb-4">
        {pill}
      </span>
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E1B4B]">
        {children}{" "}
        <span className="text-gradient">{highlight}</span>
      </h2>
    </div>
  );
}

/* ================================================================
   PAGE ROOT
================================================================ */
export default function HomePage() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TickerStrip />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <StatsBanner />
        <ContactSection />
        <Projects />
      </main>
    </>
  );
}