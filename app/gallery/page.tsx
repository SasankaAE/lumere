"use client";

import { FocusCards } from "@/components/ui/focus-cards";

export default function GalleryPage() {
  const cards = [
    {
      title: "Forest Retreat",
      src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=3000&auto=format&fit=crop",
    },
    {
      title: "Valley Drive",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3540&auto=format&fit=crop",
    },
    {
      title: "Sunset Horizon",
      src: "https://images.unsplash.com/photo-1560184611-ff3e53f00e8f?q=80&w=3540&auto=format&fit=crop",
    },
    {
      title: "Mountain Peak",
      src: "https://images.unsplash.com/photo-1571250375062-b4b4bd6b5a9d?q=80&w=3540&auto=format&fit=crop",
    },
    {
      title: "City Lights",
      src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=3540&auto=format&fit=crop",
    },
    {
      title: "Ocean Waves",
      src: "https://images.unsplash.com/photo-1439405326854-014607f694d7?q=80&w=3540&auto=format&fit=crop",
    },
    {
      title: "Desert Dunes",
      src: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=3540&auto=format&fit=crop",
    },
    {
      title: "Autumn Path",
      src: "https://images.unsplash.com/photo-1507371341162-763b5e419408?q=80&w=3540&auto=format&fit=crop",
    },
    {
      title: "Winter Cabin",
      src: "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?q=80&w=3540&auto=format&fit=crop",
    },
  ];

  return (
    <main
      className="w-full min-h-screen py-16 px-4"
      style={{ backgroundColor: "var(--color-bone)", fontFamily: "var(--font-body)" }}
    >
      <div className="max-w-5xl mx-auto mb-12 text-center">
        <p className="eyebrow mb-3">Photo Collection</p>
        <h1
          className="text-3xl md:text-5xl font-semibold mb-3 text-balance"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-ink)" }}
        >
          Gallery
        </h1>
        <p style={{ color: "var(--color-ink-soft)" }}>
          The full collection — hover any photo to bring it into focus
        </p>
        <div
          className="mx-auto mt-6 h-px w-24"
          style={{ backgroundColor: "var(--color-dew)" }}
        />
      </div>
      <div
        className="max-w-6xl mx-auto rounded-3xl p-4 md:p-8"
        style={{
          backgroundColor: "var(--color-bone-dark)",
          boxShadow: "var(--shadow-soft)",
        }}
      >
        <FocusCards cards={cards} />
      </div>
    </main>
  );
}