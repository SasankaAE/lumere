"use client";

import { FocusCards } from "@/components/ui/focus-cards";

export default function GalleryPage() {
  const cards = [
    {
      title: "Luxury Facial Treatment",
      src: "/images/galleryImages/img1.jpg",
    },
    {
      title: "Skin Consultation",
      src: "/images/galleryImages/img2.jpg",
    },
    {
      title: "Relaxing Body Massage",
      src: "/images/galleryImages/img3.jpg",
    },
    {
      title: "Body Scrub Therapy",
      src: "/images/galleryImages/img4.jpg",
    },
    {
      title: "Hair Spa Treatment",
      src: "/images/galleryImages/img5.jpg",
    },
    {
      title: "Luxury Hair Styling",
      src: "/images/galleryImages/img6.jpg",
    },
    {
      title: "Premium Foot Spa",
      src: "/images/galleryImages/img7.jpg",
    },
    {
      title: "Pedicure & Foot Care",
      src: "/images/galleryImages/img8.jpg",
    },
    {
      title: "Premium Beauty Product DisplayWinter Cabin",
      src: "/images/galleryImages/img9.jpg",
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