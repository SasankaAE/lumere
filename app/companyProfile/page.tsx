"use client";

import React, { useEffect, useRef, useState } from "react";
import { Server, Sparkles } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { C, mono, sans, NAV_SECTIONS, StatusDot, Pill } from "./lib/shared";

import OverviewSection from "./sections/OverviewSection";
import AboutSection from "./sections/AboutSection";
import ReviewsSection from "./sections/ReviewsSection";
import SalariesSection from "./sections/SalariesSection";
import PhotosSection from "./sections/PhotosSection";

/* ---------------------------------- main ------------------------------------ */
export default function CompanyProfile() {
  const [active, setActive] = useState<string>(NAV_SECTIONS[0].id);
  const [pill, setPill] = useState<Pill>({ left: 0, width: 0 });
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const tabRefs = useRef<Record<string, HTMLElement | null>>({});
  const navRef = useRef<HTMLDivElement | null>(null);

  const movePillTo = (id: string): void => {
    const tab = tabRefs.current[id];
    const nav = navRef.current;
    if (tab && nav) {
      const tabRect = tab.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      setPill({
        left: tabRect.top - navRect.top + nav.scrollTop,
        width: tabRect.height,
      });
    }
  };

  useEffect(() => {
    movePillTo(active);
    const onResize = () => movePillTo(active);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement)?.dataset?.sectionId;
          if (entry.isIntersecting && id) setActive(id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string): void => {
    setActive(id);
    const el = sectionRefs.current[id];
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 74;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div
      style={{ background: C.ink, minHeight: "100%", fontFamily: sans, color: C.text }}
      className="w-full"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
      `}</style>

      {/* ---- header / live status bar ---- */}
      <div
        className="sticky top-0 z-20 backdrop-blur px-5 md:px-10 py-3 flex flex-wrap items-center gap-5 justify-between"
        style={{ background: "#FBF7F0D9", borderBottom: `1px solid ${C.line}` }}
      >
        <div className="flex items-center gap-3">
          <div
            className="h-9 w-9 rounded-lg flex items-center justify-center"
            style={{ background: C.cyanSoft, border: `1px solid ${C.cyan}55` }}
          >
            <Server size={16} color={C.cyan} />
          </div>
          <div>
            <div className="font-semibold leading-none" style={{ color: C.text }}>
              Eudora Admin Systems
            </div>
            <div className="text-xs" style={{ color: C.muted, fontFamily: mono }}>
              company-profile / status
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm" style={{ fontFamily: mono }}>
          <StatusDot color={C.cyan} />
          <span style={{ color: C.cyan }}>ALL SYSTEMS NOMINAL</span>
        </div>
      </div>

      {/* ---- mobile: horizontal section nav (sidebar takes over on md+) ---- */}
      <div
        className="md:hidden sticky top-[73px] z-20 px-5"
        style={{ background: "#FBF7F0D9", backdropFilter: "blur(6px)", borderBottom: `1px solid ${C.line}` }}
      >
        <div className="flex gap-1 overflow-x-auto no-scrollbar" style={{ scrollbarWidth: "none" }}>
          {NAV_SECTIONS.map((s) => {
            const isActive = active === s.id;
            return (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className="px-4 py-3 text-sm whitespace-nowrap transition-colors duration-200"
                style={{
                  fontFamily: mono,
                  letterSpacing: "0.02em",
                  color: isActive ? C.cyan : C.muted,
                  background: "transparent",
                  borderBottom: `2px solid ${isActive ? C.cyan : "transparent"}`,
                  cursor: "pointer",
                }}
              >
                {s.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ---- body: left sidebar nav + content ---- */}
      <div className="max-w-7xl mx-auto flex items-start">
        {/* ---- desktop: left sidebar section nav ---- */}
        <aside
          className="hidden md:block sticky shrink-0 self-start"
          style={{ top: 73, width: 220, height: "calc(100vh - 73px)" }}
        >
          <div className="px-4 py-8 h-full" style={{ borderRight: `1px solid ${C.line}` }}>
            <div ref={navRef} className="relative flex flex-col gap-1">
              <span
                className="absolute left-0 w-[2px] rounded-full transition-all duration-300 ease-out"
                style={{ top: pill.left, height: pill.width, background: C.cyan }}
              />
              {NAV_SECTIONS.map((s) => {
                const isActive = active === s.id;
                return (
                  <button
                    key={s.id}
                    ref={(el) => {
                      tabRefs.current[s.id] = el;
                    }}
                    onClick={() => scrollToSection(s.id)}
                    className="relative text-left px-3 py-2.5 rounded-md text-sm transition-colors duration-200"
                    style={{
                      fontFamily: mono,
                      letterSpacing: "0.02em",
                      color: isActive ? C.cyan : C.muted,
                      background: isActive ? C.cyanSoft : "transparent",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    {s.label}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* ---- main content ---- */}
        <div className="flex-1 min-w-0 px-5 md:px-10 py-10 space-y-20">
          <OverviewSection
            setRef={(el) => {
              sectionRefs.current.overview = el;
            }}
          />

          <Separator style={{ background: C.line }} />

          <AboutSection
            setRef={(el) => {
              sectionRefs.current.about = el;
            }}
          />

          <Separator style={{ background: C.line }} />

          <ReviewsSection
            setRef={(el) => {
              sectionRefs.current.reviews = el;
            }}
          />

          <Separator style={{ background: C.line }} />

          <SalariesSection
            setRef={(el) => {
              sectionRefs.current.salaries = el;
            }}
          />

          <Separator style={{ background: C.line }} />

          <PhotosSection
            setRef={(el) => {
              sectionRefs.current.photos = el;
            }}
          />

          <div
            className="flex items-center gap-2 justify-center pt-4 text-xs"
            style={{ color: C.muted, fontFamily: mono }}
          >
            <Sparkles size={12} color={C.cyan} />
            Eudora Admin Systems · company profile snapshot
          </div>
        </div>
      </div>
    </div>
  );
}