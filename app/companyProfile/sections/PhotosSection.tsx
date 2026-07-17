"use client";

import React from "react";
import { ImageIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { C, photos, SectionLabel } from "../lib/shared";

interface PhotosSectionProps {
  setRef: (el: HTMLElement | null) => void;
}

export default function PhotosSection({ setRef }: PhotosSectionProps) {
  return (
    <section id="photos" data-section-id="photos" ref={setRef}>
      <SectionLabel id="SEC-05" title="Photos" icon={ImageIcon} />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((p) => (
          <Card
            key={p.seed}
            style={{ background: C.panel, border: `1px solid ${C.line}`, overflow: "hidden" }}
            className="group"
          >
            <div className="relative w-full h-40 overflow-hidden">
              <img
                src={`https://picsum.photos/seed/${p.seed}/500/380`}
                alt={p.caption}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                className="absolute inset-x-0 bottom-0 px-3 py-2 text-xs"
                style={{ background: "linear-gradient(transparent, #3A3350E6)", color: C.panel }}
              >
                {p.caption}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}