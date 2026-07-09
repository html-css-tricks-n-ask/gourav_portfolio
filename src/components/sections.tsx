"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowDown, FaInstagram, FaYoutube, FaFacebook, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { IoMdMail, IoMdPhonePortrait } from "react-icons/io";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  achievements,
  coachingPrograms,
  equipment,
  gallery,
  navItems,
  results,
  stats,
} from "@/lib/content";

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="max-w-3xl space-y-4">
      <div className="flex items-center gap-3">
        <span className="block h-1.5 w-16 rounded-full bg-[#FFD700]" />
        <p className="text-sm uppercase tracking-[0.35em] text-[#FFD700]">{eyebrow}</p>
      </div>
      <h2 className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl">{title}</h2>
      <p className="max-w-3xl text-lg text-slate-300 sm:text-xl">{description}</p>
    </div>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("theme") : null;
    const prefersDark = typeof window !== "undefined" ? window.matchMedia("(prefers-color-scheme: dark)").matches : false;
    const initialTheme = stored === "light" || stored === "dark" ? stored : prefersDark ? "dark" : "light";

    const applyTheme = (themeName: "light" | "dark") => {
      if (typeof window === "undefined") return;
      const root = document.documentElement;
      const body = document.body;
      [root, body].forEach((el) => {
        el.classList.remove("light", "dark");
        el.classList.add(themeName);
        el.dataset.theme = themeName;
      });
    };

    applyTheme(initialTheme);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="#home" className="text-xl font-semibold tracking-[0.25em] text-[#FFD700]">
          GOURAV
        </Link>

        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#FFD700]">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
          >
            {isOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-4 py-4 text-sm text-slate-300">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-[#FFD700]/40 hover:text-[#FFD700]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="hero-section relative flex min-h-screen items-center overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.3),_transparent_30%),linear-gradient(135deg,_#050816_0%,_#0f172a_100%)]">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1800&q=80"
          alt="Archery athlete in action"
          fill
          priority
          className="object-cover opacity-35"
        />
        <div className="hero-overlay absolute inset-0 bg-gradient-to-r from-[#050816] via-[#050816]/70 to-transparent" />
      </div>
      <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-center px-6 py-16 lg:px-8 lg:py-20">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mx-auto w-full max-w-3xl space-y-8 text-center sm:text-left">
          <p className="text-sm uppercase tracking-[0.45em] text-[#FFD700]">Professional Archery Player • Coach</p>
          <h1 className="text-4xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-8xl">
            GOURAV <span className="text-[#FFD700]">SAINI</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-300 sm:text-xl md:text-2xl">
            Precision. Discipline. Excellence.
          </p>
          <div className="mx-auto flex w-full max-w-xl flex-col gap-4 sm:flex-row sm:justify-start">
            <a href="#about" className="rounded-full border border-[#FFD700]/50 bg-[#FFD700] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-105">
              View About
            </a>
            <a href="#contact" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:scale-105">
              Contact Me
            </a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="mt-16 flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-slate-300">
          <span className="h-px w-16 bg-[#FFD700]" /> Scroll to Discover
          <FaArrowDown className="animate-bounce text-[#FFD700]" />
        </motion.div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="mx-auto grid max-w-7xl gap-10 px-6 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-14">
      <div className="space-y-8">
        <SectionHeading eyebrow="About" title="Crafted for precision, built for excellence." description="A professional archer and part-time coach at Shri Ram Senior Secondary School, Gaurav combines elite discipline with a deep commitment to mentoring young athletes." />
        <div className="space-y-4 text-lg leading-8 text-slate-300">
          <p>Gaurav Saini has built his career around relentless practice, calm under pressure, and a focused approach to performance. His training philosophy balances technical detail with the emotional resilience required to win at the highest level.</p>
          <p>As a coach, he emphasizes form, consistency, and a growth mindset for athletes stepping into both competition and life beyond sport.</p>
        </div>
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl shadow-[#FFD700]/10 backdrop-blur-xl">
        <Image src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=80" alt="Gaurav Saini portrait" width={900} height={1100} className="h-full min-h-[320px] rounded-[1.5rem] object-cover sm:min-h-[480px]" />
      </motion.div>
    </section>
  );
}

export function StatsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.07, duration: 0.5 }}
            className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-8 text-center shadow-xl shadow-[#000000]/20 backdrop-blur-xl transition hover:-translate-y-1"
          >
            <p className="text-4xl font-semibold text-[#FFD700] md:text-5xl">{stat.value}{stat.suffix ?? ""}</p>
            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function AchievementsSection() {
  return (
    <section id="achievements" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <SectionHeading eyebrow="Achievements" title="A career defined by consistency and pressure." description="Milestones from national competition to mentoring the next generation of archers." />
      <div className="mt-12 space-y-6">
        {achievements.map((item, idx) => (
          <motion.div key={item.year + item.tournament} initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-8 backdrop-blur-xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#FFD700]">{item.year}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{item.tournament}</h3>
                <p className="mt-2 text-slate-300">{item.location}</p>
              </div>
              <div className="rounded-full border border-[#FFD700]/40 bg-[#FFD700]/10 px-4 py-2 text-sm font-semibold text-[#FFD700]">{item.position} • {item.medal}</div>
            </div>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function ResultsSection() {
  return (
    <section id="results" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
      <SectionHeading eyebrow="Tournament Results" title="Performance data with a premium sporting edge." description="A modern results table for competitions, scores, and podium finishes." />
      <div className="mt-12 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-slate-300">
            <thead className="border-b border-white/10 text-xs uppercase tracking-[0.25em] text-slate-400">
              <tr>
                <th className="whitespace-nowrap px-4 py-4">Tournament</th>
                <th className="whitespace-nowrap px-4 py-4">Location</th>
                <th className="whitespace-nowrap px-4 py-4">Category</th>
                <th className="whitespace-nowrap px-4 py-4">Score</th>
                <th className="whitespace-nowrap px-4 py-4">Position</th>
                <th className="whitespace-nowrap px-4 py-4">Medal</th>
                <th className="whitespace-nowrap px-4 py-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {results.map((row) => (
                <tr key={row.tournament} className="border-b border-white/10 text-white">
                  <td className="px-4 py-4">{row.tournament}</td>
                  <td className="px-4 py-4">{row.location}</td>
                  <td className="px-4 py-4">{row.category}</td>
                  <td className="px-4 py-4">{row.score}</td>
                  <td className="px-4 py-4">{row.position}</td>
                  <td className="px-4 py-4">{row.medal}</td>
                  <td className="px-4 py-4">{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function GallerySection() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
      <SectionHeading eyebrow="Gallery" title="Moments from the arena and the training ground." description="A cinematic gallery of competition, practice, and behind-the-scenes intensity." />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {gallery.map((item) => (
          <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 backdrop-blur-xl">
            <Image src={item.image} alt={item.title} width={900} height={900} className="h-auto w-full object-cover transition hover:scale-105" />
            <div className="p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-[#FFD700]">{item.category}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function EquipmentSection() {
  return (
    <section id="equipment" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <SectionHeading eyebrow="Equipment" title="Tools shaped for precision and trust." description="Every piece reflects a commitment to performance, consistency, and comfort." />
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {equipment.map((item) => (
          <motion.div key={item.name} whileHover={{ y: -6, scale: 1.01 }} className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/80 shadow-xl shadow-[#000000]/20 transition hover:border-[#FFD700]/30">
            <div className="overflow-hidden">
              <Image src={item.image} alt={item.name} width={900} height={700} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[#FFD700]">{item.brand}</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{item.name}</h3>
              <p className="mt-2 text-sm text-slate-400">{item.model}</p>
              <p className="mt-4 text-slate-300">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function CoachingSection() {
  return (
    <section id="coaching" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <SectionHeading eyebrow="Coaching" title="Training programs shaped for every level of ambition." description="From beginners finding their rhythm to advanced athletes sharpening their edge." />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {coachingPrograms.map((program) => (
          <motion.div key={program.title} whileHover={{ y: -6 }} className="group rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-8 shadow-xl shadow-[#000000]/20 transition hover:border-[#FFD700]/30 hover:bg-slate-950/90">
            <p className="text-sm uppercase tracking-[0.25em] text-[#FFD700]">{program.level}</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{program.title}</h3>
            <p className="mt-4 text-slate-300">{program.description}</p>
            <a href="#contact" className="mt-6 inline-flex rounded-full border border-[#FFD700]/40 bg-[#FFD700]/10 px-4 py-2 text-sm font-semibold text-[#FFD700] transition hover:bg-[#FFD700]/20 hover:text-white">
              {program.cta}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
      <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-8 backdrop-blur-xl lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <SectionHeading eyebrow="Contact" title="Let’s build the next milestone together." description="Reach out for training, collaboration, or a conversation around performance and coaching." />
          <div className="space-y-4 text-slate-300">
            <a href="mailto:gaurav@saini.com" className="flex items-center gap-3"><IoMdMail className="text-[#FFD700]" /> gaurav@saini.com</a>
            <a href="tel:+919999999999" className="flex items-center gap-3"><IoMdPhonePortrait className="text-[#FFD700]" /> +91 99999 99999</a>
            <a href="https://instagram.com" className="flex items-center gap-3"><FaInstagram className="text-[#FFD700]" /> Instagram</a>
            <a href="https://facebook.com" className="flex items-center gap-3"><FaFacebook className="text-[#FFD700]" /> Facebook</a>
            <a href="https://youtube.com" className="flex items-center gap-3"><FaYoutube className="text-[#FFD700]" /> YouTube</a>
            <a href="https://wa.me/919999999999" className="flex items-center gap-3"><FaWhatsapp className="text-[#FFD700]" /> WhatsApp</a>
          </div>
        </div>
        <form className="space-y-4 rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6 shadow-xl shadow-[#000000]/20 backdrop-blur-xl">
          <input className="w-full rounded-full border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-[#FFD700]/60 focus:ring-2 focus:ring-[#FFD700]/20" placeholder="Name" />
          <input className="w-full rounded-full border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-[#FFD700]/60 focus:ring-2 focus:ring-[#FFD700]/20" placeholder="Email" />
          <textarea className="min-h-32 w-full rounded-[1.25rem] border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-[#FFD700]/60 focus:ring-2 focus:ring-[#FFD700]/20" placeholder="Message" />
          <button className="w-full rounded-full bg-gradient-to-r from-[#FFD700] to-[#facc15] px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#ffd700]/30">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Gaurav Saini. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#about" className="transition hover:text-[#FFD700]">About</a>
          <a href="#contact" className="transition hover:text-[#FFD700]">Contact</a>
        </div>
      </div>
    </footer>
  );
}
